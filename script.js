document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector("a");

        button.addEventListener("click", function (event) {
            event.preventDefault();
            dropdown.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if(!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });
});