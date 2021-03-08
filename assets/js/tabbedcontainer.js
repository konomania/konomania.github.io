function switchTab(tabId) {
    for (let container of tabContainers) {
        if (container.childElementCount <= 0) return;

        // tabs
        let tabs = container.children[0].children[0];
        for (let tab of tabs.children) {
            if (!tab.classList.contains('tab-item') || !tab.hasAttribute('data-id')) return;

            if (tab.getAttribute('data-id') === tabId) {
                tab.classList.add('active');
            }
            else if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            }
        }

        // tab content
        let tabContents = container.children[1];
        for (let content of tabContents.children) {
            if (!content.classList.contains('tab-content')) return;

            if (content.id === tabId) {
                content.classList.add('active');
            }
            else if (content.classList.contains('active')) {
                content.classList.remove('active');
            }
        }
    }
}

const tabContainers = document.getElementsByClassName('tabbed-container');
switchTab('all') // set default tab