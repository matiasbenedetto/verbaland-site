export default function TestPage() {
    return (
        <>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
            }
        
            .hero {
              position: relative;
              height: 100vh;
              overflow: hidden;
            }
        
            .layer {
              position: absolute;
              inset: 0;
              z-index: 0;
            }
        
            .gradient-radials {
              background: 
                radial-gradient(circle at 30% 20%, rgba(255, 0, 128, 0.8), transparent 40%),
                radial-gradient(circle at 70% 60%, rgba(120, 0, 255, 0.8), transparent 40%),
                radial-gradient(circle at 20% 80%, rgba(0, 200, 255, 0.8), transparent 40%),
                radial-gradient(circle at 80% 20%, rgba(255, 100, 0, 0.8), transparent 40%),
                radial-gradient(circle at 50% 50%, rgba(0, 255, 200, 0.6), transparent 60%);
              background-size: 200% 200%;
              animation: moveRadials 20s infinite linear;
            }
        
            .color-overlay {
              opacity: 0.4;
              mix-blend-mode: color-burn;
              background: linear-gradient(
                0deg,
                rgba(255, 0, 200, 0.7),
                rgba(120, 0, 255, 0.7),
                rgba(0, 200, 255, 0.7),
                rgba(0, 255, 100, 0.7),
                rgba(255, 100, 0, 0.7)
              );
              background-size: 400% 400%;
              animation: gradientShift 20s infinite linear;
            }
        
            .wave-overlay {
              opacity: 0.3;
              background: 
                linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1) 50%, transparent),
                linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1) 50%, transparent);
              background-size: 200% 200%;
              animation: waveMotion 20s infinite ease-in-out;
            }
        
            @keyframes moveRadials {
              0% {
                background-position: 0% 0%;
              }
              100% {
                background-position: 100% 100%;
              }
            }
        
            @keyframes gradientShift {
              0% {
                background-position: 0% 100%;
              }
              100% {
                background-position: 100% 0%;
              }
            }
        
            @keyframes waveMotion {
              0%, 100% {
                background-position: 40% 60%;
              }
              50% {
                background-position: 60% 40%;
              }
            }
          </style>
        </head>
        <body>
          <div class="hero">
            <div class="layer gradient-radials"></div>
            <div class="layer color-overlay"></div>
            <div class="layer wave-overlay"></div>
          </div>
        </body>
        </>
    )
}