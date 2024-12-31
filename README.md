# 🎥 Netflix GPT  

![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/State%20Management-Redux-764ABC?logo=redux&logoColor=white)
![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28?logo=firebase&logoColor=black)
![OpenAI GPT](https://img.shields.io/badge/AI-OpenAI%20GPT-412991?logo=openai&logoColor=white)


**Netflix GPT** is an AI-powered web application that elevates your movie-browsing experience. Combining OpenAI's GPT with the TMDB API, it offers intelligent movie suggestions wrapped in a modern, visually appealing interface inspired by Netflix.  

---

## 🚀 Features  

### 🔐 User Authentication  
- **Secure Login/Sign-Up**: Robust and reliable user authentication system.  
- **Form Validation**: Smart validation for sign-in/sign-up forms.  
- **User Account Management**:  
  - Create and manage user profiles.  
  - Update display names and profile pictures.  
  - Easy Sign Out functionality.  
- **Redirect Logic**: Automatically redirects unauthenticated users to the login page.  

### 🎬 Movie Browsing  
- **Dynamic Main Movie Display**:  
  - Showcases “Now Playing” movies with autoplay, muted trailers in the background.  
- **Categorized Movie Lists**: Organized movie collections for easy navigation.  
- **Detailed Movie Cards**: Interactive and dynamically updated via TMDB API.  
- **Responsive Design**: Looks stunning across devices, thanks to **TailwindCSS**.  

### 🤖 AI-Powered Suggestions  
- **Smart Movie Search**:  
  - AI-driven search with GPT integration for intelligent movie recommendations.  
  - Fetches movie suggestions from TMDB based on GPT responses.  
- **Search Bar**: Simplified and efficient movie discovery.  
- **Seamless Integration**: AI suggestions merge effortlessly into the existing movie components.  

### 🌟 Advanced Features  
- **Multi-Language Support**: Explore movies in various languages.  
- **Optimized Performance**: Leveraging memoization for efficient rendering.  
- **Custom Hooks**:  
  - `usePopularMovies`: Fetch popular movies effortlessly.  
  - `useRef`: Smooth DOM interaction management.  
- **Centralized State with Redux**:  
  - User management with `userSlice`.  
  - Movie and GPT data handled by `movieSlice` and `gptSlice`.  

### 🛠️ Bug Fixes  
- Fixed profile picture and display name update issues during sign-up.  
- Streamlined redirect behavior for unauthenticated users.  
- Enhanced memory management by unsubscribing from unnecessary listeners.  

---

## 🛠️ Project Setup  

- **TailwindCSS**: Configured for sleek, responsive styling.  
- **Firebase**: Set up for authentication and backend functionality.  
- **Deployment**: Fully deployed for live user access.  
- **Secure Environment**: Managed sensitive data with `.env` files.  

---

## 🧰 Technologies Used  

### **Frontend**  
- **React**: Built using a modern React stack.  
- **TailwindCSS**: For eye-catching, responsive designs.  
- **Redux**: Simplified state management.  

### **Backend and APIs**  
- **Firebase**: Authentication and backend services.  
- **TMDB API**: Provides detailed movie data and trailers.  
- **OpenAI GPT**: Delivers personalized movie recommendations.  

---

## 🌐 Live Website 

Explore Netflix GPT in action: [**Link**](https://apoorv-netf-gpt.netlify.app/)  

---
