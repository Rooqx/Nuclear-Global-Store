const NuclearLoading = () => {
  return (
    <div className="fixed top-0 flex flex-col items-center justify-center h-screen font-mono bg-gradient-to-br from-gray-900 to-gray-800 text-cyan-400 z-[20] right-0 w-full">
      {/* Animated orbits */}
      <div className="relative w-40 h-40 mb-8">
        {[1, 2, 3].map((orbit) => (
          <div
            key={orbit}
            className={`absolute border border-dashed border-opacity-60 border-cyan-400 rounded-full animate-spin ${
              orbit === 1
                ? "w-full h-full"
                : orbit === 2
                  ? "w-3/4 h-3/4 top-1/8 left-1/8 animate-reverse-spin"
                  : "w-2/5 h-2/5 top-3/10 left-3/10"
            }`}
            style={{ animationDuration: `${20 / orbit}s` }}
          />
        ))}

        {/* Pulsing center */}
        <div className="absolute w-5 h-5 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-cyan-400 shadow-glow animate-pulse" />
      </div>

      {/* Text with cursor */}
      <h1 className="w-full mb-4 text-2xl font-bold tracking-wider text-center uppercase sm:text-3xl">
        Nuclear Global Link Limited
        <span className="animate-blink">|</span>
      </h1>

      {/* Connection status */}
      <p className="w-full text-sm text-center opacity-80">
        Establishing secure connection<span className="animate-dots"></span>
      </p>
    </div>
  );
};

export default NuclearLoading;
