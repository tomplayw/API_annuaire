document.addEventListener('DOMContentLoaded', () => {
    const selectButtons = document.querySelectorAll('.select-button');

    selectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nom = button.dataset.nom;
            const prenom = button.dataset.prenom;
            const rpps = button.dataset.rpps;

            const selectedList = document.getElementById('selected-list');
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Nom:</strong> ${nom}<br>
                <strong>Prénom:</strong> ${prenom}<br>
                <strong>RPPS:</strong> ${rpps}
                <button class="remove-button" data-nom="${nom}" data-prenom="${prenom}" data-rpps="${rpps}">Supprimer</button>
            `;
            selectedList.appendChild(listItem);

            const selectedResults = document.getElementById('selected-results');
            selectedResults.style.display = 'block';
        });
    });

    const selectedList = document.getElementById('selected-list');

    selectedList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-button')) {
            const nom = event.target.dataset.nom;
            const prenom = event.target.dataset.prenom;
            const rpps = event.target.dataset.rpps;

            if (confirm(`Voulez-vous vraiment supprimer le médecin ${prenom} ${nom} (RPPS: ${rpps}) ?`)) {
                event.target.parentElement.remove();
            }
        }
    });

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', () => {
        selectedList.innerHTML = '';
        const selectedResults = document.getElementById('selected-results');
        selectedResults.style.display = 'none';
    });
});
