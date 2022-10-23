<template>
  <v-app>
    <Navbar/>
    <v-main>
      <div class="continer">
        <router-view/>
      </div>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: rgb(35, 35, 35);
}
.continer{
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>