import { ModalDialog} from './modal-dialog.js';
import {Model} from './form/model/model.js'
import { View} from './form/view/view.js';
function main()
{
	document.body.classList.add("w3-container");

	let model = new Model();
	let view = new View(model);
	
	let myModalDialog = new ModalDialog();

	let buttonDelete = document.createElement('button');
	buttonDelete.innerText = 'Delete User';

	myModalDialog.innerContent.appendChild(view);
	
	buttonDelete.addEventListener('click', ()=>myModalDialog.show());
	
	
	document.body.appendChild(myModalDialog);
	document.body.appendChild(buttonDelete);
}

window.addEventListener('load', main );