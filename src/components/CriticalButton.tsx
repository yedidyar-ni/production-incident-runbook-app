import { Phone } from "lucide-react";

export function CriticalButton() {
  const emergencyNumber = "+1324324234";

  const handleCall = () => {
    window.location.href = `tel:${emergencyNumber}`;
  };

  return (
    <button
      onClick={handleCall}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-colors"
    >
      <Phone className="w-5 h-5" />
      <span>Call Critical Incident Response</span>
    </button>
  );
}
