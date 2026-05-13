(function () {

    const boot = document.getElementById("boot");
    const text = document.getElementById("bootText");
  
    if(!boot) return;
  
    if(window.name === "bootPlayed"){
      boot.remove();
      return;
    }
  
    window.name = "bootPlayed";
    boot.style.display = "flex";
  
    const pageMessages = {
        "/spenfeld.github.io/"            : "ENTERING SESSION...",
        "/spenfeld.github.io/index.html"  : "ENTERING SESSION...",
        "/spenfeld.github.io/archive.html": "ENTERING ARCHIVE...",
        "/spenfeld.github.io/profile.html": "ENTERING PROFILE...",
        "/spenfeld.github.io/arcade.html" : "ENTERING ARCADE..."
    };
  
    const last = pageMessages[location.pathname] || "INITIATING SESSION...";
  
    const messages = [
      "LAUNCHING PORTFOLIO...",
      "LOADING UI MODULES...",
      last
    ];
  
    window.addEventListener("load", ()=>{
  
      let i = 0;
  
      const interval = setInterval(()=>{
        i++;
        if(i < messages.length){
          text.textContent = messages[i];
        }
      }, 600);
  
      setTimeout(()=>{
        clearInterval(interval);
        boot.style.opacity = "0";
        boot.style.transition = "opacity 0.8s ease";
        setTimeout(()=>{ boot.remove(); }, 800);
      }, 1800 + 800);
  
    });
  
  })();