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
        document.getElementById("p1").innerHTML = "Invalid Name";
    }

    const age = document.getElementById("age").value;
    let age1 = /\d/;

    if (age1.test(age))
     {
        document.getElementById("p2").innerHTML = "";
    } 
    else
     {
        document.getElementById("p2").innerHTML = "Invalid age";
    }

    const contact = document.getElementById("cnum").value;
    let contact1 = /^(\+91\s)?\d{10}$/;

    if (contact1.test(contact))
     {
        document.getElementById("p3").innerHTML = "";
    } 
    else
     {
        document.getElementById("p3").innerHTML = "Invalid contact";
    }

    const email = document.getElementById("email").value;
    let email1 = /(@gmail.com)$/;

    if (email1.test(email))
     {
        document.getElementById("p4").innerHTML = "";
    } 
    else
     {
        document.getElementById("p4").innerHTML = "Invalid email";
    }
}

function confirmation()
{
    alert("Appointment Booked Sucessfully !");
}