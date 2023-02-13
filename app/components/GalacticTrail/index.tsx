'use client'

import { useEffect, useRef } from 'react';
import { fromEvent } from 'rxjs';
import { Particle } from './classes/Particle';

let mouseDown = false
let radians = 0
let alpha = 1
let particles: Particle[] = [];

const getRange = (width: number) => {
    if (width < 600) {
        return 0
    }
    if (width < 1200) {
        return 50
    }
    return 1000
}

const getN = (width: number) => {
    if (width < 600) {
        return 0
    }
    if (width < 1200) {
        return 200
    }
    return 500
}

export const GalacticTrail = () => {

    const width = useRef(0)

    useEffect(() => {

        const canvas = document.querySelector('canvas')!
        const c = canvas.getContext('2d')!

        width.current = innerWidth

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

        let mouseDown$ = fromEvent(document, 'mousedown')
        let mouseUp$ = fromEvent(document, 'mouseup')

        let touchDown$ = fromEvent(document, 'touchstart')
        let touchUp$ = fromEvent(document, 'touchend')

        let resize$ = fromEvent(window, 'resize')

        let mouseDownSuscription = mouseDown$.subscribe(() => {
            mouseDown = true
        })

        let mouseUpSuscription = mouseUp$.subscribe(() => {
            mouseDown = false
        })

        let touchDownSuscription = touchDown$.subscribe(() => {
            mouseDown = true
        })

        let touchUpSuscription = touchUp$.subscribe(() => {
            mouseDown = false
        })

        let resizeSuscription = resize$.subscribe(() => {
            canvas.width = innerWidth
            canvas.height = innerHeight
            width.current = innerWidth
            init()
        })

        function init() {
            particles = []

            let n = getN(width.current)

            for (let i = 0; i < n; i++) {
                const canvasWidth = canvas.width + getRange(width.current)
                const canvasHeight = canvas.height + getRange(width.current)

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

            if (mouseDown) {
                radians += 0.003
            } else {
                radians += 0.0003
            }

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
            touchDownSuscription.unsubscribe()
            touchUpSuscription.unsubscribe()
        }

    }, [])
    return (
        <canvas></canvas>
    )
}
