const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        contents.forEach(c => {
            c.classList.add('hidden');
            if (c.getAttribute('data-tab-content') === target) {
                c.classList.remove('hidden');
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
