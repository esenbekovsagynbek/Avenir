<template>
    <b-container fluid class="our-advantages px-0">
      <b-row>
        <b-col>
            <b-card class="our-advantage__card"> 
               <b-img :src="require('../assets/experience.png')" alt="experience img" left class="mr-5">></b-img>    
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
               <b-img :src="require('../assets/managment_adv.png')" alt="managment img" left class="mr-5">></b-img>    
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
</template>

<script>

export default {
    name:'OurAdvantage'
}
</script>

<style>
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
</style>