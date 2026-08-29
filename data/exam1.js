/* ============================================================
   Exam 1 — Week 1 Comprehensive Assessment

   Live lecture respiratory + voice-over + Big Concept fundamentals.
   All SATA format. Topics from professor emphasis:
   - Diuretics, NSAIDs, steroids, insulin, antihypertensives
   - Assessment skills and specimen collection
   - Atypical illness in older adults
   - Fever and metabolic demand
   ============================================================ */
window.EXAM_DATA = {
  id: "exam1",
  title: "Exam 1 — Week 1 Comprehensive Assessment",

  questions: [
    /* ========== LIVE LECTURE RESPIRATORY (10 questions) ========== */
    {
      stem: "A patient who had anterior epistaxis with packing placed 6 hours ago now has the packing removed. Which assessment should the nurse perform <b>FIRST</b>?",
      options: [
        "Pain level on a 0–10 scale",
        "Oxygen saturation and airway patency",
        "Drainage on the packing that was removed",
        "Patient's comfort level with eating/drinking"
      ],
      answer: 1,
      rationale: "ABCs always come first. The packing can obstruct the airway or impair breathing. Using ABCs (Airway, Breathing, Circulation), airway status is the first priority. Pain and comfort are important but secondary.",
      topic: "Assessment Priority"
    },
    {
      stem: "You need to collect a sputum sample for culture and sensitivity from a patient with suspected pneumonia. What is most important to communicate to the patient?",
      options: [
        "Spit the sputum directly into the sterile cup",
        "Cough deeply to bring up sputum from the lower lungs, not saliva",
        "Rinse your mouth with water first",
        "Collect the sample right after meals for best yield"
      ],
      answer: 1,
      rationale: "A good sputum sample requires a cough that brings up actual sputum from the lower respiratory tract, not just saliva. The culture needs a genuine specimen from where infection lives. Collecting early morning or 1–2 hours after eating is ideal, not right after meals.",
      topic: "Specimen Collection"
    },
    {
      stem: "A patient is scheduled for bronchoscopy this morning to rule out lung cancer. When should NPO (nothing by mouth) start, and why?",
      options: [
        "2 hours before the procedure (patient just needs an empty stomach)",
        "4 hours before (standard preop fasting)",
        "8 to 12 hours before (the procedure requires sedation and gag reflex protection)",
        "24 hours before (to ensure no aspiration risk)"
      ],
      answer: 2,
      rationale: "Bronchoscopy requires sedation, so a full NPO period of 8–12 hours is standard to prevent aspiration. After the procedure, the patient cannot eat or drink until the gag reflex returns. Standard 4-hour fasting is too short for a procedure involving sedation.",
      topic: "Procedure Safety"
    },
    {
      stem: "You are suctioning a patient's endotracheal tube. How long should each pass take?",
      options: [
        "As long as needed to clear all secretions (30–60 seconds)",
        "10 seconds or less per pass",
        "15–20 seconds maximum",
        "5 seconds (suctioning is very traumatic)"
      ],
      answer: 1,
      rationale: "Each suctioning pass should be under 10 seconds to minimize airway trauma and hypoxemia. If more suctioning is needed, make multiple passes with re-oxygenation between them. Pre-oxygenating before and after suctioning helps maintain saturation.",
      topic: "Suctioning Safety"
    },
    {
      stem: "A patient with a tracheostomy suddenly coughs forcefully and the trach tube comes completely out. What is your <b>FIRST</b> action?",
      options: [
        "Call for help and get a new trach",
        "Insert the obturator into the replacement outer cannula",
        "Reinsert the patient's original trach tube immediately",
        "Assess the patient's breathing status before doing anything"
      ],
      answer: 1,
      rationale: "The obturator is a guide that goes into the OUTER cannula only (never left in place). The sequence is: (1) obturator into outer cannula, (2) extend the neck and open the stoma, (3) insert the outer cannula with obturator, (4) immediately remove the obturator, (5) assess lung sounds and O₂ sat.",
      topic: "Tracheostomy Emergency"
    },
    {
      stem: "A patient with a tracheostomy wants to speak using a speaking valve. What must be true first?",
      options: [
        "The cuff must be inflated to seal the trach",
        "The cuff must be deflated so air can flow around it",
        "The patient must be on the ventilator",
        "The inner cannula must be removed"
      ],
      answer: 1,
      rationale: "A passive mirror (speaking) valve is a one-way valve that requires the cuff to be deflated. If the cuff were inflated, air would have no way around it and the patient would not be able to exhale for phonation. The deflated cuff lets air flow past the valve for speech.",
      topic: "Tracheostomy Care"
    },
    {
      stem: "You're caring for a patient with a new tracheostomy. Which items <b>MUST</b> always be at the bedside for safety?",
      options: [
        "Obturator, two spare trach tubes (one same size, one smaller), Ambu bag with trach adapter",
        "Obturator and one spare trach tube",
        "Just a suction machine",
        "Obturator and an emergency trach kit"
      ],
      answer: 0,
      rationale: "If a trach is accidentally dislodged, you need: (1) the obturator to reinsert it, (2) a replacement tube the same size as the current one, (3) a smaller tube in case of swelling/edema, and (4) an Ambu bag with a trach adapter—not a face mask, because air comes out the trach, not the mouth/nose.",
      topic: "Tracheostomy Safety"
    },
    {
      stem: "A patient with a new tracheostomy is at risk for thick secretions that could plug the airway. Which nursing interventions <b>PREVENT</b> this thickening?",
      options: [
        "Change the inner cannula frequently",
        "Ensure adequate humidification and keep the patient well hydrated",
        "Keep the patient on bed rest",
        "Suction the trach every 2 hours"
      ],
      answer: 1,
      rationale: "Changing the inner cannula won't prevent thick secretions—it helps remove them once they're thick. Frequent suctioning addresses thick secretions after they develop but doesn't prevent them. Bed rest worsens secretion clearance. Humidification and hydration PREVENT secretions from thickening in the first place.",
      topic: "Secretion Management"
    },
    {
      stem: "A patient with an infection has a fever of 39°C (102°F). Why is it important to bring this fever down?",
      options: [
        "Fever always causes permanent brain damage",
        "High temperature increases cellular metabolic activity, increasing oxygen demand",
        "Fever will cause the patient to become dehydrated",
        "Masking fever with acetaminophen treats the infection"
      ],
      answer: 1,
      rationale: "Every degree of temperature rise increases cellular metabolism and O₂ consumption—cells need more oxygen to fuel the increased metabolic activity. This is why normalizing temperature is a priority in patients with respiratory compromise or limited oxygen reserves.",
      topic: "Metabolic Demand"
    },
    {
      stem: "You're doing morning rounds on a post-op patient with a tracheostomy, Foley catheter, NG tube to suction, and two IV lines. What is part of your ongoing assessment?",
      options: [
        "Only the trach (that's the most critical)",
        "The trach and IVs (tubes are always monitored)",
        "Everything connected to the patient is part of your assessment—trach, Foley output/appearance, NG tube drainage/function, IVs for patency/infiltration",
        "Just ask the patient how they feel"
      ],
      answer: 2,
      rationale: "Every piece of equipment, tube, and line connected to a patient is part of the ongoing assessment. For a Foley, check urine color, volume, and patency. For an NG tube, assess drainage characteristics (bright red indicates bleeding, green/brown indicates GI content) and function. This comprehensive assessment catches problems early.",
      topic: "Comprehensive Assessment"
    },

    /* ========== FUNDAMENTALS BIG CONCEPTS (15 SATA questions) ========== */

    /* Diuretics Questions */
    {
      stem: "A 68-year-old patient on a loop diuretic for heart failure needs monitoring for which potential complications? Select all that apply.",
      options: [
        "Hypokalemia and cardiac arrhythmias",
        "Acute kidney injury if dehydration occurs",
        "Hyperglycemia and glucose dyscontrol",
        "Hyperkalemia and renal protection",
        "Orthostatic hypotension on standing",
        "Gout or uric acid elevation"
      ],
      answer: [0, 1, 2, 4, 5],
      rationale: "Loop diuretics cause significant potassium loss (hypokalemia), which can trigger arrhythmias. Volume depletion can precipitate AKI. These drugs also worsen glucose control and can trigger gout. Orthostatic hypotension is common due to fluid loss. Hyperkalemia and renal protection are opposite effects—diuretics do not protect kidneys; chronic use can harm them.",
      topic: "Diuretic Safety"
    },
    {
      stem: "Before administering a diuretic, which labs and assessments should the nurse verify? Select all that apply.",
      options: [
        "Serum potassium and renal function (BUN/Creatinine)",
        "Orthostatic vital signs (lying, sitting, standing)",
        "Current blood glucose level",
        "Hearing acuity",
        "Ability to get to bathroom or access urinal",
        "Liver function tests"
      ],
      answer: [0, 1, 2, 4],
      rationale: "Diuretics deplete potassium and can worsen renal function—both must be checked. Orthostatic vitals detect volume depletion and hypotension risk. Glucose dyscontrol is a known side effect, so baseline glucose matters. Access to toilet/urinal is a safety priority (frequent urination). Hearing acuity isn't directly diuretic-related (though some IV loop diuretics at high doses can cause ototoxicity, this isn't a routine pre-dose check). Liver function is not a standard diuretic monitoring parameter.",
      topic: "Diuretic Safety"
    },

    /* NSAIDs Questions */
    {
      stem: "An older adult taking an NSAID for chronic arthritis pain presents with fatigue and dark tarry stools. Which nursing actions are appropriate? Select all that apply.",
      options: [
        "Hold the NSAID immediately and notify the provider",
        "Check hemoglobin/hematocrit to assess for anemia from GI bleeding",
        "Give acetaminophen instead without checking with provider",
        "Recommend taking the NSAID with food or milk to reduce GI upset",
        "Monitor stool color and report bright red or black stools",
        "Increase oral iron intake to compensate for bleeding"
      ],
      answer: [0, 1, 4],
      rationale: "Dark tarry stools suggest GI bleeding—NSAID use is a major risk factor. Hold the drug and alert the provider. Check CBC to quantify blood loss/anemia. Monitor ongoing for bleeding signs. Do NOT switch to acetaminophen without provider order (drug interaction risk, max dose issues). While taking NSAIDs with food helps prevention, this patient is bleeding NOW—stopping is appropriate. Iron supplementation without addressing the source (GI bleed) is not the priority; stopping the bleeding drug is.",
      topic: "NSAID Safety"
    },
    {
      stem: "Before a patient starts long-term NSAID therapy for pain management, the nurse should counsel on which preventive measures? Select all that apply.",
      options: [
        "Take the lowest effective dose for the shortest duration possible",
        "Take with food or milk to reduce gastric irritation",
        "Use the highest dose available to get maximum effect",
        "Monitor blood pressure regularly (NSAIDs can worsen hypertension)",
        "Report any signs of GI upset, bleeding, or dark stools immediately",
        "Assume NSAIDs are safe for long-term daily use without monitoring"
      ],
      answer: [0, 1, 3, 4],
      rationale: "NSAIDs carry GI, renal, and cardiovascular risks. Lowest dose for shortest duration is standard. Food/milk buffering helps. BP monitoring is essential—NSAIDs reduce renal perfusion and can raise BP. Reporting GI symptoms early catches bleeding before it's severe. High-dose NSAID use and long-term daily use without monitoring increase all risks significantly.",
      topic: "NSAID Safety"
    },

    /* Steroid Questions */
    {
      stem: "A patient on systemic corticosteroids for respiratory inflammation should be monitored for which complications? Select all that apply.",
      options: [
        "Hyperglycemia and steroid-induced diabetes",
        "Hypokalemia and muscle weakness",
        "Immunosuppression and increased infection risk",
        "Mood changes (irritability, agitation, euphoria)",
        "Gastrointestinal upset and ulcer risk",
        "Bone loss and osteoporosis with long-term use"
      ],
      answer: [0, 1, 2, 3, 4, 5],
      rationale: "Corticosteroids have broad effects: they increase glucose (hyperglycemia risk, especially in diabetics), deplete potassium (muscle weakness, arrhythmia risk), suppress immune response (infection risk), cause mood disturbances, upset the GI tract (give with food), and cause bone loss (long-term). All six are legitimate monitoring concerns.",
      topic: "Steroid Safety"
    },
    {
      stem: "Which nursing interventions are appropriate when administering chronic corticosteroids? Select all that apply.",
      options: [
        "Always give with food to protect the GI tract",
        "Monitor fasting blood glucose and HbA1c regularly",
        "Educate patient to recognize infection signs (fever, cough, wound changes)",
        "Abruptly discontinue if the patient feels better",
        "Space out doses (e.g., alternate-day dosing when possible) to reduce side effects",
        "Monitor weight and assess for signs of sodium retention/edema"
      ],
      answer: [0, 1, 2, 4, 5],
      rationale: "Give steroids with food (GI protection). Monitor glucose because hyperglycemia is common. Teach infection vigilance—steroids impair immunity. NEVER abruptly stop steroids (risk of adrenal crisis); taper gradually. Alternate-day dosing or lowest effective dose reduces side effects. Monitor weight/edema because steroids can cause sodium/fluid retention.",
      topic: "Steroid Safety"
    },

    /* Insulin Questions */
    {
      stem: "A 45-year-old patient on insulin reports feeling shaky, sweaty, and confused while at work. Blood glucose is 55 mg/dL. Which nursing actions are appropriate? Select all that apply.",
      options: [
        "Give 15 grams of rapid-acting carbohydrate (juice, glucose tablet)",
        "Recheck blood glucose in 15 minutes and repeat if still <100 mg/dL",
        "Call for immediate IV dextrose without checking glucose first",
        "Have the patient lie down to prevent falls during hypoglycemia",
        "Notify provider and review insulin timing/dose",
        "Give insulin to prevent hyperglycemia rebound"
      ],
      answer: [0, 1, 3, 4],
      rationale: "Hypoglycemia (tremor, sweat, confusion) is a medical emergency. Rapid carbs (juice, glucose tablet) are first-line; recheck in 15 min. Fall risk is real—lying down prevents injury. Notify provider to adjust insulin dose/timing. Do NOT give IV dextrose in conscious patient (oral carbs work fast enough). Do NOT give MORE insulin—that worsens hypoglycemia. Rebound hyperglycemia happens, but is managed after the immediate crisis.",
      topic: "Insulin Safety"
    },
    {
      stem: "Before administering insulin, which checks must the nurse complete? Select all that apply.",
      options: [
        "Verify current blood glucose level (especially if high-dose insulin)",
        "Check the insulin type and confirm onset/peak/duration match the patient's needs",
        "Verify the dose against the provider's order and patient chart",
        "Skip glucose check if the patient 'always takes this dose'",
        "Check insulin expiration date and clarity (cloudy indicates contamination)",
        "Confirm the injection site is appropriate and rotate to prevent lipohypertrophy"
      ],
      answer: [0, 1, 2, 4, 5],
      rationale: "Always verify glucose before high-dose insulin—missed hypoglycemia is dangerous. Know the insulin type and its pharmacokinetics. Double-check dose against order. Glucose check is NEVER skipped (every patient/every time). Check expiration/clarity—expired or cloudy insulin is unsafe. Rotate injection sites to prevent tissue damage. Never assume a dose is safe without verification.",
      topic: "Insulin Safety"
    },

    /* Antihypertensive Questions */
    {
      stem: "A patient on an ACE inhibitor develops a persistent dry cough and mild throat tightness. Which action should the nurse take?",
      options: [
        "Tell the patient this is a normal side effect and will go away",
        "Notify the provider immediately (cough may progress to angioedema)",
        "Give cough drops and reassure",
        "Switch to a beta-blocker without provider input",
        "Continue the drug as prescribed"
      ],
      answer: 1,
      rationale: "ACE inhibitors commonly cause dry cough (due to ACE inhibition of bradykinin breakdown). While cough alone is annoying, throat tightness or any sign of angioedema (airway swelling) is a medical emergency and a contraindication. Notify provider immediately—angioedema can be life-threatening. Do not continue the drug if angioedema develops.",
      topic: "Antihypertensive Safety"
    },
    {
      stem: "A patient on a beta-blocker for hypertension comes to the clinic reporting fatigue and inability to feel chest pain during exertion. Which nursing assessment is most important?",
      options: [
        "Ask about recent weight gain",
        "Check heart rate and blood pressure; assess for signs of hypoglycemia and hypotension",
        "Reassure the patient that beta-blockers are safe for everyone",
        "Recommend stopping the beta-blocker because it's causing fatigue",
        "Check for asthma or COPD symptoms (beta-blockers can worsen airway obstruction)"
      ],
      answer: 1,
      rationale: "Beta-blockers cause fatigue and can mask hypoglycemia (reduced tremor/tachycardia response) and angina (reduced chest pain sensation). Check HR (bradycardia), BP (hypotension), glucose, and assess for wheezing. Beta-blockers are contraindicated in asthma/COPD—this is a critical safety check. Do NOT stop abruptly (rebound hypertension). Notify provider for medication adjustment if adverse effects are severe.",
      topic: "Antihypertensive Safety"
    },

    /* Assessment & Specimen Collection */
    {
      stem: "Which statements about obtaining specimen cultures are correct? Select all that apply.",
      options: [
        "Sputum culture must be expectorated from the lower lungs, not saliva from the mouth",
        "Blood cultures should be drawn from two separate sites to confirm bacteremia",
        "Catheterized urine for culture comes from the drainage bag to save time",
        "Early morning sputum collection yields better specimens than evening collection",
        "Sterile technique and proper container choice are essential for all cultures"
      ],
      answer: [0, 1, 3, 4],
      rationale: "Sputum = lower airway specimen (not saliva). Two blood culture sites confirm bacteremia vs. contamination. Early morning sputum is best (overnight accumulation). Catheterized urine should be from the catheter port using sterile technique, NOT the drainage bag (too contaminated). Sterile technique and proper containers are non-negotiable for all cultures.",
      topic: "Specimen Collection"
    },
    {
      stem: "When assessing orthostatic vital signs in an older adult, which findings indicate orthostatic hypotension requiring provider notification? Select all that apply.",
      options: [
        "Heart rate increase of >20 bpm from lying to standing",
        "Systolic blood pressure drop of >20 mmHg from lying to standing",
        "Diastolic blood pressure drop of >10 mmHg",
        "Patient reports dizziness or lightheadedness on standing",
        "A single blood pressure reading that is slightly elevated"
      ],
      answer: [0, 1, 2, 3],
      rationale: "Orthostatic hypotension criteria: HR increase >20 OR systolic drop >20 mmHg OR diastolic drop >10 mmHg, plus symptoms (dizziness). These indicate volume depletion or medication effect (diuretics, vasodilators). Single elevated BP reading is not orthostatic hypotension. Fall risk increases significantly—notify provider for medication or volume adjustment.",
      topic: "Assessment Priority"
    },

    /* Big Concepts */
    {
      stem: "An older adult with pneumonia presents with acute confusion instead of fever. The family says this is 'normal for him.' Which actions should the nurse take? Select all that apply.",
      options: [
        "Investigate the confusion as a possible sign of infection or acute illness",
        "Assume this is baseline cognitive decline and do not escalate",
        "Check vital signs, O₂ saturation, glucose, and assess for infection/sepsis",
        "Ask about recent medication changes that could cause altered mental status",
        "Order a head CT to rule out stroke",
        "Report new-onset confusion to the provider for assessment"
      ],
      answer: [0, 2, 3, 5],
      rationale: "Atypical illness in older adults: confusion replaces fever, chest pain, or dyspnea as the red flag. Do NOT dismiss confusion as 'normal'—it's an acute change. Investigate with vitals, O₂, glucose, infection markers. Medications (anticholinergics, sedatives, diuretics) can cause confusion. Notify provider—confusion + pneumonia suggests worsening infection or sepsis. Head CT is not routine; infection workup comes first.",
      topic: "Assessment Priority"
    },
    {
      stem: "Which interventions help manage fever in a patient with limited oxygen reserves (e.g., COPD, pneumonia)? Select all that apply.",
      options: [
        "Normalize temperature because each degree of fever increases cellular O₂ demand",
        "Administer antipyretics as ordered and monitor effectiveness",
        "Ensure adequate hydration (oral fluids or IV) to maintain perfusion",
        "Allow fever to 'burn out the infection' without intervention",
        "Cool the patient with ice water or alcohol baths if antipyretics fail",
        "Monitor O₂ saturation closely because fever increases workload on the lungs"
      ],
      answer: [0, 1, 2, 5],
      rationale: "Every degree of fever increases metabolism and O₂ consumption—critical in patients with limited reserves. Lower fever with antipyretics as ordered. Hydration supports temperature regulation and perfusion. Fever 'burning out' infection is an old myth—treatment is appropriate. Ice water/alcohol baths are outdated and uncomfortable. Monitor O₂ sat continuously because fever increases respiratory demand.",
      topic: "Metabolic Demand"
    },
    {
      stem: "When communicating a critical patient change to the provider using SBAR, which elements should be included? Select all that apply.",
      options: [
        "Situation: What is happening RIGHT NOW",
        "Background: Patient history over the past several years",
        "Assessment: Your clinical interpretation of what the data means",
        "Recommendation: What you think the provider should do",
        "Repeat the patient's entire medical history chronologically",
        "Provide data without interpretation so the provider decides alone"
      ],
      answer: [0, 1, 2, 3],
      rationale: "SBAR: (S) current status concisely, (B) relevant background (hours/days, not years), (A) your assessment/interpretation, (R) specific recommendation. This structure ensures clarity and advocacy. Don't overwhelm with history; don't withhold interpretation—providers want your clinical judgment. Balanced communication is the goal.",
      topic: "Communication"
    }
  ]
};

window.TOPIC_ORDER = [
  "Assessment Priority",
  "Specimen Collection",
  "Procedure Safety",
  "Suctioning Safety",
  "Tracheostomy Emergency",
  "Tracheostomy Care",
  "Tracheostomy Safety",
  "Secretion Management",
  "Metabolic Demand",
  "Comprehensive Assessment",
  "Diuretic Safety",
  "NSAID Safety",
  "Steroid Safety",
  "Insulin Safety",
  "Antihypertensive Safety",
  "Communication"
];
