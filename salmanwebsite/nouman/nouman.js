// FAQs Bottom Portion
function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    answer.classList.toggle('show');
}

function toggleImages() {
    const plusImg = document.getElementById('plus-img');
    const minusImg = document.getElementById('minus-img');

    plusImg.style.display = plusImg.style.display === 'none' ? 'inline' : 'none';
    minusImg.style.display = minusImg.style.display === 'none' ? 'inline' : 'none';
}

