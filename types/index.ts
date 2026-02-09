// Patient and physician types
export interface PatientInfo {
  name: string;
  uhid: string;
  age: string;
  gender: string;
}

export interface PhysicianInfo {
  name: string;
  registration: string;
  department: string;
}

// Documentation types
export interface AugmentRequest {
  patient: PatientInfo;
  condition_template: string;
  sparse_notes: string;
  treating_physician?: PhysicianInfo;
  is_lama?: boolean;
}

export interface LegalElement {
  element: string;
  covered: boolean;
  requirement: string;
  legal_ref: string;
}

export interface AugmentResponse {
  document_id: string;
  timestamp: string;
  augmented_content: string;
  risk_score: number;
  legal_elements: LegalElement[];
  gaps: string[];
}

// Audit types
export interface AuditFinding {
  severity: "critical" | "warning" | "suggestion";
  category: string;
  title: string;
  description: string;
  recommendation: string;
}

export interface AuditRequest {
  documentation: string;
  condition: string;
  patient_age: string;
  patient_gender: string;
}

export interface AuditResponse {
  audit_id: string;
  risk_score: number;
  findings: AuditFinding[];
  discharge_recommendation: string;
}

// Consent types
export interface SignatoryInfo {
  name: string;
  relationship: string;
  contact?: string;
}

export interface ConsentRequest {
  patient_name: string;
  patient_uhid: string;
  procedure: string;
  acknowledgments: string[];
  signature_data: string;
  signatory: SignatoryInfo;
}

export interface ConsentResponse {
  consent_id: string;
  timestamp: string;
  signatories: SignatoryInfo[];
  legal_validity: boolean;
}

// Dashboard types
export interface RecentRecord {
  id: string;
  patient: string;
  uhid: string;
  condition: string;
  date: string;
  status: "Draft" | "Completed" | "Audited";
}
