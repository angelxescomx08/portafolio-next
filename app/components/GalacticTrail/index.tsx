'use client'

import { useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { Particle } from './classes/Particle';

let mouseDown = false
let radians = 0
let alpha = 1
let particles: Particle[] = [];

export const GalacticTrail = () => {
    useEffect(() => {

        const canvas = document.querySelector('canvas')!
        const c = canvas.getContext('2d')!

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        const mouse = {
            x: innerWidth / 2,
            y: innerHeight / 2
        }

        const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

        let mouseDown$ = fromEvent(document, 'mousedown')
        let mouseUp$ = fromEvent(document, 'mouseup')

        let resize$ = fromEvent(window, 'resize')

        let mouseDownSuscription = mouseDown$.subscribe(() => {
            mouseDown = true
        })

        let mouseUpSuscription = mouseUp$.subscribe(() => {
            mouseDown = false
        })

        let resizeSuscription = resize$.subscribe(() => {
            canvas.width = innerWidth
            canvas.height = innerHeight
            init()
        })

        function init() {
            particles = []

            for (let i = 0; i < 300; i++) {
                const canvasWidth = canvas.width + 500
                const canvasHeight = canvas.height + 500

                const x = Math.random() * canvasWidth - canvasWidth / 2
                const y = Math.random() * canvasHeight - canvasHeight / 2
                const radius = 2 * Math.random()

                const color = colors[Math.floor(Math.random() * colors.length)]
                particles.push(new Particle(canvas.getContext('2d')!, x, y, radius, color))
            }
        }

        function animate() {
            requestAnimationFrame(animate)
            c.fillStyle = `rgba(10,10,10,${alpha})`
            
            c.fillRect(0, 0, canvas.width, canvas.height)
            
            c.save()
            c.translate(canvas.width / 2, canvas.height / 2)
            c.rotate(radians)

            particles.forEach(particle => {
                particle.update()
            })

            c.restore()
            radians+=0.0008

            if (mouseDown && alpha >= 0.03) {
                alpha -= 0.01
            } else if (!mouseDown && alpha < 1) {
                alpha += 0.01
            }
        }


        init()
        animate()

        return () => {
            mouseDownSuscription.unsubscribe()
            mouseUpSuscription.unsubscribe()
            resizeSuscription.unsubscribe()
        }

    }, [])
    return (
        <canvas></canvas>
    )
}
