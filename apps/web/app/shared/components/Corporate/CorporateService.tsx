import { FC, ReactElement } from "react";

type Props = {
  icon: ReactElement;
  title: string;
  description: string;
};

const CorporateService: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex shadow-[0px_-2px_50px_0px_#FF987930] my-2 p-3.5 rounded-2xl ">
      <div className="flex items-center justify-center bg-primary size-10 p-2 rounded-full mr-4 ">
        {icon}
      </div>
      <div>
        <h4 className="text-xl mb-2">{title}</h4>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default CorporateService;
