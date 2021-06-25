import Factory from './factory'

window.seed = 1

const params = {
    type: 'radio',
    name: 'sex',
    className: 'radio-clsss',
    list: [
        { value:'男', class: 'test', label:'男', className: 'radio-1'},
        { value:'女', class: 'test', label:'女', className: 'radio-2'},
    ]
}

export function render(params) {
    if (params.hasOwnProperty('length')) {
        return params.reduce( (a, b, i) => {
            a.push(Factory.createInstance(b).create())
            return a
        }, [])
    } else {
        return Factory.createInstance(params).create()
    }
}
