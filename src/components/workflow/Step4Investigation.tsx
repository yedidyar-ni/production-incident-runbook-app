import { useState } from "react";
import {
  Search,
  BarChart3,
  Users,
  Database,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export function Step4Investigation() {
  const [checklist, setChecklist] = useState({
    database: false,
    api: false,
    cache: false,
    queue: false,
  });

  const updateChecklist = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="investigation">
        <AccordionTrigger>
          <h2 className="text-lg font-semibold">Step 4: Investigation</h2>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-blue-700 mb-4">
            Access monitoring tools and investigate service health.
          </p>

          <div className="space-y-4">
            {/* Quick Health Check */}
            <div className="bg-white p-4 rounded-md">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <AlertTriangle className="text-yellow-600 w-5 h-5" />
                Service Health Checklist
              </h3>
              <div className="space-y-2">
                {Object.entries(checklist).map(([service, checked]) => (
                  <button
                    key={service}
                    onClick={() =>
                      updateChecklist(service as keyof typeof checklist)
                    }
                    className="w-full flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100"
                  >
                    <span className="capitalize">{service} Health</span>
                    {checked ? (
                      <CheckCircle className="text-green-600 w-5 h-5" />
                    ) : (
                      <XCircle className="text-gray-400 w-5 h-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Monitoring Tools */}
            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://dashboard.monitoring/purchase-flow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-blue-600" />
                  <span>Purchase Flow Dashboard</span>
                </div>
                <Search className="text-gray-400" />
              </a>

              <a
                href="slack://channel?team=T0123&id=backend_alerts"
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-yellow-600" />
                  <span>#backend_alerts Channel</span>
                </div>
              </a>

              <a
                href="https://logz.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <Database className="text-purple-600" />
                  <span>Logz.io Logs</span>
                </div>
              </a>
            </div>

            {/* Contact On-Call */}
            <a
              href="slack://channel?team=T0123&id=who_is_on_call"
              className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <Users className="text-green-600" />
                <span>Contact On-Call Team</span>
              </div>
            </a>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
