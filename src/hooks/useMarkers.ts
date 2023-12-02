import { useState } from 'react';
import {Marker} from "../types/marker";

const useMarkers = () => {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const addMarker = (progress: number, type: string, note: string) => {
    const newMarker: Marker = {
      timestamp: progress,
      type,
      note,
    };
    setMarkers([...markers, newMarker]);
  };

  const editMarker = (index: number) => {
  };

  const deleteMarker = (index: number) => {
    setMarkers(markers.filter((_, i) => i !== index));
  };

  return { markers, addMarker, editMarker, deleteMarker };
};

export default useMarkers;
