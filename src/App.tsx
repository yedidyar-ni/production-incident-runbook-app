import { useState } from "react";
import { Step1Emergency } from "./components/workflow/Step1Emergency";
import { Step2Assessment } from "./components/workflow/Step2Assessment";
import { Step3Notification } from "./components/workflow/Step3Notification";
import { Step4Investigation } from "./components/workflow/Step4Investigation";
import { Step5Resolution } from "./components/workflow/Step5Resolution";
import { WorkflowProgress } from "./components/WorkflowProgress";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Incident Response Workflow
        </h1>

        <WorkflowProgress currentStep={currentStep} />

        <div className="space-y-6">
          <Step1Emergency />
          <Step2Assessment />
          <Step3Notification />
          <Step4Investigation />
          <Step5Resolution />
        </div>
      </div>
    </div>
  );
}

export default App;
