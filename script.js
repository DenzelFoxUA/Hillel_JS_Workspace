
const inputButton = document.querySelector("#inputBtn");
const redirectButton = document.querySelector("#redirectBtn");
const urlStorage = document.querySelector("#urlContainer");

let myUrl = "";

inputButton.addEventListener("click", (e) => 
{
    urlStorage.innerHTML = "";
    myUrl = "https://";

    const urlInput = prompt("Enter your URL: ");

    if(urlInput !== "" && urlInput !== null)
    {
        myUrl += urlInput;
        alert("URL Saved");

        let urlRow = document.createElement("h2");
        urlRow.textContent = `URL: ${myUrl}`;
        urlStorage.appendChild(urlRow);
        console.log(myUrl);
    }
    else
    {
        alert("Empty URL is not allowed");
        myUrl = "";
    }

    e.stopPropagation();
});

redirectButton.addEventListener("click", (e) => {
    if(myUrl === "")
    {
        alert("You must add url first!");
        
    }
    else
    {
        window.location.href = myUrl;
    }
    
     e.stopPropagation();
        
})

