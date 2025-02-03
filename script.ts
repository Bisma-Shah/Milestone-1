document.getElementById("toggleSkills")?.addEventListener("click", () => {
  const skillsSection = document.getElementById("skillsSection");

  if (skillsSection?.style.display === "none") {
    skillsSection.style.display = "block";
    document.getElementById("toggleSkills")!.textContent = "Hide Skills";
  } else {
    skillsSection!.style.display = "none";
    document.getElementById("toggleSkills")!.textContent = "Show Skills";
  }
});
