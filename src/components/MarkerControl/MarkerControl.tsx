import React, {useState} from 'react';

interface MarkerControlProps {
    progress: number,
    onAddMarker: (progress: number, type: string, note: string) => void;
}

const MarkerControl: React.FC<MarkerControlProps> = ({progress, onAddMarker}) => {
    const [note, setNote] = useState<string>('');

    return (
        <div>
            <button onClick={() => onAddMarker(progress, 'Mistake Cut Mark', note)}>Add Mistake Cut Mark</button>
            <button onClick={() => onAddMarker(progress, 'Memorable Moment Mark', note)}>Add Memorable Moment Mark</button>
            <textarea
                placeholder="Add notes (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={250}
            />
        </div>
    );
}

export default MarkerControl;
