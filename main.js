document.addEventListener("DOMContentLoaded", function() {
    const sorts = document.querySelectorAll(".sorts");

    sorts.forEach((sort, index) => {
        sort.style.opacity = 0;
        sort.style.transform = "translateY(50px)";
        sort.style.transition = `opacity 0.6s ease-out ${index * 0.3}s, transform 0.6s ease-out ${index * 0.3}s`;
    });

    window.addEventListener("scroll", function() {
        sorts.forEach((sort) => {
            const rect = sort.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                sort.style.opacity = 1;
                sort.style.transform = "translateY(0)";
            }
        });
    });
});

// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var btn = document.getElementById("openModal");

// Get close button
var span = document.getElementsByClassName("close")[0];

// Open modal on button click
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on close button click
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
