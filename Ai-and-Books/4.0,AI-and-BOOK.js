const apiKey = "AIzaSyA3mGqsbQxJbVtUPIwc5O1eYkMcDn3dFug";
const query = "harry potter";
const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Display first book result
    if (data.items && data.items.length > 0) {
      const book = data.items[0];
      console.log("Title:", book.volumeInfo.title);
      console.log("Authors:", book.volumeInfo.authors);
      console.log("Publisher:", book.volumeInfo.publisher);
    } else {
      console.log("No books found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });