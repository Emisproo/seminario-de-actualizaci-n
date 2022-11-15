class Controller
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
    }

    onDeleteButtonClick()
    {
        this.model.deleteUser(data).then((response)=> {
            console.log(response);
        });
    }
}
export{Controller};