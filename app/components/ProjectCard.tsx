import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Link } from "lucide-react";

export default function ProjectCard({
  titleText,
  descriptionText,
  projectURL,
  projectImageSrc,
  technologyImageSrcArray,
}: {
  titleText: string;
  descriptionText: string;
  projectURL?: string;
  projectImageSrc: any;
  technologyImageSrcArray: any[];
}) {
  return (
    <div className="flex flex-col bg-card/50 px-4 py-2 rounded-lg sm:w-[540px] shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center ">
        {projectURL ? (
          <a
            href="https://playportal.app"
            target="_blank"
            className="text-2xl mb-2 font-semibold tracking-tighter underline z"
          >
            {titleText}
            <Link
              className="ml-2 -bottom-[1px] relative inline-flex"
              width={20}
              height={20}
            />
          </a>
        ) : (
          <h2 className="text-2xl mb-2 font-semibold tracking-tigher ">
            {titleText}
          </h2>
        )}{" "}
 
        <div className="ml-4 h-6 flex flex-row gap-3 mb-1  line-clamp-2 items-center">
          {technologyImageSrcArray.map((imageSrc, idx) => {
            // If we are on the last index, dont return a separator
            return idx < technologyImageSrcArray.length - 1 ? (
              <React.Fragment key={idx}>
                <Image src={imageSrc} alt="" width={24} />
                <Separator orientation="vertical" />
              </React.Fragment>
            ) : (
              <Image src={imageSrc} alt="" width={24} />
            );
          })}
        </div>
      </div>

      <div>
        <Image
          src={projectImageSrc}
          alt="Playportal image"
          className="h-fit float-right w-[125px] sm:w-[160px] m-1.5"
          width={160}
        />

        <p className="text-muted-foreground  ">{descriptionText}</p>
      </div>
    </div>
  );
}
