
document.addEventListener('DOMContentLoaded', () => {
    const cardData = JSON.parse(localStorage.getItem('cardData'));


        document.getElementById('details-image').src = `images/${cardData.images}.jpg`;
        document.getElementById('details-title').textContent = cardData.tittle;
        document.getElementById('details-time').textContent = `${cardData.date} | ${cardData.ago_read}min read`;
      
    
});
