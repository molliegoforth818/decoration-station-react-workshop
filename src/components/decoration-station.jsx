import { useEffect, useState } from "react";
import "./decoration-station.css";
import { getItems } from "../services/itemServices.js";
import { getSeasons } from "../services/seasonServices.js";


function DecorationStation() {
  const [items, setItems] = useState([]);
  const [seasons, setSeasons] = useState([]);
  // set up seasons
  const [seasonChoice, setSeasonChoice] = useState(0);
  // set up filtered items
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    console.log("useEffect fired...");
    getItems().then(setItems);
    // set up seasons
    getSeasons().then((seasonResp) => {
      setSeasons(seasonResp);
    });
  }, []);
  // set up seasons
  useEffect(() => {
    console.log(seasonChoice);
    // conditional
    if (seasonChoice === 0) {
      setFilteredItems(items);
    } else {
      const seasonItems = items.filter(
        (season) => season.seasonId === seasonChoice
      );
      setFilteredItems(seasonItems);
    }
  }, [seasonChoice, items]);

  return (
    

        <>
          {/* set up the filter bar */}
          <div id="filter-bar">
            <select
              className="filter-box"
              id="season-select"
              // set up value
              value={seasonChoice}
              // set up event handler
              onChange={(event) => {
                setSeasonChoice(parseInt(event.target.value));
              }}
            >
              <option key="0" value="0">
                All Seasons
              </option>
              {seasons.map((season) => {
                return (
                  <option key={season.id} value={season.id}>
                    {season.name}
                  </option>
                );
              })}
            </select>
          </div>
          {/* map the items */}
          <div className="item-container">
            {/* {items.map((item) => { */}
            {filteredItems.map((item) => {
              return (
                // leave the key off at first
                <div key={item.id} className="item-card">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="item-img"
                  ></img>
                  <div className="item-name">{item.name}</div>
                </div>
              );
            })}
          </div>
        </>
  );
}
export default DecorationStation;
