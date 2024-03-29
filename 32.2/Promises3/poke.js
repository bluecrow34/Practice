$(function(){  
let url = "https://pokeapi.co/api/v2";


///part1
$.getJSON(`${url}/pokemon/?limit=1000`).then(data => {
    console.log(data);
  });

///part2
$.getJSON(`${url}/pokemon/?limit=1000`)
.then(data => {
  let randomPokemonUrls = [];
  for (let i = 0; i < 3; i++) {
    let randomIdx = Math.floor(Math.random() * data.results.length);
    let urlp = data.results.splice(randomIdx, 1)[0].url;
    randomPokemonUrls.push(urlp);
  }
  return Promise.all(randomPokemonUrls.map(urlp => $.getJSON(urlp)));
})
.then(pokemon => {
  pokemon.forEach(p => console.log(p));
});


///part3
let names = null;
  $.getJSON(`${url}/pokemon/?limit=1000`)
    .then(data => {
      let randomPokemonUrls = [];
      for (let i = 0; i < 3; i++) {
        let randomIdx = Math.floor(Math.random() * data.results.length);
        let urlp = data.results.splice(randomIdx, 1)[0].url;
        randomPokemonUrls.push(urlp);
      }
      return Promise.all(randomPokemonUrls.map(urlp => $.getJSON(urlp)));
    })
    .then(data => {
      names = data.map(d => d.name);
      return Promise.all(data.map(d => $.getJSON(d.species.urlp)))
    })
    .then(data => {
      let descriptions = data.map(d => {
        let descriptionObj = d.flavor_text_entries.find(
          entry => entry.language.name === "en"
        );
        return descriptionObj ? descriptionObj.flavor_text : "No description available."; 
      });
      descriptions.forEach((desc, i) => {
        console.log(`${names[i]}: ${desc}`);
      });
    });

  // 4.
  let $btn = $("button");
  let $pokeArea = $("#pokemon-area");

  $btn.on("click", function() {
    $pokeArea.empty();
    let namesAndImages = [];
    $.getJSON(`${url}/pokemon/?limit=1000`)
      .then(data => {
        let randomPokemonUrls = [];
        for (let i = 0; i < 3; i++) {
          let randomIdx = Math.floor(Math.random() * data.results.length);
          let urlp = data.results.splice(randomIdx, 1)[0].url;
          randomPokemonUrls.push(urlp);
        }
        return Promise.all(randomPokemonUrls.map(urlp => $.getJSON(urlp)));
      })
      .then(pokemonData => {
        namesAndImages = pokemonData.map(p => ({
          name: p.name,
          imgSrc: p.sprites.front_default
        }));
        return Promise.all(pokemonData.map(p => $.getJSON(p.species.url)));
      })
      .then(speciesData => {
        speciesData.forEach((d, i) => {
          let descriptionObj = d.flavor_text_entries.find(function(entry) {
            return entry.language.name === "en";
          });
          let description = descriptionObj ? descriptionObj.flavor_text : "";
          let { name, imgSrc } = namesAndImages[i];
          $pokeArea.append(makePokeCard(name, imgSrc, description));
        });
      });
  });

  function makePokeCard(name, imgSrc, description) {
    return `
      <div class="card">
        <h1>${name}</h1>
        <img src=${imgSrc} />
        <p>${description}</p>
      </div>
    `;
  }
})