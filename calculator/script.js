const l_mode = document.querySelector(".material-symbols-outlined");
const i_box = document.querySelector(".calclayout .na");
const o_box = document.querySelector(".calclayout");
const d_box = document.querySelectorAll(".calclayout .nums");
const op_box = document.querySelectorAll(".calclayout .opr");
const eq_box = document.querySelector(".calclayout .eq");
const bodi = document.querySelector(".bod");
const resultField = document.getElementById('result');

l_mode.addEventListener("click", () => {
    if (l_mode.innerHTML == "dark_mode") 
        {
        l_mode.innerHTML = "light_mode";
        i_box.style.backgroundColor = "rgb(227, 227, 227)";
        o_box.style.backgroundColor = "#f5f5f5";
        bodi.style.background = "linear-gradient(135deg, rgb(172, 191, 206) 35%, rgb(212, 170, 203) 50%, rgb(222, 151, 229) 95%)";
        // bodi.style.animation = "gradient 5s ease-in-out alternate infinite"
        resultField.style.color = "#27292E";
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

    } 
    else {
        l_mode.innerHTML = "dark_mode";
        i_box.style.backgroundColor = "#27292E";
        o_box.style.backgroundColor = "#1E1E1E";
        bodi.style.background = "linear-gradient(135deg, rgb(9, 47, 78) 35%, rgb(14, 20, 68) 50%, rgb(139, 34, 34) 95%)";
        // bodi.style.animation = "gradient 5s ease-in-out alternate infinite";
        resultField.style.color = "aliceblue";
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

function appendValue(value) {
    resultField.value += value;
  }
  
  function clearResult() {
    resultField.value = '';
  }
  
  function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch {
      resultField.value = 'Error';
    }
  }
