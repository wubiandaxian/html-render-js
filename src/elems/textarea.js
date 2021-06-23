class Textarea {
    params = {}
    constructor(params) {
        this.params = params
    }

    create = () => {
        const {title, name, className, value, id} = this.params
        
        let str = `<div class="render-html-item ${className || ''}">`

        if (title) {
            str += `<div class="title-class">${title || ''}</div>`
        }

        str += `<div class="render-html-continer">
                    <div class="input-box ">
                        <textarea 
                            name="${name || ''}"
                            id="textarea-label ${id ? id : ''}" 
                            class="${className || ''}"
                        ">${value || ''}</textarea>
                
                    </div>`
        str += '</div></div>'
        return str
    }
}

export default Textarea


