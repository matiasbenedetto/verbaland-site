"use client"

/**
 * AnimatedHeroBackground
 * Pure CSS animated gradient, overlay, and waves for hero sections.
 * Usage: Place as first child of a relative container, e.g. <div className="relative"><AnimatedHeroBackground /> ...</div>
 */
export default function AnimatedHeroBackground() {
  return (
    <>
      <div className="absolute inset-0 z-0 hero-bg-gradient" />
      <div className="absolute inset-0 z-0 opacity-60 hero-bg-overlay" />
      <div className="absolute inset-0 z-0 opacity-30 hero-bg-waves" />
      <style jsx>{`
        .hero-bg-gradient {
          animation: heroGradientMove 20s linear infinite;
          background:
            radial-gradient(circle at 40% 30%, rgba(255,0,128,1), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(120,0,255,1), transparent 40%),
            radial-gradient(circle at 30% 90%, rgba(0,200,255,1), transparent 40%),
            radial-gradient(circle at 90% 30%, rgba(255,100,0,1), transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(0,255,100,1), transparent 60%);
          background-size: 200% 200%;
          background-position: 50% 50%;
        }
        @keyframes heroGradientMove {
          0% {
            background-position:
              40% 30%, 80% 70%, 30% 90%, 90% 30%, 50% 50%;
          }
          25% {
            background-position:
              50% 40%, 70% 60%, 40% 80%, 80% 40%, 60% 60%;
          }
          50% {
            background-position:
              60% 50%, 60% 50%, 50% 70%, 70% 50%, 40% 40%;
          }
          75% {
            background-position:
              30% 60%, 90% 30%, 60% 40%, 40% 90%, 60% 60%;
          }
          100% {
            background-position:
              40% 30%, 80% 70%, 30% 90%, 90% 30%, 50% 50%;
          }
        }
        .hero-bg-overlay {
          animation: heroOverlaySweep 20s linear infinite;
          background: linear-gradient(270deg,
            rgba(255,0,200,0.9),
            rgba(120,0,255,0.9),
            rgba(0,200,255,0.9),
            rgba(0,255,100,0.9),
            rgba(255,100,0,0.9)
          );
          background-size: 400% 400%;
          background-position: 0% 100%;
          mix-blend-mode: saturation;
          opacity: 0.6;
        }
        @keyframes heroOverlaySweep {
          0% {
            background-position: 0% 100%;
          }
          50% {
            background-position: 100% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }
        .hero-bg-waves {
          animation: heroWavesMove 20s linear infinite;
          background:
            linear-gradient(to right, transparent, rgba(255,255,255,0.18) 60%, transparent),
            linear-gradient(to bottom, transparent, rgba(255,255,255,0.18) 60%, transparent);
          background-size: 200% 200%;
          background-position: 50% 50%;
        }
        @keyframes heroWavesMove {
          0% {
            background-position: 45% 55%, 55% 45%;
          }
          50% {
            background-position: 55% 45%, 45% 55%;
          }
          100% {
            background-position: 45% 55%, 55% 45%;
          }
        }
      `}</style>
    </>
  );
}
