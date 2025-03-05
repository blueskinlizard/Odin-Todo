import {Projects} from "./projects";
import {Form} from "./forms";
export default class displayManipulation{
    constructor(){
       this.newButton = document.getElementById("create-new-button");
       this.newButton.addEventListener("click", function(){
        createInputCard("content");
       })
    }
    createInputCard(className){
        content = document.getElementsByClassName(className);
        content[0].innerHTML = `
<div class="pop-up-wrapper">
    <div class="pop-up-box">
        <div class="pop-up-title-wrapper">
            <h1 id="pop-up-box-h1">Create task</h1>
        </div>
        <form id="pop-up-box-task-create-form">
            <div class="create-wrapper">
                <input placeholder="Task Name" id="title-input-form" name="title-input">
                <input placeholder="MM/DD/YY" id="date-input-form" name="date-input">
                <select id="status-select-form" name="status-input">
                    <option value="not-started">Not started</option>
                    <option value="midway-through">Midway through</option>
                    <option value="almost-finished">Almost finished</option>
                </select>
                <select id="project-select-form" name="project-input">
                    <option value="placeholder">Nothing yet</option>
                </select>
            </div>
            <div class="button-wrappers">
                <button id="confirm-button">Add</button>
                <button id="cancel-button">Cancel</button>
            </div>
        </form>
    </div>
</div>
`;
    }
    buttonSubmission(){

    }
}