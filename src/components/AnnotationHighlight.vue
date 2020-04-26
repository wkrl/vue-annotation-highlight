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
    textAsChunks() {
			return chunkify(this.$props.text, this.$props.annotations)
    }
	},
	
	render() {
    return <span>{this.textAsChunks.map(chunk => {
			return chunk.isHighlight ? 
				<this.highlightComponent style={this.highlightStyle} annotation={chunk.annotation}>{chunk.text}</this.highlightComponent> 
					: 
				<span>{chunk.text}</span>
		})}</span>
  }
}
</script>