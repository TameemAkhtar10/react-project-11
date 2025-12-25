import React, { useState } from "react";

const App = () => {
  const [images, setImages] = useState([
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1027/600/400",
    "https://picsum.photos/id/1033/600/400",
    "https://picsum.photos/id/1035/600/400",
    "https://picsum.photos/id/1040/600/400",
    "https://picsum.photos/id/1043/600/400",
    "https://picsum.photos/id/1050/600/400",
  ]);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`img-${index}`}
          className="rounded-lg"
        />
      ))}
    </div>
  );
};

export default App;
