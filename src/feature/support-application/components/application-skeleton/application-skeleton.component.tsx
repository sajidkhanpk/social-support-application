export function MultiStepFormSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-pulse p-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        <StepperHeaderSkeleton />
        <FormFieldsSkeleton />
        <ActionButtonsSkeleton />
      </div>
    </div>
  );
}

function StepperHeaderSkeleton() {
  return (
    <div className="flex justify-between items-center">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex-1 flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
          {i < 2 && <div className="flex-1 h-1 mx-2 bg-gray-200 dark:bg-gray-700 rounded" />}
        </div>
      ))}
    </div>
  );
}

export function FormFieldsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-md" />
        </div>
      ))}
    </div>
  );
}

export function ActionButtonsSkeleton() {
  return (
    <div className="flex justify-end gap-4 pt-4">
      <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-md" />
      <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-md" />
    </div>
  );
}
