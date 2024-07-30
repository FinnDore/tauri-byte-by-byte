import { convertFileSrc } from '@tauri-apps/api/core';
import { useState } from 'react';
import './App.css';

const src = convertFileSrc(
    '/Users/finn/Documents/GitHub/tauri-byte-by-byte/public/media.mp4'
);

function App() {
    const [imageCount, setImageCount] = useState(10);

    return (
        <>
            <input
                type="number"
                value={imageCount}
                onChange={(e) => setImageCount(Number(e.target.value))}
            />
            <div className="container">
                {Array.from({ length: imageCount }, (_, i) => i + 1)
                    .map(() => src)
                    .map((src, i) => (
                        <video key={i} src={src} controls autoPlay />
                    ))}
            </div>
        </>
    );
}

export default App;
