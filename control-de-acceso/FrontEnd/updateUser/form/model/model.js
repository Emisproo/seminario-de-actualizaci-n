class Model 
{
    constructor(){}

    updateUser(data)
    {
        return fetch('../../../backend/updateUser.php', {method: 'POST', body: JSON.stringify(data)}).then(response => response.json());
    }
}
export{Model};