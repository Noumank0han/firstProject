// FAQs Bottom Portion
function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    answer.classList.toggle('show');
}

function toggleImages(id) {
    const plusImg = document.getElementById(`plus-img-${id}`);
    const minusImg = document.getElementById(`minus-img-${id}`);

    plusImg.style.display = plusImg.style.display === 'none' ? 'inline' : 'none';
    minusImg.style.display = minusImg.style.display === 'none' ? 'inline' : 'none';
}

