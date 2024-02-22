// let fname = /w/
// let age = /d/
// let contact = /^(\+91\s)?\d{10}$/
// let email = /(@gmail.com)$/

function validate(event)
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
    }
}

function validation()
{
    if(validate())
{
    window.location.href = "index.html";
}
}

function confirmation()
{
    alert("Regesterd Successfullly !");

    window.location.href = 'index.html';
}
