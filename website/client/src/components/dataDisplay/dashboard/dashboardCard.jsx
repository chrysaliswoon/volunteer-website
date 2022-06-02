import { Link } from "react-router-dom";

export default function DashboardCards({imgsrc, imgalt, title, description, button, onClick}) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={imgsrc}
          alt={imgalt}
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <Link to={onClick}>
          <button class="btn btn-primary" onClick={onClick}>{button}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
