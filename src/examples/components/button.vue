<template>
  <div>
    <div>
      状态
      <hpButton>defalut</hpButton>
      <hpButton ghost>defalut</hpButton>
      <hpButton type="primary" ghost>primary</hpButton>
      <hpButton type="success">success</hpButton>
      <hpButton type="info" ghost>info</hpButton>
      <hpButton type="warning">warning</hpButton>
      <hpButton type="danger">danger</hpButton>
    </div>
    <div>
      大小
      <hpButton size="large">large</hpButton>
      <hpButton size="medium">medium</hpButton>
      <hpButton size="small">small</hpButton>
      <hpButton size="mini">mini</hpButton>
    </div>
    <div>
      disabled
      <hpButton type="primary" :disabled="true">primary</hpButton>
      <hpButton type="primary" :loading="true">primary</hpButton>
      <hpButton type="success" :disabled="true">success</hpButton>
      <hpButton type="info" :disabled="true">info</hpButton>
      <hpButton type="warning" :disabled="true">warning</hpButton>
      <hpButton type="danger" :disabled="true">danger</hpButton>
    </div>
    <div>
      loading
      <hpButton :loading="true">defalut</hpButton>
      <hpButton type="primary" :loading="true">primary</hpButton>
      <hpButton type="primary" ghost :loading="true">success</hpButton>
    </div>
    <div>
      round cricle
      <hpButton shape="round" size="small">defalut</hpButton>
      <hpButton type="primary" size="mini" shape="round">primary</hpButton>
      <hpButton type="primary" ghost shape="round">success</hpButton>
      <hpButton shape="circle">
        <i class="hpicon hp-icon-loading"></i>
      </hpButton>
      <hpButton type="primary" size="small" shape="circle">
        <i class="hpicon hp-icon-loading"></i>
      </hpButton>
      <hpButton type="primary" size="mini" shape="circle" icon="hp-icon-loading">
      </hpButton>
      <hpButton type="primary" ghost shape="circle">
        <i class="hpicon hp-icon-loading"></i>
      </hpButton>
    </div>
    <div>
      icon
      <hpButton type="primary" ghost shape="circle">
        <i class="hpicon hp-icon-loading"></i>
      </hpButton>
      <hpButton type="primary" icon="hpicon hp-icon-loading">
          loading...
      </hpButton>
      <hpButton type="primary" icon="hpicon hp-icon-loading" size="mini" shape="circle">
      </hpButton>
    </div>
    <div>
      a 标签 href
      <hpButton link type="text" :underline="false">defalut</hpButton>
      <hpButton link type="text" :underline="false" disabled>defalut</hpButton>
      <hpButton link type="primary">defalut</hpButton>
      <hpButton link type="primary" disabled>defalut</hpButton>
      <hpButton link type="success">defalut</hpButton>
      <hpButton link type="info">defalut</hpButton>
      <hpButton link type="warning">defalut</hpButton>
      <hpButton link href="asd" >defalut</hpButton>
    </div>
    <div>
      按钮组
      <hpButtonGrounp vertical>
        <hpButton>defalut</hpButton>
        <hpButton>defalut</hpButton>
        <hpButton>defalut</hpButton>
      </hpButtonGrounp>
      <hpButtonGrounp>
        <hpButton type="primary">defalut</hpButton>
        <hpButton type="success">defalut</hpButton>
        <hpButton type="warning">defalut</hpButton>
      </hpButtonGrounp>
      <hpButtonGrounp vertical>
        <hpButton type="primary">defalut</hpButton>
        <hpButton type="primary">defalut</hpButton>
        <hpButton type="primary">defalut</hpButton>
      </hpButtonGrounp>
      <hpButtonGrounp>
        <hpButton type="primary" ghost>defalut</hpButton>
        <hpButton type="primary" ghost>defalut</hpButton>
        <hpButton type="primary" ghost>defalut</hpButton>
      </hpButtonGrounp>
      <hpButtonGrounp vertical>
        <hpButton type="warning" ghost>defalut</hpButton>
        <hpButton type="warning" ghost>defalut</hpButton>
        <hpButton type="warning" ghost>defalut</hpButton>
      </hpButtonGrounp>
      <hpButtonGrounp>
        <hpButton type="text">defalut</hpButton>
        <hpButton type="text">defalut</hpButton>
        <hpButton type="text">defalut</hpButton>
      </hpButtonGrounp>
      <br>
      <hpButtonGrounp vertical>
        <hpButton type="text" link>defalut</hpButton>
        <hpButton type="primary" link>defalut</hpButton>
        <hpButton type="warning" link>defalut</hpButton>
      </hpButtonGrounp>
    </div>
  </div>
</template>

<script>
import hpButtonGrounp from '@/components/button/button-group';
import hpButton from '@/components/button/button';
export default {
  name: 'App',
  components: {
    hpButton,
    hpButtonGrounp
  }
};
</script>

<style lang="scss" scoped>
</style>