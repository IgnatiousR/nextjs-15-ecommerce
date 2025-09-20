// app/loading.tsx
// import { Spinner } from "@/components/ui/spinner"; // shadcn spinner
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>

      {/* Loading text */}
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">Loading...</p>
    </div>
  );
};

export default LoadingPage;
