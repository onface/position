var position = require('face-position')
position({
    el: document.getElementById('centerEl'),
    target: document.getElementById('centerTarget'),
    baseOn: {
        el: 'center',
        target: 'center'
    }
})
