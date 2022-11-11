const url = 'http://10.92.198.13:3002/api/apppedidos/'

export const ApiServices = {
    get(endpoint){
        return fetch(`${url}${endpoint}`)
        .then(Response => Response.json())
    },

    post(endpoint, data){
        return fetch(`${url}${endpoint}`,
        {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(data)    
        })

        .then(Response => Response.json())
    },      

    delete(endpoint, id){
        return fetch(`${url}${endpoint}?id=${id}`, {
            method: 'DELETE'
        })

        .then(Response => Response.json())
    }

}