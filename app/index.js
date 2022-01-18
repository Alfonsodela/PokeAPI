import { displayPokemonList } from "./views/view-list";

const addListeners = () => {
    const cards = document.getElementById("pokedex").addEventListener('click', fetchPokemonList);;
}

wiondow.onload = () => {
    addListeners();
}

