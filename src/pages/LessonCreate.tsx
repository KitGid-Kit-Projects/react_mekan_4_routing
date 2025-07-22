import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LessonCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    level: "beginner"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate lesson creation
    console.log("Lesson yaradıldı:", formData);
    
    // Navigate to video list after creation
    navigate("/videolist/1");
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Yeni Dərs Yarat
        </h1>
        <p className="text-muted-foreground mt-2">
          Yeni dərs yaratmaq üçün aşağıdakı formu doldurun.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border border-border">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-sm font-medium text-foreground">
            Dərs başlığı
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Məsələn: React Router əsasları"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-foreground">
            Təsvir
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Dərsin təsvirini yazın..."
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="duration" className="block text-sm font-medium text-foreground">
              Müddət (dəqiqə)
            </label>
            <input
              type="number"
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="45"
              min="1"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="level" className="block text-sm font-medium text-foreground">
              Səviyyə
            </label>
            <select
              id="level"
              value={formData.level}
              onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="beginner">Başlanğıc</option>
              <option value="intermediate">Orta</option>
              <option value="advanced">İrəliləmiş</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 border border-border rounded-md text-foreground hover:bg-muted transition-colors"
          >
            Ləğv et
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            Dərsi yarat
          </button>
        </div>
      </form>

      {/* Navigation Demonstration */}
      <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">
          🔧 useNavigate() Nümayişi
        </h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• Form submit olunduqda: <code className="bg-muted px-1 rounded">navigate("/videolist/1")</code></p>
          <p>• Ləğv düyməsi: <code className="bg-muted px-1 rounded">navigate(-1)</code> (əvvəlki səhifə)</p>
        </div>
      </div>
    </div>
  );
};

export default LessonCreate;