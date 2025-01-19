# 🎥 CineAI - AI-driven Movie Recommendations

CineAI is a cutting-edge, AI-powered web application designed to transform how users discover movies. By harnessing the capabilities of OpenAI, CineAI delivers highly personalized movie recommendations tailored to each user's preferences and interactions, creating a unique and enjoyable entertainment experience.

## 🛠️ Tech Stack
![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)


## 📚 Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deployment](#deployment)


## 🌟 Features

- **Personalized Recommendations**  
  Tailored movie suggestions based on user preferences and past interactions for a truly unique experience.

- **AI-Driven Insights**  
  Leveraging OpenAI’s capabilities to ensure recommendations are accurate, engaging, and insightful.

- **User-Friendly Interface**  
  Intuitive design ensures seamless navigation and a delightful user experience.

- **Dynamic User Profiles**  
  Secure user authentication and profile management powered by Firebase.

- **Modern Technology Stack**  
  Built with React.js, Redux, and Tailwind CSS for a responsive, high-performance application.


## 🛠️ Getting Started

Follow these steps to set up and run CineAI on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- An active [OpenAI API Key](https://platform.openai.com/signup/)

### Installation

1. **Clone the Repository**  
   Clone the CineAI repository to your local machine:  
   ```bash
   git clone https://github.com/SachindaBandara/Cine-AI.git
   cd frontend

2. Install dependencies:
   ```bash
   npm install

3. Configure Firebase:
   - Go to the [Firebase Console](https://firebase.google.com/) and create a new project.
   - In the Firebase settings, find your project’s configuration and copy the Firebase credentials.
   - Create a `.env` file in the frontend directory and add the Firebase configuration:
   
   ```bash
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id

4. Add your OpenAI API Key:
   - Include your OpenAI API key in the `.env` file:
   ```bash
   REACT_APP_OPENAI_API_KEY=your_openai_api_key

5. Start the development server:
   ```bash
   npm run dev

## Deployment 🛠️
### To deploy CineAI, use Firebase Hosting:

1. Build the application:
   - Prepare the application for deployment:
   ```bash
   npm run build

3. Deploy to Firebase:
   - Use Firebase CLI to deploy the app to Firebase Hosting:
   ```bash
   firebase deploy

##
<div align="center">
  <h2>😊Happy Coding!💻</h2>
</div>
