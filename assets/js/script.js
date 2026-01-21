const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

const projectData = {
  seo: {
    title: "SEO Audit – Business Website",
    image: "./assets/images/project1.jpg",
    text: "Performed keyword research, on-page optimization, and technical SEO fixes resulting in 35% organic traffic growth."
  },
  content: {
    title: "Content Optimization Project",
    image: "./assets/images/project2.jpg",
    text: "Optimized blog content for SEO, improved readability, and increased average session duration."
  },
  social: {
    title: "Instagram Growth Campaign",
    image: "./assets/images/project3.jpg",
    text: "Planned content calendar, hashtags, and creatives, improving engagement rate by 28%."
  }
};

document.querySelectorAll(".project-list li").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.getAttribute("data-project");
    modalTitle.textContent = projectData[key].title;
    modalImage.src = projectData[key].image;
    modalText.textContent = projectData[key].text;
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
