import React, { useState } from 'react';

const Recorder = () => {
    const [audioURL, setAudioURL] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [chunks, setChunks] = useState([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.start();
        recorder.ondataavailable = e => setChunks(prev => [...prev, e.data]);
    };

    const stopRecording = () => {
        mediaRecorder.stop();
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/wav' });
            setAudioURL(URL.createObjectURL(blob));
            uploadAudio(blob);
        };
    };

    const uploadAudio = async (blob) => {
        const formData = new FormData();
        formData.append('file', blob);
        const response = await fetch('http://localhost:8000/process', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        localStorage.setItem('response', JSON.stringify(data));
        window.dispatchEvent(new Event('storage'));
    };

    return (
        <div>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop & Send</button>
            {audioURL && <audio controls src={audioURL}></audio>}
        </div>
    );
};

export default Recorder;