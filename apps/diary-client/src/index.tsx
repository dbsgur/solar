import { createRoot } from 'react-dom/client';
import App from './app/App';
import React from 'react';

// Render your React component instead
const root = createRoot(document.getElementById('app')!);
root.render(<App/>);
