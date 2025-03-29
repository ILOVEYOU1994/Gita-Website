document.addEventListener("DOMContentLoaded", function () {
    fetch("chapters.json")
        .then(response => response.json())
        .then(data => {
            const urlParams = new URLSearchParams(window.location.search);
            const chapterNumber = parseInt(urlParams.get("chapter")) || 1;

            const chapter = data.chapters.find(ch => ch.number === chapterNumber);

            if (chapter) {
                document.getElementById("chapter-number").innerText = `Chapter ${chapter.number}`;
                document.getElementById("chapter-name").innerText = chapter.name;
                document.getElementById("chapter-description").innerText = chapter.description;

                let versesHTML = "";
                chapter.verses.forEach(verse => {
                    versesHTML += `
                        <div class="verse">
                            <h3>Verse ${verse.number}</h3>
                            <p><strong>Sanskrit:</strong> ${verse.sanskrit}</p>
                            <p><strong>English:</strong> ${verse.english}</p>
                            <p><strong>Hindi:</strong> ${verse.hindi}</p>
                            <p><strong>Marathi:</strong> ${verse.marathi}</p>
                        </div>
                    `;
                });

                document.getElementById("verses-container").innerHTML = versesHTML;

                // Set Previous and Next Chapter Links
                document.getElementById("prev-chapter").href = chapterNumber > 1 ? `gita.html?chapter=${chapterNumber - 1}` : "index.html";
                document.getElementById("next-chapter").href = chapterNumber < data.chapters.length ? `gita.html?chapter=${chapterNumber + 1}` : "index.html";
            } else {
                document.getElementById("chapter-number").innerText = "Chapter Not Found";
            }
        })
        .catch(error => console.error("Error loading data:", error));
});