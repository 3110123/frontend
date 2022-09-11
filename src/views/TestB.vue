<template>
  <div class="test-b">
    <div class="contents">
      <div class="input-area">
        <input v-model="text" class="item-input-form" />
        <button @click="onClickAdd()" class="submit-button">追加</button>
      </div>

      <div class="panel-area">
        <div v-for="(item, i) in itemsArray" :key="i">
          <Panel :text="item" @delete="deleteItem(i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Panel from "../components/Panel.vue";

@Component({
  components: { Panel },
})
export default class TestB extends Vue {
  itemsArray: string[] = ["Apple", "Grape", "Strawberry"];
  text = "";

  onClickAdd(): void {
    if (this.text === "") return;
    this.itemsArray.push(this.text);
    this.text = "";
  }

  deleteItem(index: number): void {
    this.itemsArray.splice(index, 1);
  }
}
</script>

<style scoped lang="scss">
.test-b {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contents {
    width: 300px;

    .input-area {
      display: flex;
      margin-bottom: 40px;

      .item-input-form {
        flex: 1;
        height: 30px;
        margin-right: 5px;

        border-color: navy;
      }
      .submit-button {
        background-color: navy;
        color: white;
        border: none;
        padding: 0 15px;
        cursor: pointer;
      }
    }

    .panel-area {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
}
</style>
