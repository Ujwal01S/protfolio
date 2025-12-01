import { Github, Globe } from "lucide-react";
import { ProjectCard } from "../common/project-card";
import { Button } from "../ui/button";

const ProjectSections = () => {
  return (
    <section className='grid gap-3'>
      <div className='w-full flex items-center justify-center'>
        <Button className='text-sm py-0.5 '>My Projects</Button>
      </div>
      <header>
        <h4 className='font-bold text-lg text-center'>
          Check out my latest work
        </h4>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <ProjectCard
          title='Exclusive'
          description='Developed e-commerce project using dummy json data using dynamic seo generation, next intl , next auth, zustand with persist middleware , react-hook-form'
          tags={[
            "React JS",
            "Next JS",
            "Tailwind CSS",
            "Shadcn UI",
            "Next Intl",
            "Next Auth",
          ]}
          image='/exclusive.jpg'
          links={[
            {
              icon: <Globe className='size-3' />,
              type: "Website",
              href: "https://e-commerce-frontend-tan-five.vercel.app/en",
            },
            {
              icon: <Github className='size-3' />,
              type: "Source",
              href: "https://github.com/Ujwal01S/e-commerce-frontend",
            },
          ]}
        />

        <ProjectCard
          title='Shopes and Malls'
          description='Developed full stack project with next js backend route handlers using next auth, react-hook-form, cloudinary for cloud storage. Included Admin and User role for adding shops.'
          tags={[
            "React JS",
            "Next JS",
            "Tailwind CSS",
            "Shadcn UI",
            "Next Intl",
            "Next Auth",
            "MongoDB",
            "Mongoose",
            "Cloudinary",
          ]}
          image='/shop.png'
          links={[
            {
              icon: <Github className='size-3' />,
              type: "Source",
              href: "https://github.com/Ujwal01S/shoppingAndMall",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default ProjectSections;
