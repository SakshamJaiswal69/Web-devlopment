// ================= BUTTON INTERACTION =================
const orderBtn = document.querySelector("button");

orderBtn.addEventListener("click", () => {
    orderBtn.innerText = "Redirecting to App...";
    orderBtn.style.backgroundColor = "#b91c1c";

    // simple pulse animation
    orderBtn.animate(
        [
            { transform: "scale(1)" },
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ],
        {
            duration: 500,
            iterations: 2
        }
    );
});

// ================= SCROLL EFFECT (HEADER SHADOW) =================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 10) {
        header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
    }
});
