//events of input and its types

const inputBlock = document.querySelector("#outputBlock");
const inputBlock2 = document.querySelector("#outputBlock2");
const inputBlock3 = document.querySelector("#outputBlock3");

document.querySelector("#testInput").addEventListener("input", (e) => {

    inputBlock.textContent = e.target.value;
})

document.querySelector("#testInput2").addEventListener("change", (e) => {
    inputBlock.textContent = e.target.value;
})

document.querySelector("#testInput3").addEventListener("focus", (e) => {
    inputBlock.textContent = "TextText";
})

document.querySelector("#testInput4").addEventListener("blur", (e) => {
    if(!e.target.value)
    {
        inputBlock.textContent = "TextText";
    }
    else
    {
        inputBlock.textContent = "";
    }
    
})

document.querySelector("#testInput5").addEventListener("keyup", (e) => {
    inputBlock.textContent = e.key;
})

document.querySelector("#testInput6").addEventListener("change", (e) => {
    console.log(e.target.checked);
})

document.querySelector("#testInput7").addEventListener("change", (e) => {
    inputBlock2.textContent = `${e.target.value} %`;
})

document.querySelector("#selectTest").addEventListener("change", (e) => {
    inputBlock3.textContent = e.target.value;
})

const form =  document.querySelector("#testForm");
const formContainer = document.querySelector("#formOutput");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //chancel default events

    const textName = document.createElement("p");
    const textLastName = document.createElement("p");
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;

    textName.textContent = `Name: ${name}`;
    textLastName.textContent = `Last name: ${lastName}`;
    formContainer.appendChild(textName);
    formContainer.appendChild(textLastName);
    
});

