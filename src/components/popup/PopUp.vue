<template>
  <div class="popup-wrapper" ref="popup_wrapper">
    <div class="v-popup"
    :class="className">
      <div class="v-popup__header">
        <span>{{pName}}</span>
        <span @click="closePopup" class="closePopup"> 
            <i class="material-icons">close</i>
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <!--<div class="v-popup__footer">
        <button class="add_popup">{{rightBtn}}</button>
        <button @click="closePopup" class="close_popup">{{leftBtn}}</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  props: {
    className: {
      type: String,
      default: '',
    },

    rightBtn: {
        type: String,
        default: 'No',
    },

    leftBtn: {
        type: String,
        default: 'Ok',
    },

    pName: {
      type: String,
      default: '',
    }
  },

  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup_wrapper"]) {
        vm.closePopup();
      }
    });
  },
};
</script>