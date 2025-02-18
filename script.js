// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Clear form
        this.reset();
    });
}

// Project data
const projects = [
    {
        title: "Receipts Dashboard",
        description: "An application that allows the user to upload receipts to be stored in SQLite database. Allows small business to store and categorize receipts for tax purposes.",
        shortDescription: "Dashboard to upload and manage business receipts",
        technologies: ["Git", "SSH", "Bash", "SQLite", "Python", "Flask", "Raspberry Pi"],
        // image: "assets/softphone-thumb.jpg",
        gallery: [
            "assets/receipt-dashboard-1.jpg"
        ],
        github: "https://github.com/saw-projects/pi-dashboard-v1",
        longDescription: "Small businesses must keep all expensed receipts for 7-years for tax purposes. Saving receipts digitally is ideal, but organizing and searching receipts can be difficult. This project allowed the user to save time by creating a single page form to upload data and the receipt file in order to be categorized and stored by the program in a dedicated SQL database. The dashboard allows the user to sort, filter, and search for receipts and then view them. The project was deployed to a raspberry pi on the local network using SSH and Git. The project was tested by running a Flask Server. The build was automated using a bash script."
    },
    {
        title: "Web Scraper - Data Pipeline",
        description: "A webscraper that runs jobs 24/7 on a headless Raspberry Pi",
        shortDescription: "Data Pipeline implementation deployed over SSH on Raspberry Pi",
        technologies: ["SQLite", "Python", "Raspberry Pi", "Git", "SSH"],
        // image: "assets/softphone-thumb.jpg",
        gallery: [
            "assets/receipt-dashboard-1.jpg"
        ],
        github: "https://github.com/saw-projects",
        longDescription: "A webscraper that runs scheduled jobs and saves data to a SQLite database."
    },
    {
        title: "Kernel Module",
        description: "Developed, loaded, and unloaded a simple Kernel Module in C. Tested on Ubunut Linux running in VM.",
        shortDescription: "Linux Kernel Module",
        technologies: ["C", "GNU make", "GCC", "Linux", "VIM"],
        // image: "assets/softphone-thumb.jpg",
        gallery: [
            "assets/kern-mod-1.jpg"
        ],
        github: "https://github.com/saw-projects/kernel-modules",
        longDescription: "Developed, loaded, and unloaded a simple Kernel Module in C. Tested on Ubunut Linux running in VM."
    },
    {
        title: "POSIX Shell",
        description: "",
        shortDescription: "POSIX Shell - OS Class Project",
        technologies: ["C", "GNU make", "GCC", "VIM"],
        // image: "assets/softphone-thumb.jpg",
        gallery: [
            "assets/receipt-dashboard-1.jpg"
        ],
        github: "https://github.com/saw-projects/pi-dashboard-v1",
        longDescription: "POSIX-compliant shell for UNIX/Linux operating system implementing a large portion of the POSIX shell’s functionality."
    },
    {
        title: "Soft Phone",
        description: "A software-based phone system built with Twilio API integration, enabling texts and voice calls directly from web browsers. Features include call management, contact lists, and call history.",
        shortDescription: "Browser-based VoIP solution",
        technologies: ["Python", "Flask", "REST API", "Twilio", "Webhooks", "ngrok"],
        // image: "assets/softphone-thumb.jpg",
        gallery: [
            "assets/softphone-1.jpg"
        ],
        github: "https://github.com/saw-projects/Soft-Phone",
        longDescription: "The Soft Phone project is a VoIP solution that leverages Twilio's API to enable real-time voice and text communication directly through web browsers. Key features include 10-digit phone numbers with U.S. area codes, international calling, and a user-friendly interface for managing calls and contacts. Features being added are voicemail, improved front-end, and notifications."
    },
    {
        title: "Network Monitoring",
        description: "A real-time monitoring system that tracks server performance, detects anomalies, and provides analytics through an interactive CLI dashboard.",
        shortDescription: "Real-time server monitoring system",
        technologies: ["Python", "TCP", "Sockets", "Networking"],
        // image: "assets/network-monitor-thumb.jpg",
        gallery: [
            "assets/network-1.jpg"
        ],
        github: "https://github.com/saw-projects/Network-Monitor-App",
        longDescription: "This network monitoring solution provides comprehensive insights into network performance through real-time data collection and analysis. The system uses InfluxDB for time-series data storage and Grafana for visualization, enabling detailed performance tracking and anomaly detection."
    },
    {
        title: "REST API Backend",
        description: "A scalable REST API backend built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.",
        shortDescription: "Scalable REST API with comprehensive features",
        technologies: ["Python", "Flask", "MySQL", "JWT", "Google Cloud", "Docker"],
        // image: "assets/api-thumb.jpg",
        gallery: [
            "assets/api-1.jpg"
        ],
        github: "https://github.com/saw-projects/API-projects",
        longDescription: "This REST API backend provides a robust foundation for web applications with features including JWT authentication, rate limiting, and comprehensive API documentation. The system is built with scalability in mind and follows REST best practices."
    },
    {
        title: "More Projects in Progress",
        description: "Several exciting projects are currently in development, including work with machine learning, microservices, and more.",
        shortDescription: "Stay tuned for upcoming projects!",
        technologies: ["Linux/UNIX", "C", "Operating Systems", "Networking", "Data Science", "Machine Learning", "Microservices", "CI/CD"],
        gallery: [],
        github: "",
        longDescription: "Multiple personal and school projects are currently in development, exploring various areas of computer science. These projects showcase different technologies and problem-solving approaches."
    } 
];

// Function to create project cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">GitHub</a>
                    <button class="view-details" data-project="${project.title}">View Details</button>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // Add event listeners for view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', () => {
            const project = projects.find(p => p.title === button.dataset.project);
            showProjectModal(project);
        });
    });
}

// Modal functionality
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');

function showProjectModal(project) {
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.longDescription}</p>
        <!--
        <div class="modal-gallery">
            ${project.gallery.map(img => `
                <img src="${img}" alt="${project.title}" onclick="enlargeImage(this.src)">
            `).join('')}
        </div>
        -->
        <div class="project-technologies">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.github}" target="_blank">View on GitHub</a>
        </div>
    `;
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Function to enlarge image
function enlargeImage(src) {
    const enlargedView = document.createElement('div');
    enlargedView.className = 'enlarged-view';
    enlargedView.innerHTML = `
        <div class="enlarged-content">
            <img src="${src}" alt="Enlarged view">
        </div>
    `;
    document.body.appendChild(enlargedView);

    enlargedView.addEventListener('click', () => {
        document.body.removeChild(enlargedView);
    });
}

// Initialize project cards when DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectCards);
