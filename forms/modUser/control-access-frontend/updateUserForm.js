class UpdateUserForm extends HTMLElement
{
    constructor()
    {
        super();

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.updateUserForm = document.createElement('form');
        this.updateUserForm.classList.add("w3-container", "w3-section");
        //this.updateUserForm.action = "/action_page.php";

        this.newUserNameLabel = document.createElement('label');
        this.newUserNameLabel.innerText = 'New User Name';
        this.newUserNameLabel.style.fontWeight = 'bolder';

        this.newUserNameInput = document.createElement('input');
        this.newUserNameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.newUserNameInput.placeholder = "Enter New User name";
        this.newUserNameInput.setAttribute('required','true');

        this.newPasswordLabel = document.createElement('label');
        this.newPasswordLabel.innerText = 'New Password';
        this.newPasswordLabel.style.fontWeight = 'bold';

        this.newPasswordInput = document.createElement('input');
        this.newPasswordInput.type = 'New Password';
        this.newPasswordInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.newPasswordInput.placeholder = "Enter new Password";
        this.newPasswordInput.setAttribute('required','true');

        this.updateUserButton = document.createElement('button');
        this.updateUserButton.innerText = 'Update';
        this.updateUserButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");

    }

    connectedCallback()
    {
        this.updateUserForm.appendChild(this.newUserNameLabel);
        this.updateUserForm.appendChild(this.newUserNameInput);
        this.updateUserForm.appendChild(this.newPasswordLabel);
        this.updateUserForm.appendChild(this.newPasswordInput);
        this.updateUserForm.appendChild(this.updateUserButton);

        this.container.appendChild(this.updateUserForm);

        this.appendChild(this.container);

    }
}
customElements.define( 'x-updateuser-form', UpdateUserForm);

export {UpdateUserForm};