chrome.storage.sync.get('active', function(data) {
  if (data.active) {
    document.querySelectorAll('.field-name:not(.form-row)').forEach(name => {
      name.innerText = 'John Doe';
    });
    document.querySelectorAll('.field-primary_email:not(.form-row), td.field-email').forEach(email => {
      email.innerText = 'john@doe.com';
    });

    document.querySelectorAll('.field-name.form-row input').forEach(name => {
      name.type = "hidden";
      span = document.createElement("span");
      span.style.lineHeight = 2.3;
      span.innerHTML = "John Doe";
      name.parentNode.append(span);
    });
    document.querySelectorAll('.form-row.field-primary_email input, .form-row.field-email input').forEach(email => {
      email.type = "hidden";
      span = document.createElement("span");
      span.style.lineHeight = 2.3
      span.innerHTML = "john@doe.com";
      email.parentNode.append(span);
    });
  }
});
