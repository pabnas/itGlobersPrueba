import axios from "axios";

const url: string = "https://reqres.in"

function login(user) {
    axios.post(url + '/api/login', user)
        .then()
        .catch(function (error){
            let errorMsg = error.response.data.error
            console.log(errorMsg);
            return(errorMsg);
        });
}
export { login }