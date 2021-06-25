class Checkbox {
    params = {}
    constructor(params) {
        this.params = params
    }

    create = () => {
        const {title, name, className, list} = this.params
        if ( list.length ==0 ) {
            throw new Error('value list can not be empty')
        }
        
        let str = `<div class="render-html-item ${className}">`

        if (title) {
            str += `<div class="title-class">${title}</div>`
        }

        str += `<div class="render-html-continer">`

        list.forEach((item, index) => {
            str +=  `<div class="checkbox-box checkbox-box-${++seed}">
                    <input 
                        type="checkbox" 
                        ${name ? 'name="'+name+'"' :'' } 
                        value="${item.value}" 
                        id="${item.id ? item.id : "checkbox-"+(seed)}" 
                        ${item.className ? 'class="'+item.className+'"' :'' } 
                    / ">
                    <label for="${item.id ? item.id : "checkbox-"+(seed)}" class="checkbox-label-${seed}">
                        ${item.label}
                    </label>
                </div>`
        })
        str += '</div></div>'
        return str
    }
}

export default Checkbox


