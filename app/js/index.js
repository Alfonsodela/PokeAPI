// 1. Seleccionar HTML 
const cards = document.getElementById("pokedex");


// const fetchUser = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };
// console.log(fetchUser());



// paso 2: Pedir datos a la API 
const fetchUser = () => {
    const promises = [];
  
    for (let i = 1; i <= 10; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
  
    Promise.all(promises).then((results) => {
      console.log(results);
      const user = results.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
      }));
      displayUser(user);
    });
  };
  

  // paso 3: crear los elementos en el DOM
  const displayUser = (user) => {
    console.log(user);
  
    const myUser = user.map((newUser) =>
          `
      <li>
          <h2>${newUser.name}</h2>
          <img src="${newUser.image}">
          <p>${newUser.type}</p>
          <p>${newUser.id}</p>
      </li>
      `
      )
      .join("");
    pokedex.innerHTML = myUser;
  };
  

  document.getElementById('pokemonList').addEventListener('click', fetchUser);
//   fetchUser();