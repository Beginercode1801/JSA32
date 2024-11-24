function printNumberTriangle(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
          result += j;
      }
      result += "\n";
  }
  console.log(result);
}
printNumberTriangle(5);
function createSymmetricString(input) {
  const reversed = input.split('').reverse().join('');
  const symmetricString = input + reversed.slice(1);
  console.log(symmetricString);
}
createSymmetricString("abc");