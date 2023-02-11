export class Particle {
    x = 0
    y = 0
    radius = 0
    color = ''
    c: CanvasRenderingContext2D
    constructor(c: CanvasRenderingContext2D ,x:number, y:number, radius: number, color: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.c = c
    }

    draw(){
        this.c.beginPath()
        this.c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        this.c.shadowColor = this.color
        this.c.shadowBlur = 15
        this.c.fillStyle = this.color
        this.c.fill()
        this.c.closePath()
    }

    update(){
        this.draw()
    }
}