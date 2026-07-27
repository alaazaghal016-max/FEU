export type ActivePage = 
  | 'home' 
  | 'issue' 
  | 'advocate' 
  | 'reflection' 
  | 'action' 
  | 'glossary' 
  | 'citation' 
  | 'template';

export interface MlaSource {
  id: string;
  author: string;
  title: string;
  container?: string;
  publisher?: string;
  year: string;
  url?: string;
  accessDate?: string;
  type: 'Book' | 'Report' | 'Legal Petition' | 'International Treaty' | 'Academic Journal' | 'Organization Website';
  annotation: string;
  formattedMla: string;
}

export interface ResearchTemplateData {
  courseName: string;
  courseCode: string;
  teacher: string;
  dueDate: string;
  studentTopic: string;
  researchQuestion: string;
  thesisStatement: string;
  historicalContext: string;
  issueDetails: {
    who: string;
    what: string;
    where: string;
    when: string;
    whyImportant: string;
  };
  fiveRs: {
    resilience: string;
    resistance: string;
    reclamation: string;
  };
  evidenceList: Array<{
    id: number;
    title: string;
    detail: string;
    category: 'Scientific' | 'Health' | 'Legal' | 'International Policy' | 'Cultural/Memoir';
  }>;
  advocateDetails: {
    identity: string;
    actionsAndRoles: string;
    organizations: string;
    impactAndRecognition: string;
  };
  criticalReflection: {
    significanceToday: string;
    challengedAssumptions: string;
    whyAudienceShouldCare: string;
    mostCompellingEvidence: string;
    consequencesOfInaction: string;
  };
  actionSteps: string[];
  additionalInfo: {
    inuktitutTerms: Array<{ term: string; meaning: string; phonetic?: string }>;
    mediaIdeas: string[];
  };
}

export interface GlossaryTerm {
  term: string;
  phonetic?: string;
  meaning: string;
  culturalContext: string;
  category: 'Inuktitut Term' | 'Geographic Region' | 'Policy / Organization';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'Historical' | 'Advocacy' | 'Legal' | 'Policy';
  significance: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
