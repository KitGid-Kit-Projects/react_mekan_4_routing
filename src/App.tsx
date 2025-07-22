import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import VideoList from "./pages/VideoList";
import LessonCreate from "./pages/LessonCreate";
import Account from "./pages/Account";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Routes using Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="videolist/:lessonId" element={<VideoList />} />
            <Route path="lessons/create" element={<LessonCreate />} />
            <Route path="account" element={<Account />} />
          </Route>
          
          {/* Routes without Layout */}
          <Route path="login" element={<Login />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
