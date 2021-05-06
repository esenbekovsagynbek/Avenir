  <template>
    <b-container fluid class="about-us">
        <b-row class="pt-5 mt-5 ">
            <b-col cols="7">
              <b-row>
                <div
                @click="showPopup"
                class="about-us__image research mr-3 mb-3 text-center d-flex">
                    <b-col cols="5.5">
                      <span class="about-us__image-text">Research & Consulting </span>
                    </b-col>
                </div>
                <b-link href="#" class="about-us__image analytics mb3 text-center d-flex">
                    <b-col cols="5.5">
                      <span class="about-us__image-text">Analytcs & Assessment</span>
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
                <slot></slot>
            </b-col>
        </b-row>

        



    </b-container>
   
  </template>

  <script>
    

    export default {

      name:'AboutUs',
      

      data() {
        return {
          
        }
      },

      methods: {
        showPopup() {
          this.$emit('showPopup')
        }
      }
    }
      



      
  

  </script>


