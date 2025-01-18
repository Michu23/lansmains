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
    "Learn at your convenience with our morning, evening, and weekend batches—ideal for students and working professionals, our classes fit your routine perfectly.",
    "Learn from the best! Our experienced trainers hold the highest level of German language certification (C2), ensuring top-quality education and real-world insights.",
    "Affordable pricing with high-value courses, ensuring that learning German is accessible without compromising on quality.",
    // "Experience interactive learning with live classes, group discussions, and practical exercises, making language learning fun and effective.",
  ];

  const features2 = [
    "Secure your career in Germany with our dedicated job placement services, connecting you with top healthcare institutions, corporate firms, and more.",
    "Our fast-track programs complete language training and job placement in 6 to 9 months, speeding up your employment in Germany.",
    "Join thousands of successful candidates who have built thriving careers in Germany through our language and placement programs.",
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
          <p className="para">Let’s start with how we can help you..</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-end">
              <HomeCards
                title="Join India’s No. 1 German Language Institute 🇩🇪"
                bannerSrc="/assets/Banner2.png"
                features={features}
                href="/language"
              />
            </div>
            <div className="col-12 col-sm-6">
              <HomeCards
                title="Get Placed Abroad with Trust and Confidence through Lanstitut!"
                bannerSrc="/assets/Banner2.png"
                features={features2}
                href="/placements"
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
              maxWidth: "900px",
              lineHeight: `2`,
              marginTop: "20px",
              marginBottom: "10px",
              fontWeight: "400",
            }}
          >
            Take your German skills from beginner (A1) to advanced (B2) with our
            structured, step-by-step curriculum. Build a strong foundation in
            speaking, reading, writing, and listening through engaging live
            sessions, group discussions, and role-plays. Our certified trainers
            provide personalized feedback, tailoring lessons to your learning
            pace and style.
            <br />
            <br />
            We emphasize real-world communication, combining online and offline
            resources for flexible learning that fits your schedule. Track your
            progress with regular assessments and gain valuable cultural
            insights to prepare for life in Germany.
            <br />
            <br />
            With a track record of successful placements, our program not only
            boosts your language proficiency but also equips you for job
            interviews and seamless career transitions in Germany.
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
