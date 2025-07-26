import EmailIcon from "../../icons/EmailIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import InstagramLogo from "../../icons/InstagramIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import TelegramIcon from "../../icons/TelegramIcon";

const Footer = () => {
  return (
    <div className="mt-20 w-full bg-[#FFCCBD] px-6 py-12 mx-auto lg:px-56">
      <h3 className="text-dark text-2xl">MSDC</h3>
      <div className="flex flex-col md:flex-row md:items-start md: justify-between">
        <p className="text-dark mt-5">Стань лучшей версией себя</p>
        <div className="mt-8 md:mt-6">
          <div className="flex items-center text-dark mb-1">
            <PhoneIcon className="size-4 mr-1.5" />
            <a href="#">+9989 90 036 70 47</a>
          </div>
          <div className="flex items-center text-dark">
            <EmailIcon className="size-4 mr-1.5" />
            <a href="#">msdc.info@yandex.com</a>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="size-10 rounded-full flex justify-center items-center bg-[#EABBAC] mr-2.5">
            <InstagramLogo className="size-4 " />
          </div>
          <div className="size-10 rounded-full flex justify-center items-center bg-[#EABBAC] mr-2.5">
            <TelegramIcon className="size-4" />
          </div>
          <div className="size-10 rounded-full flex justify-center items-center bg-[#EABBAC] mr-2.5">
            <FacebookIcon className="size-4" />
          </div>
        </div>
      </div>

      <h4 className="mt-9 text-center">2025 © Все права защищены</h4>
    </div>
  );
};

export default Footer;
