<template>
  <header class="header relative flex justify-between items-center h-24 py-0 px-4">
    <div class="logo">
      <span />
    </div>
    <div name="menu" class="menu text-2xl cursor-pointer" @click="show = true" />

    <div data-index="1" @click="console.log('click')" />
  </header>
</template>

<script lang="ts">
export default {
  name: 'Hello',
  setup() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="" scoped></style>
