const mainContainer = document.getElementById("mainContainer");

const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");

mainContainer.addEventListener("click", (e) => {

    let buttonName = "";
    if(e.target.tagName === "BUTTON")
    {
        buttonName = e.target.textContent.trim();
    }
    alert(`Button was clicked! ${buttonName}`);
})