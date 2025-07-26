import Image from "next/image";

const Hero = () => {
  const logoList = [
    {
      src: "/UzumMarketLogo.png",
      classNames: "top-[15%] left-[5%]",
    },
    {
      src: "/IpotekaBankLogo.png",
      classNames: "top-[2%] right-[15%]",
    },
    {
      src: "/YandexLogo.png",
      classNames: "top-[47%] right-[2%] xl:right-0",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col items-center mt-9 px-6 lg:flex-row lg:justify-between ">
      <div className="flex flex-col items-center lg:items-start lg:w-[54%]">
        <h1 className="text-[28px] lg:text-4xl lg:leading-14 xl:text-5xl xl:leading-20">
          Освойте профессию HR - и начните{" "}
          <span className="text-primary">зарабатывать</span> после прохождения
          курса
        </h1>
        <p className="text-gray-500 text-lg mt-6">
          Поможем освоить профессию с нуля: практика, поддержка наставников и
          работа с реальными задачами. Все для уверенного старта карьеры в новой
          сфере.
        </p>
        <button className="bg-secondary w-60 h-20 rounded-2xl text-lg text-white font-sans mt-9 lg:h-16 hover:cursor-pointer">
          Записаться на курс
        </button>
      </div>
      <div className="w-90 h-auto max-h-[646px] max-w-[570px] relative flex justify-center items-center mt-9 lg:mt-0 lg:w-92 xl:w-140 aspect-[5.5/6]">
        <div className="w-69 h-auto max-h-[625px] max-w-[462px] bg-gradient-primary rounded-full relative overflow-hidden lg:w-72 xl:w-120 aspect-[4.5/6]">
          <Image src="/hero-photo.png" alt="" fill className="object-contain" />
        </div>
        {logoList.map((logo) => (
          <div
            key={logo.src}
            className={`border-5 border-white rounded-full size-18 xl:size-24 overflow-hidden absolute ${logo.classNames}`}
          >
            <Image
              src={logo.src}
              alt=""
              fill
              className="rounded-full scale-120 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
