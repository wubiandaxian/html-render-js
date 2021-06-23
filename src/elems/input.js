class Input {
    params = {}
    constructor(params) {
        this.params = params
    }

    create = () => {
        const {title, name, className, label, value, id} = this.params
        
        let str = `<div class="render-html-item ${className || ''}">`

        if (title) {
            str += `<div class="title-class">${title || ''}</div>`
        }

        str += `<div class="render-html-continer">`

        str +=  `<div class="input-box ">`

        if (label) {
            str += `<label for="input-label" class="input-label">
                    ${label || ''}
                </label>`
        }
                
        str +=   `<input 
                    type="text" 
                    name="${name || ''}"
                    value="${value || ''}" 
                    id="${id ? id : ''}" 
                    class="${className || ''}"
                / ">
                
            </div>`

        str += '</div></div>'
        return str
    }
}

export default Input


