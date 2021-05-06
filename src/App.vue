<template>
  <div id="app">
  <b-container fluid class="grey-bg">
    <b-row>
      <b-col cols="4">
          <b-navbar type="light" variant="transparent">
            <b-navbar-brand href="#"><img class="navbar-logo" src="./assets/logo.png"></b-navbar-brand>
          </b-navbar> 
          <b-row class="navbar-description-v">
              <h4 class="text-left pl-5 pr-5 navbar-description-text">Lorem Ipsum is simply dummy text of 
              printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley</h4>
          </b-row>
      </b-col>
      <b-col cols="8" class="bg-image mb-5">
          <b-navbar  type="light" variant="transperent">
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

    <about-us>
            <h1 class="about-us__heading">WHAT IS LOREM IPSUM? WHERE DOES IT COME FROM</h1>
                <p class="about-us__info1 pt-2 pb-2 ml-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries</p>
                <p class="about-us__info2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <b-link href="#" class="card-link text-dark">more</b-link> 
    </about-us>
</b-container>

<b-container fluid class="grey-bg">
  <Welcome />
  <OurAdvantage />
  <Partners />

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
        <popup
        v-if="isPopupVisible"
        @closePopup='closePopupInfo'
        > 
        <p>Hello</p>
        </popup>
</div>
</template>

<script> 
import AboutUs from './components/AboutUs'
import Projects from './components/Projects'
import Welcome from './components/Welcome'
import OurAdvantage from './components/OurAdvantage'
import Partners from './components/Partners'

export default{
  name:'app',
  data() {
    return {

    }
  },
  components:{
    AboutUs,
    Projects,
    Welcome,
    OurAdvantage,
    Partners
  }
}
</script>

<style>
* {

}

.grey-bg {
  background-color: #DFD8D8;
}

/* Navbar Section */

.navbar-links {
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
}

.nav-link {
  color: #fff !important;
}

.nav-link:hover {
  color: #A9A0A0 !important;
}

.login:hover {
  color: #fff !important;
}

.navbar-description-v {
  margin-top: 114px;
}

.navbar-description-text {
  line-height: 1.5;
  font-size: 24px;
  font-weight: 400;
  color: #3d3939;
}

.bg-image {
  background: linear-gradient(0deg, rgba(155, 14, 14, 0.8), rgba(155, 14, 14, 0.8)), 
  url('./assets/bg-image.png');
  background-repeat: no-repeat;
  border-radius: 0px 0px 0px 50px;
  height: 670px;
}

.bg-image-text h2{
  font-size: 42px;
  margin-top: 140px;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.5)
}

.bg-text-grey {
  color: #A9A0A0;
  font-size: 30px;
}

/* About us Section */

/* Projects Section*/

/* Welcome Section*/

/* Our Advantages Section*/

/* Partners Section*/

/* Footer Section*/

.footer {
  background-color: #9B0E0E;
  height: 500px;
}

.footer h4 {
  font-size: 36px;
}

.footer__contact-info {
  font-size: 24px;
  line-height: 1.2;
}

.footer-icon {
  border-radius: 35%;
}

.footer-icon:hover {
width: 50px;
height: 50px;
}

hr {
  color: #fff;
  border: 0.5px solid #fff;
  margin-top: 8rem;           
  width: 600px
}

.footer__privacy-pol {
  font-size: 18px;
}
</style>


