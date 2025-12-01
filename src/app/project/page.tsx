import { ProjectCard } from "@/components/common/project-card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

const ProjectPage = () => {
  return (
    <section className='py-t md:pt-10 pb-25 grid gap-6 px-2'>
      <div className='w-full flex justify-center'>
        <Button className='text-sm py-0.5 '>Projects</Button>
      </div>
      <p className='text-5xl font-bold text-center'>I like to build things</p>

      <p className='text-lg text-gray-500 text-center'>
        I like to build various project to test my knowledge , new libraries and
        learn something new. Here are few of my current favorites projects.
      </p>

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

export default ProjectPage;
