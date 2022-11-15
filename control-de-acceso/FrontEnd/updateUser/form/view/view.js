import {Controller} from '../controller/controller.js';
class View extends HTMLElement
{
    constructor(model)
    {
        super();

        this.model = model;
        this.controller = new Controller (this, this.model);

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.updateUserForm = document.createElement('form');
        this.updateUserForm.classList.add("w3-container", "w3-section");
        //this.updateUserForm.action = "/action_page.php";

        this.UserNameLabel = document.createElement('label');
        this.UserNameLabel.innerText = ' User Name';
        this.UserNameLabel.style.fontWeight = 'bolder';

        this.UserNameInput = document.createElement('input');
        this.UserNameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.UserNameInput.placeholder = "Enter  User name";
        this.UserNameInput.setAttribute('required','true');
        this.UserNameInput.id = 'userName';

        this.newUserNameLabel = document.createElement('label');
        this.newUserNameLabel.innerText = 'New User Name';
        this.newUserNameLabel.style.fontWeight = 'bolder';

        this.newUserNameInput = document.createElement('input');
        this.newUserNameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.newUserNameInput.placeholder = "Enter New User name";
        this.newUserNameInput.setAttribute('required','true');
        this.newUserNameInput.id = 'newName';

        this.newPasswordLabel = document.createElement('label');
        this.newPasswordLabel.innerText = 'New Password';
        this.newPasswordLabel.style.fontWeight = 'bold';

        this.newPasswordInput = document.createElement('input');
        this.newPasswordInput.type = 'New Password';
        this.newPasswordInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.newPasswordInput.placeholder = "Enter new Password";
        this.newPasswordInput.setAttribute('required','true');
        this.newPasswordInput.id = 'newPass';

        this.updateUserButton = document.createElement('button');
        this.updateUserButton.innerText = 'Update';
        this.updateUserButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");
        this.updateUserButton.addEventListener('click',()=> this.controller.onUpdateUserButtonClick());

    }

    connectedCallback()
    {
        this.updateUserForm.appendChild(this.UserNameLabel);
        this.updateUserForm.appendChild(this.UserNameInput);
        this.updateUserForm.appendChild(this.newUserNameLabel);
        this.updateUserForm.appendChild(this.newUserNameInput);
        this.updateUserForm.appendChild(this.newPasswordLabel);
        this.updateUserForm.appendChild(this.newPasswordInput);
        this.updateUserForm.appendChild(this.updateUserButton);

        this.container.appendChild(this.updateUserForm);

        this.appendChild(this.container);

    }

    getData()
    {
        let data =
        {
            userName: null,
            newName: null,
            pass: null
        };

        data.username = document.getElementById('userName').value;
        data,newName = document.getElementById('newName').value;
        data.pass = document.getElementById('newPass').value;

        return data;
    }

}
customElements.define( 'x-view', View);

export {View};