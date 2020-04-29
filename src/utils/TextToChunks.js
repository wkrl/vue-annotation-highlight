let chunks, unhighlightText

const chunkify = (text, annotations) => {
    chunks = []
    unhighlightText = ''

    if (annotations) {    
        for (let offset = 0; offset < text.length; offset++) {
            let annotation = getAnnotationByOffset(annotations, offset)
            if (annotation) {
                let highlightText = text.slice(offset, offset + annotation.length)
                pushAnnotationChunk(highlightText, annotation)
                offset += annotation.length
            }
            unhighlightText += text.charAt(offset)
        }
        if (unhighlightText) pushUnhighlightChunk()
        return chunks
    } 
        
    unhighlightText = text 
    pushUnhighlightChunk()    
    return chunks
}

const getAnnotationByOffset = (annotations, offset) => {    
    if (Array.isArray(annotations)) {
        for (let annotation of annotations) if (annotation.begin == offset) return annotation
    } else if (annotations.begin == offset) {
        return annotations
    }
    return null
}

const pushAnnotationChunk = (highlightText, annotation) => {
    if (unhighlightText) pushUnhighlightChunk()    
    chunks.push({text: highlightText, isHighlight: true, annotation: annotation})
}

const pushUnhighlightChunk = () => {
    if (unhighlightText) chunks.push({text: unhighlightText, isHighlight: false})
    unhighlightText = ''
}

export { chunkify }