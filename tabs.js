const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        contents.forEach(c => {
            if (c.getAttribute('data-tab-content') === target) {
                c.classList.remove('max-h-0', 'opacity-0', 'hidden');
                c.classList.add('opacity-100', 'glitch-pulse');
                setTimeout(() => {
                    c.classList.remove('glitch-pulse');
                }, 300);
            } else {
                c.classList.remove('opacity-100', 'glitch-pulse');
                c.classList.add('max-h-0', 'opacity-0', 'hidden');
            }
        });

        tabs.forEach(t => {
            t.classList.remove('terminal-blue');
            t.classList.remove('font-bold');
        });

        tab.classList.add('terminal-blue');
        tab.classList.add('font-bold');
    });
});
