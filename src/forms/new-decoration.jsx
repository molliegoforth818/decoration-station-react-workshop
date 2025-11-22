import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryServices.js";
import { createItem } from "../services/itemServices.js";
import { getSeasons } from "../services/seasonServices.js";

export const NewDecorationForm = () => {
  const [categories, setCategories] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [userChoices, setUserChoices] = useState({});

  useEffect(() => {
    getCategories().then(setCategories);
    getSeasons().then(setSeasons)
  }, []);

  const handleSaveDecoration = (e) => {
    // preventDefault leave off at first
    e.preventDefault();
    // post check conditional leave off at first
    if (
      userChoices.name &&
      userChoices.imageUrl &&
      userChoices.seasonId &&
      userChoices.categoryId
    ) {
      createItem(userChoices).then(() => {
        setUserChoices({
          name: "",
          imageUrl: "",
          seasonId: 0,
          categoryId: 0,
        });
      });
    } else alert("You missed a field, dingus!");
  };

  return (
    
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item"
            // userChoices state leave off at first
            value={userChoices?.name}
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.name = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            required
            id="imgUrl"
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            // userChoices state leave off at first
            value={userChoices?.imageUrl}
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.imageUrl = event.target.value;
              setUserChoices(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Season:</div>
          {/* season select leave off at first */}
          <select
            className="filter-box"
            id="season-select"
            // userChoices state leave off at first
            value={userChoices?.seasonId}
            onChange={(event) => {
              const copy = { ...userChoices };
              copy.seasonId = parseInt(event.target.value);
              setUserChoices(copy);
            }}
          >
            <option key="0" value="0" disabled>
              Select a Season
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
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Category:</div>
          {/* category select leave off at first */}
          {categories.map((category) => {
            return (
              <div key={category.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={category.id}
                    // userChoices state leave off at first
                    checked={userChoices.categoryId === category.id}
                    onChange={(event) => {
                      const copy = { ...userChoices };
                      copy.categoryId = parseInt(event.target.value);
                      setUserChoices(copy);
                    }}
                  />
                  {category.name}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>
      <button
        className="btn"
        // onClick leave off at first
        onClick={(event) => {
          handleSaveDecoration(event);
        }}
      >
        Add Decoration
      </button>
    </form>
  );
};