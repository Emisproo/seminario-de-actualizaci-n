
class Model 
{
    constructor(){}

    createGroup(data){
        console.log(data);
        fetch('../../../backend/createGroup.php', {method: 'POST', body: JSON.stringify(data)}).then(response => response.json());
      
    }
}

export {Model};