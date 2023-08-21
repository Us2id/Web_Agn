document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            tabContents.forEach(content => content.classList.remove('active'));
            const contentId = tab.id.replace('-tab', '-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
});