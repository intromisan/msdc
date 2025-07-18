import Nav from "./Nav";

const Header = () => {
  return (
    <header className="max-w-screen-xl flex flex-wrap items-center justify-between sticky top-0 z-40 mx-auto w-full bg-white p-6">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-black">
          MSDC
        </h1>
      </a>
      <Nav />
    </header>
  );
};

export default Header;
