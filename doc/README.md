# 文档

## 对齐定位


````html
<div class="wrap" id="wrap1" >
    <div class="targetWrap">
        <br />
        <span id="target1" class="target"  >target</span>
        <div style="width:600px;height:600px;overflow:hidded;background-color:rgba(1,1,1,.1);" ></div>
    </div>
    <div id="el1" class="el" >el</div>
</div>
<form id="set">
<textarea class="options" id="options">{
    "baseOn":{
        "el": "left top",
        "target": "left bottom"
    }
}</textarea>
<button type="submit" >Set</button>
</form>
````


````css
.wrap {
    width:200px;
    height:200px;
    border:1px solid #ABCDEF;
    border-width: 1px 2px 3px 4px;
    position:relative;
    overflow-y: auto;
}
.targetWrap {
    padding:50px;position:relative;
}
.target {
    opacity: .8;
    width:100px;height:100px;background-color:skyblue;
    border:1px solid pink;
    border-width: 1px 2px 3px 4px;
}
.el {
    opacity: .8;
    width:30px;height:30px;
    background-color:purple;
    /* useCssTransform */
    transition: transform .3s;
}
.options{font-size:12px;height:8em;width:20em;}
````


````code
{
    title: '基础定位',
    html: '<div id="example__basic"></div>',
    desc: '将 `el` 定位到 `target` 左上角',
    js: './basic.demo.js',
    source: './basic.demo.js'
}
````

## defaultProps

````code
{
    title: 'defaultProps',
    html: '',
    desc: '',
    open: true,
    js: '../lib/defaultProps.js',
    source: '../lib/defaultProps.js'
}
````

## center

````html
<div id="centerTarget" style="border:1px solid red;">
abc
<div id="centerEl" style="width:100px;height:100px;background-color:rgba(124,124,141, 0.2)" >

</div>
</div>
````

````code
{
    title: 'center',
    html: '',
    desc: '',
    js: './center.demo.js',
    source: './center.demo.js'
}
````

## 注意事项

1. [重新定位时机](./intro.md#重新定位时机)
2. React 中请使用 [position.react](https://onface.github.io/position.react/)
