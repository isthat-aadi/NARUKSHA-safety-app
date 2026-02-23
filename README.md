# 🛡️ NARUKSHA - Women's Safety PWA

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-success.svg)
![Tech](https://img.shields.io/badge/Tech-JavaScript%20%7C%20Firebase%20%7C%20Tailwind-red.svg)

**NARUKSHA** is a serverless, offline-capable Progressive Web Application (PWA) designed to provide instant, discreet, and reliable emergency assistance. Built to bypass App Store friction, it can be installed directly to a user's home screen and loaded instantly, even in low-network conditions.

🔗 **[Live Demo: NARUKSHA Safety App](https://isthat-aadi.github.io/NARUKSHA-safety-app/)**

---

## ✨ Core Features

* **📡 Live Location Tracking:** Utilizes the Geolocation API and OpenStreetMap reverse-geocoding to fetch coordinates and translate them into readable street addresses.
* **🎥 Background Evidence Capture:** Leverages the `MediaRecorder API` to discreetly record audio and video locally without alerting the attacker.
* **☁️ Cloud Sync & SOS Dispatch:** Serverless backend powered by **Firebase Firestore** logs emergency pulses and syncs primary/secondary emergency contacts across devices.
* **🌐 Offline Architecture:** Engineered with Service Workers (`sw.js`) and a Network-First caching strategy to ensure the app UI loads instantly even without an internet connection.
* **📞 Tactical Escape Tools:** Includes a simulated "Fake Call" feature with synthetic voice audio to provide a safe exit strategy from uncomfortable situations.
* **🌍 Multi-Language Support:** Dynamic UI translation covering 10+ regional Indian languages based on device location or user preference.

## 🛠️ Technology Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Styling:** Tailwind CSS
* **Backend/Database:** Firebase Firestore (Serverless)
* **Web APIs:** Geolocation, MediaRecorder, Web Audio API, SpeechSynthesis
* **Architecture:** Progressive Web App (PWA) with Manifest & Service Workers

## 🚀 Future Roadmap (V2.0)

* **Crowdsourced SOS:** GeoQuery integration to alert nearby trusted users within a 1km radius.
* **Hardware Triggers:** Implementing `DeviceMotionEvent` for "Shake-to-SOS" functionality.
* **Stealth Mode UI:** Blackout screen overlay to hide active recording status.

---
*Built as a first-year B.Tech engineering project focusing on real-world utility and modern Web APIs.*
