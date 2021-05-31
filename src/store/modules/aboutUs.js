export default {
    mutations: {

    },

    state: {
        aboutUsContent: [
            {text: 'Research & Consulting', className: "research"},
            {text: 'Analytics & Assessment', className: "analytics"},
            {text: 'Management & Operating', className: "managment"},
            {text: 'Investment', className: "investment"}
                      ],
    },

    getters: {
        currentAboutUsContent(state) {
            return state.aboutUsContent
        }
    }

}