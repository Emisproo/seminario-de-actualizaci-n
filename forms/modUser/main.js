import { UpdateUserForm } from './control-access-frontend/updateUserForm.js';
import { ModalDialog } from './modal-dialog.js';

function main()
{
	document.body.classList.add("w3-container");

	let updateUserForm = new UpdateUserForm();
	
	let myModalDialog = new ModalDialog();

	let buttonOpenModal = document.createElement('button');
	buttonOpenModal.innerText = 'Update User';

	myModalDialog.innerContent.appendChild(updateUserForm);
	
	buttonOpenModal.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main );