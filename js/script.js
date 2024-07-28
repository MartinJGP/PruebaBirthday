// Obtén el modal
var modal = document.getElementById("videoModal");

// Obtén el botón que abre el modal
var btn = document.getElementById("openVideo");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

var video = document.getElementById("videoPlayer");
// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
    video.play();
    modal.style.display = "block";
}



modal.onclick = function() {
        modal.style.display = "none";
        video.pause();

}

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".wrap1 .container .service img");
    const modal = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalImage = document.createElement("img");

    modal.classList.add("image-modal");
    modalContent.classList.add("modal-content");
    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    images.forEach(image => {
        image.addEventListener("click", () => {
            modalImage.src = image.src;
            modal.style.display = "block";
            modalImage.style.marginTop = `${(window.innerHeight - modalImage.height) / 2}px`;

        });
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            modal.classList.remove("fade-in");
        }
    });
});