# habitTrackerAPI

## Hosting
- **Backend**: [Hosted on Render](https://habittrackerapi-vy90.onrender.com)
- **Frontend**: [Hosted on Vercel](https://habit-tracker-theta-ten.vercel.app/)

## Backend Folder Structure
- **src**: Contains the source files for the server.
- **config**: Manages MongoDB connection using Mongoose.
- **index.js**: Contains the main server code logic.

## Overview
The Habit Tracker API facilitates the creation and tracking of personal habits. It supports various operations that allow users to manage their daily habits effectively. Below are the API endpoints available, which demonstrate the capabilities of the application:

### API Endpoints

- **Create a Habit**
  - **POST** `/api/habits`
  - Creates a new habit entry.
  - Controller: `habitController.createHabit`

- **Get All Habits**
  - **GET** `/api/habits`
  - Retrieves all habits.
  - Controller: `habitController.getAllHabits`

- **Update a Habit**
  - **POST** `/api/habits/update`
  - Updates the status of an existing habit.
  - Controller: `habitController.updateStatus`

- **Get Habits for a Specific Day**
  - **GET** `/api/habits/:day`
  - Retrieves habits for a specific day.
  - Controller: `habitController.getHabitsForDay`

## Getting Started
To interact with the API, visit the [hosted frontend](https://habit-tracker-theta-ten.vercel.app/) where you can add, update, and review your daily habits. Each endpoint serves a specific function in the management and tracking of user habits, making daily progress tracking straightforward and efficient.
