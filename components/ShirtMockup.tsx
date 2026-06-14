import { FoundationLogo } from "./FoundationLogo";

type ShirtPanelProps = {
  side: "front" | "back";
};

function ShirtPanel({ side }: ShirtPanelProps) {
  const isBack = side === "back";

  return (
    <div className="bg-parchment p-5">
      <div className="mb-4 flex items-center justify-between border-b-2 border-forest pb-3">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-copper">{isBack ? "Back" : "Front"}</p>
        <p className="text-xs font-black uppercase tracking-[0.12em] text-forest/55">
          {isBack ? "Statement print" : "Left chest"}
        </p>
      </div>

      <div className="relative mx-auto aspect-[0.78] max-w-[370px]">
        <div className="absolute left-[2%] top-[13%] h-[30%] w-[26%] -rotate-[12deg] bg-[#121917] shadow-[inset_12px_0_24px_rgba(255,255,255,0.035)] [clip-path:polygon(22%_0,100%_18%,82%_100%,0_84%)]" />
        <div className="absolute right-[2%] top-[13%] h-[30%] w-[26%] rotate-[12deg] bg-[#121917] shadow-[inset_-12px_0_24px_rgba(255,255,255,0.035)] [clip-path:polygon(0_18%,78%_0,100%_84%,18%_100%)]" />
        <div className="absolute inset-x-[17%] bottom-[4%] top-[8%] rounded-b-[18px] rounded-t-[30px] bg-[#111816] shadow-[0_26px_60px_rgba(13,32,29,0.26),inset_0_24px_38px_rgba(255,255,255,0.045),inset_0_-22px_45px_rgba(0,0,0,0.22)]" />
        <div className="absolute left-1/2 top-[6%] h-[15%] w-[28%] -translate-x-1/2 rounded-b-full bg-parchment shadow-[0_9px_0_#111816,inset_0_-2px_0_rgba(16,49,43,0.22)]" />
        <div className="absolute left-[23%] right-[23%] top-[8%] h-[7%] rounded-t-[26px] border-t border-cream/10" />

        {isBack ? (
          <div className="absolute left-[20%] right-[20%] top-[25%] text-center">
            <p className="font-serif text-[clamp(2.65rem,7vw,4.9rem)] font-black uppercase leading-[0.82] text-cream">
              I showed up.
            </p>
            <div className="mx-auto mt-[13%] w-[74%]">
              <FoundationLogo className="w-full" />
            </div>
          </div>
        ) : (
          <div className="absolute left-[28%] top-[24%] w-[27%]">
            <FoundationLogo className="w-full" />
          </div>
        )}

        <div className="absolute bottom-[7%] left-[24%] right-[24%] border-t border-cream/10 pt-3 text-center text-[10px] font-black uppercase tracking-[0.16em] text-cream/28">
          Montana Kush Community Foundation
        </div>
      </div>
    </div>
  );
}

export function ShirtMockup() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ShirtPanel side="front" />
      <ShirtPanel side="back" />
    </div>
  );
}
