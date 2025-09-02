import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#6c757d',
        accent: '#ed6c02',
        background: '#f8f9fa',
        textcolor: '#212529',
        border: '#dee2e6',
        footer: '#343a40',
        footerText: '#adb5bd',
        footerLink: '#ffffff',
        footerLinkHover: '#e9ecef',
        footerLinkActive: '#007bff',
        footerLinkActiveHover: '#0056b3',
      },
    },
  },
});
