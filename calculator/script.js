const l_mode = document.querySelector(".material-symbols-outlined");
const i_box = document.querySelector(".calclayout .na");
const o_box = document.querySelector(".calclayout");
const d_box = document.querySelectorAll(".calclayout .nums");
const op_box = document.querySelectorAll(".calclayout .opr");
const eq_box = document.querySelector(".calclayout .eq");

// const dh_box = document.querySelectorAll(".calclayout .nums");

l_mode.addEventListener("click", () => {
    if (l_mode.innerHTML == "dark_mode") {
        l_mode.innerHTML = "light_mode";
        i_box.style.backgroundColor = "rgb(236, 236, 236)";
        o_box.style.backgroundColor = "#f5f5f5";
        d_box.forEach(element => 
        {
            element.style.color = "#000000";
            
        });
        op_box.forEach(element => 
        {
            element.style.color = "#000000";
            element.style.backgroundColor = "rgba(252, 255, 239, 0)";
            element.style.border = "solid 2px black";
            eq_box.style.border = "none";
        });

    } else {
        l_mode.innerHTML = "dark_mode";
        i_box.style.backgroundColor = "#27292E";
        o_box.style.backgroundColor = "#1E1E1E";
        d_box.forEach(element => 
        {
            element.style.color = "#FFFFFF";
        }); 

        op_box.forEach(element => 
        {
            element.style.color = "#FFFFFF";
            element.style.backgroundColor = "#3d4048";
            element.style.border = "none";
        });
    }
});
