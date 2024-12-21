import { AlertTriangle, BarChart, Users } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <a
        href="https://dashboard.monitoring/purchase-flow"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <BarChart className="text-blue-600" />
        <span>Purchase Flow Dashboard</span>
      </a>

      <a
        href="slack://channel?team=T0123&id=who_is_on_call"
        className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <Users className="text-green-600" />
        <span>On-Call Team</span>
      </a>

      <a
        href="slack://channel?team=T0123&id=media_buying_shutdown"
        className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <AlertTriangle className="text-yellow-600" />
        <span>Stop Marketing</span>
      </a>
    </div>
  );
}
