(function(){
  document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('cookieConsent')) return;

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <h2>This website uses cookies</h2>
      <p>We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.</p>
      <div class="cookie-buttons">
        <button class="cookie-accept">Allow</button>
        <button class="cookie-deny">Deny</button>
      </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .cookie-banner {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        padding: 1.5rem;
        background: rgba(8, 20, 29, 0.9);
        color: #ffd700;
        border-radius: 12px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        font-size: 1.1rem;
        animation: float 3s ease-in-out infinite alternate;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
      }
      .cookie-banner.visible {
        opacity: 1;
      }
      .cookie-banner h2 {
        margin: 0;
        font-size: 1.4rem;
      }
      .cookie-banner .cookie-buttons {
        display: flex;
        gap: 0.5rem;
      }
      .cookie-banner button {
        background: transparent;
        border: 2px solid #ffd700;
        color: #ffd700;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        cursor: pointer;
      }
      .cookie-banner button:hover {
        background: #ffd700;
        color: #001a33;
      }
      @keyframes float {
        from { transform: translateY(0); }
        to { transform: translateY(-10px); }
      }
    `;
    document.head.appendChild(style);
    setTimeout(function(){
      document.body.appendChild(banner);
      requestAnimationFrame(function(){
        banner.classList.add('visible');
      });
    }, 1000);

    banner.querySelector('.cookie-accept').addEventListener('click', function(){
      localStorage.setItem('cookieConsent', 'accepted');
      banner.remove();
    });
    banner.querySelector('.cookie-deny').addEventListener('click', function(){
      localStorage.setItem('cookieConsent', 'denied');
      banner.remove();
    });
  });
})();
