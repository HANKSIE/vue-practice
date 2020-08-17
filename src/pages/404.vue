<template>
  <div class="page">
    <img class="image element" :src="source" alt="Page Not Found" />
    <h2 class="element">該頁面不存在..</h2>
  </div>
</template>

<script>
import NotFound from "../assets/page_not_found.svg";
export default {
  data: function () {
    return {
      source: NotFound,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/helpers/variables.scss";
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.image {
  width: 500px;
  height: auto;
}

@media screen and (max-width: $sm) {
  .image {
    width: 300px;
  }
}

@media screen and (min-width: $lg) {
  .image {
    width: 700px;
  }
}

.element {
  padding: 40px 0;
}
</style>
