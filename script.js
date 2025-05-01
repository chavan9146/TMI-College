function toggleMenu() {
    const nav = document.getElementById("main-nav");
    nav.classList.toggle("show");
  }

  const toggleButton = document.getElementById('mode-toggle');
  const toggleIcon = document.getElementById('toggle-icon');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleIcon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });

  function performSearch1() {
    const query = document.getElementById("searchInput1").value.trim().toLowerCase();
    const pages = {
      "html": "HTML.html",
      "css": "CSS.css",
      "javascript": "javascript-course.html"
    };
    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      alert("No results found for: " + query);
    }
  }

  function handleKey(event) {
    if (event.key === "Enter") {
      performSearch1();
    }
  }

  window.onscroll = function () {
    const topBtn = document.getElementById("topBtn");
    topBtn.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
  };

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  let player;
  let lastAllowedTime = 0;
  let checkInterval;

  const getCodeBtn = document.getElementById('get-code-btn');
  const codeSection = document.getElementById('code-section');

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '100%',
      videoId: '6JmajXnR7TY',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady() {
    checkInterval = setInterval(() => {
      const currentTime = player.getCurrentTime();
      if (currentTime - lastAllowedTime > 2) {
        player.seekTo(lastAllowedTime, true);
      } else {
        lastAllowedTime = currentTime;
      }
    }, 1000);
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      clearInterval(checkInterval);
      getCodeBtn.disabled = false;
      getCodeBtn.classList.add('active');
      getCodeBtn.style.cursor = 'pointer';
    }
  }

  getCodeBtn.addEventListener('click', () => {
    if (!getCodeBtn.disabled) {
      codeSection.style.display = 'block';
      window.scrollTo({ top: codeSection.offsetTop - 10, behavior: 'smooth' });
    }
  });

  function showCode(type) {
    const blocks = document.querySelectorAll('.code-block');
    blocks.forEach(block => block.style.display = 'none');
    document.getElementById(type).style.display = 'block';
  }
  //second code
