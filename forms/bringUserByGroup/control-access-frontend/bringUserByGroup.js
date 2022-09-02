class BringUsersByGroupForm extends HTMLElement
{
    constructor()
    {
        super();

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.bringUsersByGroupForm = document.createElement('form');
        this.bringUsersByGroupForm.classList.add("w3-container", "w3-section");
        //this.bringUsersByGroupForm.action = "/action_page.php";

        this.groupnameLabel = document.createElement('label');
        this.groupnameLabel.innerText = 'Group Name';
        this.groupnameLabel.style.fontWeight = 'bolder';

        this.groupnameInput = document.createElement('input');
        this.groupnameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.groupnameInput.placeholder = "Enter Group name";
        this.groupnameInput.setAttribute('required','true');

        this.bringUsersByGroupButton = document.createElement('button');
        this.bringUsersByGroupButton.innerText = 'Bring';
        this.bringUsersByGroupButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");

    }

    connectedCallback()
    {
        this.bringUsersByGroupForm.appendChild(this.groupnameLabel);
        this.bringUsersByGroupForm.appendChild(this.groupnameInput);
        
        this.bringUsersByGroupForm.appendChild(this.bringUsersByGroupButton);

        this.container.appendChild(this.bringUsersByGroupForm);

        this.appendChild(this.container);

    }
}
customElements.define( 'x-bringusersbygroup-form', BringUsersByGroupForm);

export {BringUsersByGroupForm};