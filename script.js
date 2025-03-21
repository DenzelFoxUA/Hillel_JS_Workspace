const scrollButton = document.querySelector("#scrollerBtn");
const imgContainer = document.querySelector(".imageContainer");


document.addEventListener("DOMContentLoaded", function(){

    scrollButton.addEventListener("click", function(){
        
        let indexOfImg = Math.floor(Math.random() * 10 + 1);

        let image = document.createElement("img");
        image.src = `./src/${indexOfImg}.jpg`;

        imgContainer.innerHTML = "";

        imgContainer.appendChild(image);

        

    });
})