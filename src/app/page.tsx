"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import localFont from "next/font/local";

const ParkinsansFont = localFont({ src: "../fonts/Parkinsans.ttf" });

export default function Page() {
   const { scrollY, scrollYProgress } = useScroll();
   const spring = useSpring(0, { stiffness: 100, damping: 20 });
   const progressSpring = useSpring(0, { stiffness: 100, damping: 20 });
   const [currScroll, setCurrScroll] = useState(0);
   const [currProgress, setCurrProgress] = useState(0);

   useMotionValueEvent(scrollY, "change", (current) => {
      spring.set(current);
   });
   useMotionValueEvent(spring, "change", (current) => {
      setCurrScroll(current);
   });

   useMotionValueEvent(scrollYProgress, "change", (curr) => {
      progressSpring.set(curr * 0.5);
   });
   useMotionValueEvent(progressSpring, "change", (curr) => {
      setCurrProgress(curr);
   });

   return (
      <>
         <div
            className={`${ParkinsansFont.className} relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-t from-[#89A8B2] to-blue-800 px-5 md:flex-row`}
         >
            <div
               style={{
                  transform: `translateX(${-currScroll}px) translateY(${currScroll}px) rotateZ(${-currProgress}turn)`,
               }}
               className={`relative top-0 aspect-square w-5/12 rounded-full bg-slate-500 before:absolute before:z-[1] before:aspect-square before:h-1/2 before:-translate-x-1/4 before:-translate-y-1/3 before:-rotate-[30deg] before:bg-[url(/crown.png)] before:bg-contain before:bg-center before:bg-no-repeat before:content-[""] md:ml-10 md:w-1/3`}
            >
               <Image
                  src={"/cat.avif"}
                  fill
                  className="aspect-square h-52 rounded-full border-2 object-cover md:border-8"
                  alt="Me"
               />
            </div>
            <div
               style={{
                  transform: `translateX(${currScroll}px) translateY(${currScroll}px) rotateZ(${currProgress}turn)`,
               }}
               className="z-[2] text-pretty text-center text-black/80 md:text-start"
            >
               <h1 className="text-4xl font-bold md:text-7xl">
                  Hello, I&apos;m
                  <br />
                  <div className="animate-bounce">Ben</div>
               </h1>
               <h2 className="mt-5 text-3xl">
                  Welcome to my personal portfolio website.
               </h2>
            </div>
         </div>

         <div className="relative min-h-screen">
            <Image
               src={"/cloud.png"}
               style={{
                  transform: `translateX(${-currScroll}px)`,
               }}
               className="absolute bottom-[130%] left-0 z-[1] aspect-auto w-7/12 object-cover md:bottom-full md:w-5/12"
               alt="Cloud"
               height={702}
               width={1024}
            />
            <Image
               src={"/cloud.png"}
               style={{
                  transform: `translateX(${currScroll}px)`,
               }}
               className="absolute bottom-full right-0 z-[1] aspect-auto w-7/12 object-cover md:w-5/12"
               alt="Cloud"
               height={702}
               width={1024}
            />
            <div
               className="absolute top-0 z-10 aspect-square w-full -translate-y-96"
               style={{ transform: `translateY(${-currScroll * 3}px)` }}
            >
               <Image
                  src={"/airplane2.png"}
                  alt="Airplane"
                  fill
                  className="object-contain"
               />
            </div>
            {/* --------------- ABOUT --------------- */}
            <nav className="sticky top-0 h-20 bg-[#89A8B2] shadow-lg"></nav>
         </div>

         {/* --------------- Projects --------------- */}

         <div className="min-h-screen"></div>
      </>
   );
}
