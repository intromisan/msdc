import Image from "next/image";
import CalendarIcon from "../../icons/CalendarIcon";
import PuzzleIcon from "../../icons/PuzzleIcon";
import UserIcon from "../../icons/UserIcon";
import CorporateService from "./CorporateService";
import ShieldDoneIcon from "../../icons/ShieldDoneIcon";
import NoteIcon from "../../icons/NoteIcon";

const Corporate = () => {
  const corporateServices = [
    {
      icon: <UserIcon className="text-white size-6" />,
      title: "Тренинги и курсы",
      description:
        "Материал адаптирован под нужды вашей компании (SOFT / HARD SKILLS)",
    },
    {
      icon: <CalendarIcon className="text-white size-6" />,
      title: "Программы для менеджеров и лидеров",
      description: "Ускорим рост специалистов и управленцов.",
    },
    {
      icon: <PuzzleIcon className="text-white size-6" />,
      title: "Мастер-классы и воркшопы",
      description: "Помощь в развитии персонала и повышении вовлеченности.",
    },
  ];

  return (
    <div className="mt-12 flex flex-col items-center max-w-screen-2xl mx-auto lg:px-28 xl:px-36 lg:mt-40 lg:flex-row lg:justify-between">
      <div className="flex-1">
        <h3 className="text-3xl text-center lg:text-start">
          Корпоративным клиентам
        </h3>
        <p className="text-lg my-2 text-gray-500 text-center lg:text-start">
          Подберем формат под цели HR и руководителей. Обучение на основе
          реальных кейсов и современных образовательных решений.
        </p>
        <div className="flex flex-col">
          {corporateServices.map((service) => (
            <CorporateService
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 flex-1">
        <div className="flex items-center justify-center size-[320px] relative ml-auto xl:size-[400px]">
          <div className="size-56 absolute bg-[#ff9879] rounded-full xl:size-[315px]"></div>
          <div className="size-72 border-3 border-[#ff9879] rounded-full relative xl:size-[395px] overflow-hidden ">
            <div className="absolute w-[210px] h-[280px] bottom-0 left-2 xl:w-[310px] xl:h-[420px] xl:bottom- xl:left-0 ">
              <Image src="/corporate-photo.png" alt={""} fill />
            </div>
          </div>
          <div className="corporate-circle-icon right-4 bottom-20 xl:right-0">
            <ShieldDoneIcon className="size-4 xl:size-6" />
          </div>
          <div className="corporate-circle-icon top-4 left-20 xl:top-0">
            <NoteIcon className="size-4 xl:size-6" />
          </div>
          <div className="corporate-circle-image left-4 bottom-20 xl:left-0">
            <Image src="/corporate-photo-2.png" alt={""} fill />
          </div>
          <div className="corporate-circle-image right-4 top-20 xl:right-0">
            <Image src="/corporate-photo-3.png" alt={""} fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
