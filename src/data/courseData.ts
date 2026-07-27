import { ResearchTemplateData, MlaSource, GlossaryTerm, TimelineEvent, QuizQuestion } from '../types';

export const HERO_IMAGE_PATH = '/src/assets/images/arctic_hero_landscape_1785171892094.jpg';
export const ADVOCATE_IMAGE_PATH = '/src/assets/images/sheila_watt_cloutier_portrait_1785171902078.jpg';
export const FOOD_SOVEREIGNTY_IMAGE_PATH = '/src/assets/images/arctic_food_sovereignty_1785171914402.jpg';

export const COURSE_INFO = {
  courseName: "Understanding Contemporary First Nations, Inuit and Métis Voices",
  courseCode: "NBE3U",
  grade: "Grade 11",
  teacher: "Ms. Jangra",
  dueDate: "Monday, July 27 at 8:00 PM",
  studentAssignmentTitle: "Arctic Climate Change as an Inuit Human Rights Crisis & Sheila Watt-Cloutier's Global Advocacy",
};

export const RESEARCH_TEMPLATE: ResearchTemplateData = {
  courseName: COURSE_INFO.courseName,
  courseCode: COURSE_INFO.courseCode,
  teacher: COURSE_INFO.teacher,
  dueDate: COURSE_INFO.dueDate,
  studentTopic: "Arctic Climate Change, Inuit Human Rights, and the Advocacy of Sheila Watt-Cloutier",
  
  researchQuestion: "How does climate change directly impact Inuit human rights and culture in the Arctic, and how are Inuit advocates reframing global environmental policy through Indigenous knowledge and activism?",
  
  thesisStatement: "Climate change in the Arctic is fundamentally a human rights crisis for the Inuit, whose cultural survival, food security, and way of life depend on ice and cold.",
  
  historicalContext: "For generations, Inuit thrived through traditional land-use practices reliant on sea ice for hunting, travel, and cultural continuity. However, rapid forced settlement, residential schooling, and industrialization in southern latitudes led to massive greenhouse gas emissions and global pollution. These southern activities disproportionately affect the Arctic environment without Inuit consent, forcing Indigenous communities onto the frontlines of global environmental degradation.",
  
  issueDetails: {
    who: "Inuit across Inuit Nunangat (Nunavut, Nunavik, Nunatsiavut, and Inuvialuit Settlement Region), representing over 150,000 Arctic Indigenous inhabitants across northern Canada, Greenland, Alaska, and Russia.",
    what: "Unprecedented Arctic warming occurring at more than three times the global rate, melting sea ice, melting permafrost, coastal erosion, unpredictable weather patterns, and the accumulation of Persistent Organic Pollutants (POPs) in traditional food webs.",
    where: "Arctic regions, specifically northern Canada (Inuit Nunangat) and circumpolar polar territories.",
    when: "Ongoing since mid-20th century industrial expansion, accelerating rapidly since the 1990s to the present day.",
    whyImportant: "The loss of sea ice jeopardizes physical safety during hunting, destroys wildlife habitats (e.g., ringed seals, polar bears), undermines food sovereignty (forcing reliance on expensive, processed imported foods), and damages community infrastructure through permafrost thawing."
  },
  
  fiveRs: {
    resilience: "Inuit hunters and communities continuously adapt to dangerous weather shifts and melting ice while keeping their cultural traditions, intergenerational knowledge transfer, and subsistence harvesting alive despite environmental hazards.",
    resistance: "Opposing environmental injustice by filing legal human rights petitions with international tribunals, challenging toxic chemical emissions, and holding major high-emitting industrial nations legally and morally accountable.",
    reclamation: "Restoring the authority of Inuit Qaujimajatuqangit (traditional knowledge and cultural values) alongside Western climate science to take charge of Arctic environmental policy, governance, and climate strategy."
  },
  
  evidenceList: [
    {
      id: 1,
      title: "Melting Ice & Physical Safety Hazards",
      detail: "Arctic warming rates are over 3× the global average, causing thinning sea ice that leads to hazardous hunting conditions, loss of travel routes, and severe coastal erosion threatening coastal Arctic hamlets.",
      category: "Scientific"
    },
    {
      id: 2,
      title: "Food Insecurity & Toxic Bioaccumulation",
      detail: "Bioaccumulation of toxic Persistent Organic Pollutants (POPs) transported from southern industries accumulates in traditional country foods (whale, seal, fish), threatening physical health, mother's breast milk, and food sovereignty.",
      category: "Health"
    },
    {
      id: 3,
      title: "Landmark Legal Action (2005 IACHR Petition)",
      detail: "Sheila Watt-Cloutier and 62 Inuit elders filed the world's first climate change human rights petition with the Inter-American Commission on Human Rights (IACHR) against the United States.",
      category: "Legal"
    },
    {
      id: 4,
      title: "Global Treaty & Stockholm Convention (2001)",
      detail: "Inuit leadership successfully negotiated and secured the signing of the Stockholm Convention banning 'the Dirty Dozen' persistent organic pollutants that contaminate northern Arctic food chains.",
      category: "International Policy"
    },
    {
      id: 5,
      title: "Memoir & Cultural Advocacy: The Right to Be Cold (2015)",
      detail: "Sheila Watt-Cloutier's seminal work documents how environmental defense is inseparable from defending Indigenous cultural identity, human dignity, and intergenerational survival.",
      category: "Cultural/Memoir"
    }
  ],
  
  advocateDetails: {
    identity: "Sheila Watt-Cloutier (Siila), Inuk activist, author, political leader, and former International Chair of the Inuit Circumpolar Council (ICC). Born in Kuujjuaq, Nunavik.",
    actionsAndRoles: "Led global negotiations representing over 150,000 Inuit across Canada, Greenland, Alaska, and Russia. Championed the foundational link between climate change and basic human rights, reframing global environmental discourse.",
    organizations: "Inuit Circumpolar Council (ICC), Makivik Corporation, United Nations Environment Programme (UNEP) advisory circles.",
    impactAndRecognition: "Officer of the Order of Canada, Nobel Peace Prize nominee (2007 alongside Al Gore), Right Livelihood Award recipient (2015), UN Champion of the Earth, recipient of 20+ honorary university doctorates."
  },
  
  criticalReflection: {
    significanceToday: "Arctic warming directly signals global planetary instability. The Arctic acts as the Earth's air conditioner; what happens in the North affects weather patterns, sea levels, and climate systems worldwide.",
    challengedAssumptions: "This research shifted my view of climate change from purely an abstract environmental or scientific issue to a profound human rights, climate justice, and colonial equity issue. It revealed how southern emissions inflict environmental violence on northern Indigenous communities.",
    whyAudienceShouldCare: "Southern consumption and industrial emissions directly harm Indigenous northern cultures who contributed least to global warming, yet bear the earliest and most severe consequences.",
    mostCompellingEvidence: "The 2005 IACHR petition was the most compelling evidence because it directly reframed legal and moral arguments, establishing that the right to preserve one's culture, health, and land is an indivisible human right under international law.",
    consequencesOfInaction: "Inaction will lead to the complete destruction of traditional Inuit hunting culture, massive displacement from coastal erosion, loss of Inuktitut land-based vocabulary, and catastrophic global climate tipping points."
  },
  
  actionSteps: [
    "Support Indigenous Organizations: Donate to or amplify campaigns led by the Inuit Circumpolar Council (ICC Canada) and Indigenous Climate Action.",
    "Policy Advocacy: Write to local Members of Parliament (MPs) advocating for strict carbon reduction targets and full implementation of the Truth and Reconciliation Commission's (TRC) Calls to Action regarding environmental stewardship.",
    "Reduce Carbon Footprint: Commit to personal energy reduction, sustainable consumption, and educating peers about Arctic environmental justice."
  ],
  
  additionalInfo: {
    inuktitutTerms: [
      { term: "Inuit Qaujimajatuqangit (IQ)", meaning: "Inuit traditional knowledge, values, worldview, and societal wisdom passed down through generations.", phonetic: "Ee-noo-eet Kow-yee-mah-yah-too-kan-geet" },
      { term: "Uggianaqtuq", meaning: "Behaving in strange and unexpected ways — used by Elders to describe the unpredictable, destabilized Arctic weather patterns.", phonetic: "Oo-gee-ah-nak-took" },
      { term: "Inuit Nunangat", meaning: "The Inuit homeland in Canada, comprising Nunavut, Nunavik (Northern Quebec), Nunatsiavut (Labrador), and the Inuvialuit Settlement Region (NWT).", phonetic: "Ee-noo-eet Noo-nan-gat" },
      { term: "Siila", meaning: "Inuktitut traditional name for Sheila Watt-Cloutier.", phonetic: "See-lah" }
    ],
    mediaIdeas: [
      "Interactive timeline of Arctic climate petition milestones",
      "Diagram showing the bioaccumulation of POPs in Arctic marine food webs",
      "Map highlighting the four regions of Inuit Nunangat",
      "Direct quote cards from Sheila Watt-Cloutier's 'The Right to Be Cold'"
    ]
  }
};

