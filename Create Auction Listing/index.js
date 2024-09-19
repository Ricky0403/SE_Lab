document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('auctionForm');
    const modal = document.getElementById('resultModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalButton = document.getElementById('closeModal');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productImage = document.getElementById('productImage').files[0];
        const auctionDuration = document.getElementById('auctionDuration').value;
        const basePrice = document.getElementById('basePrice').value;

        // Simulate auction creation (in a real application, this would be an API call)
        setTimeout(() => {
            // Simulate successful creation
            const success = Math.random() < 0.8; // 80% success rate for demonstration

            if (success) {
                showModal('Auction Created Successfully', `Your auction for "${productName}" 
                    has been created with a base price of $${basePrice} and duration of ${auctionDuration} hours.`);
                form.reset();
            } else {
                showModal('Auction Creation Failed', 'An error occurred while creating the auction. Please try again.');
            }
        }, 1000);
    });

    function showModal(title, message) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modal.classList.remove('hidden');
    }

    closeModalButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });
});