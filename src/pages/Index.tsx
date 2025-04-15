
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML version of the site
    window.location.href = "/index.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting...</h1>
        <p className="text-xl text-gray-600">Please wait, or <a href="/index.html" className="text-blue-500 hover:underline">click here</a> if you are not redirected.</p>
      </div>
    </div>
  );
};

export default Index;
