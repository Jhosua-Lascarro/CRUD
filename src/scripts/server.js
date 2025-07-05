// server.js - Servidor para lanzar la aplicación CRUD

import { spawn } from 'child_process';

// Iniciar JSON Server
spawn('npx', ['json-server', '--watch', 'src/database/data.json', '--port', '3000'], {
  stdio: 'ignore',
  shell: true
});

// Iniciar Vite
spawn('npx', ['vite'], {
  stdio: 'ignore',
  shell: true
});

console.log('Aplicación disponible en: http://localhost:5173');
