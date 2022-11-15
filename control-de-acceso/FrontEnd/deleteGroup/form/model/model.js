
class Model 
{
    constructor(){}
    
    deleteGroup(data)
    {
        return fetch('../../../backend/deleteGroup.php', { method: 'POST', body: JSON.stringify(data)}).then(response => response.json());
    }
}
export{Model};