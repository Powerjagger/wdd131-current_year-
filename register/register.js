import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener('DOMContentLoaded', function() {
  let participantCount = 1;

  const addButton = document.getElementById('add');
  const form = document.querySelector('form');
  const summary = document.getElementById('summary');

  function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];
    return feeElements.reduce((total, elem) => total + Number(elem.value), 0);
  }

  addButton.addEventListener('click', function() {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const totalFee = totalFees();
    const adultName = form.querySelector('#adult_name').value;

    form.style.display = 'none';
    summary.style.display = 'block';
    summary.innerHTML = successTemplate({
      name: adultName,
      participantCount: participantCount,
      totalFees: totalFee
    });
  });
});
