import Image from "next/image";

const Hero = () => {
  const logoList = [
    {
      src: "/UzumMarketLogo.png",
      classNames: "top-15 left-4",
    },
    {
      src: "/IpotekaBankLogo.png",
      classNames: "top-2 right-13",
    },
    {
      src: "/YandexLogo.png",
      classNames: "top-46 right-2",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-9 px-6">
      <h1 className="text-[28px]">
        Освойте профессию HR - и начните{" "}
        <span className="text-primary">зарабатывать</span> после прохождения
        курса
      </h1>
      <p className="text-gray-500 text-lg mt-6">
        Поможем освоить профессию с нуля: практика, поддержка наставников и
        работа с реальными задачами. Все для уверенного старта карьеры в новой
        сфере.
      </p>
      <button className="bg-secondary w-60 h-20 rounded-2xl text-lg text-white font-sans mt-9">
        Записаться на курс
      </button>
      <div className="w-90 h-100 relative flex justify-center items-center mt-9">
        <div className="w-69 h-90 bg-gradient-primary rounded-full relative overflow-hidden">
          <Image
            src="/hero-photo.png"
            alt=""
            fill
            className="object-contain "
          />
        </div>
        {logoList.map((logo) => (
          <div
            key={logo.src}
            className={`border-5 border-white rounded-full size-18 overflow-hidden absolute ${logo.classNames}`}
          >
            <Image
              src={logo.src}
              alt=""
              width={82}
              height={82}
              className="rounded-full scale-120"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
