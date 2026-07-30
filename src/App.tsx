import Header from "./components/header/Header";
import mechanick from "./assets/images/mechanic.png"
import batri from "./assets/images/batri.png"
import charkh from "./assets/images/lastik.png"
import yadakkesh from "./assets/images/yadakkesh.png"
import "./App.css";
import Hero from "./components/header/Hero";
import Features from "./components/header/Features";
import ServiceCard from "./components/header/ServiceCard";
// import { FaCar } from "react-icons/fa6";
import Banner from "./components/header/Banner";
import WhyUs from "./components/header/WhyUs";
import ProcessCard from "./components/header/ProcessCard";
import FAQItem from "./components/header/FAQItem";
import Footer from "./components/header/Footer";
function App() {
     return (
          <>
               <Header />
               <Hero />
               <Features />
               <div className="flex justify-center items-center gap-2 cursor-pointer">
                    <ServiceCard
                         img={yadakkesh}
                         title="  یدک کش و حما خودرو"
                         description="حمل  ایمن خودرو به سراسر کشور"
                    />
                    <ServiceCard
                         img={mechanick}
                         title="مکانیک سیار"
                         description="تعمیرات تخصصی و عیب یابی در محل"
                    />
                    <ServiceCard
                         img={batri}
                         title="باتری به باتری"
                         description="راه اندازی خودرو با باتری خالی در محل شما"
                    />
                    <ServiceCard
                         img={charkh}
                         title="پنچری سیار"
                         description="تعمیر و تعویض لاستیک خودرو در محل شما"
                    />
               </div>
               <Banner />
               <WhyUs />
               <div className="mx-auto max-w-7xl px-6">

               <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center cursor-pointer">
                    <ProcessCard
                         number="01"
                         title="تماس با ما"
                         description="ثبت درخواست امداد."
                         />

                    <ProcessCard
                         number="02"
                         title="اعزام امدادگر"
                         description="نزدیک‌ترین امدادگر اعزام می‌شود."
                         />

                    <ProcessCard
                         number="03"
                         title="حل مشکل"
                         description="خودروی شما در محل تعمیر یا حمل می‌شود."
                         />
               </div>
                         </div>
               <div className="flex justify-center items-center gap-2 cursor-pointer p-7">
                    <FAQItem
                         question="چقدر طول می‌کشد امدادگر برسد؟"
                         answer="معمولاً بین ۲۰ تا ۳۰ دقیقه."
                    />
                    <FAQItem
                         question="چقدر طول می‌کشد امدادگر برسد؟"
                         answer="معمولاً بین ۲۰ تا ۳۰ دقیقه."
                    />
                    <FAQItem
                         question="چقدر طول می‌کشد امدادگر برسد؟"
                         answer="معمولاً بین ۲۰ تا ۳۰ دقیقه."
                    />
               </div>
               <Footer />
          </>
     );
}

export default App;
