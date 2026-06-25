"use client";

import { useState } from "react";

export default function GallerySection() {
    const images = [
        "https://i1-e.pinimg.com/736x/3c/58/69/3c586997e28a3ac7171258a5e66c2780.jpg",
        "https://i1-e.pinimg.com/736x/b3/21/1c/b3211c23a455b04d1fcfd7d467253c05.jpg",
        "https://i.pinimg.com/736x/4f/2b/ca/4f2bca76a8a63e5f687a70ba21cef369.jpg",
        "https://i1-e.pinimg.com/1200x/1e/6d/c7/1e6dc77afcbb7e06009fd66c1711d4cb.jpg",
        "https://i1-e.pinimg.com/1200x/50/80/81/508081fb497af6955a5f8bd415bbc403.jpg",
        "https://i1-e.pinimg.com/736x/3c/58/69/3c586997e28a3ac7171258a5e66c2780.jpg",
        "https://i1-e.pinimg.com/736x/b3/21/1c/b3211c23a455b04d1fcfd7d467253c05.jpg",
        "https://i.pinimg.com/736x/4f/2b/ca/4f2bca76a8a63e5f687a70ba21cef369.jpg",
        "https://i1-e.pinimg.com/1200x/1e/6d/c7/1e6dc77afcbb7e06009fd66c1711d4cb.jpg",
        "https://i1-e.pinimg.com/1200x/50/80/81/508081fb497af6955a5f8bd415bbc403.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="basis-[70%] flex flex-col items-center">
            <div className="flex justify-center items-center">
                <button>
                    left
                </button>
                <img
                    src={images[selectedImage]}
                    className="w-full aspect-square object-cover border rounded-md"
                />
                <button>
                    right
                </button>
            </div>
            <ul className="mt-2 flex gap-2">
                {images?.map((img, imgIndex) => {
                    return (
                        <li
                            key={imgIndex}
                            className="is-button w-25 aspect-square border rounded-md overflow-hidden"
                            onClick={() => setSelectedImage(imgIndex)}
                        >
                            <img
                                src={images[imgIndex]}
                                className="w-full h-full object-cover"
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}