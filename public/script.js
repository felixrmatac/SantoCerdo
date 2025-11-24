// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bg-dark': '#121212',
                'panel-bg': '#1e1e1e',
                'panel-border': '#333333',
                'neon-accent': '#FF0099',
                'gold-accent': '#FFD700',
                'tech-green': '#00ff9d',
                'text-main': '#e0e0e0',
                'text-muted': '#888888',
            },
            fontFamily: {
                'display': ['Anton', 'sans-serif'],
                'body': ['Roboto Mono', 'monospace'],
            }
        }
    }
};

// Common Scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Santo Cerdo System Loaded');
});
