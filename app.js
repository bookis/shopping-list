window.onload = function() {
  var blah;
  list  = document.getElementById("list");
  form = document.getElementById("add-item");
  form.style.colr = "red";
  var li;
  var turnGray = function() {
    this.style.color = "gray";
  }
  var btn = document.getElementById("btn");
  btn.addEventListener("click", function(event) {
    event.preventDefault();
    var i;

    var inputs = this.parentNode.parentNode.getElementsByTagName("input");
    for (i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    li = document.createElement("li");
    li.innerHTML = "Blah";

    li.addEventListener("click", function() {
      this.className = "complete";
    });
    list.appendChild(li);
    // var li is the second element
  });
}
