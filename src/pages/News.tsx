import React, { useState } from 'react';
import { Plus, Calendar, User, Eye } from 'lucide-react';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  views: number;
  excerpt: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'Итоги весенней уборки территории',
      content: 'В минувшие выходные прошла традиционная весенняя уборка территории СНТ. Благодарим всех участников за активную помощь в облагораживании нашего товарищества. Было убрано более 50 мешков мусора, подстрижена трава, обрезаны кустарники.',
      author: 'Администрация СНТ',
      publishDate: '2024-04-15',
      views: 47,
      excerpt: 'В минувшие выходные прошла традиционная весенняя уборка территории СНТ...'
    },
    {
      id: '2',
      title: 'Изменения в графике подачи воды',
      content: 'Уважаемые садоводы! Информируем о временных изменениях в графике подачи воды в связи с плановыми ремонтными работами на насосной станции. С 20 по 25 апреля подача воды будет осуществляться с 6:00 до 10:00 и с 18:00 до 22:00.',
      author: 'Председатель правления',
      publishDate: '2024-04-18',
      views: 89,
      excerpt: 'Информируем о временных изменениях в графике подачи воды...'
    },
    {
      id: '3',
      title: 'Приглашение на общее собрание',
      content: 'Уважаемые члены СНТ "Лесная сказка"! Приглашаем вас на очередное общее собрание, которое состоится 5 мая 2024 года в 10:00 в помещении правления. На повестке дня: утверждение сметы расходов, выборы казначея, вопросы благоустройства территории.',
      author: 'Секретарь правления',
      publishDate: '2024-04-20',
      views: 156,
      excerpt: 'Приглашаем вас на очередное общее собрание, которое состоится 5 мая...'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
    author: '',
    excerpt: ''
  });

  const handleAddNews = () => {
    if (newNews.title && newNews.content && newNews.author) {
      const newsItem: NewsItem = {
        id: Date.now().toString(),
        title: newNews.title,
        content: newNews.content,
        author: newNews.author,
        publishDate: new Date().toISOString().split('T')[0],
        views: 0,
        excerpt: newNews.excerpt || newNews.content.substring(0, 100) + '...'
      };
      setNews([newsItem, ...news]);
      setNewNews({ title: '', content: '', author: '', excerpt: '' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Новости
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Актуальные события и объявления СНТ "Лесная сказка"
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Все новости</h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Icon name="Plus" size={20} />
                Добавить новость
              </button>
            </div>

            {showAddForm && (
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Новая новость</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Заголовок
                    </label>
                    <input
                      type="text"
                      value={newNews.title}
                      onChange={(e) => setNewNews({...newNews, title: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Введите заголовок новости"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Автор
                    </label>
                    <input
                      type="text"
                      value={newNews.author}
                      onChange={(e) => setNewNews({...newNews, author: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Имя автора или должность"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Краткое описание
                    </label>
                    <input
                      type="text"
                      value={newNews.excerpt}
                      onChange={(e) => setNewNews({...newNews, excerpt: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Краткое описание (необязательно)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Текст новости
                    </label>
                    <textarea
                      value={newNews.content}
                      onChange={(e) => setNewNews({...newNews, content: e.target.value})}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Полный текст новости"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddNews}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Опубликовать
                    </button>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Отмена
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <header className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Icon name="User" size={16} />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} />
                        <span>{new Date(item.publishDate).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={16} />
                        <span>{item.views} просмотров</span>
                      </div>
                    </div>
                  </header>
                  
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">{item.excerpt}</p>
                    {item.content !== item.excerpt && (
                      <div className="prose max-w-none">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}