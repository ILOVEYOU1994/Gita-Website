document.addEventListener("DOMContentLoaded", function() {
    fetch('chapters.json')
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById("chapters-container");
        data.forEach((chapter, index) => {
            let chapterElement = document.createElement("div");
            chapterElement.classList.add("chapter-box");
            chapterElement.innerHTML = `<strong>Chapter ${index + 1}: ${chapter.name}</strong><br>${chapter.description}`;
            container.appendChild(chapterElement);
        });
    })
    .catch(error => console.error("Error loading JSON:", error));
});