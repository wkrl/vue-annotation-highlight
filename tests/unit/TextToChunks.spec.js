import { chunkify } from '@/utils/TextToChunks.js'

describe('TextToChunks.js', () => {
    const text = 'An annotation is extra information associated with a particular point in a document or other piece of information.'  

    it('returns unhighlighted element when no annotation is given', () => {        
        const annotations = {}
        const chunks = chunkify(text, annotations)
        
        expect(chunks).toEqual([
            { text: text, isHighlight: false }
        ])
    })

    it('returns highlight elements with annotation properties when annotations are given', () => {
        const annotations = [
            { begin: 0, length: 1 },
            { begin: text.length - 1, length: 1 }
        ]
        const chunks = chunkify(text, annotations)

        expect(chunks).toEqual([
            { text: 'A', isHighlight: true, annotation: annotations[0] },
            { text: text.slice(1, text.length - 1), isHighlight: false },
            { text: '.', isHighlight: true, annotation: annotations[1] }, 
        ])
    })
})
