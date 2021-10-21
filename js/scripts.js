$(document).ready(function() {
  $("#triangleParameters").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    if (side1 === side2 && side2 === side3) {
      alert("Equilateral");
    } else if ((side1 === side2 && side2 !== side3)||(side2 === side3 && side3 !== side1)||(side3 === side1 && side1 !== side2)) {
      alert("Isosceles");
    } else if ((side1 + side2 <= side3)||(side2 + side3 <= side1)||(side1 + side3 <= side2)) {
      alert("Not a Triangle");
    } else {
      alert("Scalene");
    }
  });
});