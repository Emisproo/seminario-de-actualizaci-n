
class Model
{
    constructor(){}

    createUser(data)
    {
        console.log(data);
        return fetch('./createUser.php', {method: 'POST', body: JSON.stringify(data)}).then(response => response.json());
    }
}
export{Model};