import React from 'react';

import { Marker } from '../../types/marker';

interface MarkerListProps {
  markers: Marker[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const MarkerList: React.FC<MarkerListProps> = ({ markers, onEdit, onDelete }) => {
  return (
    <div>
      {markers.map((marker, index) => (
        <div key={index}>
          <span>{marker.timestamp}</span>
          <span>{marker.type}</span>
          <span>{marker.note}</span>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MarkerList;
