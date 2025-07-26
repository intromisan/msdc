import Image from "next/image";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesList = [
    {
      title: "Корпоративное обучение",
      description:
        "Обучение сотрудников, программы для менеджеров, обучение HR и L&D специалистов",
    },
    {
      title: "Готовые курсы и программы",
      description:
        "Продажи, переговоры, лидерство, управление командой, карьерное развитие и личный бренд",
    },
    {
      title: "Сессии и бизнес-игры",
      description:
        "Коучинговые и стратегические. Фасилитационные встречи. Карьерное развитие",
    },
  ];

  return (
    <div className="flex flex-col mt-9 lg:mt-40 max-w-screen-2xl mx-auto lg:px-28 xl:px-36">
      <div className="lg:flex lg:flex-row-reverse">
        <div className="w-full flex flex-col lg:items-start">
          <h2 className="text-3xl mb-2 text-center xl:text-4xl">
            Наши <span className="text-secondary">направления</span>:
          </h2>
          {servicesList.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="w-full h-85 xl:h-100 relative ">
          <div className="bg-[#FE9879] size-[268px] rounded-[49px] absolute bottom-0 overflow-hidden xl:size-[330px]">
            <Image
              src="/services-photo.png"
              fill
              alt=""
              className="object-contain"
            />
          </div>
          <div className="size-[268px] xl:size-[350px] absolute left-[47px] bottom-[32px] xl:left-[47px] xl:bottom-[30px]">
            <Image
              src="/services-photo-2.png"
              fill
              alt=""
              className="object-contain scale-120 xl:scale-113"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
