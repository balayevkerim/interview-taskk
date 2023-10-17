// TargetTemperature.jsx
import React from 'react';
import './target-temperature.css';


const TargetTemperature = ({ minTemperature, maxTemperature, targetTemperature }) => {
    const clampedTarget = Math.max(minTemperature, Math.min(targetTemperature, maxTemperature));

    // Normalize target for visualization within [0, 1]
    const normalizedTarget = (clampedTarget - minTemperature) / (maxTemperature - minTemperature);

    // Calculate the x and y coordinates of the line end based on the normalized target temperature
    const angle = normalizedTarget * Math.PI * 2; // Full circle for 24 hours reference
    const lineLength = 40; // Same as circle radius
    const x2 = 50 + lineLength * Math.cos(angle - Math.PI / 2); // -PI/2 to start from the top
    const y2 = 65 + lineLength * Math.sin(angle - Math.PI / 2);

    return (
        <div className="temp-container">
            <svg width="100" height="180" className="temp-circle">
                <circle cx="50" cy="65" r="40" strokeWidth="2" fill="none" stroke="#ccc" />
                <line x1="50" y1="65" x2={x2} y2={y2} stroke="green" strokeWidth="2" /> {/* Target Temperature */}
                
                <line x1="40" y1="110" x2="40" y2="130" stroke="red" strokeWidth="2" /> {/* Min Temperature */}
                <line x1="60" y1="110" x2="60" y2="130" stroke="blue" strokeWidth="2" /> {/* Max Temperature */}
            </svg>
            <div className="temp-value">{clampedTarget.toFixed(1)}°C</div>
        </div>
    );
}

export default TargetTemperature;