// POKEMON LIST
// Paso 1. Pedir datos a la API
const fetchPokemonList = () => {
  const promises = [];

  for (let i = 1; i <= 120; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  console.log(promises)

  Promise.all(promises).then((results) => {
    console.log(results);
    let pokemonList = results.map((result) => ({
      id: result.id,
      // image: result.sprites['front_shiny'],
      image: result.sprites.other["official-artwork"].front_default,
      name: result.name,
      type: result.types.map((type) => type.type.name).join(", "),
      abilities: result.abilities.map((ability) => ability.ability.name),
    }));

    displayPokemonList(pokemonList);
  });
};

// Paso 2. Crear los elementos en el DOM
const displayPokemonList = (pokemonList) => {
  const pokedexList = document.getElementById("pokedex");

  const myUser = pokemonList.map((item) =>
        `
    <li class="flex-item">
        <p class="flex-item-subtitle">Nº ${item.id}</p>
        <img class="flex-item-image" src="${item.image}">
        <h2 class="flex-item-title">${item.name}</h2>          
        <p class="flex-item-subtitle">Type: ${item.type}</p>
    </li>
    `
    )
    .join("");
  pokedexList.innerHTML = myUser;
};

// 0. Seleccionar elementos en HTML

document
  .getElementById("pokemonList")
  .addEventListener("click", fetchPokemonList);

// POKEMON SEARCH
// Paso 1. Pedir datos a la API

const fetchPokemonDetail = async () => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
  await fetch(baseUrl + input.value)
    .then((res) => res.json())
    .then((data) => {
      let pokemonDetail = {
        id: data.id,
        // image: data.sprites['front_shiny'],
        image: data.sprites.other["official-artwork"].front_default,
        name: data.name,
        type: data.types.map((type) => type.type.name).join(", "),
      };
      displayPokemonDetail(pokemonDetail);
    })
    .catch((error) => {
      let pokemonHTMLString = `<div class="flex-item">
        <p class="flex-item-error"></p>
        <p class="flex-item-error"></p>
        </div>`;
      const pokedexDetail = document.getElementById("pokedex");
      pokedexDetail.innerHTML = pokemonHTMLString;
    });
};

// Paso 2. Pintar elementos en el DOM

const displayPokemonDetail = (pokemonDetail) => {
  const pokedexDetail = document.getElementById("pokedex1");
  const pokemonHTMLDetail = `<li class="flex-item1">
        <p class="flex-item-subtitle">Nº ${pokemonDetail.id}</p>
        <img class="flex-item-image" src="${pokemonDetail.image}">
        <h2 class="flex-item-title">${pokemonDetail.name}</h2>          
        <p class="flex-item-subtitle">Type: ${pokemonDetail.type}</p>
    </li>`;
  pokedexDetail.innerHTML = pokemonHTMLDetail;
};

//0.  Seleccionar elementos en HTML

document
  .getElementById("searchPokemon")
  .addEventListener("click", fetchPokemonDetail);

// POKEMON RANDOM
// Paso 1. Pedir datos a la API

const fetchPokemonRandom = async () => {
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
  const pokeId = Math.round(Math.random() * (150 - 1) + 1);
  const res = await fetch(baseUrl + pokeId);
  const data = await res.json();

  let pokemonRandom = {
    id: data.id,
    // image: data.sprites['front_shiny'],
    image: data.sprites.other["official-artwork"].front_default,
    name: data.name,
    type: data.types.map((type) => type.type.name).join(", "),
  };
  displayPokemonRandom(pokemonRandom);
};

// Paso 2. Crear los elementos en el DOM

const displayPokemonRandom = (pokemonRandom) => {
  const pokedexDetail = document.getElementById("pokedex1");
  console.log(pokemonRandom);
  const pokemonHTMLDetail = `<li class="flex-item1">
        <p class="flex-item-subtitle">Nº ${pokemonRandom.id}</p>
        <img class="flex-item-image" src="${pokemonRandom.image}">
        <h2 class="flex-item-title">${pokemonRandom.name}</h2>          
        <p class="flex-item-subtitle">Type: ${pokemonRandom.type}</p>
    </li>`;
  pokedexDetail.innerHTML = pokemonHTMLDetail;
};

// 0. Seleccionar elementos en HTML
document
  .getElementById("randomPokemon")
  .addEventListener("click", fetchPokemonRandom);
