const box = document.querySelector(".box");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const anib1 = document.querySelector(".anib1");
const anib2 = document.querySelector(".anib2");
const aud = document.querySelector(".audio");
const bbrl = document.querySelector(".bor-blr");


window.addEventListener("load", () => 
{
   
    box.style.color = "#130f30";
    box.style.transform = "translateY(-10px)";
    b1.style.transform = "translateX(-50px)";
    b2.style.transform = "translateX(50px)";

    
    const commonTransition = "all 3s cubic-bezier(.05,.31,.19,.62)";
    box.style.transition = commonTransition;
    b1.style.transition = commonTransition;
    b2.style.transition = commonTransition;

    setTimeout(() => 
    {
        box.style.transform = "translateY(-120px) scale(0.9)";
        b1.style.transform = "translateX(10px)";
        b2.style.transform = "translateX(-10px)";
        b1.style.opacity = "1";
        b2.style.opacity = "1";
    }, 3000);
}
);
b1.addEventListener("mouseover", () => {
    b1.style.transition = "transform 0.1s ease-in-out"; 
    b1.style.transform = "scale(1.1) translateX(10px)";
});
b1.addEventListener("mouseout", () => {
    b1.style.transform = "scale(1) translateX(10px)";
});
b2.addEventListener("mouseover", () => {
    b2.style.transition = "transform 0.1s ease-in-out"; 
    b2.style.transform = "scale(1.1) translateX(-10px)";
});
b2.addEventListener("mouseout", () => {
    b2.style.transform = "scale(1) translateX(-10px)";
}); 

b1.addEventListener("click", () => {
    anib1.style.display = "block";
    setTimeout(() => 
    {
        anib1.style.transition = "transform 0.5s ease-in-out"; 
        anib1.style.transform = "scale(200)";

    }, 500);
    setTimeout(() => 
    {
        aud.style.display = "block";
        bbrl.style.display = "block";
        box.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";
        anib1.style.transition = "transform 0.5s ease-in-out"; 
        anib1.style.transform = "scale(0)";
    }, 1000);
});

b2.addEventListener("click", () => {
    anib2.style.display = "block";
    setTimeout(() => 
    {
        anib2.style.transition = "transform 0.5s ease-in-out"; 
        anib2.style.transform = "scale(200)";

    }, 500);
    setTimeout(() => 
    {
        box.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";

        anib2.style.transition = "transform 0.5s ease-in-out"; 
        anib2.style.transform = "scale(0)";
    }, 1000);
});