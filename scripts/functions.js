async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function loadHtml(id, url) {
  const contentDiv = document.getElementById(id);
  contentDiv.innerHTML = await fetchHtmlAsText(url);
}
