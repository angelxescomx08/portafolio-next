'use client'
import { useInView } from 'react-hook-inview'
import { Cloud, renderSimpleIcon } from 'react-icon-cloud'
import {
    siNextdotjs, siJavascript, siReact, siWordpress, siAngular, siPython, siStrapi,
    siIonic, siDjango, siTsnode, siSvelte
}
    from "simple-icons"

const iconos = [
    siNextdotjs,
    siJavascript,
    siReact,
    siWordpress,
    siAngular,
    siPython,
    siStrapi,
    siIonic,
    siDjango,
    siTsnode,
    siSvelte
];

const icons = iconos.map((icon) => {
    return renderSimpleIcon({
        icon,
        size: 150,
        aProps: {
            onClick: (e: any) => e.preventDefault(),
            href: "#",
        }
    })
})

export default function GloboIconos() {
    const [ref, isVisible] = useInView({
        threshold: 0,
        unobserveOnEnter: true,
    })
    return (
        <div ref={ref}>
            {isVisible ? <Cloud id={'globo-iconos'}>
                {icons}
            </Cloud> : null}
        </div>
    )
}