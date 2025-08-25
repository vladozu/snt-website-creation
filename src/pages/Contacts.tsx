import React from 'react';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Контакты
          </h1>
          <p className="text-lg text-gray-600">
            Свяжитесь с нами для получения подробной информации
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Контактная информация
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Адрес</h3>
                  <p className="text-gray-600">
                    Московская область, Одинцовский район<br />
                    Коттеджный поселок "Лесная Сказка"
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (926) 987-65-43</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@lesnayaskazka.ru</p>
                  <p className="text-gray-600">sales@lesnayaskazka.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Режим работы</h3>
                  <p className="text-gray-600">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб-Вс: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <Icon name="Facebook" size={20} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                  <Icon name="Twitter" size={20} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors">
                  <Icon name="Instagram" size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Форма обратной связи
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Тема
                </label>
                <select
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Выберите тему</option>
                  <option value="plot">Покупка участка</option>
                  <option value="viewing">Запись на просмотр</option>
                  <option value="info">Общие вопросы</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ваше сообщение..."
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

        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Как добраться
          </h2>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <Icon name="MapPin" size={64} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-4">
              Интерактивная карта с маршрутом будет доступна в ближайшее время
            </p>
            <p className="text-sm text-gray-500">
              Поселок находится в 25 км от МКАД по Рублево-Успенскому шоссе
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;