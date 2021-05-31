import Ets  from '../../assets/ets.png'
import ZeroOne from '../../assets/zero.png'
import Moodle from '../../assets/moodle.png'
export default {
    
    mutations: {

    },

    state: {
        projectsContent: [
            {srcLogo: Ets, alt: 'Logo ETS', title: 'TOEIC', 
            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            link: '#'},
            {srcLogo: ZeroOne, alt: 'Logo ZeroOne', title: 'ZeroOne', className:"zero-one",
            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            link: '#'},
            {srcLogo: Moodle, alt: 'Logo moodle', title: 'Moodle', 
            text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            link: '#'}
            
                                  ]
    },

    getters: {
        currentProjectsContent(state) {
            return state.projectsContent
        }
    }

}