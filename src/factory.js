import Radio from './elems/Radio'

const Factory = function() {}

Factory.createInstance = (params) => {
    switch(params.type) {
        case 'radio': return new Radio(params);break;
    }
}

export default Factory