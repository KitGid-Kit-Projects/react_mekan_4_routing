import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: "Azərbaycan İstifadəçisi",
    email: "user@example.com",
    role: "Student",
    joinDate: "15 Yanvar 2024"
  });

  const handleLogout = () => {
    // Simulate logout process
    console.log("İstifadəçi sistemdən çıxdı");
    
    // Navigate to login page after logout
    navigate("/login");
  };

  const handleEditProfile = () => {
    // Navigate to a profile edit page (simulate)
    console.log("Profil redaktəsi səhifəsinə yönləndirilir...");
    navigate("/account/edit"); // This would be a nested route in a real app
  };

  const handleViewLessons = () => {
    navigate("/videolist/1");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Hesab Məlumatları
        </h1>
        <p className="text-muted-foreground mt-2">
          İstifadəçi profilinizi və hesab parametrlərini idarə edin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Profil Məlumatları
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Ad və Soyad
                </label>
                <p className="text-foreground">{user.name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <p className="text-foreground">{user.email}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Rol
                </label>
                <p className="text-foreground">{user.role}</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Qoşulma tarixi
                </label>
                <p className="text-foreground">{user.joinDate}</p>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleEditProfile}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Profili redaktə et
              </button>
              <button
                onClick={handleViewLessons}
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
              >
                Dərsləri gör
              </button>
            </div>
          </div>

          {/* Learning Progress */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Öğrənmə Statistikası
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Tamamlanan Dərs</div>
              </div>
              
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-success">85%</div>
                <div className="text-sm text-muted-foreground">Tamamlanma Faizi</div>
              </div>
              
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-info">24</div>
                <div className="text-sm text-muted-foreground">Saat</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Tez Əməliyyatlar
            </h2>
            
            <div className="space-y-3">
              <button
                onClick={handleViewLessons}
                className="w-full text-left p-3 rounded-md border border-border hover:bg-muted transition-colors"
              >
                <div className="font-medium text-foreground">Dərsləri gör</div>
                <div className="text-sm text-muted-foreground">Video dərslərə bax</div>
              </button>
              
              <button
                onClick={() => navigate("/lessons/create")}
                className="w-full text-left p-3 rounded-md border border-border hover:bg-muted transition-colors"
              >
                <div className="font-medium text-foreground">Yeni dərs yarat</div>
                <div className="text-sm text-muted-foreground">Öz dərsinizi yaradın</div>
              </button>
              
              <button
                onClick={handleGoHome}
                className="w-full text-left p-3 rounded-md border border-border hover:bg-muted transition-colors"
              >
                <div className="font-medium text-foreground">Ana səhifə</div>
                <div className="text-sm text-muted-foreground">Başlanğıc səhifəyə qayıt</div>
              </button>
            </div>
          </div>

          {/* Logout Section */}
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Hesab İdarəsi
            </h2>
            
            <button
              onClick={handleLogout}
              className="w-full bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Sistemdən çıx
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Demonstration */}
      <div className="bg-success/10 border border-success/20 p-4 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">
          🔧 useNavigate() İstifadəsi
        </h3>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>• Logout düyməsi: <code className="bg-muted px-1 rounded">navigate("/login")</code></p>
          <p>• Dərsləri gör: <code className="bg-muted px-1 rounded">navigate("/videolist/1")</code></p>
          <p>• Ana səhifə: <code className="bg-muted px-1 rounded">navigate("/")</code></p>
          <p>• Dərs yarat: <code className="bg-muted px-1 rounded">navigate("/lessons/create")</code></p>
        </div>
      </div>
    </div>
  );
};

export default Account;