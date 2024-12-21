import { useState } from "react";
import { MessageSquare, Bell, Copy, Check, AlertTriangle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

export function Step3Notification() {
  const [copied, setCopied] = useState(false);

  const templateMessage = `🚨 *Incident Alert*
Severity: [HIGH/CRITICAL]
Issue: [Brief description]
Impact: [Affected services/users]
Status: Investigating
ETA: [Timeline]

Teams notified: @engineering @support
Updates will follow in thread.`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(templateMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="notify-teams">
        <AccordionTrigger>
          <h2 className="text-lg font-semibold">Step 3: Notify Teams</h2>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm text-yellow-700 mb-4">
            Send notifications to required channels and teams.
          </p>

          <div className="mb-4 bg-white p-3 rounded-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium">Message Template</h3>
              <button
                onClick={copyTemplate}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="text-sm bg-gray-50 p-2 rounded whitespace-pre-wrap">
              {templateMessage}
            </pre>
          </div>

          <div className="space-y-3">
            {/* Priority Channels */}
            <div className="bg-red-50 p-3 rounded-md">
              <h3 className="text-sm font-medium text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Priority Channels
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() =>
                    window.open(
                      "slack://channel?team=T0123&id=prod_issue_war_room"
                    )
                  }
                  className="w-full flex items-center justify-between p-2 bg-white rounded hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-red-600 w-4 h-4" />
                    <span>War Room</span>
                  </div>
                  <Bell className="text-gray-400 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Secondary Notifications */}
            <div className="space-y-2">
              <button
                onClick={() =>
                  window.open(
                    "slack://channel?team=T0123&id=production-outage-updates"
                  )
                }
                className="w-full flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="text-blue-600" />
                  <span>Post to #production-outage-updates</span>
                </div>
                <Bell className="text-gray-400" />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "slack://channel?team=T0123&id=media_buying_shutdown"
                  )
                }
                className="w-full flex items-center justify-between p-3 bg-white rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="text-yellow-600" />
                  <span>Notify Media Buying Team</span>
                </div>
                <Bell className="text-gray-400" />
              </button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
