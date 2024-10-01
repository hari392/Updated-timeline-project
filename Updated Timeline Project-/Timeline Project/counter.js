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
