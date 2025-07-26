import { FC } from "react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

const CardItem: FC<Props> = ({ title, description, buttonText, link }) => {
  return (
    <div className="rounded-2xl h-[412px] w-full shadow-[0px_0px_20px_0px_#00000025] flex flex-col justify-between p-6 lg:h-[400]">
      <div>
        <h3 className="text-2xl lg:text-[32px]">{title}</h3>
        <p className="mt-3.5 text-lg lg:text-[20px]">{description}</p>
      </div>
      <div className="bg-black w-full text-white text-lg flex items-center justify-center rounded-2xl mx-auto min-h-14 md:w-fit md:mx-0">
        <a className="px-2 md:px-6" href={link}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CardItem;
