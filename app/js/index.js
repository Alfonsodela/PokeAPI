// 1. Seleccionar HTML 
const cards = document.getElementById("pokedex");


// const fetchUser = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };
// console.log(fetchUser());



// paso 2: Pedir datos a la API 
const fetchPokemonList = () => {
    const promises = [];
  
    for (let i = 1; i <= 120; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }

  
    Promise.all(promises).then((results) => {
      console.log(results);
      const pokemon = results.map((result) => ({
        id: result.id,
        image: result.sprites['front_shiny'],
        name: result.name,
        type: result.types.map((type) => type.type.name).join(', '),      
        // abilities: result.abilities.map((ability) => ability.ability.name)        
      }));
      displayPokemon(pokemon);
    });
  };
  

  // paso 3: crear los elementos en el DOM
  const displayPokemon = (pokemon) => {
    console.log(pokemon);
  
    const myUser = pokemon.map((newUser) =>
          `
      <li>
          <p>Nº ${newUser.id}</p>
          <img src="${newUser.image}">
          <h2>${newUser.name}</h2>          
          <p>Type: ${newUser.type}</p>
      </li>
      `
      )
      .join("");
    pokedex.innerHTML = myUser;
  };
  

  document.getElementById('pokemonList').addEventListener('click', fetchPokemonList);
//   fetchUser();