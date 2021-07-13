var canvas = document.createElement('canvas')
document.body.appendChild(canvas)

canvas.width = window.screen.width
canvas.height = window.screen.height
var context = canvas.getContext('2d')

var canBoxWidth = 10
var canBoxHeight = 10

var commonFirstXpoint = 200
var commonFirstYpoint = 0
var commonSecondXpoint = 400
var commonSecondYpoint = 200

context.fillStyle = 'red'
context.fillRect(commonFirstXpoint, commonFirstYpoint, canBoxWidth, canBoxHeight)

context.fillStyle = 'green'
context.fillRect(commonSecondXpoint, commonFirstYpoint, canBoxWidth, canBoxHeight)

context.fillStyle = 'yellow'
context.fillRect(commonFirstXpoint, commonSecondYpoint, canBoxWidth, canBoxHeight)

context.fillStyle = 'purple'
context.fillRect(commonSecondXpoint, commonSecondYpoint, canBoxWidth, canBoxHeight)


var xStartPtChange = commonFirstXpoint
var x11StartPtChange = commonSecondXpoint
var yStartPtChange = commonFirstYpoint
var y11StartPtChange = commonSecondYpoint


window.requestAnimationFrame(function loop() {  
    xStartPtChange += 1
    yStartPtChange += 1
    y11StartPtChange -= 1
    x11StartPtChange -= 1

    context.fillStyle = 'red'
    if(xStartPtChange <= commonSecondXpoint){
        context.fillRect(xStartPtChange, commonFirstYpoint, canBoxWidth, canBoxHeight)
    }
  
    context.fillStyle = 'green'  
    if(yStartPtChange <= commonSecondYpoint){
        context.fillRect(commonSecondXpoint, yStartPtChange, canBoxWidth, canBoxHeight) 
    }

    context.fillStyle = 'yellow'
    if(y11StartPtChange <= commonFirstXpoint){
       context.fillRect(commonFirstXpoint, y11StartPtChange, canBoxWidth, canBoxHeight)
    }
    
    context.fillStyle = 'purple'  
    if(x11StartPtChange >= commonFirstXpoint){
        context.fillRect(x11StartPtChange, commonSecondYpoint, canBoxWidth, canBoxHeight)
    }
  
    window.requestAnimationFrame(loop)
})
