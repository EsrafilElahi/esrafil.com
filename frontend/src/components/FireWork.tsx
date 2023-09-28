import React from 'react';

function Fireworks() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" version="1.1">
      {/* Define colors for fireworks */}
      <defs>
        <radialGradient id="color1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:#FF5733;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFC300;stop-opacity:1" />
        </radialGradient>
        <radialGradient id="color2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:#581845;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#900C3F;stop-opacity:1" />
        </radialGradient>
        <radialGradient id="color3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style="stop-color:#137B80;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#48C9B0;stop-opacity:1" />
        </radialGradient>
      </defs>

      {/* Fireworks burst */}
      <circle cx="100" cy="100" r="5" fill="url(#color1)">
        <animate attributeName="r" from="5" to="30" dur="0.5s" begin="0s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="0.5s" begin="0s" repeatCount="indefinite" />
      </circle>

      <circle cx="100" cy="100" r="5" fill="url(#color2)">
        <animate attributeName="r" from="5" to="25" dur="0.6s" begin="0.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="0.6s" begin="0.2s" repeatCount="indefinite" />
      </circle>

      <circle cx="100" cy="100" r="5" fill="url(#color3)">
        <animate attributeName="r" from="5" to="35" dur="0.7s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="1" to="0" dur="0.7s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default Fireworks;
