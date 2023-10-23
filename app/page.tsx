import Image from "next/image";
import Navbar from "./components/Navbar";
import csharpIcon from "@/public/csharp-icon.svg";
import googlecloudIcon from "@/public/googlecloud-icon.svg";
import tailwindcssIcon from "@/public/tailwind-icon.svg";
import nextjsIcon from "@/public/next.svg";
import jiraIcon from "@/public/jira-icon.svg";
import pythonIcon from "@/public/python-icon.svg";
import figmaIcon from "@/public/figma-icon.svg";
import mongodbIcon from "@/public/mongodb-icon.svg";
import githubIcon from "@/public/github-icon.svg";
import mysqlIcon from "@/public/mysql-icon.svg";
import typescriptIcon from "@/public/typescript-icon.svg";
import javascriptIcon from "@/public/javascript-icon.svg";
import htmlIcon from "@/public/html-icon.svg";
import cssIcon from "@/public/css-icon.svg";
import playportalImage from "@/public/playportal-image.svg";
import reactIcon from "@/public/react-icon.svg";
import dockerIcon from "@/public/docker-icon.svg";
import firebaseIcon from "@/public/firebase-icon.svg";
import javaIcon from "@/public/java-icon.svg";
import gitIcon from "@/public/git-icon.svg";

import { Button } from "@/components/ui/button";
import Carousel from "./components/Carousel";
import AboutMe from "./components/AboutMe";
import ProjectCard from "./components/ProjectCard";

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
          Unlocking Possibilities through Code
        </h1>{" "}
        <p
          className="text-muted-foreground -tracking-tight leading-9 max-w-[90%] sm:max-w-[550px] lg:text-lg  
                      pointer-events-none md:max-w-[700px] text-center"
        >
          Full Stack, CI/CD, UI/UX, System Design, Algorithms.
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
          <div className="flex flex-col gap-14">
            <AboutMe />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-lg px-4">
          <h1 className="text-4xl  font-semibold   pointer-events-none">
            Some stuff I built
          </h1>
          <ProjectCard
            descriptionText="Playportal is a full stack application which allows users to
            transfer playlists between music streaming services. The website
            was built using React & NextJS. The playlist transferring
            service is hosted on google cloud to allow autoscaling of
            containers based on traffic load."
            technologyImageSrcArray={[
              reactIcon,
              typescriptIcon,
              dockerIcon,
              firebaseIcon,
              pythonIcon,
              googlecloudIcon
            ]}
            projectImageSrc={playportalImage}
            titleText="Playportal.app"
            projectURL="https://playportal.app"
          />
        </div>{" "}
        <div className="flex flex-col items-center gap-4 sm:gap-5 max-w-lg px-4">
          <h1 className="text-4xl  font-semibold   pointer-events-none">
            My skills
          </h1>
          <h3 className="text-2xl font-medium tracking-tighter underline">
            Programming Languages:
          </h3>
          <div className="grid grid-cols-3 w-full gap-4 ">
            <div className="flex-row gap-2 flex items-center">
              <Image src={typescriptIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">TypeScript</span>
            </div>

            <div className="flex-row gap-2 flex items-center">
              <Image src={javascriptIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">JavaScript</span>
            </div>

            <div className="flex-row gap-2 flex items-center">
              <Image src={pythonIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Python</span>
            </div>

            <div className="flex-row gap-2 flex items-center">
              <Image src={csharpIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">C#</span>
            </div>

            <div className="flex-row gap-2 flex items-center">
              <Image src={javaIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Java</span>
            </div>
          </div>

          <h3 className="text-2xl font-medium tracking-tighter underline">
            Front-end Tech/Frameworks
          </h3>
          <div className="grid grid-cols-3  w-full gap-4">
            <div className="flex-row gap-2 flex items-center">
              <Image
                src={nextjsIcon}
                alt=""
                width={32}
                className="dark:invert"
              />
              <span className="tracking-tight font-medium">Next.js</span>
            </div>
            <div className="flex-row gap-2 flex items-center">
              <Image src={reactIcon} alt="" width={32} />
              <span className="tracking-tight font-medium ">React</span>
            </div>{" "}
            <div className="flex-row gap-2 flex items-center">
              <Image src={htmlIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">HTML</span>
            </div>{" "}
            <div className="flex-row gap-2 flex items-center">
              <Image src={cssIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">CSS</span>
            </div>{" "}
            <div className="flex-row gap-2 flex items-center">
              <Image src={tailwindcssIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Tailwind</span>
            </div>
            <div className="flex-row gap-2 flex items-center">
              <Image src={mongodbIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">MongoDB</span>
            </div>
            <div className="flex-row gap-2 flex items-center">
              <Image src={firebaseIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Firebase</span>
            </div>
            <div className="flex-row gap-2 flex items-center">
              <Image src={mysqlIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">MySQL</span>
            </div>{" "}
          </div>

          <h3 className="text-2xl font-medium tracking-tighter underline">
            DevOps:
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex-row gap-2 flex items-center">
              <Image src={gitIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Git</span>
            </div>{" "}
            <div className="flex-row gap-2 flex items-center">
              <Image src={dockerIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Docker</span>
            </div>
            <div className="flex-row gap-2 flex items-center">
              <Image
                src={githubIcon}
                alt=""
                width={32}
                className="dark:invert"
              />
              <span className="tracking-tight font-medium ">GitHub</span>
            </div>{" "}
            <div className="flex-row gap-2 flex items-center">
              <Image src={googlecloudIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Google Cloud</span>
            </div>
          </div>

          <h3 className="text-2xl font-medium tracking-tight underline">
            Software:
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex-row gap-2 flex items-center">
              <Image src={figmaIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Figma</span>
            </div>{" "}
            <div className="flex-row gap-2 flex items-center">
              <Image src={jiraIcon} alt="" width={32} />
              <span className="tracking-tight font-medium">Jira</span>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
