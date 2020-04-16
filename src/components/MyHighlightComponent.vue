<template>
  <span class="tooltip" @mouseover="hover = true" @mouseleave="hover = false">
    <ins>
      <slot></slot>
    </ins>
    <div class="tooltiptext" v-if="hover">
      <p>{{'confidence: ' + annotation.confidence}}</p>
      <p>{{'source: ' + annotation.source}}</p>
    </div>
  </span>
</template>

<script>
export default { 
  props: {
    annotation: [Object, Array]
  },

  data() {
    return {
      hover: false
    }    
  }
}
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;		
}

.tooltiptext {
  position: absolute;
  z-index: 1;	
  width: 200px;
  top: 100%;
  left: 50%;
  margin-left: -100px; /* -width/2 to center tooltip */
  background-color: yellow;
  padding: 8px; 
  border-radius: 4px;	
}

.tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;  /* At the top of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent yellow transparent;
}
</style>