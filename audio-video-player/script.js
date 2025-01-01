let a = window.addEventListener("load", () => {
    let element = document.getElementsByClassName("box")[0]; 
    element.style.color = "#130f30";
    element.style.transform = "translateY(-10px)";
    setTimeout(() => {
        element.style.transform = "translateY(-120px) scale(0.9)"; 
        element.style.transition = "all 3s cubic-bezier(.05,.31,.19,.62)"; 

    }, 3000); 
});