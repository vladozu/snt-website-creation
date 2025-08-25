import React from 'react';
import Icon from '@/components/ui/icon';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "Новые участки в продаже",
      date: "15 августа 2024",
      category: "Продажа",
      content: "В продажу поступили новые участки в восточной части поселка. Размер участков от 600 до 1200 м². Все коммуникации подведены.",
      important: true
    },
    {
      id: 2,
      title: "Скидки до конца месяца",
      date: "10 августа 2024",
      category: "Акция",
      content: "Специальные условия покупки до 31 августа. Скидка 5% при полной оплате и дополнительные бонусы для покупателей.",
      important: true
    },
    {
      id: 3,
      title: "Завершение строительства дороги",
      date: "5 августа 2024",
      category: "Инфраструктура",
      content: "Завершены работы по асфальтированию главной дороги поселка. Теперь доступ к участкам еще более комфортный в любую погоду.",
      important: false
    },
    {
      id: 4,
      title: "День открытых дверей",
      date: "1 августа 2024",
      category: "Мероприятие",
      content: "28 августа состоится день открытых дверей. Приглашаем всех желающих познакомиться с поселком, посмотреть участки и задать вопросы.",
      important: false
    },
    {
      id: 5,
      title: "Подключение газа",
      date: "25 июля 2024",
      category: "Коммуникации",
      content: "Начались работы по подключению природного газа к участкам второй очереди. Ориентировочный срок завершения - октябрь 2024.",
      important: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Продажа': return 'text-green-600 bg-green-100';
      case 'Акция': return 'text-red-600 bg-red-100';
      case 'Инфраструктура': return 'text-blue-600 bg-blue-100';
      case 'Мероприятие': return 'text-purple-600 bg-purple-100';
      case 'Коммуникации': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Продажа': return 'ShoppingCart';
      case 'Акция': return 'Percent';
      case 'Инфраструктура': return 'Building';
      case 'Мероприятие': return 'Calendar';
      case 'Коммуникации': return 'Zap';
      default: return 'Info';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Объявления
          </h1>
          <p className="text-lg text-gray-600">
            Актуальные новости и объявления поселка
          </p>
        </div>

        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                announcement.important ? 'border-l-4 border-red-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    {announcement.important && (
                      <Icon name="AlertCircle" size={24} className="text-red-500 mt-1" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(announcement.category)}`}>
                          <Icon 
                            name={getCategoryIcon(announcement.category) as any} 
                            size={12} 
                            className="mr-1" 
                          />
                          {announcement.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {announcement.date}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-3">
                        {announcement.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {announcement.content}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    Подробнее
                  </button>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                      <Icon name="Share2" size={16} />
                      <span>Поделиться</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Подписаться на новости
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Введите ваш email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium whitespace-nowrap">
              Подписаться
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Получайте уведомления о новых участках, акциях и событиях поселка
          </p>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="flex items-center space-x-4">
            <Icon name="Bell" size={32} className="text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Важные уведомления
              </h3>
              <p className="text-gray-600">
                Следите за важными объявлениями, отмеченными красным индикатором
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;