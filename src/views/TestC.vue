<template>
  <div class="test-c">
    <div class="contents-area">
      <div class="left-area">
        <LeftItemCard />
      </div>
      <div class="right-area">
        <RightItemCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Panel from "../components/Panel.vue";
import LeftItemCard from "../components/LeftItemCard.vue";
import RightItemCard from "../components/RightItemCard.vue";

@Component({
  components: { Panel, LeftItemCard, RightItemCard },
})
export default class TestC extends Vue {}
</script>

<style scoped lang="scss">
.test-c {
  display: flex;
  justify-content: center;

  .contents-area {
    width: 700px;
    height: 370px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
