<template>
       <b-container fluid class="our-advantages px-0">
      <b-row>
        <b-col>
            <b-card class="our-advantage__card"
                    v-for="(item,idx) in ourAdvantagesContent"
                    :key="idx"> 
               <b-img :src="item.srcImage" :alt="item.alt" left class="mr-5"></b-img>    
               <b-card-body class="mr-5">
                  <b-card-title class="our-advantage__card-title">{{ item.title }}</b-card-title>
                  <b-card-text class="our-advantage__card-text">{{ item.text }}</b-card-text>
                  <b-link href="item.link" class="card-link">more</b-link>
               </b-card-body>
            </b-card>
        </b-col>
        <b-col cols="2.5" class="title">
            <h3 class="pt-4 pl-3 ">Our Advantages</h3>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
    export default {
       name:'OurAdvantages',
 
       props: {
        ourAdvantagesContent: {
          type: Array,
          default: undefined 
        }
      },
    }
</script>
