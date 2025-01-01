import IconCombo from "@/components/Home/IconCombo";
import Flairs from "@/components/Home/Flairs";
import FAQs from "@/components/Home/FAQs";
import CTA from "@/components/Home/CTA";
import Roles from "@/components/Placements/Roles";
import Benefits from "@/components/Placements/Benefits";
import Roadmap from "@/components/Placements/Roadmap";
import Footer from "@/components/Common/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="first-card w-100 position-relative">
        <Flairs />
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <IconCombo name="Lanstitut" />
          <div className="my-3" />
          <h1 className="linear-text page-heading2 text-center">
            Secure your Job
            <br />
            Placement Globally
          </h1>
          <p className="mt-md-5 mt-3">
            Achieve Your Global Nursing Career Goals with Our Job Placement
            Support.
          </p>
          <div className="my-3" />
          <div
            className="row w-100 d-flex justify-content-center"
            style={{
              maxWidth: "800px",
            }}
          >
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <div className="col-3">
                <Roles />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center">
        <Flairs />

        <div>
          <IconCombo />
          <h2 className="component-title">
            Want to Work Abroad?
            <br />
            <span className="primary-color">See the Benefits</span>
          </h2>
          <p
            className="para p-2 "
            style={{
              maxWidth: "1200px",
            }}
          >
            The CEFR (Common European Framework of Reference for Languages) is
            an international standard for measuring language proficiency. It
            describes six levels, from A1 (beginner) to C2 (proficient),
            assessing abilities in reading, writing, speaking, and listening.
            <br />
            It helps learners and educators gauge and compare language skills
            across different languages.
          </p>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="10x your current Salary"
              featureImage="/assets/Placements/Benefits/10x.svg"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, answered instantly."
            />
          </div>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="Learn Anytime, Anywhere"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, participate in interactive sessions, and get your questions answered instantly."
              featureImage="/assets/Language/Feature1.svg"
            />
          </div>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="10x your current Salary"
              featureImage="/assets/Placements/Benefits/10x.svg"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, answered instantly."
            />
          </div>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="Learn Anytime, Anywhere"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, participate in interactive sessions, and get your questions answered instantly."
              featureImage="/assets/Language/Feature1.svg"
            />
          </div>
        </div>
      </div>
      <div className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center">
        <Flairs />

        <div
          style={{
            marginTop: "200px",
          }}
        >
          <IconCombo />
          <h2 className="component-title">
            How can we help you?
            <br />
            <span className="primary-color">Our Job Placement Services</span>
          </h2>
          <p
            className="para p-2"
            style={{
              maxWidth: "1200px",
            }}
          >
            The CEFR (Common European Framework of Reference for Languages) is
            an international standard for measuring language proficiency. It
            describes six levels, from A1 (beginner) to C2 (proficient),
            assessing abilities in reading, writing, speaking, and listening.
            <br />
            It helps learners and educators gauge and compare language skills
            across different languages.
          </p>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="10x your current Salary"
              featureImage="/assets/Placements/Benefits/10x.svg"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, answered instantly."
            />
          </div>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="Learn Anytime, Anywhere"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, participate in interactive sessions, and get your questions answered instantly."
              featureImage="/assets/Language/Feature1.svg"
            />
          </div>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="10x your current Salary"
              featureImage="/assets/Placements/Benefits/10x.svg"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, answered instantly."
            />
          </div>
          <div className="col-md-6 col-12 px-3 mb-3">
            <Benefits
              title="Learn Anytime, Anywhere"
              description="Our app-based live classes offer the flexibility to learn from the comfort of your home or on the go. Engage with expert instructors in real-time, participate in interactive sessions, and get your questions answered instantly."
              featureImage="/assets/Language/Feature1.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="position-relative w-100 d-flex flex-column justify-content-center align-items-center text-center mt-5"
        style={{
          background: "#045395",
        }}
      >
        <Flairs />

        <div
          style={{
            marginTop: "100px",
          }}
        >
          <IconCombo isWhite />
          <h2
            style={{
              color: "#fff",
            }}
            className="component-title"
          >
            Step-by-Step
            <br />
            <span className="secondary-color">Guide to your Goals</span>
          </h2>
        </div>
        <div className="row w-100 p-md-5 p-2" style={{ maxWidth: "1300px" }}>
          <Roadmap />
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
