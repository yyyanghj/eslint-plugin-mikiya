<template>
  <header class="header relative flex justify-between items-center h-24 py-0 px-4">
    <router-link class="logo" to="/">
      <Logo />
    </router-link>
    <Icon name="menu" class="menu text-2xl cursor-pointer" @click="show = true" />

    <Menu :show="show" @close="show = false" />
  </header>
</template>
<script lang="ts">
export default {
  name: 'Hello',
};
</script>

<style lang="" scoped></style>
