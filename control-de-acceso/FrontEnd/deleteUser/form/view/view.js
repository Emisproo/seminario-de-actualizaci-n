import {Controller} from '../controller/controller.js';
class View extends HTMLElement
{
    constructor(model)
    {
        super();

        this.model= model;
        this.controller = new Controller (this, this.model);

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.deleteUserForm = document.createElement('form');
        this.deleteUserForm.classList.add("w3-container", "w3-section");
        //this.createUserForm.action = "/action_page.php";

        this.UsernameLabel = document.createElement('label');
        this.UsernameLabel.innerText = 'User name';
        this.UsernameLabel.style.fontWeight = 'bolder';

        this.UsernameInput = document.createElement('input');
        this.UsernameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.UsernameInput.placeholder = "Enter User name";
        this.UsernameInput.setAttribute('required','true');
        this.UsernameInput.id = 'username';

        this.deleteUserButton = document.createElement('button');
        this.deleteUserButton.innerText = 'Delete User';
        this.deleteUserButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");
        this.deleteUserButton.addEventListener('click', ()=> this.controller.onDeleteButtonClick());

    }

    connectedCallback()
    {
        this.deleteUserForm.appendChild(this.UsernameLabel);
        this.deleteUserForm.appendChild(this.UsernameInput);
    
        this.deleteUserForm.appendChild(this.deleteUserButton);

        this.container.appendChild(this.deleteUserForm);

        this.appendChild(this.container);

    }

    getData()
    {
        let data =
        {
            username: null
        };
    
        data.username = document.getElementById('username').value;
    
        return data;
    }
    
}
customElements.define( 'x-view', View);

export {View};