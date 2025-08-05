// document.addEventListener("DOMContentLoaded", function () {
//   hitung();
// });

let selectedOperator = null;
const btnc = document.getElementById("btnc");

function selectOperator(op) {
  selectedOperator = op;

  const buttons = document.querySelectorAll(".operator-button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  const clickedButton = Array.from(buttons).find(
    (btn) => btn.textContent === op
  );
  if (clickedButton) {
    clickedButton.classList.add("selected");
  }
}

btnc.addEventListener("click", calculate);

function calculate() {
  const num1 = document.getElementById("fnumber");
  const num2 = document.getElementById("snumber");
  const angka1 = parseFloat(num1.value);
  const angka2 = parseFloat(num2.value);
  let result;

  if (num1.value.trim() === "" || num2.value.trim() === "") {
    alert("silakan isikan kedua angka dengan benar");
    return;
  }

  if (!selectedOperator) {
    result = "tolong pilih operasinya!!";
  } else {
    switch (selectedOperator) {
      case "+":
        result = angka1 + angka2;
        break;
      case "-":
        result = angka1 - angka2;
        break;
      case "*":
        result = angka1 * angka2;
        break;
      case "/":
        result = angka2 !== 0 ? angka1 / angka2 : "masukan angka yang benar";
        break;
      default:
        result = "tidak tahu operator";
    }
  }
  document.getElementById("result2").textContent = `Result: ${result}`;
}

let countdownInterval;
let totalSeconds = 0;
let initialSeconds = 0;

