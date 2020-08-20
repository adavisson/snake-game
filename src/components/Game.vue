<template>
  <div class="snake">
    <h3>Snake</h3>
    <div class="game-area"></div>
  </div>
</template>

<script>
export default {
  name: "Game",
  data: () => ({}),
}
</script>

<style scoped>
  .snake {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .game-area {
    background-color: white;
    width: 500px;
    height: 500px;
  }
</style>