import React, { useState, useEffect } from 'react';

import '@scss/common/components/Spotlight.scss';

interface Position {
    x: number;
    y: number;
}

const Spotlight: React.FC = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [visible, setVisible] = useState<boolean>(false);

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setVisible(true);
    };

    const handleMouseLeave = () => {
        setVisible(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="spotlight"
            style={{
                height: "100%",
                left: `${position.x}px`,
                opacity: visible ? 1 : 0,
                top: `${position.y}px`,
                width: "100%",
            }}
        ></div>
    );
};

export default Spotlight;
