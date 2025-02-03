// TypeScript for toggling the visibility of the Skills section
var _a;
(_a = document.getElementById("toggleSkills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsSection = document.getElementById("skillsSection");
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "none") {
        skillsSection.style.display = "block";
        document.getElementById("toggleSkills").textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        document.getElementById("toggleSkills").textContent = "Show Skills";
    }
});
