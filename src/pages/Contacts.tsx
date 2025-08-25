import React from "react";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const Contacts = () => {
  return (
    <Layout>
      <div className="bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h1>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для получения дополнительной информации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Контактная информация
              </h2>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Телефон</p>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">info@poselok.ru</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-blue-600 mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-800">Адрес</p>
                    <p className="text-gray-600">
                      Московская область, г. Москва
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="text-blue-600 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800">Время работы</p>
                    <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Форма обратной связи
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Введите ваше сообщение"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Как добраться
            </h2>

            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Icon
                name="Map"
                size={64}
                className="mx-auto text-gray-400 mb-4"
              />
              <p className="text-gray-600 mb-4">
                Карта проезда будет доступна в ближайшее время
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                Получить маршрут
              </button>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Нужна консультация?
                </h3>
                <p className="text-gray-600">
                  Наши специалисты готовы ответить на все ваши вопросы
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap ml-4">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
