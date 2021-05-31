<template>
    <div>
        <PopUp
            :className="className"
            rightBtn="Add to card"
            :pName="text"
            v-if="isPopupVisible"
            @closePopup="closePopupInfo"
            >
            <div>
                <span class="about-us__image-text">{{ text }}</span>
            </div>  
        </PopUp>
        <div
            @click="showPopupInfo"
            class="about-us__image mr-3 mb-3 text-center d-flex"
            :class="className"
        >
           <b-col cols="5.5">
             <span class="about-us__image-text"> {{ text }}</span>
           </b-col>
        
        </div>
    </div>
</template>

<script>
import PopUp from "./popup/PopUp";
export default {
  name: "CardItem",
  components: {
    PopUp,
  },
  data() {
    return {
      isPopupVisible: false,
    };
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },

  methods: {
    showPopupInfo() {
      this.isPopupVisible = true;
    },

    closePopupInfo() {
      this.isPopupVisible = false;
    },
  },
};
</script>