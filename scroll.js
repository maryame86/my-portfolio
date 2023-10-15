//////// Function to change navbar background colour to background colour of div in view ///////////

// Get references to the navigation bar and all fullscreen divs
const navbar = document.getElementById('my-nav');

const fullscreenDivs = [
    document.getElementById('intro'),
    document.getElementById('about'),
    document.getElementById('skills'),
    document.getElementById('projects'),
    document.getElementById('contact')
];

// Function to update the navbar color based on scroll position
function updateNavbarColor() {

    const scrollPosition = window.scrollY;

    // Iterate through each fullscreen div
    fullscreenDivs.forEach((div, index) => {

        const divPosition = div.getBoundingClientRect().top;

        // Define the scroll threshold for each div 
        const scrollThreshold = 50; 

        // Check if the fullscreen div is at or near the top of the page
        if (divPosition <= scrollThreshold) {

            // Apply a unique color to the navigation bar based on the div's index
            const colors = ['transparent', '#f4f4f3', '#ffc700', '#f4f4f3', '#ffc700']; 
            navbar.style.backgroundColor = colors[index];
        }

    });

}

// Attach the scroll event listener
window.addEventListener('scroll', updateNavbarColor);

// Call the function initially to set the initial color
updateNavbarColor();




/////////// Function to change the navbar from white to black when moving out of the into page //////////

function setNavbarLinkColor(visibilityThreshold) {
    const introDiv = document.getElementById('intro');
    const navbarLinks = document.querySelectorAll('#my-nav li a');

    const observer = new IntersectionObserver(entries => {
        const introIsInView = entries[0].intersectionRatio >= visibilityThreshold;

        navbarLinks.forEach(link => {
            link.style.color = introIsInView ? 'white' : '#242424';
        });
    }, {
        threshold: visibilityThreshold  // Observe based on the provided visibility threshold
    });

    // Observe the intro div to check if it's in view
    observer.observe(introDiv);
}

// Call the function with a visibility threshold of 0.5 (50% visibility)
setNavbarLinkColor(0.1);




/////////// Fade-in effect of content from section to section //////////////


function addFadeInEffectOnScroll() {
    const sectionDivs = [
       
        document.getElementById('about-left'),
        document.getElementById('about-right'),
        document.getElementById('skills-left'),
        document.getElementById('skills-right'),
        document.getElementById('projects-left'),
        document.getElementById('projects-right'),
        document.getElementById('contact-left'),
        document.getElementById('contact-right')
    ];

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.75s ease-in';
                entry.target.style.opacity = '1';
            } else {
                entry.target.style.transition = 'none'; // Reset transition
                entry.target.style.opacity = '0'; // Reset opacity
            }
        });
    }, { threshold: 0.2 }); // Adjust the threshold as needed

    sectionDivs.forEach(div => {
        div.style.opacity = '0'; // Set initial opacity to 0
        observer.observe(div);
    });
}

// Call the function to add the fade-in effect on scroll
addFadeInEffectOnScroll();
