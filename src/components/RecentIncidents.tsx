import { History, AlertTriangle, CheckCircle } from "lucide-react";

interface Incident {
  id: string;
  title: string;
  status: "resolved" | "ongoing";
  time: string;
}

export function RecentIncidents() {
  const incidents: Incident[] = [
    {
      id: "1",
      title: "API Gateway Timeout",
      status: "resolved",
      time: "2h ago",
    },
    {
      id: "2",
      title: "Database Connection Issues",
      status: "ongoing",
      time: "15m ago",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <History className="w-4 h-4 text-gray-500" />
        <h2 className="text-sm font-medium text-gray-700">Recent Incidents</h2>
      </div>
      <div className="space-y-2">
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-center justify-between p-2 bg-gray-50 rounded"
          >
            <div className="flex items-center gap-2">
              {incident.status === "resolved" ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              )}
              <span>{incident.title}</span>
            </div>
            <span className="text-sm text-gray-500">{incident.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
