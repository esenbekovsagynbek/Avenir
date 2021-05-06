<template>
    <div class="popup-wrapper">
        <div class="v-popup">
            <div class="v-pop__header">
                <span>Popup name</span>
                <span @click="closePopup">
                close
                </span>
            </div>
            <div class="popup__content">
                <slot></slot>
            </div>
            <div class="popup__footer">
                <button class="add_popup">Add</button>
                <button @click="closePopup" class="close_popup">close</button>
            </div>
        </div>
    </div>    

</template>

<script>
export default {
    name :'popup',
    methods: {
        closePopup() {
            this.$emit('closePopup')
        }
    }
}
</script>

<style lang="scss">

.popup-wrapper {
    background: rgba(64,64,64,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 99;

}
.v-popup {
    padding:16px;
    position:fixed;
    top:30vh;
    width:400px;
    background: #fff;
    box-shadow: 0 0 17px 0#ea7;

}
    .v-popup__header, .v-popup__footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .v-popup__content {
        display: flex;
        justify-content:center;
        align-items:center;
    }

.add_popup {
    padding:8px;
    color: #ffffff;
    background: #26ae68;
}
.close_popup {
    color: #ffffff;
    background: red;
}

</style>