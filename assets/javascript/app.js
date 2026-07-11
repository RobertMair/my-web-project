// Target the container in the DOM
const container = document.getElementById('architecture-card-container');
let cardsHTML = '';

// Fetch and render the data
async function loadCards() {
  try {
    // Fetch json data for the architecture cards.
    const response = await fetch('./assets/json/data.json'); 
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    renderCards(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    container.innerHTML = `<p>Failed to load items.</p>`;
  }
}

function renderCards(data) {
  // Read the nested arrays using flatMap or nested forEach
  data.forEach(categoryGroup => {
      console.log("****", categoryGroup.row);
      cardsHTML += `
      <div class="architecture-card-container ${categoryGroup.backgroundColor}">
      `;
      categoryGroup.card.forEach(card => {
          cardsHTML += `
          <div class="architecture-card">
            <img src="${card.img}" alt="${escapeHTML(card.title)}" class="architecture-card-image">
            <p class="font-sm red"><b>${escapeHTML(card.risk)}&nbsp</b></p>
            <p class="font-med">${escapeHTML(card.title)}</p>
            <p class="font-sm">${escapeHTML(card.address)}</p>
            <p class="font-sm">${escapeHTML(card.architect)}</p>
            <br>
              <p>${escapeHTML(card.description)}</p>
              <a href="${card.link}" target="_blank"><button class="home-page-button">More</button></a>
          </div>
      `;
      console.log(card.title);
      });

    cardsHTML += `</div>
      `;

    });
  // Render the generated cards
  cardcontainer.innerHTML = cardsHTML;
}

// Simple security helper to prevent XSS injection from untrusted JSON
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Initialize application
loadCards();