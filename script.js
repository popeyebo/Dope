document.getElementById('messageForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message }),
        });
        
        if (response.ok) {
            document.getElementById('successPopup').classList.add('active');
            document.getElementById('messageForm').reset();
        } else {
            alert('Error submitting form');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit form');
    }
});

function closePopup() {
    document.getElementById('successPopup').classList.remove('active');
}