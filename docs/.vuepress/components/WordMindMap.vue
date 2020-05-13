<template>
  <div class="container">
  </div>
</template>

<script type="text/ecmascript-6">
import * as d3 from 'd3'
export default {
  name: 'WordMindMap',
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() { },
  mounted() {
    let svg = d3.select('.container').append('svg')
      .attr('width', 800)
      .attr('height', 800)
    svg.append('rect')
      .attr('x', 10)
      .attr('y', 120)
      .attr('width', 600)
      .attr('height', 40)
      .attr('stroke', 'black')
      .attr('fill', '#69a3b2');
  },
  methods: {},
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
