const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
        // hide all tab panels
        // console.log(tabPanels);
        tabPanels.forEach(panel => {
                panel.hidden = true;
        });
        // mark all tabs as unselected
        tabButtons.forEach(tab => {
                tab.setAttribute('aria-selected', false);
        });
        // mark clicked tab as selected
        event.currentTarget.setAttribute('aria-selected', true);
        // find the associated tab panel and show it
        const { id } = event.currentTarget;
        // const tabPanels = tabs.querySelector(`[aria-labelledby="${id}"]`);

        const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
        tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
