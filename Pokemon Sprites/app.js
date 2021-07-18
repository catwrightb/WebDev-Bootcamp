// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const endUrl = ".png"

printPokenon(151);

// const image = document.createElement('img');
// image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png";
// container.appendChild(image);

function printPokenon(num) {
    for (let index = 1; index <= num; index++) {
       
        
        const poke = document.createElement('div');
        poke.classList.add("Pokemon");
      
        const label = document.createElement('span');
        label.innerText = `${'#'+index}`;
        label.setAttribute("id", index);

        const image = document.createElement('img');
        const newUrl = url.concat(index, endUrl);
        image.src = newUrl;
        poke.appendChild(label);
        poke.appendChild(image);
        
        container.appendChild(poke);
    
        
    }
}



// // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector('#container');
// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


// for (let i = 1; i <= 151; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`


//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon)
// }
