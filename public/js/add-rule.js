const handleAddRule = async (event) => {
  event.preventDefault();

  // Get the inputs and assign them to a variable
  const titleInput = document.querySelector("#name-input").value.trim();
  const descriptionInput = document.querySelector("#description-input").value.trim();

  // If both fields are fille dout, run this code
  if (titleInput && descriptionInput) {
    // Send the inputs to the api
    const response = await fetch("/api/rules", {
      method: "POST",
      body: JSON.stringify({
        titleInput,
        descriptionInput,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is ok, reload the page
    if (response.ok) {
      location.reload();
    } else {
      alert("Failed to create new rule!");
    }
  } else {
    alert("All fields must be filled out");
  }
};

// Add click event
document.querySelector("#submit-rule").addEventListener("click", handleAddRule);
