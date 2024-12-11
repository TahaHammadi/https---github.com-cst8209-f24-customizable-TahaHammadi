function setTheme(theme) {
    const body = document.body;
    body.style = theme === 'light' ? 'color: #333; background-color: white;' :
        theme === 'dark' ? 'color: white; background-color: #6a6a6a;' :
            'color: antiquewhite; background-color: salmon;';
}

function updateTitle(newText) {
    if (newText.trim()) document.getElementById('title').textContent = newText;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lightButton').addEventListener('click', () => setTheme('light'));
    document.getElementById('darkButton').addEventListener('click', () => setTheme('dark'));
    document.getElementById('salmonButton').addEventListener('click', () => setTheme('salmon'));
    document.getElementById('updateTitleButton').addEventListener('click', () => {
        const newText = prompt('Enter new title text:');
        if (newText) updateTitle(newText);
    });
});
