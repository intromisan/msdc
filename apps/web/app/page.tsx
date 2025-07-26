import Cards from "./shared/components/Cards/Cards";
import Corporate from "./shared/components/Corporate/Corporate";
import Footer from "./shared/components/Footer/Footer";
import GrowCard from "./shared/components/GrowCard/GrowCard";
import Header from "./shared/components/Header/Header";
import Services from "./shared/components/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <Header />
      <div className="px-6">
        <Cards />
        <Services />
        <Corporate />
      </div>
      <GrowCard />
      <Footer />
    </div>
  );
}
