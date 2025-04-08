import React, { useEffect, useState } from 'react';

const Response = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const handleStorage = () => {
            const res = localStorage.getItem('response');
            if (res) setData(JSON.parse(res));
        };
        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, []);

    return (
        <div style={{ marginTop: 20 }}>
            {data && (
                <div>
                    <p><strong>Transcript:</strong> {data.transcript}</p>
                    <p><strong>AI Reply:</strong> {data.reply}</p>
                    <p><strong>Detected Emotion:</strong> {data.emotion}</p>
                </div>
            )}
        </div>
    );
};

export default Response