class Controller
{
    constructor(view, model){
        this.view = view;
        this.model = model;
    }

    onDeleteButtonClick(){
        this.model.deleteGroup(this.view.getData()).then((response)=>{
            console.log(response);
            
        });
    }
}
export{Controller};