import axios from "axios";

// let base = "http://localhost:5000"
let base = " https://nitro-eqjt.onrender.com"

let userId;
try {
    userId = JSON.parse(localStorage.getItem('aucUser'))._id
} catch (error) {
    userId = null
}

export const api_ = axios.create({
    /* A comment. */
    timeout: 20000,
    headers: {userid: userId},
    baseURL: base+"/api"
})
