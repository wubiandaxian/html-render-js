import Radio from './elems/Radio'
import Checkbox from './elems/checkbox'
import Input from './elems/Input'
import Textarea from './elems/Textarea'

const Factory = function() {}

Factory.createInstance = (params) => {
    switch(params.type) {
        case 'radio': return new Radio(params); break;
        case 'checkbox': return new Checkbox(params); break;
        case 'input': return new Input(params); break;
        case 'textarea': return new Textarea(params); break;
    }
}

export default Factory