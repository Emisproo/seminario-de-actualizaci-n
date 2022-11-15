class Controller
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
    }

    onUpdateUserButtonClick()
    {
        this.model.updateUser(this.view.getData()).then((response)=>{
            console.log(response);
        });
    }
}
export{Controller};