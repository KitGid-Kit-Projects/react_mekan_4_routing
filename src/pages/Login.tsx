import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      console.log("İstifadəçi sistemə daxil oldu:", formData.email);
      
      // Navigate to account page after successful login
      navigate("/account");
      setIsLoading(false);
    }, 1000);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleForgotPassword = () => {
    // This would navigate to a forgot password page in a real app
    console.log("Şifrə bərpa səhifəsinə yönləndirilir...");
    alert("Şifrə bərpa funksiyası demo məqsədilə mövcud deyil");
  };

  const handleRegister = () => {
    // This would navigate to a register page in a real app
    console.log("Qeydiyyat səhifəsinə yönləndirilir...");
    alert("Qeydiyyat səhifəsi demo məqsədilə mövcud deyil");
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">
            Sistemə Daxil Ol
          </h1>
          <p className="text-muted-foreground mt-2">
            Hesabınıza daxil olmaq üçün məlumatlarınızı daxil edin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email ünvanı
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="user@example.com"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Şifrə
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="••••••••"
              required
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-border focus:ring-primary"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
                Məni xatırla
              </label>
            </div>

            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-primary hover:underline"
            >
              Şifrəni unutdunuz?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Daxil olunur..." : "Daxil ol"}
          </button>

          <div className="text-center">
            <span className="text-sm text-muted-foreground">
              Hesabınız yoxdur?{" "}
              <button
                type="button"
                onClick={handleRegister}
                className="text-primary hover:underline"
              >
                Qeydiyyatdan keç
              </button>
            </span>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={handleGoHome}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Ana səhifəyə qayıt
          </button>
        </div>

        {/* Navigation Demonstration */}
        <div className="bg-info/10 border border-info/20 p-4 rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">
            🔧 Login Prosesi Navigation
          </h3>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Uğurlu login: <code className="bg-muted px-1 rounded">navigate("/account")</code></p>
            <p>• Ana səhifə: <code className="bg-muted px-1 rounded">navigate("/")</code></p>
            <p>• Demo: istənilən email/şifrə ilə daxil ola bilərsiniz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;