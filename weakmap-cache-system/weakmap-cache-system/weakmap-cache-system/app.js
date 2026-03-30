// Create WeakMap cache
const cache = new WeakMap();

// Multiple user objects
const user1 = {
  firstName: "Anjali",
  lastName: "More",
  role: "Frontend Developer"
};

const user2 = {
  firstName: "Rahul",
  lastName: "Sharma",
  role: "Backend Developer"
};

const user3 = {
  firstName: "Priya",
  lastName: "Patil",
  role: "UI Designer"
};

const historyList = document.getElementById("history");

// Function to render history
function addToHistory(message) {
  const li = document.createElement("li");
  li.textContent = message;
  historyList.appendChild(li);
}

// Cache function
function getUserData(userObj) {
  if (cache.has(userObj)) {
    const cachedData = cache.get(userObj);
    return `Fetched from cache: ${cachedData.fullName}`;
  }

  const data = {
    fullName: `${userObj.firstName} ${userObj.lastName}`,
    role: userObj.role
  };

  cache.set(userObj, data);

  return `Stored in cache: ${data.fullName}`;
}

// Button events
document.getElementById("user1Btn").addEventListener("click", function () {
  const result = getUserData(user1);
  document.getElementById("output").innerText = result;
  addToHistory(result);
});

document.getElementById("user2Btn").addEventListener("click", function () {
  const result = getUserData(user2);
  document.getElementById("output").innerText = result;
  addToHistory(result);
});

document.getElementById("user3Btn").addEventListener("click", function () {
  const result = getUserData(user3);
  document.getElementById("output").innerText = result;
  addToHistory(result);
});
