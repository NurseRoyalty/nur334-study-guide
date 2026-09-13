// SATA (Select All That Apply) Questions for NUR 334 Torture Chamber
// Organized by Week: High-Yield, NCLEX-NGN Clinical Judgment Style
// Very Difficult Level

const SATA_QUESTIONS = {
  // WEEK 1: RESPIRATORY
  week1: [
    {
      id: 'w1-sata-001',
      category: 'Respiratory',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A 68-year-old patient with COPD is admitted with dyspnea. The nurse notes a sustained oxygen saturation of 100% on 3L nasal cannula. Which interventions should the nurse initiate? (Select all that apply)',
      options: [
        { text: 'Gradually wean oxygen to lower settings while monitoring SpO2 and respiratory status', correct: true },
        { text: 'Maintain current oxygen settings to prevent acute hypoxemia', correct: false },
        { text: 'Monitor for signs of CO2 retention such as altered mental status and increased somnolence', correct: true },
        { text: 'Educate the patient that maintaining SpO2 at 100% is the target goal for long-term management', correct: false },
        { text: 'Assess breathing patterns and muscle use to evaluate work of breathing', correct: true }
      ]
    },
    {
      id: 'w1-sata-002',
      category: 'Respiratory Diagnostics',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient is undergoing diagnostic testing for suspected active tuberculosis. Which findings would support active TB disease requiring airborne precautions? (Select all that apply)',
      options: [
        { text: 'Positive AFB sputum smear result on microscopy with acid-fast staining', correct: true },
        { text: 'Positive QuantiFERON-TB Gold test result with normal chest X-ray', correct: false },
        { text: 'Clinical presentation of hemoptysis, night sweats, and chronic cough lasting >3 weeks', correct: true },
        { text: 'Positive PPD induration with infiltrates on chest X-ray in an immunocompromised patient', correct: true },
        { text: 'Elevated WBC count and positive sputum culture pending sensitivity results', correct: true }
      ]
    },
    {
      id: 'w1-sata-003',
      category: 'Tracheostomy Care',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient has a new tracheostomy following a laryngectomy for cancer. Which nursing actions are essential to prevent complications? (Select all that apply)',
      options: [
        { text: 'Perform frequent suctioning based on respiratory assessment findings to maintain airway patency', correct: true },
        { text: 'Keep the cuff inflated at all times to completely seal the airway', correct: false },
        { text: 'Monitor for signs of mucus plugging or obstruction that could lead to respiratory distress', correct: true },
        { text: 'Initiate oral intake immediately to promote swallowing function and prevent aspiration', correct: false },
        { text: 'Assess lung sounds and work of breathing to detect early signs of infection or obstruction', correct: true }
      ]
    },
    {
      id: 'w1-sata-004',
      category: 'Pneumonia Management',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'An immobile post-operative patient develops hospital-acquired pneumonia on day 5 after surgery. Which interventions would address the underlying pathophysiology? (Select all that apply)',
      options: [
        { text: 'Encourage use of incentive spirometer to promote alveolar expansion and mobilize secretions', correct: true },
        { text: 'Administer IV antibiotics based on sputum culture and sensitivity results', correct: true },
        { text: 'Maintain patient in low Fowler\'s position to facilitate chest expansion', correct: false },
        { text: 'Increase fluid intake to thin secretions and facilitate expectoration', correct: true },
        { text: 'Limit mobility to reduce metabolic demands and allow respiratory recovery', correct: false }
      ]
    },
    {
      id: 'w1-sata-005',
      category: 'Epistaxis Management',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient with anterior epistaxis presents to urgent care with moderate bleeding. After initial first aid, epistaxis packing is placed. Which nursing assessment findings warrant immediate physician notification? (Select all that apply)',
      options: [
        { text: 'Oxygen saturation dropping to 88% with difficulty breathing around the packing', correct: true },
        { text: 'Patient reports of neck pain or difficulty swallowing that could indicate posterior involvement', correct: true },
        { text: 'Copious amounts of bright red drainage on the packing that continues after 20 minutes of pressure', correct: true },
        { text: 'Patient anxiety about the packing placement and fear of continued bleeding', correct: false },
        { text: 'Elevated heart rate (HR 102) and slightly low blood pressure (BP 118/76) consistent with compensatory response', correct: true }
      ]
    },
    {
      id: 'w1-sata-006',
      category: 'Sleep Apnea',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient with obstructive sleep apnea is prescribed CPAP therapy but reports poor compliance due to discomfort. Which nursing interventions should be implemented? (Select all that apply)',
      options: [
        { text: 'Educate on gradual adaptation by wearing mask during waking hours before nighttime use', correct: true },
        { text: 'Discuss alternative mask styles that may improve comfort and fit (nasal pillows vs full face)', correct: true },
        { text: 'Reassure patient that current mask is only option and compliance will improve over time', correct: false },
        { text: 'Explain the long-term health consequences of untreated OSA including cardiovascular complications', correct: true },
        { text: 'Recommend immediate escalation to BiPAP due to CPAP intolerance', correct: false }
      ]
    },
    {
      id: 'w1-sata-007',
      category: 'Bronchoscopy Post-Procedure',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient has just returned to the unit after undergoing a diagnostic bronchoscopy with conscious sedation. Which nursing actions are critical during the immediate post-procedure period? (Select all that apply)',
      options: [
        { text: 'Maintain NPO status until gag reflex returns to prevent aspiration', correct: true },
        { text: 'Monitor respiratory status closely and ensure oxygen is available at bedside', correct: true },
        { text: 'Assess level of consciousness and ability to protect airway before allowing oral intake', correct: true },
        { text: 'Encourage the patient to eat a light meal once they are alert to replenish energy', correct: false },
        { text: 'Position patient semi-upright and provide suctioning equipment if needed', correct: true }
      ]
    },
    {
      id: 'w1-sata-008',
      category: 'COPD Exacerbation',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient with COPD presents to the ED with acute exacerbation following 4 days of upper respiratory infection symptoms. Which clinical findings are consistent with COPD exacerbation? (Select all that apply)',
      options: [
        { text: 'Increased production of thick, purulent sputum beyond baseline chronic production', correct: true },
        { text: 'Increased dyspnea and use of accessory muscles indicating increased work of breathing', correct: true },
        { text: 'Barrel chest appearance with decreased anteroposterior diameter', correct: false },
        { text: 'Decreased oxygen saturation below patient\'s baseline with acute deterioration', correct: true },
        { text: 'Presence of fever and elevation in white blood cell count suggesting infection', correct: true }
      ]
    },
    {
      id: 'w1-sata-009',
      category: 'Lung Cancer Presentation',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient is found to have an incidental lung mass on chest X-ray performed after a motor vehicle accident. Which characteristics suggest advanced disease requiring staging? (Select all that apply)',
      options: [
        { text: 'Persistent productive cough with hemoptysis for several weeks', correct: true },
        { text: 'Unintentional weight loss of 15 pounds over the past 3 months', correct: true },
        { text: 'Chest wall pain with deep inspiration localized to tumor site', correct: true },
        { text: 'Mass less than 1cm in size with no mediastinal lymph node involvement', correct: false },
        { text: 'Hoarseness due to involvement of recurrent laryngeal nerve', correct: true }
      ]
    },
    {
      id: 'w1-sata-010',
      category: 'Tuberculosis Infection Control',
      difficulty: 'Extremely High',
      week: 'Week 1',
      question: 'A patient has been diagnosed with active pulmonary tuberculosis and is admitted to the hospital. Which precautions and interventions should be implemented? (Select all that apply)',
      options: [
        { text: 'Place patient in airborne isolation room with negative pressure ventilation', correct: true },
        { text: 'Ensure all healthcare workers use N95 respirators when entering the room', correct: true },
        { text: 'Maintain respiratory isolation for minimum 2 weeks of appropriate antibiotic therapy and negative sputum smears', correct: true },
        { text: 'Allow family members to visit freely as TB is not contagious through contact', correct: false },
        { text: 'Educate patient on covering mouth when coughing and importance of medication adherence', correct: true }
      ]
    }
  ],

  // WEEK 2: HEMATOLOGY
  week2: [
    {
      id: 'w2-sata-001',
      category: 'Anemia Pathophysiology',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A 75-year-old patient with iron deficiency anemia presents with dyspnea on exertion and pallor. Which nursing interventions address the underlying pathophysiology? (Select all that apply)',
      options: [
        { text: 'Administer supplemental oxygen to increase oxygen-carrying capacity and reduce dyspnea', correct: true },
        { text: 'Implement activity restrictions and energy conservation measures to reduce oxygen demand', correct: true },
        { text: 'Provide dietary education on iron-rich foods and vitamin C to enhance iron absorption', correct: true },
        { text: 'Administer blood transfusion immediately to rapidly correct hemoglobin deficit', correct: false },
        { text: 'Monitor for signs of heart failure from increased cardiac workload compensating for anemia', correct: true }
      ]
    },
    {
      id: 'w2-sata-002',
      category: 'Polycythemia Vera',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A patient diagnosed with polycythemia vera is at risk for thromboembolic complications. Which assessments and interventions should be prioritized? (Select all that apply)',
      options: [
        { text: 'Assess for signs of DVT including calf pain, swelling, and positive Homan\'s sign', correct: true },
        { text: 'Monitor for stroke symptoms such as facial drooping, arm weakness, and speech difficulty', correct: true },
        { text: 'Encourage aggressive hydration to decrease blood viscosity and improve perfusion', correct: true },
        { text: 'Administer antiplatelet agents per protocol to reduce clotting risk', correct: true },
        { text: 'Recommend venipuncture as preferred phlebotomy method to avoid hematoma formation', correct: false }
      ]
    },
    {
      id: 'w2-sata-003',
      category: 'Transfusion Reactions',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'During a blood transfusion, a patient develops fever (101.5°F), chills, dyspnea, and back pain starting 15 minutes after initiation. Which actions should the nurse take? (Select all that apply)',
      options: [
        { text: 'Immediately stop the transfusion and keep vein patent with normal saline', correct: true },
        { text: 'Notify the physician and verify patient identification and blood product information', correct: true },
        { text: 'Monitor vital signs frequently and assess respiratory status for signs of pulmonary edema', correct: true },
        { text: 'Send blood unit and patient blood samples to laboratory for compatibility re-evaluation', correct: true },
        { text: 'Resume transfusion slowly after administering antipyretics to reduce fever', correct: false }
      ]
    },
    {
      id: 'w2-sata-004',
      category: 'Central Venous Catheter Management',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A patient with a triple-lumen central venous catheter (CVC) is receiving multiple infusions. Which complications should the nurse monitor for? (Select all that apply)',
      options: [
        { text: 'Catheter-related bloodstream infection (CRBSI) presenting with fever, chills, and positive blood cultures', correct: true },
        { text: 'Venous thromboembolism indicated by arm swelling, pain, and decreased upper extremity perfusion', correct: true },
        { text: 'Pneumothorax if catheter placement involved subclavian or internal jugular approach', correct: true },
        { text: 'Extravasation into surrounding tissue causing warmth, erythema, and tissue necrosis with vesicant infusions', correct: true },
        { text: 'Occlusion from clot formation that resolves spontaneously with normal saline flush', correct: false }
      ]
    },
    {
      id: 'w2-sata-005',
      category: 'Blood Component Therapy',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A 55-year-old patient with chronic liver disease requires blood product replacement before surgery. Which component selections are appropriate? (Select all that apply)',
      options: [
        { text: 'Packed RBCs to restore oxygen-carrying capacity if Hgb is <7 or <8 with comorbidities', correct: true },
        { text: 'Fresh frozen plasma to replace coagulation factors and correct INR prolongation', correct: true },
        { text: 'Platelets if platelet count <20K without bleeding or <50K with active bleeding', correct: true },
        { text: 'Whole blood to provide all blood components in one transfusion', correct: false },
        { text: 'Cryoprecipitate if fibrinogen <100 mg/dL causing coagulopathy', correct: true }
      ]
    },
    {
      id: 'w2-sata-006',
      category: 'Hematology Labs',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A patient\'s complete blood count (CBC) shows: WBC 2.1K, Hgb 7.2, Hct 21%, Plt 35K. Which nursing concerns are most urgent? (Select all that apply)',
      options: [
        { text: 'Increased infection risk from severe neutropenia requiring isolation precautions', correct: true },
        { text: 'Bleeding risk from thrombocytopenia requiring fall prevention and activity restrictions', correct: true },
        { text: 'Oxygen delivery compromise from severe anemia potentially causing dyspnea and chest pain', correct: true },
        { text: 'Immediate need for transfusion of all three blood products to normalize counts', correct: false },
        { text: 'Assessment for signs of infection, bleeding, and cardiac symptoms related to anemia', correct: true }
      ]
    },
    {
      id: 'w2-sata-007',
      category: 'Blood Typing and Compatibility',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'Which statements accurately reflect blood type compatibility for transfusion? (Select all that apply)',
      options: [
        { text: 'Type O negative is the universal donor that can be given to any patient type', correct: true },
        { text: 'Type AB positive is the universal recipient that can receive from any blood type', correct: true },
        { text: 'Rh negative patients require RhIG after delivery or with RBCs from Rh positive donors', correct: true },
        { text: 'Minor blood group antibodies are clinically insignificant and do not require crossmatching', correct: false },
        { text: 'Type A patient can safely receive type B blood if transfusion is emergent', correct: false }
      ]
    },
    {
      id: 'w2-sata-008',
      category: 'Acute Hemolytic Reaction',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A patient receiving their second unit of PRBCs develops sudden fever, severe back pain, and hemoglobinuria. Which actions indicate appropriate hemolytic reaction management? (Select all that apply)',
      options: [
        { text: 'Stop transfusion immediately and maintain IV access with normal saline', correct: true },
        { text: 'Notify physician and blood bank of suspected acute hemolytic transfusion reaction', correct: true },
        { text: 'Obtain blood cultures, repeat type and cross, and direct antiglobulin (Coombs) test', correct: true },
        { text: 'Monitor urine output closely and encourage aggressive hydration to prevent acute kidney injury', correct: true },
        { text: 'Continue monitoring vital signs and prepare patient for ICU admission if hemodynamically unstable', correct: true }
      ]
    },
    {
      id: 'w2-sata-009',
      category: 'Disseminated Intravascular Coagulation',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A critically ill patient with sepsis shows signs of DIC with lab values showing prolonged PT/INR, low platelets, elevated D-dimer, and low fibrinogen. Which manifestations warrant immediate intervention? (Select all that apply)',
      options: [
        { text: 'Petechial rash and bleeding from multiple sites indicating systemic bleeding', correct: true },
        { text: 'Oliguria and rising creatinine suggesting DIC-related renal thrombosis', correct: true },
        { text: 'Altered mental status from cerebral microvascular thrombosis', correct: true },
        { text: 'Spontaneous bleeding that will resolve once coagulation cascade exhausts', correct: false },
        { text: 'Rapid administration of blood products and anticoagulation per protocol to stop cascade', correct: true }
      ]
    },
    {
      id: 'w2-sata-010',
      category: 'Thrombocytopenia Management',
      difficulty: 'Extremely High',
      week: 'Week 2',
      question: 'A patient with immune thrombocytopenia (ITP) has a platelet count of 15K and is experiencing spontaneous gum bleeding. Which nursing interventions are appropriate? (Select all that apply)',
      options: [
        { text: 'Use only soft-bristled toothbrush and recommend salt water rinses for oral care', correct: true },
        { text: 'Administer platelet transfusion only if active bleeding or count <20K without bleeding', correct: true },
        { text: 'Monitor for intracranial hemorrhage and assess for headache, vision changes, or altered mental status', correct: true },
        { text: 'Restrict activity and enforce bed rest to prevent minor trauma and bleeding events', correct: true },
        { text: 'Withhold all NSAIDs and recommend acetaminophen only for fever or pain management', correct: true }
      ]
    }
  ],

  // WEEK 3: ELECTROLYTES & PERIOPERATIVE NURSING
  week3: [
    {
      id: 'w3-sata-001',
      category: 'Hyponatremia Pathophysiology',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A 72-year-old patient with SIADH develops severe hyponatremia (Na+ 118 mEq/L) with confusion, seizures, and coma. Which interventions reflect appropriate seizure precautions and correction? (Select all that apply)',
      options: [
        { text: 'Administer 3% hypertonic saline slowly (8-12 mEq/L increase in 24 hours) to avoid osmotic demyelination', correct: true },
        { text: 'Implement seizure precautions including padded bed rails and easy access to suction', correct: true },
        { text: 'Restrict free water intake and encourage sodium-containing fluids depending on etiology', correct: true },
        { text: 'Rapidly correct sodium to normal to immediately stop seizure activity', correct: false },
        { text: 'Monitor neurological status frequently and obtain stat sodium levels during correction', correct: true }
      ]
    },
    {
      id: 'w3-sata-002',
      category: 'Hypernatremia Management',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A delirious patient with diabetes insipidus presents with Na+ 158 mEq/L, severe thirst, and restlessness. Which clinical considerations guide treatment? (Select all that apply)',
      options: [
        { text: 'Identify underlying cause (diabetes insipidus vs excessive water loss) to guide definitive treatment', correct: true },
        { text: 'Initiate free water replacement via IV D5W or NG tube if patient cannot drink safely', correct: true },
        { text: 'Correct sodium slowly (8-10 mEq/L in 24 hours) to prevent cerebral edema from osmotic rebound', correct: true },
        { text: 'Administer hypertonic saline to rapidly lower sodium and resolve neurological symptoms', correct: false },
        { text: 'Monitor for signs of overcorrection including lethargy, seizures, and cerebral edema', correct: true }
      ]
    },
    {
      id: 'w3-sata-003',
      category: 'Hypokalemia Complications',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A patient with K+ 2.8 mEq/L presents after prolonged diarrhea. Which cardiac and neuromuscular findings should trigger urgent intervention? (Select all that apply)',
      options: [
        { text: 'EKG changes including prolonged PR interval, widened QRS, and flattened T waves', correct: true },
        { text: 'Muscle weakness, fatigue, and cramping affecting activities of daily living', correct: true },
        { text: 'Potential for life-threatening dysrhythmias including premature ventricular contractions', correct: true },
        { text: 'Polyuric non-oliguric acute kidney injury from kaluresis', correct: true },
        { text: 'Constipation and decreased GI motility from smooth muscle effects', correct: true }
      ]
    },
    {
      id: 'w3-sata-004',
      category: 'Hyperkalemia Emergency',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A patient with acute kidney injury has K+ 6.8 mEq/L with EKG showing peaked T waves and shortened QT interval. Which interventions should be implemented? (Select all that apply)',
      options: [
        { text: 'Administer calcium gluconate IV to stabilize myocardial membrane and reduce dysrhythmia risk', correct: true },
        { text: 'Give insulin with dextrose or beta-agonist to shift potassium intracellularly', correct: true },
        { text: 'Administer sodium polystyrene sulfonate to enhance GI elimination of potassium', correct: true },
        { text: 'Place on continuous cardiac monitoring and have emergency equipment at bedside', correct: true },
        { text: 'Restrict potassium intake but avoid rapid correction that could cause hypokalemia', correct: true }
      ]
    },
    {
      id: 'w3-sata-005',
      category: 'Hypocalcemia Management',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A post-thyroidectomy patient develops hypocalcemia (total Ca 6.8 mg/dL) with circumoral paresthesias, positive Chvostek\'s and Trousseau\'s signs. Which actions are essential? (Select all that apply)',
      options: [
        { text: 'Administer IV calcium gluconate slowly while monitoring cardiac rhythm for arrhythmias', correct: true },
        { text: 'Implement seizure precautions and assess for tetany indicating neuromuscular irritability', correct: true },
        { text: 'Monitor ionized calcium level and albumin as total calcium may be falsely low if hypoalbuminemic', correct: true },
        { text: 'Assess PTH level and vitamin D status to identify cause (hypoparathyroidism vs vitamin D deficiency)', correct: true },
        { text: 'Initiate oral calcium supplementation immediately without IV calcium to avoid vascular irritation', correct: false }
      ]
    },
    {
      id: 'w3-sata-006',
      category: 'Fluid Volume Deficit',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A post-operative patient on NPO status for 16 hours shows signs of dehydration including tachycardia (HR 112), hypotension (BP 102/58), and poor skin turgor. Which fluid replacement strategies are appropriate? (Select all that apply)',
      options: [
        { text: 'Initiate IV fluid replacement with maintenance fluids at 1-2 mL/kg/hr to restore intravascular volume', correct: true },
        { text: 'Use balanced crystalloids (Lactated Ringer\'s) as first-line for perioperative fluid replacement', correct: true },
        { text: 'Monitor urine output (goal 0.5-1 mL/kg/hr) as indicator of adequate perfusion and renal function', correct: true },
        { text: 'Avoid fluid overload that could precipitate heart failure or pulmonary edema', correct: true },
        { text: 'Use hypertonic saline as preferred fluid to rapidly increase osmolality and shift fluids extravascularly', correct: false }
      ]
    },
    {
      id: 'w3-sata-007',
      category: 'Preoperative Assessment',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'During preoperative assessment, the nurse identifies risk factors for complications. Which findings require physician notification before surgery? (Select all that apply)',
      options: [
        { text: 'Uncontrolled hypertension (BP 180/105) increasing perioperative cardiac risk', correct: true },
        { text: 'Positive pregnancy test in reproductive-aged female requiring surgical plan modification', correct: true },
        { text: 'Active URI with productive cough increasing aspiration and respiratory complication risk', correct: true },
        { text: 'NPO status maintained for >8 hours for elective morning surgery increasing dehydration', correct: true },
        { text: 'Mild anxiety about surgery procedure that can be addressed with reassurance alone', correct: false }
      ]
    },
    {
      id: 'w3-sata-008',
      category: 'Intraoperative Positioning',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A patient is positioned supine for a 3-hour abdominal surgery. Which pressure injury and nerve injury risks should perioperative nurses assess? (Select all that apply)',
      options: [
        { text: 'Occipital pressure injury from head resting directly on operating table without padding', correct: true },
        { text: 'Brachial plexus injury from arm abduction >90 degrees creating nerve stretch', correct: true },
        { text: 'Sciatic nerve compression injury from external rotation of hip and knee', correct: false },
        { text: 'Sacral pressure injury from direct pressure on bony prominence over 2+ hours', correct: true },
        { text: 'Peroneal nerve injury from knee flexion >40 degrees compressing nerve at fibular head', correct: true }
      ]
    },
    {
      id: 'w3-sata-009',
      category: 'Postoperative Pain Management',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'A post-operative patient 4 hours after major surgery reports severe pain (9/10) unrelieved by scheduled analgesics. Which assessment findings could indicate a complication rather than expected surgical pain? (Select all that apply)',
      options: [
        { text: 'Pain disproportionate to surgical procedure with hemodynamic instability (tachycardia, hypotension)', correct: true },
        { text: 'Localized pain at surgical site with warmth, erythema, and purulent drainage suggesting infection', correct: true },
        { text: 'Pain radiating down lower extremities with calf swelling suggesting DVT', correct: true },
        { text: 'Chest pain with dyspnea suggesting pulmonary embolism or cardiac complication', correct: true },
        { text: 'Expected incisional pain that responds well to opioid analgesia within 1-2 hours', correct: false }
      ]
    },
    {
      id: 'w3-sata-010',
      category: 'Malignant Hyperthermia',
      difficulty: 'Extremely High',
      week: 'Week 3',
      question: 'During anesthesia induction, the anesthesiologist notes early signs of malignant hyperthermia (MH) including muscle rigidity and elevated end-tidal CO2. Which immediate interventions are critical? (Select all that apply)',
      options: [
        { text: 'Discontinue all triggering anesthetic agents immediately and switch to safe anesthetics', correct: true },hyperthermia { text: 'Administer dantrolene sodium 2.5 mg/kg IV push and prepare additional doses if needed', correct: true },
        { text: 'Begin active cooling measures including IV cold saline, ice packs, and peritoneal lavage', correct: true },
        { text: 'Hyperventilate with 100% oxygen to eliminate residual volatile anesthetic from lungs', correct: true },
        { text: 'Continue surgery as planned since early signs may resolve with continued anesthetic', correct: false }
      ]
    }
  ]
};

// Export for use in torture chamber
if (typeof window !== 'undefined') {
  window.SATA_QUESTIONS = SATA_QUESTIONS;
}
