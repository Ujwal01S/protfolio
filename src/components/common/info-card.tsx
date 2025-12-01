import Image from "next/image";

interface Props {
  name: string;
  location: string;
  duration: string;
  imgUrl: string;
}

const InfoCard = ({ duration, imgUrl, location, name }: Props) => {
  return (
    <div>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center hover:no-underline flex-1'>
            <Image
              src={imgUrl}
              alt={name}
              width={50}
              height={50}
              className='rounded-full'
            />
            <div className='text-left'>
              <p className='font-semibold text-sm'>{name}</p>
              <p className='text-xs font-normal'>{location}</p>
            </div>
          </div>
          <p className='text-xs md:text-sm text-muted-foreground pr-4'>
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
