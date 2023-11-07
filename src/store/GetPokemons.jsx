const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    const errorMessage = `Error fetching Pokemon with ID ${id}: ${response.status} ${response.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data;
};

const storePokemons = async (amount) => {
  const pokemons = new Set();
  const numbers = [];
  const MAX_POKEMON_ID = 500;

  while (pokemons.size < amount) {
    const randomNumber = Math.floor(Math.random() * MAX_POKEMON_ID) + 1;

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
      const pokemon = await getPokemon(randomNumber);

      pokemons.add({
        id: pokemon.id,
        name: pokemon.name,
        url: pokemon.sprites.front_default,
      });
    }
  }

  return Array.from(pokemons);
};

export default storePokemons;
