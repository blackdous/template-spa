<template>
  <div :class="['hp-button-group', vertical ? 'vertical' : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HpButtonGroup',
  props: {
    vertical: Boolean
  }
};
</script>
