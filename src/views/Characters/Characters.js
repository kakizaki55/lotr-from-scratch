import React from 'react';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharacterList from '../../components/CharacterList/CharacterList';

export default function Characters() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setCharacter(data);
    };
    fetchData();
  }, [race]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race, query);
      setCharacter(data);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [query, loading, race]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <button onClick={() => setLoading(true)}>Search</button>
      {character.map((char) => {
        return <CharacterList key={char.id} {...char} />;
      })}
    </div>
  );
}
