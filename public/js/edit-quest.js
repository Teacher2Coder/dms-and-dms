// Get the quest id from the hidden content div
const questId = document.querySelector("#hidden-content").dataset.key;

// Get the current data for the quest
const currentName = document.querySelector("#name").textContent;
const currentDescription = document.querySelector("#description").textContent;
const currentQuestGiver = document.querySelector("#quest-giver").textContent;
const currentLocation = document.querySelector("#location").textContent;
const currentRewards = document.querySelector("#rewards").textContent;

// Select the inputs
const editName = document.querySelector("#name-input");
const editDescription = document.querySelector("#description-input");
const editQuestGiver = document.querySelector("#quest-giver-input");
const editLocation = document.querySelector("#location-input");
const editRewards = document.querySelector("#rewards-input");

// Make the inputs equal to the current quest data for easy editing
editName.value = currentName;
editDescription.value = currentDescription;
editQuestGiver.value = currentQuestGiver;
editLocation.value = currentLocation;
editRewards.value = currentRewards;

const handleEditQuest = async (event) => {
  event.preventDefault();

  // Assign the inputs to a variable
  const nameInput = document.querySelector("#name-input").value.trim();
  const descriptionInput = document.querySelector("#description-input").value.trim();
  const questGiverInput = document.querySelector("#quest-giver-input").value.trim();
  const locationInput = document.querySelector("#location-input").value.trim();
  const rewardsInput = document.querySelector("#rewards-input").value.trim();

  if (
    nameInput &&
    descriptionInput &&
    questGiverInput &&
    locationInput &&
    rewardsInput
  ) {
    // Send the new data to the api
    const response = await fetch(`/api/quests/${questId}`, {
      method: "PUT",
      body: JSON.stringify({
        nameInput,
        descriptionInput,
        questGiverInput,
        locationInput,
        rewardsInput,
      }),
      headers: { "Content-Type": "application/json" },
    });

    // If the response is ok, reload the page
    if (response.ok) {
      location.reload();
    } else {
      alert("Failed to update quest");
    }
  }
};

document.querySelector("#submit-edits").addEventListener("click", handleEditQuest);