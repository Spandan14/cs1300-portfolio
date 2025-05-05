const tabs = document.querySelectorAll('[data-tab]');
const contents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        contents.forEach(c => {
            if (c.getAttribute('data-tab-content') === target) {
                c.classList.remove('max-h-0', 'opacity-0', 'hidden', 'max-w-0');
                c.classList.add('opacity-00', 'glitch-pulse');
                setTimeout(() => {
                    c.classList.remove('glitch-pulse');
                }, 300);
            } else {
                c.classList.remove('opacity-00', 'glitch-pulse');
                c.classList.add('max-h-0', 'opacity-0', 'hidden', 'max-w-0');
            }
        });

        tabs.forEach(t => {
            t.classList.remove('terminal-blue');
            t.classList.remove('font-bold');
            t.classList.remove('selected-tab');
        });

        tab.classList.add('terminal-blue');
        tab.classList.add('font-bold');
        tab.classList.add('selected-tab');
    });
});

const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

leftArrow.addEventListener('click', () => {
    const currentTab = document.querySelector('.selected-tab');
    const currentIndex = Array.from(tabs).indexOf(currentTab);
    const nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    tabs[nextIndex].click();
});

rightArrow.addEventListener('click', () => {
    const currentTab = document.querySelector('.selected-tab');
    const currentIndex = Array.from(tabs).indexOf(currentTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    tabs[nextIndex].click();
});

const dropdown = document.getElementById('tab-select');

dropdown.addEventListener('change', () => {
    const selectedTab = dropdown.value;
    tabs.forEach(tab => {
        if (tab.getAttribute('data-tab') === selectedTab) {
            tab.click();
        }
    });
});

