<template>
        <b-container fluid class="projects">
        <b-row>
            <b-col cols="2.5" class="title" >
                <h3 class="pt-4 text-right mr-3">Projects</h3>
            </b-col>
            <b-col>
              <b-card-group deck>
                <b-card class="project"
                        :class="item.className"
                        v-for="(item,idx) in currentProjectsContent"
                        :key="idx">
                  
                  <b-img center top :src="item.srcLogo" :alt="item.alt" class="mt-3 mb-5"></b-img>
                  <b-card-title class="project__card-title mb-3">{{ item.title }}</b-card-title>
                  <b-card-text class="project__card-text">
                     {{ item.text }}
                  </b-card-text>
                  <b-link :href="item.link" class="card-link">more</b-link>
                </b-card>
      
                <!-- <b-card class="project zero-one">
                  <b-img center top :src="require('../assets/zero.png')" alt="Logo ZeroOne" class="mt-3 mb-5"></b-img>
                  <b-card-title class="project__card-title mb-3">Lorem Ipsum</b-card-title>
                  <b-card-text class="project__card-text ">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old.
                  </b-card-text>
                  <b-link href="#" class="card-link">more</b-link>
                </b-card> -->
             </b-card-group> 
          </b-col>
        </b-row>
    </b-container> 
</template>

<script>
import {mapGetters} from 'vuex'
        export default {
             name:'Projects',
            computed: {
             ...mapGetters(['currentProjectsContent'])
             },
        
              methods : {

              }
      }
         
    </script>
