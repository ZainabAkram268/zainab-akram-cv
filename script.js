// ===== DARK/LIGHT MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    
    formStatus.textContent = 'Sending...';
    formStatus.style.color = 'var(--text-secondary)';
    
    setTimeout(() => {
        formStatus.textContent = `Thanks ${name}! I'll get back to you soon.`;
        formStatus.style.color = 'var(--link-color)';
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    }, 1000);
});

