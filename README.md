# WaterX Frontend

![WhatsApp Image 2024-10-05 at 04 14 10_e4926d29](https://github.com/user-attachments/assets/6e88600c-01b6-4fbe-8cdd-65bd58087566) 

The frontend of **WaterX** is a responsive, user-friendly application built using **React Native** and **Expo**. This platform allows users to explore water-efficient techniques and contribute to discussions on water conservation. The frontend provides seamless navigation, a beautiful interface, and interactive tools for calculating water usage.

## Features

- **Responsive Design**: Optimized for mobile and web platforms.
- **Interactive Tools**: Includes water usage calculators.
- **Smooth Navigation**: Powered by React Navigation.
- **Community Engagement**: Forums and social features to discuss and share water-saving practices.
- **Social Sharing**: Share posts and case studies on social media.
- **Contributions**: Users can submit articles, tips, and case studies.

## UI Design - Figma

'''
https://www.figma.com/design/SDZ6qKji4aRaf0bMaaMwzE/WaterX?node-id=0-1&t=nU0OOffrQkkMAlBh-1
'''

## Our Idea

'''
https://www.canva.com/design/DAGSh6PKhxg/mhgW70EmbJaT8Opy0hXySg/edit?utm_content=DAGSh6PKhxg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
'''

## Process Flow

![WhatsApp Image 2024-10-05 at 06 24 07_08620a0a](https://github.com/user-attachments/assets/e32d336e-03e2-410d-b345-ce8a0175d0f3)


## Tech Stack
- React Native
- Node JS
- Flask
- Python
- LLM Models : llama3-8b-8192 model


# WaterX ChatBot API Integration

The backend for the WaterX chatbot is built using Flask and integrates with multiple components from the Langchain framework to create a robust and scalable conversational AI system. The backend provides a RESTful API that processes user queries and delivers context-aware responses focused on water scarcity issues, such as water-efficient techniques and methods.

**Key Features:**

- Flask-based API: The backend serves as a REST API built with Flask, allowing clients to interact with the chatbot by sending HTTP POST requests to /api/chat. It handles input questions and returns chatbot responses.

- LLM Integration: The chatbot leverages Groq API and the HuggingFace model for language model embeddings. The language model (llama3-8b-8192) ensures responses are generated based on user input and document context.

- Document Retrieval: The system uses PyPDFLoader to load water scarcity-related documents and FAISS (Facebook AI Similarity Search) for document indexing, allowing efficient retrieval of relevant information. These documents are processed and split into manageable chunks using RecursiveCharacterTextSplitter.

- Custom Prompt Template: A custom prompt template guides the chatbot’s response generation, ensuring it focuses on providing actionable and accurate answers related to water scarcity.

- Environment Variables: API keys and sensitive information are stored in a .env file, including the GROQ_API_KEY, which is loaded using python-dotenv.

**Endpoints**
/api/chat: Accepts a POST request with a question in the body. The chatbot processes the input, retrieves relevant context, and returns a response.


![Screenshot 2024-10-05 035946](https://github.com/user-attachments/assets/639ab1d0-d2b2-4b8e-908b-bd7d7402a76a)

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/476a7504-3ae0-4294-8d16-bc956d4c9ea7" alt="Image 1" width="225"/></td>
    <td><img src="https://github.com/user-attachments/assets/d29ced3d-f97c-452a-8d34-cd3a2ed803ca" alt="Image 2" width="225"/></td>
    <td><img src="https://github.com/user-attachments/assets/cc8fdf67-ef1b-46c0-b7c6-77eeb3fae200" alt="Image 3" width="225"/></td>
    <td><img src="https://github.com/user-attachments/assets/1eaadd93-cb45-405b-9b21-330b790fc5fe" alt="Image 4" width="225"/></td>
  </tr>
</table>

# WaterX Backend

The backend of WaterX uses MongoDB to handle user authentication, fetch social media posts, and manage a community forum.

- User Authentication: Supports user registration, login, and session management via JWT for secure access. User data is securely stored in MongoDB.

- Social Media Integration: Fetches relevant posts from platforms like Twitter using OAuth2, with caching in MongoDB for faster access.

- Community Forum: Enables thread creation, replies, and voting. Forum data is stored in MongoDB, and real-time updates are managed through WebSockets.

**Key Endpoints:**

- POST /api/register: User registration.
- POST /api/login: User login with JWT.
- GET /api/social/posts: Fetches social media posts.
- POST /api/forum/post: Create a forum post.
- GET /api/forum/posts: Retrieve forum threads.

# What does our app offers?

- **Home**: Stay updated with curated social media posts focused on water conservation, innovative techniques, and global water-related issues. Engage with the latest trends and discussions on water sustainability.

  ![WhatsApp Image 2024-10-05 at 04 14 08_80077a1c](https://github.com/user-attachments/assets/457273af-aa32-403b-bc6c-f7497968635a)

- **Chatbot**: An intelligent assistant that helps users with water scarcity solutions, irrigation techniques, and tips for efficient water usage. Powered by a language model, it provides tailored responses to user queries.

- **Water Usage Calculator**: A tool that allows users to estimate their water consumption based on daily activities. It provides actionable insights on how to reduce water usage and adopt more sustainable habits.

  (sample)

  ![WhatsApp Image 2024-10-05 at 04 14 08_63e0bca9](https://github.com/user-attachments/assets/d60516bb-2446-4325-9ed2-7786cf2ed541)


- **Tutorials**: Access video and written tutorials on various water-saving methods, rainwater harvesting techniques, and sustainable irrigation systems. These resources help users implement practical solutions to conserve water.

- **Community Forums**: A space where users can discuss, ask questions, and share their experiences related to water conservation. The forum fosters a community of like-minded individuals dedicated to tackling water challenges.
  
  (frontend)

  ![WhatsApp Image 2024-10-05 at 04 14 05_1f4eab62](https://github.com/user-attachments/assets/a98048c6-272d-443d-8679-216e36ed99c4)


# Future Enhancements

- **Use of Intel OpenVINO Toolkit for Optimization**: 
   Integrating Intel's OpenVINO toolkit can optimize the performance of machine learning models, enabling faster and more efficient processing, especially for chatbot and water usage calculator features.

- **Speech-to-Text Inputs**: 
   Implementing speech-to-text functionality will allow users to interact with the chatbot and other tools using voice commands, providing a more seamless and hands-free experience.

- **Multilingual Inputs**: 
   Supporting multiple languages will expand the app's accessibility, allowing users from diverse linguistic backgrounds to interact with the platform and engage with its features in their preferred language.

- **E-commerce Integration for Water Resources**: Implementing an e-commerce-like interface where users can purchase necessary water-related equipment or products directly within the app, providing a seamless user experience for both information and purchasing needs. (**Revenue Model**)

