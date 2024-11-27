"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import localFont from "next/font/local";

const ParkinsansFont = localFont({ src: "../fonts/Parkinsans.ttf" });

export default function Page() {
   const { scrollY } = useScroll();
   const spring = useSpring(0, { stiffness: 100, damping: 30 });
   const [currScroll, setCurrScroll] = useState(0);

   useMotionValueEvent(scrollY, "change", (current) => {
      spring.set(current);
   });
   useMotionValueEvent(spring, "change", (current) => {
      setCurrScroll(current);
   });

   return (
      <>
         <div
            className={`${ParkinsansFont.className} relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-t from-[#89A8B2] to-blue-800 px-5 md:flex-row`}
         >
            <div
               style={{
                  transform: `translateX(${-currScroll}px) translateY(${currScroll}px)`,
               }}
               className={`relative aspect-square w-5/12 rounded-full bg-slate-500 md:w-1/3`}
            >
               <Image
                  src={
                     "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=1556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  fill
                  className="aspect-square h-52 rounded-full border-2 object-cover md:border-8"
                  alt="Me"
               />
            </div>
            <div
               style={{
                  transform: `translateX(${currScroll}px) translateY(${currScroll}px`,
               }}
               className="z-[1] text-pretty text-center text-black/80 md:text-start"
            >
               <h1 className="text-3xl font-bold md:text-7xl">
                  Hello, I&apos;m
                  <br />
                  Ben
               </h1>
               <h2 className="mt-5 text-2xl font-semibold">
                  Welcome to my personal portfolio website.
               </h2>
            </div>
         </div>

         <div className="relative min-h-screen">
            <Image
               src={"/cloud1.png"}
               style={{ transform: `translateX(${-currScroll}px)` }}
               className="absolute bottom-[130%] left-0 aspect-auto w-4/12 object-cover md:bottom-full"
               alt="Cloud"
               height={702}
               width={1024}
            />
            <Image
               src={"/cloud1.png"}
               style={{ transform: `translateX(${currScroll}px)` }}
               className="absolute bottom-full right-0 aspect-auto w-1/2 object-cover"
               alt="Cloud"
               height={702}
               width={1024}
            />
            <div
               className="absolute top-0 z-10 aspect-square w-full -translate-y-96"
               style={{ transform: `translateY(${-currScroll * 3}px)` }}
            >
               <Image
                  src={"/airplane.png"}
                  alt="Airplane"
                  fill
                  className="object-cover"
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
