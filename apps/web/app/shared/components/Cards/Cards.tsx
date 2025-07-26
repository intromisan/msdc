import CardItem from "./CardItem";

const Cards = () => {
  const cardList = [
    {
      title: "Обучение",
      description:
        "Для всех уровней - от 0 опыта до профи с практикой в крупных компаниях.",
      buttonText: "Программа",
      link: "/",
    },
    {
      title: "Партнерство",
      description: "Банк талантов, менторство, HR бренд компании.",
      buttonText: "Подробнее",
      link: "/",
    },
    {
      title: "B2B сегмент",
      description: "Тренинги, стратегические и фасилитационные сессии.",
      buttonText: "Для бизнеса",
      link: "/",
    },
    {
      title: "Доп. услуги",
      description:
        "Профориентация, поиск работы, менторство, вакансии, опыт спикера.",
      buttonText: "Подробнее",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-9 lg:mt-40 xl:mt-48 max-w-screen-2xl mx-auto lg:px-28">
      <h2 className="font-sans text-3xl lg:text-4xl xl:text-5xl">
        МЫ - <span className="text-primary border-b-4 pb-1">MSDC EdTech</span>
      </h2>
      <p className="text-xl text-center mt-8 mb-4 px-1 lg:text-3xl lg:px-16 xl:px-64">
        Разрабатываем и внедряем практико-ориентированные программы для развития
        сотрудников
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:mt-16">
        {cardList.map(({ title, description, buttonText, link }) => (
          <CardItem
            key={title}
            title={title}
            description={description}
            buttonText={buttonText}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
