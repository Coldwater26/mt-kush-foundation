import { readFile, writeFile } from "node:fs/promises";

// Generate crawlable HTML and its matching schema from the same content.
const root = new URL("../", import.meta.url);
const catalog = JSON.parse(await readFile(new URL("lib/media-catalog.json", root), "utf8"));
const video = catalog.find((item) => item.slug === "microgrant-application-guide");
if (!video?.transcript) throw new Error("The grant guide requires its recorded transcript.");
const base = "https://www.montanakush.org";
const page = `${base}/grants.html`;
const videoId = `${base}/media/${video.slug}#video`;
const title = "How to apply for a Montana Kush Community Foundation grant";
const description = "Follow four steps to request $500, $1,000, or $1,500 for a community project in Montana: provide contact information, describe the project, explain the funding request, and review and submit the application.";
const steps = [
  ["Your information", "Enter your contact name and email, applicant type, and organization and role if applicable. A phone number and website or project link are optional."],
  ["Your project", "Name your project, choose the closest Foundation program, and identify the Montana communities it will serve. Describe the activity, local need, expected beneficiaries and outcomes, project timeline, and when funds are needed."],
  ["Your funding request", "Select $500, $1,000, or $1,500. Describe the overall project budget and list how you will use the requested grant, including each expense and its estimated cost. Other funding secured or pending is optional."],
  ["Confirmation and submission", "Read and check the three applicant acknowledgments. Select Review application, check your answers, and use Edit application if needed. Then select Submit application and complete FormSubmit’s verification step. Reviewing your answers alone does not send your application. Applications go to pepper@montanakush.org; submitting does not guarantee an award."],
];
const escapeHtml = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoObject", "@id": videoId,
      name: video.title, description: video.description,
      thumbnailUrl: [`${base}${video.poster}`],
      uploadDate: `${video.date}T00:00:00-06:00`,
      duration: `PT${video.seconds}S`, contentUrl: `${base}${video.video}`,
      url: `${base}/media/${video.slug}`, inLanguage: "en-US",
      transcript: video.transcript,
      publisher: { "@type": "Organization", "@id": `${base}/#organization`, name: "Montana Kush Community Foundation", url: base },
    },
    {
      "@type": "HowTo", "@id": `${page}#how-to-apply`,
      name: title, description, inLanguage: "en-US",
      publisher: { "@id": `${base}/#organization` },
      video: { "@id": videoId },
      step: steps.map(([name, text], index) => ({
        "@type": "HowToStep", position: index + 1, name, text,
        url: `${page}#apply-step-${index + 1}`,
      })),
    },
  ],
};
const markup = `<script type="application/ld+json">${JSON.stringify(graph).replaceAll("<", "\\u003c")}</script>`;
const guide = `<section class="mk-section" aria-labelledby="how-to-apply">
<h2 id="how-to-apply">${escapeHtml(title)}</h2>
<p>${escapeHtml(description)}</p>
<ol style="padding-left:24px">${steps.map(([name, text], index) => `<li id="apply-step-${index + 1}" style="margin:18px 0;scroll-margin-top:24px"><h3 style="font-size:17px;margin:0 0 6px">${escapeHtml(name)}</h3><p>${escapeHtml(text)}</p></li>`).join("\n")}</ol>
<p><a href="#mk-application">Begin your application</a> · <a href="/grant-calendar">Check quarterly deadlines</a></p>
</section>
<details class="mk-section" id="guide-transcript">
<summary style="cursor:pointer;font-size:20px;font-weight:700">Read the full application video transcript</summary>
<p style="margin-top:20px;line-height:1.8">${escapeHtml(video.transcript)}</p>
<p><a href="${escapeHtml(video.transcriptFile)}">Download the transcript</a> · <a href="${escapeHtml(video.captions)}">Download captions</a></p>
</details>`;
const file = new URL("public/grants.html", root);
let html = await readFile(file, "utf8");
function insertBlock(name, content, before) {
  const start = `<!-- ${name}:start -->`;
  const end = `<!-- ${name}:end -->`;
  const block = `${start}\n${content}\n${end}\n`;
  if (html.includes(start)) {
    const first = html.indexOf(start), last = html.indexOf(end, first);
    if (last < first) throw new Error(`Missing closing marker: ${name}`);
    html = html.slice(0, first) + block.trimEnd() + html.slice(last + end.length);
  } else {
    if (!html.includes(before)) throw new Error(`Missing insertion point: ${name}`);
    html = html.replace(before, block + before);
  }
}
insertBlock("grant-guide-schema", markup, "</head>");
insertBlock("grant-guide-content", guide, '<form id="mk-application"');
await writeFile(file, html);
console.log("Generated static grant instructions, transcript, VideoObject, and HowTo.");
