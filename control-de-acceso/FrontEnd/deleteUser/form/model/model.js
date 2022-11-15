class Model 
{
    constructor(){}

    deleteUser(data)
    {
        return fetch('../../../backend/deleteUser.php', {method: 'POST', body: JSON.stringify(data)}).then(response => response.json()); 
    }
}
export{Model};