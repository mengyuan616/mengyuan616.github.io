// 1st button
document.getElementById('colorChange').addEventListener('click', function(event) {
    document.body.style.backgroundColor = "#FFFCD1"
  });

// 2nd button
document.getElementById('fontColorChange').addEventListener('click', function(event) {
    document.body.style.color = "#D2691E"
  });

// 3rd button
document.getElementById('fontChange').addEventListener('click', function(event) {
    document.body.style.fontFamily = "Helvetica, sans-serif"
  });

// 4th button
document.getElementById('addText').addEventListener('click', function(event) {
    document.getElementById('replacement').innerHTML = 'Learning JavaScript is hard but fun!'
  });

// 5th button
document.getElementById('addAlert').addEventListener('click', function(event) {
    alert("You're doing homework now!");
  });

