
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">DIWALI<span>.</span></Link>

      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/my-day">MY DAY</Link>
        <Link to="/memories">MEMORIES</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="page">
      <div className="content">
        <p className="tag">MY DIWALI EXPERIENCE 2026</p>

        <h1>THE NIGHT<br />OF <span>LIGHTS.</span></h1>

        <p className="description">
          A celebration filled with simple moments,
          happiness and memories worth remembering.
        </p>

        <Link to="/my-day" className="button">
          EXPLORE MY DAY →
        </Link>
      </div>

      <img src="/images/home.jpg" alt="My Diwali" className="page-image" />
    </section>
  );
}

function MyDay() {
  return (
    <section className="page">
      <div className="content">
        <p className="tag">HOW I CELEBRATED</p>

        <h1>MY <span>DIWALI.</span></h1>

        <p className="description">
          Watched a movie on TV, enjoyed bursting crackers
          and had delicious sweets with family.
          These simple moments made my Diwali special.
        </p>

        <Link to="/memories" className="button">
          SEE MY MEMORIES →
        </Link>
      </div>

      <img src="/images/myday.jpg" alt="My Diwali celebration" className="page-image" />
    </section>
  );
}

function Memories() {
  return (
    <section className="page">
      <div className="content">
        <p className="tag">MOMENTS TO REMEMBER</p>

        <h1>MY <span>MEMORIES.</span></h1>

        <p className="description">
          It wasn't about having a big celebration.
          It was about enjoying the little things
          and making memories that last.
        </p>

        <Link to="/" className="button">
          BACK TO HOME →
        </Link>
      </div>

      <img src="/images/memories.jpg" alt="Diwali memories" className="page-image" />
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-day" element={<MyDay />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
