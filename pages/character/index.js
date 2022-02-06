import React, { useState, useEffect } from "react";
import { Search } from "../../components/Search/Search";
import DefaultLayout from "../../layouts/Default";
import CardList from "../../components/CardList/CardList";

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

  function handleOnSubmitSearch(e) {
    e.preventDefault();

    const { currentTarget = {} } = e;
    const fields = Array.from(currentTarget?.elements);
    const fieldQuery = fields.find((field) => field.name === "query");

    const value = fieldQuery.value || "";
    const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;

    updatePage({
      current: endpoint,
    });
  }

  return (
    <>
      <DefaultLayout>
        <h1>Search For you favorite characters</h1>
        <form className="search" onSubmit={handleOnSubmitSearch}>
          <input name="query" type="search" />
          <button>Search</button>
        </form>
        <CardList results={results}></CardList>

        {next && <button onClick={handleLoadMore}>Load More</button>}
      </DefaultLayout>
    </>
  );
};

export default Characters;
