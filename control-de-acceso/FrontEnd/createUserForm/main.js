import { View } from './form/view/view.js';
import {Model} from './form/model/model.js';
import { ModalDialog } from './modal-dialog.js';

function main()
{
	document.body.classList.add("w3-container");

	let model = new Model();
	let view = new View(model);
	
	let myModalDialog = new ModalDialog();

	let buttonOpenModal = document.createElement('button');
	buttonOpenModal.innerText = 'Create User';

	myModalDialog.innerContent.appendChild(view);
	
	buttonOpenModal.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main );