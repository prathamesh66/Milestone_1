# Milestone_1


This is a simple Task Management application built with React and bundled using Vite. The application allows users to add, view, and delete tasks with a title and description.


* Features

 Add new tasks with a title and description.

 Display a list of tasks.

 Delete tasks from the list.


* Project Structure

src/
│

├── Components/

│   ├── TaskForm.jsx     # Component for adding tasks

│   └── TaskList.jsx     # Component for listing and deleting tasks

├── App.jsx              # Main component managing the state

├── App.css              # Optional CSS file for styling

├── main.jsx             # Entry point of the app

└── ...


* Make sure you have the following installed:

 Node.js 

 npm or yarn 

 Vite



* Installation

 Navigate into the project directory:

cd "Milestone 1"

 Install the required dependencies:

npm install



* Running the Application

Once the dependencies are installed, you can run the app in development mode using Vite.

Using npm :

npm run dev

The application will run on http://localhost:5173.



* How to Use

- Add a Task:

Fill out the task title and description in the provided fields.

Click on "Add Task" to add the task to the list.

- View Tasks:

After adding tasks, they will appear in the task list below the form.

- Delete a Task:

Click the "Delete" button next to the task you want to remove from the list.



* File Breakdown

 App.jsx: The main file that handles state for the tasks and renders the TaskForm and TaskList components.

 TaskForm.jsx: This component is responsible for rendering the form where users can add new tasks.

 TaskList.jsx: This component displays the list of tasks and allows users to delete them.

