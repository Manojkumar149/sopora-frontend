import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Landing = () => (
  <div>
    <Navbar />
    <main className="landing-main">
      <section className="hero">
        <h1>Streamline Your SOP Management Effortlessly</h1>
        <p>
          Welcome to the Smart SOP & Training Assistant platform, where managing your standard operating procedures becomes a breeze.
        </p>
        <div>
          <a href="/register" className="btn primary">Get Started</a>
          <a href="/login" className="btn">Learn More</a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Landing;
