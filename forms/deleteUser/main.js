import { ModalDialog} from './modal-dialog.js'
import { DeleteUserForm} from './control-access-frontend/delete_form.js'
function main()
{
	document.body.classList.add("w3-container");

	let deleteUserForm = new DeleteUserForm();
	
	let myModalDialog = new ModalDialog();

	let buttonDelete = document.createElement('button');
	buttonDelete.innerText = 'Delete User';

	myModalDialog.innerContent.appendChild(deleteUserForm);
	
	buttonDelete.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonDelete);
}

window.addEventListener('load', main );