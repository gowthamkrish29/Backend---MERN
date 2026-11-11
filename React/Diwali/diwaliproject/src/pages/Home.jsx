import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="page">

      <div className="content">
        <p className="tag">MY DIWALI EXPERIENCE 2026</p>

        <h1>
          THE NIGHT
          <br />
          OF <span>LIGHTS.</span>
        </h1>

        <p className="description">
          A celebration filled with lights, happiness
          and unforgettable moments. Welcome to my
          Diwali experience.
        </p>

        <Link to="/my-day" className="button">
          EXPLORE MY DAY →
        </Link>
      </div>

      <img
        src="/images/crackers.jpeg"
        alt="Diwali night"
        className="page-image"
      />

    </section>
  );
};

export default Home;