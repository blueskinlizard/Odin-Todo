import Projects from "./projects";
import Form from "./forms";
export default class displayManipulation{
    constructor(){
       this.formsArrayTracker = 0;
       this.formsArray = [];
       this.newButton = document.getElementById("create-new-button");
       this.form = document.getElementById("pop-up-box-task-create-form");
       const DefaultProject = new Projects("Default");
       this.projectsList = [];
       this.projectsList.push(DefaultProject);
       this.projectsList.push(new Projects("Second"));
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
dateInput.placeholder = "MM/DD/YY";
const statusSelect = document.createElement('select');
statusSelect.id = 'status-select-form';
statusSelect.name = 'status-input';
const statusOptions = ['Not started', 'Midway through', 'Almost finished'];
statusOptions.forEach(status => {
    const option = document.createElement('option');
    option.textContent = status;
    statusSelect.appendChild(option);
});
const projectSelect = document.createElement('select');
projectSelect.id = 'project-select-form';
projectSelect.name = 'project-input';
const placeholderOption = document.createElement('option');
this.displayProjectsForm(projectSelect);

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
        this.displayFormsHomepage(this.formsArray[this.arrayTracker]);
        this.formsArrayTracker++;
        let wrapperRemover = document.getElementsByClassName("pop-up-wrapper");
        this.removeInputCard(wrapperRemover);
        
    }
    displayProjectsForm(optionWrapper){
        for(let i =0; i < this.projectsList.length; i++){
            let option = document.createElement('option');
            option.value = this.projectsList[i].name;
            option.textContent = this.projectsList[i].name;
            optionWrapper.appendChild(option);
        }
    }
    removeInputCard(sectionName){
        sectionName[0].remove();
    }
    displayFormsHomepage(form) {
            const formsBaseDisplayWrapper = document.createElement('div');
            formsBaseDisplayWrapper.classList.add('forms-base-display-wrapper');
            const formsBaseDisplay = document.createElement('div');
            formsBaseDisplay.classList.add('forms-base-display');
            const formBase = document.createElement('div');
            formBase.classList.add('form-base');
            const formBaseTitle = document.createElement('h1');
            formBaseTitle.id = 'form-base-title';
            formBaseTitle.textContent = form.title; 
            
            const formBaseDate = document.createElement('h3');
            formBaseDate.id = 'form-base-date';
            formBaseDate.textContent = form.date; 
            
            const formBaseProgress = document.createElement('h3');
            formBaseProgress.id = 'form-base-progress';
            formBaseProgress.textContent = form.status;
            
            const formBaseProject = document.createElement('h3');
            formBaseProject.id = 'form-base-project';
            formBaseProject.textContent = form.projectID + " Project";


            formBase.appendChild(formBaseTitle);
            formBase.appendChild(formBaseDate);
            formBase.appendChild(formBaseProgress);
            formBase.appendChild(formBaseProject);

            formsBaseDisplay.appendChild(formBase);
            formsBaseDisplayWrapper.appendChild(formsBaseDisplay);
            document.body.appendChild(formsBaseDisplayWrapper);
        
    }
    
}