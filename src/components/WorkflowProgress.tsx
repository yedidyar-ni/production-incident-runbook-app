import { CheckCircle, Circle } from "lucide-react";

interface Props {
  currentStep: number;
}

export function WorkflowProgress({ currentStep }: Props) {
  const steps = [
    "Emergency Response",
    "Assessment",
    "Notification",
    "Investigation",
    "Resolution",
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center w-1/5">
            <div className="flex items-center w-full">
              {index > 0 && (
                <div
                  className={`h-1 w-full transition-colors duration-300 ${
                    index <= currentStep ? "bg-blue-500" : "bg-gray-200"
                  }`}
                />
              )}
              {index === currentStep ? (
                <Circle className="w-8 h-8 text-blue-500 animate-pulse" />
              ) : (
                <CheckCircle
                  className={`w-8 h-8 transition-colors duration-300 ${
                    index < currentStep ? "text-blue-500" : "text-gray-200"
                  }`}
                />
              )}
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-full transition-colors duration-300 ${
                    index < currentStep ? "bg-blue-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
            <span className="text-xs mt-2 text-center">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
