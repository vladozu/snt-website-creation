import React from 'react';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold">СНТ "Лесная сказка"</h1>
                <p className="text-sm opacity-90">Садоводческое некоммерческое товарищество</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm opacity-90">Связаться с нами:</div>
                  <div className="font-medium">Московская область, Орехово-Зуевский район</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground mt-2">
                <Icon name="Phone" size={16} />
                <span className="font-medium">+7 (916) 840-07-18</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-3">
            <a href="/" className="hover:text-primary transition-colors font-medium">Главная</a>
            <a href="/news" className="hover:text-primary transition-colors font-medium">Новости</a>
            <a href="/documents" className="hover:text-primary transition-colors font-medium">Документы</a>
            <a href="/board" className="hover:text-primary transition-colors font-medium">Правление</a>
            <a href="/plots" className="hover:text-primary transition-colors font-medium">Участки</a>
            <a href="/contacts" className="hover:text-primary transition-colors font-medium">Контакты</a>
            <a href="/announcements" className="hover:text-primary transition-colors font-medium">Объявления</a>
            <a href="/gallery" className="hover:text-primary transition-colors font-medium">Галерея</a>
          </div>
        </div>
      </nav>
    </>
  );
}