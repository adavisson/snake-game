<template>
  <div class="game-area">
    <div v-for="(square, index) in grid" :key="index" class="space"></div>
  </div>
</template>

<script>
// import Snake from "./Snake"

export default {
  name: "Board",
  components: {
    // Snake,
  },
  data: () => ({
    grid: []
  }),
  beforeMount() {
    this.grid = this.fillGrid()
  },
  methods: {
    fillGrid() {
      let spaces = []
      for (let i = 0; i < 50; i++) {
        spaces.push([]);
        for (let j = 0; i < 50; j++) {
          spaces[i].push(0);
        }
      }
      return spaces
    }
  }
};
</script>

<style scoped>
.game-area {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  width: 500px;
  height: 500px;
}
.space {
  width: 10px;
  height: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
</style>
