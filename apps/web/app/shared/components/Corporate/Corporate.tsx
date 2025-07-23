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
    <div className="mt-12 flex flex-col items-center">
      <div>
        <h3 className="text-3xl text-center">Корпоративным клиентам</h3>
        <p className="text-lg my-2 text-gray-500 text-center">
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

      <div className="flex items-center justify-center size-[320px] relative mt-5">
        <div className="size-56 absolute bg-[#ff9879] rounded-full"></div>
        <div className="size-72 border-3 border-[#ff9879] rounded-full relative overflow-hidden">
          <Image
            src="/corporate-photo.png"
            alt={""}
            width={220}
            height={200}
            className="absolute top-[-12px]"
          />
        </div>
        <div className="corporate-circle-icon right-4 bottom-20">
          <ShieldDoneIcon className="size-4" />
        </div>
        <div className="corporate-circle-icon top-4 left-20">
          <NoteIcon className="size-4" />
        </div>
        <div className="corporate-circle-image left-4 bottom-20">
          <Image src="/corporate-photo-2.png" alt={""} fill />
        </div>
        <div className="corporate-circle-image right-4 top-20">
          <Image src="/corporate-photo-3.png" alt={""} fill />
        </div>
      </div>
    </div>
  );
};

export default Corporate;
