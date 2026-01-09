// Function to flip the card when clicked
function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

// Function to open/close the editing menu
function toggleEditor() {
    const panel = document.getElementById('editor-panel');
    panel.classList.toggle('hidden');
}

// Function to process user input and update the card
function updateID() {
    // 1. Get all input values
    const fname = document.getElementById('fname-input').value;
    const sname = document.getElementById('sname-input').value;
    const gname = document.getElementById('name-input').value;
    const sex = document.getElementById('sex-input').value;
    const bday = document.getElementById('date-input').value;
    const idnum = document.getElementById('id-num-input').value;
    const issue = document.getElementById('issue-input').value;
    const expiry = document.getElementById('expiry-input').value;
    const imgInput = document.getElementById('image-input');

    // 2. Update Text on Card
    if(fname) document.getElementById('display-fname').innerText = fname.toUpperCase();
    if(sname) document.getElementById('display-sname').innerText = sname;
    if(gname) document.getElementById('display-name').innerText = gname.toUpperCase();
    if(sex) document.getElementById('display-sex').innerText = sex;
    if(idnum) document.getElementById('display-id-num').innerText = idnum;
    
    // 3. Format and update dates
    if(bday) document.getElementById('display-date').innerText = bday;
    if(issue) document.getElementById('display-issue').innerText = issue.replace(/-/g, '/');
    if(expiry) document.getElementById('display-expiry').innerText = expiry.replace(/-/g, '/');

    // 4. Update Photo
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) { 
            document.getElementById('id-photo').src = e.target.result; 
        };
        reader.readAsDataURL(imgInput.files[0]);
    }

    // 5. Hide panel and alert success
    toggleEditor();
    alert("Мэдээлэл шинэчлэгдлээ! (Identity Updated)");
}