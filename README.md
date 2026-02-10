KanbanFlow - Task Management Application

KanbanFlow is a web-based task management application designed to help users visualize and organize their workflows efficiently. Implementing the Kanban methodology with an intuitive interface, it allows users to move tasks between "To Do", "In Progress", and "Done" statuses.

Developed using pure Vanilla JavaScript without dependencies on external libraries or frameworks, this project highlights a deep understanding of modern web development fundamentals.
Live Demo

https://altvesper.github.io/KanbanFlow.github.io/
Key Features

The application comes with a suite of features to boost user productivity:

    Visual Task Management: Organizes tasks into three main status columns.

    Drag & Drop Interface (Desktop): Utilizes the native HTML5 Drag and Drop API to seamlessly move task cards between columns on desktop devices.

    Mobile-Friendly Interaction: Intelligent device detection that switches "drag & drop" interactions to "tap-to-move" on touch screens or small devices (< 768px), ensuring an optimal user experience on smartphones.

    Dark & Light Mode: Dual-theme support that detects system preferences and saves manual theme choices.

    Persistent Data Storage: All task data is stored locally using the browser's localStorage, preventing data loss upon page reload.

    Priority Indicators: Visual markers (color coding) for task priority levels (Low, Medium, High).

    Responsive Design: Adaptive layout using CSS Grid and Flexbox that adjusts the view from horizontal (desktop) to vertical (mobile) formats.

Technologies Used

This project is built using current web technology standards:

    HTML5: Use of semantic elements for solid document structure and accessibility.

    CSS3:

        CSS Variables for theme management (Dark/Light mode).

        CSS Grid & Flexbox for responsive layouts.

        Keyframe Animations for smooth interface transitions.

    JavaScript (ES6+):

        Advanced DOM Manipulation.

        Event Handling (Drag events, Click events).

        State Management using Arrays and Objects.

        Local Storage API for data persistence.

Technical Highlights

This project demonstrates technical problem-solving in frontend development, including:

    Cross-Platform Logic:
    The main challenge was the HTML5 Drag & Drop API, which is not natively supported on many mobile browsers. The solution implemented uses conditional logic: if the screen width is below 768px, event listeners switch to click events that automatically move the task status to the next stage (e.g., To Do -> In Progress).

    Framework-less State Management:
    Instead of manipulating the DOM directly for every data change, the application uses a "Single Source of Truth" via a JavaScript object array. Every data change updates the array, saves it to Local Storage, and re-renders the view to maintain data consistency.

    Drag & Drop Logic:
    Implementation of logic to identify the task ID being dragged (dragstart), detect the target zone (dragover), and update the task status based on the column ID where the task is dropped (drop).

Installation and Setup

Follow these steps to run the project on your local machine:

    Clone this repository:
    Bash

    git clone https://github.com/altvesper/kanbanflow.git

    Navigate to the project directory:
    Bash

    cd kanbanflow

    Run the application:
    Simply open the index.html file using a modern web browser (Chrome, Firefox, Edge, Safari). No backend server installation or Node.js dependencies are required.

Project Structure
Plaintext

kanbanflow/
├── index.html      # Main structure and application markup
├── style.css       # Styling, theming, and responsiveness
├── script.js       # Business logic, DOM manipulation, and data handling
└── README.md       # Project documentation
