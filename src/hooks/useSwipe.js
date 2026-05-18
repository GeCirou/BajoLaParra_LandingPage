import { useState } from 'react';

export function useSwipe(onSwipeLeft, onSwipeRight, minDistance = 50) { 
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minDistance) onSwipeLeft();
        if (distance < -minDistance) onSwipeRight();
    };

    return { onTouchStart, onTouchMove, onTouchEnd };
}