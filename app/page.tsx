import Image from "next/image";
import Navbar from "./components/Navbar";
import csharpIcon from "@/public/csharp-icon.svg";
import pythonIcon from "@/public/python-icon.svg";
import typescriptIcon from "@/public/typescript-icon.svg";
import javascriptIcon from "@/public/javascript-icon.svg";
import htmlIcon from "@/public/html-icon.svg";
import cssIcon from "@/public/css-icon.svg";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col ">
      <Navbar />
      <div
        className="sm:min-h-[650px] min-h-[585px]  h-fit  flex border-b-2 flex-col mt-10  gap-6 md:gap-8 justify-center items-center
                    border-black border-opacity-5 
                    from-primary-foreground/15 to-primary/85 bg-gradient-to-b bg-primary-foreground dark:bg-background"
      >
        {" "}
        <h1 className=" text-5xl  tracking-tighter font-semibold p-0.5  text-center pointer-events-none lg:text-6xl grad">
          Creating the software of Tomorrow
        </h1>{" "}
        <p
          className="text-muted-foreground -tracking-tight leading-8 max-w-[90%] sm:max-w-[550px] lg:text-lg  
                      pointer-events-none md:max-w-[700px] text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsa
          excepturi similique alias deserunt, adipisci quas fuga. Eum alias
          natus, nesciunt nobis voluptatibus deleniti suscipit, aut repellendus
          enim ipsum accusantium!
        </p>
        <div className="flex flex-row justify-evenly w-2/5  h-fit place-self-center gap-4 sm:gap-2">
          <Image src={csharpIcon} alt="Csharp" className="grayscale w-8 h-8" />
          <Image
            src={javascriptIcon}
            alt="Javascript"
            className="grayscale w-8 h-8"
          />
          <Image
            src={typescriptIcon}
            alt="Typescript"
            className="grayscale w-8 h-8"
          />
          <Image src={pythonIcon} alt="Python" className="grayscale w-8 h-8" />
          <Image src={htmlIcon} alt="HTML" className="grayscale w-8 h-8" />
          <Image src={cssIcon} alt="HTML" className="grayscale w-8 h-8" />
        </div>
        <Button className="relative top-8 sm:top-20 grad -z-0">
          Work with me
        </Button>
      </div>
      <div className="bg-primary-foreground/20 flex-grow items-center flex flex-col pt-8 gap-24">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="text-4xl  font-semibold   pointer-events-none">
            About Me
          </h1>
          <p className="text-muted-foreground text-center pointer-events-none  max-w-[85%] md:max-w-[70%] lg:max-w-2xl leading-9 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            officiis labore eos, impedit maiores dolor ea omnis quia velit
            pariatur, delectus consectetur, nostrum neque dolores in distinctio
            fuga cupiditate ullam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis repellendus omnis commodi sequi harum rem
            id facere, molestiae necessitatibus voluptatibus odio eaque repellat
            soluta labore ut ea nisi. Dolores, voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="text-4xl  font-semibold   pointer-events-none">
            My Experience
          </h1>
          <p className="text-muted-foreground text-center pointer-events-none  max-w-[85%] md:max-w-[70%] lg:max-w-2xl leading-9 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            officiis labore eos, impedit maiores dolor ea omnis quia velit
            pariatur, delectus consectetur, nostrum neque dolores in distinctio
            fuga cupiditate ullam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis repellendus omnis commodi sequi harum rem
            id facere, molestiae necessitatibus voluptatibus odio eaque repellat
            soluta labore ut ea nisi. Dolores, voluptate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatem suscipit reprehenderit
            dolor nostrum ducimus eaque maxime maiores, voluptatum itaque
            obcaecati et.
          </p>
        </div>
      </div>
    </div>
  );
}
