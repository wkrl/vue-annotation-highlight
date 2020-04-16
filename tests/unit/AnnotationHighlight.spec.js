import { shallowMount } from '@vue/test-utils'
import AnnotationHighlight from '@/components/AnnotationHighlight.vue'
import MyHighlightComponent from '@/components/MyHighlightComponent.vue'

describe('AnnotationHighlight.vue', () => {
  const text = 'An annotation is extra information associated with a particular point in a document or other piece of information.'  
  const annotations = [
    { begin: 3, length: 10 },
    { begin: 53, length: 16 }
  ]

  it('renders props.text when passed along with annotation', () => {
    const wrapper = shallowMount(AnnotationHighlight, {
      propsData: { 
        text, 
        annotations: annotations[0] 
      }
    })

    expect(wrapper.text()).toMatch(text)
  })

  it('renders props.text when passed along with annotation array', () => {
    const wrapper = shallowMount(AnnotationHighlight, {
      propsData: { 
        text, 
        annotations 
      }
    })

    expect(wrapper.text()).toMatch(text)
  })

  it('wraps html mark tag around annotation text by default', () => {
    const annotationText = text.slice(annotations[0].begin, annotations[0].begin + annotations[0].length)

    const wrapper = shallowMount(AnnotationHighlight, {
      propsData: { 
        text, 
        annotations: annotations[0]
      }
    })    

    expect(wrapper.find('mark').text()).toBe(annotationText)    
  })  

  it('renders props.highlightComponent', () => {
    const wrapper = shallowMount(AnnotationHighlight, {
      propsData: { 
        text, 
        annotations,  
        highlightComponent: MyHighlightComponent
      }
    })

    expect(wrapper.find(MyHighlightComponent).exists()).toBe(true)    
  })

  it('passes annotation data to highlight component', () => {
    const wrapper = shallowMount(AnnotationHighlight, {
      propsData: {
        text,
        annotations,
        highlightComponent: MyHighlightComponent
      }
    })

    expect(wrapper.find(MyHighlightComponent).attributes().annotation).toBeDefined()
  })

  it('passes props.highlightStyle to highlight component', () => {
    const wrapper = shallowMount(AnnotationHighlight, {
      propsData: {
        text,
        annotations,
        highlightStyle: 'background-color: red',       
        highlightComponent: MyHighlightComponent
      }
    })    
    expect(wrapper.find(MyHighlightComponent).attributes().style).toEqual('background-color: red;')
  })
})
