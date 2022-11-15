class Controller
{
    constructor(view, model){
        this.view = view;
        this.model = model;
    }

    onLoginButtonClick(){
        this.model.createUser(this.view.getData()).then((response)=>{
            console.log(response);
        });
    }
}
export{Controller};