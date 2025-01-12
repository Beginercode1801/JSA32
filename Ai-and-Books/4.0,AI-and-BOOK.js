const apiKey = "5045391bc8391c9f1251809a086e89e3";
const bookResult = document.getElementById("book-result");

document.getElementById("get-book").addEventListener("click", () => {
    const city = document.getElementById("book-input").value;
    if (book) {
        getWeatherByCity(book);
    } else {
        alert("Nhập tên sách");
    }
});

function getBookByBook(book) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(() => alert("Không tìm thấy sách"));
}


function displayWeather(data) {
    if (data.cod === 200) {
        bookResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Tên Sách: ${data.main.temp}</p>
            <p>Tên tác giả: ${data.weather[0].description}</p>
        `;
    } else {
        weatherResult.innerHTML = `<p>${data.message}</p>`;
    }
}
