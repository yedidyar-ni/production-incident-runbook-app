export interface ServiceMetrics {
  heapUsage: number;
  cpuConsumption: number;
  threadCount: number;
  requestVolume: number;
}

export interface ServiceStatus {
  name: string;
  metrics: ServiceMetrics;
  status: 'healthy' | 'warning' | 'critical';
}
