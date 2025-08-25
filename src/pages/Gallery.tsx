import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "Все фото", count: 24 },
    { id: "nature", name: "Природа", count: 8 },
    { id: "infrastructure", name: "Инфраструктура", count: 6 },
    { id: "plots", name: "Участки", count: 5 },
    { id: "construction", name: "Строительство", count: 5 },
  ];

  const images = [
    {
      id: 1,
      src: "/api/placeholder/400/300",
      title: "Лесная зона поселка",
      category: "nature",
    },
    {
      id: 2,
      src: "/api/placeholder/400/300",
      title: "Главная дорога",
      category: "infrastructure",
    },
    {
      id: 3,
      src: "/api/placeholder/400/300",
      title: "Участок №15",
      category: "plots",
    },
    {
      id: 4,
      src: "/api/placeholder/400/300",
      title: "Строительство дома",
      category: "construction",
    },
    {
      id: 5,
      src: "/api/placeholder/400/300",
      title: "Озеро рядом с поселком",
      category: "nature",
    },
    {
      id: 6,
      src: "/api/placeholder/400/300",
      title: "Детская площадка",
      category: "infrastructure",
    },
    {
      id: 7,
      src: "/api/placeholder/400/300",
      title: "Участок №22",
      category: "plots",
    },
    {
      id: 8,
      src: "/api/placeholder/400/300",
      title: "Готовый дом",
      category: "construction",
    },
    {
      id: 9,
      src: "/api/placeholder/400/300",
      title: "Сосновый лес",
      category: "nature",
    },
    {
      id: 10,
      src: "/api/placeholder/400/300",
      title: "Въездная группа",
      category: "infrastructure",
    },
    {
      id: 11,
      src: "/api/placeholder/400/300",
      title: "Участок №8",
      category: "plots",
    },
    {
      id: 12,
      src: "/api/placeholder/400/300",
      title: "Процесс строительства",
      category: "construction",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Галерея</h1>
            <p className="text-lg text-gray-600">
              Фотографии нашего коттеджного поселка
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative" // Добавлено relative здесь
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setLightboxImage(image.src)}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 text-sm">
                    {image.title}
                  </h3>
                </div>
                {/* Исправленный блок с абсолютным позиционированием */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          {lightboxImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={() => setLightboxImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={lightboxImage}
                  alt="Увеличенное изображение"
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <Icon name="X" size={32} />
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Виртуальная экскурсия
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center mb-4">
                <Icon
                  name="Play"
                  size={64}
                  className="mx-auto text-gray-400 mb-4"
                />
                <p className="text-gray-600 mb-4">
                  Совершите виртуальную прогулку по поселку
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Начать экскурсию
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Дрон-съемка
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center mb-4">
                <Icon
                  name="Camera"
                  size={64}
                  className="mx-auto text-gray-400 mb-4"
                />
                <p className="text-gray-600 mb-4">
                  Посмотрите на поселок с высоты птичьего полета
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Смотреть видео
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Хотите увидеть поселок лично?
                </h3>
                <p className="text-gray-600">
                  Запишитесь на бесплатную экскурсию и посмотрите участки вживую
                </p>
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors whitespace-nowrap ml-4">
                Записаться на экскурсию
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
