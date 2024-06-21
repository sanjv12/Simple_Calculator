document.addEventListener("DOMContentLoaded", function() {
    const disp = document.getElementById("displaytx");

    function calldisplay(val) {
        disp.value += val;
    }

    function clear() {
        disp.value = disp.value.slice(0, -1);
    }

    function allclear() {
        disp.value = "";
    }

    function calculate() {
        try {
            disp.value = eval(disp.value);
        } catch (e) {
            disp.value = "Error";
        }
    }

 
    window.calldisplay = calldisplay;
    window.clear = clear;
    window.allclear = allclear;
    window.calculate = calculate;
});