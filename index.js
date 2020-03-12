const fetchPokemon = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const parsedData = await data.json();
  console.log(parsedData);
};

fetchPokemon();

const searchPokemon = async filter => {
  try {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`);
    const parsedData = await data.json();
    const types = parsedData.types.map(type => {
      return `<p>${type.type.name}</p>`;
    });
    const abilities = parsedData.abilities.map(ab => {
      return `<p>${ab.ability.name}</p>`;
    });
    const stats = parsedData.stats.map(stat => {
      return `<p>${stat.stat.name}:${stat.base_stat}</p>`;
    });
    document.getElementById("root").innerHTML = `<p>${
      parsedData.name
    }</p>${types.join("")}<div class='abilities'>${abilities.join(
      ""
    )}</div><div class='stats'>${stats.join("")}</div><img src='${
      parsedData.sprites.front_default
    }'/>`;
  } catch (error) {
    alert("Pokemon not found");
  }
};

document.getElementById("btn").addEventListener("click", () => {
  const pokemonName = document.getElementById("myInput").value;
  searchPokemon(pokemonName);
});
