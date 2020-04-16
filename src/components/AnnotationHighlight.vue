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
import { chunkify } from '../utils/TextToChunks'

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
			return chunkify(this.$props.text, this.$props.annotations)
    }
  }
}
</script>