import{Controller} from '../controller/controller.js';
class View extends HTMLElement
{
    constructor(model)
    {
        super();

        this.model = model;
        this.controller = new Controller(this, this.model);

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.deleteGroupForm = document.createElement('form');
        this.deleteGroupForm.classList.add("w3-container", "w3-section");
        //this.createGroupForm.action = "/action_page.php";

        this.groupnameLabel = document.createElement('label');
        this.groupnameLabel.innerText = 'Group name';
        this.groupnameLabel.style.fontWeight = 'bolder';
        

        this.groupnameInput = document.createElement('input');
        this.groupnameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.groupnameInput.placeholder = "Enter Group name";
        this.groupnameInput.setAttribute('required','true');
        this.groupnameInput.id = 'groupname';

        this.deleteGroupButton = document.createElement('button');
        this.deleteGroupButton.innerText = 'Delete Group';
        this.deleteGroupButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");
        this.deleteGroupButton.addEventListener('click', ()=> this.controller.onDeleteButtonClick());
    }

    connectedCallback()
    {
        this.deleteGroupForm.appendChild(this.groupnameLabel);
        this.deleteGroupForm.appendChild(this.groupnameInput);
    
        this.deleteGroupForm.appendChild(this.deleteGroupButton);

        this.container.appendChild(this.deleteGroupForm);

        this.appendChild(this.container);

    }

    getData()
    {
        let data =
        {
            groupname: null
            
        };

        data.groupname = document.getElementById('groupname').value;
        
        return data;
    }


}
customElements.define( 'x-view', View);

export {View};