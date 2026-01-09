// Function to flip the card
function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

// Function to update details and picture
function updateID() {
    const name = document.getElementById('name-input').value;
    const bday = document.getElementById('date-input').value;
    const imageInput = document.getElementById('image-input');

    // Update Text
    if (name) {
        document.getElementById('display-name').innerText = name.toUpperCase();
    }
    
    if (bday) {
        // Format the date to look like e-Mongolia (YYYY.MM.DD)
        const formattedDate = bday.replace(/-/g, '.');
        document.getElementById('display-date').innerText = formattedDate;
    }

    // Update Photo
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('id-photo').src = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    alert("Identity Card Updated!");
}