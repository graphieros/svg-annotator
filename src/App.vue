<template>
  <div id="app">
    <SvgAnnotator showPrint>
      <slot></slot>
    </SvgAnnotator> 
  </div>
</template>

<script>
import SvgAnnotator from './components/SvgAnnotator.vue';

export default {
  name: 'App',
  components: {
    SvgAnnotator
  }
}
</script>