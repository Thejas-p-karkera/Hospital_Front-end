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

function confirmation()
 {
    if (validate())
     {
        addValues(); //add Appointments data to local storage 
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
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const cnum = document.getElementById("cnum").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const address = document.getElementById("address").value;
    const disease = document.getElementById("disease").value;

    localStorage.setItem('a-fname',fname);
    localStorage.setItem('a-lname',lname);
    localStorage.setItem('a-age',age);
    localStorage.setItem('a-gender',gender);
    localStorage.setItem('a-cnum',cnum);
    localStorage.setItem('a-email',email);
    localStorage.setItem('a-date',date);
    localStorage.setItem('a-address',address);
    localStorage.setItem('a-disease',disease);
}

