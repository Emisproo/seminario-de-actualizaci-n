class Controller
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
    }

    onUpdateButtonClick()
    {
        this.model.updateGroup(this.view.getData()).then((response)=>{
            console.log(response);
        });
    }
}
export{Controller};