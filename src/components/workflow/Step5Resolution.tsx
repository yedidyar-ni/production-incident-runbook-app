import { useState } from "react";
import {
  CheckCircle,
  GitPullRequest,
  FileText,
  Bell,
  AlertTriangle,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export function Step5Resolution() {
  const [resolutionSteps, setResolutionSteps] = useState({
    serviceRestored: false,
    logsCollected: false,
    rootCauseIdentified: false,
    preventionPlanCreated: false,
  });

  const updateStep = (key: keyof typeof resolutionSteps) => {
    setResolutionSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allStepsCompleted = Object.values(resolutionSteps).every(
    (step) => step
  );

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="resolution">
        <AccordionTrigger>
          <h2 className="text-lg font-semibold">
            Step 5: Resolution & Documentation
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-green-700 mb-4">
            Follow resolution steps and document the incident.
          </p>
          <div className="bg-white p-4 rounded-md mb-4">
            <h3 className="font-medium mb-3 flex items-center gap-2">
              <Clock className="text-blue-600" />
              Resolution Progress
            </h3>
            <div className="space-y-2">
              {Object.entries(resolutionSteps).map(([step, completed]) => (
                <button
                  key={step}
                  onClick={() =>
                    updateStep(step as keyof typeof resolutionSteps)
                  }
                  className="w-full flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100"
                >
                  <span className="capitalize">
                    {step.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  {completed ? (
                    <CheckCircle className="text-green-600 w-5 h-5" />
                  ) : (
                    <AlertTriangle className="text-yellow-600 w-5 h-5" />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <a
              href="/wiki/fast-deployment"
              className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <GitPullRequest className="text-purple-600" />
                <span>Fast Deployment Guide</span>
              </div>
            </a>
            <div className="p-3 bg-white rounded-md">
              <h3 className="font-medium mb-2">Resolution Notifications</h3>
              <div className="space-y-2">
                <button
                  onClick={() =>
                    window.open(
                      "slack://channel?team=T0123&id=prod_issue_war_room"
                    )
                  }
                  className="w-full flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100"
                  disabled={!allStepsCompleted}
                >
                  <span>Notify War Room - Resolution Complete</span>
                  <Bell
                    className={
                      allStepsCompleted ? "text-green-600" : "text-gray-400"
                    }
                  />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "slack://channel?team=T0123&id=a-team-engineering"
                    )
                  }
                  className="w-full flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100"
                  disabled={!allStepsCompleted}
                >
                  <span>Notify Engineering Team</span>
                  <Bell
                    className={
                      allStepsCompleted ? "text-green-600" : "text-gray-400"
                    }
                  />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href="/downtime-log"
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <FileText className="text-blue-600" />
                  <span>Downtime Log</span>
                </div>
              </a>
              <a
                href="/postmortem-template"
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <FileText className="text-red-600" />
                  <span>Postmortem Template</span>
                </div>
              </a>
              <a
                href="/incident-metrics"
                className="flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <FileText className="text-green-600" />
                  <span>Incident Metrics</span>
                </div>
              </a>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
