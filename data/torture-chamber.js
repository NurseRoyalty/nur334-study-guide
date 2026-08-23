/* ============================================================
   torture-chamber.js — "The Torture Chamber" practice exam.

   A cumulative exam where EVERY question is select-all-that-apply.
   Content comes only from lecture material already taught on the
   topic pages. Aim for roughly one question per 10 of your topic
   pages' content, weighted toward whatever the instructor says the
   final actually emphasizes.

   ============================================================
   THE FOUR ANTI-GIVEAWAY RULES. READ BEFORE ADDING QUESTIONS.
   ============================================================
   These exist because each one was violated first and fixed later.
   Authoring naturally produces all four defects; scan for them
   explicitly after writing questions in bulk.

   1. INTERLEAVE the correct and incorrect options.
      The failure mode: listing every correct option first and the
      wrong one last. In the original site 48 of 50 questions did
      this and 38 keys were literally [0,1,2,3] — the whole exam was
      answerable without reading a single option.
      Check: tabulate the positions of the WRONG options across the
      whole file. There should be no pattern.

   2. VARY the number of correct options, and keep the spread even.
      The failure mode: nearly every question having exactly four
      correct, which makes "pick four" a viable strategy. Mix 1, 2,
      3, 4, 5, and all-correct. A couple of all-correct items and a
      couple of single-correct items are what make the set feel
      genuinely uncertain. Also mix 5-option and 6-option questions
      so "4 of 5" is never the default shape.
      Check: count correct-options-per-question and look at the
      histogram.

   3. NO LENGTH BIAS, and NO SELF-EXPLAINING correct options.
      The failure mode: the right answer is the longest option and
      the only one carrying a "because…" clause, so it reads as the
      one that knows what it's talking about. Trim the explanation
      into the rationale, and give the distractors plausible-sounding
      reasoning of their own (right reasoning, wrong fact).
      Check: compare average correct-option length to average
      wrong-option length, per question.

   4. NO STEM-WORD ECHO.
      The failure mode: a distinctive phrase from the stem appears
      only in the correct options, so the key is readable from
      vocabulary alone. Reword the stem, or put the same phrasing
      into a distractor.
      Check: for each question, find words that appear in the stem
      and in the correct options but in no incorrect option.

   Distractors should be plausible near-misses built from the same
   lecture material — a flipped sign, a wrong threshold, the right
   action attributed to the wrong person, a therapeutic value offered
   as a toxic one. When you drop a correct option to rebalance rule 2,
   the best replacement distractor is usually built from the fact you
   just removed, stated wrongly. Nothing is lost; it gets tested from
   the other side.

   ============================================================
   ORDERING
   ============================================================
   Scramble with a RANDOM SHUFFLE plus rejection sampling, not a
   greedy "place the topic with the most remaining questions next"
   pass. Greedy satisfies the no-adjacent-duplicates rule and still
   clusters badly — it front-loads the big topics into a visible
   rotation and then leaves them sparse. Accept an arrangement only if:

     * no two adjacent questions share a topic;
     * no two adjacent questions are both all-correct;
     * every topic with 4+ questions has a minimum gap of 3;
     * no third of the exam holds far more of one topic than another;
     * no 3-topic cycle repeats three times running (A B C A B C A B C).

   ============================================================
   PROVENANCE NOTE
   ============================================================
   Keep a dated log here of what changed and why — question count,
   per-topic counts, the answer-count spread, and any rebalance. It is
   the only record of the design decisions once the questions are
   shuffled.

   --- 2026-08-23: Initial build (20 questions, 4 Week 1 topics) ---
   Replaced the 3 demo questions with a real exam covering all four
   Week 1 topics, per explicit user request for an "extremely hard,"
   true-challenge, 100%-SATA exam. Content is drawn only from the four
   Week 1 lecture pages — nothing from the Fundamentals Review pages
   or from outside the transcripts.

   Per-topic counts (5 questions each, 20 total):
     Respiratory Labs & Diagnostics   5
     Upper Respiratory Problems       5
     Head & Neck Cancer               5
     Lower Respiratory Problems       5

   Answer-count spread (rule 2): 1 correct x2, 2 correct x3,
   3 correct x5, 4 correct x5, 5 correct x3, all-correct x2 (one
   6-option, one 8-option). Option-count spread: 6-option x4,
   7-option x9, 8-option x7 — so neither "pick four" nor "4 of 5"
   is ever a viable shortcut.

   Difficulty devices used, beyond simple recall: thresholds that
   must be applied rather than recalled (the three tuberculin
   induration cut-offs, each attached to a different risk category);
   expected-versus-report discrimination (blood-tinged mucus and a
   sore throat after bronchoscopy sit beside an unexplained
   tachycardia and abrupt dyspnea); paired near-misses where the
   right fact is attributed to the wrong study, drug, tube or
   procedure (MRI contrast described as iodine-based, protamine
   offered for warfarin, the artificial larynx's advantages
   attributed to esophageal speech); and flipped signs (leukopenia
   for leukocytosis, a mature-neutrophil "shift to the left",
   supine positioning to hold the mandible forward).

   ORDERING: 4 topics x 5 questions in 20 slots, so the full minimum-
   gap-3 rule is satisfiable and was enforced (actual minimum gap is
   3). The two all-correct items sit at positions 10 and 14, not
   adjacent. The topic sequence deliberately avoids a fixed rotation
   (it is not ABCD ABCD ...), and no 3-topic cycle repeats three
   times running.
   ============================================================ */
