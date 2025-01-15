function startJourney() {
    const loveName = document.getElementById("love-name").value.trim();
    if (loveName) {
        if (loveName.toLowerCase() !== "gul-e-fatima") {
            alert("Man, are you serious that it's your mangetar's name?");
        } else {
            document.getElementById("name-section").style.display = "none";
            document.getElementById("story-section").style.display = "block";
            document.getElementById("story-section").innerHTML = document.getElementById("story-section").innerHTML.replace('My Love', loveName);
            calculateDays();
        }
    } else {
        alert("Please enter a name!");
    }
}

function calculateDays() {
    const engagementDate = new Date('2024-04-13');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - engagementDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    document.getElementById("days-count").textContent = diffDays;
}

function showSurprise() {
    document.getElementById("surprise-message").style.display = "block";
}

window.onload = function() {
    calculateDays();
};