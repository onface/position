var position = require('face-position')

position({
    el: document.getElementById('el1'),
    target: document.getElementById('target1')
})




document.getElementById('set').addEventListener('submit', function (e) {
    e.preventDefault()
    var json = document.getElementById('options').value
    var options = JSON.parse(json)
    options.el = document.getElementById('el1')
    options.target = document.getElementById('target1')
    options.useCssTransform = true
    options.onAlign = function onAlign (positionition, el, target, offsetParent) {
        console.log(positionition)
        // positionition.left = positionition.left + 10
        return positionition
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
