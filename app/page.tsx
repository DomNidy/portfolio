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
import awsIcon from "@/public/aws-icon.svg";
import mysqlIcon from "@/public/mysql-icon.svg";
import typescriptIcon from "@/public/typescript-icon.svg";
import javascriptIcon from "@/public/javascript-icon.svg";
import htmlIcon from "@/public/html-icon.svg";
import cssIcon from "@/public/css-icon.svg";
import playportalImage from "@/public/playportal-image.svg";
import reactIcon from "@/public/react-icon.svg";
import dockerIcon from "@/public/docker-icon.svg";
import firebaseIcon from "@/public/firebase-icon.svg";
import gitIcon from "@/public/git-icon.svg";
import planetbuyIcon from "@/public/planetbuy-icon.svg";
import { Button } from "@/components/ui/button";
import ProjectCard from "./components/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SkillContainer from "@/components/skill-container";
import SkillImageContainer from "@/components/skill-image-container";

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
          Software Engineer
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="relative top-8 sm:top-20 grad -z-0">
              Work with me
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Info</DialogTitle>
              <DialogDescription>
                Here{"'s"} my contact information
              </DialogDescription>
              <Input
                variant="copy"
                className="w-fit rounded-md"
                value={"dominicnidy01@gmail.com"}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="bg-primary-foreground/20 flex-grow items-center flex flex-col pt-8 gap-24">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h1 className="text-4xl font-semibold pointer-events-none">
            About Me
          </h1>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col items-center">
              <ScrollArea className="px-2 ">
                <div className="flex flex-col gap-12 items-center">
                  <p className="text-muted-foreground leading-[2.025rem]  text-center text-[19px] sm:text-justify pointer-events-none  max-w-[85%] md:max-w-[70%] lg:max-w-2xl ">
                    Hi there, I{"'m"} <span>Dominic Nidy!</span> I{"'"}ve been
                    programming since I was around 12 years old. I{"'ve"} always
                    been interested in building things and coding was one of my
                    avenues for that. I had many things I wanted to create;
                    games, apps, and websites. That was part of what piqued my
                    curiosity in programming; and I{"'ve"} been failing forward
                    ever since.
                  </p>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 max-w-lg px-4">
          <h1 className="text-4xl  font-semibold   pointer-events-none">
            Some stuff I built:
          </h1>
          <ProjectCard
            className="hover:border-purple-700"
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
              googlecloudIcon,
            ]}
            projectImageSrc={playportalImage}
            titleText="Playportal.app"
            projectURL="https://playportal.app"
          />

          <ProjectCard
            className="hover:border-blue-900"
            descriptionText='Planetbuy is a full-stack app developed within the NextJS framework. It designed to implement 
            functionality similar to real-estate platforms like airbnb. However, as the same suggests; on Planetbuy you are 
            "buying planets" (fictional planets, with fictional currency).'
            technologyImageSrcArray={[
              reactIcon,
              typescriptIcon,
              mysqlIcon,
              googlecloudIcon,
            ]}
            projectImageSrc={planetbuyIcon}
            titleText="Planetbuy.app"
            projectURL="https://planetbuy.vercel.app/"
          />
          <div className="flex flex-col text-center">
            <h1 className="text-4xl  mt-16 font-semibold   pointer-events-none">
              My arsenal:
            </h1>
            <p className="text-muted-foreground leading-[2.025rem]  text-center text-[16px] sm:text-justify pointer-events-none  max-w-[85%] md:max-w-[70%] lg:max-w-2xl">
              The tech I use to build my apps.
            </p>
          </div>

          <SkillContainer titleText="Programming Languages">
            <SkillImageContainer>
              <Image src={typescriptIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">TypeScript</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={javascriptIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">JavaScript</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={pythonIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Python</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={csharpIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">C#</span>
            </SkillImageContainer>
          </SkillContainer>

          <SkillContainer
            titleText="Front-end Tech"
            orientation="vertical"
          >
            <SkillImageContainer>
              <Image
                src={nextjsIcon}
                alt=""
                width={32}
                className="dark:invert"
              />
              <span className="tracking-tighter font-medium">Next.js</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={reactIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium ">React</span>
            </SkillImageContainer>{" "}
            <SkillImageContainer>
              <Image src={htmlIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">HTML</span>
            </SkillImageContainer>{" "}
            <SkillImageContainer>
              <Image src={cssIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">CSS</span>
            </SkillImageContainer>{" "}
            <SkillImageContainer>
              <Image src={tailwindcssIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Tailwind</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={figmaIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Figma</span>
            </SkillImageContainer>{" "}
          </SkillContainer>

          <SkillContainer titleText="Backend/DevOps" orientation="vertical">
            <SkillImageContainer>
              <Image src={mongodbIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">MongoDB</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={firebaseIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Firebase</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={jiraIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Jira</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={gitIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Git</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={dockerIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Docker</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={mysqlIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">MySQL</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={googlecloudIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">Google Cloud</span>
            </SkillImageContainer>
            <SkillImageContainer>
              <Image src={awsIcon} alt="" width={32} />
              <span className="tracking-tighter font-medium">AWS DynamoDB</span>
            </SkillImageContainer>
          </SkillContainer>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
