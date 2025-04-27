# Sparkful Hackathon 2024

Welcome to our Sparkful Hackathon project repository! This project was developed during the hackathon held on April 26, 2024.

## Simulation: 
A Chrome extension that lets users capture the current page’s price and, using RAG (Retrieval-Augmented Generation) combined with generative AI, recommends which credit card offers the best cashback.

Technologies Used：
Frontend: HTML, CSS, JavaScript
Backend: Node.js, MySQL

## Setup Instructions
### Resetting Node Modules and Reinstalling Dependencies

To properly set up the backend environment, follow these steps in your terminal:

```bash
# Navigate to backend directory
cd backend

# Remove existing node modules and package-lock
rm -rf node_modules
rm package-lock.json

# Install dependencies
npm install
npm install @google/generative-ai

# Start the server
node server.js
```

**Important:** Make sure to open and run the MySQL script `main.sql` before starting the application.

## Project Team

**Developed by:**
- JUI-CHENG, TAN
- CHIH-YAO, YU
- Two additional team members for support

## Project Screenshots

<div align="center">
  <img src="./images/ScreenShot1.png" alt="Application Screenshot 1" width="800"/>
  <img src="./images/ScreenShot2.png" alt="Application Screenshot 2" width="800"/>
  <img src="./images/ScreenShot3.png" alt="Application Screenshot 3" width="800"/>
  <img src="./images/ScreenShot4.png" alt="Application Screenshot 4" width="800"/>
  <img src="./images/ScreenShot5.png" alt="Application Screenshot 5" width="800"/>
  <img src="./images/ScreenShot6.png" alt="Application Screenshot 6" width="800"/>
  <img src="./images/ScreenShot7.png" alt="Application Screenshot 7" width="800"/>
  <img src="./images/ScreenShot8.png" alt="Application Screenshot 8" width="800"/>
</div>