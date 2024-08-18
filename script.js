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


document.getElementById('nav-1').addEventListener('click', function() {
    showInputs('inputs1');
});

document.getElementById('nav-2').addEventListener('click', function() {
    showInputs('inputs2');
});
bookCar.addEventListener('click',function()
{
    mobIn.style.display="block"
})

function showInputs(id) {
    // Hide all input sections
    document.querySelectorAll('.inputs').forEach(function(inputSection) {
        inputSection.style.display = 'none';
    });
    
    // Show the selected input section
    document.getElementById(id).style.display = 'block';
}

const faqs=document.querySelectorAll(".question-answers");
console.log(faqs)
faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})

