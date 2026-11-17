function handleScroll() {
    const revealElements = document.querySelectorAll(".reveal");
    const revealPoint = window.innerHeight - 100;

    revealElements.forEach((element) => {
        if (element.getBoundingClientRect().top < revealPoint) {
            element.classList.add("active");

            element.querySelectorAll(".progress-line").forEach((progressLine) => {
                const bar = progressLine.querySelector("span");
                const targetWidth = progressLine.getAttribute("data-width");

                if (bar && targetWidth) {
                    bar.style.width = targetWidth;
                }
            });
        }
    });
}

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3")?.textContent ?? "Proje";
        const description = card.querySelector("p")?.textContent ?? "";

        modalTitle.textContent = title;
        modalDesc.textContent =
            `${description} Bu proje modern web teknikleriyle geliştirilmiştir.`;

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
    });
});

function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);