const weight = prompt("Enter your weight in kg");
const height = prompt("Enter your height in meter");

if (weight && height) {
  const mbi = Math.round(Number(weight) / Number(height ** 2));
  if (mbi < 18.5) {
    alert("Under weight!");
  } else if (mbi >= 18.5 && mbi <= 24.9) {
    alert("Normal");
  } else if (mbi >= 25 && mbi <= 29.9) {
    alert("Over weight!");
  } else if (mbi >= 30) {
    alert("Extreme obesity!");
  } else if (weight !== Number && height !== Number) {
    alert(" You didn't enter your weight and height correctly");
  }

  console.log(weight, height, mbi);
} else {
  alert("You didn't enter anything. please try again");
}
