<template>
    <b-container fluid class="partners">
        <b-row>
            <b-col cols="2.5" class="title mr-5">
                <h3 class="pt-4 text-right mr-3 ">Partners</h3>
            </b-col>
            <b-col>
                <cite class="partners__cite"><span class="cite-quotes">“</span>I have know the team and the leaders for many years. 
                This is one of the best teams to build effective new system in education sector..<span class="cite-quotes">”</span></cite> 
                <p class="cite_author mt-5">Young enterpreneur</p>
            </b-col>
            <b-col>
                <cite class="partners__cite"><span class="cite-quotes">“</span> Our country needs news in education sector with the common intersection of 
                government and private sector. Avenir is the best initiative step first into it<span class="cite-quotes">”</span> </cite> 
                <p class="cite_author mt-2">Government official</p>
            </b-col>
        </b-row>   
    </b-container>
</template>

<script>
export default {
    name:'Partners'
}
</script>

<style>
.partners {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10rem;
}

.cite-quotes {
  color: #9B0E0E;
  font-weight: 700;
  font-size: 36px;
}

.partners__cite {
  color: #A9A0A0;
  font-size: 28px;
  line-height: 1.2;
}

.cite_author {
  color: #9B0E0E;
  font-size: 28px;
}
</style>