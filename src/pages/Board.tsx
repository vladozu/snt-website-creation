import React, { useState } from "react";
import { Plus, Mail, Phone, User, Calendar, Edit3 } from "lucide-react";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BoardMember {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  experience: string;
  responsibilities: string[];
  photo?: string;
}

export default function Board() {
  const [members, setMembers] = useState<BoardMember[]>([
    {
      id: "1",
      name: "Петров Иван Сергеевич",
      position: "Председатель правления",
      phone: "+7 (916) xxx-xx-xx",
      email: "xxx@mail.ru",
      experience: "2018 - настоящее время",
      responsibilities: [
        "Общее руководство СНТ",
        "Взаимодействие с органами власти",
        "Координация работы правления",
      ],
    },
    {
      id: "2",
      name: "Сидорова Марина Александровна",
      position: "Заместитель председателя",
      phone: "+7 (926) 123-45-67",
      email: "sidorova.ma@mail.ru",
      experience: "2020 - настоящее время",
      responsibilities: [
        "Решение хозяйственных вопросов",
        "Контроль коммунальных услуг",
        "Благоустройство территории",
      ],
    },
    {
      id: "3",
      name: "Козлов Александр Викторович",
      position: "Казначей",
      phone: "+7 (905) 987-65-43",
      email: "kozlov.av@mail.ru",
      experience: "2019 - настоящее время",
      responsibilities: [
        "Ведение финансовой отчетности",
        "Сбор членских взносов",
        "Планирование бюджета СНТ",
      ],
    },
    {
      id: "4",
      name: "Волкова Елена Петровна",
      position: "Секретарь",
      phone: "+7 (916) 555-66-77",
      email: "volkova.ep@mail.ru",
      experience: "2021 - настоящее время",
      responsibilities: [
        "Ведение протоколов собраний",
        "Документооборот",
        "Информирование садоводов",
      ],
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
    experience: "",
    responsibilities: "",
  });

  const handleAddMember = () => {
    if (newMember.name && newMember.position && newMember.phone) {
      const member: BoardMember = {
        id: Date.now().toString(),
        name: newMember.name,
        position: newMember.position,
        phone: newMember.phone,
        email: newMember.email,
        experience: newMember.experience || "Новый член правления",
        responsibilities: newMember.responsibilities
          .split(",")
          .map((r) => r.trim())
          .filter((r) => r),
      };
      setMembers([...members, member]);
      setNewMember({
        name: "",
        position: "",
        phone: "",
        email: "",
        experience: "",
        responsibilities: "",
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Правление СНТ
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Состав правления и контактная информация руководства СНТ "Лесная
              сказка"
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Члены правления
              </h2>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Icon name="Plus" size={20} />
                Добавить члена
              </button>
            </div>

            {showAddForm && (
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Новый член правления
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ФИО
                    </label>
                    <input
                      type="text"
                      value={newMember.name}
                      onChange={(e) =>
                        setNewMember({ ...newMember, name: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Введите полное имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Должность
                    </label>
                    <input
                      type="text"
                      value={newMember.position}
                      onChange={(e) =>
                        setNewMember({ ...newMember, position: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Например: Член правления"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="text"
                      value={newMember.phone}
                      onChange={(e) =>
                        setNewMember({ ...newMember, phone: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+7 (xxx) xxx-xx-xx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newMember.email}
                      onChange={(e) =>
                        setNewMember({ ...newMember, email: e.target.value })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Опыт работы
                    </label>
                    <input
                      type="text"
                      value={newMember.experience}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          experience: e.target.value,
                        })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="2024 - настоящее время"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Обязанности
                    </label>
                    <input
                      type="text"
                      value={newMember.responsibilities}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          responsibilities: e.target.value,
                        })
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Через запятую: обязанность 1, обязанность 2"
                    />
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleAddMember}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Добавить
                  </button>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon
                          name="User"
                          size={32}
                          className="text-green-600"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-green-600 font-medium mb-2">
                        {member.position}
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                        <Icon name="Calendar" size={16} />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={18} className="text-green-600" />
                      <a
                        href={`tel:${member.phone}`}
                        className="text-gray-700 hover:text-green-600"
                      >
                        {member.phone}
                      </a>
                    </div>

                    {member.email && (
                      <div className="flex items-center gap-3">
                        <Icon
                          name="Mail"
                          size={18}
                          className="text-green-600"
                        />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-700 hover:text-green-600"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}

                    {member.responsibilities.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                          <Icon name="Edit3" size={16} />
                          Обязанности:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {member.responsibilities.map(
                            (responsibility, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span className="text-green-600 mt-1">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                График работы правления
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Рабочие дни:
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Понедельник: 18:00 - 20:00</li>
                    <li>Среда: 18:00 - 20:00</li>
                    <li>Суббота: 10:00 - 12:00</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Контакты:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Телефон: +7 (916) 840-07-18</li>
                    <li>Email: fio_admin@mail.ru</li>
                    <li>Адрес: Московская область, Орехово-Зуевский район</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
