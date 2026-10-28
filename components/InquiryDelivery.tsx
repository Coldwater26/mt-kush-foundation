import { site } from "@/lib/site";

export function InquiryDelivery({ subject }: { subject: string }) {
  return (
    <>
      <input type="hidden" name="_subject" value={`Montana Kush Community Foundation — ${subject}`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${site.url}/message-sent`} />
      <p className="text-sm leading-7 text-smoke">
        Your completed form will be delivered to <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> through FormSubmit.
        Complete the verification step on the next screen to finish sending.
        Please do not include banking details, Social Security numbers, or private medical information.
      </p>
    </>
  );
}
