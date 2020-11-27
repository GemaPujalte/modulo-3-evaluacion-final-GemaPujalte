import React from "react";
import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import Filters from "./Filters";
import ReturnsError from "./ReturnsError";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return (
      <>
        <Link to="/">
          <button>Intentalo otra vez</button>
        </Link>
        <p className="searchErrorText">
          Oh oh ..... there is no one here with that name ....
        </p>
      </>
    );
  } else {
    const charactersItems = props.characters.map((character, index) => {
      return (
        <CharacterCard
          key={index}
          id={character.id}
          title={character.name}
          image={character.image}
          name={character.name}
          species={character.species}
          episodes={character.episode.length}
        />
      );
    });
    return (
      <div>
        <Filters
          filterEpisodes={props.filterEpisodes}
          filterText={props.filterText}
          handleFilter={props.handleFilter}
        />
        <section className="cardList">{charactersItems}</section>
      </div>
    );
  }
};

export default CharacterList;
