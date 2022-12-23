<template>
  <div id="app">
    <SvgAnnotator>
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