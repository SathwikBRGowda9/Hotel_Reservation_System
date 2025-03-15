document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Capture form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log the captured data (replace this with your form submission logic)
    console.log(data);

    // Optionally, you can display a confirmation message
    alert('Reservation submitted successfully!');
    window.location.assign("details.html"); 

    // Reset the form
    event.target.reset();
});