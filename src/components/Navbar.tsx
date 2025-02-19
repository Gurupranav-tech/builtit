"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/Navbar";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center text-white justify-center">
      <Navbar className="top-2" />

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} href={"/"} item="Home">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/clubs/tech">Councils</HoveredLink>
            <HoveredLink href="/clubs/clubs">Secretaries</HoveredLink>
            <HoveredLink href="/clubs/clubs">About Us </HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} href={""} item="Clubs">
          <div className="  text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="Technical Clubs"
              href="/clubs/tech"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Cultural Clubs"
              href="/clubs/cult"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Sports Clubs"
              href="/clubs/sports"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
          {/* <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/techincal/clubs">Technical Clubs</HoveredLink>
            <HoveredLink href="/cultural/clubs">Cultural Clubs</HoveredLink>
            <HoveredLink href="/sports/clubs">Sports Clubs</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} href={"/events"} item="Events">
          <div className="  text-sm grid grid-cols-1 gap-10 p-4">
            <ProductItem
              title="Fluxus"
              href="eventsgallery"
              src="public/fluxus.jpg"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="E-Summit"
              href="eventsgallery"
              src="public/esummit.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Lakshya"
              href="eventsgallery"
              src="public/lakshya.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <p className="h3 text-black">...</p>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} href={"/faqs"} item="FAQs">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/branding">IIT Indore is better than IIT BHU ?</HoveredLink>
            <HoveredLink href="/techincal/clubs">
              How far is IIT Indore from the city?
            </HoveredLink>
            <HoveredLink href="/cultural/clubs">
              How is the climate of Indore?
            </HoveredLink>
            <HoveredLink href="/sports/clubs">
              Can B. Tech students participate in research?
            </HoveredLink>
            <p className="h3 text-black">...</p>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
