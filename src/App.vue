<template>
  <div id="app">
    <annotation-highlight
      :text="text"
      :annotations="annotations"
    />
  </div>
</template>

<script>
import AnnotationHighlight from './components/AnnotationHighlight'

export default {
  data() {
    return {
      text: 'An annotation is extra information associated with a particular point in a document or other piece of information.',
      annotations: [
        { begin: 3, length: 10, source:'PRED', confidence:'0.9' },
        { begin: 53, length: 16, source:'PRED', confidence:'0.7' }
      ]
    }
  },

  components: {
    AnnotationHighlight,
  }
}
</script>