import { useState, useEffect } from "react";

function useElementDimensions(id: string) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const element = document.getElementById(id);
        if (!element) return;

        const updateDimensions = () => {
            setDimensions({
                width: element.offsetWidth,
                height: element.offsetHeight,
            });
        };
        updateDimensions();

        const resizeObserver = new ResizeObserver(() => {
            updateDimensions();
        });
        resizeObserver.observe(element);

        return () => resizeObserver.disconnect();
    }, [id]);

    return dimensions;
}

export default useElementDimensions;