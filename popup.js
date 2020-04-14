var toggle = document.getElementById('toggle');

toggle.addEventListener("change", () => {
  chrome.storage.sync.set({ active: toggle.checked });
});

chrome.storage.sync.get('active', function(data) {
  toggle.checked = data.active || false;
});

