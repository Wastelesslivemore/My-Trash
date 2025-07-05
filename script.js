let selectedRole = "";
let pickups = [];
let rewardPoints = 0;
let tips = [
  "Rinse containers before recycling.",
  "Compost kitchen scraps for your garden.",
  "Use cloth bags instead of plastic.",
  "Separate hazardous waste safely."
];

function selectRole(role) {
  selectedRole = role;
  document.getElementById("authSection").style.display = "block";
  document.getElementById("roleLabel").innerText = Login as ${role === 'giver' ? 'Waste Giver' : 'Collector'};
}

function register() {
  document.getElementById("authMessage").innerText = "Registered successfully!";
}

function login() {
  document.getElementById("authMessage").innerText = "Login successful!";
  if (selectedRole === 'giver') {
    document.getElementById("giverDashboard").style.display = "block";
  } else {
    document.getElementById("collectorDashboard").style.display = "block";
  }
  document.getElementById("login-section").style.display = "none";
}

function schedulePickup() {
  const address = document.getElementById("address").value;
  const date = document.getElementById("pickupDate").value;
  const type = document.getElementById("wasteType").value;
  const pickupInfo = ${date}: ${type} at ${address};
  pickups.push(pickupInfo);
  document.getElementById("giverMessage").innerText = "Pickup scheduled!";
  document.getElementById("giverPickups").innerHTML += <li>${pickupInfo}</li>;
  document.getElementById("pickupList").innerHTML += <li>${pickupInfo}</li>;
}

function submitCompost() {
  const log = document.getElementById("compostLog").value;
  const image = document.getElementById("compostImage").files[0];
  if (log && image) {
    rewardPoints += 10;
    document.getElementById("rewardPoints").innerText = rewardPoints;
    document.getElementById("compostMessage").innerText = "Compost submitted. Points awarded!";
  } else {
    document.getElementById("compostMessage").innerText = "Please enter log and image.";
  }
}

function classifyWaste() {
  const file = document.getElementById("wasteImage").files[0];
  if (file) {
    document.getElementById("classificationResult").innerText = "Waste classified as: Organic (example)";
  }
}

function verifyWasteImage() {
  const file = document.getElementById("verifyImage").files[0];
  if (file) {
    document.getElementById("verificationResult").innerText = "Image verified successfully!";
  }
}

function showNewTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tipText").innerText = randomTip;
}

function scheduleReminder() {
  const time = document.getElementById("reminderTime").value;
  alert(Reminder set for: ${time});
}

function redeemPoints(amount) {
  if (rewardPoints >= amount) {
    rewardPoints -= amount;
    document.getElementById("rewardPoints").innerText = rewardPoints;
    document.getElementById("redeemMessage").innerText = You redeemed ₹${amount} voucher!;
  } else {
    document.getElementById("redeemMessage").innerText = "Not enough points!";
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById("gpsLocation").innerText = Latitude: ${lat}, Longitude: ${lon};
    });
  } else {
    document.getElementById("gpsLocation").innerText = "Geolocation not supported.";
  }
}