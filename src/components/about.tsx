import React from "react";
import { ParkinsansFont } from "@/fonts/font";

const About = () => {
    return (
        <div
            className={`${ParkinsansFont.className} px-3 pt-5 md:px-10 md:pt-10`}
        >
            <div className="text-pretty text-center text-xl font-semibold text-black/90 md:text-2xl md:leading-9 md:tracking-wide">
                <p className="">
                    I’m Ben Jay Escodo Lozada, a first-year Computer Science
                    student at Caraga State University and a passionate
                    self-taught developer with more than a year of programming
                    experience. My journey in tech began with curiosity and has
                    grown into a dedication to learning and building.
                </p>
            </div>
        </div>
    );
};

export default About;
