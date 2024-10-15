// Get the story id from the hidden div
const storyId = document.querySelector("#hidden-content").dataset.key;

// Get the current data for the story and assign to a variable
const currentName = document.querySelector("#name").textContent;
const currentDescription = document.querySelector("#description").textContent;
const currentWorld = document.querySelector("#world").textContent;
const currentVillain = document.querySelector("#villain").textContent;
const currentFactions = document.querySelector("#factions").textContent;
const currentLevels = document.querySelector("#levels").textContent;

// Select the inputs and assign to a variable
const editName = document.querySelector("#name-input");
const editDescription = document.querySelector("#description-input");
const editWorld = document.querySelector("#world-input");
const editVillain = document.querySelector("#villain-input");
const editFaction = document.querySelector("#faction-input");
const editLevels = document.querySelector("#levels-input");

// Make the inputs equal to the current rule data for easy editing
editName.value = currentName;
editDescription.value = currentDescription;
editWorld.value = currentWorld;
editVillain.value = currentVillain;
editFaction.value = currentFactions;
editLevels.value = currentLevels;

const handleEditStory = async (event) => {
  event.preventDefault();

  // Assign the inputed values to a variable
  const nameInput = document.querySelector("#name-input").value.trim();
  const descriptionInput = document.querySelector("#description-input").value.trim();
  const worldInput = document.querySelector("#world-input").value.trim();
  const villainInput = document.querySelector("#villain-input").value.trim();
  const factionInput = document.querySelector("#faction-input").value.trim();
  const levelsInput = document.querySelector("#levels-input").value.trim();

  // If all fields have been filled out, run this code
  if (
    nameInput &&
    descriptionInput &&
    worldInput &&
    villainInput &&
    factionInput &&
    levelsInput
  ) {
    // Send the new data to the api
    const response = await fetch(`/api/stories/${storyId}`, {
      method: "PUT",
      body: JSON.stringify({
        nameInput,
        descriptionInput,
        worldInput,
        villainInput,
        factionInput,
        levelsInput,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response if ok, reload the page
    if (response.ok) {
      location.reload();
    } else {
      alert("Failed to update story");
    }
  }
};

// Add click event
document.querySelector("#submit-edits").addEventListener("click", handleEditStory);
