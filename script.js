const images = [];
let imgCount = 5;
let currentImgIndex = 0;
const nextBtn = document.getElementById("btnNext");
const prevBtn = document.getElementById("btnPrevious");
const navContainer = document.getElementById("navContainer");

loadImages('img');

async function loadImages(directory)
{
    for(let i = 1; i <= imgCount; i++)
    {
        images.push(`${directory}/${i}.jpg`);
    }

    generateDots();
    showExactImage(0);
}

function generateDots()
{
    navContainer.innerHTML = '';
    for(let i = 0; i < imgCount; i++)
    {
        let navDot = document.createElement("span");
        navDot.classList.add("dot");
        navDot.addEventListener("click",function(){
             showExactImage(i);
            });
        navContainer.appendChild(navDot);
    }
    updateDotsContainer();
}

function showExactImage(index)
{
    let gallery = document.getElementById("imgContainer");
    gallery.innerHTML = '';
    currentImgIndex = index;
    
    let img = document.createElement('img');
    img.src = images[index];
    img.alt = `${index}`;
    img.onerror = function() { this.remove(); };
    gallery.appendChild(img);

    updateDotsContainer();
    updadeButtons();
}

function updadeButtons(){
    nextBtn.disabled = currentImgIndex === imgCount - 1;
    prevBtn.disabled = currentImgIndex === 0;
}

prevBtn.addEventListener("click", (e)=>
{
    if(currentImgIndex > 0)
    {
        currentImgIndex--;
        showExactImage(currentImgIndex);
    } 
});

nextBtn.addEventListener("click", (e)=>
{
    if(currentImgIndex < imgCount-1)
    {
        currentImgIndex++;
        showExactImage(currentImgIndex);
    } 
});

function updateDotsContainer()
{
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dots, i) => {
        dots.classList.toggle("active", i === currentImgIndex);
    });
}