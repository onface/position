var position = require('face-position')

position({
    el: document.getElementById('el1'),
    target: document.getElementById('target1')
})

console.log('1')

document.getElementById('set').addEventListener('submit', function (e) {
    e.preventDefault()
    var json = document.getElementById('options').value
    var options = JSON.parse(json)
    options.el = document.getElementById('el1')
    options.target = document.getElementById('target1')
    options.useCssTransform = true
    options.onPosition = function onPosition (postion, el, target, offsetParent) {
        console.log(postion)
        console.log({
            elWidth: el.$overallWidth,
            elHeight: el.$overallHeight,
            targetWidth: target.$overallWidth,
            targetHeight: target.$overallHeight,
        })
        return {
            x:0,
            y:0
        }
    }
    position(options)
})

var box = document.createElement('div')
box.style.width = '20px'
box.style.height = '20px'
box.style.backgroundColor = 'orange'
document.body.appendChild(box)

position({
    el: box,
    target: document.getElementById('wrap1')
})
