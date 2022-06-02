import { Link } from "react-router-dom";

export default function HeroCard() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {" "}
            Be The Change
          </h1>
          <p className="mb-5">
          Together, we can help one another lead better lives in our island home.Find the opportunity that strikes a chord to kick start your
            volunteering journey today!{" "}
          </p>
          <Link to="/events">
          <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
