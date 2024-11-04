async function fetchPokémonPicture(pokémon) {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokémon}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        let data = await response.json();
        let pokémonPicture = data.sprites.other["official-artwork"].front_default
        return pokémonPicture;

    } catch (error) {
        console.error("Failed to fetch Pokémon picture:", error);
        return null;
    }
}

export { fetchPokémonPicture };