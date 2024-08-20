const menu=document.querySelector(".mobile-menu")
const popup=document.querySelector(".popup-window")
const close=document.querySelector(".menu-close")
const bookCar=document.querySelector("#book-car")
const mobIn=document.querySelector(".mobile-inputs")
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

