<template>
  <div class="game">
    <h3>Snake</h3>
    <Board />
  </div>
</template>

<script>
import Board from "./Board";

export default {
  name: "Game",
  components: {
    Board
  },
  data: () => ({})
};
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
