import movie from "../assets/image/image1.jpeg";
import { Link } from "react-router-dom";

const MyDay = () => {
  return (
    <section className="page">

      <div className="content">
        <p className="tag">HOW I CELEBRATED</p>

        <h1>
          MY <span>DIWALI.</span>
        </h1>

        <p className="description">
          My Diwali was filled with simple and happy
          moments. I watched a movie on TV, enjoyed
          the celebrations and ate delicious sweets.
          It was a day worth remembering.
        </p>

        <Link to="/memories" className="button">
          SEE MY MEMORIES →
        </Link>
      </div>

      <img
        src={movie}
        alt="Movie watched on Diwali"
        className="page-image"
      />

    </section>
  );
};

export default MyDay;