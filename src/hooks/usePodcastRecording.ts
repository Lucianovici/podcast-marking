import {useState, useEffect} from 'react';

const usePodcastRecording = () => {
    const [progress, setProgress] = useState<number>(0);
    const [isRecording, setIsRecording] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRecording && progress < 100) {
            interval = setInterval(() => {
                setProgress((prevProgress) => prevProgress < 100 ? prevProgress + 1 : 100);
            }, 1000); // Increment progress every second
        }

        return () => {
            if (interval) clearInterval(interval);
            // No need to return anything here, it implicitly returns undefined
        };
    }, [isRecording, progress]);


    const startRecording = () => setIsRecording(true);
    const pauseRecording = () => setIsRecording(false);
    const resetRecording = () => {
        setIsRecording(false);
        setProgress(0);
    };

    return {progress, startRecording, pauseRecording, resetRecording};
};

export default usePodcastRecording;
