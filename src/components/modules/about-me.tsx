import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <header className='flex gap-4 items-center'>
        <h3 className='text-4xl font-bold font-playfair'>
          hi, i&apos;m Ujwal Suwal
        </h3>
        <Image src={"/hi.png"} alt='hi' width={100} height={100} />
      </header>

      <p className='font-bold text-lg'>About</p>
      <article className=' flex gap-2 items-center'>
        <p>
          I am a passionate front-end developer skilled in React.js, Next.js,
          and TypeScript, dedicated to building engaging and high-performance
          user interfaces. I&apos;m currently expanding my technical stack to
          include backend technologies like Node.js , PostgreSQL and Nest.js,
          aiming to become a versatile full-stack developer.
        </p>
        <figure className='relative hidden md:flex aspect-square w-70 h-30'>
          <Image src={"/me.jpg"} fill alt='me' />
        </figure>
      </article>
    </section>
  );
};

export default AboutMe;
