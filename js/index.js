const a = document.getElementById("input");
const b = document.getElementById("konversi");
const c = document.getElementById("fahrenheit");
const d = document.getElementById("reverse");
const rumusElement = document.getElementById('rumusElement');

b.addEventListener('click', () => {
  const inputValue = Math.round(a.value * 1.8 + 32);
  c.value = inputValue;
  rumusElement.value = "(" + a.value + "°C * 9/5) + 32 = " + inputValue + "°F";
});

d.addEventListener('click', () => {
  const value2 = Math.round((c.value - 32) * 5 / 9);
 a.value =  value2; 
  rumusElement.value = "(" + c.value + "°F - 32) * 5/9 = " + value2 + "°C";
});

function hapus() {
  a.value = '';
  c.value = '';
  rumusElement.value = 'cara kalkulasi';
}
