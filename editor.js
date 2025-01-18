// Display the uploaded image
document.getElementById('imageUpload').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = ''; // Clear preview if no file is selected
    }
});


// Handle form submission
document.getElementById('editorForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    const contentText = document.getElementById('contentText').value;

    if (file && contentText) {
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log('Image Data:', e.target.result);
            console.log('Content:', contentText);

            alert('Content submitted successfully!');
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload an image and write some content.');
    }
});

