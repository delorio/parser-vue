import axios from "axios";

export default {

    state() {

    },
    getters: {},
    mutations: {},
    actions: {
        async getUrlData(state) {

            try {
                const response = await axios.get('http://localhost:8083/api/getUrlData', {
                    headers: {
                        Authorization: 'Bearer ' + window.localStorage.getItem('Authorization')
                    }
                })
               return response.data
            } catch (error) {
                return {message: error}
            }
        }
    }
}