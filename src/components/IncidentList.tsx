import { AlertTriangle, MessageSquare, CheckCircle } from "lucide-react";
import type { Incident } from "../types/incident";

interface IncidentListProps {
  incidents: Incident[];
  onUpdateProgress: (id: string) => void;
  onNotifyWarRoom: (id: string) => void;
  onMarkResolved: (id: string) => void;
}

export function IncidentList({
  incidents,
  onUpdateProgress,
  onNotifyWarRoom,
  onMarkResolved,
}: IncidentListProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <div key={incident.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <div>
                <h3 className="text-lg font-semibold">
                  {incident.type.replace("_", " ")}
                </h3>
                <p className="text-sm text-gray-500">
                  Reported: {incident.timeReported.toLocaleString()}
                </p>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(
                incident.severity
              )}`}
            >
              {incident.severity}
            </span>
          </div>

          <p className="text-gray-700 mb-4">{incident.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {incident.affectedServices.map((service) => (
              <span
                key={service}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
              >
                {service}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onNotifyWarRoom(incident.id)}
              className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Notify War Room
            </button>
            <button
              onClick={() => onUpdateProgress(incident.id)}
              className="flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200"
            >
              <AlertTriangle className="w-4 h-4 mr-1" />
              Update Progress
            </button>
            <button
              onClick={() => onMarkResolved(incident.id)}
              className="flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              Mark Resolved
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
