"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Hero } from "../page";
import CoWorkingForm from "./CoWorkingForm";

export default function CoWorking() {
  const heroVideos = ["/coWorkingVideo1.mp4", "/coWorkingVideo2.mp4"] as const;
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
    <Hero coWorking activeVideo={activeVideo} />
    <CoWorkingForm />
   </Fragment>
  );
}
