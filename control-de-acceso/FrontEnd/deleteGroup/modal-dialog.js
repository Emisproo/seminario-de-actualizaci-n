class ModalDialog extends HTMLElement
{
	constructor()
	{
		super();

		this.classList.add("w3-modal", "w3-center");
		this.innerContent = document.createElement('div');
		this.innerContent.classList.add( "w3-container", "w3-container", "we-opacity", "w3-center");

		
	}

	connectedCallback()
	{
		this.appendChild(this.innerContent);
		
		

	}

	disconnectCallback()
	{
		//to-do
	}

	show()
	{
		this.style.display = 'block';
	}

	hide()
	{
		this.style.display = 'none';
	}
}

customElements.define('x-modal-dialog', ModalDialog );

export { ModalDialog };
