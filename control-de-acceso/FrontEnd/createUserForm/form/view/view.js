import { Controller} from '../controller/controller.js';
class View extends HTMLElement
{
    constructor(model)
    {
        super();

        this.model = model;
        this.controller= new Controller(this, this.model);

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.loginImage = document.createElement('img');
        this.loginImage.src = 'img_avatar4.png';
        this.loginImage.classList.add('w3-circle', 'w3-margin-top');
        this.loginImage.alt = 'Avatar';
        this.loginImage.style.width = '3this.0%';

        this.loginForm = document.createElement('form');
        this.loginForm.classList.add("w3-container", "w3-section");
        //this.loginForm.action = "/action_page.php";

        this.userNameLabel = document.createElement('label');
        this.userNameLabel.innerText = 'User Name';
        this.userNameLabel.style.fontWeight = 'bolder';

        this.userNameInput = document.createElement('input');
        this.userNameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.userNameInput.placeholder = "Enter User Name";
        this.userNameInput.setAttribute('required','true');
        this.userNameInput.id = 'username';

        this.passwordLabel = document.createElement('label');
        this.passwordLabel.innerText = 'Password';
        this.passwordLabel.style.fontWeight = 'bold';

        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.passwordInput.placeholder = "Enter Password";
        this.passwordInput.setAttribute('required','true');
        this.passwordInput.id = 'pass';

        this.loginButton = document.createElement('button');
        this.loginButton.innerText = 'Login';
        this.loginButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");
        this.loginButton.addEventListener('click', ()=> this.controller.onLoginButtonClick());
        
        this.rememberInputCheckbox = document.createElement('input');
        this.rememberInputCheckbox.type = 'checkbox';
        this.rememberInputCheckbox.classList.add("w3-check", "w3-margin-top");
        this.rememberInputCheckbox.placeholder = "Enter Password";
        this.rememberInputCheckbox.setAttribute('checked','checked');
        this.rememberInputCheckbox.innerText = 'Remember me';

    }

    connectedCallback()
    {
        this.loginForm.appendChild(this.userNameLabel);
        this.loginForm.appendChild(this.userNameInput);
        this.loginForm.appendChild(this.passwordLabel);
        this.loginForm.appendChild(this.passwordInput);
        this.loginForm.appendChild(this.loginButton);
        this.loginForm.appendChild(this.rememberInputCheckbox);

        this.container.appendChild(this.loginImage);
        this.container.appendChild(this.loginForm);

        this.appendChild(this.container);

    }

    getData()
    {
        let data =
        {
            username: null,
            password: null
        };

        data.username = document.getElementById('username').value;
        data.password = document.getElementById('pass').value;

        return data;
    }

}
customElements.define( 'x-view', View);

export {View};