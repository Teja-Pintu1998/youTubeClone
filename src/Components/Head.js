import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/Constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../Utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  console.log(searchQuery);
  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();
 
  //Here, we implement the debouncing ==> we have to make the API call if the diff between the two successive key strokes is greater than 200ms.
  //if any keystroke is pressed under 200ms, this return will be excecuted before destroying the current component and the next useEffect is called.

  //     Let's clarify the sequence of events:

  // 1. User types a keystroke.
  // 2. searchQuery state updates.
  // 3. The existing useEffect cleanup function is called because a new render is triggered due to the state change of searchQuery.
  // 4. The setTimeout delay is cleared, and the timer is effectively canceled.
  // 5. A new setTimeout is set up with the updated searchQuery.
  // 6. If the user types another keystroke within 200 milliseconds, steps 3 to 5 are repeated.

  //     if the searchQuery is updated after 200 milliseconds:

  // 1. User types a keystroke.
  // 2. searchQuery state updates.
  // 3. The existing setTimeout function starts a timer for 200 milliseconds.
  // 4. User stops typing.
  // 5. 200 milliseconds elapse without any further changes to searchQuery.
  // 6. The setTimeout callback function (i.e., getSearchSuggestions()) is invoked.
  // 7. The useEffect cleanup function is not triggered because there's no state update during the delay.
  // 8. The getSearchSuggestions() function is executed, potentially fetching search suggestions based on the latest searchQuery

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
    // update the results in cache
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
  };

  // const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          // onClick={()=>toggleMenuHandler()}
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://t4.ftcdn.net/jpg/01/09/84/11/360_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg"
          alt="Menu"
        ></img>
        <a href="/">
          <img
            className="h-8 mx-4"
            src="https://i.pngimg.me/thumb/f/720/comdlpng6953295.jpg"
            alt="Youtube_Logo"
          ></img>
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            👀
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed z-4 bg-white py-2 px-2 w-[46rem] rounded-lg shadow-lg border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-2 shadow-sm hover:bg-gray-100 rounded-lg"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-12"
          src="https://i.pinimg.com/564x/9e/5b/c0/9e5bc04372764479079dcbd8f0196318.jpg"
          alt="user_logo"
        ></img>
      </div>
    </div>
  );
};

export default Head;
