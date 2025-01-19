function searchBooks() {
  const query = document.querySelector("#book-input").value.trim();
  const resultsContainer = document.querySelector("#book-result");
  resultsContainer.innerHTML = '';

  if (!query) {
    alert('Please enter a book title!');
    return;
  }

  fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => {
      const books = data.docs?.slice(0, 10) || [];
      if (books.length === 0) {
        resultsContainer.innerHTML = '<p>No books found.</p>';
        return;
      }

      books.forEach(book => {
        const title = book.title || 'No title available';
        const author = book.author_name?.join(', ') || 'Unknown author';
        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
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
    .catch(() => {
      resultsContainer.innerHTML = '<p>Error fetching books. Please try again later.</p>';
    });
}
