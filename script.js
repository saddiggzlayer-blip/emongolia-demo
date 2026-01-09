function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

function toggleEditor() {
    document.getElementById('editor-panel').classList.toggle('hidden');
}

function updateID() {
    // 1. Get input values
    const fname = document.getElementById('fname-input').value;
    const sname = document.getElementById('sname-input').value;
    const gname = document.getElementById('name-input').value;
    const sex = document.getElementById('sex-input').value;
    const bday = document.getElementById('date-input').value;
    const idnum = document.getElementById('id-num-input').value;
    const issue = document.getElementById('issue-input').value;
    const expiry = document.getElementById('expiry-input').value;
    const imgInput = document.getElementById('image-input');

    // 2. Update Card Data (Use .toUpperCase() for realism)
    if(fname) document.getElementById('display-fname').innerText = fname.toUpperCase();
    if(sname) document.getElementById('display-sname').innerText = sname.toUpperCase();
    if(gname) document.getElementById('display-name').innerText = gname.toUpperCase();
    if(sex) document.getElementById('display-sex').innerText = sex;
    if(idnum) document.getElementById('display-id-num').innerText = idnum.toUpperCase();
    
    // Formatting dates
    if(bday) document.getElementById('display-date').innerText = bday.replace(/-/g, '.');
    if(issue) document.getElementById('display-issue').innerText = issue.replace(/-/g, '/');
    if(expiry) document.getElementById('display-expiry').innerText = expiry.replace(/-/g, '/');

    // 3. Update Profile Picture
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('id-photo').src = e.target.result;
        };
        reader.readAsDataURL(imgInput.files[0]);
    }

    // 4. Save and Close
    toggleEditor();
    alert("Амжилттай хадгалагдлаа!");
}