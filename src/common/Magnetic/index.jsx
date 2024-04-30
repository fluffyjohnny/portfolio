import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Index({children}) {
    const useMagnetic = useRef(null);

    useEffect( () => {
        const xTo = gsap.quickTo(useMagnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(useMagnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        useMagnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = useMagnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x * 0.35);
            yTo(y * 0.35)
        })
        useMagnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
    }, [])

    return (
        React.cloneElement(children, {ref:useMagnetic})
    )
}
