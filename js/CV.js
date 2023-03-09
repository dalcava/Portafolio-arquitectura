const hiddenElements = document.querySelectorAll ('.hidden');
const retrato = document.querySelector(".retrato");
const backRetrato = document.querySelector(".tarjetaNombre");

function expandirRetrato (){
    backRetrato.classList.toggle("tarjetaNombreExpand");
}

retrato.addEventListener("mouseover", expandirRetrato);
retrato.addEventListener("mouseleave", expandirRetrato);

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
}, {
    threshold: 0
})
hiddenElements.forEach((el)=>observer.observe(el));