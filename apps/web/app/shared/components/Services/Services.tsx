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
    <div className="flex flex-col items-center mt-9">
      <h2 className="text-3xl mb-2">
        Наши <span className="text-secondary">направления</span>:
      </h2>
      {servicesList.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
        />
      ))}
      <div className="w-full h-85 relative">
        <div className="bg-[#FE9879] size-[268px] rounded-[49px] absolute bottom-0 overflow-hidden">
          <Image src="/services-photo.png" width={304} height={320} alt="" />
        </div>
        <div className="size-[268px] absolute bottom-10 left-12">
          <Image
            src="/services-photo-2.png"
            width={304}
            height={320}
            className="scale-116"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
