import { annotationValidator } from '@/utils/AnnotationValidator.js'

describe('AnnotationValidator.js', () => {
    it('returns true when object or array with right properties is given', () => {
        const annotations = [
            { begin: 0, length: 1 },
            { begin: 3, length: 4 }
        ]        
        const objectValidation = annotationValidator(annotations[0]) 
        const arrayValidation = annotationValidator(annotations)

        expect(objectValidation).toBeTruthy
        expect(arrayValidation).toBeTruthy
    })

    it('returns false when object or array with missing properties is given', () => {
        const annotations = [
            { data: 1 },
            { data: 3, text: 4}
        ]        
        const objectValidation = annotationValidator(annotations[0]) 
        const arrayValidation = annotationValidator(annotations)

        expect(objectValidation).toBeFalsy
        expect(arrayValidation).toBeFalsy
    })
})
