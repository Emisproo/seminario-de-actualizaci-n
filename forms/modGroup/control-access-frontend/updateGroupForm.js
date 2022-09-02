class UpdateGroupForm extends HTMLElement
{
    constructor()
    {
        super();

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.updateGroupForm = document.createElement('form');
        this.updateGroupForm.classList.add("w3-container", "w3-section");
        //this.updateGroupForm.action = "/action_page.php";

        this.newGroupNameLabel = document.createElement('label');
        this.newGroupNameLabel.innerText = 'New Group Name';
        this.newGroupNameLabel.style.fontWeight = 'bolder';

        this.newGroupNameInput = document.createElement('input');
        this.newGroupNameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.newGroupNameInput.placeholder = "Enter New Group Name";
        this.newGroupNameInput.setAttribute('required','true');

        this.newActionLabel = document.createElement('label');
        this.newActionLabel.innerText = 'New Action';
        this.newActionLabel.style.fontWeight = 'bold';

        this.newActionInput = document.createElement('input');
        this.newActionInput.type = 'New Action';
        this.newActionInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.newActionInput.placeholder = "Enter new Action";
        this.newActionInput.setAttribute('required','true');

        this.updateGroupButton = document.createElement('button');
        this.updateGroupButton.innerText = 'Update';
        this.updateGroupButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");

        

    }

    connectedCallback()
    {
        this.updateGroupForm.appendChild(this.newGroupNameLabel);
        this.updateGroupForm.appendChild(this.newGroupNameInput);
        this.updateGroupForm.appendChild(this.newActionLabel);
        this.updateGroupForm.appendChild(this.newActionInput);
        this.updateGroupForm.appendChild(this.updateGroupButton);

        this.container.appendChild(this.updateGroupForm);

        this.appendChild(this.container);

    }
}
customElements.define( 'x-updategroup-form', UpdateGroupForm);

export {UpdateGroupForm};