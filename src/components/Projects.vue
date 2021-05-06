<template>
    <b-container fluid class="projects">
        <b-row>
            <b-col cols="2.5" class="title" >
                <h3 class="pt-4 text-right mr-3">Projects</h3>
            </b-col>
            <b-col>
              <b-card-group deck>
                <b-card class="project">
                  <b-img center top :src="require('../assets/ets.png')" alt="Logo ETS" class="mt-3 mb-5"></b-img>
                  <b-card-title class="project__card-title mb-3">Lorem Ipsum</b-card-title>
                  <b-card-text class="project__card-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
                </b-card>
      
                <b-card class="project zero-one">
                  <b-img center top :src="require('../assets/zero.png')" alt="Logo ZeroOne" class="mt-3 mb-5"></b-img>
                  <b-card-title class="project__card-title mb-3">Lorem Ipsum</b-card-title>
                  <b-card-text class="project__card-text ">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
                </b-card>
    
                <b-card class="project">
                  <b-img center top :src="require('../assets/moodle.png')" alt="Logo moodle" class="mt-3 mb-5"></b-img>
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
</template>
<script>

export default {
    name:'Projects'
}
</script>
<style>
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

</style>