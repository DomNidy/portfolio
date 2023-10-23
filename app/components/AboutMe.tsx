"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function AboutMe() {
  const [version, setVersion] = useState<"short" | "long">("long");
  if (version === "long") {
    return (
      <div className="flex flex-col items-center">
        <Button
          className="max-w-[60%] mt-2 mb-4  w-fit"
          onClick={() => setVersion("short")}
        >
          Im not reading all that
        </Button>
        <ScrollArea className="h-[500px] px-4 rounded-lg py-1  ">
          <div
            className="flex flex-col gap-12  items-center   text-muted-foreground text-[17px] text-justify leading-7"
            style={{ boxShadow: `0 0 5px 11px #555;` }}
          >
            <p className=" text-justify tracking-tight  leading-[2.025rem] max-w-[95%] md:max-w-[70%] lg:max-w-2xl ">
              Hi there, I{"'m"} <span>Dominic Nidy!</span> I{"'"}ve been
              programming since I was around 12 years old. I didn{"'"}t really
              notice it back then; but coding was an outlet for me to express my
              interest in engineering{" "}
              <span className="italic">
                (though, at 12 my coding style was more {'"brute force"'}, than{" "}
                {'"engineer"'}).{" "}
              </span>
              In retrospect, it was probably{" "}
              <span className="italic">slightly</span> overzealous to try and
              learn C++ first. I had little idea what I was doing, but I
              eventually managed to complete my first programming project: A C++
              command line calculator.
            </p>
            <p className=" text-justify tracking-tight  leading-[2.025rem] max-w-[95%] md:max-w-[70%] lg:max-w-2xl ">
              That{"'s"} when I realized:{" "}
              <span>
                {'"Wait a minute, this project is kind of lame, '}
                {
                  "I could've just used the calculator app on google. Not only that, but it can't even do division properly?\" "
                }
              </span>
              After that brief stint with C++, I would dabble here and there in
              my free time, trying to learn more about coding. Eventually I
              discovered Python. With a much simpler syntax, it was fairly
              simple to pick up. I continued learning Python for about a year in
              my spare time and got really confident with it. I liked Python,
              but my interests changed and I now wanted to make my own video
              games.
            </p>

            <p className="text-justify tracking-tight  leading-[2.025rem] max-w-[95%] md:max-w-[70%] lg:max-w-2xl ">
              I{"'d"} prototype simple games in the Unity engine coding with C#.
              This was a cool experience as it was the first time I really was
              able to see my code do something interesting, other than just
              outputting text on a screen. It was fun for a while, but after a
              certain point I was{"n't"} really learning much anymore. I didn
              {"'t"} really know how the Unity engine worked under the hood, so
              I decided to try and make my own game engine.
            </p>

            <p className="text-justify  tracking-tight  leading-[2.025rem] max-w-[95%] md:max-w-[70%] lg:max-w-2xl ">
              It was during this project I realized I had to actually set up my
              own C++ environment, download and link dependencies, learn how
              each of these libraries work, while learning lower level concepts
              like pointers and memory management. I knew I wouldn
              {"'t"} be able to do this right away, so I put that project on the
              backburner and decided to take things slower. I realized I needed
              a few things: More experience developing robust applications
              (rather than simple scripts), More practice with data structures
              and algorithms, and I needed to set aside time separately to
              practice lower level programming.
            </p>

            <p className="text-justify leading-[2.025rem] tracking-tight  max-w-[95%] md:max-w-[70%] lg:max-w-2xl ">
              This {'"study plan"'} of sorts was really what took my coding to
              the next level. I decided to create an{" "}
              <a
                className="font-semibold underline italic"
                target="_blank"
                href="https://playportal.app"
              >
                app which allows users to transfer music between different music
                platforms automatically
              </a>{" "}
              <span className="italic">(ex: Spotify, Youtube)</span>, this
              project was an incredibly valuable experience. I had to actually
              architect a system for the first time and incorporate multiple
              technologies to finish it. I learned about OAuth flows and
              networking concepts, I learned about microservices and deployed a
              container on google cloud to handle the playlist transfering
              process. I even started studying machine learning in order to
              create a statistical model which would allow me to assosciate
              songs between different music platforms. Not to mention I had to
              learn web development (which I did in React and Typescript).
            </p>
            <p className="text-justify tracking-tight leading-[2.025rem] max-w-[95%] md:max-w-[70%] lg:max-w-2xl ">
              I{"'ve"} learned a whole lot over the years and I feel pretty
              lucky to have this strong of an interest in building things, I don
              {"'t"} know what I{"'d"} be doing otherwise.
            </p>
          </div>
        </ScrollArea>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Button className=" mt-2 mb-4 w-fit" onClick={() => setVersion("long")}>
        Wow, I want to read more!
      </Button>

      <ScrollArea className="px-4 ">
        <div className="flex flex-col gap-12 items-center">
          <p className="text-muted-foreground leading-[2.025rem]  text-[17px] text-justify pointer-events-none  max-w-[85%] md:max-w-[70%] lg:max-w-2xl ">
            Hi there, I{"'m"} <span>Dominic Nidy!</span> I{"'"}ve been
            programming since I was around 12 years old. I{"'ve"} always been
            interested in building things and coding was one of my avenues for
            that. There was a lot of things I wanted to create games, apps, and
            websites. That was part of what piqued my curiosity in programming;
            and I{"'ve"} been failing forward ever since.
          </p>
        </div>
      </ScrollArea>
    </div>
  );
}
