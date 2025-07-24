import Image from "next/image";

const GrowCard = () => {
  return (
    <div className="relative flex flex-col mt-9 bg-gradient-to-b from-[#7B50CE] to-[#D3B6F7] rounded-lg px-6 py-16 overflow-hidden">
      {/* Background image */}
      <Image
        src="/circles.png"
        alt=""
        fill
        className="absolute object-cover z-0 rounded-lg"
        priority
      />

      {/* Content wrapper */}
      <div className="relative">
        <h3 className="text-3xl text-white">Готовы расти вместе?</h3>

        <div className="flex mt-8 items-start gap-12 justify-between">
          <div>
            <h4 className="text-xl text-white">Обучение</h4>
            <p className="text-sm text-white">которое работает</p>
          </div>
          <div>
            <h4 className="text-xl text-white">Люди</h4>
            <p className="text-sm text-white">которые растут</p>
          </div>
          <div>
            <h4 className="text-xl text-white">Бизнес</h4>
            <p className="text-sm text-white">который выигрывает</p>
          </div>
        </div>

        <div className="mt-9">
          <div className="bg-white rounded-lg w-3xs p-5 text-center">
            <a href="#" className="font-sans text-primary">
              Начни обучение с нами!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowCard;
