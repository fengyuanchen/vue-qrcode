<template>
  <div class="demo-block">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DemoBlock',
});
</script>

<style lang="scss">
.demo-block {
  border: 1px solid #eee;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  padding: 1rem;
  position: relative;

  & + pre {
    border: 1px solid #eee;
    border-radius: 0.25rem;
    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-bottom: 1rem;
  }
}
</style>
