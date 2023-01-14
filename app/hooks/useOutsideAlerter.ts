import { RefObject, useEffect } from "react";

/**
 * Hook que alerta clics fuera de la referencia pasada
 */
export function useOutsideAlerter(ref: RefObject<any>, funcion: Function) {
    useEffect(() => {
        /**
         * Alerta si hace click fuera de la referencia pasada
         */
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                funcion();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}
