<template>
    <div class="popup-wrapper">
    <div class="v-popup">
            <div class="v-popup__header">
                <span>Popup name</span>
                <span @click="closePopup" class="closePopup">
                    close
                </span>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <div class="v-popup__footer">
                <button class="add_popup">Add</button>
                <button @click="closePopup" class="close_popup">Close</button>
            </div>
        
        </div>

    </div>


</template>

<script>
    export default {
        name: 'Popup',
    
        methods: {
            closePopup() {
                this.$emit('closePopup')
            }
        },
    }

</script>

