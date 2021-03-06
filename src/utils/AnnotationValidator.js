const annotationValidator = obj => {    
    if (Array.isArray(obj)) {
        if (obj.length === 0) return true
        return annotationsAsArrayValidator(obj)
    } 
    return annotationAsObjectValidator(obj)     
}

const annotationsAsArrayValidator = annotations => {
    for (let annotation of annotations) {
        return annotationAsObjectValidator(annotation)
    }
}

const annotationAsObjectValidator = annotation => {
    if (!Number.isInteger(annotation.begin) | !Number.isInteger(annotation.length)) return false
    return true
}

export { annotationValidator }