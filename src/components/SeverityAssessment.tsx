import { AlertCircle, Users, Clock } from "lucide-react";

const IMPACT_GROUPS = ["Customers", "Agents", "A-team", "Claims Advocates"];

export function SeverityAssessment() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <AlertCircle className="text-red-600" />
        Quick Impact Assessment
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Affected User Groups
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {IMPACT_GROUPS.map((group) => (
              <label
                key={group}
                className="flex items-center p-2 bg-gray-50 rounded-md"
              >
                <input type="checkbox" className="mr-2" />
                {group}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Impact Scale</h3>
          <select className="w-full p-2 border rounded-md">
            <option value="">Select impact level...</option>
            <option value="low">Low (Few users)</option>
            <option value="high">High (Many users)</option>
            <option value="critical">Critical (All users)</option>
          </select>
        </div>

        <div>
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            ETA
          </h3>
          <select className="w-full p-2 border rounded-md">
            <option value="unknown">Unknown at the moment</option>
            <option value="1h">Within 1 hour</option>
            <option value="2h">Within 2 hours</option>
            <option value="4h">Within 4 hours</option>
            <option value="8h">Within 8 hours</option>
          </select>
        </div>
      </div>

      <div className="pt-4 border-t">
        <button className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700">
          Trigger War Room Alert
        </button>
      </div>
    </div>
  );
}
