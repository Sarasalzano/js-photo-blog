//selezione degli elementi di output
const output = document.querySelector(".cards-container");
//console.log(output);

//setto variabile dell'endpoint
const endPoint = "https://lanciweb.github.io/demo/api/pictures/";
//console.log(endPoint);

//chiamata ajax a api
axios.get(endPoint).then((response) => {
//estrapolazione dati
const posts = response.data;
//console.log(posts);

//creo variabile di accumulo
let postsString = "";

posts.forEach(post => {
console.log(post);

postsString += `
<div class="card">
    <img src="./img/pin.svg" alt="pin image" class="pin">
    <figure>
        <img src="${post.url}" alt="blog image" class="image"> 
        <figcaption>
            <span class="img-date">${post.date}</span>
            <span class="img-title">${post.title}</span>
        </figcaption>
    </figure>
</div>
`;
});

//output
output.innerHTML = postsString;

//seleziono tutte le card
const cards = document.querySelectorAll(".card");
//seleziono l'overlay
const overlayDisplay = document.getElementById("overlay");
//seleziono il bottone
const bottone = document.querySelector("button");
//selezione immagine overlay
const overlayImg = document.querySelector(".big-image");
//seleziono immagine delle card
const cardImg = document.querySelectorAll(".image");


//faccio comparire la schermata di overlay al click di una card
cards.forEach(cardItem => {
    cardItem.addEventListener("click", () => {
    overlayDisplay.classList.remove("d-none");
  
    });
});

//faccio scomparire la schermata al click del bottone
bottone.addEventListener("click", () => {
    overlayDisplay.classList.add("d-none");
});
});
