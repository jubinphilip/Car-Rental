const menu=document.querySelector(".mobile-menu")
const popup=document.querySelector(".popup-window")
const close=document.querySelector(".menu-close")
const bookCar=document.querySelector("#book-car")
const mobIn=document.querySelector(".mobile-inputs")

const emailSpan=document.querySelector('#emailSpan')
const numSpan=document.querySelector('#numSpan')
//Validting the froms inside the code
function validateEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;
    return phoneRegex.test(phoneNumber);
}

function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    return nameRegex.test(name);
}
function validateForm() {

    const userName=document.getElementById('username')
const userMail=document.getElementById('usermail')

console.log(userName,userMail)
    document.getElementById('subForm').addEventListener('submit', function(event) {
        event.preventDefault();
    })
    console.log("Validating...");

    const name = userName.value.trim();
    const email = userMail.value.trim();
  

    let isValid = true;

    if (!validateName(name)) {
      emailSpan.innerHTML="Invalid name";
        isValid = false;
        
    }

    if (!validateEmail(email)) {
      emailSpan.innerHTML="Invalid email";
        isValid = false;
        
    }
    if (isValid) {
        console.log("Form is valid!");
    } else {
        console.log("Form validation failed.");
    }

    return isValid; 
}
function validateForm2()
{
    document.getElementById('subForm').addEventListener('submit', function(event) {
        event.preventDefault();
    })
    const userNum=document.getElementById('usernum')
    const phoneNumber = userNum.value.trim();
    if (!validatePhoneNumber(phoneNumber)) {
        numSpan.innerHTML="Invalid Phone"
    }
}
console.log(bookCar,mobIn)
menu.addEventListener('click',function()
{
    popup.style.display="block";
})
close.addEventListener('click',function()
{
    popup.style.display="none";
})

//Code For showing the input boxes while in Button Click
document.getElementById('nav-1').addEventListener('click', function() {
    showInputs('inputs1');
});

document.getElementById('nav-2').addEventListener('click', function() {
    showInputs('inputs2');
});
// Add event listener to the bookCar element
bookCar.addEventListener('click', function() {
    // Check the current display property of mobIn
    if (mobIn.style.display === 'none' || mobIn.style.display === '') {
        // If it's 'none' or an empty string, set it to 'block'
        mobIn.style.display = 'block';
    } else {
        // Otherwise, set it to 'none'
        mobIn.style.display = 'none';
    }
});


//Hiding inputs for mobile at larger screen

function showInputs(id) {
    // Hide all input sections
    document.querySelectorAll('.inputs').forEach(function(inputSection) {
        inputSection.style.display = 'none';
    });
    
    // Show the selected input section
    document.getElementById(id).style.display = 'block';
}
//Showing Answer while Clicking the Question
const faqs=document.querySelectorAll(".question-answers");
console.log(faqs)
faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})

