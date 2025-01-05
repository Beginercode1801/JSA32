// Define the query
const query = "harry potter";

// Define the API URL
const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

// Fetch data from the Open Library API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // Check if there are any results
    if (data.docs && data.docs.length > 0) {
      // Extract the first book's details
      const firstBook = data.docs[0];
      console.log("Title:", firstBook.title);
      console.log("Author:", firstBook.author_name?.[0]); // Handle multiple authors
      console.log("First Published:", firstBook.first_publish_year);
    } else {
      console.log("No results found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
