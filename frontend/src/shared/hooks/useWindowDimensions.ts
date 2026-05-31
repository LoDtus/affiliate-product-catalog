import { useState, useEffect } from "react";

function useWindowDimensions() {
    const getWindowDimensions = () => ({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;