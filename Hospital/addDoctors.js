function validate() {
    const fn = document.getElementById("fname").value;
    let fname = /^[a-zA-Z\s]+$/;

    if (fname.test(fn)) {
        document.getElementById("p1").innerHTML = "";
    } else {
        document.getElementById("p1").innerHTML = "Invalid Name";
    }

    const specialization = document.getElementById("specialization").value;
    let specializationRegex = /^[a-zA-Z\s]+$/;
    if (specializationRegex.test(specialization)) {
        document.getElementById("p2").innerHTML = "";
    } else {
        document.getElementById("p2").innerHTML = "Invalid Specialization";
    }

    const experience = document.getElementById("experience").value;
    let experienceRegex = /^\d+$/;
    if (experienceRegex.test(experience)) {
        document.getElementById("p3").innerHTML = "";
    } else {
        document.getElementById("p3").innerHTML = "Invalid Experience";
    }

    const contact = document.getElementById("contact").value;
    let contactRegex = /^(\+91\s)?\d{10}$/;
    if (contactRegex.test(contact)) {
        document.getElementById("p4").innerHTML = "";
    } else {
        document.getElementById("p4").innerHTML = "Invalid contact";
    }

    const email = document.getElementById("email").value;
    let emailRegex = /^\w+@\w+\.\w+$/;
    if (emailRegex.test(email)) {
        document.getElementById("p5").innerHTML = "";
    } else {
        document.getElementById("p5").innerHTML = "Invalid email";
    }
}

function confirmation() {
    alert("Registered Successfully!");
}function validate() {
    const fn = document.getElementById("fname").value;
    let fname = /^[a-zA-Z\s]+$/;

    if (fname.test(fn)) {
        document.getElementById("p1").innerHTML = "";
    } else {
        document.getElementById("p1").innerHTML = "Invalid Name";
    }

    const specialization = document.getElementById("specialization").value;
    let specializationRegex = /^[a-zA-Z\s]+$/;
    if (specializationRegex.test(specialization)) {
        document.getElementById("p2").innerHTML = "";
    } else {
        document.getElementById("p2").innerHTML = "Invalid Specialization";
    }

    const experience = document.getElementById("experience").value;
    let experienceRegex = /^\d+$/;
    if (experienceRegex.test(experience)) {
        document.getElementById("p3").innerHTML = "";
    } else {
        document.getElementById("p3").innerHTML = "Invalid Experience";
    }

    const contact = document.getElementById("contact").value;
    let contactRegex = /^(\+91\s)?\d{10}$/;
    if (contactRegex.test(contact)) {
        document.getElementById("p4").innerHTML = "";
    } else {
        document.getElementById("p4").innerHTML = "Invalid contact";
    }

    const email = document.getElementById("email").value;
    let emailRegex = /^\w+@\w+\.\w+$/;
    if (emailRegex.test(email)) {
        document.getElementById("p5").innerHTML = "";
    } else {
        document.getElementById("p5").innerHTML = "Invalid email";
    }
}

function confirmation() {
    alert("Registered Successfully!");
}