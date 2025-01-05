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

fetch("http://openlibrary.org/subjects/love.json")
  .then(response => response.json())
  .then(data => console.log(data))
  .then(data => displayLoveBook(data))
  .catch(error => console.error("Error fetching data:", error));

function displayLoveBook(data){
  const loveBook = document.getElementById("displayLoveBook")
  loveBook.innerHTML = `
  <h2>${data}</h2>
  `
}