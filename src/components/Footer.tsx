import React from 'react';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">СНТ "Лесная сказка"</h4>
            <p className="text-sm text-muted-foreground">
              Садоводческое некоммерческое товарищество с богатой историей и дружным коллективом садоводов.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Московская область, Орехово-Зуевский район</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (916) 840-07-18</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>fio_admin@mail.ru</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Быстрые ссылки</h4>
            <div className="space-y-2 text-sm">
              <div><a href="/news" className="hover:text-primary transition-colors">Новости</a></div>
              <div><a href="/documents" className="hover:text-primary transition-colors">Документы</a></div>
              <div><a href="/board" className="hover:text-primary transition-colors">Правление</a></div>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 СНТ "Лесная сказка". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}