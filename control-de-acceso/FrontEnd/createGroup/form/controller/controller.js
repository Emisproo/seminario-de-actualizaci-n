class Controller{
    constructor(view, model){
        this.view = view;
        this.model = model;
    }
    onCreateGroupButtonClick(){
        this.model.createGroup(this.view.getData()).then((response) => {
            console.log(response);
        });
    }
}
export {Controller};