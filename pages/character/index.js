import React, { useState, useEffect, useRef } from "react";
import CardItem from "../../components/CardItem/CardItem";
import DefaultLayout from "../../layouts/Default";
import uniqid from 'uniqid';


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
      current: endpoint
    });
  }

  return (
    <>
      <DefaultLayout>
        <h1>Search For you favorite characters</h1>
        <form className="search" onSubmit={handleOnSubmitSearch}>
          <input type="search" ref={searchValue}/>
          <button>Search</button>
        </form>
        {
          results.map((result) => {
            let {name, birth_year} = result;

            return (
              <div key={uniqid()}>
                <CardItem name={name} birthYear={birth_year} route={defaultEndpoint}></CardItem>
              </div>
            );
          })
        }
        {next && <button onClick={handleLoadMore}>Load More</button>}
      </DefaultLayout>
    </>
  );
};

export default Characters;
