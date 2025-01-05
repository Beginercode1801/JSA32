const query = "harry potter";
const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    if (data.docs && data.docs.length > 0) {
      const firstBook = data.docs[0];
      console.log("Title:", firstBook.title);
      console.log("Author:", firstBook.author_name?.[0]);
      console.log("First Published:", firstBook.first_publish_year);
    } else {
      console.log("No results found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
