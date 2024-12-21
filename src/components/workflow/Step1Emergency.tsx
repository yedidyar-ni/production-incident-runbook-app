import { EmergencyContacts } from "../EmergencyContacts";
import { MetricsPanel } from "../MetricsPanel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";

export function Step1Emergency() {
  // Sample metrics data
  const metrics = {
    heapUsage: 92,
    cpuConsumption: 85,
    requestVolume: 1200,
    threadCount: 250,
  };

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="emergency-response">
          <AccordionTrigger>
            <h2 className="text-lg font-semibold">Step 1: Emergency Response</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-red-700 mb-4">
              If this is a critical incident, immediately contact the emergency team.
            </p>
            <EmergencyContacts />
            <div className="mt-4">
              <h3 className="text-sm font-medium text-red-800 mb-2">
                Current System Status
              </h3>
              <MetricsPanel metrics={metrics} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
