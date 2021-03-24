import axios from "axios";

// const api = axios.create({
//     baseURL: `${process.env.REACT_APP_URL}`,
//   });

// let token = localStorage.getItem("leap-ss-token");
//     if (token === null) {
//       token = "";
//     }
const api = axios.create({
    
    baseURL: `https://jsonplaceholder.typicode.com/users`,
    headers: {
    //     Authorization: "Bearer " + token,
    'Content-Type':'application/json'
    }
  });

export async function getAllUsers(){
console.log('requesting Users')
const response = await api.get("/")
console.log("retrieved users:", response)
return response.data
}

