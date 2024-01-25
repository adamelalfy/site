const btPlus = document.querySelector(".js-plus");
const colTransport = document.querySelector(",conteneur-transport");

btPlus.addEventListener("click", function() {
    colTransport.classList.toggle("conteneur-transport-invisible");
}
);