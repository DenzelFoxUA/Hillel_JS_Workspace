document.addEventListener("DOMContentLoaded", function(){
    const changeBtn = document.querySelector("#changerBtn");
    const textToChange = document.querySelector("#textToChange");


    changeBtn.addEventListener("click", function(){
    textToChange.classList.toggle("textCustom");
    
    });
});

