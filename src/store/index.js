import {createStore} from "vuex";
import indexUrls from "./Urls/indexUrls.js";

const index = createStore({
    modules:{
        indexUrls
    }
})
export default index