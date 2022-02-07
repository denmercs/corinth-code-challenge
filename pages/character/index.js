import React, { useState, useEffect, useRef } from "react";
import CardItem from "../../components/CardItem/CardItem";
import DefaultLayout from "../../layouts/Default";
import uniqid from "uniqid";

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

  // Refs for submit input
  const searchValue = useRef();

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

    const inputValue = searchValue.current.value;
    const endpoint = `${defaultEndpoint}?search=${inputValue}`;

    updatePage({
      current: endpoint,
    });
  }

  return (
    <>
      <DefaultLayout>
        <h1>Starwars Characters</h1>
        <form className="search" onSubmit={handleOnSubmitSearch}>
          <div className="row mb-3">
            <label className="form-label">
              Search for your favorite character:
            </label>
            <input className="form-control" type="search" ref={searchValue} />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
        {results.length !== 0 ? (
          results.map((result) => {
            let { name, birth_year } = result;

            return (
              <div key={uniqid()}>
                <CardItem
                  name={name}
                  birthYear={birth_year}
                  route={defaultEndpoint}
                ></CardItem>
              </div>
            );
          })
        ) : (
          <div>
            <p>Sorry, no data(s) found</p>
          </div>
        )}
        {next && <button onClick={handleLoadMore}>Load More</button>}
      </DefaultLayout>
    </>
  );
};

export default Characters;
