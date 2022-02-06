import React from "react";
import uniqid from "uniqid";
import CharacterCard from "../CharacterCard/CharacterCard";

export default function Cards({ results }) {
  return (
    <div>
      {results &&
        results.map((result) => {
          return (
            <div key={uniqid()}>
              <CharacterCard result={result}></CharacterCard>
            </div>
          );
        })}
    </div>
  );
}
