//----------------------------------Get Appointment details -----------------------------------------
const aFirstName = localStorage.getItem('a-fname');
const aLastName = localStorage.getItem('a-lname');
const aAge = localStorage.getItem('a-age');
const aGender = localStorage.getItem('a-gender');
const aEmail = localStorage.getItem('a-email');
const aContact = localStorage.getItem('a-cnum');
const aDate = localStorage.getItem('a-date');
const aAddress = localStorage.getItem('a-address');
const aDisease = localStorage.getItem('a-disease');

let newAppointment = {
    firstName : aFirstName,
    lastname : aLastName,
    age : aAge,
    gender : aGender,
    email : aEmail,
    contact : aContact,
    date : aDate,
    address : aAddress,
    disease : aDisease
};

//array of appointment details
const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

//push new appointment to array
existingAppointments.push(newAppointment);

// Save the updated array back to localStorage
localStorage.setItem('appointments', JSON.stringify(existingAppointments));

//--------------------------------------------Display----------------------------------------

//html element to display patient details
let appointmentContainer = document.getElementById("appointmentContainer");

//All patient details. patients is variable name to store the patient details
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
console.log(appointments);

// Create a table element
let table = document.createElement("table");

 //document.createElement("table").insertRow(0).insertCell(0)

 // Create table header
let headerRow = table.insertRow(0);
let fNameHeader = headerRow.insertCell(0);
// let lNameHeader = headerRow.insertCell(1);
let ageHeader = headerRow.insertCell(1);
let genderHeader = headerRow.insertCell(2);
let contactHeader = headerRow.insertCell(3);
let emailHeader = headerRow.insertCell(4);
let dateHeader = headerRow.insertCell(5);
let diseaseHeader = headerRow.insertCell(6);
let addressHeader = headerRow.insertCell(7);


fNameHeader.innerHTML = "<p></strong>Name</strong></p>";
ageHeader.innerHTML = "<p><strong>Age</strong></p>";
genderHeader.innerHTML = "<p><strong>Gender</strong></p>";
contactHeader.innerHTML = "<p><strong>Contact</strong></p>";
emailHeader.innerHTML = "<p><strong>Email</strong></p>";
dateHeader.innerHTML = "<p><strong>Date</strong></p>";
diseaseHeader.innerHTML = "<p><strong>Disease</strong></p>";
addressHeader.innerHTML = "<p><strong>Address</strong></p>";

appointments.forEach(function (appointment,index) {
    let row = table.insertRow(index + 1);
    row.classList.add("custom-row"); //class name to row i,e <tr>
    let nameCell = row.insertCell(0);
    let ageCell = row.insertCell(1);
    let genderCell = row.insertCell(2);
    let contactCell = row.insertCell(3);
    let emailCell = row.insertCell(4);
    let dateCell = row.insertCell(5);
    let diseaseCell = row.insertCell(6);
    let addressCell = row.insertCell(7);

    
    nameCell.textContent = appointment.firstName; //innerHTML is same as textContent
    console.log(appointment.firstName);
    ageCell.textContent = appointment.age;
    console.log(appointment.age);
    genderCell.textContent = appointment.gender;
    contactCell.textContent = appointment.contact;
    emailCell.textContent = appointment.email;
    dateCell.textContent = appointment.date;
    diseaseCell.textContent = appointment.disease;
    addressCell.textContent = appointment.address;

    appointmentContainer.appendChild(table);
});

//-------------------------------------Clean Local Storage ----------------------------
function clearLocalStorage()
{
   localStorage.clear();
   appointmentContainer.innerHTML ='Nothing is in the local storage';
}

