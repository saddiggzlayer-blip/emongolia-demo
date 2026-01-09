// Function to handle the Image Upload
document.getElementById('upload-btn').onchange = function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const dataURL = reader.result;
        document.getElementById('id-photo').src = dataURL;
        // This saves the picture to the browser!
        localStorage.setItem('saved-photo', dataURL);
    };
    reader.readAsDataURL(event.target.files[0]);
};

// Function to save Name and Birthday
function saveToMemory() {
    const name = document.getElementById('user-name').value;
    const bday = document.getElementById('user-birthday').value;

    // Save to browser storage
    localStorage.setItem('user-name', name);
    localStorage.setItem('user-birthday', bday);

    // Update the screen instantly
    document.getElementById('display-name').innerText = name;
    document.getElementById('display-date').innerText = bday;
    
    alert("Data saved successfully!");
}

// THIS PART IS KEY: It loads your data when you open the site
window.onload = function() {
    if(localStorage.getItem('user-name')) {
        document.getElementById('display-name').innerText = localStorage.getItem('user-name');
        document.getElementById('display-date').innerText = localStorage.getItem('user-birthday');
        document.getElementById('id-photo').src = localStorage.getItem('saved-photo');
    }
}