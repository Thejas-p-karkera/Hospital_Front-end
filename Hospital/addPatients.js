// let fname = /w/
// let age = /d/
// let contact = /^(\+91\s)?\d{10}$/
// let email = /(@gmail.com)$/

function validate()
 {
    const fn = document.getElementById("fname").value;
    let fname = /^[a-zA-Z\s]+$/;

    if (fname.test(fn))
     {
        document.getElementById("p1").innerHTML = "";
    }
     else
      {
        document.getElementById("p1").innerHTML = "Only alphabets allowed";
        return false;
    }

    const ln = document.getElementById("lname").value;
    let lname = /^[a-zA-Z\s]+$/;

    if (lname.test(ln))
     {
        document.getElementById("p2").innerHTML = "";
    }
     else
      {
        document.getElementById("p2").innerHTML = "Only alphabets allowed";
        return false;
    }

    const age = document.getElementById("age").value;
    let age1 = /^\d{2}$/;

    if (age1.test(age))
     {
        document.getElementById("p3").innerHTML = "";
    } 
    else
     {
        document.getElementById("p3").innerHTML = "Only 2-digits allowed";
        return false;
    }

    const contact = document.getElementById("cnum").value;
    let contact1 = /^(\+91\s)?\d{10}$/;

    if (contact1.test(contact))
     {
        document.getElementById("p4").innerHTML = "";
    } 
    else
     {
        document.getElementById("p4").innerHTML = "Only 10-digits alllowed";
        return false;
    }

    const email = document.getElementById("email").value;
    let email1 = /(@gmail.com)$/;

    if (email1.test(email))
     {
        document.getElementById("p5").innerHTML = "";
    } 
    else
     {
        document.getElementById("p5").innerHTML = "Email should end with @gmail.com";
        return false;
    }

    return true;
}

// function validation()
// {
//     if(validate())
// {
//     window.location.href = "index.html";
// }
// }

function confirmation()
 {
    if (validate())
     {
        addValues(); //add patient data to local storage 
        alert("Regesterd Successfullly !");
        form.action = 'index.html';
        return true;
    }
    else 
    {
        alert("Form is not valid.");
        return false;
    }
}


function addValues()
{
const form = document.getElementById("form");
const patientName = document.getElementById("fname").value;
//alert(patientName.value);
const patientLastName = document.getElementById("lname").value;
const patientAge = document.getElementById("age").value;
const patientGender = document.querySelector('input[name="gender"]:checked').value;
const patientContact = document.getElementById("cnum").value;
const patientEmail = document.getElementById("email").value;


localStorage.setItem('p-name', patientName);
localStorage.setItem('p-lastName', patientLastName);
localStorage.setItem('p-age', patientAge);
localStorage.setItem('p-gender', patientGender);
localStorage.setItem('p-contact', patientContact);
localStorage.setItem('p-email', patientEmail);

//window.location.href = 'index.html';
}