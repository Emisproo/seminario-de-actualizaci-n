import { BringUsersByGroupForm } from './control-access-frontend/bringUserByGroup.js';
import { ModalDialog } from './modal-dialog.js';

function main()
{
	document.body.classList.add("w3-container");

	let bringUserByGroup = new BringUsersByGroupForm();
	
	let myModalDialog = new ModalDialog();

	let buttonOpenModal = document.createElement('button');
	buttonOpenModal.innerText = 'Bring User By Group';

	myModalDialog.innerContent.appendChild(bringUserByGroup);
	
	buttonOpenModal.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main );