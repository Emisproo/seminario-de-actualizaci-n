class CreateGroupForm extends HTMLElement
{
    constructor()
    {
        super();

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.createGroupForm = document.createElement('form');
        this.createGroupForm.classList.add("w3-container", "w3-section");
        //this.createGroupForm.action = "/action_page.php";

        this.groupnameLabel = document.createElement('label');
        this.groupnameLabel.innerText = 'Group Name';
        this.groupnameLabel.style.fontWeight = 'bolder';

        this.groupnameInput = document.createElement('input');
        this.groupnameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.groupnameInput.placeholder = "Enter Group name";
        this.groupnameInput.setAttribute('required','true');

        this.actionLabel = document.createElement('label');
        this.actionLabel.innerText = 'Action';
        this.actionLabel.style.fontWeight = 'bold';

        this.actionInput = document.createElement('input');
        this.actionInput.type = 'Action';
        this.actionInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.actionInput.placeholder = "Enter action";
        this.actionInput.setAttribute('required','true');

        this.createGroupButton = document.createElement('button');
        this.createGroupButton.innerText = 'Create Group';
        this.createGroupButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");

    }

    connectedCallback()
    {
        this.createGroupForm.appendChild(this.groupnameLabel);
        this.createGroupForm.appendChild(this.groupnameInput);
        this.createGroupForm.appendChild(this.actionLabel);
        this.createGroupForm.appendChild(this.actionInput);
        this.createGroupForm.appendChild(this.createGroupButton);

        this.container.appendChild(this.createGroupForm);

        this.appendChild(this.container);

    }
}
customElements.define( 'x-creategroup-form', CreateGroupForm);

export {CreateGroupForm};