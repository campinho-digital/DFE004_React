import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './components/CharacterCard';
import CharacterInfo from './components/CharacterInfo';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [searchName, setSearchName] = useState('');
  // const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);
  // [currentPage, searchName, filterStatus] - Comentei para não incluir os filtros nos argumentos do useEffect

  const fetchCharacters = () => {
    let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
    // if (searchName) {
    //   url += `&name=${searchName}`;
    // }
    // if (filterStatus) {
    //   url += `&status=${filterStatus}`;
    // }
    axios.get(url)
      .then((response) => {
        setCharacters((prevCharacters) => [...prevCharacters, ...response.data.results]);
        setTotalPages(response.data.info.pages);
      })
      .catch((error) => console.error(error));
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // const handleSearchNameChange = (event) => {
  //   setSearchName(event.target.value);
  // };

  // const handleFilterStatusChange = (event) => {
  //   setFilterStatus(event.target.value);
  //   setSearchName('');
  // };

  // const clearSearch = () => {
  //   setSearchName('');
  // };

  return (
    <div className="app">
      <header>
        <img
          src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png"
          alt="Rick and Morty Logo"
        />
        <h2>Lista de Personagens</h2>

        {/* Campo de busca por nome do personagem */}
        {/* <div>
          <input
            type="text"
            value={searchName}
            onChange={handleSearchNameChange}
            placeholder="Buscar por nome"
          />
        </div> */}

        {/* Filtro de status */}
        {/* <div>
          <label>Filtrar por status:</label>
          <select value={filterStatus} onChange={handleFilterStatusChange}>
            <option value="">Todos</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <button onClick={clearSearch}>Limpar Busca</button>
        </div> */}
      </header>
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} onClick={() => handleCharacterClick(character)}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>
      {selectedCharacter && <CharacterInfo character={selectedCharacter} />}
      <button className="button-loadMore" onClick={handleLoadMore}>Carregar Mais</button>
    </div>
  );
};

export default App;