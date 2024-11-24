// let a = 1;
// let b = 1;
// let c = 1;
// if (a > b && a > c){
//     alert("Ban a cao nhat")
// }
// else if (b > a && b > c){
//     alert("Ban b cao nhat")
// }
// else if (c > a && c > b) {
//     alert("Ban c cao nhat")
// }
// else if ( a == b && a > c){
//     alert("Ban a va ban b cao nhat")
// }
// else if ( a == c && a > b){
//     alert("Ban a va ban c cao nhat")
// }
// else if ( c == b && c > a){
//     alert("Ban b va ban c cao nhat")
// }
// else {
//     alert("Ban a, b, c bang nhau")
// }

// let score = 11;
// if (10 >= score && score > 8.5){
//     console.log("Diem A")
// }
// else if (8.5 >= score && score > 7){
//     console.log("Diem B")
// }
// else if (7 >= score && score > 5.5){
//     console.log("Diem C")
// }
// else if (5.5 >= score && score > 4){
//     console.log("Diem D")
// }
// else if (score > 10) {
//     console.log("Ko co")
// }
// else if (0 > score) {
//     console.log("Ko co")
// }
// else {
//     console.log("Diem F")
// }

// for (let i=1; i <= 100; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

document.getElementById('test').addEventListener("submit", function(event) {
    event.preventDefault(); // ngăn không cho trang web tải lại sau khi submit

    const input = Number(document.getElementById('input').value.trim());

    for (let i = 0; i <= input; i++){
        if (i % 2 == 0){
            console.log(i + " la so chan");
        }
        else if (i % 2 == 1){
            console.log(i + " la so le");
        }
    }
})
