# Number to Words Converter in Node.js

This Node.js project converts numeric values into their corresponding word representation. It can handle whole numbers, decimals, and negative numbers, making it a versatile tool for various applications.

## Features

- **Whole Numbers**: Converts numbers like `1234` into `One Thousand Two Hundred and Thirty Four`.
- **Decimal Numbers**: Converts numbers like `1234.56` into `One Thousand Two Hundred and Thirty Four point Five Six`.
- **Negative Numbers**: Converts numbers like `-1234.56` into `Negative One Thousand Two Hundred and Thirty Four point Five Six`.

## How It Works

The script uses predefined arrays for units and tens to map numbers to words. It processes the number in chunks of thousands, converting each chunk to words and appending the appropriate scale (e.g., thousand, million, billion).

### Functions

- **`convertLessThanOneThousand(number)`**: Converts a number less than 1000 into words.
- **`convert(number)`**: Converts a large number into words by breaking it down into chunks of thousands.
- **`convertDecimal(decimalStr)`**: Converts the decimal part of a number into words by processing each digit individually.
- **`convertNumberToWords(input)`**: Handles the overall conversion, including checking for negative numbers and processing the input.

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/yourusername/number-to-words.git
   cd number-to-words
   ```

2. **Install Node.js** (if not already installed):

   Visit [Node.js official website](https://nodejs.org) to download and install the latest version.

## Usage

To run the script:

```
node numbertoword.js
```

When you run the script, it will prompt you to enter a number. Type any number (e.g., `-1234.56`) and press Enter. The output will display the number in words, e.g., `Negative One Thousand Two Hundred and Thirty Four point Five Six`.

### Example

```
Enter a number: -1234.56
Number in words: Negative One Thousand Two Hundred and Thirty Four point Five Six
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to improve the project, please fork the repository and create a pull request with your changes.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me directly.


```
This project was created to demonstrate a simple yet powerful way to convert numbers to words in Node.js. Feel free to extend it with additional features or languages!
```
