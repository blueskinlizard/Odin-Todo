import {Projects} from "./projects";
import Form from "./forms";
export default class displayManipulation{
    constructor(){
       this.formsArrayTracker = 0;
       this.formsArray = [];
       this.newButton = document.getElementById("create-new-button");
       this.form = document.getElementById("pop-up-box-task-create-form");
    }
    createInputCard(){
const popUpWrapper = document.createElement('div');
popUpWrapper.classList.add('pop-up-wrapper');
const popUpBox = document.createElement('div');
popUpBox.classList.add('pop-up-box');
const popUpTitleWrapper = document.createElement('div');
popUpTitleWrapper.classList.add('pop-up-title-wrapper');
const popUpTitle = document.createElement('h1');
popUpTitle.id = 'pop-up-box-h1';
popUpTitle.textContent = 'Create task';
popUpTitleWrapper.appendChild(popUpTitle);
const popUpForm = document.createElement('form');
popUpForm.id = 'pop-up-box-task-create-form';
const createWrapper = document.createElement('div');
createWrapper.classList.add('create-wrapper');
const titleInput = document.createElement('input');
titleInput.placeholder = 'Task Name';
titleInput.id = 'title-input-form';
titleInput.name = 'title-input';
const dateInput = document.createElement('input');
dateInput.id = 'date-input-form';
dateInput.name = 'date-input';
dateInput.type = 'date';
const statusSelect = document.createElement('select');
statusSelect.id = 'status-select-form';
statusSelect.name = 'status-input';
const statusOptions = ['Not started', 'Midway through', 'Almost finished'];
statusOptions.forEach(status => {
    const option = document.createElement('option');
    option.value = status.toLowerCase().replace(' ', '-');
    option.textContent = status;
    statusSelect.appendChild(option);
});
const projectSelect = document.createElement('select');
projectSelect.id = 'project-select-form';
projectSelect.name = 'project-input';
const placeholderOption = document.createElement('option');
placeholderOption.value = 'placeholder';
placeholderOption.textContent = 'Nothing yet';
projectSelect.appendChild(placeholderOption);
createWrapper.appendChild(titleInput);
createWrapper.appendChild(dateInput);
createWrapper.appendChild(statusSelect);
createWrapper.appendChild(projectSelect);
popUpForm.appendChild(createWrapper);
const buttonWrappers = document.createElement('div');
buttonWrappers.classList.add('button-wrappers');
const confirmButton = document.createElement('button');
confirmButton.id = 'confirm-button';
confirmButton.textContent = 'Add';
const cancelButton = document.createElement('button');
cancelButton.id = 'cancel-button';
cancelButton.textContent = 'Cancel';
buttonWrappers.appendChild(confirmButton);
buttonWrappers.appendChild(cancelButton);
popUpForm.appendChild(buttonWrappers);
popUpBox.appendChild(popUpTitleWrapper);
popUpBox.appendChild(popUpForm);
popUpWrapper.appendChild(popUpBox);
document.body.appendChild(popUpWrapper);
    }
    buttonSubmission(){
        const taskName = document.getElementById("title-input-form").value;
        const dueDate = document.getElementById("date-input-form").value;
        const status = document.getElementById("status-select-form").value;
        const project = document.getElementById("project-select-form").value;
        this.formsArray[this.arrayTracker] = new Form(taskName, dueDate, status, project);
        this.formsArrayTracker++;
        let wrapperRemover = document.getElementsByClassName("pop-up-wrapper");
        this.removeInputCard(wrapperRemover);
    }
    removeInputCard(sectionName){
        sectionName[0].remove();
    }
}