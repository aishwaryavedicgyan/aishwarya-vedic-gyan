import { AuthButtons } from '../auth/AuthButtons';

export function TopBar() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center space-x-4">
            {/* Empty div to maintain layout if needed */}
          </div>
          <AuthButtons />
        </div>
      </div>
    </div>
  );
}