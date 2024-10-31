<template>
 
    <div id="nav">

    <router-link to="/">Home</router-link> 
    <router-link to="/brazil">Brazil</router-link> 
    <router-link to="/hawaii">Hawai</router-link> 
    <router-link to="/panama">Panama</router-link> 
    <router-link to="/jamaica">Jamaica</router-link> 

</div>
   
   
  <TheNavigation/>
    <div class="container">
 <router-view> :key="$route.path"</router-view>
    </div>
  
 
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default{
  components: {TheNavigation}
}
</script>
