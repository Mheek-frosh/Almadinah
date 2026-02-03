import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Failed to find the root element with id "root"');
  }

  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log('Al-madinah App: Mounting initiated...');
} catch (error) {
  console.error('Al-madinah App: Fatal Error during mounting:', error);
  if (document.body) {
    document.body.innerHTML = `
      <div style="padding: 40px; font-family: sans-serif; background: #fff1f2; color: #991b1b; min-height: 100vh;">
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Failed to Load Website</h1>
        <p style="margin-bottom: 2rem;">A critical error occurred while starting the application.</p>
        <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #fecaca; font-family: monospace; white-space: pre-wrap;">
          ${error.stack || error.message}
        </div>
        <p style="margin-top: 2rem; font-size: 0.875rem; color: #7f1d1d;">Please ensure all dependencies are installed and the dev server is running.</p>
      </div>
    `;
  }
}
