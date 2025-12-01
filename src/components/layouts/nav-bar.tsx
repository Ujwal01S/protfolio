"use client";

import { CodeXml, Github, House, Linkedin } from "lucide-react";
import Link from "next/link";
import { Dock, DockIcon } from "../ui/dock";
import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import ThemeSwitch from "../globals/theme-switch";

const HeaderNavigation = () => {
  return (
    <header className='fixed container bottom-2'>
      <TooltipProvider>
        <Dock direction='middle'>
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/"}
                  aria-label='Home'
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <House className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"/project"}
                  aria-label='Projects'
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                >
                  <CodeXml className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Projects</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <Separator orientation='vertical' className='h-full' />

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"https://www.linkedin.com/in/ujwal-suwal-156a28268/"}
                  aria-label='LinkedIn'
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                  target='_blank'
                >
                  <Linkedin className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>

          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={"https://github.com/Ujwal01S"}
                  aria-label='GitHub'
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                  target='_blank'
                >
                  <Github className='size-4' />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation='vertical' />
          <DockIcon>
            <Link
              href={"#"}
              aria-label='GitHub'
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-12 rounded-full"
              )}
            >
              <ThemeSwitch />
            </Link>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </header>
  );
};

export default HeaderNavigation;
