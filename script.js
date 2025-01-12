// You can add interactive functionality here if needed.
console.log("Sidebar loaded successfully.");

// Functionality for "Add title and description" button
document.querySelector(".btn-link").addEventListener("click", function () {
    alert("Add title and description button clicked!");
});


// Action for adding custom information
document.getElementById("addCustomInfo").addEventListener("click", function () {
    alert("Add Custom Information clicked!");
});

// Action for cancel the data
document.getElementById("cancel").addEventListener("click", function () {
    alert("Want to clear product detials ");
});

// Action for save the data
document.getElementById("save").addEventListener("click", function () {
    alert("Save product detials ");
});

