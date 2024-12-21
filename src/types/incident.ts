export type IncidentSeverity = 'low' | 'high' | 'critical';
export type IncidentETA = 'unknown' | '1h' | '2h' | '4h' | '8h';
export type UserGroup = 'Customers' | 'Agents' | 'A-team' | 'Claims Advocates';

export interface IncidentAssessment {
  affectedGroups: UserGroup[];
  severity: IncidentSeverity;
  eta: IncidentETA;
  description: string;
}
