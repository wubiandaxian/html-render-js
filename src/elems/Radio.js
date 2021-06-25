// template = `
// <div class="title-class">title</>
// <div class="radio-box-1">
//     <input type="radio" name="sex" value="男" id="radio-1" >
//     <label for="radio-1" class="radio-label-1">
//         男
//     </label>
// </div>`
class Radio {
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
            str +=  `<div class="radio-box radio-box-${++seed}">
                    <input 
                        type="radio" 
                        ${name ? 'name="'+name+'"' :'' } 
                        value="${item.value}" 
                        id="${item.id ? item.id : "radio-"+(seed)}" 
                        ${item.className ? 'class="'+item.className+'"' :'' } 
                    / ">
                    <label for="${item.id ? item.id : "radio-"+(seed)}" class="radio-label-${seed}">
                        ${item.label}
                    </label>
                </div>`
        })
        str += '</div></div>'
        return str
    }
}

export default Radio


