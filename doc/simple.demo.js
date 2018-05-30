var demo = document.getElementById('simple-demo')

var el = document.createElement('div')
el.setAttribute('style', 'width:3.5em;height:3.5em;background-color:yellow;opacity:.5;')
el.innerHTML = 'el'
demo.appendChild(el)

var target = document.createElement('div')
target.setAttribute('style', 'width:3.5em;height:3.5em;background-color:skyblue;')
target.innerHTML = 'target'
demo.appendChild(target)

var positon = require('face-position')
positon({
    el: el,
    target: target,
    baseOn: {
        el: 'left top',
        target: 'center'
    }
})
