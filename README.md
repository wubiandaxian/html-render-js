# html-render-js
利用JS生成常用的一些html元素

#### 支持列表
Radio, Checkbox, Input, Textarea

#### Demo

```javascript
const radioParams = {
        title: '第一个title',
        type: 'radio',
        name: 'sex',
        className: 'radio-clsss',
        list: [
            { value:'男', class: 'test', label:'男',  className: 'radio-1 hojj'},
            { value:'女', class: 'test', label:'女', id:"my-id2", className: 'radio-2'},
            { value:'你猜', class: 'test', label:'哈哈', id:"my-id3"},
        ]
    }

    const checkboxParams = {
        title: '第三个title',
        type: 'checkbox',
        name: 'hobby',
        className: 'checkbox-clsss',
        list: [
            { value:'10', class: 'test', label:'10',  className: 'checkbox-1 hojj'},
            { value:'8', class: 'test', label:'8', className: 'checkbox-2'},
            { value:'5', class: 'test', label:'5'},
        ]
    }

    const inputParams = {
        //title: '第三个title',
        //label: '第三个label',
        type: 'input',
        //name: 'name',
        id: 'name',
        value: '',
        className: 'input-clsss',
    }

    const textareaParams = {
        title: '简介',
        type: 'textarea',
        name: 'desc',
        id: '',
        value: '默认简介……',
        className: 'textarea-clsss',
    }

    const arr = [radioParams, radio2Params, checkboxParams, inputParams, textareaParams]
    const res = HtmlRender.render(arr)
    console.log(res);
```

