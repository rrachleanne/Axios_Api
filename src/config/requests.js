
import axios from "axios";


export async function getFirms(){
console.log(`Requesting all Users`)
const response = await axios.get(`${process.env.REACT_APP_URL}`)
console.log("Retrieved Users: ", response) 
return response.data
}