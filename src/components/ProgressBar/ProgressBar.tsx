import React from 'react';
import styles from './ProgressBar.module.css';
import {Marker} from "../../types/marker";
import {formatTime} from "../../utils/timeUtils";

interface ProgressBarProps {
    progress: number; // Assuming progress is in seconds for simplicity
    markers: Marker[];
    onStart: () => void;
    onPause: () => void;
    onReset: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({progress, markers, onStart, onReset, onPause}) => {
    // Calculate the width of each time label (e.g., for 10-minute increments)
    const increment = 10 * 60; // 10 minutes in seconds
    const totalDuration = 60 * 60 + 600; // Total duration in seconds (e.g., 1 hour)
    const numLabels = totalDuration / increment;

    const timeLabels = Array.from(
        {length: numLabels}, (_, i) => formatTime(i * increment)
    );

    const getMarkerPosition = (seconds: number) => {
        return (seconds / totalDuration) * 100;
    };

    return (
        <div>
            <div style={{position: 'relative', width: '100%', backgroundColor: '#ddd', borderRadius: '5px'}}>
                <div id="progress-bar" style={{
                    width: `${(progress / totalDuration) * 100}%`,
                    height: '30px',
                    backgroundColor: progress > 80 ? 'red' : 'green'
                }}></div>
                {
                    markers.map((marker, index) => (
                        <div
                            key={index}
                            className={styles.markerPin}
                            style={{left: `${getMarkerPosition(marker.timestamp)}%`}}
                        >
                            <span className={styles.tooltip}>{formatTime(marker.timestamp)}</span>
                        </div>
                    ))
                }
                {timeLabels.map((label, index) => (
                    <div key={index}
                         style={{position: 'absolute', left: `${(index * increment / totalDuration) * 100}%`}}>
                        {label}
                    </div>
                ))}
            </div>

            <button onClick={onStart}>Start</button>
            <button onClick={onPause}>Pause</button>
            <button onClick={onReset}>Reset</button>

        </div>
    );
};

export default ProgressBar;
