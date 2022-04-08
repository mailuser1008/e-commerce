<template>
  <div>
    <h1>this is {{ item === 0 ? "all-items" : item.data.title }} page</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "items-page",

  computed: {
    ...mapGetters({ item: "items/item" }),
  },
};
</script>

<style scoped></style>
