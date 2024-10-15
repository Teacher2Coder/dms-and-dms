// Select the values in the hidden div
const category = document.querySelector("#hidden-content").dataset.for;
const pKey = document.querySelector("#hidden-content").dataset.key;

const handleDeleteContent = async (event) => {
  event.preventDefault();

  // Send the delete request to the api according to the hidden values
  const response = await fetch(`/api/${category}/${pKey}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  // If the response if ok, go back to the category's page
  if (response.ok) {
    location.replace(`/${category}`);
  } else {
    alert("Failed to delete");
  }
};

// Add click event
document.querySelector("#confirm").addEventListener("click", handleDeleteContent);
