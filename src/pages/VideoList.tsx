import { useParams, useNavigate } from "react-router-dom";

const VideoList = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  // Simulated video data based on lessonId
  const getVideosForLesson = (id: string) => {
    const videos = {
      "1": [
        { id: 1, title: "React Router giriş", duration: "10:30" },
        { id: 2, title: "BrowserRouter və Routes", duration: "15:20" },
        { id: 3, title: "Route komponentinin istifadəsi", duration: "12:45" }
      ],
      "2": [
        { id: 4, title: "useParams hook-u", duration: "8:15" },
        { id: 5, title: "Dynamic routing nümunələri", duration: "14:20" },
        { id: 6, title: "URL parametrlərinin idarə edilməsi", duration: "11:30" }
      ],
      "3": [
        { id: 7, title: "useNavigate əsasları", duration: "9:45" },
        { id: 8, title: "Proqramatik navigation", duration: "13:10" },
        { id: 9, title: "Navigation state idarəsi", duration: "16:25" }
      ]
    };
    return videos[id as keyof typeof videos] || [];
  };

  const videos = getVideosForLesson(lessonId || "1");
  const lessonTitle = `Dərs ${lessonId}`;

  const handleLessonChange = (newLessonId: string) => {
    navigate(`/videolist/${newLessonId}`);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {lessonTitle} - Video Siyahısı
          </h1>
          <p className="text-muted-foreground mt-2">
            Hazırki lesson ID: <span className="font-mono bg-muted px-2 py-1 rounded">{lessonId}</span>
          </p>
        </div>
        
        <button
          onClick={handleGoHome}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Ana səhifəyə qayıt
        </button>
      </div>

      {/* Lesson Navigation */}
      <div className="bg-card p-4 rounded-lg border border-border">
        <h3 className="font-semibold text-foreground mb-3">Dərs seçimi:</h3>
        <div className="flex space-x-2">
          {["1", "2", "3"].map((id) => (
            <button
              key={id}
              onClick={() => handleLessonChange(id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                lessonId === id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              Dərs {id}
            </button>
          ))}
        </div>
      </div>

      {/* Video List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Videolar ({videos.length} ədəd)
        </h2>
        
        {videos.length > 0 ? (
          <div className="grid gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-foreground">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Müddət: {video.duration}
                    </p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm hover:opacity-90 transition-opacity">
                    İzlə
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Bu dərs üçün video tapılmadı.</p>
          </div>
        )}
      </div>

      {/* useParams Demonstration */}
      <div className="bg-info/10 border border-info/20 p-4 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">
          🔧 useParams() Nümayişi
        </h3>
        <p className="text-sm text-muted-foreground">
          Bu komponent URL-dən "lessonId" parametrini oxuyur: 
          <code className="bg-muted px-2 py-1 rounded ml-1 font-mono">
            useParams().lessonId = "{lessonId}"
          </code>
        </p>
      </div>
    </div>
  );
};

export default VideoList;