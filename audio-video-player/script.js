window.addEventListener("load", () => {
    const box = document.querySelector(".box");
    const b1 = document.querySelector(".b1");
    const b2 = document.querySelector(".b2");

    
    box.style.color = "#130f30";
    box.style.transform = "translateY(-10px)";
    b1.style.transform = "translateX(-50px)";
    b2.style.transform = "translateX(50px)";

    
    const commonTransition = "all 3s cubic-bezier(.05,.31,.19,.62)";
    box.style.transition = commonTransition;
    b1.style.transition = commonTransition;
    b2.style.transition = commonTransition;

    setTimeout(() => {
        
        box.style.transform = "translateY(-120px) scale(0.9)";
        b1.style.transform = "translateX(10px)";
        b2.style.transform = "translateX(-10px)";
        b1.style.opacity = "1";
        b2.style.opacity = "1";
    }, 3000);
});

const b1 = document.querySelector(".b1");
b1.addEventListener("mouseover", () => {
    b1.style.transition = "transform 0.1s ease-in-out"; 
    b1.style.transform = "scale(1.1)";
});
b1.addEventListener("mouseout", () => {
    b1.style.transform = "scale(1) translateX(10px)";
});
2
const b2 = document.querySelector(".b2");
b2.addEventListener("mouseover", () => {
    b2.style.transition = "transform 0.1s ease-in-out"; 
    b2.style.transform = "scale(1.1)";
});
b2.addEventListener("mouseout", () => {
    b2.style.transform = "scale(1) translateX(-10px)";
});
