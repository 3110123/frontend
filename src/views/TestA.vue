<template>
  <div class="test-a">
    <div class="contents">
      <p v-if="hasError" class="error-message">エラーが発生しました</p>
      <p>{{ message }}</p>
      <button @click="onClickButton()" class="submit-button">更新</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component({
  components: {},
})
export default class TestA extends Vue {
  message = "";
  hasError = false;

  onClickButton(): void {
    this.getMessage();
  }

  mounted(): void {
    this.getMessage();
  }

  getMessage(): void {
    axios
      .get("https://catfact.ninja/fact")
      .then((response) => (this.message = response.data.fact))
      .catch((error) => {
        this.message = error;
        this.hasError = true;
      });
  }
}
</script>

<style scoped lang="scss">
.test-a {
  display: flex;
  flex-direction: column;
  align-items: center;

  .contents {
    width: 350px;

    .error-message {
      color: red;
    }

    .submit-button {
      cursor: pointer;
    }
  }
}
</style>
