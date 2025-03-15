document.addEventListener("DOMContentLoaded", function () {
    // Sample data for reservation
    const reservationData = {
        roomDetails: {
            roomType: "Deluxe Suite",
            checkIn: "2024-08-15",
            checkOut: "2024-08-20",
            guests: 2,
            reservationNumber: "ABC12345"
        },
        foodDetails: {
            mealPlan: "Breakfast Included",
            dietaryRequests: "Vegetarian",
            preOrderedMeals: {
                breakfast: "Pancakes",
                lunch: "Caesar Salad",
                dinner: "Grilled Salmon"
            }
        },
        additionalInfo: {
            totalAmount: "$500",
            paymentMethod: "Credit Card",
            cancellationPolicy: "Free cancellation up to 24 hours before check-in."
        }
    };

    // Populate room details
    const roomDetailsList = document.getElementById('roomDetails');
    for (const [key, value] of Object.entries(reservationData.roomDetails)) {
        const li = document.createElement('li');
        li.textContent = `${key.replace(/([A-Z])/g, ' $1')}: ${value}`;
        roomDetailsList.appendChild(li);
    }

    // Populate food details
    const foodDetailsList = document.getElementById('foodDetails');
    for (const [key, value] of Object.entries(reservationData.foodDetails)) {
        if (typeof value === 'object') {
            for (const [subKey, subValue] of Object.entries(value)) {
                const li = document.createElement('li');
                li.textContent = `${subKey.replace(/([A-Z])/g, ' $1')}: ${subValue}`;
                foodDetailsList.appendChild(li);
            }
        } else {
            const li = document.createElement('li');
            li.textContent = `${key.replace(/([A-Z])/g, ' $1')}: ${value}`;
            foodDetailsList.appendChild(li);
        }
    }

    // Populate additional information
    const additionalInfoList = document.getElementById('additionalInfo');
    for (const [key, value] of Object.entries(reservationData.additionalInfo)) {
        const li = document.createElement('li');
        li.textContent = `${key.replace(/([A-Z])/g, ' $1')}: ${value}`;
        additionalInfoList.appendChild(li);
    }

    // Edit reservation button action
    document.getElementById('editReservation').addEventListener('click', function () {
        alert('Redirecting to the reservation editing page...');
        // You can add your redirection logic here
    });
});
