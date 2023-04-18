import Footer from "@/components/Footer";
import NavSection from "@/components/Header";
import HeaderSlider from "@/components/main-page/HeaderSlider";
import ModalVideo from "@/components/main-page/ModalVideo";
import ReviewsBlock from "@/components/main-page/ReviewsBlock";
import ServicesBlock from "@/components/main-page/ServicesBlock";
import TeamsBlock from "@/components/main-page/TeamsBlock";
import dynamic from "next/dynamic";

export default function Home() {
  const MapSection = dynamic(() => import("@/components/main-page/MapBlock"), {
    ssr: false,
  });

  return (
    <>
      <NavSection />
      <HeaderSlider />
      <ServicesBlock />
      <TeamsBlock />
      <ModalVideo />
      <ReviewsBlock />
      <MapSection />
      <Footer />
    </>
  );
}
