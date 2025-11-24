// Santo Cerdo TOC Component
// Industrial Chic / Glassmorphism Style

const TOC_STYLES = `
    #sc-toc-toggle {
        position: fixed;
        top: 120px; /* Below the main nav */
        left: 0;
        z-index: 1000;
        width: 40px;
        height: 50px;
        background: rgba(18, 18, 18, 0.9);
        border: 1px solid #FF0099;
        border-left: none;
        color: #FF0099;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        backdrop-filter: blur(5px);
        transition: all 0.3s ease;
        box-shadow: 0 0 10px rgba(255, 0, 153, 0.2);
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    #sc-toc-toggle:hover {
        background: #FF0099;
        color: #000;
        width: 50px;
        box-shadow: 0 0 20px rgba(255, 0, 153, 0.6);
    }

    #sc-toc-toggle.hidden {
        transform: translateX(-100%);
        opacity: 0;
        pointer-events: none;
    }

    #sc-toc-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        max-width: 85vw; /* Responsive width */
        height: 100vh;
        background: rgba(10, 10, 10, 0.98);
        border-right: 1px solid #333;
        z-index: 999;
        transform: translateX(-100%);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        padding: 80px 20px 20px 20px; /* Top padding for close button space */
        overflow-y: auto;
        backdrop-filter: blur(10px);
    }

    @media (max-width: 768px) {
        #sc-toc-toggle {
            top: auto;
            bottom: 20px; /* Move to bottom on mobile for easier reach */
            left: 20px;
            border-radius: 50%; /* Circular button on mobile */
            width: 50px;
            height: 50px;
            border: 1px solid #FF0099;
            box-shadow: 0 0 15px rgba(255, 0, 153, 0.4);
        }
        
        #sc-toc-toggle:hover {
            width: 50px; /* Keep circular */
        }
    }

    #sc-toc-sidebar.open {
        transform: translateX(0);
        box-shadow: 10px 0 50px rgba(0,0,0,0.8);
    }

    #sc-toc-sidebar h3 {
        font-family: 'Anton', sans-serif;
        color: #FFD700;
        text-transform: uppercase;
        margin-bottom: 20px;
        font-size: 1.5rem;
        border-bottom: 1px solid #333;
        padding-bottom: 10px;
        letter-spacing: 1px;
    }

    .sc-toc-link {
        display: block;
        padding: 12px 15px;
        color: #888;
        text-decoration: none;
        font-family: 'Roboto Mono', monospace;
        font-size: 0.85rem;
        border-left: 2px solid transparent;
        transition: all 0.2s;
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .sc-toc-link:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
        border-left-color: #FF0099;
        padding-left: 20px;
    }
    
    .sc-toc-link.active {
        color: #fff;
        border-left-color: #FFD700;
        background: rgba(255, 215, 0, 0.05);
    }

    .sc-toc-sub {
        margin-left: 15px;
        font-size: 0.8rem;
        opacity: 0.8;
        border-left: 1px solid #333;
    }
    
    /* Scrollbar Styling */
    #sc-toc-sidebar::-webkit-scrollbar {
        width: 6px;
    }
    #sc-toc-sidebar::-webkit-scrollbar-track {
        background: #121212; 
    }
    #sc-toc-sidebar::-webkit-scrollbar-thumb {
        background: #333; 
    }
    #sc-toc-sidebar::-webkit-scrollbar-thumb:hover {
        background: #FF0099; 
    }
`;

class SantoTOC {
    constructor(config = {}) {
        this.contentSelector = config.contentSelector || 'body';
        this.headerSelector = config.headerSelector || 'h1, h2, h3';
        this.title = config.title || 'ÍNDICE';
        this.init();
    }

    init() {
        this.injectStyles();
        this.createElements();
        this.scanHeaders();
        this.addEventListeners();
    }

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = TOC_STYLES;
        document.head.appendChild(style);
    }

    createElements() {
        // Toggle Button
        this.toggleBtn = document.createElement('div');
        this.toggleBtn.id = 'sc-toc-toggle';
        this.toggleBtn.innerHTML = '<i class="fas fa-list-ul"></i>';
        this.toggleBtn.title = "Abrir Índice";
        document.body.appendChild(this.toggleBtn);

        // Sidebar
        this.sidebar = document.createElement('div');
        this.sidebar.id = 'sc-toc-sidebar';
        
        // Close Button inside Sidebar
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            color: #FF0099;
            cursor: pointer;
            font-size: 1.2rem;
            padding: 5px;
        `;
        closeBtn.onclick = () => this.sidebar.classList.remove('open');
        
        this.sidebar.appendChild(closeBtn);
        this.sidebar.insertAdjacentHTML('beforeend', `<h3>${this.title}</h3><div id="sc-toc-list"></div>`);
        
        document.body.appendChild(this.sidebar);
    }

    scanHeaders() {
        const container = document.querySelector(this.contentSelector);
        if (!container) return;

        const headers = container.querySelectorAll(this.headerSelector);
        const list = document.getElementById('sc-toc-list');
        // Keep the close button and title, clear only the list part if needed, 
        // but since we append to sc-toc-list, we just clear that.
        list.innerHTML = '';

        headers.forEach((header, index) => {
            // Ensure header has ID
            if (!header.id) {
                header.id = 'sc-section-' + index;
            }

            const link = document.createElement('a');
            link.href = '#' + header.id;
            link.className = 'sc-toc-link';
            
            // Clean text
            let text = header.textContent;
            if (text.length > 35) text = text.substring(0, 35) + '...';
            
            link.textContent = text;
            
            if (header.tagName === 'H3' || header.tagName === 'H4') {
                 link.classList.add('sc-toc-sub');
            }

            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Removed: this.sidebar.classList.remove('open'); // Keep open
                
                const target = document.getElementById(header.id);
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Highlight Effect
                this.highlightHeader(target);
            });

            list.appendChild(link);
        });
    }

    highlightHeader(element) {
        // Remove existing highlights
        document.querySelectorAll('.sc-highlight-pulse').forEach(el => {
            el.classList.remove('sc-highlight-pulse');
            el.style.color = ''; // Reset inline style if any
        });

        // Add highlight class
        element.classList.add('sc-highlight-pulse');
        
        // Add temporary inline style for immediate feedback if class is not enough
        const originalColor = element.style.color;
        element.style.transition = 'all 0.5s ease';
        element.style.color = '#FF0099';
        element.style.textShadow = '0 0 10px rgba(255, 0, 153, 0.8)';
        
        setTimeout(() => {
            element.style.color = originalColor;
            element.style.textShadow = 'none';
            element.classList.remove('sc-highlight-pulse');
        }, 2000);
    }

    addEventListeners() {
        this.toggleBtn.addEventListener('click', () => {
            this.sidebar.classList.add('open');
            this.toggleBtn.classList.add('hidden');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.sidebar.contains(e.target) && !this.toggleBtn.contains(e.target) && this.sidebar.classList.contains('open')) {
                this.sidebar.classList.remove('open');
                this.toggleBtn.classList.remove('hidden');
            }
        });
        
        // Close button logic (re-attach if needed or handle via delegation, but simpler here)
        // The close button inside createElements needs to handle the toggle visibility too
        const closeBtn = this.sidebar.querySelector('.fa-times').parentElement;
        closeBtn.onclick = () => {
            this.sidebar.classList.remove('open');
            this.toggleBtn.classList.remove('hidden');
        };
    }
}

// Expose to window
window.SantoTOC = SantoTOC;
