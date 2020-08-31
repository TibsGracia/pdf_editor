<template>
  <div ref="viewer"></div>
</template>

<script>
/* eslint-disable */
export default {
  name: "WebViewer",
  props: {
    path: String,
    // url: String
  },
  mounted: function() {
    WebViewer(
      {
        path: this.path,
        // initialDoc: "" // replace with your own PDF file
      },
      this.$refs.viewer
    ).then(instance => {
      this.$bus.$on("loadFile", file => {
        instance.loadDocument(file, { filename: file.name });
      });
    });
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 90vh;
}
</style>