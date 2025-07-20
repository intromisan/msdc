import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="max-w-screen-xl flex flex-wrap items-center justify-between sticky top-0 z-40 mx-auto w-full bg-white py-5 border-b border-gray-400">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
            MSDC
          </h1>
        </a>
        <Nav />
      </header>
      <Hero />
    </>
  );
};

export default Header;
