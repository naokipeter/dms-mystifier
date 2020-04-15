var toggle = document.getElementById('toggle');

toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ active: toggle.checked });
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.reload(tabs[0].id);
  });
});

chrome.storage.sync.get('active', data => {
  toggle.checked = data.active || false;
});

