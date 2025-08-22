import Image from "next/image";
import ProductsSection from "./components/ProductsSection";
import Banner from "./components/Banner";
import "swiper/css";
import "swiper/css/pagination"; // Navigation arrows and pagination
import "swiper/css/navigation"; // For navigation arrows, if used
import Footer from "./components/Footer";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";



export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="mx-auto max-w-7xl">
      <Banner></Banner>
      <ProductsSection></ProductsSection>
      {/* From Client Component */}
      <UserInfo></UserInfo>
      {JSON.stringify(session)}
      <Footer></Footer>
    </div>
  );
}
