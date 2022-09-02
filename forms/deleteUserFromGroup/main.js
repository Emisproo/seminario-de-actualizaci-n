import { ModalDialog} from './modal-dialog.js'
import { DeleteUserFromGroup} from './control-access-frontend/deleteUserFromGroup.js'
function main()
{
	document.body.classList.add("w3-container");

	let deleteUserFromGroup = new DeleteUserFromGroup();
	
	let myModalDialog = new ModalDialog();

	let buttonDelete = document.createElement('button');
	buttonDelete.innerText = 'Delete User';

	myModalDialog.innerContent.appendChild(deleteUserFromGroup);
	
	buttonDelete.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonDelete);
}

window.addEventListener('load', main );