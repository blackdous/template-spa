<template>
  <label
    :class="wrapClasses"
    role="radio"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
    :aria-disabled="isDisabled"
    :aria-checked="model === label"
    :tabindex="tabIndex"
  >
    <span :class="radioClasses">
      <span class="hp-radio__inner"></span>
      <input
        ref="radio"
        v-model="model"
        :name="name"
        type="radio"
        :value="label"
        @focus="focus = true"
        @blur="focus = false"
        :disabled="isDisabled"
        class="hp-radio__input"
        @change="handleChange"
        tabindex="-1"
      />
    </span>
    <span class="hp-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '@/mixins/emitter';
const prefixCls = 'hp-radio';
export default {
  name: 'HpRadio',
  componentName: 'HpRadio',
  mixins: [Emitter],
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    size: String
  },
  data() {
    return {
      focus: false
    };
  },
  computed: {
    wrapClasses: function() {
      const { model, label, focus, radioSize, isDisabled } = this;
      return [
        `${prefixCls}`,
        radioSize ? `${prefixCls}` + '--' + radioSize : '',
        {
          checked: model === label,
          disabled: isDisabled,
          focus: focus
        }
      ];
    },
    radioClasses: function() {
      const { model, label, isDisabled } = this;
      return [
        `${prefixCls}__container`,
        {
          disabled: isDisabled,
          checked: model === label
        }
      ];
    },
    isGroup: function() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'HpRadioGroup') {
          parent = parent.$$parent;
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('HpRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      }
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled
        : this.disabled;
    },
    tabIndex() {
      return this.isDisabled || (this.isGroup && this.model !== this.label)
        ? -1
        : 0;
    },
    radioSize() {
      const temRadioSize = this.size || (this.$ElEMENT || {}).size;
      return this.isGroup
        ? this._radioGroup.size || temRadioSize
        : temRadioSize;
    }
  },
  methods: {
    handleChange: function(event) {
      this.$nextTick(() => {
        this.$emit('change', this.model);
        this.isGroup &&
          this.dispatch('HpRadioGroup', 'handleChange', this.model);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
