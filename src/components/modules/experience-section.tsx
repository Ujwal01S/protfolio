import Image from "next/image";
import WenSVG from "../svg/wen-svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ExperienceSection = () => {
  return (
    <section className='grid '>
      <header>
        <h4 className='font-bold text-lg'>Work Experience</h4>
      </header>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <div className='flex justify-between items-center'>
            <AccordionTrigger className='flex gap-2 items-center hover:no-underline flex-1'>
              <figure className='relative w-[50px] h-[50px] rounded-full'>
                <Image
                  src={"/bridge.webp"}
                  // height={100}
                  // width={50}
                  fill
                  alt='logo'
                  className='rounded-full border border-slate-100 bg-white p-2 object-contain'
                />
              </figure>
              <div className='text-left'>
                <p className='font-semibold text-normal'>
                  Associate Software Engineering Developer
                </p>
                <p className='text-xs font-normal'>
                  BRIDGE INTERNATIONAL CONSULTANCY AND MIGRATION LIMITED
                </p>
              </div>
            </AccordionTrigger>
            <p className='text-xs md:text-sm text-muted-foreground pr-4'>
              Jan 2026 - Present
            </p>
          </div>

          <AccordionContent className='pl-[64px] md:pl-[74px] py-0 mb-4'>
            As an Associate Software Engineering Developer, I contributed to the
            development and maintenance of web applications, focusing on
            frontend technologies and collaborating with cross-functional teams
            to deliver high-quality solutions tailored to client needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <div className='flex justify-between items-center'>
            <AccordionTrigger className='flex gap-2 items-center hover:no-underline flex-1'>
              <WenSVG />
              <div className='text-left'>
                <p className='font-semibold text-normal'>Frontend Developer</p>
                <p className='text-xs font-normal'>Web Experts Nepal</p>
              </div>
            </AccordionTrigger>
            <p className='text-xs md:text-sm text-muted-foreground pr-4'>
              Sep 2024 - Nov 2025
            </p>
          </div>

          <AccordionContent className='pl-[64px] md:pl-[74px] py-0'>
            As a front-end developer, I built dynamic systems using React.js and
            Next.js, integrating modern tools like TanStack Query, TanStack
            Table, Zustand, React Hook Form, and Zod , UI Library such as Shadcn
            ui , Mantine ui and Rechart I developed role-based dashboards and
            reusable components to enhance performance and user experience
            across multiple projects.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default ExperienceSection;
