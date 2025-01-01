let a = window.addEventListener("load", () => {
    let element = document.getElementsByClassName("box")[0]; 
    let element1 = document.getElementsByClassName("b1")[0]; 
    let element2 = document.getElementsByClassName("b2")[0]; 

    element.style.color = "#130f30";
    element.style.transform = "translateY(-10px)";
    element1.style.transform = "translateX(-50px)";
    element2.style.transform = "translateX(50px)";

    setTimeout(() => {
        element.style.transform = "translateY(-120px) scale(0.9)"; 
        element.style.transition = "all 3s cubic-bezier(.05,.31,.19,.62)";
        element1.style.transition = "all 3s cubic-bezier(.05,.31,.19,.62)";
        element2.style.transition = "all 3s cubic-bezier(.05,.31,.19,.62)";
        element1.style.opacity = "100";
        element2.style.opacity = "100";
        element1.style.transform = "translateX(10px)";
        element2.style.transform = "translateX(-10px)";
    }, 3000);

});

let b = document.querySelector(".b1")
b.style.transition = "transform 0.1s ease-in-out";
b.addEventListener("mouseover", ()=>
{
    b.classList.toggle(".b1")
})

// let b = document.querySelector(".b1");

// b.addEventListener("mouseover", () => {
//     b.classList.toggle("hovered");
// });
b.addEventListener("mouseout", ()=>
{
    b.style.transform = "scale(1) translateX(10px)";
})

let c = document.querySelector(".b2")
c.style.transition = "transform 0.1s ease-in-out";
c.addEventListener("mouseover", ()=>
{
    c.style.transform = "scale(1.1)";
})

c.addEventListener("mouseout", ()=>
{
    c.style.transform = "scale(1) translateX(-10px)";
})