<script>
  const searchInput = document.getElementById("search");
  const suggestionsBox = document.getElementById("suggestions");

  const examples = [
    "HTML CSS tutorial",
    "JavaScript for beginners",
    "Google style homepage",
    "GitHub projects",
    "ChatGPT AI"
  ];

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (!value) {
      suggestionsBox.style.display = "none";
      return;
    }

    const matches = examples.filter(item =>
      item.toLowerCase().includes(value)
    );

    matches.forEach(item => {
      const div = document.createElement("div");
      div.className = "suggestion-item";
      div.textContent = item;
      div.onclick = () => {
        searchInput.value = item;
        suggestionsBox.style.display = "none";
      };
      suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = matches.length ? "block" : "none";
  });

  searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href =
          "https://www.google.com/search?q=" + encodeURIComponent(query);
      }
    }
  });

  function go(url) {
    window.location.href = url;
  }
</script>
