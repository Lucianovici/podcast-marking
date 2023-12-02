// src/App.tsx

import React from 'react';

import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import MarkerControl from './components/MarkerControl/MarkerControl';
import MarkerList from './components/MarkerList/MarkerList';
import Footer from './components/Footer/Footer';

import usePodcastRecording from './hooks/usePodcastRecording';
import useMarkers from './hooks/useMarkers';

const App: React.FC = () => {
    const {
        progress,
        startRecording,
        pauseRecording,
        resetRecording
    } = usePodcastRecording();

    const {
        markers,
        addMarker,
        editMarker,
        deleteMarker
    } = useMarkers();

    return (
        <div className="App">
            <Header sessionTitle="Example Podcast Session"/>
            <ProgressBar
                progress={progress}
                markers={markers}
                onStart={startRecording}
                onPause={pauseRecording}
                onReset={resetRecording}
            />
            <MarkerControl progress={progress} onAddMarker={addMarker}/>
            <MarkerList markers={markers} onEdit={editMarker} onDelete={deleteMarker}/>
        </div>
    );
};

export default App;
