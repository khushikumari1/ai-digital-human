import React from 'react';
import Recorder from './components/Recorder';
import Response from './components/Response';

function App() {
    return (
        <div style={{ padding: 20 }}>
            <h2>AI Digital Human</h2>
            <Recorder />
            <Response />
        </div>
    );
}

export default App;