import axios from 'axios';


type Props = {
  email: String,
  password:String
};

const url = 'https://dev-api.contender-logistics.draketechdev.ca/api/auth/login'
const ApiLogin = async ({email,password}: Props) => {
  
  return await axios.post(url, {
    email: email,
    password: password
  }, {
    headers: {
      'Content-Type': 'application/json'
    },
  }).catch(err => { console.error(err) })


}

export default ApiLogin