import { Link } from "react-router-dom";

const Memories = () => {
  return (
    <section className="page">

      <div className="content">
        <p className="tag">MOMENTS TO REMEMBER</p>

        <h1>
          MY <span>MEMORIES.</span>
        </h1>

        <p className="description">
          Every celebration creates special memories.
          From watching movies to enjoying sweets and
          festive moments, these little experiences
          made my Diwali memorable.
        </p>

        <Link to="/" className="button">
          BACK TO HOME →
        </Link>
      </div>

      <img
        src="/images/memories.jpg"
        alt="Diwali memories"
        className="page-image"
      />

    </section>
  );
};

export default Memories;
