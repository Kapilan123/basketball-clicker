
//This function is to add a score to the database table
function addScore() {
  var table = document.getElementById("myTable");
  //insertRow() creates the new row
  var row = table.insertRow();
  //insertCell() creates the new cell in the row
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);
  var cell4 = row.insertCell(4);
  //Each variable called is taking the input value and adding it to the corresponding cell
  cell0.innerHTML = document.getElementById('image').value;
  cell1.innerHTML = document.getElementById('cellOne').value;
  cell2.innerHTML = document.getElementById('cellTwo').value;
  cell3.innerHTML = document.getElementById('cellThree').value;
}
