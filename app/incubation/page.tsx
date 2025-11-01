"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Hero } from "../page";
import ProgramJourney from "./ProgramJounrey";
import BenefitSection from "./Benefit";

export default function IncubationPage() {
  //  const heroVideos = ["/video1.mp4", "/video2.mp4", "/video3.mp4", "/video4.mp4"] as const;
  const heroVideos = ["/video3.mp4", "/video4.mp4"] as const;
  const [activeVideo, setActiveVideo] = useState<(typeof heroVideos)[number]>(
    heroVideos[0]
  );

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveVideo((current) => {
        const currentIndex = heroVideos.indexOf(current);
        const nextIndex = (currentIndex + 1) % heroVideos.length;
        return heroVideos[nextIndex];
      });
    }, 10000);
    return () => clearInterval(rotation);
  }, [heroVideos]);
  return (
    <Fragment>
      <Hero activeVideo={activeVideo} incubation />
      <ProgramJourney />
      <BenefitSection />
    </Fragment>
  );
}
