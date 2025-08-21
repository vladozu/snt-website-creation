import React, { useState } from 'react';
import { Plus, FileText, Download, Calendar, Upload } from 'lucide-react';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Document {
  id: string;
  title: string;
  fileName: string;
  uploadDate: string;
  fileSize: string;
  description: string;
}

export default function Documents() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      title: 'Устав СНТ "Лесная сказка"',
      fileName: 'ustav-snt.pdf',
      uploadDate: '2024-01-15',
      fileSize: '2.3 МБ',
      description: 'Основные положения и правила садоводческого товарищества'
    },
    {
      id: '2', 
      title: 'Протокол общего собрания',
      fileName: 'protokol-2024-03.pdf',
      uploadDate: '2024-03-20',
      fileSize: '1.8 МБ',
      description: 'Решения общего собрания садоводов от 20 марта 2024'
    },
    {
      id: '3',
      title: 'Реестр членов СНТ',
      fileName: 'reestr-chlenov.xlsx',
      uploadDate: '2024-02-10',
      fileSize: '945 КБ',
      description: 'Актуальный список членов товарищества'
    }
  ]);

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newDocument, setNewDocument] = useState({
    title: '',
    description: '',
    fileName: ''
  });

  const handleAddDocument = () => {
    if (newDocument.title && newDocument.fileName) {
      const document: Document = {
        id: Date.now().toString(),
        title: newDocument.title,
        fileName: newDocument.fileName,
        uploadDate: new Date().toISOString().split('T')[0],
        fileSize: '0 КБ',
        description: newDocument.description
      };
      setDocuments([document, ...documents]);
      setNewDocument({ title: '', description: '', fileName: '' });
      setShowUploadForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Документы
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Официальные документы, протоколы собраний и нормативные акты СНТ
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Все документы</h2>
              <button
                onClick={() => setShowUploadForm(!showUploadForm)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Icon name="Plus" size={20} />
                Добавить документ
              </button>
            </div>

            {showUploadForm && (
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Новый документ</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Название документа
                    </label>
                    <input
                      type="text"
                      value={newDocument.title}
                      onChange={(e) => setNewDocument({...newDocument, title: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Введите название документа"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Описание
                    </label>
                    <textarea
                      value={newDocument.description}
                      onChange={(e) => setNewDocument({...newDocument, description: e.target.value})}
                      rows={3}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Краткое описание документа"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Icon name="Upload" size={16} className="inline mr-2" />
                      Файл
                    </label>
                    <input
                      type="text"
                      value={newDocument.fileName}
                      onChange={(e) => setNewDocument({...newDocument, fileName: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Имя файла (например: document.pdf)"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={handleAddDocument}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Добавить
                    </button>
                    <button
                      onClick={() => setShowUploadForm(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Отмена
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {documents.map((document) => (
                <div
                  key={document.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Icon name="FileText" size={24} className="text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {document.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {document.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Icon name="Calendar" size={16} />
                              <span>{new Date(document.uploadDate).toLocaleDateString('ru-RU')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="FileText" size={16} />
                              <span>{document.fileName}</span>
                            </div>
                            <div>
                              <span>{document.fileSize}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                      <Icon name="Download" size={16} />
                      Скачать
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}