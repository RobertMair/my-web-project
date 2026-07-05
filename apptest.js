const container = document.getElementById('card-container');
        let cardsHTML = '';

        // Fetch and render the data
        async function loadCards() {
            try {
                // Replace with your API endpoint or local path (e.g., 'data.json')
                const response = await fetch('../datatest.json');
                console.log("hello world");
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
                console.log("****", categoryGroup.category);
                cardsHTML += `<small>Category: ${categoryGroup.category}</small>`;

                categoryGroup.items.forEach(card => {
                    cardsHTML += `
      <div class="card">
        <h3>${escapeHTML(card.title)}</h3>
        <p>${escapeHTML(card.desc)}</p>
        <small>Category: ${escapeHTML(categoryGroup.category)}</small>
      </div>
    `;
                    console.log(card.title);
                });
            });


            // Render the generated cards
            container.innerHTML = cardsHTML;
        }

        // Simple security helper to prevent XSS injection from untrusted JSON
        function escapeHTML(str) {
            return str.replace(/[&<>'"]/g,
                tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
            );
        }


        // Call the function to load and render cards
        loadCards();