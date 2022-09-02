import { UpdateGroupForm } from './control-access-frontend/updateGroupForm.js';
import { ModalDialog } from './modal-dialog.js';

function main()
{
	document.body.classList.add("w3-container");

	let updateGroupForm = new UpdateGroupForm();
	
	let myModalDialog = new ModalDialog();

	let buttonOpenModal = document.createElement('button');
	buttonOpenModal.innerText = 'Update Group';

	myModalDialog.innerContent.appendChild(updateGroupForm);
	
	buttonOpenModal.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main );