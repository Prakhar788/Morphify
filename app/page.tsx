"use client";

// imports
import { cn } from '@/utils';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Dropzone from '@/components/dropzone';
import DotPattern from '@/components/ui/dot-pattern';
import Ripple from '@/components/ui/ripple';
import { Spotlight } from '@/components/ui/spotlight';
import { Cover } from '@/components/ui/cover';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import { WobbleCard } from '@/components/ui/wobble-card';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useState } from 'react';
import Particles from '@/components/ui/particles';
import { AnimatePresence, motion } from "framer-motion";
import FeaturesSectionDemo from '@/components/blocks/features-section-demo-2';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Home() {
  const [color, setColor] = useState("#ffffff");
  

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-auto">
        <Spotlight
          className="fixed -top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex items-center justify-center gap-7 flex-col min-h-screen">
          <StarsBackground />
          <ShootingStars />
          
          <div className="z-10 flex min-h-64 items-center justify-center">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <Link href="https://www.producthunt.com/posts/morphify">
                <span>✨ Find Us On Product Hunt</span>
                </Link>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>

          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-400 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-400">
              Convert files effortlessly <br /> at <Cover>warp speed</Cover>
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Our spotlight feature emphasizes the swift conversion of files between formats. Say goodbye to delays.
            </p>
          </div>

          <div className="flex gap-4">
          <Link href="/convert">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Get Started</span>
      </HoverBorderGradient>
    </Link>

            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              {/* Button content */}
            </button>

            <div className="z-10 flex min-h-64 items-center justify-center">
              <div className={cn("group text-base text-white transition-all ease-in hover:cursor-pointer")}>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-white hover:duration-300 hover:dark:text-neutral-400">
                  <span className="text-white">Contact Us</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Other components can go here */}
       
        </div>
        {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <FeaturesSectionDemo/>
      <ShootingStars/>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div> */}
      </div>
    </>
  );
}
