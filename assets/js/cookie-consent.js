(function(){
  document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('cookieConsent')) return;

    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <p>We use cookies to improve your experience. Do you accept?</p>
      <div class="cookie-buttons">
        <button class="cookie-accept">Accept</button>
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
        padding: 1rem;
        background: #001a33;
        color: #ffd700;
        border-radius: 8px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        text-align: center;
        box-shadow: 0 2px 6px rgba(0,0,0,0.4);
      }
      .cookie-banner .cookie-buttons {
        display: flex;
        gap: 0.5rem;
      }
      .cookie-banner button {
        background: transparent;
        border: 2px solid #ffd700;
        color: #ffd700;
        padding: 0.4rem 0.8rem;
        border-radius: 4px;
        cursor: pointer;
      }
      .cookie-banner button:hover {
        background: #ffd700;
        color: #001a33;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(banner);

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
