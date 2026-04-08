/**
 * useOutSide Hook: event listener to check when a 
 * user clicks outside the main component and attaches event to it
 */
import React, { useEffect } from "react";


type EventProps = {
    ref: React.RefObject<HTMLElement> | null;
    callback: () => void;
}


export default function useOutSideEvent({ref, callback} : EventProps ) {

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref?.current && !ref?.current.contains(event.target as Node)) {
                callback();
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);

}
