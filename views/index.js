
// IMPORT
import {Request} from "../views/Request.js";    
const request = new Request();


setInterval(() => {

    request.get("http://localhost:5060/api/timeline/getDataFromPlc")
    .then(async data => {
        document.getElementById("M1").textContent = data.data.M1;
        document.getElementById("M2").textContent = data.data.M2;
        document.getElementById("M3").textContent = data.data.M3;
        document.getElementById("M4").textContent = data.data.M4;
        document.getElementById("M5").textContent = data.data.M5;
        document.getElementById("M6").textContent = data.data.M6;
        document.getElementById("M7").textContent = data.data.M7;
        document.getElementById("M8").textContent = data.data.M8;
        document.getElementById("M9").textContent = data.data.M9;
        document.getElementById("M10").textContent = data.data.M10;
        document.getElementById("M11").textContent = data.data.M11;
        document.getElementById("M12").textContent = data.data.M12;
        document.getElementById("M13").textContent = data.data.M13;
        document.getElementById("M14").textContent = data.data.M14;
        document.getElementById("M15").textContent = data.data.M15;
    })
    .catch(err => console.log(err));
  }, 1000);


