import React from 'react';
import '../Styles/Popup.css';

function Popup() {
  return (
      <div className="popup-overlay-warning">
        <div className="popup-warning">
          <h2>Hello! Sorry about that</h2>
          <div className="popup-content-warning">
            I am still working on my website to work on mobile
            and smaller window sizes, I'll try my best to get it working soon!
          </div>
        </div>
      </div>
  );
}

export default Popup;
