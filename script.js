document.addEventListener("DOMContentLoaded", function() {
    fetch('chapters.json')
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById("chapters-container");
        data.forEach((chapter, index) => {
            let chapterElement = document.createElement("div");
            chapterElement.classList.add("chapter-box");
            chapterElement.innerHTML = `<strong>Chapter ${index + 1}: ${chapter.name}</strong><br>${chapter.description}`;
            chapterElement.addEventListener("click", function() {
                window.location.href = `chapters/chapter${index + 1}_index.html`;
            });
            container.appendChild(chapterElement);
        });
    })
    .catch(error => console.error("Error loading JSON:", error));
});