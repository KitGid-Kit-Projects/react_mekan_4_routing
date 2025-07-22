import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/videolist/1");
  };

  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">
          React Router Demo
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Bu layihə React Router v6+ əsas konseptlərini nümayiş etdirir: 
          BrowserRouter, Routes, Route, Outlet, useParams və useNavigate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Dynamic Routing
          </h3>
          <p className="text-muted-foreground mb-4">
            URL parametrləri ilə dinamik routing (/videolist/:lessonId)
          </p>
          <button
            onClick={handleStartLearning}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Video List-ə get
          </button>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Nested Routes
          </h3>
          <p className="text-muted-foreground mb-4">
            Outlet istifadə edərək nested routing strukturu
          </p>
          <button
            onClick={() => navigate("/lessons/create")}
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Lesson yarat
          </button>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Programmatic Navigation
          </h3>
          <p className="text-muted-foreground mb-4">
            useNavigate hook-u ilə proqramatik yönləndirmə
          </p>
          <button
            onClick={() => navigate("/account")}
            className="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Hesaba get
          </button>
        </div>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          React Router Konseptləri
        </h2>
        <ul className="text-left max-w-md mx-auto space-y-2 text-muted-foreground">
          <li>• BrowserRouter - URL routing üçün</li>
          <li>• Routes & Route - route təyini</li>
          <li>• Outlet - nested component render</li>
          <li>• useParams - URL parametrləri</li>
          <li>• useNavigate - proqramatik navigation</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;