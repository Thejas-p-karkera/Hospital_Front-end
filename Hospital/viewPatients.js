//----------------------------------Get patient details -----------------------------------------
const patientName = localStorage.getItem('p-name');
const patientLastName = localStorage.getItem('p-lastName');
const patientAge = localStorage.getItem('p-age');
const patientGender = localStorage.getItem('p-gender');
const patientEmail = localStorage.getItem('p-email');
const patientContact = localStorage.getItem('p-contact');

let newPatient = { name: patientName,lastname: patientLastName, age: patientAge,gender:patientGender, contact : patientContact,email : patientEmail  };

//array of patient details
let existingPatients = JSON.parse(localStorage.getItem('patients')) || [];

//push new patient to array
existingPatients.push(newPatient);

// Save the updated array back to localStorage
localStorage.setItem('patients', JSON.stringify(existingPatients));

//console.log(patients[0]);

//--------------------------------------------Display----------------------------------------

//html element to display patient details
let patientContainer = document.getElementById("patientContainer");

//All patient details. patients is variable name to store the patient details
let patients = JSON.parse(localStorage.getItem('patients')) || [];
console.log(patients);

// Create a table element
let table = document.createElement("table");

 //document.createElement("table").insertRow(0).insertCell(0)

 // Create table header
let headerRow = table.insertRow(0);
let nameHeader = headerRow.insertCell(0);
let ageHeader = headerRow.insertCell(1);
let genderHeader = headerRow.insertCell(2);
let contactHeader = headerRow.insertCell(3);
let emailHeader = headerRow.insertCell(4);

nameHeader.innerHTML = "<p>Name</p>";
ageHeader.innerHTML = "<p><strong>Age</strong></p>";
genderHeader.innerHTML = "<p><strong>Gender</strong></p>";
contactHeader.innerHTML = "<p><strong>Contact</strong></p>";
emailHeader.innerHTML = "<p><strong>Email</strong></p>";

patients.forEach(function (patient,index) {
    let row = table.insertRow(index + 1);
    row.classList.add("custom-row"); //class name to row i,e <tr>
    let nameCell = row.insertCell(0);
    let ageCell = row.insertCell(1);
    let genderCell = row.insertCell(2);
    let contactCell = row.insertCell(3);
    let emailCell = row.insertCell(4);
    
    nameCell.textContent = patient.name; //innerHTML is same as textContent
    console.log(patient.name);
    ageCell.textContent = patient.age;
    console.log(patient.age);
    genderCell.textContent = patient.gender;
    contactCell.textContent = patient.contact;
    emailCell.textContent = patient.email;

//     patientDetails.innerHTML = `
//     <p class="data"> ${patient.name}</p>
//     <p class="data"> ${patient.age}</p>
//     <p class="data"> ${patient.gender}</p>
//     <p class="data"> ${patient.contact}</p>
//     <p class="data"> ${patient.email}</p>
// `;
    //patientDetails.textContent = "Name:  " + patient.name + "Age:  " + patient.age;

    // Append the patient details to the container
    patientContainer.appendChild(table);
});

//-------------------------------------Clean Local Storage ----------------------------
function clearLocalStorage()
{
   localStorage.clear();
   patientContainer.innerHTML ='Nothing is in the local storage';
}


//---------------------------------------------------------------------------------

