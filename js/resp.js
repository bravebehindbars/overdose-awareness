function TheFunction() {
    var link = document.getElementById("Nlink");
        if (link.style.display === "none") {
            link.style.display = "block";
            }
             else { 
                link.style.display = "none";
             }
        }

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}