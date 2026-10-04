import React, { useEffect, useState } from 'react';
import { Utensils } from 'lucide-react';

export function SplashScreen({ onComplete }) {
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setExiting(true);
        }, 2250);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 2750);

        return () => {
            clearTimeout(showTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div
            className={`splash-screen${exiting ? ' is-exiting' : ''}`}
            role="status"
            aria-label="DormDish is loading"
        >
            <div className="splash-content">
                <div className="splash-mark-wrap">
                    <span className="splash-ring splash-ring-one" />
                    <span className="splash-ring splash-ring-two" />
                    <span className="splash-ring splash-ring-three" />

                    <div className="splash-mark">
                        <Utensils
                            size={52}
                            strokeWidth={2.2}
                        />
                    </div>
                </div>

                <div className="splash-wordmark">
                    Dorm<span>Dish</span>
                </div>

                <p className="splash-tagline">
                    Campus dining, simplified
                </p>
            </div>
        </div>
    );
}