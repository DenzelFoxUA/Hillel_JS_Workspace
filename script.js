//how to get data from html

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()

//btn.addEventListner(type: "click", listner: () => func)

const genButton = document.querySelector("#genBtn");
const myPifagorusTable = document.querySelector("#pifagorusTableContainter");


function createTable(size, pifagorusValuesArr)
{
    const table = document.createElement("table");

    for(let i = 0; i < size; i++)
    {
        let row = document.createElement("tr");

        for(let j = 0; j < size; j++)
        {
            let cell = document.createElement("td");
            cell.textContent = `${pifagorusValuesArr[i][j]}`;

            if(i === j)
                cell.classList.add("cellDiagonal");
            else
                cell.classList.add("cell");

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    return table;
}

genButton.addEventListener("click", function (){

    let size = parseInt(document.getElementById("sizeValue").value);

        if(typeof(size) === 'number' && size > 3 && size < 21)
        {
            const pifagorValues = generatePifagorusValues(size);
            let myTable = createTable(size, pifagorValues);
            myPifagorusTable.appendChild(myTable);
        }
        else
        {
            alert("Only numbers >= 4 and <= 20 are allowed!");
        }
        
});

function generatePifagorusValues(size)
{
    let pifagorusTable = [];

    for(let i = 0; i < size; i++)
    {
        let row = [];
        for(let j = 0; j < size; j++)
    {
        if(i === 0 || j === 0)
            row.push(j+i+1);
        else
            row.push(row[0] * pifagorusTable[0][j]);
    }
        pifagorusTable.push(row);
    }

    return pifagorusTable;
}
