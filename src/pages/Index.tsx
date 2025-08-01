import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const newsItems = [
    {
      id: 1,
      title: "Общее собрание членов СНТ 15 декабря 2024 г.",
      date: "01.12.2024",
      content: "Уважаемые садоводы! 15 декабря в 12:00 состоится годовое отчетно-выборное собрание.",
      type: "важно"
    },
    {
      id: 2,
      title: "Завершение работ по благоустройству",
      date: "28.11.2024",
      content: "Завершены работы по ремонту дорожного покрытия на участках 1-25.",
      type: "новость"
    },
    {
      id: 3,
      title: "Напоминание о взносах за 2024 год",
      date: "25.11.2024",
      content: "Убедительная просьба погасить задолженность по членским взносам до 31 декабря.",
      type: "объявление"
    }
  ];

  const boardMembers = [
    { name: "Петров Иван Сергеевич", position: "Председатель СНТ", phone: "+7 (916) 123-45-67" },
    { name: "Сидорова Мария Петровна", position: "Заместитель председателя", phone: "+7 (916) 234-56-78" },
    { name: "Козлов Александр Николаевич", position: "Казначей", phone: "+7 (916) 345-67-89" }
  ];

  const paymentData = {
    totalBudget: 2850000,
    collected: 2280000,
    pending: 570000,
    percentage: 80
  };

  const expenses = [
    { category: "Электроэнергия", amount: 450000, percentage: 20 },
    { category: "Благоустройство", amount: 680000, percentage: 30 },
    { category: "Дорожные работы", amount: 570000, percentage: 25 },
    { category: "Охрана территории", amount: 380000, percentage: 17 },
    { category: "Прочие расходы", amount: 200000, percentage: 8 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-primary">СНТ "Лесная Сказка"</h1>
                <p className="text-sm text-muted-foreground">Садоводческое некоммерческое товарищество</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-secondary">
              <Icon name="Phone" size={16} />
              <span className="font-medium">+7 (916) 123123123</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-3">
            {['Главная', 'Новости', 'Документы', 'Правление', 'Участки', 'Контакты', 'Объявления', 'Галерея'].map((item) => (
              <button key={item} className="hover:text-primary transition-colors font-medium">
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-secondary">Это наш дом!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Добро пожаловать на официальный сайт садоводческого некоммерческого товарищества "Лесная Сказка". 
                Здесь вы найдете всю актуальную информацию о жизни нашего товарищества.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Документы
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Users" size={20} className="mr-2" />
                  Правление
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/img/bc6e12ff-21c1-45ca-94be-ce76261a0324.jpg" 
                alt="СНТ Лесная Сказка" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="news">Новости</TabsTrigger>
            <TabsTrigger value="payments">Взносы</TabsTrigger>
            <TabsTrigger value="board">Правление</TabsTrigger>
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
          </TabsList>

          {/* News Section */}
          <TabsContent value="news" className="space-y-6">
            <div className="grid gap-6">
              <h3 className="text-2xl font-bold text-secondary">Новости и объявления</h3>
              {newsItems.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.date}</CardDescription>
                      </div>
                      <Badge variant={item.type === 'важно' ? 'destructive' : item.type === 'новость' ? 'default' : 'secondary'}>
                        {item.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Payments Section */}
          <TabsContent value="payments" className="space-y-6">
            <div className="grid gap-6">
              <h3 className="text-2xl font-bold text-secondary">Система учета взносов</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Wallet" size={20} className="mr-2 text-primary" />
                      Сбор взносов 2024
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Собрано</span>
                      <span className="font-medium">{paymentData.collected.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <Progress value={paymentData.percentage} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{paymentData.percentage}% от плана</span>
                      <span>Осталось: {paymentData.pending.toLocaleString('ru-RU')} ₽</span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">
                          <Icon name="CreditCard" size={16} className="mr-2" />
                          Оплатить взнос
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Оплата членского взноса</DialogTitle>
                          <DialogDescription>
                            Заполните данные для оплаты взноса
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="plot">Номер участка</Label>
                            <Input id="plot" placeholder="Например: 15" />
                          </div>
                          <div>
                            <Label htmlFor="amount">Сумма к оплате</Label>
                            <Input id="amount" placeholder="15000" />
                          </div>
                          <div>
                            <Label htmlFor="period">Период</Label>
                            <Input id="period" placeholder="2024 год" />
                          </div>
                          <Button className="w-full">Перейти к оплате</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="PieChart" size={20} className="mr-2 text-accent" />
                      Структура расходов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {expenses.map((expense, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">{expense.category}</span>
                              <span className="text-sm text-muted-foreground">{expense.percentage}%</span>
                            </div>
                            <Progress value={expense.percentage} className="h-2" />
                          </div>
                          <span className="ml-4 text-sm font-medium w-20 text-right">
                            {expense.amount.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Board Section */}
          <TabsContent value="board" className="space-y-6">
            <div className="grid gap-6">
              <h3 className="text-2xl font-bold text-secondary">Правление СНТ</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {boardMembers.map((member, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.position}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-muted-foreground">
                        <Icon name="Phone" size={16} className="mr-2" />
                        <span>{member.phone}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Gallery Section */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="grid gap-6">
              <h3 className="text-2xl font-bold text-secondary">Галерея</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="overflow-hidden">
                  <img 
                    src="/img/bc6e12ff-21c1-45ca-94be-ce76261a0324.jpg" 
                    alt="Общий вид территории" 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Общий вид территории</h4>
                    <p className="text-sm text-muted-foreground">Весна 2024</p>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="w-full h-48 bg-muted flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground" />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Дорожные работы</h4>
                    <p className="text-sm text-muted-foreground">Лето 2024</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="w-full h-48 bg-muted flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground" />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold">Общее собрание</h4>
                    <p className="text-sm text-muted-foreground">Осень 2024</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">СНТ "Лесная Сказка"</h4>
              <p className="text-sm text-secondary-foreground/80">
                Садоводческое некоммерческое товарищество, основанное в 1985 году. 
                Площадь территории: 15 гектаров, 120 участков.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Московская область, Орехово-Зуевский район</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (916) XXX-XX-XX</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>fio_admin@mail.ru</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <p>Правление работает:</p>
                <p>Суббота: 10:00 - 16:00</p>
                <p>Воскресенье: 10:00 - 14:00</p>
                <p>В остальные дни - по договоренности</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-4 text-center text-sm text-secondary-foreground/60">
            <p>&copy; 2024 СНТ "Лесная Сказка". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;