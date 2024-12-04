"use client";
import React from "react";
import Image from "next/image";
import {
   useMotionValueEvent,
   useScroll,
   motion,
   useSpring,
   useMotionValue,
} from "motion/react";
import { JaroFont, ParkinsansFont } from "@/fonts/font";
import About from "@/components/about";

export default function Page() {
   const { scrollY, scrollYProgress } = useScroll();
   const scrollYSpring = useSpring(scrollY, {
      stiffness: 100,
      damping: 20,
   });
   const scrollYProgressSpring = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 20,
   });

   const positiveTranslate = useMotionValue(0);
   const negativeTranslate = useMotionValue(0);
   const positiveRotateZ = useMotionValue(0);
   const negativeRotateZ = useMotionValue(0);

   useMotionValueEvent(scrollYSpring, "change", (curr) => {
      positiveTranslate.set(curr);
      negativeTranslate.set(-curr);
   });
   useMotionValueEvent(scrollYProgressSpring, "change", (curr) => {
      const maxAngle = 250;
      positiveRotateZ.set(curr * maxAngle);
      negativeRotateZ.set(-curr * maxAngle);
   });

   return (
      <>
         <div
            className={`${ParkinsansFont.className} relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden bg-gradient-to-t from-[#89A8B2] to-blue-800 px-5 md:flex-row`}
         >
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               style={{
                  x: negativeTranslate,
                  y: positiveTranslate,
                  rotate: negativeRotateZ,
               }}
               className={`relative top-0 aspect-square w-5/12 rounded-full shadow-md before:absolute before:z-[1] before:aspect-square before:h-1/2 before:-translate-x-1/4 before:-translate-y-1/3 before:-rotate-[30deg] before:bg-[url(/crown.png)] before:bg-contain before:bg-center before:bg-no-repeat before:content-[""] md:ml-10 md:w-1/3`}
            >
               <Image
                  src="/cat.avif"
                  fill
                  className="aspect-square h-52 rounded-full border-4 object-cover"
                  alt="Me"
               />
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               style={{
                  x: positiveTranslate,
                  y: positiveTranslate,
                  rotate: positiveRotateZ,
               }}
               className="z-[2] text-pretty text-center md:text-start"
            >
               <h1
                  className={`${JaroFont.className} text-4xl tracking-wider text-blue-100 drop-shadow-md md:text-7xl`}
               >
                  Hi there,
                  <br />
                  I&apos;m
                  <span> Ben</span>
               </h1>
               <h2 className="mt-5 text-pretty text-2xl font-semibold md:text-4xl">
                  A Full-Stack Web Developer
               </h2>
            </motion.div>
         </div>

         {/* --------------- ABOUT --------------- */}
         <div className="relative min-h-screen">
            {/* Cloud 1 */}
            <motion.div
               style={{
                  x: negativeTranslate,
               }}
               className="absolute bottom-[130%] left-0 z-[1] aspect-[1800/856] w-7/12 md:bottom-full md:w-5/12"
            >
               <Image src={"/cloud.png"} alt="Cloud" fill />
            </motion.div>

            {/* Cloud 2 */}
            <motion.div
               style={{
                  x: positiveTranslate,
               }}
               className="absolute bottom-full right-0 z-[1] aspect-[1800/856] w-7/12 md:w-5/12"
            >
               <Image src={"/cloud.png"} alt="Cloud" fill />
            </motion.div>

            {/* Airplane */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.5 }}
               style={{
                  y: negativeTranslate,
               }}
               className="absolute top-8 z-10 aspect-[1200/633] w-full"
            >
               <Image src={"/airplane.png"} alt="Airplane" fill />
            </motion.div>

            <nav className="sticky top-0 flex h-14 items-center justify-between border-b-2 border-t-2 border-b-slate-700 bg-[#89A8B2] px-5 shadow-lg md:h-20 md:px-10">
               <div className={`${JaroFont.className} text-3xl md:text-5xl`}>
                  About Me
               </div>
            </nav>

            <About />
         </div>

         {/* --------------- Projects --------------- */}

         <div className="min-h-screen">
            <nav className="sticky top-0 flex h-14 items-center justify-between border-b-2 border-t-2 border-b-slate-700 bg-[#89A8B2] px-5 shadow-lg md:h-20 md:px-10">
               <div className={`${JaroFont.className} text-3xl md:text-5xl`}>
                  Projects
               </div>
            </nav>
         </div>
      </>
   );
}
