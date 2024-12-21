import { Phone, MessageSquare } from "lucide-react";

export function EmergencyContacts() {
  const emergencyNumber = "+23232";

  const handleCall = () => {
    window.location.href = `tel:${emergencyNumber}`;
  };

  return (
    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
      <div className="flex gap-4">
        <button
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700"
        >
          <Phone className="w-5 h-5" />
          Call Emergency ({emergencyNumber})
        </button>

        <button
          onClick={() =>
            window.open("slack://channel?team=T0123&id=prod_issue_war_room")
          }
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700"
        >
          <MessageSquare className="w-5 h-5" />
          Open War Room
        </button>
      </div>
      <p className="text-sm text-red-700 mt-2">
        Select option 2 in the menu to reach engineering manager
      </p>
    </div>
  );
}
