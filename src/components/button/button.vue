<template>
  <component
    :is="tagName"
    :href="!link || disabled ? null : href"
    :class="classes"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="handleClick"
    :autofocus="autofocus"
  >
    <i v-if="loading" class="hpicon hp-icon-loading"></i>
    <i :class="[icon ? `${icon}` : '', 'hpicon']" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </component>
</template>

<script>
var prefixClass = 'hp-button';
export default {
  name: 'HpButton',
  componentName: 'HpButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    loading: Boolean,
    size: String,
    ghost: Boolean,
    shape: String,
    icon: String,
    autofocus: Boolean,
    link: Boolean,
    href: String,
    underline: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    buttonSize: function() {
      return this.size;
    },
    classes: function() {
      const {
        type,
        buttonSize,
        disabled,
        ghost,
        shape,
        loading,
        link,
        underline
      } = this;
      return [
        `${prefixClass}`,
        `${prefixClass}--${type}`,
        buttonSize ? `${prefixClass}--${buttonSize}` : '',
        disabled ? 'disabled' : '',
        loading ? 'loading' : '',
        ghost ? 'ghost' : '',
        shape ? `${shape}` : '',
        link ? 'link' : '',
        link && underline && !disabled && 'underline'
      ].filter((item) => !!item);
    },
    tagName: function() {
      const { link } = this;
      return link ? 'a' : 'button';
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>

<style lang="scss" scoped></style>
