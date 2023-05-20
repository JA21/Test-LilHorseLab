import axios from 'axios';


type Props = {
    type: String,
    param: any,
    data: Object
};


let Url = 'https://crudcrud.com/api/62709fdd34e6448994ac0835a3918c67';//url base

const ApiCrud = async ({ type, param, data }: Props) => {
    let apiUrl = `${Url}/seller`
    switch (type) {
        case 'post':
            return await axios.post(apiUrl, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).catch(err => { console.error(err) })


        case 'get':
            if (param) {
                return await axios.get(`${apiUrl}/${param}`)
                    .then(function (response: any) {
                        // handle success
                        return response
                    })
                    .catch(error => { console.error(error) })
            }
            console.log('aqui')
            return await axios.get(`${apiUrl}`)
                .then(function (response: any) {
                    // handle success
                    return response
                })
                .catch(error => { console.error(error) })

        case 'put':
            return await axios.put(`${apiUrl}/${param}`,data
                ).catch(error => { console.error(error) })
           

        case 'delete':
            return await axios.delete(`${apiUrl}/${param}`)
            .catch(error => { console.error(error) })
    }
}

export default ApiCrud;