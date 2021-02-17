import axios from 'axios'

const instance = axios.create({
     baseURL : 'https://pizza-shop-fbcca-default-rtdb.firebaseio.com/'
})

export default instance