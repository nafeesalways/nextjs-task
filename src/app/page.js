import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import Banner from "./components/Banner";
import "swiper/css";
import "swiper/css/pagination"; // Navigation arrows and pagination
import "swiper/css/navigation"; // For navigation arrows, if used
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <Banner></Banner>
      <ProductsSection></ProductsSection>
      <Footer></Footer>
    </div>
  );
}
