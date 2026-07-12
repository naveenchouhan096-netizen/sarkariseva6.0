// Step 1: Dynamic District Loader on State Change
function loadDistricts() {
  const stateSelect = document.getElementById('stateSelect');
  const districtSelect = document.getElementById('districtSelect');
  const selectedState = stateSelect.value;

  // Clear previous options
  districtSelect.innerHTML = '<option value="">-- Select District --</option>';

  if (selectedState && districtData[selectedState]) {
    districtSelect.disabled = false;
    districtData[selectedState].forEach(district => {
      const option = document.createElement('option');
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  } else {
    districtSelect.disabled = true;
    districtSelect.innerHTML = '<option value="">-- First Select State --</option>';
  }
}

// Step 2: Filter Local Services according to State + District + Category
function filterLocalServices() {
  const selectedState = document.getElementById('stateSelect').value;
  const selectedDistrict = document.getElementById('districtSelect').value;
  const selectedCategory = document.getElementById('serviceTypeSelect').value;
  const grid = document.getElementById('stateServicesGrid');

  grid.innerHTML = "";

  if (!selectedState || !selectedDistrict || !selectedCategory) {
    grid.innerHTML = `
      <p style="color: #e74c3c; grid-column: 1/-1; text-align: center; padding: 20px; font-weight: 600;">
        ⚠️ Please select all 3 options: State, District, and Service Category.
      </p>`;
    return;
  }

  // Matching algorithm from database.js
  const matches = localServicesDatabase.filter(item => 
    item.state === selectedState && 
    item.district === selectedDistrict && 
    item.category === selectedCategory
  );

  if (matches.length === 0) {
    grid.innerHTML = `
      <p style="color: #555; grid-column: 1/-1; text-align: center; padding: 20px;">
        No specific direct online portal mapped for <strong>${selectedDistrict} (${selectedCategory})</strong> currently. Try visiting official district portal: 
        <a href="https://${selectedDistrict.toLowerCase()}.nic.in" target="_blank">https://${selectedDistrict.toLowerCase()}.nic.in</a>
      </p>`;
    return;
  }

  // Display Cards
  matches.forEach(item => {
    grid.innerHTML += `
      <div class="card" onclick="window.open('${item.link}', '_blank')" style="background-color: ${item.color};">
        <div class="card-icon"><i class="fa-solid ${item.icon}"></i></div>
        <div class="card-info">
          <h4>${item.title}</h4>
          <p class="tag"><i class="fa-solid fa-location-dot"></i> ${item.district}, ${item.state.toUpperCase()}</p>
          <p>${item.desc}</p>
        </div>
      </div>`;
  });
}