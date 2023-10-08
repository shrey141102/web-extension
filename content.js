// This script will be injected into web pages to modify their content.
// You can customize this script to change web page behavior.

// Example: Change all links to open in a new tab.
const links = document.querySelectorAll('a');
for (const link of links) {
  link.setAttribute('target', '_blank');
}
