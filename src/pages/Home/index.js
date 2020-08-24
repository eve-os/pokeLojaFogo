import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from '../../services/pokemon';
import './home.scss';
import PuffLoader from "react-spinners/PuffLoader";
import Sidebar from '../../components/Sidebar';
import { css } from "@emotion/core";

import Card from '../../components/Card';

const override = css`
  display: block;
  margin: 200px auto;
  border-color: #fff;
`;

function Home() {
  const initialUrl = 'https://pokeapi.co/api/v2/type/10';

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      await loadingPokemon(response.pokemon);
      setLoading(false);
    };
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.pokemon.url);
      return pokemonRecord;
    }))
    setPokemonData(_pokemonData);
  }

  return (
    <div>
      <header>
        <img src={require('../../assets/pokeball.png')} alt="pokeloja" />
        <h1>POKELOJA</h1>
        <input type="text" placeholder="Pesquisar Pokemon"  />
      </header>
      {loading ? <PuffLoader
        css={override}
        size={150}
        color={"#fff"}
        loading={loading}
      /> :
        <div className="container">
          <div className="box">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />
            })}
          </div>
          <Sidebar />
        </div>}
    </div>
  );
}
export default Home;