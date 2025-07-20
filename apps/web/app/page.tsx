import Cards from "./shared/components/Cards/Cards";
import Header from "./shared/components/Header/Header";
import Services from "./shared/components/Services/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white px-6">
      <Header />
      <Cards />
      <Services />
    </div>
  );
}
