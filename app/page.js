import Image from "next/image";
import IconCombo from "@/components/Home/IconCombo";
import HomeCards from "@/components/Home/HomeCards";
import Flairs from "@/components/Home/Flairs";
import FeatureCard from "@/components/Home/FeatureCard";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Home/CTA";
import Lanstitut from "@/components/Home/Lanstitut";
import FirstCard from "@/components/Home/FirstCard";
import Footer from "@/components/Common/Footer";

export default function Home() {
  const features = [
    "Create a flexible study schedule that fits seamlessly into your busy life.",
    "Utilize our experienced mentors, videos, quizzes, and study materials.",
    "Join our community of language learners for practicing and networking.",
  ];
  return (
    <div className="">
      <FirstCard />
      <div
        className="position-relative w-100 d-flex justify-content-center align-items-center mt-5 mt-md-0"
        style={{ height: "60vh" }}
      >
        <Flairs />
        <div className="position-absolute w-100 h-100 img-gradient" />
        <div
          className="position-relative rounded overflow-hidden"
          style={{
            width: "1200px",
            height: "600px",
            maxWidth: "100%",
          }}
        >
          <Image
            src="/assets/MainImg.png"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
            objectPosition="center" // Centers the image within the container
            alt="Main Image"
          />
        </div>
      </div>
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginTop: "100px" }}
      >
        <Flairs />

        <div>
          <IconCombo name="Step 1:" />
          <h2 className="component-title">Shape your Career</h2>
          <p className="para">Let’s start with how we can help you.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-end">
              <HomeCards
                title="Master New Languages at Your Own Pace 🇩🇪🇪🇸🇮🇹"
                bannerSrc="/assets/Banner2.png"
                features={features}
              />
            </div>
            <div className="col-12 col-sm-6">
              <HomeCards
                title="Master New Languages at Your Own Pace 🇩🇪🇪🇸🇮🇹"
                bannerSrc="/assets/Banner2.png"
                features={features}
              />
            </div>
          </div>
        </div>
      </div>
      <Lanstitut />
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginTop: "100px" }}
      >
        <Flairs />

        <div>
          <h2 className="component-title mt-2">
            The proven <br />
            <span className="primary-color">Lanstitut Method</span>
          </h2>
          <p
            className="para p-2"
            style={{
              maxWidth: "800px",
              lineHeight: `2`,
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            At Lanstitut, we believe in transforming your career with our
            innovative and proven method. Our approach combines efficiency,
            engagement, and personalization to ensure you achieve your goals.
            <br />
            <br />
            Here’s how we do it:
          </p>
        </div>
        <div className="container">
          <div className="row p-md-5 p-2">
            <div className="col-12 col-sm-6 pb-4">
              <FeatureCard
                title="15-Minute Capsules"
                description="Bite-sized, focused learning sessions designed to fit into your busy schedule, making continuous learning manageable and effective."
                bgColor="#e7b057"
                color="black"
              />
            </div>
            <div className="col-12 col-sm-6 pb-4">
              <FeatureCard
                title="CECR Method"
                description="The Common European Framework of Reference for Languages is a guideline for describing the achievements of foreign language learners across Europe and beyond."
                bgColor="#045395"
                color="white"
              />
            </div>
            <div className="col-12 col-sm-6 pb-4">
              <FeatureCard
                title="Vernacular Classes"
                description="Engaging classes conducted proactively in your native language, ensuring clarity and comfort in understanding, while promoting active participation and effective learning."
                bgColor="#e7b057"
                color="black"
              />
            </div>
            <div className="col-12 col-sm-6 pb-4">
              <FeatureCard
                title="Interactive Quizzes"
                description="Regular quizzes to test your knowledge, reinforce learning, and provide instant feedback, helping you track your progress and stay motivated."
                bgColor="#045395"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center"
        style={{ marginTop: "100px" }}
      >
        <Flairs />

        <div>
          <h2 className="component-title mt-2">
            Few of the <br />
            <span className="primary-color">Commonly Asked Questions</span>
          </h2>
        </div>
        <FAQs />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
