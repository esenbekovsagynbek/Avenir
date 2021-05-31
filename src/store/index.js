import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import aboutUs from './modules/aboutUs'
import projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
    

    modules: {
        post,
        aboutUs,
        projects

    }
    }

)