class Model 
{
    constructor(){}

    updateGroup(data)
    {
        return fetch('../../../backend/updateGroup.php', {method: 'POST', body: JSON.stringify(data)}).then (response => response.json());
    }
}
export{Model};