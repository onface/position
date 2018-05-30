# 指引

> 使用一个组件或模块之前，应当知道它能解决的问题是什么，不能解决的问题是什么。使用的最佳实践是什么？

在 CSS 中我们经常使用 `position` 实现页面布局。CSS 的定位是以上一个 `position` 值不为 `static` 的元素作为基准定位。


````html
<div style="position:relative;border:1px solid skyblue;width:100px;height:100px;" >
    relative
    <div style="position:absolute;bottom:0;right:0;border:1px solid orange" >absolute</div>
</div>
````

CSS定位需要查找上下级关系实现。但有些情况下我们做不到元素 `el` 是目标 `target` 的子孙节点。

使用 `face-positon` 可以实现将元素定位到任意 DOM 的指定位置。


```js
var positon = require('face-position')
positon({
    el: document.getElementById('el'),
    target: document.getElementById('target'),
    baseOn: {
        el: 'left top',
        target: 'center'
    }
})
```

````html
<div id="target" style="width:3.5em;height:3.5em;background-color:skyblue;opacity:.5;" >target</div>
<div id="el" style="width:3.5em;height:3.5em;background-color:yellow;opacity:.5;" >el</div>
````

<script src="./intro.demo.js"></script>

## 重新定位时机

face-position 并没有监听窗口改变或 DOM 改变时改变位置,如果你有这样的需求,请自行监听 `onresize` 。

### onresize

```js
window.addEventListener('resize', function () {
    position({
        el: document.getElementById('el'),
        target: document.getElementById('target')
    })
})
```

遇到极端情况需要实时定位时一定要使用 `requestAnimationFrame`。

### requestAnimationFrame

```js
requestAnimationFrame(function callee () {
    position({
        el: document.getElementById('el'),
        target: document.getElementById('target')
    })
    requestAnimationFrame(callee)
})
```

### react.componentDidUpdate

React 等框架可生命周期中每次渲染完成后重新定位。

> React 中请使用 [position.react](https://onface.github.io/position.react/)

```js
componentDidUpdate () {
    position({
        el: self.props.$refs.root,
        target: self.props.target
    })
}
```


**[更多使用方法](./README.md)**
