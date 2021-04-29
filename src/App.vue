
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

    <b-container fluid class="about-us">
        <b-row class="pt-5 mt-5 ">
            <b-col cols="7">
              <b-row>
                <b-link href="#" class="about-us__image research mr-3 mb-3 text-center d-flex">
                    <b-col cols="5.5">
                      <span class="about-us__image-text">Research & Consulting </span>
                    </b-col>
                </b-link>
                <b-link href="#" class="about-us__image analytics mb3 text-center d-flex">
                    <b-col cols="5.5">
                      <span class="about-us__image-text ">Analytcs & Assessment</span>
                    </b-col>
                </b-link>
              </b-row>
              <b-row>
                <b-link href="#" class="about-us__image managment mr-3 text-center d-flex">
                    <b-col cols="5.5">
                      <span class="about-us__image-text">Managment & Operating</span>
                    </b-col>
                </b-link>
                <b-link href="#" class="about-us__image investment text-center d-flex">
                    <b-col cols="5.5">
                      <span class="about-us__image-text pl-5 ">Investment</span>
                    </b-col>
                </b-link>
              </b-row>
            </b-col>
            <b-col cols="5">
                <h1 class="about-us__heading">WHAT IS LOREM IPSUM? WHERE DOES IT COME FROM</h1>
                <p class="about-us__info1 pt-2 pb-2 ml-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries</p>
                <p class="about-us__info2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <b-link href="#" class="card-link text-dark">more</b-link>  
            </b-col>
        </b-row>
    </b-container>

    <b-container fluid class="projects">
        <b-row>
            <b-col cols="2.5" class="title" >
                <h3 class="pt-4 text-right mr-3">Projects</h3>
            </b-col>
            <b-col>
              <b-card-group deck>
                <b-card class="project">
                  <b-img center top :src="require('./assets/ets.png')" alt="Logo ETS" class="mt-3 mb-5"></b-img>
                  <b-card-title class="project__card-title mb-3">Lorem Ipsum</b-card-title>
                  <b-card-text class="project__card-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
                </b-card>
      
                <b-card class="project zero-one">
                  <b-img center top :src="require('./assets/zero.png')" alt="Logo ZeroOne" class="mt-3 mb-5"></b-img>
                  <b-card-title class="project__card-title mb-3">Lorem Ipsum</b-card-title>
                  <b-card-text class="project__card-text ">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
                </b-card>
    
                <b-card class="project">
                  <b-img center top :src="require('./assets/moodle.png')" alt="Logo moodle" class="mt-3 mb-5"></b-img>
                  <b-card-title class="project__card-title mb-3">Lorem Ipsum</b-card-title>
                  <b-card-text class="project__card-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
                </b-card> 
             </b-card-group> 
          </b-col>
        </b-row>
    </b-container> 
</b-container>
<b-jumbotron fluid class="welcome text-center mb-0" header="WELCOME" header-level="4">
      <h5 class="text-center  mt-4">We are the largest company in Kyrgyzstan providing consultation on education. <br>
      Avenir is the only company in Kyrgyzstan providing people with in-depth knowledge of education 
      and related wide range spectrum of education services and projects.</h5>
</b-jumbotron>
<b-container fluid class="grey-bg">
    <b-container fluid class="our-advantages px-0">
      <b-row>
        <b-col>
            <b-card class="our-advantage__card"> 
               <b-img :src="require('./assets/experience.png')" alt="experience img" left class="mr-5">></b-img>    
               <b-card-body class="mr-5">
                  <b-card-title class="our-advantage__card-title">Experience</b-card-title>
                  <b-card-text class="our-advantage__card-text">
                    We have strong founders and team with immense experience of collaboration of government 
                    and private business in education sector.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
               </b-card-body>
            </b-card>
            <b-card class="our-advantage__card">
               <b-img :src="require('./assets/managment_adv.png')" alt="managment img" left class="mr-5">></b-img>    
               <b-card-body>
                  <b-card-title class="our-advantage__card-title">Managment</b-card-title>
                  <b-card-text class="our-advantage__card-text">
                  The largest association of enterpreneurs in Kyrgyzstan is the main partner of Avenir.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="2.5" class="title">
            <h3 class="pt-4 pl-3 ">Our Advantages</h3>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid class="partners">
        <b-row>
            <b-col cols="2.5" class="title mr-5">
                <h3 class="pt-4 text-right mr-3 ">Partners</h3>
            </b-col>
            <b-col>
                <cite class="partners__cite"><span class="cite-quotes">“</span>I have know the team and the leaders for many years. 
                This is one of the best teams to build effective new system in education sector..<span class="cite-quotes">”</span></cite> 
                <p class="cite_author mt-5">Young enterpreneur</p>
            </b-col>
            <b-col>
                <cite class="partners__cite"><span class="cite-quotes">“</span> Our country needs news in education sector with the common intersection of 
                government and private sector. Avenir is the best initiative step first into it<span class="cite-quotes">”</span> </cite> 
                <p class="cite_author mt-2">Government official</p>
            </b-col>
        </b-row>   
    </b-container>
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


