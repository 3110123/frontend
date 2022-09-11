<template>
  <div class="panel">
    <button class="delete" @click="emitDelete">X</button>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Panel extends Vue {
  @Prop()
  text!: string;

  @Emit("delete")
  emitDelete() {
    return;
  }
}
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  align-items: center;

  border: 1px solid navy;

  .delete {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 50px;
    height: 50px;

    background-color: navy;
    color: white;
    outline: 1px solid navy;
    border: none;
    cursor: pointer;
  }

  .text {
    padding-left: 20px;
    font-size: 16px;
  }
}
</style>
