import axios from "axios";

const url: string = "https://reqres.in"

function loginUser(user) {
    axios.post(url + '/api/login', user)
        .then()
        .catch(function (error){ console.log(error) });
}


export {loginUser}