.about-us {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 10rem;
  
}
.about-us__heading {
  color: #3D3939;

}

.about-us__image {
  height: 288px;
  width: 317px;
  align-items: center;
}



.research {
  background: linear-gradient(0deg, rgba(169, 160, 160, 0.5), rgba(169, 160, 160, 0.5)), 
  url('./assets/research.png');
  border-radius: 10px;
}

.research:hover {
  background: url('./assets/research.png');
  border-radius: 10px;
}

.analytics {
  background: linear-gradient(0deg, rgba(169, 160, 160, 0.5), rgba(169, 160, 160, 0.5)), 
  url('./assets/analytics.png');
  border-radius: 10px;
}

.analytics:hover {
  background: url('./assets/analytics.png')
}

.managment {
  background: linear-gradient(0deg, rgba(169, 160, 160, 0.5), rgba(169, 160, 160, 0.5)), 
  url('./assets/managment.png');
  border-radius: 10px;
}

.managment:hover {
  background: url('./assets/managment.png')
}

.investment {
  background: linear-gradient(0deg, rgba(169, 160, 160, 0.5), rgba(169, 160, 160, 0.5)), 
  url('./assets/investment.png');
  border-radius: 10px;
}

.investment:hover {
  background: url('./assets/investment.png')
}

.about-us__image-text {
  color: #fff;
  font-size: 32px;
  font-weight: 400;
}

.about-us__info1 {
  font-size: 24px;
  color: #A9A0A0;
  line-height: 1.2;
}

.about-us__info2 {
  font-size: 24px;
  color: #9B0E0E;
  line-height: 1.2;
}

.about-us__link {
    color: #000;
    align-items: right !important;

}


/* Projects Section*/

.projects {
  width: 90%;
  margin:0 auto;
  padding-bottom: 10rem;
}

.title {
  height: 285px;
  width: 215px;
  background: #9B0E0E;
  color: #fff;
  border-radius: 10px;
  font-size: 32px;
}

.projects_title h3 {
  text-align: right;
}

.project {
  background: #fff;
  height: 556px;
  width: 334px;
  border-radius: 0 0 0 25px;
  box-shadow: 3px 5px 5px 5px #A9A0A0;
}

.project__card-text {
  font-size: 24px;
  line-height: 1.3;
  color: #A9A0A0;
}

.card-link {
  font-size: 24px;
  color: #9B0E0E;
}

.zero-one {
  background: #99FDE5;
}


/* Welcome Section*/

.welcome {
background: fixed url('./assets/welcome-bg.png');
background-repeat: no-repeat;
background-size: cover;
height: 428px;

}

.display-4 { /* class from the browser inspect*/
  color: #9B0E0E; /*welcome heading color */
}

.welcome h5{
  font-size: 32px;
  color: #736767;
}



/* Our Advantages Section*/

.our-advantages {
  width:90%;
  margin: 0 auto;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

.our-advantage__card {
  padding: 0; 
  background-color: #DFD8D8;
  border: none;
}

.our-advantage__card-title {
  font-size: 40px;
}

.our-advantage__card-text {
  font-size: 26px;
  color: #3D3939;
  line-height: 1.2;
}


/* Partners Section*/

.partners {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10rem;
}

.cite-quotes {
  color: #9B0E0E;
  font-weight: 700;
  font-size: 36px;
}

.partners__cite {
  color: #A9A0A0;
  font-size: 28px;
  line-height: 1.2;
}

.cite_author {
  color: #9B0E0E;
  font-size: 28px;
}


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


