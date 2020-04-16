const annotationValidator = obj => {
    if (Array.isArray(obj)) {
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
    if (!annotation.begin | !annotation.length) return false
    return true
}

export { annotationValidator }