function Solve(val) {
    var v = document.getElementById('result');
    v.value += val;
 }
 
 function Result() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 
 function Clear() {
    var inp = document.getElementById('result');
    inp.value = '';
 }
 
 function Back() {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0, -1);
 }
 
 function Result() {
    var num1 = document.getElementById('result').value;
    try {
       var num2 = eval(num1);
       if (isNaN(num2) || !isFinite(num2)) {
          throw new Error("Invalid expression");
       }
       document.getElementById('result').value = num2;
    } catch (error) {
       document.getElementById('result').value = "Error";
    }
 }

 document.addEventListener("DOMContentLoaded", function () {
    // Attach click event listeners to buttons
    var buttons = document.querySelectorAll('.btn button');
    buttons.forEach(function (button) {
       button.addEventListener('click', function () {
          var value = button.textContent;
          if (value === '←') {
             Back();
          } else {
             Solve(value);
          }
       });
    });
 });
 