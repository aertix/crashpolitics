var canvas = document.querySelector('canvas');
canvas.style.position = 'fixed'
canvas.style.pointerEvents = 'none'
canvas.style.zIndex = '1000'
function calculateArea() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
calculateArea()

// c within canvas means context
var c = canvas.getContext('2d');

window.addEventListener('resize', () =>{calculateArea()})

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('click', function(event) {
    console.log(event)
    mouse.x = event.clientX
    mouse.y = event.clientY
    let coordinates = [mouse.x,mouse.y]
    function Circle(x, y,dx,dy,r) {
        this.x = mouse.x
        this.y = mouse.y
        this.dx = dx
        this.dy = dy
        this.r = r
        this.color = Math.floor(Math.random() * 5)
        this.draw = function() {
            c.beginPath()
            c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
            c.strokeStyle = 'transparent'
            c.fillStyle = colorArray[this.color]
            c.fill()
            c.stroke();
        }
        
    
        this.update = function (){
           this.x += this.dx
           this.y += this.dy
            if(this.r>.1){
                this.r -= 1.5
            }

            this.draw()
        }
    }
    
    for(let i = 0; i<24; i++) {
        let r = 30
        let x = 100
        let dx= (Math.random()*15)-7.5;
        let y = 100
    
        let dy = (Math.random()*15)-7.5;
        circleArray.push(new Circle(x, y, dx, dy, r))
        console.log('gay')

    }



})

var colorArray = [
    '#292929',
    '#6E6E95',
    '#E7D7EC',
    '#32373B',
    '#B3BDBB'

]




var circleArray = []




animate()

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight) 

    


for(let i = 0; i< circleArray.length; i++) {
    circleArray[i].update()
}


}







