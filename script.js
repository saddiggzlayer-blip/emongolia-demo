// Function to flip the card
function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

// Function to show/hide the editor panel
function toggleEditor() {
    const panel = document.getElementById('editor-panel');
    panel.classList.toggle('hidden');
}

// Function to update the ID
function updateID() {
    const name = document.getElementById('name-input').value;
    const bday = document.getElementById('date-input').value;
    const imgInput = document.getElementById('image-input');

    if (name) document.getElementById('display-name').innerText = name.toUpperCase();
    
    if (bday) {
        const formattedDate = bday.replace(/-/g, '.');
        document.getElementById('display-date').innerText = formattedDate;
    }

    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('id-photo').src = e.target.result;
        };
        reader.readAsDataURL(imgInput.files[0]);
    }

    // THIS COMMAND HIDES THE EDITOR AFTER SAVING
    toggleEditor();
    alert("Амжилттай хадгалагдлаа! (Saved!)");
}