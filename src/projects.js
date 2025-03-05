export default class Projects{
    constructor(name){
        childForms = [];
        this.name = name;
    }
    setProjectOf(form, divToSearch){
        for(let elem in divToSearch){
            if(form.id === elem.id){
                this.childForms.push(elem.title);
            }
        }
    }
}