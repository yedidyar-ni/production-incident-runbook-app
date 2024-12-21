import { Activity, Cpu, Database, GitBranch } from "lucide-react";
import type { MetricData } from "../types/incident";

interface MetricsPanelProps {
  metrics: MetricData;
}

export function MetricsPanel({ metrics }: MetricsPanelProps) {
  const getStatusColor = (value: number, threshold: number) =>
    value > threshold ? "text-red-600" : "text-green-600";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Database className="w-5 h-5 mr-2" />
            <h3 className="text-sm font-medium text-gray-700">Heap Usage</h3>
          </div>
          <span
            className={`text-lg font-semibold ${getStatusColor(
              metrics.heapUsage,
              90
            )}`}
          >
            {metrics.heapUsage}%
          </span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Cpu className="w-5 h-5 mr-2" />
            <h3 className="text-sm font-medium text-gray-700">CPU Usage</h3>
          </div>
          <span
            className={`text-lg font-semibold ${getStatusColor(
              metrics.cpuConsumption,
              80
            )}`}
          >
            {metrics.cpuConsumption}%
          </span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            <h3 className="text-sm font-medium text-gray-700">
              Request Volume
            </h3>
          </div>
          <span
            className={`text-lg font-semibold ${getStatusColor(
              metrics.requestVolume,
              1000
            )}`}
          >
            {metrics.requestVolume}/s
          </span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <GitBranch className="w-5 h-5 mr-2" />
            <h3 className="text-sm font-medium text-gray-700">Thread Count</h3>
          </div>
          <span
            className={`text-lg font-semibold ${getStatusColor(
              metrics.threadCount,
              200
            )}`}
          >
            {metrics.threadCount}
          </span>
        </div>
      </div>
    </div>
  );
}
