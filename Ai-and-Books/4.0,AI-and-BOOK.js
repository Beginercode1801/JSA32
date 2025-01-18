function searchBooks() {
    const query = document.querySelector("#book-input").value.trim();
    const search_btn = document.querySelector("#get-book");
    const resultsContainer = document.querySelector("#book-result");
    resultsContainer.innerHTML = ''; // Clear previous results
  
    if (!query) {
      alert('Please enter a book title!');
      return;
    }
  
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.docs || data.docs.length === 0) {
          resultsContainer.innerHTML = '<p>No books found.</p>';
          return;
        }
  
        data.docs.slice(0, 10).forEach(book => {
          const title = book.title || 'No title available';
          const author = book.author_name ? book.author_name.join(', ') : 'Unknown author';
          const coverId = book.cover_i; // Cover image ID
  
          const coverUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
            : 'https://via.placeholder.com/150?text=No+Cover';
  
          resultsContainer.innerHTML += `
            <div class="book">
              <img src="${coverUrl}" alt="${title}" />
              <h3>${title}</h3>
              <p>${author}</p>
            </div>
          `;
        });
      })
      .catch(error => {
        console.error('Error:', error);
        resultsContainer.innerHTML = '<p>Error fetching books. Please try again later.</p>';
      });
  }