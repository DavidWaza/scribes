import AboutUs from "./components/AboutUs";
import Herobanner from "./components/Herobanner";
import WhyScribes from "./components/WhyScribes";
import Faq from "./components/Faq";
import NewsletterSignup from "./components/Newsletter";


export default function Home() {
  return (
   <div>
    <Herobanner />
    <AboutUs />
    <WhyScribes />

    <Faq />
    <NewsletterSignup />
   </div>
  );
}
