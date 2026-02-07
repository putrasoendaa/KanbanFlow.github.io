// --- STATE MANAGEMENT ---
let tasks = JSON.parse(localStorage.getItem('kanban-tasks')) || [];

// --- DOM ELEMENTS ---
const columns = {
    todo: document.getElementById('todo-list'),
    inprogress: document.getElementById('inprogress-list'),
    done: document.getElementById('done-list')
};
const counts = {
    todo: document.getElementById('todo-count'),
    inprogress: document.getElementById('inprogress-count'),
    done: document.getElementById('done-count')
};

// Modal Elements
const modal = document.getElementById('modal');
const addBtn = document.getElementById('add-btn');
const closeBtn = document.getElementById('close-modal');
const saveBtn = document.getElementById('save-btn');
const taskInput = document.getElementById('task-input');
const priorityInput = document.getElementById('priority-input');

// Theme Elements
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// --- THEME LOGIC (DARK/LIGHT) ---
// 1. Cek LocalStorage atau Preferensi Sistem
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// 2. Event Listener Tombol Theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    // Ganti Ikon
    if (isDark) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// --- INITIALIZE KANBAN ---
function renderTasks() {
    Object.values(columns).forEach(col => col.innerHTML = '');
    
    tasks.forEach(task => {
        const card = createTaskElement(task);
        if (columns[task.status]) {
            columns[task.status].appendChild(card);
        }
    });

    updateCounts();
}

function updateCounts() {
    counts.todo.innerText = tasks.filter(t => t.status === 'todo').length;
    counts.inprogress.innerText = tasks.filter(t => t.status === 'inprogress').length;
    counts.done.innerText = tasks.filter(t => t.status === 'done').length;
    
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
}

// --- CARD CREATION & LOGIC ---
function createTaskElement(task) {
    const div = document.createElement('div');
    div.classList.add('task-card');
    div.classList.add(`priority-${task.priority}`);
    div.setAttribute('draggable', 'true');
    div.setAttribute('id', task.id);
    
    div.innerHTML = `
        <div class="task-content">${task.content}</div>
        <div class="task-meta">
            <span class="date">${new Date(task.id).toLocaleDateString()}</span>
            <button class="delete-btn" onclick="deleteTask(event, ${task.id})">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `;

    // Desktop Drag
    div.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData("text/plain", task.id);
        div.classList.add('dragging');
    });

    div.addEventListener('dragend', () => {
        div.classList.remove('dragging');
    });

    // Mobile Tap
    div.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            moveTaskForward(task.id);
        }
    });

    return div;
}

function moveTaskForward(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    if (task.status === 'todo') {
        task.status = 'inprogress';
    } else if (task.status === 'inprogress') {
        task.status = 'done';
    } else {
        return;
    }
    renderTasks();
}

// --- DRAG & DROP HANDLERS ---
function allowDrop(e) { e.preventDefault(); }

function drop(e) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    const draggedTask = tasks.find(t => t.id == taskId);
    const dropZone = e.target.closest('.column');
    
    if (draggedTask && dropZone) {
        const newStatus = dropZone.id;
        if (draggedTask.status !== newStatus) {
            draggedTask.status = newStatus;
            renderTasks();
        }
    }
}

// --- ADD & DELETE TASK ---
addBtn.addEventListener('click', () => {
    modal.classList.add('active');
    setTimeout(() => taskInput.focus(), 100);
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

saveBtn.addEventListener('click', () => {
    const content = taskInput.value.trim();
    const priority = priorityInput.value;

    if (content) {
        const newTask = {
            id: Date.now(),
            content: content,
            status: 'todo',
            priority: priority
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
        modal.classList.remove('active');
    }
});

window.deleteTask = function(event, id) {
    event.stopPropagation();
    const card = document.getElementById(id);
    card.classList.add('deleting');
    setTimeout(() => {
        tasks = tasks.filter(t => t.id !== id);
        renderTasks();
    }, 300);
};

// Jalankan
renderTasks();