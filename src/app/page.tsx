import AboutMe from "@/components/modules/about-me";
import EducationSection from "@/components/modules/education";
import ExperienceSection from "@/components/modules/experience-section";
import ProjectSections from "@/components/modules/project";
import TechStackSection from "@/components/modules/tech-stack";

const HomePage = () => {
  return (
    <div className='py-t md:pt-10 pb-25 grid gap-6 px-2'>
      <AboutMe />

      <ExperienceSection />

      <EducationSection />

      <ProjectSections />

      <TechStackSection />
    </div>
  );
};

export default HomePage;
