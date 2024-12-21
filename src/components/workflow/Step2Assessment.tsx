import { useState } from "react";
import { SeverityAssessment } from "../SeverityAssessment";
import { IncidentForm } from "../IncidentForm";
import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

export function Step2Assessment() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="impact-assessment">
          <AccordionTrigger>
            <h2 className="text-lg font-semibold">Step 2: Impact Assessment</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-orange-700 mb-4">
              Assess the severity and impact of the incident.
            </p>
            <SeverityAssessment />
            <div className="mt-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center justify-between w-full p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-orange-500" />
                  <span>Detailed Incident Report</span>
                </div>
                {showDetails ? <ChevronUp /> : <ChevronDown />}
              </button>
              {showDetails && (
                <div className="mt-4">
                  <IncidentForm />
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