window.EXAM_DATA = {
  id: "torture-chamber",
  title: "The Torture Chamber",

  questions: [
    {
      /* 3 correct of 7. Wrong options at 0, 3, 5, 6. */
      stem: "Ninety minutes after a bronchoscopy with transbronchial biopsy, a nurse reassesses the patient. Which findings require the nurse to notify the provider? Select all that apply.",
      options: [
        "Sputum lightly streaked with blood",
        "Abrupt onset of shortness of breath",
        "Heart rate risen from 78 to 122 with no clear explanation",
        "Drowsiness that lessens when the patient is spoken to",
        "Oxygen saturation of 88% on room air",
        "Blood pressure unchanged from the pre-procedure baseline",
        "Report that the throat feels sore"
      ],
      answers: [1, 2, 4],
      rationale: "Abrupt shortness of breath points to a pneumothorax and an unexplained rise in heart rate points to hemorrhage — the two complications watched for after any bronchoscopy or lung biopsy. A saturation of 88% is well under the normal 95% or better, and a low saturation is itself consistent with a pneumothorax. The distractors are all expected findings: blood-tinged mucus comes from minor trauma by the scope and is documented and monitored rather than reported, the sore throat follows the anesthetized pharynx, sedation-related drowsiness that lightens with stimulation is anticipated, and an unchanged blood pressure is reassuring rather than alarming.",
      topic: "Respiratory Labs & Diagnostics"
    },
    {
      /* 3 correct of 7. Wrong options at 2, 3, 5, 6. */
      stem: "A patient's tracheostomy tube is coughed out at the bedside. Which actions belong in the nurse's response? Select all that apply.",
      options: [
        "Extend the patient's neck to open the tissue over the stoma",
        "Insert the obturator into the outer cannula before placing it",
        "Leave the obturator in place until breath sounds are confirmed",
        "Scrub the inner cannula with a brush before reinserting it",
        "Auscultate breath sounds and secure the tube once it is in",
        "Inflate the cuff before the outer cannula enters the stoma",
        "Retrieve the obturator from the clean utility room"
      ],
      answers: [0, 1, 4],
      rationale: "The neck is extended to straighten the tissue and open the stoma, the obturator goes into the outer cannula so its point can ease the tube in, and breath sounds are checked and the tube secured at the end. The obturator must come out immediately once the tube is seated — leaving it in obstructs the airway, which is the reverse of what that distractor claims. Scrubbing an inner cannula is routine care for a metal Jackson tube, not part of an emergency reinsertion; the cuff is not inflated before the tube is in; and the obturator is taped at the bedside at all times precisely so no one has to go looking for it.",
      topic: "Upper Respiratory Problems"
    },
    {
      /* 4 correct of 7. Wrong options at 1, 4, 6. */
      stem: "A patient is 5 days post total laryngectomy. Which statements reflect this patient's anatomy and care needs? Select all that apply.",
      options: [
        "Rescue breathing is delivered at the stoma with a pediatric adapter",
        "The nose and mouth remain a backup route if the stoma is blocked",
        "Coughed secretions come out through the stoma",
        "Humidification is added because the upper airway is bypassed",
        "Swallowing is permanently lost because the esophagus is resected",
        "A temporary tube feeding may be used while swelling resolves",
        "Speech is preserved because only part of the larynx is removed"
      ],
      answers: [0, 2, 3, 5],
      rationale: "After a laryngectomy the stoma is the only airway — it is where a bag-valve device with a pediatric adapter goes in a code, where secretions come out on coughing, and the reason humidification must replace what the nose and mouth normally provide. The esophagus is left intact, so eating by mouth returns once post-operative swelling settles, with a tube feeding only as a bridge. The nose and mouth are no longer connected to the airway at all, and the larynx is removed entirely, which is why voice restoration methods exist.",
      topic: "Head & Neck Cancer"
    },
    {
      /* 3 correct of 7. Wrong options at 0, 3, 5, 6. */
      stem: "A patient with COPD arrives in the emergency department with a saturation of 82% and severe dyspnea. The chart notes a history of CO2 retention. Which statements should guide the nurse's care? Select all that apply.",
      options: [
        "Oxygen is withheld until an arterial blood gas result is available",
        "Oxygen is titrated rather than withheld, commonly to around 88 to 90%",
        "In a CO2 retainer, a low oxygen level is the stimulus to breathe",
        "CO2 narcosis is prevented by keeping the saturation above 95%",
        "An arterial blood gas is the only way to confirm CO2 retention",
        "Noninvasive ventilation is used in place of oxygen in this situation",
        "CO2 retention shifts the drive to breathe to a rising CO2 level"
      ],
      answers: [1, 2, 4],
      rationale: "A hypoxic patient is never denied oxygen; the nuance is not to over-target, and hospitalized COPD patients are typically kept near 88 to 90% per provider preference. In a CO2 retainer the body has adapted to chronically high CO2, so a low oxygen level — not a rising CO2, which is the normal trigger — becomes the stimulus to breathe, and an ABG is the only way to actually establish that someone is a retainer. Targeting a saturation above 95% is the over-oxygenation that risks CO2 narcosis rather than the way to prevent it, and BiPAP is added when a patient becomes hypercapnic, not substituted for oxygen.",
      topic: "Lower Respiratory Problems"
    },
    {
      /* 5 correct of 8. Wrong options at 1, 3, 5. */
      stem: "A patient with newly diagnosed obstructive sleep apnea is being taught about treatment. Which statements are accurate? Select all that apply.",
      options: [
        "CPAP delivers one constant pressure throughout the breathing cycle",
        "CPAP supplies a set concentration of oxygen along with the pressure",
        "BiPAP lowers the pressure during exhalation, which suits COPD",
        "Sleeping supine helps by keeping the mandible pulled forward",
        "Oral appliances are an option in mild to moderate disease",
        "A drink of alcohol before bed helps relax the airway muscles",
        "Weight reduction and exercise are part of the plan",
        "A tracheostomy may become necessary in serious cases"
      ],
      answers: [0, 2, 4, 6, 7],
      rationale: "CPAP holds a single constant pressure across inhalation and exhalation; BiPAP's lower exhalation pressure is what makes it easier for a patient who struggles to push air out, such as one with COPD. Oral appliances suit mild-to-moderate disease, weight reduction and exercise are standard, and surgery or a tracheostomy is reserved for serious cases. CPAP delivers pressure, not supplemental oxygen, though oxygen may be added to a home setup. The mandible drops back when the patient is supine, which is why side-sleeping is taught, and alcohol is avoided rather than encouraged.",
      topic: "Upper Respiratory Problems"
    },
    {
      /* 4 correct of 8. Wrong options at 1, 4, 5, 7. */
      stem: "A patient with a suspected lung mass is scheduled for a CT scan with iodine-based contrast, followed by an MRI. Which statements about these two studies are accurate? Select all that apply.",
      options: [
        "Creatinine and BUN are checked before the CT but not for the MRI contrast",
        "The MRI contrast is also iodine-based, so one allergy history covers both",
        "A warm flush during the contrast injection is an expected sensation",
        "Sedation may be needed for either study if the patient cannot lie still",
        "A shellfish allergy is the specific allergy that rules out the CT contrast",
        "The CT builds cross-sections from slices, while the MRI gives a flat snapshot",
        "The loud clicking noise the patient should be warned about belongs to the CT",
        "Both studies require the patient to remove every piece of metal"
      ],
      answers: [0, 2, 3, 6],
      rationale: "Iodine-based CT contrast is nephrotoxic, so creatinine and BUN are checked beforehand; the MRI contrast is not iodine-based, so that screening does not carry over. A warm flush spreading through the body is a normal response to IV contrast and patients are warned about it in advance. Either study may require sedation if the patient cannot hold still or is claustrophobic, and the loud clicking is a CT feature. A shellfish allergy is not actually linked to contrast reactions — an iodine allergy is the real concern. The two-dimensional snapshot describes a plain chest x-ray, and it is the MRI specifically that requires removing all metal.",
      topic: "Respiratory Labs & Diagnostics"
    },
    {
      /* 4 correct of 8. Wrong options at 1, 3, 6, 7. */
      stem: "A nurse reads tuberculin skin tests in a community clinic. Which readings should be documented as positive? Select all that apply.",
      options: [
        "6 mm of induration in a patient with HIV",
        "12 mm of induration in a healthy adult with no risk factors",
        "11 mm of induration in a nursing home resident",
        "9 mm of induration in a person who injects drugs",
        "16 mm of induration in a healthy adult with no risk factors",
        "7 mm of induration in a recent lung transplant recipient",
        "13 mm of erythema without induration in a young child",
        "4 mm of induration in a recent contact of a person with active TB"
      ],
      answers: [0, 2, 4, 5],
      rationale: "Three cut-offs apply, each to a different group. Immunosuppressed patients — including HIV, organ or lung transplant recipients, and recent contacts of active TB — are positive at 5 mm or more, so 6 mm with HIV and 7 mm post lung transplant both qualify, while 4 mm in a recent contact does not. Higher-risk groups such as nursing home residents, immigrants, people who inject drugs and young children are positive at 10 mm or more, so 11 mm qualifies and 9 mm does not. A healthy adult with no risk factors needs 15 mm, so 16 mm is positive and 12 mm is not. Redness alone is never positive — induration is what is measured.",
      topic: "Lower Respiratory Problems"
    },
    {
      /* 2 correct of 6. Wrong options at 0, 2, 4, 5. */
      stem: "A nurse reviews the profile of patients treated for head and neck cancer on the unit. Which statements are accurate? Select all that apply.",
      options: [
        "Radiation is first-line, with surgery reserved for failure",
        "Tobacco use accounts for roughly 85% of head and neck cancers",
        "Most patients are diagnosed while the disease is still localized",
        "A patient diagnosed under age 50 is often associated with HPV",
        "The disease occurs more often in women than in men",
        "Neck dissection is performed routinely regardless of spread"
      ],
      answers: [1, 3],
      rationale: "Tobacco causes about 85% of head and neck cancers, and when a patient under 50 is diagnosed the disease is often associated with HPV instead. Surgery — not radiation — is the first line of treatment. Most patients already have locally advanced disease by the time they are diagnosed, which is much of what makes this cancer so difficult. It occurs more often in men than in women, and lymph node removal or neck dissection is done when the cancer has metastasized or spread into muscle, not as a routine step.",
      topic: "Head & Neck Cancer"
    },
    {
      /* 1 correct of 6 — the near-empty key. Wrong options at 0, 1, 2, 4, 5. */
      stem: "A nurse is preparing a patient for a thoracentesis to drain a pleural effusion. Which statements about this procedure are accurate? Select all that apply.",
      options: [
        "Fluid is withdrawn from the peritoneal space",
        "The patient is positioned side-lying on the affected side",
        "The patient is encouraged to describe sensations aloud during the procedure",
        "A chest x-ray is obtained afterward to rule out a pneumothorax",
        "A small-gauge needle is used to limit trauma to the pleura",
        "Consent is not needed because the procedure is done at the bedside"
      ],
      answers: [3],
      rationale: "The post-procedure chest x-ray confirms the provider did not inadvertently nick the pleura and cause a pneumothorax, and the patient is assessed for hypoxia for the same reason. Everything else here is a near-miss. Fluid drawn from the peritoneum is a paracentesis, not a thoracentesis. The patient sits upright and leans forward with elbows on an overhead table, which opens the intercostal spaces the provider needs, and is told not to talk so they stay completely still. The needle is large-bore, and consent is required because the procedure is invasive regardless of where it is performed.",
      topic: "Respiratory Labs & Diagnostics"
    },
    {
      /* All 6 correct — the 'nothing is wrong here' trap. */
      stem: "A patient arrives at the clinic with an anterior nosebleed that began an hour ago. Which of the following are appropriate? Select all that apply.",
      options: [
        "Seat the patient upright and leaning forward",
        "Apply lateral pressure with ice to the nose",
        "Pinch the soft tissue below the bony prominence",
        "Ask whether the patient takes an anticoagulant",
        "Discourage the patient from blowing the nose",
        "Determine whether the bleeding is coming from the back of the nose"
      ],
      answers: [0, 1, 2, 3, 4, 5],
      rationale: "Every option here is correct, which is its own kind of difficulty. Upright and leaning forward keeps blood out of the airway; lateral pressure with ice promotes vasoconstriction; the pressure must be on the soft tissue below the bony prominence, since pinching bone accomplishes nothing. Anticoagulant use is a leading cause of spontaneous epistaxis and changes how quickly the bleeding will stop. Nose blowing raises pressure inside the nose and is discouraged, especially with increased intracranial pressure. And establishing whether the bleed is anterior or posterior matters because a posterior bleed is an emergency that usually requires hospitalization.",
      topic: "Upper Respiratory Problems"
    },
    {
      /* 1 correct of 6 — the near-empty key. Wrong options at 0, 1, 2, 4, 5. */
      stem: "A patient asks about esophageal speech after a laryngectomy. Which statements about this method are accurate? Select all that apply.",
      options: [
        "It uses a handheld device placed against the throat",
        "It requires a valve device placed surgically",
        "It can be used immediately after surgery with little practice",
        "It needs no device at all but is difficult to learn",
        "It restores a normal-sounding voice within a few weeks",
        "It is the most commonly chosen method today"
      ],
      answers: [3],
      rationale: "In esophageal speech the patient sucks air into the esophagus and forms words while burping it back out, so it is hands-free and needs no device — but it is hard to learn and can be hard for listeners to understand. Each distractor belongs to a different method: the handheld device held against the throat is the artificial larynx, which is also the option usable immediately after surgery and the most common one today; the surgically placed valve is tracheoesophageal voice restoration. No method here promises a normal-sounding voice.",
      topic: "Head & Neck Cancer"
    },
    {
      /* 5 correct of 7. Wrong options at 1, 4. */
      stem: "A patient is starting therapy for active tuberculosis. Which points belong in the teaching? Select all that apply.",
      options: [
        "Isoniazid can cause numbness and tingling in the fingers",
        "Rifampin turning the urine orange is a sign of bleeding",
        "Ethambutol can affect visual acuity and color discrimination",
        "Isoniazid is associated with liver toxicity",
        "Therapy can be stopped once the symptoms have resolved",
        "Direct observational therapy may be used to support adherence",
        "Three negative sputum cultures indicate the patient is no longer infectious"
      ],
      answers: [0, 2, 3, 5, 6],
      rationale: "Isoniazid causes both peripheral neuropathy — the numbness and tingling — and hepatotoxicity; it and acetaminophen are the two drugs in med-surg most associated with liver toxicity. Ethambutol affects visual acuity and the ability to tell colors apart. Direct Observational Therapy has a provider watch each dose being taken, used where non-adherence is likely, and three negative sputum AFB cultures establish that the patient is no longer infectious. Rifampin turning excretions red or orange is expected and specifically must not be mistaken for blood, and treatment for reactivated TB runs months to years — stopping at symptom resolution is what drives multi-drug resistance.",
      topic: "Lower Respiratory Problems"
    },
    {
      /* 5 correct of 7. Wrong options at 2, 6. */
      stem: "A patient in the clinic is being evaluated for a chronic cough. Which actions by the nurse are correct? Select all that apply.",
      options: [
        "Collect the sputum specimen in the morning before the patient eats or drinks",
        "Send the sputum for acid-fast bacillus if active tuberculosis is suspected",
        "Have the patient rinse with mouthwash and expectorate into a clean cup",
        "Tell the patient a skin test must be read in person at a follow-up visit",
        "Offer an interferon gamma release assay as an option needing no return visit",
        "Place a tuberculin skin test intradermally, raising a small bleb",
        "Transport the sputum specimen to the laboratory at the end of the shift"
      ],
      answers: [0, 1, 3, 4, 5],
      rationale: "The morning specimen is best because secretions concentrate overnight while the patient lies still and before anything is eaten or drunk, and acid-fast bacillus is the sputum study that checks for active TB. A skin test is placed intradermally at a 10- to 15-degree angle to raise a bleb and must be read in person at a follow-up visit; the interferon gamma release assay is the blood alternative that spares the patient a return trip. The specimen goes into a sterile container, not a clean cup, and must reach the lab right away rather than sitting at the bedside until shift change.",
      topic: "Respiratory Labs & Diagnostics"
    },
    {
      /* All 8 correct — the second 'nothing is wrong here' trap. */
      stem: "A patient returns from a radical neck dissection with a tracheostomy, a tube feeding, and a Jackson-Pratt drain. Which are appropriate post-operative priorities? Select all that apply.",
      options: [
        "Assess airway patency first",
        "Humidify the tracheostomy collar",
        "Suction secretions as needed",
        "Get the patient up and coughing",
        "Begin the tube feeding without delay",
        "Provide stoma care and pain control",
        "Arrange physical and speech therapy",
        "Expect blood-tinged sputum for the first couple of days"
      ],
      answers: [0, 1, 2, 3, 4, 5, 6, 7],
      rationale: "All eight are correct. Airway patency is the first priority because so much is happening in the neck and the airway runs straight through the operative field. Humidification replaces what the bypassed nose and mouth normally provide; coughing, mobility and suctioning keep the airway clear. Tube feedings start right away because these patients are frequently malnourished before surgery and good nutrition drives healing. Stoma care and pain control keep the patient able to participate in recovery, physical and speech therapy are routine, and blood-tinged sputum in the first couple of days is expected from surgical trauma rather than reportable.",
      topic: "Head & Neck Cancer"
    },
    {
      /* 2 correct of 7. Wrong options at 0, 2, 3, 5, 6. */
      stem: "An adult presents with a sore throat. Which statements about this presentation are accurate? Select all that apply.",
      options: [
        "Most adult sore throats are bacterial and need antibiotics",
        "Sudden onset with tender tonsils and fever suggests bacteria",
        "Symptoms alone reliably separate viral from bacterial pharyngitis",
        "A negative rapid strep test still warrants antibiotics as a precaution",
        "White patches after a recent antibiotic course suggest candida",
        "Nystatin is the appropriate treatment for the bacterial form",
        "Pharyngitis refers to inflammation of the larynx and trachea"
      ],
      answers: [1, 4],
      rationale: "Sudden-onset sore throat with tonsillar hypertrophy, tender swollen tonsils and fever is the bacterial picture, and white patches following antibiotics point to fungal pharyngitis caused by candida albicans. Only about 1 in 10 adult sore throats is actually bacterial — most are viral. Symptoms alone are unreliable, which is precisely why a rapid strep test exists, and a negative result means antibiotics are withheld, since inappropriate use drives resistance. Nystatin treats the fungal form, not the bacterial one, and pharyngitis is inflammation of the pharynx and tonsils.",
      topic: "Upper Respiratory Problems"
    },
    {
      /* 2 correct of 8. Wrong options at 0, 2, 3, 5, 6, 7. */
      stem: "A nurse reviews several patients admitted with pneumonia. Which statements are accurate? Select all that apply.",
      options: [
        "Pneumonia beginning 24 hours after admission is hospital-acquired",
        "A patient on a ventilator who develops pneumonia has VAP",
        "Aspiration always produces obvious coughing or vomiting",
        "Viral pneumonia typically produces a purulent productive cough",
        "A feeding tube that migrates up the esophagus raises aspiration risk",
        "Leukopenia is the expected white cell change in acute bacterial infection",
        "A shift to the left refers to a rise in mature neutrophils",
        "Community-acquired pneumonia occurs only in patients never hospitalized"
      ],
      answers: [1, 4],
      rationale: "Ventilator-associated pneumonia is hospital-acquired pneumonia in an intubated patient on a ventilator, and a feeding tube that migrates back up out of the stomach can deliver the feeding into the lungs. Hospital-acquired pneumonia begins 48 or more hours after admission, not 24. Aspiration can be silent, with no vomiting or even coughing. The purulent productive cough is the bacterial picture; viral is usually scanty or non-productive. Acute bacterial infection produces leukocytosis, an increase, and a shift to the left means immature neutrophils. Community-acquired pneumonia also covers long-term care residents with fewer than 14 days of symptoms.",
      topic: "Lower Respiratory Problems"
    },
    {
      /* 3 correct of 7. Wrong options at 0, 3, 5, 6. */
      stem: "A patient is 2 weeks post radical neck dissection and avoids looking at the surgical site. Which nursing responses and understandings are appropriate? Select all that apply.",
      options: [
        "Tell the patient the appearance will return to normal over time",
        "Acknowledge the change in appearance and remain present",
        "Recognize that part of the neck may visibly cave in where tissue was removed",
        "Remove the mirrors from the room until the patient asks for one",
        "Understand the surgery may have removed salivary glands or major vessels",
        "Defer any discussion of appearance to the surgeon",
        "Explain that the sternocleidomastoid is never involved in this surgery"
      ],
      answers: [1, 2, 4],
      rationale: "Acknowledging the change while staying present supports the patient, and it rests on understanding what the surgery actually did: a radical neck dissection removes part of the neck muscles and possibly salivary glands or major blood vessels, and the neck may visibly cave in where tissue was taken. Promising the appearance will return to normal is false reassurance about a permanent change. Removing mirrors and deferring the conversation both avoid the patient rather than support them, and the sternocleidomastoid is one of the muscles that may be dissected.",
      topic: "Head & Neck Cancer"
    },
    {
      /* 4 correct of 8. Wrong options at 2, 3, 5, 7. */
      stem: "A nurse reviews pulmonary function and oximetry results with a patient who has COPD. Which statements are accurate? Select all that apply.",
      options: [
        "A reduced FEV1 reflects difficulty moving air out of the lungs",
        "The peak flow meter lets the patient measure their own FEV1 at home",
        "Total lung capacity is measured from a normal breath in to a normal breath out",
        "Pulse oximetry reports the percentage of the blood made up of red cells",
        "The respiratory therapist performs the test with the patient's nose pinched",
        "A pulse oximetry reading of 93% sits within the expected range",
        "Nail polish should be removed before placing the probe on a fingertip",
        "The earlobe is the site the oximetry sensor is actually designed for"
      ],
      answers: [0, 1, 4, 6],
      rationale: "Obstructive disease makes it hard to get air out rather than in, so the volume forced out in the first second drops, and a peak flow meter is the small device a patient uses to check that value themselves at home. Pulmonary function testing is performed by a respiratory therapist with the nose pinched and the mouth sealed around the device, and nail polish is removed because the fingertip is the site the sensor is built for. Total lung capacity runs from the deepest possible inhalation to the deepest possible exhalation, not from a normal breath. The percentage of blood made up of red cells is the hematocrit, and the normal saturation is 95% or better, so 93% is below range.",
      topic: "Respiratory Labs & Diagnostics"
    },
    {
      /* 4 correct of 7. Wrong options at 1, 4, 5. */
      stem: "A patient is one day post right pneumonectomy for lung cancer. Which findings and statements are accurate? Select all that apply.",
      options: [
        "Absent breath sounds over the right lung field are expected",
        "The right side will appear black on the chest x-ray",
        "Sounds near the midline may be transmitted from the left lung",
        "A lobectomy removes a lobe; the right lung has three lobes",
        "A negative sputum cytology reliably excludes lung cancer",
        "The most common presenting symptom is pleuritic chest pain",
        "Radiation or chemotherapy may be added to the surgery"
      ],
      answers: [0, 2, 3, 6],
      rationale: "A pneumonectomy removes the entire lung, so there is no lung on that side to move air and no breath sounds to hear; assessment near the midline is read cautiously because sounds there may simply carry over from the remaining lung. A lobectomy takes a single lobe, and the right lung has three to the left's two. Radiation and chemotherapy are often added to surgery. Air shows up black on an x-ray, so a side with no lung appears white, not black. Only about 20 to 30 of every 100 patients who truly have lung cancer test positive on sputum cytology, so a negative result excludes nothing, and the most common symptom is a persistently productive cough.",
      topic: "Lower Respiratory Problems"
    },
    {
      /* 3 correct of 8. Wrong options at 0, 2, 4, 6, 7. */
      stem: "A patient taking warfarin is admitted with posterior nasal packing in place. Which are appropriate elements of care? Select all that apply.",
      options: [
        "Give ibuprofen as needed for discomfort from the packing",
        "Monitor respiratory status closely while the packing is in",
        "Give protamine sulfate if reversal of the anticoagulant is needed",
        "Provide humidified oxygen and frequent oral care",
        "Encourage ambulation in the hall several times each shift",
        "Anticipate vitamin K if the anticoagulation must be reversed",
        "Teach the patient to resume strenuous activity once bleeding stops",
        "Apply lateral pressure and ice to the nose to control the bleeding"
      ],
      answers: [1, 3, 5],
      rationale: "Posterior packing can impede breathing, so respiratory status is watched closely, alongside humidification, oxygenation, oral care, pain control and bed rest. Vitamin K reverses warfarin. The distractors are each a near-miss: ibuprofen is an NSAID and thins the blood further, protamine sulfate reverses heparin rather than warfarin, ambulation conflicts with the bed rest these patients are kept on, strenuous activity is specifically avoided after discharge, and lateral pressure with ice works for an anterior bleed — a posterior bleed cannot be pinched, which is exactly why it needs packing and hospitalization.",
      topic: "Upper Respiratory Problems"
    }
  ]
};
