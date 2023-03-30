import { create } from "zustand";
import { api_ } from "../Apis/api";


const useProducts = create(set => ({
    products: [],
    wonBids: [],
    activeBids: [],
    getActiveBids: async()=>{
        try {
            let {data} = await api_.get('/trackmybids')
            set(state=>({activeBids: state.activeBids = data}))
        } catch ({message, response: {data}}) {
            alert(data.message || message)
        }
    },
    getWonBids: async()=>{
        try {
            let {data} = await api_.get('/getmywonbids')
            set(state=>({wonBids: state.wonBids = data}))
        } catch (error) {
            alert(error.message)
        }
    },
    sortUp: state=>{
        let sorted = [];
        
    },
    addProducts: async()=>{
        try {
            let response = await api_.get('/allproducts')
            set(state => ({ products: state.products = response.data}))
        } catch (error) {
            alert(error.message)
        }
    },

}))

export default useProducts