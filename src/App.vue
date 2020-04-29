<template>
  <div id="app" class="flex flex-col items-center justify-center h-screen m-4">    
    <div class="text-lg font-bold mb-2 text-gray-900 text-center px-4">annotation-highlight</div>
    <div class="max-w-md rounded shadow-lg text-left">      
      <div class="px-6 py-4">
        <annotation-highlight
          :text="text"
          :annotations="annotations"
          :highlightStyle="isStyleSelected ? highlightStyle : {}"          
          :highlightComponent="isComponentSelected ? MyHighlightComponent : 'mark'"      
        />
      </div>
      <div class="text-center pb-4 pl-4 pr-4">
        <label for="highlightstyle" class="pl-2 pr-2 text-sm text-gray-900">highlightStyle</label>
        <input class="mr-2 leading-tight" id="highlightstyle" type="checkbox" @change="isStyleSelected=!isStyleSelected">
        <label for="highlightcomponent" class="pl-2 pr-2 text-sm text-gray-900">highlightComponent</label>
        <input class="mr-2 leading-tight" id="highlightcomponent" type="checkbox" @change="isComponentSelected=!isComponentSelected">
      </div>
    </div>
  </div>
</template>

<script>
import AnnotationHighlight from './components/AnnotationHighlight'
import MyHighlightComponent from './components/MyHighlightComponent.vue'

export default {
  data() {
    return {
      text: 'An annotation is extra information associated with a particular point in a document or other piece of information.',

      annotations: [
        { begin: 3, length: 10, source:'PRED', confidence:'0.9' },
        { begin: 53, length: 16, source:'PRED', confidence:'0.7' }
      ],

      highlightStyle: {
        backgroundColor: 'lightblue', 
        border: '1px solid lightblue',        
        borderRadius: '4px'
      },

      MyHighlightComponent: MyHighlightComponent,
      
      isStyleSelected: false,   
      
      isComponentSelected: false
    }
  },

  components: {
    AnnotationHighlight
  }
}
</script>