function formatTime(m, s) {
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateDisplay() {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  document.getElementById("timerDisplay").textContent = formatTime(mins, secs);
}

function startTimer() {
  if (!countdownInterval && totalSeconds <= 0) {
    const minutes =
      parseInt(document.getElementById("minutesInput").value) || 0;
    const seconds =
      parseInt(document.getElementById("secondsInput").value) || 0;
    totalSeconds = minutes * 60 + seconds;
    initialSeconds = totalSeconds;
  }

  if (totalSeconds <= 0) {
    document.getElementById("timerDisplay").textContent =
      "Please enter time > 0";
    return;
  }

  if (!countdownInterval) {
    countdownInterval = setInterval(() => {
      totalSeconds--;
      updateDisplay();

      if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
        document.getElementById("timerDisplay").textContent = "⏰ Time's up!";
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}

function restartTimer() {
  clearInterval(countdownInterval);
  totalSeconds = initialSeconds;
  countdownInterval = null;
  updateDisplay();
}

class BankAccount {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ${amount}`;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `Withdrew ${amount}`;
    } else {
      return "Insufficient funds";
    }
  }

  getBalance() {
    return this.balance;
  }
}
let acc;
function createAccount() {
  const owner = document.getElementById("owner").value.trim();
  if (owner) {
    acc = new BankAccount(owner);
    document.getElementById("account-section").style.display = "block";
    document.getElementById(
      "message"
    ).textContent = `Account created for ${owner}`;
  }
}

function deposit() {
  const amount = parseFloat(document.getElementById("depositAmount").value);
  if (!isNaN(amount)) {
    const msg = acc.deposit(amount);
    document.getElementById("message").textContent = msg;
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("withdrawAmount").value);
  if (!isNaN(amount)) {
    const msg = acc.withdraw(amount);
    document.getElementById("message").textContent = msg;
  }
}

function checkBalance() {
  const msg = `Current balance: ${acc.getBalance()}`;
  document.getElementById("message").textContent = msg;
}

//3level

const contact = {};
function addContact() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();

  if (name && number) {
    contact[name.toLowerCase()] = number;
    alert(`save: ${name} = ${number}`);
  }
}

function searchContact() {
  const searchname = document
    .getElementById("searchName")
    .value.trim()
    .toLowerCase();
  const result = contact[searchname];
  document.getElementById("result").innerText = result
    ? `found ${searchname} = ${result}`
    : "NotFound";
}

function removeDuplicates() {
  const input = document.getElementById("duplicate-input").value;
  const output = document.getElementById("duplicate-output");

  // Pisahkan berdasarkan koma, lalu hapus spasi dan duplikat
  let words = input
    .split(/[,\s;]+/)
    .map((w) => w.trim().toLowerCase()) // ubah ke huruf kecil agar "Apel" dan "apel" dianggap sama
    .filter((w) => w !== "");

  let uniqueWords = [...new Set(words)];

  output.textContent = "Hasil: " + uniqueWords.join(", ");
}

function hitungGrade() {
  const input = document.getElementById("scores").value;
  const output = document.getElementById("output-grade");

  const angka = input
    .split(";")
    .map((e) => parseFloat(e.trim().replace(",", ".")))
    .filter((e) => !isNaN(e));

  if (angka.length === 0) {
    output.textContent = "Tidak ada skor yang valid";
    return;
  }

  const total = angka.reduce((a, b) => a + b, 0);
  const average = total / angka.length;

  let grade = "";
  if (average >= 90) grade = "A";
  else if (average >= 80 || average < 90) grade = "B";
  else if (average >= 70 || average < 80) grade = "C";
  else if (average >= 60 || average < 70) grade = "D";
  else grade = "F";

  output.textContent = `Rata-rata: ${average.toFixed(2)}\n` + `Grade: ${grade}`;
}

const input = document.getElementById("word-input");
const buttonw = document.getElementById("word-button");
const output = document.getElementById("word-output");

buttonw.addEventListener("click", countWordFrequency);
function countWordFrequency() {
  const kalimat = input.value.toLowerCase();
  const words = kalimat.match(/\b\w+\b/g);

  const freq = {};

  if (words) {
    for (let word of words) {
      freq[word] = (freq[word] || 0) + 1;
    }
  }
  let result = "";
  for (let word in freq) {
    if (freq[word] > 1) {
      result += `${word} = ${freq[word]}\n`;
    }
  }
  output.textContent = result || "Tidak ada kata yang bisa dihitung.";
}

const numberInput = document.getElementById("simple-sort");
const btnss = document.getElementById("btnss");
const outputss = document.getElementById("output-simple-sort");

// Saat tekan Enter
numberInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    simpleSort();
  }
});

// Saat klik tombol
btnss.addEventListener("click", simpleSort);

function simpleSort() {
  // Ambil value, pisah jadi array angka
  let input = numberInput.value
    .split(",")
    .map((e) => parseInt(e.trim()))
    .filter((e) => !isNaN(e));

  let n = input.length;
  // Bubble sort
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (input[j] > input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }

  outputss.textContent = "Hasil: " + input.join(", ");
}

function timSort(arr) {
  const MIN_RUN = 32;
  // 1. Bagi array menjadi runs dan urutkan dengan Insertion Sort
  for (let i = 0; i < arr.length; i += MIN_RUN) {
    insertionSort(arr, i, Math.min(i + MIN_RUN - 1, arr.length - 1));
  }
  // 2. Gabungkan runs dengan Merge Sort
  for (let size = MIN_RUN; size < arr.length; size *= 2) {
    for (let left = 0; left < arr.length; left += size * 2) {
      let mid = left + size - 1;
      let right = Math.min(left + size * 2 - 1, arr.length - 1);
      merge(arr, left, mid, right);
    }
  }
  return arr;
}

const text = document.getElementById("vowels");
const btnvwl = document.getElementById("btn-vowels");
const outputt = document.getElementById("output-vowel");

text.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchvowels();
  }
});

btnvwl.addEventListener("click", function () {
  searchvowels();
});

function searchvowels() {
  const teks = text.value.toLowerCase();
  const vocal = ["a", "i", "u", "e", "o"];
  let jumlah = { a: 0, i: 0, u: 0, e: 0, o: 0 };

  for (let huruf of teks) {
    if (vocal.includes(huruf)) {
      jumlah[huruf]++;
    }
  }

  let hasil = "";
  for (let huruf of vocal) {
    hasil += `${huruf} = ${jumlah[huruf]}\n`;
  }

  outputt.textContent = hasil;
}

function generateFibo(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

const buttonfib = document.getElementById("fibonaci");
buttonfib.addEventListener("click", function () {
  fibonacii();
});

function fibonacii() {
  // const fnumber = [];
  const input = document.getElementById("input-fibo").value;
  const angka = parseInt(input);

  if (isNaN(angka) || angka <= 0) {
    document.getElementById("fibona").textContent = "masukan angka yang benar!";
  }

  const hasil = generateFibo(angka);
  // fnumber.push(hasil);

  let index = 0;
  const interval = setInterval(() => {
    if (index < hasil.length) {
      document.getElementById("fibona").textContent += hasil[index] + ", ";
      index++;
    } else {
      clearInterval(interval);
    }
  }, 400);
}

const button = document.getElementById("start");
button.addEventListener("click", function () {
  gambarHati();
});
function gambarHati() {
  const rows = [];

  // Siapkan setiap baris seperti di Python
  for (let row = 0; row < 9; row++) {
    let line = "";
    for (let col = 0; col < 9; col++) {
      if (
        (row === 0 && (col === 2 || col === 6)) ||
        (row === 1 && (col === 1 || col === 3 || col === 5 || col === 7)) ||
        (row === 2 && (col === 0 || col === 4 || col === 8)) ||
        (row >= 3 && row <= 6 && (col === row - 3 || col === 8 - (row - 3))) ||
        (row === 7 && col === 4)
      ) {
        line += "i*u";
      } else {
        line += "   ";
      }
    }
    rows.push(line); // Simpan baris ke array
  }

  // Tampilkan satu per satu
  let index = 0;
  const heartDisplay = document.getElementById("heart");

  const interval = setInterval(() => {
    if (index < rows.length) {
      heartDisplay.textContent += rows[index] + "\n";
      index++;
    } else {
      clearInterval(interval); // Stop setelah baris terakhir
    }
  }, 500); // 500ms jeda per baris
}
