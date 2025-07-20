import { FC } from "react";
import CheckIcon from "../../icons/CheckIcon";

type Props = {
  title: string;
  description: string;
};

const ServiceCard: FC<Props> = ({ title, description }) => {
  return (
    <div className="flex justify-between shadow-[0px_-2px_50px_0px_#FF987930] my-2 p-3.5 rounded-2xl">
      <div className="mr-4">
        <CheckIcon />
      </div>
      <div>
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-gray-500 text-md">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
