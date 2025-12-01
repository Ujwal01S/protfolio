import InfoCard from "../common/info-card";

const EducationSection = () => {
  return (
    <section className='grid gap-3'>
      <header>
        <h4 className='font-bold text-lg'>Education</h4>
      </header>
      <InfoCard
        name='Bright Star English School'
        duration='2003 - 2016'
        imgUrl='/school.png'
        location='Barahisthan, Bhaktapur'
      />

      <InfoCard
        name='Khwopa Higher Secondary School'
        duration='2016- 2018'
        location='Dekocha, Bhaktapur'
        imgUrl='/khwopa.png'
      />

      <InfoCard
        name='CITE'
        duration='2019- 2024'
        location='Subhidanagar, Kathmandu'
        imgUrl='/cit.png'
      />
    </section>
  );
};

export default EducationSection;
