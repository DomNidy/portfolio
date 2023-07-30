import Image from "next/image";
import Navbar from "./components/Navbar";
import csharpIcon from "@/public/csharp-icon.svg";
import pythonIcon from "@/public/python-icon.svg";
import typescriptIcon from "@/public/typescript-icon.svg";
import javascriptIcon from "@/public/javascript-icon.svg";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Navbar />
      <div className="w-screen flex  flex-col gap-6 md:gap-8 justify-center items-center h-96 md:h-72 ">
        {" "}
        <h1 className=" text-5xl  tracking-tighter font-semibold  text-center pointer-events-none">
          Creating software for the Future
        </h1>
        <p className="text-muted-foreground -tracking-tight leading-7 max-w-[90%] sm:max-w-[550px]  pointer-events-none md:max-w-[700px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsa
          excepturi similique alias deserunt, adipisci quas fuga. Eum alias
          natus, nesciunt nobis voluptatibus deleniti suscipit, aut repellendus
          enim ipsum accusantium!
        </p>
        <div className="flex flex-row justify-evenly w-full md:w-1/5 h-fit ">
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
        </div>
      </div>
      <div className="bg-primary-foreground/20  flex-grow items-center flex flex-col pt-8 gap-24">
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
