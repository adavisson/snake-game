<template>
  <div class="snake"></div>
</template>

<script>
export default {
  name: "Snake",
  data: () => ({
    length: 1
  })
};
</script>

<style scoped>
.snake {
  height: 10px;
  width: 10px;
  background-color: black;
}
</style>
