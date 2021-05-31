/* eslint-disable */ 
<template>
  <div id="app">
  <b-container fluid class="grey-bg">
    <b-row>
      <b-col cols="4">
          <b-navbar type="light" variant="transparent" sticky>
            <b-navbar-brand href="#"><img class="navbar-logo" src="./assets/logo.png"></b-navbar-brand>
          </b-navbar> 
          <b-row class="navbar-description-v">
              <h4 class="text-left pl-5 pr-5 navbar-description-text">Lorem Ipsum is simply dummy text of 
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley</h4>
          </b-row>
      </b-col>
      <b-col cols="8" class="bg-image mb-5">
          <b-navbar  sticky type="light" variant="transperent">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="navbar-links mt-5" >
                  <b-nav-item class="ml-5" href="#">About us</b-nav-item>
                  <b-nav-item class="ml-5" href="#">Projects</b-nav-item>
                  <b-nav-item class="ml-5" href="#">Contact us</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="navbar-links ml-auto mt-5" >
                  <b-nav-item href="#" class="navbar-item"><span class="text-dark login">Login</span></b-nav-item>
                </b-navbar-nav>
              </b-collapse>
        </b-navbar> 
        <b-row class="bg-image-text" align-h="center" >
           <h2 class="text-center ">We help you run your <br> business <h4 class="bg-text-grey">in a successful way</h4> </h2> 
        </b-row>
      </b-col>
    </b-row>

    
 <about-us 
            >
        <h1 class="about-us__heading">WHAT IS LOREM IPSUM? WHERE DOES IT COME FROM</h1>
        <p class="about-us__info1 pt-2 pb-2 ml-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries</p>
        <p class="about-us__info2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <b-link href="#" class="card-link text-dark">more</b-link>  
  </about-us>
  <projects />
</b-container>
<welcome />
<b-container fluid class="grey-bg">
  <our-advantages :our-advantages-content="ourAdvantagesContent"/>
  <partners  />
</b-container >
<b-container>
<post-create />
  <h1>{{ postsCount }}</h1>
  <div v-for="(post, idx) in allPosts" :key="idx">
             <h1>{{post.title}}</h1>
             <p>{{post.body}}</p>
  </div>
              
</b-container>
<b-container fluid class="footer text-white" >
    <b-row align-v="center pt-5" align-h="around">
        <b-col cols="3">
            <b-link href="#" class="footer-logo"><img :src="require('./assets/logo.png')"></b-link>
        </b-col>
        <b-col cols="3" align-self="stretch">
            <h4>Contact</h4>
            <p class="footer__contact-info mt-4">720017 Isanov street 1/1,<br>
             Bishkek, Kyrgyzstan <br>  
             +996 (990) 601 601 <br>avenir.bishkek@gmail.com www.avenir.edu.kg</p>
        </b-col>
        <b-col cols="3" align-self="stretch">
            <h4>Follow Us</h4>
            <b-link href="#"><b-img :src="require('./assets/instagram.png')" class="footer-icon mt-5 mr-5"></b-img></b-link>
            <b-link href="#"><b-img :src="require('./assets/facebook.png')" class="footer-icon mt-5 mr-5"></b-img></b-link>
            <b-link href="#"><b-img :src="require('./assets/twitter.png')" class="footer-icon mt-5"></b-img></b-link> 
        </b-col>
    </b-row>
    <hr>
    <b-col class="footer__privacy-pol text-center" align-self="stretch" >
        <p>© 2021 | Privacy Policy<br>
          Website is designed by Zero-One project launched under the full support of AVENIR www.01edu.kg</p>
    </b-col>
</b-container>

<router-view/>
</div>
</template>

<script>
    import AboutUs from './components/AboutUs'
    import Projects from './components/Projects'
    import Welcome from './components/Welcome'
    import OurAdvantages from './components/OurAdvantages'
    import Partners from './components/Partners'
    import Experience from './assets/experience.png'
    import Management from './assets/managment_adv.png'
    import { mapGetters, mapActions} from 'vuex'
    import PostCreate from './components/PostCreate'

    export default {
      name: 'app',
      
      data() {
        return {
          isPopupVisible: false,
          
            ourAdvantagesContent: [
            {srcImage: Experience, alt: 'experience img', title: 'Experience', 
            text:'We have strong founders and team with immense experience of collaboration of government and private business in education sector.',
            link: '#'},
            {srcImage: Management, alt: 'management img', title: 'Management', 
            text:'The largest association of enterpreneurs in Kyrgyzstan is the main partner of Avenir.',
            link: '#'}
                               ]
        }
      },

      // computed : {
      //     allPosts() {
      //       return this.$store.getters.allPosts
      //     }
      // },

      computed: {
        ...mapGetters(['allPosts', 'postsCount'])
      },

      methods: mapActions(['getPosts']),

      async mounted() {
        this.getPosts(3)
        
      },

      
      components: {
          AboutUs,
          Projects,
          Welcome,
          OurAdvantages,
          Partners,
          PostCreate
      }
    }

</script>

