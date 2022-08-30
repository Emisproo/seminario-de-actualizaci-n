class DeleteGroupForm extends HTMLElement
{
    constructor()
    {
        super();

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


        this.deleteGroupButton = document.createElement('button');
        this.deleteGroupButton.innerText = 'Delete Group';
        this.deleteGroupButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");

        this.rememberInputCheckbox = document.createElement('input');
        this.rememberInputCheckbox.type = 'checkbox';
        this.rememberInputCheckbox.classList.add("w3-check", "w3-margin-top");
        this.rememberInputCheckbox.placeholder = "Enter action";
        this.rememberInputCheckbox.setAttribute('checked','checked');
        this.rememberInputCheckbox.innerText = 'Remember me';

    }

    connectedCallback()
    {
        this.deleteGroupForm.appendChild(this.groupnameLabel);
        this.deleteGroupForm.appendChild(this.groupnameInput);
    
        this.deleteGroupForm.appendChild(this.deleteGroupButton);
        this.deleteGroupForm.appendChild(this.rememberInputCheckbox);

        this.container.appendChild(this.deleteGroupForm);

        this.appendChild(this.container);

    }
}
customElements.define( 'x-deletegroup-form', DeleteGroupForm);

export {DeleteGroupForm};