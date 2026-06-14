import Image from "next/image";

type FoundationLogoProps = {
  className?: string;
  priority?: boolean;
};

export function FoundationLogo({ className = "", priority = false }: FoundationLogoProps) {
  return (
    <div className={`inline-block bg-white p-[4%] align-top [container-type:inline-size] ${className}`}>
      <div>
        <Image
          src="/assets/montana-kush-logo.svg"
          alt="Montana Kush"
          width={324}
          height={101}
          className="h-auto w-full"
          priority={priority}
        />
      </div>
      <p
        className="mx-auto mt-[2.5%] block w-fit whitespace-nowrap text-center font-black uppercase leading-none tracking-[0.101em] text-copper"
        style={{ fontSize: "clamp(0.5rem, 5.94cqw, 2rem)" }}
      >
        Community Foundation
      </p>
    </div>
  );
}