export const MLA_SOURCES: MlaSource[] = [
  {
    id: "watt-cloutier-book",
    author: "Watt-Cloutier, Sheila.",
    title: "The Right to Be Cold: One Woman's Story of Protecting Her Culture in the Arctic.",
    publisher: "Allen Lane / Penguin Canada",
    year: "2015",
    type: "Book",
    annotation: "Sheila Watt-Cloutier's personal memoir and advocacy memoir detailing her upbringing in Nunavik, her leadership in the Inuit Circumpolar Council, and her pioneering campaign linking Arctic melting to human rights violations.",
    formattedMla: "Watt-Cloutier, Sheila. The Right to Be Cold: One Woman's Story of Protecting Her Culture in the Arctic. Allen Lane / Penguin Canada, 2015."
  },
  {
    id: "iachr-petition",
    author: "Inuit Circumpolar Council, and Sheila Watt-Cloutier.",
    title: "Petition to the Inter-American Commission on Human Rights Seeking Relief from Violations Resulting from Global Warming Caused by Acts and Omissions of the United States.",
    container: "Inter-American Commission on Human Rights",
    year: "2005",
    url: "https://www.inuitcircumpolar.com/icc-publications/iachr-petition/",
    accessDate: "27 July 2026",
    type: "Legal Petition",
    annotation: "The historic 177-page legal petition presented to the IACHR on December 7, 2005, representing 63 Inuit leaders and elders. It established the world precedent connecting climate change to human rights treaties.",
    formattedMla: "Inuit Circumpolar Council, and Sheila Watt-Cloutier. Petition to the Inter-American Commission on Human Rights Seeking Relief from Violations Resulting from Global Warming Caused by Acts and Omissions of the United States. Inter-American Commission on Human Rights, 7 Dec. 2005. Web. 27 July 2026."
  },
  {
    id: "icc-climate-report",
    author: "Inuit Circumpolar Council Canada.",
    title: "Inuit Priorities for Arctic Policy and Climate Action.",
    container: "ICC Policy Reports",
    year: "2021",
    url: "https://www.inuitcircumpolar.com/",
    accessDate: "27 July 2026",
    type: "Report",
    annotation: "Policy document outlining Inuit Qaujimajatuqangit (IQ) principles in climate adaptation, food sovereignty, and Arctic governance across Inuit Nunangat.",
    formattedMla: "Inuit Circumpolar Council Canada. Inuit Priorities for Arctic Policy and Climate Action. ICC Canada, 2021. Web. 27 July 2026."
  },
  {
    id: "ipcc-arctic",
    author: "Intergovernmental Panel on Climate Change (IPCC).",
    title: "Special Report on the Ocean and Cryosphere in a Changing Climate.",
    container: "Cambridge University Press",
    year: "2019",
    url: "https://www.ipcc.ch/srocc/",
    accessDate: "27 July 2026",
    type: "Academic Journal",
    annotation: "Comprehensive scientific report confirming that Arctic surface temperature increase is more than double to triple the global average, resulting in unprecedented sea ice decline and permafrost degradation.",
    formattedMla: "Intergovernmental Panel on Climate Change (IPCC). Special Report on the Ocean and Cryosphere in a Changing Climate. Cambridge University Press, 2019. Web. 27 July 2026."
  },
  {
    id: "trc-report",
    author: "Truth and Reconciliation Commission of Canada.",
    title: "Honouring the Truth, Reconciling for the Future: Summary of the Final Report of the Truth and Reconciliation Commission of Canada.",
    publisher: "James Lorimer & Company",
    year: "2015",
    type: "Report",
    annotation: "The landmark TRC report articulating 94 Calls to Action, reinforcing Indigenous self-determination, language revitalization, and environmental rights.",
    formattedMla: "Truth and Reconciliation Commission of Canada. Honouring the Truth, Reconciling for the Future: Summary of the Final Report of the Truth and Reconciliation Commission of Canada. James Lorimer & Company, 2015."
  },
  {
    id: "unep-pops",
    author: "United Nations Environment Programme (UNEP).",
    title: "Stockholm Convention on Persistent Organic Pollutants (POPs).",
    container: "United Nations Treaty Series",
    year: "2001",
    url: "https://chm.pops.int/",
    accessDate: "27 July 2026",
    type: "International Treaty",
    annotation: "International treaty legally binding nations to eliminate or restrict persistent organic pollutants, influenced directly by Inuit evidence of chemical contamination in Arctic food chains.",
    formattedMla: "United Nations Environment Programme (UNEP). Stockholm Convention on Persistent Organic Pollutants (POPs). United Nations Treaty Series, vol. 2256, 2001. Web. 27 July 2026."
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1950s–1970s",
    title: "Forced Relocations & Sedentarization",
    description: "Canadian federal policies forced Inuit communities into permanent settlements, disrupting seasonal mobility and land-based lifestyles while introducing residential schools.",
    category: "Historical",
    significance: "Established vulnerability to localized environmental changes and reduced self-determination."
  },
  {
    year: "1980s–1990s",
    title: "Discovery of POPs in Arctic Country Food",
    description: "Scientists and Elders discovered toxic Persistent Organic Pollutants (PCBs, pesticides) carried by global wind and ocean currents, accumulating in Arctic seal blubber and breast milk.",
    category: "Historical",
    significance: "Revealed that southern industrial activity was poisoning northern food webs thousands of kilometers away."
  },
  {
    year: "May 2001",
    title: "Stockholm Convention Signed",
    description: "Sheila Watt-Cloutier and ICC leaders successfully lobbied international governments to sign the Stockholm Convention banning 'the Dirty Dozen' toxic chemicals.",
    category: "Policy",
    significance: "Demonstrated the power of Inuit advocacy in shaping global environmental treaties."
  },
  {
    year: "Dec 7, 2005",
    title: "Historic IACHR Human Rights Petition",
    description: "Watt-Cloutier and 62 Inuit elders filed a 177-page petition to the Inter-American Commission on Human Rights asserting US greenhouse emissions violate Inuit human rights.",
    category: "Legal",
    significance: "First legal case in history to explicitly frame climate change as a human rights violation."
  },
  {
    year: "2007",
    title: "Nobel Peace Prize Nomination",
    description: "Sheila Watt-Cloutier was nominated for the Nobel Peace Prize alongside former US Vice President Al Gore for raising global awareness of climate change risks.",
    category: "Advocacy",
    significance: "Elevated Indigenous voices to the highest echelon of global climate diplomacy."
  },
  {
    year: "2015",
    title: "Publication of 'The Right to Be Cold'",
    description: "Watt-Cloutier released her acclaimed memoir connecting Indigenous cultural rights, Arctic warming, and leadership in the 21st century.",
    category: "Advocacy",
    significance: "Became a foundational text for Indigenous studies and global climate justice."
  },
  {
    year: "2020–Present",
    title: "Inuit-Led Climate Adaptation & IQ Integration",
    description: "Inuit Nunangat communities deploy satellite ice monitoring combined with traditional hunter observations to navigate rapidly changing Arctic conditions safely.",
    category: "Policy",
    significance: "Practical fusion of Inuit Qaujimajatuqangit (IQ) and modern science."
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Inuit Qaujimajatuqangit (IQ)",
    phonetic: "Ee-noo-eet Kow-yee-mah-yah-too-kan-geet",
    meaning: "A deep Inuktitut term encompassing traditional Inuit knowledge, values, cultural practices, worldview, and holistic environmental wisdom passed down through generations.",
    culturalContext: "Serves as the foundation for Inuit self-determination, environmental governance, and community resilience.",
    category: "Inuktitut Term"
  },
  {
    term: "Uggianaqtuq",
    phonetic: "Oo-gee-ah-nak-took",
    meaning: "An Inuktitut phrase meaning 'behaving in strange, unpredictable ways'.",
    culturalContext: "Used specifically by Inuit Elders to describe modern weather patterns, ice behavior, and animal migrations altered by climate change.",
    category: "Inuktitut Term"
  },
  {
    term: "Inuit Nunangat",
    phonetic: "Ee-noo-eet Noo-nan-gat",
    meaning: "The Inuit homeland in Canada, encompassing four regions: Nunavut, Nunavik (northern Quebec), Nunatsiavut (northern Labrador), and the Inuvialuit Settlement Region (NWT).",
    culturalContext: "Covers over 35% of Canada's landmass and 50% of its coastline.",
    category: "Geographic Region"
  },
  {
    term: "Inuit Circumpolar Council (ICC)",
    meaning: "An international non-governmental organization representing approximately 180,000 Inuit across Canada, Greenland, Alaska, and Chukotka (Russia).",
    culturalContext: "Holds United Nations consultative status and advocates for Inuit rights, environmental protection, and sovereignty globally.",
    category: "Policy / Organization"
  },
  {
    term: "Persistent Organic Pollutants (POPs)",
    meaning: "Toxic organic chemical substances (such as PCBs and DDT) that resist environmental degradation and bioaccumulate through food webs.",
    culturalContext: "Carried northward by global air currents, POPs concentrate heavily in Arctic marine mammals and traditional country foods.",
    category: "Policy / Organization"
  },
  {
    term: "Inuktitut / Inuinnaqtun",
    phonetic: "Ee-nook-tee-toot",
    meaning: "The traditional languages spoken by Inuit across Inuit Nunangat.",
    culturalContext: "Language contains specialized terminology for over 50 distinct states of snow and sea ice essential for safe navigation.",
    category: "Inuktitut Term"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "At what rate is the Arctic warming compared to the global average?",
    options: [
      "At the exact same rate as the rest of the world",
      "More than 3 times faster than the global average",
      "Slightly slower than tropical regions",
      "Only during the summer months"
    ],
    correctAnswer: 1,
    explanation: "According to IPCC scientific reports and Arctic observations, the Arctic is warming at over three times the global average rate."
  },
  {
    id: 2,
    question: "What historic action did Sheila Watt-Cloutier and 62 Inuit elders take in December 2005?",
    options: [
      "They signed a commercial oil drilling agreement",
      "They filed the world's first climate change human rights petition with the IACHR",
      "They launched a satellite into orbit",
      "They created a new political party in Ottawa"
    ],
    correctAnswer: 1,
    explanation: "On December 7, 2005, Watt-Cloutier and 62 elders submitted a landmark petition to the Inter-American Commission on Human Rights connecting US greenhouse emissions to human rights violations."
  },
  {
    id: 3,
    question: "What does the Inuktitut term 'Inuit Qaujimajatuqangit' (IQ) mean?",
    options: [
      "A type of traditional kayak hunting gear",
      "Traditional Inuit knowledge, values, and holistic worldview",
      "Modern Western meteorological software",
      "The Inuktitut word for polar bear"
    ],
    correctAnswer: 1,
    explanation: "Inuit Qaujimajatuqangit (IQ) represents traditional Inuit knowledge, societal values, and holistic land-based wisdom."
  },
  {
    id: 4,
    question: "How do Persistent Organic Pollutants (POPs) reach the Arctic?",
    options: [
      "They are manufactured directly in Arctic communities",
      "They are brought by migratory birds only",
      "They travel via southern industrial wind currents and ocean drifts, accumulating in Arctic blubber and food webs",
      "They are natural mineral deposits in Arctic soil"
    ],
    correctAnswer: 2,
    explanation: "POPs originate from southern industrial agricultural and manufacturing processes, traveling north through air and ocean currents where they bioaccumulate in marine mammals."
  },
  {
    id: 5,
    question: "Which international treaty banning 'the Dirty Dozen' toxic chemicals was heavily shaped by Inuit advocacy in 2001?",
    options: [
      "The Kyoto Protocol",
      "The Stockholm Convention on POPs",
      "The Paris Agreement",
      "The Montreal Protocol"
    ],
    correctAnswer: 1,
    explanation: "Sheila Watt-Cloutier and ICC leaders played a central role in negotiating the 2001 Stockholm Convention to ban persistent organic pollutants."
  }
];
