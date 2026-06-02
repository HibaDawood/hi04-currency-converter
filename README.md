# 💱 CLI Currency Converter

A dynamic, real-time command-line Currency Converter built using TypeScript and Node.js. It allows users to instantly convert amounts between multiple global currencies using an optimized base-currency mathematical formula.

---
<p align="left"> <img align="right" alt="coding" width="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoxPxYi2_b-MrJMdO6zv6iOZRMTIg3H89Mw&usqp=CAU" alt="hibadawood" /> </p>
## ✨ Features

* **Multi-Currency Support:** Handles conversions across USD, YEN, EUR, CAD, AUD, and PKR.
* **Base-Currency Logic:** Uses a highly efficient architecture where USD acts as the base currency ($1$) to calculate rates accurately.
* **Interactive Prompts:** Smooth user experience with distinct dropdown menus using `inquirer`.
* **Clean Precision Formatting:** Outputs the converted results rounded perfectly to two decimal places (`.toFixed(2)`) with vibrant layout colors via `chalk`.

---

## 🧮 Conversion Formula

The application processes conversion seamlessly through a two-step normalization formula:

$$\text{Base Amount (USD)} = \frac{\text{User Amount}}{\text{From Currency Rate}}$$

$$\text{Final Converted Amount} = \text{Base Amount} \times \text{To Currency Rate}$$

---

## 🛠️ Tech Stack

* **Language:** TypeScript / Node.js
* **Dependencies:** `inquirer` (Interactive CLI inputs), `chalk` (Terminal styling)

---

## 🚀 How to Run & Use

1. Clone or download this repository locally.
2. Open your terminal in the project folder and install the required modules:
   ```bash
   npm install

3. Launch the converter using the following command:

```bash
npx tsc && node index.js

