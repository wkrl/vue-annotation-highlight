<template>
	<div>
		<span v-for="(chunk, index) in getTextAsChunks" :key="index">
      <component
        v-if="chunk.isHighlight"
        :is="highlightComponent"
        :annotation="chunk.annotation"
        :style="highlightStyle"
      >{{chunk.text}}</component>
      <span
        v-else
      >{{chunk.text}}</span>
    </span>
	</div>
</template>

<script>
import { annotationValidator } from '../utils/AnnotationValidator'
export default {
  name: 'annotation-highlight',
	props: {
		text: {
			type: String,
			required: true
		},

		annotations: {
			type: [Array, Object],
			required: true,
			validator: obj => annotationValidator(obj)
		},

		highlightStyle: {
			type: [Object, String],
			default: () => { return {} }
		},

		highlightComponent: {
			type: [Object, String],
      default: 'mark'
		}
  },

	computed: {
    getTextAsChunks() {
      let chunks = []
      let unhighlightText = ''
      for (let offset = 0; offset < this.$props.text.length; offset++) {
        let annotation = this.getAnnotationByOffset(this.$props.annotations, offset)
        if (annotation) {
          if (unhighlightText) chunks.push({text: unhighlightText, isHighlight: false})
          unhighlightText = ''
          let highlightText = this.getHighlightByAnnotationLength(offset, annotation.length)
          chunks.push({text: highlightText, isHighlight: true, annotation: annotation})
          offset += annotation.length
        }
        unhighlightText += this.$props.text.charAt(offset)
      }
      if (unhighlightText) chunks.push({text: unhighlightText, isHighlight: false})
      return chunks
    }
  },

  methods: {
    getAnnotationByOffset(annotations, offset) {
      if (Array.isArray(annotations)) {
        for (let annotation of annotations) if (annotation.begin == offset) return annotation
      } else if (annotations.begin == offset) {
        return annotations
      }
      return null
    },

    getHighlightByAnnotationLength(offset, length) {
      let word = ''
      for (let i = 0; i < length; i++) {
        word += this.$props.text.charAt(offset+i)
      }
      return word
		},
  }
}
</script>