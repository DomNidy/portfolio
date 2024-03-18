import { cn } from "@/lib/utils";
import Image from "next/image";

type SkillImageContainerProps = {
  label: string;
  className?: string;
  imgSrc: any;
};

export const SkillImageContainer = ({
  className,
  label,
  imgSrc,
}: SkillImageContainerProps) => (
  <div
    className={cn(
      className,
      "flex-row flex items-center gap-1 tracking-tighter font-medium"
    )}
  >
    <Image src={imgSrc} alt="" width={32} />
    <span className="tracking-tighter font-medium">{label}</span>
  </div>
);
