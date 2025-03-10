import "./styles.css";
import displayManipulation from "./displayManipulation";
const newForm = document.getElementById("create-new-button");
const pageDisplay = new displayManipulation();
document.addEventListener("DOMContentLoaded", ()=>{
})
    newForm.addEventListener("click", () => {
        pageDisplay.createInputCard();
        const form = document.getElementById("pop-up-box-task-create-form");
        form.addEventListener("submit", (event) => {    
            event.preventDefault(); 
            pageDisplay.buttonSubmission();  
        });
        
    });

