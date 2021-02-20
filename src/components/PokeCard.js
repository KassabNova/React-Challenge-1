import React from "react";

export const PokeCard = (props) => {
  const { pokeMock } = props;
  return (
    <div>
      <h1>Pokemon name: {pokeMock.name}</h1>
      <div>
        <img src={pokeMock.sprites.front_default} alt="" />
        <img src={pokeMock.sprites.front_shiny} alt="" />
      </div>
      <a href={pokeMock.video}>This is a video link</a>
    </div>
  );
};
