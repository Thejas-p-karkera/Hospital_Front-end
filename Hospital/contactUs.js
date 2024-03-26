function validate()
{
    const name = document.getElementById("name").value;
    let name1 = /^[a-zA-Z\s]+$/;

    if(!name1.test(name))
    {
        alert("Name can only include Alphabets!");
    }
    else
    {
        return true;
    }

    const phone = document.getElementById("phone").value;
    let phone1 = /^(\+91\s)?\d{10}$/;

    if(!phone1.test(phone))
    {
        alert("Phone number can only have 10-digits!")
    }
    else
    {
        return true;
    }
    return false
}

function confirmation()
 {
    if (!validate())
     {
        alert("Form is not valid.");
        return false;
    }
    else 
    {
        alert("Your message has been sent successfully!");
        form.action = 'index.html';
        return true;   
    }
}

// function confirm(event)
// {
//     event.preventDefault();
//     alert('Your message has been sent successfully!'); // Show an alert
//     window.location.href = 'index.html';
// }

// document.getElementById('contactForm').addEventListener('submit', confirm);