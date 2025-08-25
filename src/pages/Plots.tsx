import React from "react";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const Plots = () => {
  const plots = [
    {
      id: 1,
      number: "001",
      size: "600 м²",
      status: "Доступен",
      price: "2 500 000 ₽",
      features: ["Коммуникации", "Въезд с асфальта", "Лес рядом"],
    },
    {
      id: 2,
      number: "002",
      size: "800 м²",
      status: "Продан",
      price: "3 200 000 ₽",
      features: ["Коммуникации", "Река", "Панорамный вид"],
    },
    {
      id: 3,
      number: "003",
      size: "500 м²",
      status: "Бронь",
      price: "2 100 000 ₽",
      features: ["Коммуникации", "Въезд с асфальта"],
    },
    {
      id: 4,
      number: "004",
      size: "750 м²",
      status: "Доступен",
      price: "2 900 000 ₽",
      features: ["Коммуникации", "Лес", "Тихое место"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Доступен":
        return "text-green-600 bg-green-100";
      case "Продан":
        return "text-red-600 bg-red-100";
      case "Бронь":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Участки</h1>
            <p className="text-lg text-gray-600">
              Выберите участок своей мечты в нашем коттеджном поселке
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plots.map((plot) => (
              <div
                key={plot.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Участок №{plot.number}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(plot.status)}`}
                    >
                      {plot.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Icon name="Maximize" size={18} className="mr-2" />
                      <span>{plot.size}</span>
                    </div>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Icon name="DollarSign" size={18} className="mr-2" />
                      <span>{plot.price}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Особенности:
                    </h4>
                    <ul className="space-y-1">
                      {plot.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Icon
                            name="Check"
                            size={14}
                            className="mr-2 text-green-500"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={plot.status !== "Доступен"}
                  >
                    {plot.status === "Доступен"
                      ? "Забронировать"
                      : "Недоступен"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Генеральный план поселка
            </h2>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Icon
                name="Map"
                size={64}
                className="mx-auto text-gray-400 mb-4"
              />
              <p className="text-gray-600">
                Интерактивная карта участков будет доступна в ближайшее время
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Plots;
