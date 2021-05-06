<template>
<b-container fluid class="about-us">
        <b-row class="pt-5 mt-5 ">
            <b-col cols="7">
              <b-row>
                <div
                  @click="showPopup()"
                 class="about-us__image research mr-3 mb-3 text-center d-flex">
                    <b-col cols="5.5">
                      <span class="about-us__image-text">Research & Consulting </span>
                    </b-col>
                </div>
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
                <slot></slot>  
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Popup from './popup/PopUp'

export default {
    name:'AboutUs',
    components: {
      Popup
    },
    data() {
      return {
        isPopupVisible: false
      }
    },
    methods: {
      showPopup() {
        this.isPopupVisible = true;
      },
      closePopupInfo() {
        this.isPopupVisible = false;
      }
    }
}
</script>

<style>
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
  url('../assets/research.png');
  border-radius: 10px;
}

.research:hover {
  background: url('../assets/research.png');
  border-radius: 10px;
}

.analytics {
  background: linear-gradient(0deg, rgba(169, 160, 160, 0.5), rgba(169, 160, 160, 0.5)), 
  url('../assets/analytics.png');
  border-radius: 10px;
}

.analytics:hover {
  background: url('../assets/analytics.png')
}

.managment {
  background: linear-gradient(0deg, rgba(169, 160, 160, 0.5), rgba(169, 160, 160, 0.5)), 
  url('../assets/managment.png');
  border-radius: 10px;
}

.managment:hover {
  background: url('../assets/managment.png')
}

.investment {
  background: linear-gradient(0deg, rgba(169, 160, 160, 0.5), rgba(169, 160, 160, 0.5)), 
  url('../assets/investment.png');
  border-radius: 10px;
}

.investment:hover {
  background: url('../assets/investment.png')
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
</style>