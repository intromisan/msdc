import Hero from "./Hero";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="=sticky top-0 z-40 w-full bg-white px-6">
        <div className="flex flex-wrap items-center justify-between py-5 border-b border-gray-400">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
              MSDC
            </h1>
          </a>
          <Nav />
        </div>
      </header>
      <Hero />
    </>
  );
};

export default Header;
