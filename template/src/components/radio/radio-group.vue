<template>
  <component
    :is="_tag"
    :class="classes"
    role="radiogroup"
    @keydown="handleKeyDown"
  >
    <slot></slot>
  </component>
</template>

<script>
import Emitter from '@/mixins/emitter';
const KeyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
});
const prefixCls = 'hp-radio-group';
export default {
  name: 'HpRadioGroup',
  componentName: 'HpRadioGroup',
  mixins: [Emitter],
  props: {
    value: {},
    size: String,
    fill: String,
    type: String,
    textColor: String,
    disabled: Boolean,
    vertical: Boolean
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    _tag() {
      return (this.$vnode.data || {}).tag || 'div';
    },
    classes() {
      const { type, vertical } = this;
      return [
        `${prefixCls}`,
        type ? `${prefixCls}__button` : '',
        vertical && !type ? `${prefixCls}__vertical` : ''
      ];
    }
  },
  created() {
    this.$on('handleChange', (value) => {
      this.$emit('change', value);
    });
  },
  mounted() {
    // console.log(this._tag);
    const doms = this.$el.querySelectorAll('[type=radio]');
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0];
    if (![].some.call(doms, (radio) => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  },
  methods: {
    handleKeyDown: function(event) {
      const target = event.target;
      const className =
        target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]';
      const doms = this.$el.querySelectorAll(className);
      const length = doms.length;
      const index = [].indexOf.call(doms, target);
      const roleRadios = this.$el.querySelectorAll('[role=radio]');
      switch (event.KeyCode) {
        case KeyCode.LEFT:
        case KeyCode.UP:
          if (index === 0) {
            event.stopPropagation();
            event.preventDefault();
            roleRadios[length - 1].click();
            roleRadios[length - 1].focus();
          } else {
            roleRadios[index - 1].click();
            roleRadios[index - 1].focus();
          }
          break;
        case KeyCode.RIGHT:
        case KeyCode.DOWN:
          if (index === length - 1) {
            event.stopPropagation();
            event.preventDefault();
            roleRadios[0].click();
            roleRadios[0].focus();
          } else {
            roleRadios[index + 1].click();
            roleRadios[index + 1].focus();
          }
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
