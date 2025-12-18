import Einzigartig from "../components/startseite/Einzigartig";
import Flexibel from "../components/startseite/Flexibel";
import ServiceScroll from "../components/startseite/ServiceScroll";
import TestimonialSection from "../components/general/TestimonialSection";
import Flower from "../components/startseite/Flower";
// import Subscribe from "../components/general/Subscribe";
// import Test from "../components/startseite/Test";

export default function Home() {
  return (
    <div>
      <Einzigartig />
      <Flower />
      <Flexibel />

      <ServiceScroll />
      {/* <Test /> */}
      <TestimonialSection />

      {/* <Subscribe /> */}
    </div>
  );
}
