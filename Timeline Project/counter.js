//counter
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target; 
            }
        };

        const scrollCheck = () => {
            const sectionTop = counter.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                updateCount();
                window.removeEventListener('scroll', scrollCheck);
            }
        };

        window.addEventListener('scroll', scrollCheck);
    });
});

const hoverContents = document.querySelectorAll('.hover-content');
const timelineItems = document.querySelectorAll('.timeline-item');


let activeHoverContent = null;


function hideAllHoverContents() {
    hoverContents.forEach((content) => {
        content.style.opacity = '0'; 
        content.style.visibility = 'hidden'; 
    });
    activeHoverContent = null; 
}
function showHoverContent(hoverContent) {
    if (activeHoverContent !== hoverContent) {
        if (activeHoverContent) {
            hideAllHoverContents(); 
        }
        hoverContent.style.visibility = 'visible'; 
        setTimeout(() => {
            hoverContent.style.opacity = '1'; 
        }, 0); 
        activeHoverContent = hoverContent; 
    } else {
        hideAllHoverContents(); 
    }
}


timelineItems.forEach((item) => {
    item.addEventListener('click', () => {
        const hoverContent = item.querySelector('.hover-content');
        showHoverContent(hoverContent);
    });
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('.timeline-item')) {
        hideAllHoverContents();
    }
});


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;


    if (scrollTop + windowHeight >= documentHeight) {
        hideAllHoverContents(); 
    }
});


//image hover
document.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.timeline-img');
    const windowHeight = window.innerHeight;

    images.forEach((image, index) => {
        const imageTop = image.getBoundingClientRect().top;

        // Check if the image is in view
        if (imageTop < windowHeight - 100) { 
            image.classList.add('visible');

            
            setTimeout(() => {
                image.classList.add('hover');
            }, index * 30); 
        } else {
            image.classList.remove('visible', 'hover');
        }
    });
});


//content hover
document.addEventListener('scroll', function() {
    const paragraphs = document.querySelectorAll('.fade-paragraph');
    const windowHeight = window.innerHeight;

    paragraphs.forEach((paragraph, index) => {
        const paragraphTop = paragraph.getBoundingClientRect().top;

       
        if (paragraphTop < windowHeight - 100) { 
            paragraph.classList.add('visible');

            
            setTimeout(() => {
                paragraph.classList.add('hover');
            }, index * 300); 
        } else {
            paragraph.classList.remove('visible', 'hover');
        }
    });
});

//timeline
document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    const items = document.querySelectorAll('.timeline-item');

    
    const activateTimelineItems = () => {
        const triggerBottom = window.innerHeight * 0.8; 
        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add('active'); 
            } else {
                item.classList.remove('active'); 
            }
        });
    };

    
    const darkenTimelineLine = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > 100) { 
            timeline.classList.add('dark'); 
        } else {
            timeline.classList.remove('dark');
        }
    };

    
    activateTimelineItems();
    darkenTimelineLine();


    window.addEventListener('scroll', () => {
        activateTimelineItems();
        darkenTimelineLine();
    });
});


