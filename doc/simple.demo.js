var demo = document.getElementById('simple-demo')

var target = document.createElement('div')
target.setAttribute('style', 'border:2px solid skyblue;')
target.innerHTML = 'target'
demo.appendChild(target)

var el = document.createElement('div')
el.setAttribute('style', 'display:inline-block;background-color:rgba(255,123,122, .2)')
el.innerHTML = 'el'
demo.appendChild(el)

var positon = require('face-position')
positon({
    el: el,
    target: target,
    // baseOn: {
    //     el: 'left center',
    //     target: 'center'
    //
    // }
})
