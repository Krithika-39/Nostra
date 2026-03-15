
// offer
function closeMessage() {
   document.getElementById("messageBox").style.display = "none";
}



function openMenu() {
   document.getElementById("popupMenu").style.right = "0"
}

function closeMenu() {
   document.getElementById("popupMenu").style.right = "-250%"
}

function toggleHeart(el) {

   if (el.style.color == "red") {
      el.style.color = "black"
      el.textContent = "🤍"
   }
   else {
      el.style.color = "red"
      el.textContent = "❤️"
   }

}