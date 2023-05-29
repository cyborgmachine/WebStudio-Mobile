const modal = document.querySelector(".backdrop");

document.addEventListener("click", (e) => {
   const clickOut = e.composedPath().includes(modal);
   if ( ! clickOut ) {
       modal.style.display = "none";
       
   }
})