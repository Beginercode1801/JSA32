const NYT_API_URL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=UrM7qUevNG2aPfcqfs7LEWkPWQbxfEju";

    async function fetchBooks() {
      try {
        const response = await fetch(NYT_API_URL);
        const data = await response.json();

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results

        if (!data.results.books || data.results.books.length === 0) {
          resultsDiv.innerHTML = '<p>No books found!</p>';
          return;
        }

        data.results.books.forEach(book => {
          const bookElement = document.createElement('div');
          bookElement.className = 'book';

          bookElement.innerHTML = `
            <div class="book-info">
              <img src="${book.book_image}" alt="${book.title}" onerror="this.style.display='none'">
              <div>
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Description:</strong> ${book.description}</p>
                <p><strong>Rank:</strong> ${book.rank}</p>
                <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
              </div>
            </div>
          `;

          resultsDiv.appendChild(bookElement);
        });
      } catch (error) {
        console.error("Error fetching books:", error);
        document.getElementById('results').innerHTML = '<p>Error loading books. Please try again later.</p>';
      }
    }

    // Fetch books on page load
    fetchBooks();