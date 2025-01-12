// const query1 = "Control_Your_Mind_and_Master_Your_Feelings";
// const apiUrl1 = `https://openlibrary.org/search.json?q=${encodeURIComponent(query1)}`;

// fetch(apiUrl1)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     if (data.docs && data.docs.length > 0) {
//       const firstBook = data.docs[0];
//       console.log("Title:", firstBook.title);
//       console.log("Author:", firstBook.author_name?.[0]);
//       console.log("First Published:", firstBook.first_publish_year);
//     } else {
//       console.log("No results found.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// fetch("http://openlibrary.org/subjects/love.json")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(data => displayLoveBook(data))
//   .catch(error => console.error("Error fetching data:", error));

// function displayLoveBook(data){
//   const loveBook = document.getElementById("displayLoveBook")
//   loveBook.innerHTML = `
//   <h2>${data}</h2>
//   `
// }

function searchBooks() {
  const query = document.getElementById('searchInput').value.trim();
  const resultsContainer = document.getElementById('results');
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