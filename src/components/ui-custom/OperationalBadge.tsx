import { useOperationalStatus } from '@/hooks/useOperationalStatus';
import { Clock, MapPin } from 'lucide-react';

export function OperationalBadge() {
  const { isOpen, statusText, nextOpening } = useOperationalStatus();

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full glass-strong shadow-glass">
      {/* Status Indicator */}
      <div className="flex items-center gap-2">
        <span
          className={`relative flex h-2.5 w-2.5 ${
            isOpen ? '' : 'opacity-60'
          }`}
        >
          {isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              isOpen ? 'bg-emerald-500' : 'bg-amber-500'
            }`}
          />
        </span>
        <span
          className={`text-sm font-semibold ${
            isOpen
              ? 'text-emerald-700 dark:text-emerald-400'
              : 'text-amber-700 dark:text-amber-400'
          }`}
        >
          {statusText}
        </span>
      </div>

      <span className="w-px h-4 bg-slate-200 dark:bg-slate-700" />

      {/* Hours */}
      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
        <Clock className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">
          {isOpen ? '24 Hours' : nextOpening}
        </span>
      </div>

      <span className="w-px h-4 bg-slate-200 dark:bg-slate-700 hidden sm:block" />

      {/* Location */}
      <div className="hidden sm:flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
        <MapPin className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">Hargeisa</span>
      </div>
    </div>
  );
}
