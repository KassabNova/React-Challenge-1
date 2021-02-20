import React from "react";
import "./styles.css";
import { PokeCard } from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your first mini challenge! {mockPokemonData.name}</h1>
      <PokeCard pokeMock={mockPokemonData} />
    </div>
  );
}
