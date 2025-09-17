//selezione degli elementi di output
const output = document.querySelector(".main-row");
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
                                <span id="img-date">${post.date}</span>
                                <span id="img-title">${post.title}</span>
                            </figcaption>
                        </figure>
                    </div>
                `

});

//output
output.innerHTML = postsString;

});
