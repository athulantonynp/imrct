const axios = require('axios');

module.exports= function PostLoginData(username,password){


    let baseURL="https://us-central1-inspiredmonster-136b1.cloudfunctions.net/app/login"

    //let baseURL="http://localhost:5000/inspiredmonster-136b1/us-central1/app/login"

    let body={
        username:username,
        password:password
    }


    return new Promise((resolve,reject)=>{
        axios.post(baseURL,body)
        .then((response) =>{
            if(response.status===200){
                window.sessionStorage.setItem('user',JSON.stringify(response.data))
                resolve(response.data)
            }else{
                reject('Error occured')
            }
         
        } )
        .catch((error) => {
            console.log(error)
         reject(error)
        });
    })

}