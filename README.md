# HandsOn-Volunteering-Platform

HandsOn is a community-driven social volunteering platform that connects individuals with meaningful social impact opportunities. Users can discover and join volunteer-driven events, post requests for community help, form teams for large-scale initiatives, and track their impact with contributions logged on a personal and team level.

# Project Overview

The Project allows users to discover volunteer opportunities, form teams, track their impact, and earn recognition for their contributions. By integrating event management, community help requests, team collaboration, and impact tracking, HandsOn aims to encourage active participation in social good initiatives.

# Features

1. User Registration & Profile Management
   --Secure signup & login using JWT authentication, profile management with user skills and causes, and volunteer history & contribution tracking.
2. Discover & Join Volunteer Events
   --Users and organizations can create volunteer events, browse upcoming events with filters by category, location, and availability, and register with one-click event registration & attendee tracking
3. Community Help Requests
   --Users can post requests for ongoing community support, coordinate through comments or private messaging, and prioritize responses with urgency levels.
4. Form Teams & Group Initiatives
   --Users can create public or private teams, access a dedicated team dashboard, and compete in a leaderboard showcasing top contributing teams.
5. Impact Tracking & Social Recognition
   --Volunteer hours logging, point-based reward system (5 points per hour), auto-generated certificates for milestones, and a public leaderboard ranking top volunteers.

# Technologies used

1. Frontend: React.js, HTML, JavaScript
2. Style: Raw CSS
3. Backend: Node.js, Express.js
4. Database: MongoDB
5. Authentication: JWT (JSON Web Token)
6. Version Control: Git

# Setup Instructions

1. Clone the Repository
2. Install Dependencies
   Start Backend Server: commands in terminal
   cd backend >> npm i bcrypt cors dotenv express joi jsonwebtoken mongoose nodemon >> npm start
   Start Frontend Server: commands in terminal
   cd .. >> cd frontend >> npm i >> npm start

3. Configure Environment Variables
   Create a .env file in the backend folder and add:
   The application will be available at http://localhost:3000/.
