# Liquid Glass OTP Input

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/liquid-glass-otp-input/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 13.8-second screen recording.

## Video analysis

The recording title is **Liquid Glass OTP Input**. It shows a six-digit one-time-password interface on a dark, almost black canvas. Each digit is entered into an individual minimal field with a warm gold underline and soft glass-like ambient glow.

The demonstrated sequence includes:
- OTP digits being entered one by one (`145612`).
- A red/pink invalid-code state.
- The fields clearing for another attempt.
- A second code entry (`123456`).
- A final circular gold checkmark with the label **Verified**.

The source panel is too small to read line-for-line. The implementation reconstructs the visible UI and behavior, not the original creator's verbatim source.

## Features

- Six single-digit OTP inputs.
- Auto-focus advances to the next field.
- Backspace and arrow-key navigation.
- Paste a complete six-digit code.
- Warm gold liquid-glass glow and underline.
- Invalid OTP state with red/pink feedback.
- Animated verified checkmark.
- Responsive and reduced-motion friendly.

## Demo code

Enter **123456** to show the Verified state. The video first demonstrates `145612` as an invalid code; any incorrect six-digit code shows the invalid state. This is a front-end demo only; it does not send SMS or authenticate a real phone number.

## Run locally

No dependencies required:

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Structure

```text
liquid-glass-otp-input/
├── index.html
├── style.css
├── script.js
└── README.md
```

For production, replace the demo code check in `script.js` with a secure backend verification endpoint and a real OTP delivery provider.
