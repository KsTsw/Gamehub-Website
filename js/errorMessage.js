export function createMessage(type = "error", message = "An error has occured.")
{  
const html = `<div class="message ${type}">${message}</div>`;
return html;
  }