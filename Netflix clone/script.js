let accordion = document.getElementsByClassName("accordion");
const totalAccordions = accordion.length;

for (let i = 0; i < totalAccordions; i++) {
  accordion[i].addEventListener("click", (e) => {
    let panel = e.target.nextElementSibling;
   
    if (panel.classList[1] === "panel-closed") {
      e.target.classList.toggle("accordion-active");
      panel.classList.toggle("panel-open");
      closeAllExcept(panel);
    }
  });
} 

const closeAllExcept = (pan) => {
  for (let i = 0; i < totalAccordions; i++) {
    let panelToClose = accordion[i].nextElementSibling;
    if(panelToClose !== pan){
       accordion[i].classList.remove("accordion-active");
       panelToClose.classList.remove("panel-open");
    }
  }
}