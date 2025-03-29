document.addEventListener("DOMContentLoaded", function () {
    fetch("./chapters.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("chapters-container");
            data.chapters.forEach(chapter => {
                let div = document.createElement("div");
                div.className = "chapter";
                div.innerHTML = `<h2>${chapter.name}</h2><p>${chapter.description}</p>`;
                container.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
