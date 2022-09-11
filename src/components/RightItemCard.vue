<template>
  <div class="right-item-card">
    <div class="item-area">
      <div v-for="(item, i) in getItemsArray" :key="i" class="item">
        {{ item }}
      </div>
    </div>
    <button @click="onClickMove()" class="move-button">左へ移動</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { rightItemModule } from "../store/RightItem";
import { leftItemModule } from "../store/LeftItem";

@Component({
  components: {},
})
export default class RightItemCard extends Vue {
  get getItemsArray(): string[] {
    return rightItemModule.getRightItemsArray;
  }

  onClickMove(): void {
    if (this.getItemsArray.length === 0) return;
    const lastItem = rightItemModule.getLastRightItem;
    rightItemModule.remove();
    leftItemModule.add(lastItem);
  }
}
</script>

<style scoped lang="scss">
.right-item-card {
  width: 300px;
  height: 100%;
  font-size: 16px;

  .item-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    border: 1px solid navy;

    .item {
      width: 80%;
      border-bottom: 1px solid navy;

      padding: 10px 0;
    }
  }

  .move-button {
    margin-top: 30px;
    height: 40px;
    background-color: navy;
    color: white;
    cursor: pointer;

    padding: 0 30px;
  }
}
</style>
