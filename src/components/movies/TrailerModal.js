import React from "react";

const TrailerModal = ({ trailerKey, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        <button
          className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500 transition-colors"
          onClick={onClose}
        >
          ×
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;
