  <template>
    <b-container fluid class="about-us">
        <b-row class="pt-5 mt-5 ">
            <b-col cols="7">
              <b-row >
                <template v-for="(item,idx) in currentAboutUsContent" >
                    <card-item :key="idx" 
                               :text="item.text"
                               :className="item.className"/>
                </template>
              </b-row>
            </b-col>
            <b-col cols="5">
                <slot></slot>
            </b-col>
        </b-row>
            </b-container>
  </template>

  <script>

  import CardItem from './CardItem'
  import { mapGetters } from 'vuex'
  

    export default {

      name:'AboutUs',
       components: {
          CardItem
    },
    
    computed: {
      ...mapGetters(['currentAboutUsContent'])
    },



      // props: {
      //   aboutUsContent: {
      //     type: Array,
      //     default: undefined // если от родителя не пришло ничего (чтобы не ругалась на ошибку)
      //   }
      // },
      

      data() {
        return {
          isPopupVisible : false
        }
      },
     
    }
  </script>


