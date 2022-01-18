// const fetchUser = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };
// console.log(fetchUser());



// paso 2: Pedir datos a la API 

// paso 2.1: Listado
// const fetchPokemonList = () => {
    // const promises = [];
  // 
    // for (let i = 1; i <= 120; i++) {
      // const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      // promises.push(fetch(url).then((res) => res.json()));
    // }
// 
  // 
    // Promise.all(promises).then((results) => {
      // console.log(results);
      // let pokemonList = results.map((result) => ({
        // id: result.id,
        // image: result.sprites['front_shiny'],
        // name: result.name,
        // type: result.types.map((type) => type.type.name).join(', '),      
        // abilities: result.abilities.map((ability) => ability.ability.name)        
      // }));
      // console.log(pokemonList);
      // displayPokemonList(pokemonList);
    // });
  // };
// 

  // paso 2.2: Búsqueda

  // const fetchPokemonDetail = async () => {
    // const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
    // const res = await fetch(baseUrl + search.value);
    // const data = await res.json();
    // console.log(data);

    // let pokemonDetail = {
      // id: data.id,
      // image: data.sprites['front_shiny'],
      // name: data.name,
      // type: data.types.map((type) => type.type.name).join(', '),
    // }; 
    // console.log(pokemonDetail)
    // displayPokemonDetail(pokemonDetail)   
  // };
  


  // paso 2.3: Random

  const fetchPokemonRandom = async () => {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const pokeId = Math.round(Math.random() * (150 - 1) + 1);
    const res = await fetch(baseUrl + pokeId);
    const data = await res.json();
    console.log(data);

    let pokemonDetail = {
      id: data.id,
      image: data.sprites['front_shiny'],
      name: data.name,
      type: data.types.map((type) => type.type.name).join(', '),
    }; 
    console.log(pokemonDetail)
    displayPokemonRandom(pokemonDetail)   
  };



  // paso 3: crear los elementos en el DOM
  // paso 3.1: DOM listado

  // const displayPokemonList = (pokemonList) => {
    // const pokedexList = document.getElementById("pokedex");
    // console.log(pokemonList);
  // 
    // const myUser = pokemonList.map((newUser) =>
          // `
      // <li>
          // <p>Nº ${newUser.id}</p>
          // <img src="${newUser.image}">
          // <h2>${newUser.name}</h2>          
          // <p>Type: ${newUser.type}</p>
      // </li>
      // `
      // )
      // .join("");
    // pokedexList.innerHTML = myUser;
  // };


  // paso 3.2: DOM búsqueda
  // const displayPokemonDetail = (pokemonDetail) => {
    // const pokedexDetail = document.getElementById("pokedex");
    // console.log(pokemonDetail);

    // const pokemonHTMLDetail =
      // `<li>
          // <p>Nº ${data.id}</p>
          // <img src="${data.image}">
          // <h2>${data.name}</h2>          
          // <p>Type: ${data.type}</p>
      // </li>`.join("");
      // pokedexDetail.innerHTML = pokemonHTMLDetail
    //  
  // };

  // paso 3.3: DOM Random

  

  


  // 1. Seleccionar HTML 

// document.getElementById('pokemonList').addEventListener('click', fetchPokemonList);
// document.getElementById('searchPokemon').addEventListener('click', fetchPokemonDetail);
document.getElementById('randomPokemon').addEventListener('click', fetchPokemonRandom);