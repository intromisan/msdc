import { FC } from "react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
};

const CardItem: FC<Props> = ({ title, description, buttonText, link }) => {
  return (
    <div className="rounded-2xl h-[412px] w-full shadow-[0px_0px_20px_0px_#00000025] flex flex-col justify-between p-6 my-4">
      <div>
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-3.5 text-lg">{description}</p>
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
