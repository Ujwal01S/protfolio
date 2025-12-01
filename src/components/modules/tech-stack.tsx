import { frontendStack, frontendTools } from "@/app/_mocks/tech-stack";
import { Badge } from "../ui/badge";

const TechStackSection = () => {
  return (
    <section className='grid gap-3'>
      <header>
        <h4 className='font-bold text-lg'>Technical Skills</h4>
      </header>

      <div className='grid gap-2'>
        <p className='font-semibold'>Frontend Technologies</p>
        <div className='flex flex-wrap gap-2'>
          {frontendStack.map((item) => (
            <Badge key={item} variant='secondary'>
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className='grid gap-2'>
        <p className='font-semibold'>UI Libraries & Development Tools</p>
        <div className='flex flex-wrap gap-2'>
          {frontendTools.map((item) => (
            <Badge key={item} variant='secondary'>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
