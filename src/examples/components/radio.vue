<!--
 * @Descripttion:
 * @Author: asyncnode
 * @Date: 2020-05-13 10:37:47
 * @LastEditors: asyncnode
 * @LastEditTime: 2020-05-25 11:54:33
-->
<template>
  <div>
    <hp-radio-group v-model="radio" vertical>
      <hp-radio label="1" v-model="radio">备选项</hp-radio>
      <hp-radio label="1123123" :value="1" v-model="radio">备选项</hp-radio>
      <hp-radio label="2" v-model="radio">备选项</hp-radio>
      <hp-radio label="3" v-model="radio">备选项</hp-radio>
      <hp-radio label="4" v-model="radio" disabled>备选项</hp-radio>
    </hp-radio-group>
    <hp-radio-group
      v-model="radio"
      @change="handleChange"
      type="button"
      size="small"
      vertical
    >
      <hp-radio label="11" disabled>
        备选项
      </hp-radio>
      <hp-radio label="22" :value="111">
        备选项
      </hp-radio>
      <hp-radio label="33">
        备选项
      </hp-radio>
      <hp-radio label="44">
        备选项
      </hp-radio>
    </hp-radio-group>
    <!-- <hp-radio-group
      disabled
      v-model="radio1"
      @change="handleChange"
      type="button"
      size="mini"
    >
      <hp-radio label="11">
        备选项
      </hp-radio>
      <hp-radio label="22">
        备选项
      </hp-radio>
      <hp-radio label="33">
        备选项
      </hp-radio>
      <hp-radio label="44">
        备选项
      </hp-radio>
    </hp-radio-group> -->
  </div>
</template>

<script>
import HpRadio from '@com/radio/radio';
import HpRadioGroup from '@com/radio/radio-group';
export default {
  name: 'hpRadioEx',
  components: {
    HpRadio,
    HpRadioGroup
  },
  data() {
    return {
      radio: '4',
      radio1: ''
    };
  },
  methods: {
    handleChange(val) {
      console.log(this.radio);
      console.log('val: ', val);
    }
  }
};
</script>

<style lang="scss" scoped></style>
