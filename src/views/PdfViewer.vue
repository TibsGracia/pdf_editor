<template>
  <WebViewer :path="`${publicPath}lib`"/>
</template>

<script>
import WebViewer from "@/components/PdfViewer.vue";

export default {
  components: {
    WebViewer
  },
  data:() => ({
       publicPath: process.env.BASE_URL,
  }),
  mounted(){
    console.log("public path: ", process.env.BASE_URL)
  }
};
</script>

<style>
</style>
