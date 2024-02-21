const data = {};
const modal = document.getElementById("model");
const form = document.getElementById("form");
const table = document.getElementById("list")
const tableBody = document.querySelector("#list > tbody");

let editEmpId = null;
let sno = 1;
let inc = 1;
function getNewId(){
    return inc++;
}

function toggleModel(){
    modal.classList.toggle("hide-model");
    modal.classList.toggle("show-model");
}

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let id = getNewId();
    const newData = {
        length : form.length.value,
        circum : form.circum.value
    }
    data[id] = newData;
    addNewDataToTable(id , newData);
    form.reset();
    toggleModel();
});
function deleteData(e){
    e.target.parentNode.parentNode.remove();
}
function addNewDataToTable(id , newData){
    let length = 0 , width = 0 , height = 0;
    let row = document.createElement('tr'); 
    let cell = row.insertCell(); 
    cell.innerText = `${sno++}`
    for(let i in newData){
        cell = document.createElement("td");
        cell.innerText = newData[i];
        row.appendChild(cell);
    }
    cell = row.insertCell();
    cell.innerText = height;
    cell =  document.createElement("td");
    cell.innerHTML = `<button class="material-icons" onClick="deleteData(event)">delete</button>`;
    row.appendChild(cell);
    tableBody.appendChild(row);
}

function generatePDF(event) {

    let blob = new Blob(["I am Ad"], {type:"application/pdf"});
    // let blob = new Blob(["I am Ad"], {type:"text/plain"});
    let downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'temp.pdf';
    link.href = downloadUrl;
    link.click();
    // var docDefinition = {
    //     content: [
    //       { text: 'Hello, World!', style: 'header' }
    //     ],
    //     styles: {
    //       header: {
    //         fontSize: 18,
    //         bold: true
    //       }
    //     }
    //   };
    //   var pdfDoc = pdfmake.createPdf(docDefinition);
    //   pdfDoc.download('document.pdf');
    // Create new jsPDF instance
//     const doc = new jsPDF();
  
//     // Get the HTML table
//     const list = document.getElementById('list');
  
//     // Convert table to data URL
//     const dataURL = tableToDataURL(list);
  
//     // Add the table as an image to the PDF
//     doc.addImage(dataURL, 'PNG', 10, 10);
  
//     // Save the PDF
//     doc.save('table.pdf');
//   }
  
// function tableToDataURL(table) {
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');

//     // Set canvas size to match table size
//     canvas.width = table.offsetWidth;
//     canvas.height = table.offsetHeight;

//     // Draw table on canvas
//     ctx.drawImage(table, 0, 0, canvas.width, canvas.height);

//     // Return data URL
//     return canvas.toDataURL('image/png');
}
