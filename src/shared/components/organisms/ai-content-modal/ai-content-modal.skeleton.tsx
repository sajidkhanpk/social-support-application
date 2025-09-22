const AIContentModalSkeleton = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-pulse">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center">
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
          <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>

          <div className="flex flex-col gap-2">
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>

          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>

          <div className="flex flex-col gap-2">
            <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 flex flex-col md:flex-row justify-end gap-2">
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default AIContentModalSkeleton;
