// Ensure jQuery is loaded before this script

$(document).ready(function () {
    var stripe = Stripe('YOUR_PUBLIC_STRIPE_KEY');
    var elements = stripe.elements();
  
    var card = elements.create('card', {
      style: {
        base: {
          iconColor: '#666EE8',
          color: '#31325F',
          lineHeight: '40px',
          fontWeight: 300,
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSize: '15px',
  
          '::placeholder': {
            color: '#CFD7E0',
          },
        },
      },
    });
  
    card.mount('#card-number');
  
    card.addEventListener('change', function (event) {
      var displayError = document.getElementById('card-error');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });
  
    $('#card-btn').on('click', function () {
      stripe.createToken(card).then(function (result) {
        if (result.error) {
          var errorElement = document.getElementById('card-error');
          errorElement.textContent = result.error.message;
        } else {
          var tokenInput = document.getElementById('card-token');
          tokenInput.value = result.token.id; // Store the token for backend processing
          // Optionally, you can submit the form here
          $('#your-form-id').submit();
        }
      });
    });
  });
  