import Link from "next/link";
import React from "react";

export const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron container mt-4">
        <h1 className="display-4">Starwars Knowledge Base</h1>
        <p className="lead">
          This is LifeWay IT's code challenge given to full stack software
          engineering candidates!
        </p>
        <p>Now with The Force Awakens data!</p>
        <p className="lead">
          <Link href="/character">
            <a role="button" type="button" className="btn btn-primary btn-lg">
              Search by Character
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};
