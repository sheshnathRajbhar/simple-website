const menulinks=document.getElementById("nav-links");
const menuicon=document.getElementById("menuicon");
menuicon.addEventListener("click",()=>{
    
    menulinks.classList.toggle("active");
});