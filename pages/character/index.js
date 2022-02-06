import React, { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import DefaultLayout from "../../layouts/Default";
import Cards from "../../components/Cards/Cards";

const defaultEndpoint = `https://swapi.dev/api/people/`;

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const Characters = ({ data }) => {
  const { results: defaultResults = [] } = data;
  const [results, updateResults] = useState(defaultResults);
  const [page, updatePage] = useState({
    current: defaultEndpoint,
  });
  const [next, updateNext] = useState("");
  const { current } = page;

  useEffect(() => {
    async function request() {
      const res = await fetch(current);
      const nextRequest = await res.json();

      // If we don't have `previous` value, that means that we're on our "first page"
      // of results, so we want to replace the results and start fresh

      if (!nextRequest.previous) {
        updateResults(nextRequest.results);
        updateNext(nextRequest.next);
        return;
      }

      if (nextRequest.next) {
        // Otherwise we want to append our results
        updateNext(nextRequest.next);
        updateResults((prev) => {
          return [...prev, ...nextRequest.results];
        });
      } else {
        updateNext(null);
      }
    }

    request();
  }, [current]);

  function handleLoadMore() {
    updatePage(() => {
      return {
        current: next,
      };
    });
  }

  return (
    <>
      <DefaultLayout>
        <h1>Search For you favorite characters</h1>
        <Search></Search>
        <Cards results={results}></Cards>

        {next && <button onClick={handleLoadMore}>Load More</button>}
      </DefaultLayout>
    </>
  );
};

export default Characters;