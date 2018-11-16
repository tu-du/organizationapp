

var duedates = [
  {task: "", due: {y:2018, m:10, d:4} },
  {task: "", due: {y:2018, m:10, d:16} },
  {task: "", due: {y:2018, m:10, d:21} }
];
for (var date in duedates) {
  var due = duedates[date].due;
  console.log(`.calendar li[data-date="${due.y}-${due.m}-${due.d}"]`);
  var caldate = document.querySelector(`.calendar li[data-date="${due.y}-${due.m}-${due.d}"]`);
  caldate.classList.add('due');
  caldate.innerHTML += ('<br>' + duedates[date].task);
}


var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demo1").innerHTML = months[d.getMonth()];
