<template>
    <form @submit.prevent="submit">  
        <input type="text" v-model="title">
        <input type="text" v-model="body">
        <button type="submit">Create post</button> 
    
    </form>


</template>

<script> 
    import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                title: '',
                body: ''
            }
        },

        methods: {
            ...mapMutations(['createPost']),
            submit() {
                this.createPost( {
                title: this.title,
                body: this.body,
                id: Date.now()
                })
            }
        }
    }

</script>

<style scoped>
input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;

}


</style>