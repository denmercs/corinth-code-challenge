import React from "react";
import uniqid from "uniqid";
import CardItem from "../CardItem/CardItem";

export default function CardList({ results }) {
  return (
    <div>
      {results &&
        results.map((result) => {
          return (
            <div key={uniqid()}>
              <CardItem result={result}></CardItem>
            </div>
          );
        })}
    </div>
  );
}
