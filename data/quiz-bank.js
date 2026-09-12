/* ============================================================
   quiz-bank.js — the "Build Your Own Exam" question bank.

   Structure: one entry per TOPIC, each with three question SETS.
   The page renders topics as rows and sets as columns, so a topic
   with an empty set shows a greyed-out, unselectable cell. Nothing
   breaks if a set is empty — leave it [] until you have content.

   ------------------------------------------------------------
   THE THREE SETS, AND WHAT EACH IS FOR
   ------------------------------------------------------------
   mustKnow       High-yield content the lecture material explicitly
                  stated or heavily emphasized.

   extraPractice  Additional high-yield lecture content, prioritized
                  by likely test relevance. Does not duplicate any
                  mustKnow question in the same topic.

   eaq            Imported from an outside question bank (a publisher's
                  adaptive quizzing product, a question app, whatever).
                  Rename the column in `columns` below to suit. If your
                  course has no such source, leave every one empty and
                  the column simply renders as disabled.

   ------------------------------------------------------------
   "Fundamentals Review" IS ONE MERGED TOPIC ON PURPOSE
   ------------------------------------------------------------
   All 11 Fundamentals Review lecture sections (Legal & Ethical
   Issues through Palliative/Hospice/EOL) are pooled into a single
   topic row here — "Fundamentals Review" — so the picker offers one
   Must Know / Extra Practice pair covering the whole review instead
   of 11 separate rows. Each question still carries its own specific
   `topic` field (e.g. "Cardiovascular", "Legal & Ethical Issues")
   so the per-topic breakdown on the generated exam still reports
   which section each question came from — assets/exam.js reads that
   field directly, independent of how questions are grouped into
   rows here. window.TOPIC_ORDER below still lists the 11 individual
   section labels in course order for that breakdown's display order.

   Because of this merge, the usual "1 SATA per topic per set"
   invariant applies per ORIGINAL section instead: each of the 11
   sections contributes exactly 1 mustKnow SATA + 1 extraPractice
   SATA, so the merged sets carry 11 SATA questions each (out of 110).

   assets/quiz.js also treats a merged topic specially when building an
   exam: if more than 11 questions are requested from this row, it splits
   the total as evenly as possible across the 11 original sections
   (remainder handed to randomly chosen sections) instead of one flat
   random draw — so a large custom exam still samples every section
   instead of skewing toward whichever came up more in the shuffle. At
   11 or fewer, that many distinct sections are chosen at random, one
   question each. Detected automatically from question.topic diversity —
   no extra config needed beyond mergedSubtopics: true below.

   ------------------------------------------------------------
   INVARIANTS TO CHECK AFTER ANY EDIT
   ------------------------------------------------------------
     * No duplicate stems anywhere in the file.
     * No answer slot holds more than ~50% of a set's single-answer
       questions. Authoring naturally puts the right answer first —
       rotate them deliberately, asserting the option SET is
       unchanged so no content drifts.
     * Every question has topic, source, and a non-empty rationale.
     * Every answer/answers index is in range.

   ------------------------------------------------------------
   ADDING A TOPIC
   ------------------------------------------------------------
   Copy a whole { id, label, sets } block. `label` is what shows in
   the row. Unlike a normal topic, questions merged into "Fundamentals
   Review" keep their own specific `topic` field rather than matching
   the row label — see the note above. A new, non-merged topic should
   still give every question a `topic` matching its row label exactly.
   ============================================================ */
window.QUIZ_BANK = {

  /* Column headings and the legend under the intro line. */
  columns: [
    { key: "mustKnow",      label: "Must Know",      blurb: "High-yield content the lectures explicitly stated or heavily emphasized." },
    { key: "extraPractice", label: "Extra Practice", blurb: "Other topics from the lecture content, prioritized by highest yield." },
    { key: "eaq",           label: "Question Bank",  blurb: "Imported questions from an outside question bank, sorted by topic, with duplicates removed." }
  ],

  topics: [
    {
      id: "fundamentals-review",
      label: "Fundamentals Review",
      mergedSubtopics: true,
      sets: {
        mustKnow: [
          {
            stem: "A nurse who has worked for several years at Baptist Health Lexington, where nurses are permitted to pull arterial sheaths, transfers to UK Healthcare, where this task is outside the RN scope of practice at that facility. A physician on the med-surg unit asks the nurse to pull an arterial sheath. What is the nurse's best action?",
            options: [
              "Perform the procedure, since arterial sheath removal is within RN scope of practice nationally.",
              "Decline the procedure and consult this institution's written scope-of-practice policy first.",
              "Perform the procedure only if the physician remains at the bedside for the entire removal.",
              "Refuse and report the physician to the state board of nursing for an out-of-scope request."
            ],
            answer: 1,
            rationale: "The Joint Commission requires institutions to maintain written, accessible scope-of-practice policies, and scope can vary from one facility to another even for an experienced nurse — what was allowed at a previous employer doesn't transfer automatically. The nurse must decline until confirming this facility's specific policy rather than assuming national uniformity or treating the request as reportable misconduct.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A travel nurse holds an active RN license in State A and is completing a 13-week contract in State B, which does not participate in the nursing licensure compact. Which statement best reflects the legal requirement for this nurse?",
            options: [
              "The nurse may practice in State B under the State A license because travel contracts are exempt from state licensure requirements.",
              "The nurse only needs to notify State B's board of nursing of intent to practice there.",
              "The nurse must obtain licensure in State B, since every nurse must be licensed in the state in which they are practicing.",
              "The nurse may practice in State B for up to 90 days before licensure there is required."
            ],
            answer: 2,
            rationale: "The Nurse Practice Act requires every nurse, including travel nurses, to hold a license in the state where they are actually practicing. Compact licensure is the only mechanism that bypasses this requirement, and only between participating states — since State B doesn't participate, no grace period or notification-only process applies.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is reviewing an informed consent form with a patient prior to surgery. Which elements should the nurse confirm are present on the form before the patient signs? Select all that apply.",
            options: [
              "The names and qualifications of everyone performing or assisting",
              "A statement of possible complications, up to and including death",
              "A description of the anticipated pain or discomfort involved",
              "A statement that the patient has the right to refuse the procedure",
              "An itemized estimate of the total cost of the procedure",
              "A guarantee that the procedure will resolve the underlying condition"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Informed consent must include the names/qualifications of everyone performing or assisting (the attending's name must appear even when a resident or fellow does the actual procedure), possible complications up to and including death, anticipated pain/discomfort, and the patient's right to refuse. Cost estimates and outcome guarantees are not required elements of informed consent.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A patient has a documented DNR order in the chart. The patient develops a wound infection unrelated to their code status, and the nurse notes a new order for IV antibiotics. What is the nurse's best action?",
            options: [
              "Administer the antibiotics as ordered, since the DNR order applies only to CPR.",
              "Hold the antibiotics and clarify with the provider whether they conflict with the DNR.",
              "Administer the antibiotics only after obtaining new informed consent for the DNR patient.",
              "Contact the ethics committee before giving any non-comfort intervention to a DNR patient."
            ],
            answer: 0,
            rationale: "A DNR order does not mean \"do not care\" — it means only that the team will not initiate CPR if breathing or the heart stops. Every other ordered treatment, including antibiotics, continues as normal and does not require special clarification or additional consent.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a documented DNR order tells the nurse, \"If my heart stops, I want you to do everything to bring me back.\" The patient is alert, oriented, and able to communicate clearly. What is the nurse's priority action?",
            options: [
              "Continue following the existing DNR order until the physician formally rescinds it in writing.",
              "Ask the patient's durable power of attorney for healthcare to confirm the change, since only they can revoke a standing DNR.",
              "Tell the patient that a DNR order cannot be changed once it has been signed and filed in the chart.",
              "Notify the provider immediately so the DNR order can be revoked, since a DNR can be revoked by the patient at any time."
            ],
            answer: 3,
            rationale: "A DNR order can be revoked at any time by a decisionally capacitated patient, so the nurse's priority is to notify the provider so the order can be formally updated. Because this patient is alert and able to speak for themselves, involving the durable power of attorney is unnecessary here.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "During intake, a patient completes an advance directive that names their spouse as durable power of attorney for healthcare but does not document any wishes regarding resuscitation. Which statement best describes this document?",
            options: [
              "The advance directive is invalid because a living will must also be filed for it to take legal effect.",
              "The advance directive is incomplete, because it must also state wishes about respiratory and cardiac arrest.",
              "The advance directive is complete, because naming a durable power of attorney satisfies all requirements.",
              "The advance directive needs resuscitation wishes only if the patient is admitted for cardiac or respiratory problems."
            ],
            answer: 1,
            rationale: "At minimum, an advance directive must state the patient's wishes regarding respiratory and cardiac arrest in addition to naming a durable power of attorney for healthcare — naming a proxy alone is not sufficient. A living will is a more detailed, separate document and is not required for a basic advance directive to be valid.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A nurse who works on a medical-surgical unit is not currently assigned to care for a particular patient, but the patient is a personal friend. The nurse wants to look up the friend's admission diagnosis and recent labs out of curiosity. According to HIPAA, what should the nurse do?",
            options: [
              "Access the chart, since the nurse is a licensed healthcare employee of the same hospital.",
              "Access the chart, but only view the lab results, since diagnoses require separate authorization.",
              "Not access the chart, because access to protected health information requires a care-related reason.",
              "Access the chart, but document the reason for looking as \"personal interest\" in the audit log."
            ],
            answer: 2,
            rationale: "HIPAA limits access to protected health information to those with a care-related reason — being an employee of the same hospital or a personal friend does not qualify. Even a brief, non-malicious look at a chart without a clinical reason is a HIPAA violation.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "An RN who is trained and hospital-privileged to insert central lines is driving home and comes upon a car accident. A bystander is in severe respiratory distress. Under the Good Samaritan Law, which action is covered by legal immunity?",
            options: [
              "Inserting a central line at the scene, since the nurse is trained and licensed to perform this skill in a hospital.",
              "Performing any intervention the nurse judges necessary, since Good Samaritan Law grants immunity for actions taken with good intent regardless of training.",
              "Declining to act at all, since Good Samaritan Law only protects nurses who formally identify themselves as off-duty medical professionals.",
              "Starting CPR or applying a tourniquet, since Good Samaritan protection applies only to actions within the nurse's actual scope of practice."
            ],
            answer: 3,
            rationale: "Good Samaritan Law provides legal immunity only for actions within the responder's actual scope of practice — CPR and a tourniquet are appropriate emergency actions, but an invasive hospital-only procedure like central line insertion is not protected at the scene, even if the nurse is trained to do it in a hospital.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A patient with no health insurance and an active warrant for arrest arrives at the emergency department reporting chest pain. The triage nurse recognizes the patient from a prior visit where the bill went unpaid. Which action reflects the requirement under EMTALA?",
            options: [
              "The patient must be evaluated and treated regardless of insurance status, ability to pay, or legal history.",
              "The patient may be triaged as lower priority until insurance coverage or ability to pay is confirmed.",
              "The patient must be transferred to a public hospital before treatment, given the unpaid balance on file.",
              "The patient can be treated only after law enforcement is notified of the patient's active warrant."
            ],
            answer: 0,
            rationale: "EMTALA requires that anyone presenting to an emergency department be evaluated and treated regardless of insurance status, ability to pay, immigration status, or criminal history — treatment cannot be delayed or conditioned on any of these factors.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for a Jehovah's Witness patient recovering from cardiac surgery who is hemorrhaging and would clinically benefit from a blood transfusion. The patient has clearly and competently refused blood products based on religious belief, and the nurse honors this refusal while believing withholding the transfusion may lead to the patient's death. This nurse's internal experience is best described as which of the following?",
            options: [
              "An ethical dilemma, because two ethical principles are in direct conflict for the nurse.",
              "Moral distress, because the nurse must take a specific action that feels ethically wrong.",
              "Values clarification, because the nurse is separating personal values from the patient's wishes.",
              "A breach of informed consent, because the patient was not informed of the risk of death."
            ],
            answer: 1,
            rationale: "Moral distress is the feeling that arises when a nurse must take (or refrain from) a specific action while believing that action may be wrong — here, honoring the refusal despite believing it may cause death. This differs from an ethical dilemma, which describes a situation with two competing, equally justifiable courses of action, not the emotional response after a choice has already been made.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A nursing instructor explains that the nursing process was developed decades before the Clinical Judgment Model existed. Which statement about its origin and purpose is accurate?",
            options: [
              "It was created in the 1950s by the National Collegiate Boards of Schools of Nursing to teach nurses a structured way to think.",
              "It was created by the American Nurses Association in the 1980s to replace the Clinical Judgment Model.",
              "It was created by the National Collegiate Boards of Schools of Nursing in the 1990s specifically to reduce documentation errors.",
              "It was created by individual hospital systems in the 1950s and later standardized into the NCLEX exam blueprint."
            ],
            answer: 0,
            rationale: "The nursing process dates to the 1950s and was created by the National Collegiate Boards of Schools of Nursing, the same organization behind the NCLEX, specifically to teach nurses a structured way to think and to guide safe, competent care. The other options misstate the decade, the creating body, or the purpose.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A patient is admitted with a medical diagnosis of pneumonia and has a persistent, weak, non-productive cough. During the Diagnosis step of the nursing process, which nursing diagnosis should the nurse select?",
            options: [
              "Pneumonia",
              "Ineffective airway clearance",
              "Impaired gas exchange secondary to pneumonia",
              "Risk for infection related to pneumonia"
            ],
            answer: 1,
            rationale: "A nursing diagnosis names the patient's problem, not the medical diagnosis — 'ineffective airway clearance' captures the cough-related problem directly. 'Pneumonia' is the tempting-but-wrong answer because it restates the medical diagnosis rather than a nursing problem.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is writing a care plan for a patient with the nursing problem of constipation. Which of the following is the best example of a properly written SMART goal for this patient?",
            options: [
              "Patient will improve bowel function during hospitalization.",
              "Patient's abdomen will remain soft and non-tender throughout the stay.",
              "Patient will have a bowel movement by the end of the shift.",
              "Patient will understand the importance of fiber and fluids for bowel health."
            ],
            answer: 2,
            rationale: "This goal is specific, measurable, achievable, relevant, and time-bound (SMART). 'Soft, non-tender abdomen' is actually an outcome criterion that supports this goal, not the goal itself, and the other two options are too vague and lack a clear timeframe.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nurse educator explains why the Clinical Judgment Model (CJM) was introduced in 2019. Which statement best reflects the rationale behind it?",
            options: [
              "Research found that about 65% of nurses were involved in an error, and 50% of those errors were due to poor communication with providers.",
              "Research found that about 50% of new graduate nurses failed the NCLEX on their first attempt due to weak assessment skills.",
              "Research found that about 65% of medication errors were caused by nurses skipping the Evaluation step of the nursing process.",
              "Research found that about 50% of nurses were involved in some kind of error, and roughly 65% of those errors traced back to poor judgment."
            ],
            answer: 3,
            rationale: "The CJM was built because roughly half of nurses were involved in an error, and about 65% of those errors traced back to poor clinical judgment rather than poor knowledge. The other options flip these numbers or invent unrelated statistics not supported by the material.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "The nurse assesses a patient who is tachypneic, visibly short of air, and has a small superficial laceration on the forearm. Using the Clinical Judgment Model, how should the nurse cluster these findings and decide what to prioritize?",
            options: [
              "Cluster the tachypnea and shortness of air together as a respiratory problem, and rank it above the laceration by the ABC framework.",
              "Cluster all three findings together as a single traumatic injury pattern and treat the laceration first because it is actively bleeding.",
              "Cluster the tachypnea and laceration together as a single stress response, and address the shortness of air only after the wound is dressed.",
              "Treat all three findings as equally weighted cues that must be addressed strictly in the order they were observed."
            ],
            answer: 0,
            rationale: "Tachypnea and shortness of air form a coherent respiratory pattern, while the laceration is an unrelated finding that shouldn't be forced into that story; ABC (airway, breathing, circulation) then ranks the respiratory issue as the priority. Lumping the laceration in with breathing problems, or prioritizing it, ignores that clustering should group only clinically related cues.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A student compares the 5-step nursing process to the 6-step Clinical Judgment Model and notices one extra step. Which nursing process step expands into two separate CJM steps, and what are they called?",
            options: [
              "Assessment splits into Recognize Cues and Analyze Cues.",
              "Planning splits into Prioritize Hypotheses and Generate Solutions.",
              "Diagnosis splits into Analyze Cues and Prioritize Hypotheses.",
              "Implementation splits into Generate Solutions and Take Actions."
            ],
            answer: 1,
            rationale: "Planning is the single nursing-process step that becomes two CJM steps: Prioritize Hypotheses (deciding the priority problem) and Generate Solutions (setting goals and identifying resources). The other options mismatch CJM step pairs to the wrong nursing-process step.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student is preparing to notify the on-call provider about a patient whose oxygen saturation just dropped from 93% to 88%. Which version of SBAR should the student use, and why?",
            options: [
              "Patient-focused SBAR, because it is designed to summarize the patient's overall status for a shift-to-shift handoff.",
              "Patient-focused SBAR, because it is the version emphasized for provider notification calls in this course.",
              "Problem-based SBAR, because it is used when calling a provider about a specific, unexpected concern.",
              "Problem-based SBAR, because it replaces the need for a focused assessment before calling."
            ],
            answer: 2,
            rationale: "Problem-based SBAR is used specifically to call a provider about an unexpected concern and is the version this course tests, whereas patient-focused SBAR is for shift-to-shift handoff. Choosing 'patient-focused' for a provider call confuses the two purposes.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "During an SBAR call, the nurse states the patient's current oxygen saturation, heart rate, and respiratory rate. Under which SBAR component does this information actually belong, and what is commonly misunderstood about it?",
            options: [
              "Assessment — students often mistakenly place current vital signs in Background instead.",
              "Situation — students often mistakenly place current vital signs in Recommendation instead.",
              "Recommendation — students often mistakenly place it under Situation because both open the call.",
              "Background — students often mistakenly expect it under 'Assessment' because of the section's name."
            ],
            answer: 3,
            rationale: "Despite its name, the SBAR 'Assessment' section is for the nurse's working impression, not raw data — current vital signs and findings actually belong in Background. This naming mismatch is a well-known point of confusion, which is exactly why it's tested.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nurse calls a provider about a patient with new-onset chest pain and low oxygen saturation, but the provider says it can wait until morning rounds. The nurse remains very concerned that the patient is deteriorating. What should the nurse do next?",
            options: [
              "Document the provider's response and reassess the patient again at the start of the next shift.",
              "Restate the concern directly and ask the provider to evaluate the patient at the bedside now.",
              "Wait 30 to 60 minutes to see if the patient's condition changes before contacting anyone else.",
              "Repeat the full SBAR to a different provider without informing the original provider or the charge nurse."
            ],
            answer: 1,
            rationale: "When a provider's response doesn't match the level of concern, it's appropriate to push back directly and escalate to the charge nurse or rapid response if needed — patient safety takes priority over deferring to the provider's initial answer. Simply documenting and waiting delays care for a potentially deteriorating patient.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is preparing to call the provider about a patient who fell and may have a fractured wrist. Following the recommended steps for preparing an SBAR call, which pieces of information should the nurse gather before picking up the phone? (Select all that apply.)",
            options: [
              "Level of consciousness, breathing status, and a focused assessment of the injured wrist",
              "Whether the patient has a history of osteoporosis, prior fractures, or arthritis",
              "The patient's calculated BMI from the admission history and physical, in case the provider asks",
              "Trends from recent provider and nursing notes, and the admission H&P if time allows",
              "The patient's admission reason, allergies, current medications, and relevant labs or diagnostics",
              "A full head-to-toe review of every system, regardless of relevance to the fall"
            ],
            answers: [0, 1, 3, 4],
            rationale: "The five SBAR preparation steps call for a focused assessment relevant to the problem — here level of consciousness, breathing status, and the wrist's pain level, deformity, and any open wound — plus relevant medical history, trend data from notes/H&P, and critical cues like admission reason, allergies, meds, and labs. BMI and an unrelated full review of systems are explicitly the kind of 'just in case' details that don't belong — gathering only what's relevant is the whole point of preparation.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nurse reviews the chart of a 58-year-old male patient: waist circumference 42 in, triglycerides 165 mg/dL, HDL 38 mg/dL, blood pressure 128/78 mm Hg (no antihypertensive), fasting glucose 118 mg/dL, LDL 145 mg/dL. Which findings should the nurse identify as meeting a diagnostic criterion for metabolic syndrome? Select all that apply.",
            options: [
              "Waist circumference 42 in",
              "Triglycerides 165 mg/dL",
              "HDL 38 mg/dL",
              "Blood pressure 128/78 mm Hg",
              "Fasting glucose 118 mg/dL",
              "LDL 145 mg/dL"
            ],
            answers: [0, 1, 2, 4],
            rationale: "Waist circumference ≥40 in in men, triglycerides >150 mg/dL, HDL <40 mg/dL in men, and fasting glucose ≥110 mg/dL each meet a metabolic syndrome criterion — this patient meets 4 of the 5, well over the 3 needed for diagnosis. The BP of 128/78 does not meet the ≥130 systolic or ≥85 diastolic threshold, and LDL is not one of the five diagnostic measures (only HDL is assessed).",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient who is 1.65 m tall weighs 90.3 kg. Using BMI = weight (kg) ÷ height (m)², the nurse calculates a BMI of approximately 33. How should the nurse classify this finding?",
            options: [
              "Overweight",
              "Obese",
              "Extremely obese",
              "Normal weight"
            ],
            answer: 1,
            rationale: "A BMI of 30–39.9 falls in the obese range. Overweight is 25–29.9, extremely obese is 40 and above, and normal weight is 18.5–24.9 — a BMI of 33 does not fit any of those other categories.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is comparing two patients during a wellness assessment. Patient A carries most of her excess weight in the hips and thighs. Patient B carries most of his excess weight around the abdomen and waist, with a waist-to-hip ratio of 1.05. Which statement is accurate?",
            options: [
              "Patient A's gynoid pattern places her at greater risk for type 2 diabetes and heart disease than Patient B.",
              "Patient B's waist-to-hip ratio of 1.05 is normal for males and indicates low cardiovascular risk.",
              "Patient A's gynoid fat distribution places her at greater risk for hypertension than Patient B.",
              "Patient B's android pattern places him at greater risk for heart disease and diabetes than Patient A."
            ],
            answer: 3,
            rationale: "Android/\"apple\" fat distribution and a waist-to-hip ratio above 0.95 in males are linked to higher cardiovascular and diabetes risk. Gynoid/\"pear\" distribution, as in Patient A, instead carries higher risk of osteoporosis, varicose veins, and cellulite — not the greater heart disease or hypertension risk.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is deciding when to initiate a conversation about weight-loss readiness. With which patient is this conversation most likely to be well received?",
            options: [
              "A patient recovering well one day after placement of a cardiac stent",
              "A patient who received a new diagnosis of breast cancer this morning",
              "A patient who underwent a below-the-knee amputation two days ago",
              "A patient just told their surgery is postponed for elevated blood glucose"
            ],
            answer: 0,
            rationale: "Timing matters when assessing readiness to change — right after a cardiac event such as a new stent placed for a myocardial infarction, patients are often genuinely motivated to make lifestyle changes. A new cancer diagnosis or a recent amputation is not the time to bring up weight loss, and a patient who just received distressing news about a postponed surgery is similarly not in a receptive moment.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient starting orlistat for weight loss asks the nurse, \"If I take this, can I stop tracking my food and exercising as much?\" What is the nurse's best response?",
            options: [
              "\"Yes, orlistat works best when you rely on it as your primary strategy rather than diet changes.\"",
              "\"You'll notice results within a week or two, so you can cut back on lifestyle changes once you see progress.\"",
              "\"Orlistat must always be combined with ongoing diet and exercise changes — it isn't intended to replace them.\"",
              "\"Since orlistat is available over the counter, it's safe to adjust your lifestyle changes as you see fit.\""
            ],
            answer: 2,
            rationale: "Orlistat is the only FDA-approved appetite-suppressing weight-loss drug, but like all such drugs it takes months to show results and should never be used alone — it must be paired with ongoing lifestyle changes. It is not an over-the-counter drug, and OTC diet aids should be discouraged.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient tells the nurse, \"My coworker lost 20 lbs on an 800-calorie-a-day diet in a month, so I'm going to try that on my own.\" What is the nurse's priority response?",
            options: [
              "\"That's a great plan — 800 calories a day is the standard recommended intake for safe weight loss.\"",
              "\"An 800-calorie diet should be used only short-term and under a provider's supervision, not on your own.\"",
              "\"As long as you eat 5 servings of fruits and vegetables, intake below 1,200 calories is safe without supervision.\"",
              "\"You should aim for an even lower calorie intake to see faster results, since your coworker's approach worked.\""
            ],
            answer: 1,
            rationale: "An 800-calorie/day diet is only used short-term when medically necessary and under a provider's care; the general recommendation for weight loss is a 1,200-calorie diet. A self-directed very-low-calorie diet is not an appropriate independent plan.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient says, \"I've lost 8 lbs in two months, but I'm still nowhere near my goal BMI, so I feel like this isn't working.\" What is the nurse's best response?",
            options: [
              "\"You're right to be concerned — weight loss should happen faster than 4 lbs a month to be meaningful.\"",
              "\"A goal BMI is the most important marker of success, so let's revisit your calorie target to speed things up.\"",
              "\"Plateaus mean your current plan has stopped working, so it's time to try a more restrictive diet.\"",
              "\"Even a 3–5% weight loss brings real health benefits, and your current pace is healthy and realistic.\""
            ],
            answer: 3,
            rationale: "Achieving a \"goal BMI\" is often unrealistic; modest weight loss of 3–5% of body weight has real health benefits, and 1–2 lbs a week is a reasonable, healthy target. Plateaus are common and expected, and restrictive fad-style diets should not be encouraged.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A sedentary patient who currently walks about 2,500 steps a day expresses interest in exercising more. Which exercise goal reflects the nurse's best initial recommendation?",
            options: [
              "Increase gradually toward about 4,000 steps a day as an achievable next step.",
              "Set a goal of 10,000 steps a day now, since that is the standard exercise target.",
              "Avoid a step goal until the patient can commit to 30 minutes of exercise daily.",
              "Recommend a gym-based cardio program regardless of the patient's transportation access."
            ],
            answer: 0,
            rationale: "Thirty minutes a day is a great overall goal, but the nurse should meet the patient where they are — moving from roughly 2,000–3,000 steps to a 10,000-step goal is unrealistic, so about 4,000 steps is a more appropriate initial target. Access and safety, such as neighborhood walkability, should also guide the recommendation.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is teaching a patient newly diagnosed with metabolic syndrome about its underlying pathophysiology. Which explanation is most accurate?",
            options: [
              "Metabolic syndrome is primarily driven by subcutaneous fat stored just beneath the skin.",
              "Metabolic syndrome develops mainly from elevated LDL cholesterol independent of fat distribution.",
              "Metabolic syndrome is driven mainly by insulin resistance, largely related to increased visceral fat.",
              "Metabolic syndrome results primarily from decreased visceral fat combined with increased subcutaneous fat."
            ],
            answer: 2,
            rationale: "The main underlying risk factor for metabolic syndrome is insulin resistance, driven largely by increased visceral fat — subcutaneous fat carries lower risk than visceral fat, which is the opposite of options A and D.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient newly diagnosed with metabolic syndrome asks the nurse, \"What's the one treatment that will fix all of this?\" Which response best reflects appropriate nursing knowledge of metabolic syndrome management?",
            options: [
              "\"There is a single standardized medication protocol that treats metabolic syndrome as a whole.\"",
              "\"There isn't one specific treatment — each risk factor is addressed individually, along with lifestyle changes.\"",
              "\"Bariatric surgery alone is the recommended first-line treatment for anyone with metabolic syndrome.\"",
              "\"Once your waist circumference returns to normal, the other criteria typically resolve on their own.\""
            ],
            answer: 1,
            rationale: "There is no single specific management for metabolic syndrome — the nurse addresses each risk factor individually, watches for complications, and emphasizes long-term lifestyle-based risk reduction. Bariatric surgery may be appropriate for some patients but is not a universal stand-alone fix.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A post-op patient's respiratory rate rises from a baseline of 16 to 24 during ambulation to the bathroom. Ten minutes after returning to bed and resting, the rate is still 30 and has not come down. Which finding should most concern the nurse?",
            options: [
              "A respiratory rate of 24 during ambulation, because normal RR is 12-20 at all times",
              "The rate returning to baseline after exertion, because that means increased work",
              "The rate of 24 during ambulation, because tachypnea always indicates hypoxia",
              "The persistent rate of 30 at rest, because a rate above 27 risks cardiac arrest"
            ],
            answer: 3,
            rationale: "Exercise or stress normally raises rate and depth, but that increase should return to baseline once exertion stops; a rate that stays elevated is a cue something is wrong, and a sustained rate above 27 specifically raises the risk of cardiac arrest. The brief rise with ambulation (24) is an expected response to activity, not itself the danger sign.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A nurse enters the room of a patient recovering from thoracic surgery and finds the patient repeatedly shifting position, unable to settle, and saying \"something feels off,\" even though vital signs are still within normal limits. What should the nurse do?",
            options: [
              "Recognize restlessness as an early cue of hypoxia and assess respiratory status",
              "Reassure the patient that anxiety after surgery is normal and encourage relaxation",
              "Document the finding as expected post-anesthesia behavior and continue rounding",
              "Wait until vital signs change before initiating further respiratory assessment"
            ],
            answer: 0,
            rationale: "Restlessness is described as a huge, early cue of hypoxia and is never a good sign, even before vital signs shift — the nurse should assess further rather than attribute it to anxiety or wait for objective changes, since late signs like bradycardia and extreme restlessness come after early ones.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "In a cold exam room, a nurse notes a patient's fingertips and nail beds appear slightly bluish, but the tongue and the area around the mouth remain pink, and the patient is talking comfortably with no distress. How should the nurse interpret this finding?",
            options: [
              "This represents central cyanosis and indicates immediate hypoxia requiring supplemental oxygen",
              "This represents peripheral cyanosis, most consistent with vasoconstriction rather than an oxygenation problem",
              "This finding cannot be interpreted without a pulse oximetry reading first",
              "This represents late-stage hypoxia because cyanosis only appears once tissue oxygenation has significantly failed"
            ],
            answer: 1,
            rationale: "Peripheral cyanosis (extremities, nail beds) is usually a vasoconstriction problem rather than an oxygenation problem, while central cyanosis (tongue, soft palate, around the eyes) is what indicates true hypoxia — and this patient's tongue and mouth remain pink. Cyanosis overall is a late, unreliable sign, but that doesn't make this specific peripheral finding a hypoxia emergency.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student is observing the respiratory therapist prepare to deflate a mechanically ventilated patient's tracheostomy cuff so a speaking valve trial can begin. Which action should occur immediately before the cuff is deflated?",
            options: [
              "Insert the obturator into the outer cannula in case the tube dislodges",
              "Ask the patient to cough forcefully to mobilize secretions before deflation",
              "Suction the patient's mouth to remove secretions pooled above the cuff",
              "Suction the trachea through the inner cannula to clear the lower airway"
            ],
            answer: 2,
            rationale: "The correct sequence is: suction the mouth first, because secretions sitting on top of an inflated cuff could be aspirated once it deflates, then deflate the cuff, then suction the trachea. Tracheal suctioning happens after deflation, not before, and the obturator relates to a dislodged tube, not a planned deflation.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient has been receiving high-flow supplemental oxygen at a high FiO2 for several days and begins to develop new symptoms. Which findings should the nurse recognize as possible signs of oxygen toxicity? Select all that apply.",
            options: [
              "Chest pain or heaviness",
              "Muscle twitching",
              "Increased urine output",
              "New visual changes",
              "Bradycardia that resolves quickly with rest",
              "Nausea and GI upset"
            ],
            answers: [0, 1, 3, 5],
            rationale: "Oxygen toxicity from excessive supplemental oxygen can present with chest pain/heaviness, coughing, dyspnea, muscle twitching, nausea/GI upset, seizures, and visual changes — the nurse should always use the lowest FiO2 that achieves the desired result. Increased urine output and bradycardia that resolves with rest are not associated findings.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "Two patients are receiving oxygen via reservoir bag masks. Patient A's mask has an inflated reservoir bag and one-way valves with flaps over the exhalation ports. Patient B's mask also has an inflated reservoir bag, but there are no flaps anywhere on the mask. How should the nurse interpret this?",
            options: [
              "Patient A has a non-rebreather; Patient B has a partial rebreather",
              "Both patients have non-rebreathers, since both show an inflated reservoir bag",
              "Patient A has a partial rebreather; Patient B has a non-rebreather",
              "The presence or absence of flaps does not distinguish between these two devices"
            ],
            answer: 0,
            rationale: "The reservoir bag flaps are the key visual distinguishing cue: a non-rebreather has a one-way valve plus flaps preventing rebreathing of exhaled air, while a partial rebreather has no flaps. A partially or fully inflated bag alone doesn't distinguish the two devices, since both should have an inflated reservoir bag.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient with chronic obstructive lung disease has a provider order to maintain a very precise, constant FiO2 because the patient is sensitive to fluctuating oxygen levels. Which oxygen delivery device is the best choice?",
            options: [
              "Nasal cannula, because it is best tolerated for long-term precise oxygen delivery",
              "Non-rebreather mask, because it delivers the highest and most stable FiO2 available",
              "Simple face mask, because it is designed for patients needing constant oxygen concentrations",
              "Venturi mask, because color-coded valves deliver an exact, tightly regulated FiO2"
            ],
            answer: 3,
            rationale: "The Venturi (\"Vinnie\") mask is a high-flow device that delivers a precise FiO2 via color-coded valves, making it the best choice for a chronic lung disease patient who needs tightly regulated, constant oxygen. Nasal cannula FiO2 varies with the patient's breathing pattern, a non-rebreather is for critical patients needing high (not precisely titrated) FiO2, and a simple face mask is best for short periods or transport.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient's tracheostomy tube completely dislodges from the stoma. The nurse retrieves the spare trach tube and obturator kept at the bedside and inserts the obturator into the replacement outer cannula. What should the nurse do next?",
            options: [
              "Secure the new trach ties around the patient's neck",
              "Extend the patient's neck and open the stoma",
              "Immediately remove the obturator from the cannula",
              "Assess the patient's stoma and lung sounds"
            ],
            answer: 1,
            rationale: "The taught sequence is: insert the obturator into the replacement outer cannula, extend the patient's neck and open the stoma, insert the outer cannula (with obturator inside) into the stoma, immediately remove the obturator, assess the patient and lung sounds, then secure the new trach ties. After inserting the obturator, the next step is extending the neck and opening the stoma, not yet removing the obturator or assessing/securing ties.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A nurse caring for a patient with an inflated tracheostomy cuff notes the pilot balloon feels unusually firm, suggesting the cuff is overinflated. If this pressure isn't addressed, this patient is at greatest risk for which complication?",
            options: [
              "Aspiration of secretions pooled above the cuff",
              "Accidental decannulation during a patient transfer",
              "Fistula formation between the trachea and esophagus",
              "Oxygen toxicity from an excessive FiO2 setting"
            ],
            answer: 2,
            rationale: "Overinflation increases mucosal pressure, which can lead to ischemia, cartilage softening/erosion, and even a tracheoesophageal fistula. Aspiration from pooled secretions is a risk of deflating a cuff without suctioning the mouth first, not of overinflation; accidental decannulation relates to loose ties, and oxygen toxicity relates to supplemental oxygen devices, not cuff pressure.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient with longstanding chronic obstructive lung disease has a pulse oximetry reading of 93% and appears comfortable with no signs of distress. What is the nurse's most appropriate action?",
            options: [
              "Increase supplemental oxygen since normal SpO2 is 95-100%",
              "Call the provider to report a critical hypoxemic reading",
              "Switch the probe site since the reading is likely inaccurate",
              "Verify the order for this patient's prescribed SpO2 target"
            ],
            answer: 3,
            rationale: "While normal SpO2 is 95-100%, a provider may prescribe a different target for a patient with chronic lung disease — for example, keeping an obstructive-disease patient around 93% — so the nurse should know and verify the patient's specific order rather than automatically treating to the general normal range or assuming an emergency or equipment error.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A home health nurse measures a client's blood pressure as 190/128 mmHg. The client has a mild headache but feels well otherwise and wants to finish yard work before addressing it. What should the nurse do first?",
            options: [
              "Tell the client to recheck the blood pressure in 24 hours and call the office if it is still elevated.",
              "Instruct the client to seek immediate medical attention before returning to any activity.",
              "Teach the client about the DASH diet and schedule a follow-up clinic visit for next week.",
              "Have the client rest quietly for 30 minutes, then recheck the blood pressure before deciding."
            ],
            answer: 1,
            rationale: "A systolic reading above 180 and/or diastolic above 120 mm Hg meets the definition of a hypertensive crisis, which is a medical emergency requiring the client to seek care immediately. Resting and rechecking is reasonable for an isolated elevated reading but wastes critical time once crisis-level thresholds are met, and DASH teaching is a long-term strategy, not an emergency response.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A nurse performs orthostatic vital sign measurements. Lying for 5 minutes: BP 128/76 mmHg, HR 72. Standing at 1 minute: BP 112/70 mmHg, HR 88, and the client reports feeling dizzy. How should the nurse interpret this data?",
            options: [
              "Orthostatic hypotension is not present, because the systolic drop of 16 mmHg is less than the required 20 mmHg threshold.",
              "Orthostatic hypotension is not present, because the diastolic drop of 6 mmHg is less than the required 10 mmHg threshold.",
              "Orthostatic hypotension is present, because the onset of dizziness on standing meets the diagnostic criteria even though neither BP threshold was reached.",
              "Orthostatic hypotension cannot be confirmed until the client is rechecked standing at 3 minutes, regardless of the dizziness reported at 1 minute."
            ],
            answer: 2,
            rationale: "Orthostatic hypotension is defined as a systolic drop of at least 20 mmHg, a diastolic drop of at least 10 mmHg, OR the onset of lightheadedness/dizziness with a position change — meeting any one criterion confirms it. Here neither BP threshold was met, but the dizziness on standing satisfies the definition on its own, so waiting for a 3-minute recheck is not required to confirm the diagnosis.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "Two days after hip replacement surgery, a client suddenly becomes short of breath, reports chest pain, and appears anxious. Vital signs show tachycardia and tachypnea. What is the nurse's priority action?",
            options: [
              "Elevate the client's legs and apply TED hose, since compression may relieve the dyspnea.",
              "Notify the provider immediately and prepare the client for emergency evaluation.",
              "Palpate and massage the calves bilaterally, since this may reveal the source of the emboli.",
              "Document the findings and reassess in 30 minutes, since trends will clarify the diagnosis."
            ],
            answer: 1,
            rationale: "Sudden dyspnea, chest pain, tachycardia, tachypnea, and anxiety in a postoperative, high-VTE-risk client are classic pulmonary embolism signs, a life-threatening emergency requiring immediate attention — the priority is emergent notification and evaluation, not routine measures. Massaging the calves is contraindicated because it can dislodge a clot, and waiting 30 minutes delays care for a time-critical emergency.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A client's echocardiogram shows an ejection fraction of 33%. The nurse understands this finding is most consistent with which condition?",
            options: [
              "Normal, healthy ventricular function that requires no further intervention.",
              "Borderline ventricular function that should simply be rechecked in one year.",
              "Increased stroke volume compensating for an abnormally slow heart rate.",
              "Heart failure, since this value falls well below the 40% cutoff."
            ],
            answer: 3,
            rationale: "Normal EF is greater than 50%, and an EF below 40% indicates heart failure; 33% falls well below that cutoff, so it is not normal or borderline. A low EF reflects reduced pumping ability rather than a compensatory increase in stroke volume.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A clinic nurse reviews a client's blood pressure trend: three readings over the past month averaged 142/88 mmHg. According to the AHA classification, how should the nurse categorize this reading?",
            options: [
              "Hypertension Stage 2, because the systolic value alone meets that category.",
              "Hypertension Stage 1, because both values fall in the 130-139/80-89 range.",
              "Elevated blood pressure, because the diastolic value is below 90 mmHg.",
              "Normal blood pressure, since only one of the two values is elevated."
            ],
            answer: 0,
            rationale: "Hypertension Stage 2 is defined as systolic 140 mmHg or higher OR diastolic 90 mmHg or higher — only one criterion needs to be met, and a systolic of 142 alone meets it. This reading does not fit Stage 1 (130-139/80-89) or Elevated (120-129 systolic and diastolic below 80), since the systolic value already exceeds those ranges.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A client is scheduled for a fasting lipid profile in the morning. Which instruction should the nurse provide?",
            options: [
              "Avoid all food and beverages, including water, for 24 hours before the test.",
              "No food or drink except water is needed for approximately 9-12 hours before the blood draw.",
              "Only fatty and fried foods need to be avoided in the 12 hours before the test.",
              "Fasting is not required as long as the client avoids caffeine that morning."
            ],
            answer: 1,
            rationale: "A fasting lipid profile requires no food or drink other than water for typically 9-12 hours prior to be accurate. Restricting only fatty foods or skipping the fast altogether would produce inaccurate results, and restricting water for 24 hours is unnecessary and unsafe.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "During assessment, a nurse observes visible jugular venous distention with the head of the bed elevated to 45 degrees. This finding is most consistent with which condition?",
            options: [
              "Fluid volume excess",
              "Fluid volume deficit",
              "Normal venous pressure",
              "Decreased cerebral perfusion"
            ],
            answer: 0,
            rationale: "Jugular venous distention observed at a 45-degree angle implies fluid volume excess. It is not a normal finding and does not by itself indicate fluid deficit; decreased level of consciousness, not JVD, is the finding associated with decreased cerebral perfusion.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "While auscultating heart sounds, a nurse hears an extra sound immediately after S2, in a rhythm the instructor describes as sounding like 'Ken-TUCK-y.' The nurse should recognize this as which finding?",
            options: [
              "A normal variant heard in some healthy young adults, since extra sounds are common with a vigorous heartbeat.",
              "S4, an atrial gallop that occurs just before S1 and is heard as 'da-lub-dup.'",
              "A pericardial friction rub caused by inflammation of the pericardial sac.",
              "S3, a ventricular gallop that always indicates cardiovascular dysfunction."
            ],
            answer: 3,
            rationale: "The 'Ken-TUCK-y' rhythm is the classic pattern for S3, a ventricular gallop, which — like S4 — is never a normal finding and always indicates cardiovascular dysfunction. A rub has a scratchy quality from pericardial friction rather than a gallop rhythm, and S4 (atrial gallop) has a different timing and sound pattern.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A client with a newly diagnosed DVT has a strong contraindication to anticoagulant therapy due to active gastrointestinal bleeding. Which intervention would the nurse anticipate to prevent the clot from reaching the lungs?",
            options: [
              "Placement of an inferior vena cava (IVC) filter",
              "Administration of a higher dose of anticoagulation",
              "Strict bed rest with the affected leg elevated",
              "Bilateral TED hose to keep the clot from migrating"
            ],
            answer: 0,
            rationale: "An IVC filter may be placed in patients who cannot tolerate anticoagulation, to catch clots before they reach the lungs — exactly this client's situation. Giving anticoagulation despite an active bleed is unsafe, and TED hose or bed rest do not stop an already-formed clot from embolizing.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for several clients at high risk for venous thromboembolism. Which nursing actions are appropriate to help prevent a DVT? Select all that apply.",
            options: [
              "Apply graduated compression (TED) stockings as ordered.",
              "Encourage ankle pump and calf-pumping exercises.",
              "Massage the calves during morning care to stimulate circulation.",
              "Apply sequential compression devices (SCDs) as ordered.",
              "Encourage early ambulation as the client's condition allows.",
              "Keep the client on strict bed rest to avoid dislodging any developing clot."
            ],
            answers: [0, 1, 3, 4],
            rationale: "TED hose, SCDs, ankle pump/calf exercises, and early ambulation are all appropriate nursing care/prevention measures for VTE. Massaging the calves is specifically contraindicated because it can dislodge a clot, and prolonged bed rest is itself a major VTE risk factor rather than a preventive measure.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A nurse prepares to administer a scheduled dose of rapid-acting insulin to a patient with type 2 diabetes. Which actions should the nurse take before giving the dose? Select all that apply.",
            options: [
              "Check the patient's current blood glucose level",
              "Confirm the onset, peak, and duration of the insulin being administered",
              "Verify the patient's diet order and confirm the patient is not NPO",
              "Identify how the patient's hypoglycemia would present if it develops",
              "Administer the dose as soon as it is due, since blood glucose can be checked afterward if the patient seems stable",
              "Skip verifying diet status since insulin dosing is not affected by oral intake"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Insulin is a high-alert medication; before any dose the nurse must know the current glucose, understand the drug's action profile, confirm the patient can/will eat (or is NPO), and know how to recognize hypoglycemia. Giving insulin first and checking glucose 'afterward,' or ignoring diet status, risks a severe hypoglycemic event.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A 22-year-old presents with a 2-week history of excessive thirst, hunger, and urination, and has lost weight despite eating more. Labs confirm the patient makes no endogenous insulin. Which statement correctly distinguishes this patient's likely diagnosis from type 2 diabetes?",
            options: [
              "This type accounts for the majority of diagnosed diabetes cases and typically develops gradually over years",
              "This type results from autoimmune destruction of the pancreatic beta cells and has an abrupt onset",
              "This type is most often diagnosed in adults over age 45 who are screened based on risk factors rather than symptoms",
              "This type can typically be managed with oral agents alone before eventually progressing to insulin"
            ],
            answer: 1,
            rationale: "Type 1 diabetes is caused by autoimmune beta-cell destruction, has an abrupt onset, and accounts for only 5-10% of cases, with patients making no endogenous insulin (matching this patient's labs and classic 3 P's). Type 2 develops gradually from insulin resistance, is more common in adults over 40-45, is often found through risk-factor screening, and may initially be managed with oral agents.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A conscious, alert patient with type 1 diabetes reports feeling shaky and sweaty. Fingerstick glucose is 58 mg/dL. The patient is able to swallow safely. What should the nurse do first?",
            options: [
              "Give 15 g of a simple carbohydrate and recheck the glucose in 15 minutes",
              "Administer IM glucagon immediately to prevent loss of consciousness",
              "Give a snack of peanut butter and crackers for more sustained glucose",
              "Push IV D50 dextrose immediately to correct the glucose level faster"
            ],
            answer: 0,
            rationale: "For a conscious patient able to swallow, the Rule of 15 applies: give 15 g of simple carbohydrate, such as 4 oz of juice, and recheck glucose in 15 minutes, repeating if still under 70. Glucagon and IV dextrose are reserved for patients who are unconscious or unable to swallow, and fat-containing foods like peanut butter delay carbohydrate absorption and are avoided.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient with newly diagnosed diabetes asks how the hemoglobin A1C test differs from a fingerstick glucose check. Which response by the nurse is accurate?",
            options: [
              "\"A1C measures your glucose level at the exact moment blood is drawn, similar to a fingerstick.\"",
              "\"A1C only confirms a diagnosis and cannot be used to track how well treatment is working over time.\"",
              "\"A1C reflects your overall blood glucose control averaged over the past three months.\"",
              "\"A1C must be repeated every time you eat, since it reflects only the last few hours of glucose exposure.\""
            ],
            answer: 2,
            rationale: "Hemoglobin A1C reflects average glucose control over roughly the past 3 months and serves double duty: diagnosing diabetes (at 6.5% or higher) and evaluating how well treatment is working, with a target around 7% for patients with established diabetes. It is not a point-in-time measurement like a fingerstick and does not depend on same-day eating.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a history of type 2 diabetes is admitted with confusion, rapid breathing, and a random blood glucose of 620 mg/dL. Which clinical picture does this most likely represent?",
            options: [
              "Mild hyperglycemia requiring only close monitoring and a repeat check in several hours",
              "Hypoglycemia with paradoxical symptoms due to a chronically elevated baseline glucose",
              "Prediabetes with impaired glucose tolerance and no need for urgent treatment",
              "A life-threatening hyperglycemic crisis such as HHS, requiring emergency treatment"
            ],
            answer: 3,
            rationale: "A glucose in the 500-700+ range with confusion and rapid breathing is consistent with a life-threatening crisis, HHS in a type 2 patient (or DKA in type 1), both involving dangerous electrolyte abnormalities. Any random glucose above 300 mg/dL alone is already a medical emergency, so this level with neurologic changes is far beyond simple hyperglycemia needing only routine monitoring.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A nurse checks the gastric residual volume before the next scheduled bolus tube feeding and obtains 400 mL. The patient has no nausea or distension. What should the nurse do?",
            options: [
              "Discard the residual, give the scheduled feeding as ordered, and document a normal finding",
              "Hold the feeding, return the residual to the patient, and recheck the residual in an hour",
              "Hold the feeding and notify the provider, since a residual over 300 mL requires notification",
              "Discard the residual, then reduce the feeding volume by half for the next 24 hours"
            ],
            answer: 1,
            rationale: "As a general guideline, a gastric residual over 250 mL should prompt holding the feeding and rechecking in an hour; the provider is notified specifically when residual exceeds 500 mL. Aspirated residual is returned to the patient rather than discarded.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is asked to confirm placement of a newly inserted nasogastric feeding tube before the first feeding is started. Which method should the nurse use?",
            options: [
              "Obtaining an X-ray to confirm the tube position before the feeding is started",
              "Injecting air into the tube while auscultating over the stomach for a \"whoosh\" sound",
              "Aspirating secretions and testing the pH of the aspirate, without prior imaging",
              "Asking the patient to swallow water and observing for coughing during the swallow"
            ],
            answer: 0,
            rationale: "X-ray is the only definitive method for confirming initial feeding tube placement; the 'whoosh test' (air insufflation with auscultation) is outdated and unreliable. Once placement is confirmed by X-ray, pH testing of aspirate can be used for ongoing checks, but it is not the initial confirmation method.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient's gut is nonfunctional after extensive bowel surgery, and the provider orders full-strength total parenteral nutrition. Why must this be administered through a central line rather than a standard peripheral IV?",
            options: [
              "Central lines allow a faster infusion rate, which is required for adequate caloric delivery",
              "Peripheral veins cannot accommodate any continuous infusion, regardless of concentration",
              "TPN at this concentration causes phlebitis when infused into a peripheral vein",
              "Central line placement is required by policy for any nutrition that bypasses the GI tract"
            ],
            answer: 2,
            rationale: "Standard TPN is highly concentrated, and infusing it through a peripheral vein causes phlebitis, which is why a central line is required. A more dilute parenteral formula can be given peripherally, so the central-line requirement is about concentration, not simply that the nutrition bypasses the gut.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient recovering from a stroke has slurred, effortful speech but swallows safely with no coughing, pocketing, or delayed swallow noted. How should the nurse document this finding, and what related complication should the nurse remain alert for even though this particular sign is currently absent?",
            options: [
              "Document dysphagia, and monitor for expressive aphasia as a related complication",
              "Document dysphagia and dysphasia together, since the two always occur as a pair after a stroke",
              "Document dysphagia, and monitor for further difficulty talking as the primary concern",
              "Document dysphasia, and monitor for silent aspiration as a related complication"
            ],
            answer: 3,
            rationale: "Dysphasia (spelled with an 's') is difficulty talking, distinct from dysphagia (with a 'g'), which is difficulty swallowing; a patient can have either or both, especially after a stroke. Even with no overt swallowing warning signs, the nurse should stay alert for silent aspiration, where food or fluid enters the airway without triggering a cough due to decreased sensation.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "During a home visit, a nurse teaches a patient with longstanding type 2 diabetes and peripheral neuropathy about foot care. The patient says, 'I don't need to check my feet every day since I would feel it if something were wrong.' What is the priority correction to this statement?",
            options: [
              "\"You're right that pain would alert you, but daily inspection is still recommended to check for swelling and blisters.\"",
              "\"Because neuropathy causes loss of protective sensation, you may not feel an injury, so daily foot inspection is essential.\"",
              "\"Foot injuries in diabetes are usually painful even with neuropathy, so daily checks are mainly for cosmetic reasons.\"",
              "\"As long as you see your primary care provider for a monofilament test once a year, daily self-checks aren't necessary.\""
            ],
            answer: 1,
            rationale: "Diabetic neuropathy causes loss of protective sensation (LOPS), meaning patients often cannot feel injuries to their feet; combined with poor wound healing and decreased circulation, this is why daily self-inspection, including the soles, is essential and not optional. A monofilament test performed in clinic checks protective sensation but does not substitute for the patient's own daily inspection.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for a patient newly diagnosed with Clostridioides difficile (C. diff) infection who is being placed on precautions. Which actions should the nurse include in the plan of care? (Select all that apply.)",
            options: [
              "Wash hands with soap and water before and after providing care",
              "Instruct visitors and staff to use alcohol-based hand sanitizer when entering the room",
              "Clean the patient's room and equipment surfaces with a bleach-based disinfectant",
              "Place the patient in a private room with contact/spore isolation precautions",
              "Send a stool sample to confirm the diagnosis, expecting results in about 48 hours",
              "Apply standard precautions only, since C. diff spreads via airborne droplets"
            ],
            answers: [0, 2, 3, 4],
            rationale: "C. diff is spore-forming, and spores survive on hands and surfaces and resist alcohol-based sanitizer, so soap-and-water hand hygiene, bleach disinfection, contact/spore isolation, and stool confirmation (about 48-hour turnaround) are all indicated. Alcohol sanitizer alone will not kill the spores, and C. diff is not airborne — it requires contact precautions, not standard precautions alone.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse assesses a debilitated, bedbound patient with no documented bowel movement in 5 days. The chart shows several episodes of loose, liquid stool over the past 24 hours, charted as \"diarrhea.\" On assessment the nurse notes a firm, distended lower abdomen. Which action should the nurse take first?",
            options: [
              "Administer the PRN antidiarrheal medication for the loose stools",
              "Hold the patient's stool softener because the stools are loose",
              "Perform a digital rectal exam to check for a hardened stool mass",
              "Document the loose stool as diarrhea and reassess in 24 hours"
            ],
            answer: 2,
            rationale: "Oozing liquid stool around a hard, retained fecal mass is a hallmark of impaction and is easily mistaken for diarrhea; a firm, distended abdomen with days of no true bowel movement should prompt a rectal check rather than treating this as diarrhea. Holding the stool softener or giving an antidiarrheal would worsen the underlying impaction.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "An older adult with chronic constipation asks the nurse which of their bowel medications is safe to take every day, long-term, without risk of dependence. Which class should the nurse identify?",
            options: [
              "Stimulant cathartic agents",
              "Osmotic laxative agents",
              "Bulk-forming fiber agents",
              "Emollient stool softeners"
            ],
            answer: 2,
            rationale: "Bulk-forming fiber agents (e.g., psyllium/Metamucil) are the only laxative class considered safe for regular daily use. Stimulant cathartics, osmotics, and emollient softeners (e.g., docusate) are intended for short-term or PRN use, since overuse can cause dependence on the bowel's ability to function on its own.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A patient has had an indwelling urinary catheter in place for 4 days for strict intake/output monitoring but is now hemodynamically stable and no longer critically ill. Hospitals are not reimbursed for treating catheter-associated UTIs (CAUTIs) because they are considered largely preventable. Which nursing action best reflects this prevention priority?",
            options: [
              "Irrigating the catheter with normal saline every shift for patency",
              "Advocating for catheter removal once it is no longer necessary",
              "Changing the catheter every 72 hours to reduce biofilm buildup",
              "Increasing the frequency of perineal care to twice daily"
            ],
            answer: 1,
            rationale: "CAUTI risk rises directly with catheter dwell time, so the nurse's key prevention role is reassessing the ongoing need for the catheter every shift and advocating for prompt removal once it is no longer needed. Routine irrigation or scheduled catheter changes are not supported prevention practices and can actually introduce more infection risk.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "While administering a cleansing enema, the nurse notes the patient's abdomen has become rigid and the patient reports sudden, severe abdominal pain. What should the nurse do first?",
            options: [
              "Slow the infusion rate by lowering the enema bag",
              "Reposition the patient onto their right side and continue",
              "Stop the procedure immediately and notify the provider",
              "Encourage the patient to retain the solution a few minutes longer"
            ],
            answer: 2,
            rationale: "A rigid abdomen with sudden severe pain during an enema suggests possible bowel perforation, an emergency requiring the nurse to stop immediately and notify the provider. Slowing the infusion rate is the correct response to ordinary cramping, not to signs of perforation.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A patient has an NG tube connected to suction for gastric decompression. The nurse notes the suction is set higher than the provider's order, and the drainage has become blood-tinged. What is the priority nursing concern?",
            options: [
              "The high suction setting is likely causing erosion of the gastric mucosa",
              "The tube has migrated into the esophagus and needs repositioning",
              "The patient is developing a paralytic ileus from prolonged gastric suction",
              "The elevated suction is pulling stomach acid into the lungs"
            ],
            answer: 0,
            rationale: "Excessive suction on an NG tube can erode the gastric mucosa and cause ulceration, which explains new blood-tinged drainage; the nurse should verify and correct the suction to the ordered low wall setting. Tube migration, ileus, and aspiration of acid are not supported by the scenario as given.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A postoperative patient has an indwelling catheter with hourly urine output measured. Over the past 3 hours, hourly output has been 25 mL, 22 mL, and 20 mL. What should the nurse do?",
            options: [
              "Wait one more hour before reporting since only one hour has elapsed below threshold",
              "Continue routine monitoring since output above 15 mL/hr is expected postoperatively",
              "Increase the IV fluid rate independently to boost output before reassessing",
              "Notify the provider, since output has been below 30 mL/hr for more than 2 hours"
            ],
            answer: 3,
            rationale: "Urine output under 30 mL/hr sustained for more than 2 hours is a concerning finding that requires provider notification, since it may indicate reduced renal perfusion or retention. A nurse cannot independently adjust an IV rate to correct this, and 15 mL/hr is not the actual threshold for concern.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse observes a new graduate nurse caring for a patient with an indwelling catheter. Which action by the new nurse requires the preceptor to intervene?",
            options: [
              "Placing the drainage bag on the patient's bed during transport to radiology",
              "Emptying the drainage bag when it is about half full",
              "Documenting the catheter as still clinically necessary during shift assessment",
              "Keeping the drainage tubing free of kinks and dependent loops"
            ],
            answer: 0,
            rationale: "The drainage bag must always stay below the level of the bladder and off the floor to prevent backflow of urine into the bladder, which raises CAUTI risk; placing it on the bed during transport violates this principle. Emptying at half full, reassessing catheter necessity each shift, and preventing kinks are all correct catheter care practices.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A patient reports a sense of incomplete bladder emptying after voiding. The nurse wants to assess the post-void residual (PVR) volume. Which action can the nurse initiate without a provider order?",
            options: [
              "Insert a straight catheter immediately to measure residual volume",
              "Order a KUB X-ray to visualize the degree of bladder filling",
              "Administer a diuretic to assess response and estimate retention",
              "Use a bladder scanner to estimate the residual urine volume"
            ],
            answer: 3,
            rationale: "Bladder scanning (ultrasonography) is a noninvasive, independent nursing intervention that can be used to estimate PVR without a provider order, while straight catheterization is more invasive and not the independent first step. Diuretics and a KUB X-ray are not used to measure PVR.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A urinalysis on an asymptomatic older adult admitted for hip surgery incidentally reveals bacteria in the urine. The patient has no dysuria, fever, or new confusion, and vital signs are stable. What is the most appropriate nursing action?",
            options: [
              "Anticipate an order for antibiotics to treat the bacteriuria",
              "Recognize that bacteriuria without symptoms is not routinely treated",
              "Insert an indwelling catheter to obtain a sterile specimen for culture",
              "Notify the provider that the patient has a UTI requiring isolation"
            ],
            answer: 1,
            rationale: "Bacteriuria without symptoms is generally not treated with antibiotics, since treatment does not improve outcomes in these cases and contributes to resistance; the nurse should continue monitoring rather than assume infection requiring treatment. Note that older adults can present atypically with confusion or falls, but this patient has none of those cues.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse enters a postoperative patient's room and finds a loop of bowel protruding through an open abdominal incision. The patient reports a sudden popping sensation and increased drainage on the dressing. Which actions should the nurse take? (Select all that apply.)",
            options: [
              "Attempt to gently reposition the protruding bowel back through the incision before the provider arrives",
              "Remain with the patient and call for help rather than leaving the room to notify the provider by phone",
              "Cover the wound and protruding organs with a sterile dressing soaked in saline",
              "Position the patient supine with the knees bent to reduce tension on the abdomen",
              "Keep the patient NPO in anticipation of a return to surgery",
              "Offer the patient a small amount of water to keep the mouth from feeling dry"
            ],
            answers: [1, 2, 3, 4],
            rationale: "Evisceration is a surgical emergency: stay with the patient and get help rather than leaving them alone, cover the wound/organs with a sterile saline-soaked dressing, position supine with knees bent to reduce abdominal tension, and keep the patient NPO in case of emergent surgery. Never attempt to push protruding organs back in, and oral intake is contraindicated given the likely return to surgery.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse reviews Braden Scale scores for four patients on a med-surg unit. Which patient is at the greatest risk for developing a pressure injury?",
            options: [
              "A patient with a Braden score of 22",
              "A patient with a Braden score of 18",
              "A patient with a Braden score of 15",
              "A patient with a Braden score of 10"
            ],
            answer: 3,
            rationale: "On the Braden Scale (range 6-23), a lower score indicates higher risk because it reflects greater impairment across the subscales the tool measures. A score of 10 is closest to the highest-risk end of the range compared with 15, 18, or 22.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse assesses a reddened area over a bedbound patient's sacrum. When pressure is applied with a gloved finger, the area turns white; when pressure is released, the redness returns within a few seconds. How should the nurse interpret this finding?",
            options: [
              "This is non-blanchable erythema, indicating deep tissue damage has occurred",
              "This is blanchable erythema, indicating intact blood flow and possible recovery",
              "This finding indicates the area has progressed to an unstageable pressure injury",
              "This finding indicates a deep tissue injury at the bone-muscle interface"
            ],
            answer: 1,
            rationale: "Skin that whitens under pressure and returns to red once released is blanchable, meaning blood flow is still intact and the tissue can likely still recover. Non-blanchable redness (doesn't turn white, or stays red) signals that deep tissue damage is already present, which is a more concerning finding.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse notes a persistent area of deep purple, non-blanchable discoloration over a patient's heel. The patient has no history of trauma to the area but has had limited mobility for several days. Which explanation should guide the nurse's understanding of this finding?",
            options: [
              "This is a normal bruise from an unwitnessed minor injury requiring no action",
              "This is a stage 1 pressure injury, since the skin over the area is intact",
              "This is cyanosis suggesting impaired venous return in the lower extremity",
              "This is a deep tissue injury from pressure and shear at the bone-muscle interface"
            ],
            answer: 3,
            rationale: "A deep tissue injury presents as persistent non-blanchable deep discoloration from pressure and shear at the bone-muscle interface -- it looks like a bruise but is not traumatic in origin, which is exactly why it can be mistaken for one. A stage 1 injury is non-blanchable redness with intact skin, not deep maroon/purple discoloration, and there is no reported trauma to support a bruise.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A patient is 5 days post-op from abdominal surgery. The nurse notes serosanguineous drainage has increased and the incision edges appear separated, but no abdominal organs are visible. Which is the priority nursing action?",
            options: [
              "Notify the provider, limit straining, and apply wet-to-damp dressings to promote granulation",
              "Reassure the patient this is normal healing at this stage and continue routine dressing changes",
              "Apply a sterile saline-soaked dressing, notify the provider, and prepare for evisceration",
              "Apply an occlusive hydrocolloid dressing over the incision and reassess it in 3 days"
            ],
            answer: 0,
            rationale: "This presentation (post-op day 5, separated wound edges without protruding organs) is dehiscence, which classically occurs 3-11 days post-op before collagen has fully strengthened the wound; management includes provider notification, minimizing strain, and wet-to-damp dressings for granulation. The saline-soaked dressing and evisceration precautions are appropriate only once organs are actually protruding.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A patient is 7 days post-op and develops a fever of 101.8 F, increasing wound pain, purulent drainage, and an elevated WBC count. Which complication is this presentation most consistent with?",
            options: [
              "Wound dehiscence, which typically presents with these findings in the first week post-op",
              "Surgical site infection, which commonly presents 2-11 days post-op",
              "Hemorrhage, evidenced by the rising temperature and increasing wound pain",
              "Evisceration, which is preceded by fever and purulent drainage before organs protrude"
            ],
            answer: 1,
            rationale: "Surgical site infection typically presents 2-11 days post-op with pain, redness, purulent drainage, fever, chills, and an elevated WBC count -- matching this vignette. Dehiscence presents as wound separation rather than infectious signs, and evisceration is defined by organs protruding through the opening, not preceded by fever.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is documenting a wound measuring 4 cm in one direction, 2 cm in a perpendicular direction, and 1.5 cm in depth, with a tunnel noted toward the area closest to the patient's feet. How should the nurse chart the wound dimensions and the tunnel location?",
            options: [
              "2 x 4 x 1.5 cm, with the tunnel charted near 12 o'clock, since 6 o'clock is oriented toward the head",
              "1.5 x 4 x 2 cm, with the tunnel charted near 6 o'clock, since depth is measured first",
              "4 x 2 x 1.5 cm, with the tunnel charted near 6 o'clock, since 12 o'clock is oriented toward the head",
              "4 x 2 x 1.5 cm, with the tunnel charted near 12 o'clock, since the deepest point is always at 12 o'clock"
            ],
            answer: 2,
            rationale: "Wound measurements are always charted in a fixed order -- head-to-toe first, then side-to-side, then depth, all in centimeters. Because 12 o'clock is oriented toward the patient's head, a tunnel located toward the feet is charted near 6 o'clock, not 12 o'clock.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse assesses a wound dressing and finds thick, cloudy, yellow-green drainage with a foul odor. What does this finding most likely indicate, and what should the nurse do?",
            options: [
              "This is serosanguineous drainage typical of a new wound; continue routine care",
              "This is purulent drainage indicating infection; notify the provider promptly",
              "This is sanguineous drainage from a highly vascular wound; apply a pressure dressing",
              "This is serous drainage similar to blister fluid; no intervention is needed"
            ],
            answer: 1,
            rationale: "Purulent drainage -- thick, cloudy, yellow/tan/green -- contains WBCs, tissue debris, and bacteria and signals infection, warranting prompt provider notification and continued close monitoring of the wound. Serous, serosanguineous, and sanguineous drainage are expected findings in clean, new, or vascular wounds and don't match this thick, foul-smelling description.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is planning pressure injury prevention for an immobile patient. Which intervention reflects the recommended minimum turning frequency to reduce pressure injury risk?",
            options: [
              "Reposition the patient at least every 4 hours to allow adequate rest",
              "Reposition the patient once per shift and rely on the specialty mattress for pressure relief",
              "Reposition the patient only when they report discomfort",
              "Reposition the patient at least every 2 hours and use pillows to float the heels off the bed"
            ],
            answer: 3,
            rationale: "Frequent repositioning at least every 2 hours, combined with heel-floating devices like pillows, addresses the duration factor in pressure injury development by relieving prolonged pressure over bony prominences. Turning every 4 hours or once per shift allows tissue ischemia to develop for too long, and waiting for reported discomfort misses patients with reduced sensation or cognition.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "Six hours after abdominal surgery, a nurse notes the patient's heart rate has risen from 82 to 108 and blood pressure has dropped from 128/76 to 106/62. A firm, tender area of swelling is developing near the incision. Which complication should the nurse suspect first?",
            options: [
              "Surgical site infection, because fever is the earliest sign of a wound problem",
              "Dehiscence, because the wound layers are separating beneath the swelling",
              "Hemorrhage, because a hematoma and falling blood pressure suggest active bleeding",
              "MASD, because moisture trapped near the incision is causing tissue damage"
            ],
            answer: 2,
            rationale: "Rising heart rate with falling blood pressure alongside a firm, tender, developing area of swelling near the incision are classic subtle signs of hemorrhage and hematoma formation, which nurses must treat as an emergency. Fever is the hallmark of infection rather than this acute presentation, dehiscence presents as visible wound separation, and MASD results from moisture exposure, not vital sign changes.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A 68-year-old admitted with a subdural hematoma is assessed hourly. On this check, the nurse notes the patient opens eyes only to pain, makes incomprehensible sounds, and shows abnormal flexion (decorticate posturing) to painful stimuli — a Glasgow Coma Scale total of 7. Which nursing action takes priority?",
            options: [
              "Notify the provider and prepare to reassess in one hour per routine protocol",
              "Document the GCS score of 7 and continue hourly neuro checks as ordered",
              "Assess the patient's airway and prepare for advanced airway management",
              "Reorient the patient and increase environmental stimulation to raise the GCS"
            ],
            answer: 2,
            rationale: "A GCS of 7 is at or below the threshold of 8, at which a patient typically can no longer protect their own airway, so airway assessment and preparation for advanced airway support take priority — ABCs always come first with neuro decline. Simply documenting and waiting, or trying to raise the score through stimulation, delays a potentially life-threatening priority.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "Family brings in a patient with new-onset slurred speech, facial droop, and confusion that began 20 minutes ago. Stroke protocol is activated. Before the patient goes for CT imaging, which assessment is essential to obtain first?",
            options: [
              "Fingerstick blood glucose level",
              "Pupillary response to light",
              "Glasgow Coma Scale documentation",
              "Full PQRSTU pain assessment"
            ],
            answer: 0,
            rationale: "Hypoglycemia is one of the '4 H's' checked with any acute neuro change and can produce stroke-like symptoms, so checking blood glucose is a required part of stroke protocol to rule out this reversible mimic. Pupil checks and GCS remain important but aren't the specific reversible-cause screen this scenario calls for, and a pain assessment doesn't apply here.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A patient presents to the ED with sudden severe headache described as 'the worst headache of my life,' along with new right-sided weakness. Which diagnostic test should the nurse anticipate being ordered first to rule out a bleed?",
            options: [
              "Skull X-ray, because it can be done at the bedside without transport",
              "EEG, to assess for seizure activity contributing to the weakness",
              "MRI, because it provides the most detailed images without radiation",
              "CT scan, because it is the fast gold-standard test in an emergency"
            ],
            answer: 3,
            rationale: "CT is fast 3D imaging and is the gold standard for identifying an acute stroke or brain bleed. X-ray shows bone only and cannot detect a bleed, EEG evaluates electrical/seizure activity rather than bleeds, and MRI — while more detailed — is slower and less available, typically used after CT if the CT is inconclusive rather than as the first emergency test.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A patient with chronic low back pain lasting 8 months rates pain as 8/10 but has a normal heart rate, blood pressure, and respiratory rate, with no diaphoresis or pupil changes. The nurse should recognize that:",
            options: [
              "The patient is likely exaggerating the severity of the pain since vital signs are normal",
              "Normal vital signs reflect physiologic adaptation over time, not a true decrease in pain intensity",
              "The patient's pain has become acute in nature because vital signs have stabilized",
              "A pain reassessment is unnecessary since objective findings do not support the reported severity"
            ],
            answer: 1,
            rationale: "In chronic pain, the classic sympathetic signs seen in acute pain (increased BP, pulse, respiratory rate, dilated pupils, diaphoresis) fade with adaptation even though pain intensity is unchanged, so the nurse should trust the patient's self-report over normal vitals. Assuming exaggeration or skipping reassessment ignores that pain is inherently subjective and that absent objective signs never negate reported pain.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A postoperative patient is receiving scheduled acetaminophen 650 mg PO q4h and is also taking an OTC combination cold medication from home that contains acetaminophen. What is the nurse's priority action?",
            options: [
              "Hold the scheduled acetaminophen dose and administer only the cold medication",
              "Encourage the patient to switch to ibuprofen for the remainder of the stay",
              "Calculate the patient's total daily acetaminophen intake from all sources",
              "Administer both medications as ordered since acetaminophen is well tolerated"
            ],
            answer: 2,
            rationale: "Acetaminophen from all combined sources must stay under the 24-hour maximum of 4 grams because of hepatotoxicity risk, so the nurse must account for the OTC product's contribution before continuing scheduled dosing. Holding just one dose or switching drugs doesn't address unrecognized combined dosing, and acetaminophen does not have a 'wide margin of safety' at the doses in question.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A nurse caring for a patient with a known traumatic brain injury notes the left pupil is now 6 mm and sluggish while the right pupil remains 3 mm and brisk — a change from the prior assessment. What is the nurse's priority action?",
            options: [
              "Notify the provider immediately, as this represents a neurologic emergency",
              "Document the finding and reassess pupils again at the next scheduled check",
              "Dim the room lights and allow the patient to rest before reassessing",
              "Recheck the pupils in 15 minutes to confirm the finding before notifying anyone"
            ],
            answer: 0,
            rationale: "New pupillary asymmetry in a patient with a known head injury is a late sign of neurologic decline and constitutes an emergency requiring immediate provider notification, not delayed reassessment or documentation alone. Waiting to 'confirm' the finding risks delaying time-critical intervention.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A postoperative, opioid-naive patient receiving IV morphine plus a scheduled benzodiazepine for anxiety is found with a respiratory rate of 6 breaths/min and is difficult to arouse. After confirming the airway is open, which medication should the nurse anticipate giving, and what should the nurse also anticipate regarding its effect?",
            options: [
              "Naloxone; one dose will fully reverse sedation for as long as the morphine lasts",
              "Flumazenil; it directly reverses the opioid-induced respiratory depression",
              "Additional morphine at a lower dose; this will slow the respiratory rate to normal",
              "Naloxone; repeat dosing and close monitoring will likely be needed afterward"
            ],
            answer: 3,
            rationale: "Naloxone is the antidote for opioid-induced respiratory depression, but its half-life is shorter than most opioids, so repeat dosing and close monitoring are needed to prevent re-sedation — this patient is at especially high risk as an opioid-naive patient also receiving a benzodiazepine. Naloxone doesn't provide durable single-dose reversal, flumazenil reverses benzodiazepines rather than opioids, and giving more morphine would worsen the respiratory depression.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "The spouse of a postoperative patient tells the nurse, 'My husband is in pain but keeps falling asleep before he can press the PCA button, so I've been pressing it for him when I see he's uncomfortable.' What is the most important teaching point for the nurse to provide?",
            options: [
              "This is acceptable as long as the spouse presses the button only when the patient appears to be in pain",
              "Only the patient may press the PCA button, since patient self-administration is the key safety feature",
              "The spouse should instead notify the nurse each time the patient needs a dose so the nurse can press the button",
              "The lockout interval prevents overdose regardless of who presses the button, so this practice poses minimal risk"
            ],
            answer: 1,
            rationale: "PCA safety features are built around the patient self-administering based on their own level of sedation — if the patient is too sedated to press the button, that itself signals another dose isn't needed, and anyone else pressing it removes that safeguard and is a leading cause of PCA overdose. Having the nurse press it is equally inappropriate, and the lockout interval does not protect against this specific bypass.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A patient is admitted following an acute ischemic stroke with new left-sided facial droop and slurred speech. The family requests permission to bring the patient's favorite home-cooked meal. What is the nurse's best response?",
            options: [
              "\"That's fine, as long as you cut the food into small pieces to prevent choking.\"",
              "\"He can eat as soon as he tells us he feels ready to try a few bites.\"",
              "\"He needs to remain NPO until a formal swallow evaluation has cleared him.\"",
              "\"Solid foods are fine, but he should avoid drinking liquids until therapy clears him.\""
            ],
            answer: 2,
            rationale: "Stroke patients are assumed to be at dysphagia risk and must remain NPO until a formal swallow evaluation clears them, as part of stroke protocol — families should be educated not to bring food or water regardless of how the patient feels. Cutting food small or restricting only liquids doesn't address the real aspiration risk until formal clearance occurs.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for several patients on long-term opioid therapy for chronic cancer pain. Which statements accurately reflect the concepts of tolerance, dependence, and addiction as they apply to opioid therapy? Select all that apply.",
            options: [
              "A patient who now requires a higher morphine dose than six months ago to achieve the same pain relief is demonstrating tolerance, not addiction",
              "A patient who develops tachycardia, sweating, and agitation after an opioid dose is abruptly stopped is showing signs of dependence and needs a gradual taper, not evidence of addiction",
              "Any patient requesting pain medication before the next scheduled dose is exhibiting drug-seeking behavior consistent with addiction",
              "Addiction is defined by using the medication for its mind-altering psychological effects rather than for pain relief",
              "Tolerance and dependence are both expected physiologic responses to chronic opioid exposure and do not by themselves indicate addiction",
              "A cancer patient requiring unusually high opioid doses due to tolerance should be treated the same as a patient exhibiting true addictive behavior, with equally cautious dose limitations"
            ],
            answers: [0, 1, 3, 4],
            rationale: "Tolerance (needing more drug for the same effect) and dependence (withdrawal symptoms with abrupt cessation) are expected physiologic responses to chronic opioid use, distinct from addiction, which is psychological dependence involving use for mind-altering effects rather than pain relief. Requesting a dose early is not automatically addiction, and cancer patients with tolerance may legitimately need much higher doses — they should not be capped as if displaying addictive behavior.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "An 82-year-old woman with well-controlled type 2 diabetes is brought to the emergency department by her daughter, who reports, 'She just seems confused today, that's not like her.' Vital signs: T 37.9°C (100.2°F) oral, HR 96, BP 128/78, RR 20, SpO2 95% on room air. She denies dysuria, cough, or chest pain. Which of the following should the nurse recognize as most likely explaining this presentation?",
            options: [
              "The patient is experiencing normal age-related cognitive decline and should be reassessed at her next primary care visit.",
              "New-onset confusion in an older adult often represents the first or only sign of an underlying acute illness such as infection.",
              "Because she denies dysuria and chest pain, a urinary tract infection and cardiac event can be ruled out without further testing.",
              "Confusion in this context is most consistent with early-stage dementia and warrants an outpatient neurology referral."
            ],
            answer: 1,
            rationale: "In older adults, new-onset confusion is often the first or only sign of infection or acute illness (UTI, pneumonia, even MI) rather than classic symptoms like fever, dysuria, or chest pain, so absence of those symptoms does not rule anything out. Sudden confusion is never normal aging and always needs work-up, not deferral to a later visit or a dementia diagnosis without evaluation.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A 78-year-old man is admitted for a scheduled hip replacement. Medication reconciliation reveals he takes 11 prescription medications from three different providers, plus two over-the-counter supplements. The nurse identifies this as polypharmacy. Approximately what percentage of older adults does this affect, and what is the best-practice approach to managing it?",
            options: [
              "About 40% of older adults; one provider should coordinate and manage all of the patient's medications, with every prescriber informed of the full list.",
              "About 25% of older adults; each specialist should independently manage the medications they prescribe without coordinating with the others.",
              "About 60% of older adults; medication reconciliation should be performed only if the patient reports a new symptom.",
              "About 40% of older adults; the pharmacy alone is responsible for reconciling medications, and providers do not need to be informed of OTC supplements."
            ],
            answer: 0,
            rationale: "Polypharmacy affects about 40% of older adults, and best practice is having one provider coordinate/manage all medications while every specialist is kept informed of the complete list, since this reduces drug-drug interaction risk. Uncoordinated prescribing, skipping reconciliation until symptoms appear, and omitting OTC supplements from the picture all increase interaction risk rather than reduce it.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A home health nurse visits an 80-year-old widow who lives with her adult son, who manages her finances. The nurse notices unexplained bruising on the patient's upper arms in a pattern suggestive of grip marks, and the son answers all questions on the patient's behalf, remaining in the room throughout the visit. What is the nurse's priority action?",
            options: [
              "Document the bruising as noted and continue the visit as scheduled, since the son is present as a support person.",
              "Confront the son directly about the bruising in front of the patient to observe his reaction.",
              "Find a way to interview and assess the patient privately, away from the son, before deciding on next steps.",
              "Wait until the next scheduled visit to reassess whether the bruising has resolved before taking action."
            ],
            answer: 2,
            rationale: "When elder mistreatment is suspected, the patient should be interviewed and assessed privately, away from the caregiver, so the nurse can obtain an honest account without the caregiver's influence; findings would then be reported, since Kentucky requires mandatory reporting of suspected elder mistreatment. Continuing the visit unchanged, confronting the caregiver openly, or delaying to a future visit all risk further harm and lose the chance to assess the patient safely.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "An older adult with dementia repeatedly states that she needs to leave to pick up her children from elementary school, though her children are now grown adults. Reminding her of the correct date and her children's ages causes visible distress and agitation each time. Which approach reflects the best use of validation therapy in this situation?",
            options: [
              "Firmly correct her with the current date and remind her that her children are adults until she accepts it.",
              "Use a whiteboard and clock in her room to reinforce person, place, and time at each interaction.",
              "Acknowledge the feelings behind her statement rather than insisting that she accept objective reality.",
              "Avoid the topic entirely and change the subject whenever she brings up her children."
            ],
            answer: 2,
            rationale: "Validation therapy does not insist the confused patient agree with objective reality; instead it reflects sensitivity to the meaning or emotion behind the patient's statements — here, her love and concern for her children — which is appropriate since reality orientation is causing distress. Options A and B describe reality orientation, which is not effective for this patient, and simply avoiding the topic ignores the emotional need behind her words.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "During a health assessment, a nursing student states, 'Her blood pressure is elevated, but that's expected since she's 84 years old.' Which response by the supervising nurse is most accurate?",
            options: [
              "'You're right — hypertension is an expected, unavoidable consequence of aging, so no action is needed.'",
              "'Hypertension is common in older adults, but it is not an expected part of aging and still needs treatment.'",
              "'Elevated blood pressure in older adults is usually white coat syndrome and can be disregarded.'",
              "'Since decreased cardiac output is a normal aging change, elevated blood pressure needs no treatment.'"
            ],
            answer: 1,
            rationale: "Hypertension is common with aging but is explicitly not a normal or expected part of it — it is modifiable and treatable and should be managed like any other treatable condition. Calling it an expected, unavoidable consequence of aging, dismissing it as white coat effect, or linking it to normal decreased cardiac output all wrongly normalize a condition the page identifies as requiring treatment.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is teaching a group of family caregivers about normal versus abnormal aging changes. Which statement by a caregiver indicates a need for further teaching?",
            options: [
              "'Significant memory loss and disorientation are not normal aging changes and should always be evaluated further.'",
              "'Some subtle changes in memory can occur with normal aging due to changes in brain cells and neurotransmitters.'",
              "'Since my father is 79, it's expected that he'll become increasingly confused and forgetful — there's nothing to worry about.'",
              "'If my mother suddenly becomes confused, I should let her care team know rather than assuming it's just her age.'"
            ],
            answer: 2,
            rationale: "This statement reflects the common misconception that significant confusion is an inevitable, unconcerning part of aging; in fact, significant memory loss, confusion, or disorientation are never normal aging and always warrant assessment. The other three statements are accurate — subtle memory changes can occur normally, but anything beyond that should be reported, not dismissed.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A 75-year-old patient with osteoarthritis tells the nurse, 'I've just been dealing with the pain in my knees for years, it's part of getting old.' Which response best reflects accurate nursing knowledge?",
            options: [
              "'Chronic pain in older adults is expected and typically resolves on its own without treatment.'",
              "'That's true, most older adults live with chronic pain, so as long as it's tolerable, we don't need to intervene.'",
              "'Since pain tolerance decreases with age, your pain is likely being over-reported and doesn't need further evaluation.'",
              "'Pain is a symptom that something is wrong, not a normal part of aging, and it's important that we assess and manage it properly.'"
            ],
            answer: 3,
            rationale: "Pain is not a normal part of aging — it is a symptom signaling something is wrong and requires good assessment skills, especially because older adults often underreport it. Agreeing that pain is expected and needs no intervention, or assuming it is over-reported, both risk leaving a treatable problem unaddressed.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "An 86-year-old man with Parkinson's disease and peripheral neuropathy from long-standing diabetes is admitted to a unit with dim hallway lighting and no grab bars in the bathroom. The nurse is planning fall prevention interventions. Which of the following represents an intrinsic risk factor the nurse should specifically address for this patient?",
            options: [
              "His gait instability from his chronic conditions.",
              "The dim lighting in the hallway outside his room.",
              "The absence of grab bars in the bathroom he uses.",
              "The slippery flooring in front of the shower."
            ],
            answer: 0,
            rationale: "Intrinsic fall risk factors come from within the body — gait instability from Parkinson's disease and peripheral neuropathy from diabetes are classic examples. Poor lighting, missing grab bars, and slippery flooring are all extrinsic (environmental) risk factors, which the page separates from intrinsic ones, and this patient's case highlights both types working together to raise his fall risk.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A patient is scheduled for discharge home after a total knee replacement. The provider has written discharge orders, but the bedside nurse notes the patient is unable to safely transfer from bed to chair without maximal assistance and becomes short of breath with minimal exertion. What is the nurse's most appropriate action?",
            options: [
              "Proceed with discharge as ordered, since the provider has already authorized the patient to leave.",
              "Discharge the patient but arrange for home health to visit within 24 hours to reassess safety.",
              "Ask the family to stay with the patient for the first few days instead of delaying discharge.",
              "Communicate these findings to the care team and request reevaluation of discharge readiness."
            ],
            answer: 3,
            rationale: "While the provider authorizes discharge, nurses play a major advocacy role and should speak up when bedside assessment suggests a patient isn't ready, even after clearance has been given. Discharging anyway — with or without a home health follow-up plan, or relying on family to compensate for unsafe transfers and dyspnea — does not address the immediate safety concern the nurse has identified.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for several older adult patients on a medical-surgical unit. Which of the following findings should prompt the nurse to suspect early acute illness and warrant further assessment? Select all that apply.",
            options: [
              "A patient who has become newly incontinent of urine over the past two days",
              "A patient who reports decreased appetite that started this week",
              "A patient who has always required a cane for ambulation and continues to use it safely",
              "A patient who is newly dizzy when standing up",
              "A patient who has a stable, longstanding mild hearing deficit",
              "A patient who fell for the first time last night after being steady on their feet for years"
            ],
            answers: [0, 1, 3, 5],
            rationale: "Early indicators of acute illness in older adults include new incontinence, new appetite loss, new dizziness, and a new fall in someone previously steady — these represent changes from baseline. A longstanding, stable use of a cane or a chronic mild hearing deficit are baseline findings, not new changes, so they don't signal acute illness.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A 58-year-old patient with newly diagnosed stage II breast cancer wants to continue aggressive chemotherapy but is struggling with treatment-related nausea, fatigue, and anxiety. The oncology team refers the patient to palliative care. Which statement best reflects the nurse's understanding of this referral?",
            options: [
              "\"You'll need a physician to certify a 6-month or less prognosis before this referral can start.\"",
              "\"Palliative care can start now and continue alongside your chemotherapy, whatever your prognosis.\"",
              "\"This referral means your care team feels further chemotherapy won't help you anymore.\"",
              "\"Palliative care will require you to pause chemotherapy while your symptoms are being managed.\""
            ],
            answer: 1,
            rationale: "Palliative care is available regardless of prognosis and can be provided alongside curative or disease-directed treatment such as chemotherapy. Only hospice requires a physician-certified prognosis of 6 months or less and generally halts treatment for the qualifying diagnosis, so the other options describe hospice-like restrictions or misread the referral as a sign treatment has become futile.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A patient enrolled in hospice for metastatic pancreatic cancer also has chronic kidney disease and has been receiving dialysis for two years. The patient's adult child asks the nurse why the physician allowed dialysis to continue after hospice enrollment, since curative treatments are supposed to stop. What is the nurse's best explanation?",
            options: [
              "\"Dialysis can continue as long as the family strongly prefers it, since hospice honors family preference.\"",
              "\"Now that your parent has been enrolled a while, all restrictions on treating the original diagnosis are lifted.\"",
              "\"Dialysis can continue as a comfort measure because it treats a condition other than the hospice-qualifying cancer.\"",
              "\"Dialysis is being continued as a curative treatment for the pancreatic cancer that qualified your parent for hospice.\""
            ],
            answer: 2,
            rationale: "A treatment for a condition that is not the hospice-qualifying diagnosis — here, kidney failure versus the cancer — can be continued when it functions as a comfort measure. This isn't a blanket loosening of restrictions or based on family preference alone, and it is not curative treatment aimed at the qualifying cancer diagnosis itself.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A patient was admitted to hospice eight months ago with advanced heart failure and a physician-certified prognosis of 6 months or less. At today's visit, the nurse notes the patient's symptoms have significantly improved with the hospice team's symptom-management interventions, and the physician determines the prognosis is no longer 6 months or less. What should the nurse anticipate?",
            options: [
              "The patient will undergo a \"live discharge\" from hospice because the prognosis requirement is no longer met.",
              "The patient will remain on hospice automatically, since the prognosis requirement no longer applies after 6 months enrolled.",
              "The patient will be required to begin curative treatment for heart failure immediately upon discharge.",
              "The patient's hospice enrollment will continue unchanged until a full year of enrollment has passed."
            ],
            answer: 0,
            rationale: "A \"live discharge\" occurs when a patient's condition improves or stabilizes enough that they no longer meet the ≤6-month prognosis requirement for hospice — ongoing physician recertification, not time already enrolled, determines continued eligibility, and discharge from hospice doesn't mandate resuming curative treatment.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is helping a patient with advanced COPD complete advance care planning documents. The patient asks the nurse to explain the difference between the paperwork options. Which explanation is accurate?",
            options: [
              "\"A living will is the same as a last will and testament — both determine how your property is distributed after death.\"",
              "\"A MOST form is appropriate for any adult, healthy or not, who wants to document their future medical wishes.\"",
              "\"A last will and testament describes your wishes for medical treatment if you become unable to communicate.\"",
              "\"A living will records your treatment wishes and names a surrogate; a MOST form is a portable physician order for serious illness.\""
            ],
            answer: 3,
            rationale: "The living will (health care directive) documents treatment wishes and a health care surrogate; the MOST form is a portable physician order intended specifically for patients with serious or advanced chronic illness, not the general population. The last will and testament governs property after death, not medical decisions, so it is unrelated to either document.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A terminally ill, competent patient in a state that permits Medical Aid in Dying (MAID) asks the nurse to explain what the process actually involves. Which response is accurate?",
            options: [
              "\"A physician or family member administers the lethal medication once you give verbal consent.\"",
              "\"You would be prescribed a lethal dose of medication after counseling and would take it yourself.\"",
              "\"MAID refers to pain medication doses that are increased enough that they may incidentally hasten your death.\"",
              "\"MAID involves the care team sedating you to unconsciousness to relieve refractory symptoms.\""
            ],
            answer: 1,
            rationale: "MAID requires a competent, terminally ill patient to self-administer a prescribed lethal dose of medication after requesting it. Administration by someone else describes euthanasia, medication doses that may incidentally hasten death describe a separate concept, and sedating a patient to unconsciousness describes palliative sedation — all explicitly distinguished from MAID in the material.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A new graduate nurse is orienting to both an inpatient palliative care consult service and a community hospice team and asks a preceptor who \"drives\" the plan of care on each. Which response best reflects how these two teams typically function?",
            options: [
              "On both teams, the social worker drives care coordination day to day, with the nurse and physician assisting.",
              "On both teams, the physician takes the lead role, with the nurse serving a purely supportive documentation function.",
              "In hospice, the nurse drives care coordination, while on the hospital palliative team, the physician has more of the primary role.",
              "In hospice, the physician drives care coordination, while in hospital palliative care, the nurse is the formal team leader."
            ],
            answer: 2,
            rationale: "In hospice care, nurses (and nurse aides) spend the most time with patients and work fairly autonomously, so the team centers on the nurse; in hospital-based palliative care, the physician has more of a primary role on paper, even though the bedside nurse remains functionally part of the interdisciplinary team. This is the reverse of the pattern described in the last option.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A patient who just received a terminal diagnosis says to the nurse, \"You have no idea what this is like.\" The nurse previously cared for a family member who died of a similar illness. Using the NURSE framework for responding to emotion, what is the nurse's best response?",
            options: [
              "\"I can't imagine what this is like — can you tell me more about what you're feeling?\"",
              "\"Actually, I do understand — I went through something very similar with my own family member.\"",
              "\"Try not to focus on that right now; let's talk about your treatment options instead.\"",
              "\"You shouldn't feel that way — plenty of people get through a diagnosis like this one.\""
            ],
            answer: 0,
            rationale: "The NURSE framework explicitly warns against saying \"I totally understand,\" even when the nurse has had a similar experience, because it can feel invalidating. The correct response combines an \"Understand\" statement with \"Explore\" without claiming personal understanding, while the other options try to fix or dismiss the emotion instead of accepting it.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A hospice patient's daughter tells the nurse, \"I don't want to give my mother her morphine dose — last time we increased it for my grandfather, he died within hours. I think it killed him.\" Which response by the nurse is most accurate?",
            options: [
              "\"You're right to be cautious — opioid dose increases at the end of life are strongly associated with hastened death.\"",
              "\"Respiratory depression from morphine appears well before any drowsiness or confusion, so we watch her breathing closely.\"",
              "\"We can switch to a non-opioid medication so you don't have to worry about the morphine shortening her life.\"",
              "\"When morphine is dosed according to accepted guidelines, there's no difference in survival with the dose or with dose changes.\""
            ],
            answer: 3,
            rationale: "There is no difference in survival with opioid dose or dose changes when accepted dosing guidelines are followed, and toxicity such as drowsiness or confusion appears well before any significant respiratory depression — directly refuting the common \"morphine hastens death\" myth. The other options either reinforce the myth, reverse the actual order of toxicity versus respiratory depression, or dodge correcting the misconception.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A hospice patient in the final hours of life develops loud, gurgling respirations from secretions pooling in the throat. The patient's spouse is distressed and asks the nurse to \"suction it out so she can breathe better.\" What is the nurse's best action?",
            options: [
              "Perform deep suctioning with a Yankauer catheter every 15 minutes until the gurgling sound resolves.",
              "Explain that the sound is usually not distressing to the patient, and offer position changes and ordered medications instead.",
              "Explain that the sound indicates the patient is choking and needs immediate deep suctioning to prevent aspiration.",
              "Tell the spouse that nothing can be done and the secretions must be allowed to accumulate untreated."
            ],
            answer: 1,
            rationale: "The death rattle results from secretions pooling once muscle control is lost and is generally not distressing to the patient despite being disturbing to hear; aggressive deep suctioning is often more uncomfortable for the patient than leaving it, though repositioning and medications can help manage it — ruling out both aggressive suctioning and doing nothing at all.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A hospice nurse is assessing a patient thought to be in the late (hours) stage of the syndrome of imminent dying. Which assessment findings are consistent with this stage? (Select all that apply.)",
            options: [
              "Death rattle from secretions pooling at the base of the throat",
              "Mottled, purplish discoloration of the toes and feet",
              "Fever, often related to aspiration pneumonia",
              "Coma with continued breathing",
              "Obtundation with only brief periods of wakefulness, slow to arouse",
              "Increased daytime sleeping with reversal of the sleep-wake cycle"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Death rattle, mottled extremities, fever (often from aspiration pneumonia), and coma with continued breathing are hallmark late-stage (hours) findings. Obtundation with brief wakefulness is a middle-stage finding, and increased sleeping with day/night reversal is an early-stage finding — both real findings, but from the wrong phase of the syndrome.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          }
        ],
        extraPractice: [
          {
            stem: "An RN holds a license issued by a state that participates in the nursing licensure compact and accepts a new position in another compact-participating state. According to compact licensure rules, what must the nurse do before starting work in the new state?",
            options: [
              "Apply for a temporary compact permit valid for the first 90 days of employment.",
              "Retake the NCLEX in the new state to validate current licensure and competency.",
              "Nothing further is required, since the compact license permits practice in the new state.",
              "Submit proof of continuing education credits to the new state's board of nursing."
            ],
            answer: 2,
            rationale: "Compact licensure allows a nurse licensed in one participating state to practice in another participating state without retesting or additional paperwork. Since both states here participate, no extra license, temporary permit, or new exam is required.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A hospital unit installs a new firewall on its electronic health record system and begins locking the medication room's paper chart cabinet at all times. These actions are best described as fulfilling which HIPAA component?",
            options: [
              "The Security Rule, which requires practical safeguards that keep health information inaccessible to the public.",
              "The Privacy Rule, which makes the hospital responsible for keeping personal health records private in all circumstances.",
              "The Breach Notification requirement, which mandates protective measures after a breach has already occurred.",
              "The Safety/Research Use provision, which protects identifiable PHI used in quality-improvement studies."
            ],
            answer: 0,
            rationale: "Firewalls and locked storage are examples of the Security Rule's practical safeguards that keep health information inaccessible to the public. The Privacy Rule is the broader principle that records must be kept private; Breach Notification and the Safety/Research provision apply to different situations — a breach that has already occurred, or PHI used specifically in research/quality improvement.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A hospital discovers that an unauthorized employee accessed 40 patients' electronic health records without a care-related reason over several months. Per HIPAA, what is the hospital required to do?",
            options: [
              "Report the breach only if the employee involved is not terminated.",
              "Report the breach to the state board of nursing rather than to the patients.",
              "Withhold notification until an investigation determines whether patients were harmed.",
              "Notify the affected patients that a breach of their information occurred."
            ],
            answer: 3,
            rationale: "Under HIPAA's Breach Notification requirement, the hospital must notify the affected patients when a breach of their information occurs — this obligation isn't contingent on disciplinary outcomes for the employee or limited to reporting to a licensing board.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A newly admitted patient asks the nurse why they were handed a packet of information about advance directives and the right to refuse treatment during the admission process. Which explanation by the nurse best reflects the purpose of the Patient Self-Determination Act?",
            options: [
              "It is optional information hospitals provide only when a patient asks about their rights.",
              "Hospitals must give every patient written information about their right to make care decisions.",
              "It is required only for patients over 65 or those admitted with a terminal diagnosis.",
              "It documents that the patient completed a living will prior to admission to the facility."
            ],
            answer: 1,
            rationale: "The Patient Self-Determination Act requires healthcare institutions to give patients written information, at admission, about their right to make decisions about their care — including refusing treatment and creating an advance directive. This applies broadly, not only to older adults or terminal diagnoses, and it isn't optional or contingent on already having a living will.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A patient's chart includes a document specifying that if the patient is ever unable to eat or drink on their own at the end of life, they do not want a feeding tube placed. This level of detail is most characteristic of which document?",
            options: [
              "Informed consent form, since it must describe the specific risks and benefits of placing a feeding tube.",
              "Durable power of attorney for healthcare, since it names the person authorized to decide about tube placement.",
              "A living will, since it spells out end-of-life preferences such as whether the patient wants tube feeding.",
              "The Patient Self-Determination Act, since facilities must inform patients about feeding-tube options at admission."
            ],
            answer: 2,
            rationale: "A living will is the type of advance directive that goes into more detail about end-of-life preferences, specifically including whether the patient wants enteral (tube) feeding if they can no longer eat or drink independently — this level of detail goes beyond what a basic advance directive requires.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A patient is admitted after a severe traumatic brain injury and is unconscious and unable to communicate. The patient never completed an advance directive or living will prior to the injury. Who will make care decisions for this patient?",
            options: [
              "Decisions will fall to next-of-kin laws or whatever documentation already exists, since the patient lost capacity before completing a directive.",
              "The attending physician will make all decisions unilaterally, without input from family, until the patient regains capacity.",
              "The hospital ethics committee automatically assumes full decision-making authority whenever no advance directive exists in the chart.",
              "No treatment of any kind can be provided until the patient regains full decisional capacity to consent personally."
            ],
            answer: 0,
            rationale: "A patient must have decision-making capacity to create an advance directive or living will. When capacity is lost before one is completed, it's too late — decisions fall to next-of-kin laws or whatever documentation already exists, not to a single provider or committee acting unilaterally, and treatment is not simply withheld.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is reviewing several federal laws that affect healthcare practice. Which of the following statements are accurate? Select all that apply.",
            options: [
              "The ADA can affect where a patient with a disability receives care and what kind of care is given.",
              "The Mental Health Parity and Addiction Equity Act requires insurers to provide unlimited mental health coverage.",
              "OBRA governs the legal use of physical and chemical restraints for older adults in nursing homes.",
              "Public health laws like vaccine mandates aim to improve individual, population, and community health.",
              "The Uniform Determination of Death Act limits legal determination of death to brain-death criteria.",
              "The ADA primarily affects how hospitals handle insurance billing and reimbursement procedures."
            ],
            answers: [0, 2, 3],
            rationale: "The ADA affects where and what kind of care a patient with a disability receives, OBRA governs restraint use particularly for older adults in nursing homes, and public health laws like vaccine mandates aim to improve population health. The Mental Health Parity Act only requires \"at least some\" coverage (not unlimited), the Uniform Determination of Death Act is not limited to brain-death criteria, and the ADA concerns disability rights, not billing.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A new nurse notices that their strong belief in the importance of family involvement in end-of-life decisions strongly shapes how they counsel patients, and traces this belief back to how they were raised as a child. This belief is best described as which of the following?",
            options: [
              "An ethical dilemma, since it involves two opposing courses of action that are both ethically justified.",
              "Moral distress, since the nurse feels compelled to act in a way that may conflict with the patient's wishes.",
              "Values clarification, since the nurse is separating personal beliefs from the objective facts of the case.",
              "A value — a deeply held personal belief that shapes a person's choices, attitudes, and behavior."
            ],
            answer: 3,
            rationale: "A value is a deeply held personal belief about the worth of an idea, attitude, or behavior that shapes a person's choices, and it typically forms during childhood and early adulthood before becoming individualized — exactly what's described here. This scenario doesn't involve two conflicting justified actions, a compelled action against one's belief, or an active resolution process.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A nurse who personally holds strong religious objections to elective pregnancy termination is assigned to provide post-procedure care for a patient who chose to end a pregnancy for medical reasons. Before entering the room, the nurse deliberately works to separate personal beliefs from the objective facts of the case, from a coworker's critical comments about the patient, and from what the patient is actually requesting for her care. This process is best described as which of the following?",
            options: [
              "Informed consent, since it involves the patient's right to make decisions about her own body.",
              "Values clarification, which separates one's own values from the facts, others' opinions, and the request.",
              "The Patient Self-Determination Act, since it establishes the right to refuse or choose treatment.",
              "An ethical dilemma, since the facts support two opposing courses of action that are both justified."
            ],
            answer: 1,
            rationale: "Values clarification is the process of resolving an ethical dilemma by distinguishing one's own values from the facts of the situation, others' opinions, and what is actually being asked — exactly what the nurse is doing before entering the room. This differs from moral distress (already feeling compelled to act against one's belief) and from an ethical dilemma itself, which is the conflict rather than the process of resolving it.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "While riding in a hospital elevator, a nurse overhears two colleagues discussing a patient's diagnosis by name where other passengers can hear. Which pillar of the professional nursing code of ethics is most directly at risk of being violated?",
            options: [
              "Confidentiality — keeping what is learned as a nurse private.",
              "Accountability — owning one's own actions as a nurse.",
              "Advocacy — advocating for the nursing profession and patients.",
              "Responsibility — practicing responsibly as a nurse."
            ],
            answer: 0,
            rationale: "Confidentiality — keeping what is learned as a nurse private — is the pillar most directly at risk when patient information is discussed where others can overhear. Accountability, advocacy, and responsibility are other pillars of the code of ethics but don't specifically address protecting private patient information.",
            topic: "Legal & Ethical Issues",
            source: "quiz-bank"
          },
          {
            stem: "A newly admitted patient's nurse begins the Assessment step of the nursing process. Which source of information should the nurse consult first to get the most complete initial picture, before moving on to other chart documents and diagnostics?",
            options: [
              "The History and Physical (H&P), as it's typically the best place to start.",
              "The most recent nursing shift note, since it reflects the patient's current status.",
              "The medication administration record, since it shows what has already been given.",
              "The most recent lab values, since abnormal labs typically drive the nursing diagnosis."
            ],
            answer: 0,
            rationale: "The H&P is described as usually the best place to start when gathering comprehensive assessment data, before layering in other chart documents and labs. The other sources are useful but are not the recommended starting point.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "At the end of a shift, the nurse compares the patient's actual bowel movement to the goal and outcome criteria that were set. Which set of terms correctly describes the possible results of this Evaluation step?",
            options: [
              "Achieved, deferred, or discontinued.",
              "Met, partially met, or not met.",
              "Resolved, unresolved, or reassessed.",
              "Confirmed, pending, or ruled out."
            ],
            answer: 1,
            rationale: "Evaluation asks whether the goal and outcome criteria were met, partially met, or not met — this is the standard terminology for both the nursing process's Evaluation step and the CJM's Evaluate Outcomes step. The other terms are plausible-sounding but not the framework used.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nurse completes all ordered treatments, monitors vital signs, and collaborates with physical therapy for a postoperative patient, but never asks how the patient is coping emotionally with a new diagnosis. Which component of the Implementation step has the nurse overlooked?",
            options: [
              "Performing the ordered dependent interventions.",
              "Collaborating with the interdisciplinary care team.",
              "Addressing the patient's psychosocial needs.",
              "Reassessing and monitoring the patient's response."
            ],
            answer: 2,
            rationale: "Implementation explicitly includes addressing psychosocial needs, which is flagged as easy to overlook despite being critical — exactly what happened here. The nurse already performed the other three components (dependent interventions, collaboration, monitoring), so those aren't what was missed.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "For a patient with the nursing problem of constipation and the goal 'patient will have a bowel movement by the end of the shift,' which pair of statements represents appropriate outcome criteria for that goal?",
            options: [
              "'Patient understands the causes of constipation' and 'patient verbalizes a bowel regimen.'",
              "'Patient ambulates in the hallway twice' and 'patient tolerates a regular diet.'",
              "'Patient's pain is well controlled' and 'patient is free of nausea.'",
              "'Soft, non-tender abdomen' and 'a moderate-sized, soft, formed stool.'"
            ],
            answer: 3,
            rationale: "A soft, non-tender abdomen with no signs of constipation, plus a moderate-sized, soft, formed stool, are the exact outcome criteria that pair with the constipation goal — outcome criteria are the specific, measurable signs that confirm the goal was achieved. The other pairs describe unrelated interventions or comfort measures, not the criteria for this particular goal.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "While giving an SBAR report, the nurse asks the provider, 'Would you like me to order a stat CT scan, or would you prefer to come evaluate him first?' and the provider asks several clarifying questions in return. What does this exchange represent?",
            options: [
              "Normal, expected back-and-forth for the Recommendation section of SBAR.",
              "A sign the nurse's Situation statement was unclear and needs to be restated.",
              "A breach of SBAR structure that should be redirected to a yes/no request.",
              "An indication the call should have waited until rounds instead."
            ],
            answer: 0,
            rationale: "The Recommendation section is specifically the part of SBAR where more back-and-forth with the provider is normal, since it involves negotiating exactly what should happen. This exchange doesn't signal a problem with the Situation or mean the call was poorly timed.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student calling a provider begins with: 'This is Mary, a nursing student from 5 North, calling about Joe Brown in room 531, admitted two days ago for a total knee replacement — I'm calling because he has sudden shortness of air and severe chest pain.' Which SBAR component is this, and what makes it effective?",
            options: [
              "Background — it establishes the patient's relevant surgical history before describing findings.",
              "Situation — it identifies the caller, the patient, and the symptoms prompting the call.",
              "Assessment — it offers the caller's working impression of what is happening.",
              "Recommendation — it states specifically what action the caller wants taken."
            ],
            answer: 1,
            rationale: "This opening is the Situation component — it's brief and specific, naming the caller, the patient's location, and only the symptoms that triggered the call. It doesn't yet include current data (Background), a working impression (Assessment), or a requested action (Recommendation).",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "During hand-off, a nurse notices a patient's skin is unusually pale and cool to the touch but isn't yet sure what it means. In Clinical Judgment Model terms, what has the nurse just done?",
            options: [
              "Analyzed a cue, by linking the finding to a specific clinical problem.",
              "Prioritized a hypothesis, by ranking the finding against other findings.",
              "Recognized a cue, by noticing a finding that points toward a possible problem.",
              "Generated a solution, by identifying what resources the finding will require."
            ],
            answer: 2,
            rationale: "A cue is anything observed or noticed that points toward a possible problem; simply noticing the pale, cool skin without yet interpreting its meaning is Recognizing Cues. Interpreting what it means (Analyzing) or ranking it against other findings (Prioritizing) hasn't happened yet.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "After deciding that a patient's respiratory distress is the priority problem, the nurse next identifies that supplemental oxygen equipment and a respiratory therapy consult will be needed, and sets a goal for the patient's oxygen saturation. Which CJM step does this represent?",
            options: [
              "Analyzing cues.",
              "Prioritizing hypotheses.",
              "Taking action.",
              "Generating solutions."
            ],
            answer: 3,
            rationale: "Generating Solutions is the CJM step where the nurse sets goals/outcomes and identifies what resources, collaboration, or equipment are needed — exactly what's described here. Prioritizing already happened (the priority was already decided), and Taking Action would mean actually implementing, not planning what's needed.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nurse notices a patient's blood pressure is slightly below their baseline, but the patient is asymptomatic and stable. Before doing anything else, what is the primary purpose of the first step in preparing an SBAR call?",
            options: [
              "To gather every piece of the patient's history in case the provider asks.",
              "To decide which SBAR component to skip based on time constraints.",
              "To decide whether the problem is urgent enough to call now or can wait.",
              "To determine which nurse on the unit should make the call."
            ],
            answer: 2,
            rationale: "The first SBAR preparation step is identifying the problem and its urgency — deciding whether it's important enough to call right now or can wait until rounds — and this decision shapes what information gets gathered next. Gathering 'everything' or skipping sections isn't the goal of this step.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "The nurse is implementing the care plan for a patient with constipation whose goal is to have a bowel movement by the end of the shift. Which of the following actions are appropriate parts of the Implementation step? (Select all that apply.)",
            options: [
              "Administering an ordered stool softener (a dependent intervention)",
              "Encouraging the patient to ambulate in the hallway (an independent intervention)",
              "Asking the patient how they are coping emotionally with the hospital stay",
              "Comparing the patient's stool to the outcome criteria to see if the goal was met",
              "Writing the SMART goal statement for the constipation care plan",
              "Continuing to monitor the patient's bowel sounds and abdominal status"
            ],
            answers: [0, 1, 2, 5],
            rationale: "Implementation includes performing dependent and independent interventions, addressing psychosocial needs, and ongoing assessing/monitoring. Comparing results to outcome criteria belongs to Evaluation, and writing the goal itself belongs to Planning — both happen before or after Implementation, not during it.",
            topic: "Nursing Process, Clinical Judgment & SBAR",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is reviewing the health history of a patient with a BMI of 34 and identifying obesity-related health risks that require ongoing monitoring. Which findings should the nurse recognize as risks associated with obesity? Select all that apply.",
            options: [
              "Increased risk for type 2 diabetes mellitus",
              "Increased risk for obstructive sleep apnea and pulmonary hypertension",
              "Increased risk for gallstones and GERD",
              "Decreased risk for depression and suicide",
              "Increased risk for several cancers",
              "Decreased cardiovascular risk factors overall"
            ],
            answers: [0, 1, 2, 4],
            rationale: "Obesity increases risk for type 2 diabetes, sleep apnea and pulmonary hypertension, GI issues like gallstones and GERD, and several cancers. It is associated with a higher — not lower — risk of depression and suicide, and with significant cardiovascular risk factors, not fewer of them.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A nurse assesses two patients being evaluated for significant weight gain. Patient 1 reports consistently eating more calories than she expends, with no other medical explanation. Patient 2 has newly diagnosed hypothyroidism and reports weight gain despite no notable change in diet. How should the nurse classify these presentations?",
            options: [
              "Both patients have primary obesity, since intake exceeds expenditure in each case.",
              "Patient 1 has secondary obesity, and Patient 2 has primary obesity.",
              "Patient 1 has primary obesity, and Patient 2 has secondary obesity.",
              "Both patients have secondary obesity, since each has a diagnosed medical cause."
            ],
            answer: 2,
            rationale: "Primary obesity results from excessive caloric intake relative to energy expenditure, as with Patient 1. Secondary obesity is related to a cause outside of intake/output, such as a hormonal imbalance like hypothyroidism, as with Patient 2.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student states, \"Fat tissue is just inactive storage — it doesn't really do anything else in the body.\" How should the nurse best correct this statement?",
            options: [
              "\"Actually, adipocytes produce over 100 proteins that affect appetite and contribute to insulin resistance.\"",
              "\"Actually, fat tissue is inactive, but it directly damages joints through its physical weight.\"",
              "\"You're right — adipose tissue is inert storage with no hormonal or metabolic activity.\"",
              "\"Actually, fat tissue only affects appetite and has no effect on blood pressure or lipids.\""
            ],
            answer: 0,
            rationale: "Adipocytes are metabolically active and produce more than 100 different proteins that influence appetite and contribute to insulin resistance, hyperlipidemia, and hypertension — they are not inert storage tissue.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient reports sleeping only 4–5 hours a night and states, \"I've been so much hungrier lately, especially at night.\" Which explanation best reflects the relationship between sleep and appetite regulation?",
            options: [
              "Inadequate sleep increases leptin and decreases ghrelin, which suppresses hunger during the day.",
              "Inadequate sleep improves glucose tolerance and insulin sensitivity, which paradoxically increases appetite.",
              "Inadequate sleep decreases evening cortisol, which is the primary driver of increased nighttime hunger.",
              "Inadequate sleep increases evening cortisol and ghrelin while decreasing leptin, which increases hunger."
            ],
            answer: 3,
            rationale: "Inadequate sleep decreases glucose tolerance and insulin sensitivity, increases evening cortisol and ghrelin, and decreases leptin — this combination increases hunger and appetite. The other options reverse the actual direction of these hormonal and metabolic changes.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A community health nurse is planning an obesity-prevention outreach program and reviewing epidemiologic data on childhood obesity. Which statement should guide the nurse's understanding of priority timing for intervention?",
            options: [
              "Childhood obesity rates are highest among teenagers age 15–18, so outreach should target high schools.",
              "About 1 in 5 children are already obese by ages 2–5, so outreach should begin in early childhood.",
              "Childhood obesity has little relationship to adult obesity, so early intervention has limited value.",
              "Childhood obesity primarily resolves on its own by adolescence, so outreach can wait."
            ],
            answer: 1,
            rationale: "About 1 in 5 children are obese as early as ages 2–5, and children who are obese are much more likely to become obese adults — this supports prioritizing early, preschool-age outreach rather than waiting until adolescence.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "During an obesity assessment, a nurse identifies that a patient has a strong genetic predisposition to obesity and lives in a lower-income neighborhood with limited access to affordable healthy food. How should the nurse best incorporate this information into patient education?",
            options: [
              "Focus education on overcoming genetic predisposition, since genetics is the strongest contributor.",
              "Avoid discussing weight at all, since genetics and socioeconomic status cannot be changed.",
              "Acknowledge these factors cannot be directly targeted, and focus education on modifiable lifestyle habits.",
              "Recommend the patient relocate to a higher-income area before beginning weight-related counseling."
            ],
            answer: 2,
            rationale: "Genetics and many environmental or socioeconomic factors can't be directly targeted; the nurse should acknowledge this and focus education on what the patient can realistically change, rather than ignoring the topic or focusing on unchangeable factors.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient tells the nurse she wants to lose weight so she can \"still be able to get down on the floor and play with my grandkids.\" Which nursing response best reflects therapeutic communication principles for this situation?",
            options: [
              "\"Tell me more about that — connecting your goals to what matters most to you can help guide your plan.\"",
              "\"Let's focus on your BMI number instead, since that's the most clinically relevant measure of progress.\"",
              "\"That's a nice thought, but let's talk about your goal BMI so we can set a more realistic target.\"",
              "\"I'll note that, but your cholesterol and blood pressure numbers are really what we should prioritize discussing today.\""
            ],
            answer: 0,
            rationale: "Exploring a patient's personal motivation for weight loss builds connection and shows care beyond just clinical numbers. Redirecting immediately to BMI or lab values instead of the patient's stated motivation misses this therapeutic opportunity.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient describes the eating plan they intend to follow after teaching from the nurse. Which statement indicates the patient needs further teaching?",
            options: [
              "\"I'll plan to weigh myself about once a week instead of every day.\"",
              "\"I'm going to try baking or broiling instead of frying most of my meals.\"",
              "\"I'm aiming for around 5 servings of fruits and vegetables a day.\"",
              "\"I found a strict gluten-free program online that promises fast results.\""
            ],
            answer: 3,
            rationale: "Fad or restrictive diets marketed for fast results — including gluten-free, keto, or vegan/vegetarian used this way — should not be encouraged, since they are hard to maintain and often rebound; the key is decreasing caloric intake relative to expenditure. Weekly weigh-ins, cooking-method changes, and 5 servings of produce a day are all appropriate teaching points.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient admits to mindlessly snacking every night while watching television, regardless of hunger. The nurse suggests the patient try snacking only at the kitchen table and turning off the TV during meals. This intervention is an example of which behavior modification strategy?",
            options: [
              "Self-monitoring",
              "Stimulus control",
              "Formal counseling referral",
              "Drug therapy adjunct"
            ],
            answer: 1,
            rationale: "Stimulus control involves changing where or how a behavior like snacking happens. This is distinct from self-monitoring, which involves tracking intake such as with a food diary, and from counseling or drug therapy.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient asks the nurse about joining a for-profit commercial weight-loss center advertised on TV. What is the nurse's most appropriate response?",
            options: [
              "\"Community and for-profit support groups are never appropriate resources for weight management.\"",
              "\"You should avoid all support groups, since only medication and surgery have proven benefit.\"",
              "\"Support groups can help, but I'd be cautious with for-profit centers — check your insurance.\"",
              "\"Any support group is equally effective, so cost and structure don't matter when choosing one.\""
            ],
            answer: 2,
            rationale: "Support groups can help patients with weight management, but nurses should be cautious about recommending for-profit commercial weight-loss centers specifically; some insurers or employers offer benefits for such programs, which is worth exploring with the patient.",
            topic: "Obesity & Metabolic Syndrome",
            source: "quiz-bank"
          },
          {
            stem: "A patient has a normal respiratory rate and adequate movement of air into and out of the lungs, but arterial blood work reveals poor oxygen exchange at the alveolar-capillary level despite that adequate air movement. This patient's primary problem is best described as impaired:",
            options: [
              "Ventilation",
              "Diffusion",
              "Perfusion",
              "Compliance"
            ],
            answer: 1,
            rationale: "Diffusion is the O2/CO2 exchange between the alveoli and red blood cells — the problem described here, since air movement (ventilation) is already adequate. Perfusion refers to distributing oxygenated blood to tissues once it has already picked up oxygen, and compliance refers to how easily the lungs expand, neither of which matches this scenario.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A student nurse is teaching a patient about lung function. Which statement correctly describes tidal volume?",
            options: [
              "\"Tidal volume is the amount of air you exhale after a normal breath in, and it varies with your health status.\"",
              "\"Tidal volume is determined mainly by your age, gender, and height, similar to your total lung capacity.\"",
              "\"Tidal volume is the total amount of air your lungs can hold after a maximal inhalation.\"",
              "\"Tidal volume increases permanently once you develop an obstructive or restrictive lung disease.\""
            ],
            answer: 0,
            rationale: "Tidal volume is the amount of air exhaled following a normal inspiration, and it is influenced by health status, activity, pregnancy, exercise, obesity, and obstructive/restrictive lung disease. Age, gender, and height determine overall lung volumes, not tidal volume specifically, and \"total air after maximal inhalation\" describes a different lung measurement, not tidal volume.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "On auscultation, a nurse hears loud, low-pitched rumbling sounds throughout a patient's lung fields. The patient is alert and has a strong, effective cough. What should the nurse do first?",
            options: [
              "Notify the provider immediately, as rhonchi signals airway obstruction",
              "Suction the patient now, since suctioning clears secretions better than a cough",
              "Have the patient cough forcefully, then reassess the lung sounds",
              "Document the lung sounds as wheezing secondary to bronchospasm"
            ],
            answer: 2,
            rationale: "Rhonchi is loud, low-pitched rumbling from fluid or mucus in the airway and often resolves with coughing, so the nurse should have the patient cough and reassess. Coughing, not suctioning, is described as the most effective way to clear secretions when the patient can do it effectively, and this sound is rhonchi, not the high-pitched whistling of wheezes.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A provider suspects a patient has tuberculosis and orders sputum studies. Which instruction should the nurse give regarding collection?",
            options: [
              "\"We'll need a single sputum sample any time of day in a clean container.\"",
              "\"This test requires collecting sputum for 24 continuous hours in one pooled container.\"",
              "\"You'll need a bronchoscopy to obtain this sample since sputum can't confirm TB.\"",
              "\"We'll need morning sputum samples on three consecutive days, in a sterile container.\""
            ],
            answer: 3,
            rationale: "AFB (acid-fast bacillus) testing for TB requires collection on 3 consecutive days, ideally first thing in the morning when secretions have pooled overnight, in a sterile container. A single specimen isn't sufficient, sputum isn't pooled over 24 continuous hours, and bronchoscopy is a separate diagnostic test, not a requirement for routine sputum/AFB collection.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient has a right lower lobe infiltrate, and the provider orders postural drainage to help mobilize secretions. How should the nurse position the patient?",
            options: [
              "On the right side, in reverse Trendelenburg, to help gravity pull secretions upward out of the affected lobe",
              "On the left side, in Trendelenburg, so gravity drains secretions from the affected lobe",
              "Supine and flat, to evenly distribute secretions throughout the airway",
              "In high Fowler's position, to reduce work of breathing while draining secretions"
            ],
            answer: 1,
            rationale: "The postural drainage principle is to position the patient on the unaffected side to promote drainage of a specific lobe — for a right lower lobe infiltrate, that means the left side, in Trendelenburg. Positioning on the affected (right) side works against gravity drainage, and a flat or upright position doesn't apply the gravity-drainage principle at all.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient with long-standing chronic obstructive lung disease is being assessed for physical changes associated with chronic hypoxia. Which findings should the nurse expect on assessment? Select all that apply.",
            options: [
              "Clubbing of the fingers",
              "Sluggish capillary refill",
              "An anteroposterior-to-transverse chest ratio approaching 1:2",
              "Cyanotic nail beds",
              "An anteroposterior-to-transverse chest ratio approaching 1:1 (barrel chest)",
              "Bounding peripheral pulses"
            ],
            answers: [0, 1, 3, 4],
            rationale: "Chronic hypoxia (as in COPD) produces visible changes over time: cyanotic nail beds, sluggish capillary refill, clubbing of the fingers, and barrel chest, where the normal anteroposterior-to-transverse ratio of about 1:2 shifts toward 1:1. A ratio still near the normal 1:2 and bounding pulses are not chronic hypoxia findings described here.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A nurse caring for several patients on oxygen therapy considers delegating tasks to an unlicensed assistive personnel (UAP). Which task is appropriate to delegate?",
            options: [
              "Applying the nasal cannula at the flow rate specified in the order",
              "Assessing whether the current oxygen device is still appropriate for the patient",
              "Evaluating whether the patient's oxygenation has improved since starting therapy",
              "Teaching the patient's family how to safely use oxygen at home"
            ],
            answer: 0,
            rationale: "Application of oxygen therapy can be delegated to a nursing assistant, but assessment, evaluation, and teaching cannot be delegated and remain the nurse's responsibility. Deciding whether a device is still appropriate, judging whether oxygenation has improved, and patient/family teaching all require nursing judgment.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient has been orally intubated and mechanically ventilated for 9 days with no clear plan for extubation in the near future. What is the most likely reason the care team would now consider converting to a tracheostomy?",
            options: [
              "An ET tube can only safely remain in place for 24 hours before a tracheostomy is required",
              "Endotracheal tubes cannot be used to deliver mechanical ventilation beyond the first few days",
              "Prolonged intubation increases the risk of airway damage, and a tracheostomy is more comfortable",
              "A tracheostomy eliminates the patient's need for any further mechanical ventilation"
            ],
            answer: 2,
            rationale: "Prolonged intubation, roughly 7-10 days, increases the risk of airway damage; beyond that point, a tracheostomy is more comfortable for the patient and can help with weaning off the ventilator. An ET tube can safely remain in place well beyond 24 hours, it can deliver ventilation for days, and a patient can still be ventilated through a tracheostomy just as through an ET tube.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a long-term, permanent tracheostomy who will be managing their own trach care at home has a metal tube with a reusable inner cannula that is cleaned rather than replaced, and no cuff. Which type of tube does this describe?",
            options: [
              "A Shiley tube, a disposable plastic tube used in the hospital",
              "A cuffed tracheostomy tube used for mechanical ventilation",
              "An endotracheal tube, used for short-term airway management",
              "A Jackson tube, typically used for longer-term tracheostomies"
            ],
            answer: 3,
            rationale: "The Jackson tube is metal with a reusable, cleaned (not replaced) inner cannula, has no cuff, and is used for longer-term or permanent tracheostomies, matching this patient. The Shiley is plastic, disposable, and cuffed, and is more common in the hospital short-term; an ET tube goes through the mouth, not a stoma; and this tube has no cuff, ruling out a cuffed device.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A patient is receiving oxygen via nasal cannula at 5 L/min for an anticipated several-day hospital stay. Which action should the nurse plan to include in this patient's care?",
            options: [
              "No humidification is needed, since nasal cannula oxygen is always well tolerated without it",
              "Add humidification only if the patient later reports nasal or mucous membrane dryness",
              "Add humidification, since the flow rate exceeds 4 L/min and therapy is expected to continue past 24 hours",
              "Switch the patient to a Venturi mask, which is the only device requiring humidification"
            ],
            answer: 2,
            rationale: "Humidification is used any time supplemental oxygen exceeds 4 L/min or runs longer than 24 hours, to prevent drying of the mucous membranes — this patient meets both criteria. Waiting for symptoms to appear is reactive rather than planned care, humidification isn't unnecessary at this flow rate, and the need for it isn't specific to any one device type.",
            topic: "Oxygenation & Tracheostomy",
            source: "quiz-bank"
          },
          {
            stem: "A client develops a rapid dysrhythmia with a heart rate of 160 beats/min. Despite the fast rate, the client's blood pressure drops and they become dizzy. Which explanation best fits this situation using the cardiac output relationship?",
            options: [
              "Cardiac output is unaffected by heart rate, so the drop in BP has an unrelated cause.",
              "At very fast rates, ventricular filling time shortens, so stroke volume and cardiac output fall.",
              "A faster heart rate always raises cardiac output proportionally, so CO must be normal here.",
              "Cardiac output equals heart rate divided by stroke volume, so the faster rate raised CO."
            ],
            answer: 1,
            rationale: "Since cardiac output equals stroke volume multiplied by heart rate, an extremely fast rate can shorten ventricular filling time enough to drop stroke volume, so CO actually falls, explaining the hypotension and dizziness. Option D reverses the CO formula, and the other options ignore that both stroke volume and heart rate determine CO.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A nurse palpates a client's radial pulse and notes that the strength of each beat alternates between strong and weak, while the rhythm and rate remain regular. What should the nurse recognize about this finding?",
            options: [
              "It is a benign variant commonly seen with anxiety and requires no further action.",
              "It suggests dehydration, and the nurse should encourage oral fluids.",
              "It is called pulsus alternans and can be a sign of left ventricular failure.",
              "It indicates a mechanical heart valve is functioning normally."
            ],
            answer: 2,
            rationale: "A pulse that alternates in strength/amplitude beat to beat is termed pulsus alternans, which can be a sign of left ventricular failure and warrants further cardiac assessment rather than reassurance. Clicks, not pulse strength changes, are associated with a mechanical valve.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A student nurse is reviewing the CPR sequence in preparation for clinical. Which order reflects the current recommended sequence?",
            options: [
              "Airway, Breathing, Compressions",
              "Breathing, Compressions, Airway",
              "Compressions, Airway, Breathing",
              "Airway, Compressions, Breathing"
            ],
            answer: 2,
            rationale: "The current recommended CPR sequence is C-A-B: Compressions first, then Airway, then Breathing — a change from the older Airway-first approach reflected in the other options.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is teaching a client about risk factors for hypertension. Which factor should the nurse identify as non-modifiable?",
            options: [
              "Consuming a high-sodium diet, since sodium directly raises blood volume.",
              "Race/ethnicity, since African Americans have a higher incidence and greater severity.",
              "Chronic psychological stress, since stress hormones raise blood pressure acutely.",
              "Physical inactivity, since a sedentary lifestyle contributes to weight gain."
            ],
            answer: 1,
            rationale: "Family history, age, and race/ethnicity — with African Americans having a higher incidence and often more severe hypertension — are non-modifiable risk factors. Sodium intake, stress, and inactivity are all modifiable risk factors the client can change.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A client recently diagnosed with hypertension asks the nurse for dietary guidance. Which meal choice best reflects the recommended dietary pattern the nurse should suggest?",
            options: [
              "A cured deli meat sandwich with a side of pickles",
              "A cheeseburger with french fries and a salted pretzel",
              "Canned vegetable soup with added salt for flavor",
              "Grilled chicken, a whole-grain roll, and steamed vegetables"
            ],
            answer: 3,
            rationale: "The DASH diet emphasizes whole grains, vegetables, fruits, low-fat dairy, and lean protein while limiting sodium and sweets — the grilled chicken, whole-grain roll, and vegetable meal fits this pattern. The other choices are all high in sodium or made from cured/processed ingredients that DASH specifically limits.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A client recovering from a urinary tract infection develops fever, confusion, and a blood pressure of 82/48 mmHg with a rapid, thready pulse. Which underlying cause should the nurse suspect as most likely responsible for this hypotension?",
            options: [
              "Prolonged bed rest deconditioning",
              "Sepsis progressing to septic shock",
              "A new antihypertensive medication",
              "Chronic dehydration from poor oral intake"
            ],
            answer: 1,
            rationale: "Severe infection/septic shock is a recognized cause of hypotension, and the combination of fever, confusion, and a rapid thready pulse in a client with a recent infection points to sepsis progressing to septic shock rather than deconditioning, a medication effect, or simple dehydration.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A client asks the nurse why their cholesterol remains high despite following a strict low-cholesterol diet for months. Which explanation should the nurse provide?",
            options: [
              "The liver also produces cholesterol, so diet alone may not control levels.",
              "All cholesterol in the body comes from dietary intake, not from the liver.",
              "Cholesterol levels are not affected by liver function in healthy adults.",
              "The client's diet must not actually be reducing cholesterol as reported."
            ],
            answer: 0,
            rationale: "Cholesterol is either exogenous (from diet) or endogenous (made by the liver) — because the liver also produces cholesterol, dietary changes alone may not normalize levels. Option B incorrectly claims all cholesterol is dietary in origin, ignoring endogenous production.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A client's fasting lipid panel returns: total cholesterol 210 mg/dL, LDL 92 mg/dL, HDL 55 mg/dL, triglycerides 130 mg/dL. Which single value should the nurse identify as outside the target range?",
            options: [
              "Total cholesterol, target below 200 mg/dL",
              "LDL cholesterol, target below 100 mg/dL",
              "HDL cholesterol, target above 40-60 mg/dL",
              "Triglycerides, target below 150 mg/dL"
            ],
            answer: 0,
            rationale: "Target total cholesterol is below 200 mg/dL, and 210 mg/dL exceeds that. The LDL (92), HDL (55), and triglyceride (130) values given are all within their respective target ranges.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A male client's CBC shows a hemoglobin of 13.2 g/dL and a hematocrit of 39%. How should the nurse interpret these results?",
            options: [
              "Both values are within normal limits for a male.",
              "The hemoglobin is normal, but the hematocrit is elevated for a male.",
              "The hemoglobin is low for a male, but the hematocrit is within normal range.",
              "Both values are below the normal range for a male and should be reported."
            ],
            answer: 3,
            rationale: "Normal hemoglobin for males is 14-18 g/dL and normal hematocrit is 42-52%; a hemoglobin of 13.2 and hematocrit of 39% both fall below the male reference ranges and warrant follow-up, not just one of the two values.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is performing a focused cardiovascular assessment. Which actions and findings are correct for this assessment? Select all that apply.",
            options: [
              "Assess peripheral pulses bilaterally and simultaneously, grading each 0-4+.",
              "Note that a decreased level of consciousness may reflect decreased cerebral perfusion.",
              "Assess for jugular venous distention with the head of the bed at a 90-degree angle.",
              "Recognize that peripheral edema implies impaired venous return.",
              "Use a continuous EKG snapshot lasting several hours to monitor the client's rhythm.",
              "Palpate and compare calf tenderness and circumference bilaterally."
            ],
            answers: [0, 1, 3, 5],
            rationale: "Pulses are assessed bilaterally and simultaneously and graded 0-4+, decreased LOC can reflect decreased cerebral perfusion, edema implies impaired venous return, and bilateral calf assessment is core cardiovascular assessment content. JVD is assessed at a 45-degree angle (not 90), and an EKG is a brief snapshot of about 5 minutes — continuous monitoring over hours is telemetry, not an EKG.",
            topic: "Cardiovascular",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is completing a risk assessment for type 2 diabetes on a 50-year-old patient. Which risk factor identified in the assessment is modifiable, meaning it is a priority target for the nurse's teaching plan?",
            options: [
              "A family history of type 2 diabetes in both parents",
              "Hispanic ethnicity",
              "Elevated blood pressure and high cholesterol",
              "A prior history of gestational diabetes"
            ],
            answer: 2,
            rationale: "Modifiable type 2 risk factors include physical inactivity, high body weight, high blood pressure, and high cholesterol, all targets for nursing teaching. Family history, age, race/ethnicity, and a prior history of gestational diabetes are non-modifiable and cannot be changed through intervention.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient with diabetes calls the clinic reporting a cold with a temperature of 100.8°F, nausea without vomiting, and a home glucose reading of 210 mg/dL. The patient is tolerating clear fluids and taking all scheduled medications. What should the nurse advise?",
            options: [
              "Continue sick-day management at home with the current medications, more frequent glucose checks, and extra fluids",
              "Go to the emergency department immediately, since any fever with nausea in a diabetic patient is an emergency",
              "Stop all diabetes medications until the fever and nausea resolve in order to avoid hypoglycemia",
              "Notify the provider immediately because the glucose reading of 210 mg/dL exceeds the emergency threshold"
            ],
            answer: 0,
            rationale: "This patient's fever is below 101.5°F, glucose is below the 250 mg/dL call-the-provider threshold, and fluids are being tolerated, so continued sick-day self-management (frequent glucose checks, continuing medications, hydration, rest) is appropriate. The provider should be called for fever over 101.5°F unresponsive to Tylenol, glucose over 250, ketones, confusion, or inability to tolerate liquids, none of which are present here.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient taking metformin for type 2 diabetes is scheduled for a contrast imaging procedure next week and is also admitted for an acute illness in the meantime. Which nursing consideration applies?",
            options: [
              "Metformin should be continued without interruption both before the procedure and during the acute illness",
              "Metformin should be held before the procedure, and oral agents are often replaced with insulin during acute illness",
              "Metformin dosing should be doubled during acute illness to compensate for stress-related hyperglycemia",
              "Metformin only needs to be held during the acute illness, not before the contrast procedure"
            ],
            answer: 1,
            rationale: "Metformin should be held before procedures, and in the hospital, oral diabetic agents are often held and replaced with insulin during acute illness because insulin allows tighter glucose control. Neither continuing metformin uninterrupted nor doubling the dose is supported.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient has been advanced from a clear liquid diet to a full liquid diet after abdominal surgery. Before advancing the patient further toward a regular diet, what should the nurse assess?",
            options: [
              "Whether the patient has completed at least 5-7 days on the full liquid diet as required",
              "Whether the patient's serum albumin level has returned to a normal value",
              "Whether the patient can tolerate solid food based on personal preference alone",
              "Whether the patient is tolerating the current diet without nausea, vomiting, or distension"
            ],
            answer: 3,
            rationale: "Diet advancement depends on the patient tolerating the current diet: absence of nausea/vomiting, present bowel sounds, and no abdominal distension. Advancing too early, before tolerance is confirmed, can make the patient sick; there is no fixed day-count or lab-value rule described for this decision.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient recovering from bowel surgery is ordered a clear liquid diet. Which item should the nurse remove from the tray as inappropriate for this diet order?",
            options: [
              "Apple juice without pulp",
              "Plain black coffee",
              "A cup of milk",
              "Lemon gelatin"
            ],
            answer: 2,
            rationale: "A clear liquid diet includes only liquids you can see through with no residue: broth, pulp-free juices, gelatin, and black coffee/tea qualify. Milk is a full liquid item (measurable in mL but not see-through), so it belongs on the full liquid diet, one step up from clear liquid.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for a patient with heart failure who has a 1500 mL/24-hour fluid restriction. How should the nurse best implement this order?",
            options: [
              "Distribute the allowed fluid volume across the entire 24-hour period rather than giving it all at once",
              "Withhold all fluids until the evening, then allow the patient to drink the full 1500 mL at dinner",
              "Apply the restriction only to water, since other beverages and IV fluids do not count toward the total",
              "Increase the restriction to 2500 mL/24 hours if the patient reports thirst, since patient comfort takes priority"
            ],
            answer: 0,
            rationale: "For a fluid-restricted patient, such as those with heart failure, renal failure, or hyponatremia who are retaining excess fluid, the nurse spreads the allowed volume across the full 24 hours rather than allowing it all at one time. The restriction is not limited to plain water only, and the ordered amount should not be increased simply based on the patient's request.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A patient who normally manages type 1 diabetes with an insulin pump is admitted to the hospital for an unrelated acute illness. What should the nurse expect regarding the patient's diabetes management during this inpatient stay?",
            options: [
              "The pump will continue to be used exactly as at home, with no change in monitoring",
              "The pump and any continuous glucose monitor are deactivated in favor of standard glucose checks",
              "The pump will be switched to deliver only long-acting basal insulin for the duration of the stay",
              "The patient will be transitioned to oral diabetic agents instead of insulin during the hospitalization"
            ],
            answer: 1,
            rationale: "Insulin pumps and CGMs are typically deactivated during acute inpatient care in favor of standard glucose monitoring and insulin administration, partly due to risks like insertion-site infection and increased DKA risk if the pump malfunctions. There is no indication the pump switches to basal-only delivery or that oral agents replace insulin in this scenario.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is teaching a female patient with diabetes about long-term cardiovascular risk compared to a male patient with a similar diabetes history. Which statement reflects the risk difference described in diabetes education?",
            options: [
              "Cardiovascular risk is essentially the same for men and women with a similar diabetes history",
              "Men with diabetes have 4-6 times the cardiovascular risk of the general population, versus 2-3 times for women",
              "Cardiovascular risk in women involves only microvascular complications, while men develop macrovascular disease",
              "Women with diabetes have 4-6 times the cardiovascular risk of the general population, versus 2-3 times for men"
            ],
            answer: 3,
            rationale: "Diabetes causes macrovascular damage including coronary artery disease, and women with diabetes carry 4-6 times the cardiovascular risk while men carry 2-3 times, meaning the relative risk increase is actually greater for women. This is distinct from microvascular complications (retinopathy, nephropathy, neuropathy), which affect small vessels rather than large ones.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A nurse admits a patient who is significantly overweight but has poor dietary intake, low muscle mass, and recent unintentional weight changes suggesting nutrient deficiency. Which statement about this patient's nutritional status is accurate?",
            options: [
              "This patient cannot be malnourished because malnutrition only applies to underweight patients",
              "This patient's weight alone rules out any nutritional risk or need for further assessment",
              "This patient may still be malnourished, since malnutrition includes both undernutrition and obesity",
              "This patient's malnutrition should be documented as a medical diagnosis rather than a nursing diagnosis"
            ],
            answer: 2,
            rationale: "Malnutrition can mean either undernourished or overweight/obese, both count, and malnourished patients on admission face greater risk of complications, higher readmission, and higher mortality. The appropriate nursing diagnosis is imbalanced nutrition, less than body requirements (or similar), rather than using a medical diagnosis as the nursing problem.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is administering three separate scheduled medications through a patient's established feeding tube. Which actions are appropriate? Select all that apply.",
            options: [
              "Verify tube placement before giving any medication",
              "Flush the tube with water before giving each medication",
              "Flush the tube with water after giving each medication",
              "Give the medications one at a time rather than combined",
              "Crush and mix all three medications together in one syringe to save time",
              "Confirm placement using the air-insufflation \"whoosh\" method before each dose"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Medication administration via feeding tube requires verifying placement, flushing with water before and after each medication, and giving medications one at a time, since crushing or mixing multiple medications together can change their chemistry. The 'whoosh test' is outdated and unreliable and should not be used to confirm placement.",
            topic: "Diabetic Care & Nutrition",
            source: "quiz-bank"
          },
          {
            stem: "A 68-year-old woman reports that she leaks small amounts of urine whenever she laughs, coughs, or lifts her grandchild, but does not experience leakage at other times. Which type of urinary incontinence does this describe?",
            options: [
              "Urge incontinence",
              "Overflow incontinence",
              "Functional incontinence",
              "Stress incontinence"
            ],
            answer: 3,
            rationale: "Stress incontinence involves leakage triggered by increased intra-abdominal pressure from activities like coughing, laughing, or lifting, often related to weakened pelvic floor muscles. Urge incontinence involves a sudden, hard-to-control urge with little warning, and overflow incontinence involves dribbling from poor bladder emptying rather than effort-related leakage.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse needs to obtain a urine specimen from a patient with an indwelling catheter for a urinalysis. What is the correct technique?",
            options: [
              "Disconnect the catheter from the tubing and collect urine as it drains",
              "Aspirate urine directly from the drainage bag using a sterile syringe",
              "Empty the drainage bag and pour a specimen into a sterile container",
              "Clamp the tubing briefly, then withdraw urine from the specimen port"
            ],
            answer: 3,
            rationale: "A fresh catheter specimen is obtained by briefly clamping the tubing near the insertion/specimen site so fresh urine collects, then withdrawing the sample from the port. Urine should never be taken from the drainage bag because it is not fresh, and disconnecting the catheter or emptying the whole bag are incorrect techniques.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for a female patient using a PureWick external catheter system to reduce infection risk compared to an indwelling catheter. Which nursing action is still necessary?",
            options: [
              "Restrict the patient's oral fluid intake to reduce output",
              "Perform hourly checks to confirm the patient is actually staying dry",
              "Replace the device with an indwelling catheter after 24 hours",
              "Discontinue perineal hygiene checks since the device manages moisture"
            ],
            answer: 1,
            rationale: "External devices like PureWick and condom catheters lower infection risk compared with indwelling catheters but are not foolproof, so patients still need hourly checks to confirm they are actually staying dry rather than assuming a false sense of security. Restricting fluids or stopping hygiene checks would be inappropriate.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A patient's indwelling catheter was removed at 8:00 AM. By 3:00 PM, the patient has not voided. What should the nurse do?",
            options: [
              "Reinsert an indwelling catheter immediately without further assessment",
              "Continue waiting, since up to 12 hours without voiding is expected after catheter removal",
              "Perform a bladder scan, and in-and-out catheterize if volume exceeds 400 mL",
              "Encourage oral fluids and recheck again the following morning"
            ],
            answer: 2,
            rationale: "After catheter removal, patients are at risk for retention; if the patient has not voided within 6-8 hours, the nurse should perform a bladder scan and in-and-out catheterize if the volume exceeds 400 mL. Waiting 12 hours or until the next morning delays needed intervention, and reinserting an indwelling catheter without assessment skips the appropriate stepwise approach.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is preparing to catheterize a male patient with benign prostatic hyperplasia (BPH) who has a history of difficult catheter insertion. Which type of catheter is designed to help navigate this situation?",
            options: [
              "A coudé-tip catheter with a curved end",
              "A three-way catheter for continuous irrigation",
              "A suprapubic catheter placed through the abdominal wall",
              "A temperature-sensing indwelling catheter"
            ],
            answer: 0,
            rationale: "A coudé-tip catheter has a curved tip designed to help bypass an enlarged prostate in patients with BPH, easing insertion. A three-way catheter is used for bladder irrigation, a suprapubic catheter is a surgically placed alternative route, and a temperature-sensing catheter is used mainly for accurate core temperature monitoring, not for navigating obstruction.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is administering a cleansing enema. The patient reports mild cramping, but the abdomen remains soft and non-distended. What should the nurse do?",
            options: [
              "Stop the enema immediately and notify the provider",
              "Raise the enema bag to infuse the solution more quickly",
              "Lower the enema bag to slow the rate of infusion",
              "Reposition the patient to supine and continue at the same rate"
            ],
            answer: 2,
            rationale: "Mild cramping without a rigid or distended abdomen is a common, expected response during enema administration and should be managed by slowing the infusion rate (lowering the bag), not by stopping the procedure entirely. Raising the bag would worsen cramping, and the patient should remain in the left lateral Sims' position rather than supine.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "The nurse determines that digital removal of stool is necessary for a patient with confirmed fecal impaction. Which action is correct?",
            options: [
              "Insert one gloved, lubricated finger and quickly extract the entire stool mass at once",
              "Double-glove, lubricate, and break up and remove the stool in sections",
              "Perform the procedure without lubrication to improve tactile sensation",
              "Delegate the procedure to unlicensed assistive personnel to save time"
            ],
            answer: 1,
            rationale: "Digital removal of an impaction should be performed with double-gloving and lubrication, breaking up and removing the hardened stool in sections rather than attempting to extract it all at once, since it carries the same vagal stimulation and tissue trauma risks as an enema. Skipping lubrication or delegating this task to unlicensed personnel is inappropriate.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A 46-year-old patient with no significant risk factors or family history asks the nurse when colon cancer screening should begin and how often a colonoscopy is needed if results are normal. What should the nurse explain?",
            options: [
              "Screening starts at age 45, with colonoscopy repeated every 10 years",
              "Screening starts at age 50, with colonoscopy repeated every 5 years",
              "Screening starts at age 40, with colonoscopy repeated every 3 years",
              "Screening starts at age 45, with flexible sigmoidoscopy repeated every 10 years"
            ],
            answer: 0,
            rationale: "Average-risk colon cancer screening typically begins at age 45, with a minimum colonoscopy interval of every 10 years if results are normal (flexible sigmoidoscopy has a shorter minimum interval of every 5 years). The other options use incorrect starting ages or intervals.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is teaching a patient how to correctly collect a fecal occult blood test (FOBT) sample at home. Which instruction is correct?",
            options: [
              "Collect a sample from one area of a single stool and send it immediately",
              "Collect samples from 2 different areas of a formed stool, across 3 different stools, and avoid red meat beforehand",
              "Collect a liquid stool sample from 3 different areas on the same day",
              "Collect samples from 3 different areas of a formed stool, across 2 different stools, and eat red meat to improve sensitivity"
            ],
            answer: 1,
            rationale: "Proper FOBT collection requires sampling from 2 different areas of a formed stool across 3 separate stools, and red meat should be avoided beforehand because it can cause a false-positive result. The other options reverse the sampling numbers or incorrectly encourage red meat intake.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A postoperative patient has not voided in several hours and reports suprapubic pressure and discomfort. A bladder scan confirms a full bladder. Which nursing interventions are appropriate at this time? (Select all that apply.)",
            options: [
              "Assist the patient to a normal voiding position (e.g., standing or sitting upright)",
              "Run water at the sink or pour warm water over the perineum to stimulate voiding",
              "Encourage double voiding to help the bladder empty more completely",
              "Perform Crede's method on the bladder without first obtaining a provider order",
              "Apply a cold compress to the lower abdomen to stimulate voiding",
              "Immediately insert an indwelling catheter as the first-line intervention"
            ],
            answers: [0, 1, 2, 4],
            rationale: "For urinary retention, the nurse first tries noninvasive measures — positioning, running water, a cold compress to the lower abdomen, and encouraging double voiding — before catheterization. Crede's method requires a provider order and should not be performed independently, and if catheterization becomes necessary the page emphasizes intermittent catheterization rather than jumping straight to an indwelling catheter.",
            topic: "Urinary & Bowel Elimination",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student is taught to assess skin turgor as part of a hydration assessment. Which technique reflects the correct approach, especially in an older adult patient?",
            options: [
              "Pinch the skin on the back of the hand, since aging does not affect skin elasticity there",
              "Assess turgor only in dependent areas such as the ankles, since fluid pools there first",
              "Skip turgor assessment in older adults since it is not a reliable indicator at any site",
              "Assess turgor at the collarbone or upper arm, since these sites are less affected by aging"
            ],
            answer: 3,
            rationale: "Turgor is best checked at the collarbone or arm because these sites better reflect hydration status and are less confounded by age-related loss of elasticity than a site like the back of the hand. Ankles are used to assess dependent edema, not turgor, and turgor assessment (adjusted for age) is still a useful part of a hydration assessment.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is assessing a patient with darkly pigmented skin for early signs of skin breakdown and circulatory changes. Which assessment techniques are appropriate? (Select all that apply.)",
            options: [
              "Check the mucous membranes, lips, and palms for pallor rather than relying on overall skin tone",
              "Assume any area that looks the same color as the surrounding skin cannot be an early pressure injury",
              "Check the nail beds, lips, and mucosa for a bluish, yellowish-brown, or gray tint suggestive of cyanosis",
              "Rely solely on visual inspection for erythema, since redness is equally visible across all skin tones",
              "Palpate for warmth and changes in skin texture, since redness may be harder to visually detect",
              "Ask the patient or family whether the finding matches the patient's normal baseline coloring"
            ],
            answers: [0, 2, 4, 5],
            rationale: "In darker skin tones, color changes are often better detected by checking mucous membranes, lips, palms, and nail beds rather than relying on overall skin tone; palpating for warmth and texture change helps detect erythema when redness itself is hard to see, and asking about baseline coloring helps distinguish an abnormal finding from normal variation. Assuming unchanged color rules out injury, or relying on visual redness alone, can cause missed or delayed detection of skin breakdown in patients with darker skin.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse identifies a reddened, warm area of skin on a patient's lower leg suspected to be cellulitis and outlines its border with a skin marker. What is the primary purpose of this action?",
            options: [
              "To determine whether the redness is spreading over time",
              "To make the area easier to photograph for the medical record",
              "To numb the area before the provider examines it",
              "To indicate where a dressing should be applied"
            ],
            answer: 0,
            rationale: "Marking the edges of a spreading area of redness, such as cellulitis, allows the care team to objectively track whether it is enlarging over time, which would indicate worsening infection. It isn't done for photography, numbing, or dressing placement purposes.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for two patients: one with urinary incontinence who has redness and skin breakdown in the perineal area, and another with painful, cracked, moist skin in the folds beneath a pannus. How should the nurse best differentiate these two conditions?",
            options: [
              "Both are the same condition, so the location of the skin breakdown does not matter for treatment",
              "The perineal breakdown is intertrigo from friction, while the skin fold breakdown is MASD from urine exposure",
              "Both conditions are treated the same way, by keeping the area covered with an occlusive dressing",
              "The perineal breakdown is MASD from urine exposure, while the skin fold breakdown is intertrigo from friction"
            ],
            answer: 3,
            rationale: "MASD develops from prolonged exposure to urine or stool, commonly in incontinent patients, and is prevented with frequent checks and barrier creams. Intertrigo is inflammation from moist skin rubbing against itself in folds (such as under a pannus or breasts), which can progress to a yeast infection and needs to be kept clean and dry rather than covered.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse cares for a patient with a colostomy and notes redness and skin breakdown around the stoma site. Which intervention is most appropriate to address this finding?",
            options: [
              "Apply a wet-to-dry dressing directly over the peristomal skin",
              "Ensure the appliance fits well and keep the peristomal skin dry",
              "Increase the frequency of appliance changes to twice daily regardless of fit",
              "Apply an antifungal cream to the peristomal skin as a first-line measure"
            ],
            answer: 1,
            rationale: "Peristomal skin breakdown results from enzyme and exudate exposure, so the priority is ensuring a well-fitting appliance and keeping the surrounding skin dry to limit that exposure. Wet-to-dry dressings are used for wound debridement, not intact peristomal skin, and antifungals are reserved for a diagnosed yeast infection rather than being a first-line measure for general peristomal irritation.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for a patient with a diabetic foot ulcer that has failed to progress through the expected stages of healing for several weeks. Which underlying mechanism most likely explains this chronic wound's failure to heal?",
            options: [
              "Impaired blood flow limits oxygen and nutrient delivery to the tissue",
              "The wound edges are too well-approximated, which slows granulation",
              "The wound was covered with an occlusive dressing too soon after injury",
              "The patient's dermis has stopped producing new epidermal cells entirely"
            ],
            answer: 0,
            rationale: "Chronic wounds such as diabetic ulcers and vascular insufficiency wounds often fail to heal because impaired blood flow can't deliver the oxygen and nutrients tissue needs for repair, unlike acute wounds with clean, well-approximated edges that proceed through normal timely healing. Well-approximated edges actually support healing, and the skin layers don't simply stop functioning in this way.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is reviewing labs for a patient with a slow-healing wound. The provider wants to know if the patient's nutritional status has improved over just the past several days, rather than over recent weeks. Which lab value should the nurse expect the provider to prioritize?",
            options: [
              "Albumin, because it reflects chronic nutritional status",
              "Hemoglobin, because it reflects immediate protein intake",
              "Prealbumin, because it reflects more acute nutritional status",
              "Serum glucose, because it reflects short-term protein stores"
            ],
            answer: 2,
            rationale: "Prealbumin has a shorter half-life than albumin, so it better reflects acute or recent changes in nutritional status, while albumin reflects nutritional status over a longer, more chronic period. Hemoglobin and glucose are not the nutritional markers used for evaluating wound-healing nutrition status here.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is selecting a dressing for a patient with fragile periwound skin who needs an occlusive dressing that maintains a moist wound environment and typically doesn't need to be changed daily. Which dressing best fits this need, and what related caution should the nurse also keep in mind for a different type of adhesive dressing?",
            options: [
              "Alginate, which is changed daily; transparent film dressings absorb heavy exudate well without risk",
              "Hydrocolloid, changed every 3 days; transparent dressings like Tegaderm can strip healthy skin",
              "Hydrogel, changed every 3 days; hydrocolloid dressings should be avoided due to skin stripping risk",
              "Hydrocolloid, changed daily; alginate dressings are contraindicated in patients with fragile skin"
            ],
            answer: 1,
            rationale: "Hydrocolloid (Duoderm) dressings are occlusive, swell with exudate, maintain a moist environment, and are typically changed about every 3 days (sooner if saturated) -- a good fit for infrequent changes. Transparent, self-adhesive dressings like Tegaderm must be used cautiously because they can pull off healthy surrounding skin during removal, an important caution for patients with fragile skin.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A provider orders a wound VAC (negative-pressure wound therapy) for a patient with a large, non-healing wound. Which statement reflects correct understanding of this therapy?",
            options: [
              "The nurse may adjust the pressure setting independently based on the volume of drainage in the canister",
              "This therapy is primarily indicated for small, clean, well-approximated surgical incisions",
              "A provider order must specify the negative pressure setting and dressing change frequency",
              "The dressing is changed daily regardless of the canister volume or provider order"
            ],
            answer: 2,
            rationale: "Wound VAC therapy requires a provider order specifying the pressure setting (commonly around -125 mmHg) and dressing change frequency (typically about every 3 days); the canister's collected drainage is part of ongoing assessment. It's used for non-healing, large, awkwardly located, or dehisced wounds -- not small well-approximated incisions -- and the nurse does not independently adjust the ordered pressure.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is assessing a bedbound patient for dependent edema. Where should the nurse prioritize checking for pitting edema in this patient, and how is the finding documented?",
            options: [
              "The ankles and feet, graded on a 0-4+ scale, since gravity pulls fluid there regardless of mobility",
              "The sacrum and genitalia, graded on a 0-4+ scale, since gravity pulls fluid there while supine",
              "The sacrum and genitalia, documented as simply present or absent without a grading scale",
              "The hands and face, graded on a 0-4+ scale, since these areas are easiest to visually inspect without palpation"
            ],
            answer: 1,
            rationale: "In a bedbound patient, the dependent area shifts to the sacrum and genitalia rather than the legs/ankles/feet used for mobile patients, and pitting edema must be palpated and graded on a 0-4+ scale. Visual inspection alone is insufficient -- pitting edema must actually be palpated to assess.",
            topic: "Integumentary",
            source: "quiz-bank"
          },
          {
            stem: "A patient with chronic pain from a spinal cord injury is scheduled for an MRI. During the pre-procedure interview, which finding should prompt the nurse to notify the provider before the patient goes to imaging?",
            options: [
              "The patient reports mild claustrophobia and requests a blanket",
              "The patient has an old surgical clip and is unsure what it is made of",
              "The patient has a documented latex allergy noted in the chart",
              "The patient took their oral pain medication four hours before the scan"
            ],
            answer: 1,
            rationale: "MRI requires screening for metal — implants, devices, or old surgical hardware — because the strong magnetic field can cause injury, so an unknown surgical clip must be clarified before the scan; medication patches such as fentanyl must also be removed to prevent burns. Claustrophobia, a latex allergy, and oral medication timing are not the metal-related safety concern specific to MRI (an iodine/shellfish allergy is the CT-contrast concern instead).",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a history of chronic pancreatitis reports new-onset aching pain in the right shoulder with no history of trauma or shoulder injury. The nurse should recognize this most likely represents:",
            options: [
              "Somatic pain, which is typically well-localized to the joint",
              "Cutaneous pain from irritation of the skin overlying the pancreas",
              "Neuropathic pain related to diabetic complications of pancreatitis",
              "Referred visceral pain, since organ pain may present in a distant area"
            ],
            answer: 3,
            rationale: "Visceral pain arises from internal organs, is often poorly localized, and may be referred to a distant site — pancreatitis presenting as shoulder pain is a classic example. Somatic and cutaneous pain are typically well-localized to the actual site of injury, and neuropathic pain is described as burning, shooting, or electrical from nerve injury, not referred organ pain.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a history of migraines calls the clinic reporting she has been taking her prescribed triptan every morning for the past two weeks 'just to prevent a migraine from starting.' What is the most appropriate response by the nurse?",
            options: [
              "Triptans should be taken at the onset of migraine symptoms or aura, not used daily for prevention",
              "This is an appropriate use of the medication, since triptans work best when taken preventatively",
              "The patient should double the dose if taken preventatively to achieve an adequate serotonin effect",
              "Triptans are more effective for cluster headache prevention and should be switched to daily NSAID use instead"
            ],
            answer: 0,
            rationale: "Triptans affect serotonin and cause vasoconstriction, and are meant to be taken at the onset of symptoms or aura rather than used daily as prevention. Daily preventative use is not supported, doubling the dose is unsafe, and triptans are described as migraine-specific, not a first-line cluster headache prevention strategy.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for a patient receiving continuous epidural analgesia after abdominal surgery. Which finding requires the most immediate follow-up?",
            options: [
              "The patient reports mild pruritus along the trunk",
              "The patient has not voided in six hours and reports lower abdominal fullness",
              "The patient's most recent platelet count and INR are both abnormal",
              "The patient rates pain as 4/10 at the epidural site during movement"
            ],
            answer: 2,
            rationale: "Epidural patients are at increased bleeding risk at the insertion site, so abnormal coagulation labs (platelets, INR, PTT) require immediate follow-up to prevent a serious complication such as an epidural hematoma. Pruritus, urinary retention, and mild pain are known, expected epidural side effects that are managed but are not as immediately dangerous as an unrecognized coagulation abnormality.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A patient in the ICU for three days becomes increasingly restless and irritable, reports racing thoughts, and shows new difficulty concentrating on simple questions. The nurse's first consideration should be:",
            options: [
              "Early-onset dementia, warranting a formal cognitive evaluation",
              "Sensory overload from the excessive stimuli of the ICU environment",
              "Opioid-induced sedation, warranting holding the next scheduled dose",
              "A primary psychiatric mood disorder requiring psychiatric consultation"
            ],
            answer: 1,
            rationale: "Excessive ICU stimuli (alarms, lights, conversations) can cause sensory overload, producing restlessness, irritability, racing thoughts, and decreased problem-solving that are easily mistaken for mood swings or confusion — the priority is to consider and address this reversible environmental cause first. Jumping to dementia, sedation, or a psychiatric diagnosis overlooks the setting-specific cause.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "An older adult with presbycusis documented in the history reports new difficulty hearing the nurse during morning assessments. What should the nurse do first?",
            options: [
              "Arrange for a hearing aid fitting evaluation",
              "Speak in a louder tone into the patient's better ear",
              "Refer the patient for a cochlear implant evaluation",
              "Check both of the patient's ears for cerumen impaction"
            ],
            answer: 3,
            rationale: "Even in a patient with known presbycusis, the nurse should always check for cerumen (earwax) impaction first, since it's a simple, reversible cause of reduced hearing that can compound age-related loss. Care for hearing loss emphasizes normal-toned, unhurried speech rather than simply speaking louder, and hearing aid or implant referrals are not the first step before ruling out a reversible cause.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is communicating with a patient recovering from a stroke who can follow multi-step commands appropriately and clearly understands conversation, but is unable to produce the words she wants to say. This is most consistent with:",
            options: [
              "Receptive aphasia, and the nurse should use simple written material instead of speech",
              "Expressive aphasia, and the nurse should use simple short yes/no questions to ease communication",
              "Receptive aphasia, and the nurse should speak loudly and slowly to improve comprehension",
              "A hearing deficit rather than a language deficit, requiring an audiology referral"
            ],
            answer: 1,
            rationale: "Expressive aphasia means the patient understands language but cannot produce or express words, so simple short or yes/no questions ease communication; receptive aphasia is the opposite — an inability to understand spoken or written language despite still being able to speak. This patient's intact comprehension (follows commands, understands conversation) rules out receptive aphasia or a primary hearing problem.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A patient with moderate osteoarthritis pain has been taking the maximum recommended dose of ibuprofen but reports the pain relief has plateaued and the medication 'just doesn't work as well anymore.' The nurse understands this is best explained by:",
            options: [
              "Developing tolerance to the NSAID, requiring a dose increase",
              "Opioid-induced hyperalgesia from concurrent opioid use",
              "The ceiling effect of non-opioid analgesics such as ibuprofen",
              "Early dependence on the NSAID requiring a gradual taper"
            ],
            answer: 2,
            rationale: "Non-opioid analgesics like NSAIDs have a ceiling effect — once the maximum dose is reached, additional medication does not add more pain relief, unlike opioids, which don't have this same ceiling. Tolerance and dependence are opioid-related concepts on the page and are not established for non-opioids, and there's no indication of concurrent opioid use to support hyperalgesia.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is teaching a patient with newly diagnosed chronic osteoarthritis pain about non-pharmacological options to use at home. Which teaching point is most appropriate?",
            options: [
              "\"Ice packs will likely work best for your day-to-day chronic pain management.\"",
              "\"A TENS unit can be purchased over the counter and used without a provider order.\"",
              "\"Cutaneous stimulation should only be used if medications have completely failed.\"",
              "\"Heat therapy is better for chronic pain, while cold and TENS units help acute pain.\""
            ],
            answer: 3,
            rationale: "Heat is generally better suited for chronic pain, while cold and TENS units are generally better for acute pain. TENS actually requires a provider order rather than being freely available over the counter, and cutaneous stimulation can be used alongside pharmacological treatment, not only as a last resort.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is developing a plan of care for a patient with significant residual deficits after a large stroke, including impaired mobility and decreased responsiveness. Which nursing actions are appropriate to include in the plan of care? Select all that apply.",
            options: [
              "Turn and reposition the patient at least every 2 hours, elevating the heels off the bed",
              "Implement seizure precautions, including padded side rails, working suction, and oxygen at the bedside",
              "Encourage getting the patient up to a chair when possible to help support strength and reduce DVT risk",
              "Limit family involvement in care planning to minimize overstimulation and confusion",
              "Protect uninterrupted sleep periods and try to maintain the patient's normal sleep-wake cycle",
              "Turn the patient every 4 hours instead of every 2 hours to avoid unnecessarily disrupting rest"
            ],
            answers: [0, 1, 2, 4],
            rationale: "Appropriate care for a patient with significant neuro deficits includes turning and repositioning every 2 hours with heel elevation, seizure precautions given increased seizure risk from irritated brain tissue, mobilizing to a chair to support strength and reduce DVT risk, and protecting sleep and a normal sleep-wake cycle. Family should be involved in care planning, not excluded, and turning should occur every 2 hours rather than being stretched to every 4.",
            topic: "Neurosensory & Pain",
            source: "quiz-bank"
          },
          {
            stem: "A 70-year-old patient tells the nurse that her physician's office repeatedly schedules her for shorter appointment slots than younger patients 'because there's not much more that can be done for someone my age,' despite her having several treatable conditions. This scenario best illustrates which concept?",
            options: [
              "Ageism — prejudice or discrimination based on the patient's age.",
              "Elder mistreatment — neglect of the patient by a healthcare provider.",
              "A normal, expected reduction in the need for preventive care with age.",
              "An appropriate triage decision based on the patient's overall prognosis."
            ],
            answer: 0,
            rationale: "Ageism is prejudice or discrimination based on age, and it can undermine an older patient's self-confidence and limit access to care — exactly what's happening when appointment time is shortened based on age assumptions rather than clinical need. This isn't neglect in the abuse sense, a normal aging change, or a legitimate clinical decision.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is assessing an 83-year-old woman with a pronounced upper spine curvature related to osteoporosis. The nurse understands that this finding, combined with normal age-related respiratory changes, places the patient at increased risk for which complication?",
            options: [
              "Increased alveolar surface area leading to hyperoxygenation.",
              "Reduced rib mobility and weaker cough, increasing pneumonia risk.",
              "Increased respiratory muscle strength compensating for the curvature.",
              "Decreased anteroposterior chest diameter improving lung expansion."
            ],
            answer: 1,
            rationale: "Kyphosis further reduces rib mobility and chest wall recoil, which combines with age-related decreases in respiratory muscle strength and lung expansion to produce a weaker cough and higher pneumonia/infection risk. Aging actually decreases alveoli and respiratory muscle strength and increases (not decreases) AP diameter, the opposite of what the other options describe.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "During a home visit, a nurse notes that an older adult who previously managed her own grocery shopping and medication administration independently now needs assistance with both tasks, though she denies any new symptoms. What should the nurse recognize about this change?",
            options: [
              "It is an expected consequence of normal aging and needs no further investigation.",
              "It reflects an IADL decline, but only ADL decline is clinically significant.",
              "It likely signals an underlying problem and should be reported for evaluation.",
              "It should be addressed only if her basic ADLs become affected as well."
            ],
            answer: 2,
            rationale: "ADL/IADL performance (including instrumental tasks like shopping and medication management) is a sensitive indicator of overall health, and a decline in function often signals an underlying problem that nurses should identify and report. IADL decline matters on its own — it doesn't need to wait until ADLs are also affected, and it is not something to dismiss as expected aging.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A 79-year-old man is postoperative day 1 following abdominal surgery in an unfamiliar hospital room. He received general anesthesia and is on a new opioid regimen. Overnight, he becomes acutely disoriented and agitated. Which nursing intervention is most appropriate to help manage this risk for delirium?",
            options: [
              "Keep the room dim and minimize interaction with him to promote rest.",
              "Restrict family visits at the bedside to reduce overstimulation.",
              "Administer a sedative promptly to control the agitation before assessing him.",
              "Reorient him frequently and encourage family presence at the bedside."
            ],
            answer: 3,
            rationale: "Recommended delirium care includes encouraging family visits, providing memory cues, reorienting frequently, and compensating for sensory deficits (such as adequate lighting) — this patient has multiple known delirium risk factors (unfamiliar environment, anesthesia, new medication). Dimming the room and restricting family actually remove helpful orienting cues, and sedating before addressing the underlying cause is not the recommended first step.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is providing health teaching to an older adult who continues to smoke. Which statement by the nurse best reflects accurate knowledge of leading health risks in older adults?",
            options: [
              "'Smoking cessation is important only for preventing lung disease, not for heart disease or cancer.'",
              "'Heart disease is the leading cause of death in older adults, and quitting smoking is still worthwhile at your age.'",
              "'Since stroke is the leading cause of death in older adults, quitting smoking mainly reduces stroke risk.'",
              "'Cancer is the leading cause of death in older adults, and cessation counseling won't help at your age.'"
            ],
            answer: 1,
            rationale: "Heart disease is the #1 leading cause of death in older adults (followed by cancer, chronic lung disease, and stroke), and smoking is a shared risk factor across all four, making cessation counseling worthwhile at any age. The other options misstate the ranking or wrongly limit smoking's impact to only one condition.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A family is trying to choose a long-term care facility for their father and asks the nurse what to consider. Which response is most appropriate?",
            options: [
              "'Since all certified facilities meet the same minimum standards, there's no need to compare them.'",
              "'The most important factor is choosing the facility closest to your home, regardless of anything else.'",
              "'Private rooms are required by law in every facility, so that shouldn't factor into your decision.'",
              "'Compare certification, staffing, food, and activities using Medicare's Care Compare website.'"
            ],
            answer: 3,
            rationale: "Recommended factors when evaluating a facility include Medicare/Medicaid certification, adequate background-checked staffing, food and meal quality, recreational activities, and family-involvement policies, and Medicare's Care Compare website is a helpful tool for comparing facility quality. Certification alone doesn't guarantee equal quality, proximity is only one of many factors, and private rooms are a preference to consider, not a legal requirement.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A patient is being discharged after hip surgery with a partial weight-bearing restriction on the affected leg and a walker for ambulation. Which instruction should the nurse include in discharge teaching about activity?",
            options: [
              "'Follow your prescribed weight-bearing status and avoid lifting more than about 9 pounds until cleared.'",
              "'You can resume lifting objects heavier than a gallon of milk, about 9 pounds, whenever you feel ready.'",
              "'Since you have been given a walker, you no longer need to follow your weight-bearing restrictions.'",
              "'Weight-bearing and lifting limits are the same for every hip surgery patient, so yours are not specific.'"
            ],
            answer: 0,
            rationale: "Activity teaching should be specific to the patient's weight-bearing status, PT-directed use of durable medical equipment like a walker, and lifting restrictions, using a practical reference point like a gallon of milk (about 9 lbs). Having a walker does not remove weight-bearing restrictions, and restrictions are individualized to the patient's surgery and provider orders, not generic.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A nurse at a hospital affiliated with UK's 'meds to beds' program is preparing discharge medication teaching for a patient. The patient asks how much medication supply the program typically sends home with patients. What is the most accurate response?",
            options: [
              "'The program sends home about a 7-day supply, just until your follow-up visit.'",
              "'The program sends home a 90-day supply, so you won't need a refill for months.'",
              "'The program sends home enough medication to last about 30 days after discharge.'",
              "'The program provides only a starter dose of one to two days' worth of medication.'"
            ],
            answer: 2,
            rationale: "UK's 'meds to beds' program sends patients home with about 30 days of medication, giving them time to establish refills and follow-up care before running out. The other timeframes given — a week, three months, or a couple of days — don't match this figure.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is finalizing discharge instructions for a patient recovering from pneumonia with no other complications. When should the nurse advise the patient to schedule a follow-up appointment with their primary care provider?",
            options: [
              "Within about one week of discharge from the hospital.",
              "Within 24 hours of discharge, regardless of condition.",
              "Only if new symptoms develop, not routinely.",
              "Within 4 to 6 weeks, to allow full recovery first."
            ],
            answer: 0,
            rationale: "Primary care follow-up should generally be scheduled within about a week of discharge, along with any relevant specialist follow-up. Waiting for symptoms to develop, delaying a month or more, or requiring a next-day visit for every patient all miss this general timing guideline.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for a hospitalized older adult who has been eating poorly since admission. Which of the following actions are appropriate to help improve the patient's nutritional intake? Select all that apply.",
            options: [
              "Arrange for the patient to eat meals with other patients in a common area when possible",
              "Provide oral care and handwashing before the meal tray arrives",
              "Restrict the patient's fluid intake to reduce the risk of incontinence during meals",
              "Eliminate unpleasant odors from the room before mealtime",
              "Encourage the patient to remain in bed and avoid activity to conserve energy for eating",
              "Involve a dietitian in the plan of care"
            ],
            answers: [0, 1, 3, 5],
            rationale: "Strategies to improve intake include eating with others, providing mouth care/handwashing before the tray arrives, eliminating unpleasant odors, and involving a dietitian. Restricting fluids to manage incontinence is explicitly counterproductive to nutrition, and promoting (not avoiding) activity is recommended because it increases appetite.",
            topic: "Older Adults & Discharge Planning",
            source: "quiz-bank"
          },
          {
            stem: "A patient's family is comparing hospice and palliative care options and asks the nurse how each is typically paid for. Which response is most accurate?",
            options: [
              "\"Hospice is covered by Medicare, Medicaid, and most private insurance, while palliative care coverage depends more on your specific insurance plan.\"",
              "\"Both hospice and palliative care are covered identically by Medicare regardless of the patient's insurance plan.\"",
              "\"Palliative care is only available to patients who pay entirely out of pocket, while hospice is fully covered by Medicaid alone.\"",
              "\"Hospice coverage depends on the patient's individual insurance plan, while palliative care is uniformly covered by Medicare and Medicaid.\""
            ],
            answer: 0,
            rationale: "Hospice is paid for by Medicare, Medicaid, and most private insurance, while palliative care payment depends more on the patient's individual insurance or coverage — the reverse of what the last option describes, and the middle options misstate the funding sources entirely.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A patient says, \"I just want the doctors to find a cure for my cancer.\" Later, the same patient is about to start a new chemotherapy regimen and lives alone. Which pairing correctly demonstrates an \"I wish\" statement followed by an \"I worry\" statement?",
            options: [
              "\"I worry we don't have a cure for your cancer\" followed by \"I wish you had someone here with you during treatment.\"",
              "\"I wish we had a cure for your cancer\" followed by \"I worry that going through chemotherapy alone could be isolating for you.\"",
              "\"I understand exactly how you feel about wanting a cure\" followed by \"I wish you had more support at home.\"",
              "\"I wish you had someone with you at home\" followed by \"I worry the chemotherapy won't cure your cancer.\""
            ],
            answer: 1,
            rationale: "An \"I wish\" statement aligns with the patient's hope (for a cure) while implicitly acknowledging it won't happen, and an \"I worry\" statement shares a concerning possibility (isolation without a care partner) without sounding authoritarian. The other pairings mismatch the statement type to the wrong content or use a phrase the material specifically warns against.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A patient in Kentucky is completing a Kentucky Living Will and asks the nurse who can serve as one of the two required witnesses. Which response is accurate?",
            options: [
              "\"Any two adults can serve as witnesses, including children who would inherit from you.\"",
              "\"Only a licensed attorney is permitted to witness a Kentucky Living Will document.\"",
              "\"You need either two qualifying witnesses or notarization, and relatives or heirs can't serve.\"",
              "\"Your own primary care provider is required to serve as one of the two witnesses.\""
            ],
            answer: 2,
            rationale: "The Kentucky Living Will requires either 2 qualifying witnesses or notarization, and relatives, heirs, and the patient's own healthcare provider are specifically excluded from serving as witnesses. No attorney is required, and both other options describe exactly the excluded categories as if they were eligible.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "During a code status discussion, a physician tells a patient, \"If we do CPR, we'll be cracking your ribs and you'll likely die attached to machines anyway — most people wouldn't want that.\" The patient agrees to a DNR. What is the primary ethical concern the nurse should recognize in this interaction?",
            options: [
              "The physician provided an honest, evidence-based description of likely outcomes that supported informed decision-making.",
              "The patient lacked the legal capacity to make a code status decision during a serious, acute illness.",
              "DNR conversations should only occur with the patient's designated health care surrogate, not the patient directly.",
              "The graphic, coercive framing may have intimidated the patient rather than supporting an autonomous choice."
            ],
            answer: 3,
            rationale: "Coercive, overly graphic language during code status conversations is identified as a real ethical problem because it can intimidate patients away from choices like CPR — distinct from an honest, non-manipulative discussion of likely outcomes. Nothing in the scenario suggests the patient lacked capacity or that only a surrogate should have been involved.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A family member tells the nurse, \"We can't let them put in a feeding tube — that feels like we'd be letting her starve if we don't.\" What is the nurse's best response?",
            options: [
              "Use the term \"artificial nutrition\" rather than \"feeding tube,\" and explain that decreased interest in food is a natural part of dying.",
              "Agree that withholding a feeding tube is the same as letting her starve, and encourage the family to consent to insertion.",
              "Avoid discussing the topic further, since families are not entitled to information about artificial nutrition options.",
              "Explain that \"feeding tube\" is the most clinically accurate term and should be used consistently to avoid confusing the family."
            ],
            answer: 0,
            rationale: "\"Feeding tube\" is identified as emotionally loaded, somewhat manipulative language, and more technical terms better convey what's actually being decided; understanding the natural decline in appetite during the dying process helps address the \"starving\" fear. Agreeing the patient will starve reinforces the myth, and withholding information or insisting on the emotionally loaded term contradicts the material's guidance.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is caring for several patients approaching the end of life and reflects on what shapes end-of-life care decisions. Which factors are identified as influencing how patients and families approach these decisions? (Select all that apply.)",
            options: [
              "Ethnicity and intracultural differences within the same culture",
              "Long-standing family relationships, dynamics, and conflicts at the bedside",
              "Class and access, including insurance and financial resources",
              "Generational, faith, and cultural traditions in the family",
              "The specific hospital unit where the patient is currently admitted",
              "The patient's primary nursing diagnosis listed on the care plan"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Ethnicity and intracultural differences — such as variation between more modern and more traditional expression of beliefs within the same culture — family relationships and dynamics, including conflicts that can resurface at the bedside, class and access, including how insurance and financial resources affect the care a patient can receive, and generational or faith traditions are identified as key influences on end-of-life decisions. The hospital unit and a formal nursing diagnosis label are not among the factors discussed in the material.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student observes the social worker on an interdisciplinary palliative care team conducting a psychological assessment and providing direct emotional support to a patient, in addition to coordinating community resources. How should the nurse interpret this?",
            options: [
              "The social worker is exceeding their scope, since their role is limited to case management and resource referral, not psychological assessment.",
              "The social worker is functioning at the top of their licensure, since psychosocial assessment and clinical care are part of that role.",
              "This work belongs to the chaplain, and the social worker should refer all emotional support needs to spiritual care instead.",
              "Psychological assessment and emotional support should only be performed by the physician or nurse practitioner."
            ],
            answer: 1,
            rationale: "Social workers on both palliative and hospice teams are described as working at the top of their licensure, providing clinical care — not just case management — as part of a holistic approach addressing physical, psychological, psychosocial, and spiritual needs, making the other options inconsistent with the described role.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "The spouse of a patient with a terminal diagnosis begins expressing sadness, withdrawal, and grief over the anticipated loss of shared future plans weeks before the patient's death. How should the nurse best interpret this?",
            options: [
              "This is bereavement, since any grief response related to a dying patient is classified as bereavement.",
              "This indicates the spouse has moved into denial and needs referral to formal grief counseling immediately.",
              "This is anticipatory grief, a normal response that begins before the death and includes intangible losses.",
              "This is abnormal grief, since a grief response should not begin until after the patient has actually died."
            ],
            answer: 2,
            rationale: "Anticipatory grief is normal, natural grief occurring before death that mirrors post-death mourning and includes grief over intangible anticipated losses such as future plans or milestones. Bereavement specifically refers to the post-mortem grief response, and there is no basis in the scenario to label this as denial or as abnormal.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A grieving family member tells the nurse, \"One day I feel like I'm handling this and starting to build a new routine, and the next day the grief hits me out of nowhere again. Something must be wrong with me.\" Which response best reflects the dual process model of grief?",
            options: [
              "\"That's concerning — healthy grieving should move steadily through Kübler-Ross's stages without going backward.\"",
              "\"You should try to stay focused on distraction and new routines, and avoid revisiting the grief itself as much as possible.\"",
              "\"That back-and-forth usually means you're stuck in the denial stage and haven't yet accepted the loss.\"",
              "\"That's a normal pattern — grief naturally oscillates between feeling the loss directly and rebuilding your life.\""
            ],
            answer: 3,
            rationale: "The dual process model describes grief as an oscillation between loss-oriented tasks (grief work, feeling intruded upon by grief) and restoration-oriented tasks (new routines and roles) rather than a fixed sequence of stages. This normalizes the family member's experience, while the other options rely on a rigid \"stages\" framing the material cautions against or endorse avoiding one side of the oscillation entirely.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          },
          {
            stem: "A hospice nurse notes that a patient's breathing pattern has become irregular, with periods of apnea lasting approximately 45 seconds between breaths. The patient's family, at the bedside, asks if their loved one has just died. What is the nurse's best response?",
            options: [
              "\"Yes, an apnea period of more than 30 seconds means that breathing has permanently stopped.\"",
              "\"Not necessarily — pauses of 30 seconds to a minute are common in adults at this stage of dying.\"",
              "\"This pattern only occurs in infants and newborns, so it's an unusual finding for an adult patient.\"",
              "\"This means your loved one is in pain and needs an immediate increase in opioid medication.\""
            ],
            answer: 1,
            rationale: "Apnea pauses of roughly 30 seconds to a minute between breaths are common in adults during the late stage of dying and don't by themselves confirm death; this pattern can be even more prolonged in infants and newborns, but it isn't exclusive to them. A pause of this length doesn't confirm death has occurred, nor is it automatically a pain indicator requiring more opioids.",
            topic: "Palliative, Hospice & End of Life",
            source: "quiz-bank"
          }
        ],
        eaq: []
      }
    },
    {
      id: "week1-resp-labs-dx",
      label: "Respiratory Labs & Diagnostics",
      sets: {
        mustKnow: [
          {
            stem: "Two hours after a bronchoscopy, a patient's sputum is streaked with a small amount of blood. Vital signs are unchanged from baseline and the patient denies dyspnea. Which action should the nurse take?",
            options: [
              "Document the finding and continue routine monitoring.",
              "Notify the provider that hemorrhage is suspected.",
              "Obtain a stat chest x-ray to rule out a pneumothorax.",
              "Hold the patient's next scheduled anticoagulant dose."
            ],
            answer: 0,
            rationale: "Blood-tinged mucus after a bronchoscopy is an expected finding caused by minor trauma from the scope; it is documented and monitored rather than reported on its own. Hemorrhage would be suggested by an unexplained rise in heart rate, and a pneumothorax by abrupt shortness of breath. Neither is present here.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient returns to the unit after a bronchoscopy and asks for a drink of water. Which finding must the nurse confirm before honoring the request?",
            options: [
              "Oxygen saturation has returned to baseline.",
              "The patient can sit upright without dizziness.",
              "The patient's gag reflex has returned.",
              "The patient is fully alert after sedation."
            ],
            answer: 2,
            rationale: "The oral pharynx is anesthetized during a bronchoscopy so the patient does not gag or vomit around the scope. The patient stays NPO afterward until that gag reflex returns, because swallowing without it risks aspiration. Alertness, oxygenation and positioning are all monitored, but none of them addresses the numbed airway.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A provider is preparing to perform a thoracentesis at the bedside. How should the nurse position the patient?",
            options: [
              "Supine with the head of the bed flat and arms at the sides.",
              "Sitting upright and leaning forward onto an overhead table.",
              "Side-lying on the affected side with the knees drawn up.",
              "High Fowler's with both arms raised above the head."
            ],
            answer: 1,
            rationale: "Sitting upright and leaning forward with the elbows resting on an overhead table pulls the shoulders forward and opens the intercostal spaces the provider needs in order to reach the pleural space. The other positions leave those spaces narrowed.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient is scheduled for a CT scan with contrast. Which laboratory results should the nurse review and report to the provider if elevated?",
            options: [
              "Hemoglobin and hematocrit",
              "White blood cell count and differential",
              "Platelet count and international normalized ratio",
              "Creatinine and blood urea nitrogen"
            ],
            answer: 3,
            rationale: "Contrast is nephrotoxic, so renal function is checked before the scan. Creatinine is kidney-specific and BUN is checked alongside it; an elevation in either is reported before contrast is given. Afterward the patient is encouraged to drink fluids to help flush the contrast out.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is collecting a sputum specimen for culture and sensitivity. Which actions are appropriate? Select all that apply.",
            options: [
              "Collect the specimen first thing in the morning",
              "Have the patient expectorate a deep specimen rather than saliva",
              "Place the specimen in a sterile container",
              "Transport the specimen to the laboratory promptly",
              "Have the patient drink several glasses of water immediately before collecting",
              "Leave the specimen at the bedside until the next scheduled lab pickup"
            ],
            answers: [0, 1, 2, 3],
            rationale: "The morning specimen is best because secretions concentrate overnight while the patient lies still, and before anything has been eaten or had to drink. The specimen must come from deep in the airway rather than being saliva, must go into a sterile container, and must reach the lab right away rather than sitting at the bedside.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient with dark nail polish requires continuous pulse oximetry. Which action should the nurse take?",
            options: [
              "Apply the probe to the earlobe, which is the preferred site.",
              "Remove the polish and place the probe on a fingertip.",
              "Apply the probe over the polish and note it in the record.",
              "Obtain intermittent readings with routine vital signs instead."
            ],
            answer: 1,
            rationale: "The fingertip is the site the sensor is actually made for, so the polish is removed rather than the site changed. The earlobe and the toe can be used, but they are alternates rather than the preferred site, and switching to intermittent readings does not satisfy an order for continuous monitoring.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient is scheduled for an MRI. Which pre-procedure action is most important for the nurse to complete?",
            options: [
              "Verify that all metal has been removed from the patient.",
              "Confirm the patient has no history of shellfish allergy.",
              "Ensure the patient has been NPO for at least six hours.",
              "Check that the patient's creatinine is within normal limits."
            ],
            answer: 0,
            rationale: "All metal must be removed before an MRI. The contrast used for MRI is not iodine-based, so the iodine-related concerns that apply to CT contrast do not drive MRI safety, and renal screening belongs with iodine-based CT contrast. A shellfish allergy is not actually linked to contrast reactions, and NPO status is not a routine MRI requirement.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "Thirty minutes after a transbronchial lung biopsy, a patient becomes abruptly short of breath. Which complication does this finding most suggest?",
            options: [
              "Hemorrhage at the biopsy site",
              "An allergic reaction to the sedation",
              "A pneumothorax on the biopsy side",
              "Aspiration from an anesthetized pharynx"
            ],
            answer: 2,
            rationale: "Abrupt shortness of breath after a bronchoscopy or lung biopsy points to a pneumothorax, and the provider is notified. Hemorrhage after these procedures is more typically signaled by an unexplained rise in heart rate.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient with COPD completes pulmonary function testing. Which result is most consistent with this patient's disease process?",
            options: [
              "An increased total lung capacity with an unchanged FEV1",
              "A reduced forced expiratory volume in one second",
              "A reduced total lung capacity with an unchanged FEV1",
              "An improvement in FEV1 with each repeated effort"
            ],
            answer: 1,
            rationale: "Obstructive disease makes it hard to get air out rather than in, so the volume forced out in the first second falls. Total lung capacity measures the full range from a maximal inhalation to a maximal exhalation, and is not the value that defines the obstructive pattern.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is administering a Mantoux tuberculin skin test. Which technique is correct?",
            options: [
              "Inject subcutaneously at a 45-degree angle",
              "Inject intramuscularly at a 90-degree angle",
              "Inject intradermally at a 45-degree angle",
              "Inject intradermally at a 10- to 15-degree angle"
            ],
            answer: 3,
            rationale: "The solution is placed intradermally at only a 10- to 15-degree angle, just far enough under the skin to raise a bleb. The result must then be read in person at a follow-up visit.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          }
        ],
        extraPractice: [
          {
            stem: "A patient asks why a PET scan was ordered in addition to the CT scan already completed. Which explanation should the nurse give?",
            options: [
              "It produces a clearer two-dimensional image of the chest.",
              "It shows how tissue is functioning rather than only its structure.",
              "It avoids the need for any injected contrast material.",
              "It distinguishes vascular from non-vascular structures."
            ],
            answer: 1,
            rationale: "A PET scan uses an injected radioactive tracer to show physiology and function, such as blood flow and sugar uptake, rather than structure alone, which is why it is used heavily in cancer diagnosis. Distinguishing vascular from non-vascular structures describes MRI, and PET does involve an injected tracer.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient receiving IV contrast during a CT scan reports a warm sensation spreading through the body. What is the nurse's interpretation of this report?",
            options: [
              "An expected response that requires no intervention",
              "An early sign of an allergic reaction to the contrast",
              "An indication that the contrast has extravasated",
              "A sign that the patient's renal function is impaired"
            ],
            answer: 0,
            rationale: "A warm flush spreading through the body is a normal response to IV contrast. Patients are told to expect it beforehand so that it does not alarm them when it happens.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "Immediately following a thoracentesis, which nursing action takes priority?",
            options: [
              "Encouraging the patient to cough and deep breathe hourly",
              "Assessing for hypoxia and obtaining the ordered chest x-ray",
              "Measuring the patient's abdominal girth for comparison",
              "Keeping the patient NPO until the gag reflex has returned"
            ],
            answer: 1,
            rationale: "A chest x-ray is obtained after the procedure and the patient is assessed for hypoxia, both to rule out a pneumothorax caused by inadvertently nicking the pleura. Abdominal girth relates to a paracentesis, and the gag reflex concern belongs to bronchoscopy.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A provider suspects lung cancer and orders a sputum study. Which study should the nurse anticipate?",
            options: [
              "Sputum for acid-fast bacillus",
              "Sputum for culture and sensitivity",
              "Blood for interferon gamma release assay",
              "Sputum for cytology examination"
            ],
            answer: 3,
            rationale: "Cytology looks for cancer cells and is part of the lung cancer diagnostic workup. Acid-fast bacillus testing checks for active tuberculosis, and culture and sensitivity identifies bacteria and guides antibiotic selection.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient being screened for tuberculosis tells the nurse they are unable to return to the clinic later in the week. Which screening option addresses this?",
            options: [
              "An interferon gamma release assay",
              "A Mantoux tuberculin skin test",
              "A sputum specimen for acid-fast bacillus",
              "A chest x-ray read during the same visit"
            ],
            answer: 0,
            rationale: "The interferon gamma release assay is a blood draw and does not require the patient to come back to have a result read, unlike a skin test, which must be read in person at a follow-up visit. Neither test is superior; they are two different ways of getting the same answer.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is preparing a patient for a bronchoscopy. Which actions belong in the plan of care? Select all that apply.",
            options: [
              "Confirm that informed consent has been signed",
              "Keep the patient NPO for 6 to 12 hours beforehand",
              "Anticipate that the oral pharynx will be anesthetized",
              "Withhold oral intake afterward until the gag reflex returns",
              "Position the patient leaning forward over an overhead table",
              "Report any blood-tinged mucus to the provider immediately"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Bronchoscopy is invasive, so consent is signed beforehand. The patient is NPO for 6 to 12 hours to reduce nausea, vomiting and aspiration risk once sedated, the oral pharynx is anesthetized so the patient does not gag around the scope, and oral intake is withheld afterward until that gag reflex returns. Leaning over an overhead table is the thoracentesis position, and blood-tinged mucus afterward is expected rather than reportable on its own.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient is going to radiology for a PA and lateral chest x-ray. Which instruction should the nurse give?",
            options: [
              "Remain NPO until the images have been obtained.",
              "Report any allergy to iodine before the images.",
              "Expect a loud clicking noise during the images.",
              "Remove metal objects from the neck to the waist."
            ],
            answer: 3,
            rationale: "Metal between the neck and the waist, such as necklaces and bra straps, is removed before a chest x-ray. The loud clicking belongs to CT, iodine concerns belong to iodine-based CT contrast, and a plain chest x-ray requires no NPO status.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient is scheduled for a trans-thoracic needle aspiration. Where should the nurse tell the patient the procedure will take place?",
            options: [
              "In the operating room suite",
              "In the endoscopy suite",
              "In the radiology department",
              "At the patient's bedside"
            ],
            answer: 2,
            rationale: "A trans-thoracic needle aspiration passes a needle directly through the chest wall using CT guidance, so it is done in radiology. A transbronchial biopsy is done in the endoscopy suite by way of the bronchoscope, and an open lung biopsy and VATS are both done in the OR.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A patient is taught to use a peak flow meter at home. Which finding should the patient be taught to report?",
            options: [
              "A reading that has fallen below the patient's personal best",
              "A reading obtained before rather than after inhaler use",
              "A reading that varies by a small amount between efforts",
              "A reading taken while seated rather than while standing"
            ],
            answer: 0,
            rationale: "A peak flow meter lets the patient check their own FEV1 at home. A number falling relative to that patient's personal best can signal an asthma attack early, which is what makes the device useful as a monitoring tool.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          },
          {
            stem: "A nursing student asks what a pulse oximetry reading actually reflects. Which response by the nurse is accurate?",
            options: [
              "The total volume of blood made up of red blood cells",
              "The amount of iron available to build hemoglobin",
              "How much of the hemoglobin is carrying oxygen",
              "The rate at which oxygen crosses the alveolar wall"
            ],
            answer: 2,
            rationale: "In the lecture's bus analogy the red blood cell is the bus, hemoglobin built from iron is the seats, and oxygen is the passenger, so the pulse ox reports how full those seats are. The total volume of blood made up of red blood cells is the hematocrit.",
            topic: "Respiratory Labs & Diagnostics",
            source: "quiz-bank"
          }
        ],
        eaq: []
      }
    },
    {
      id: "week1-upper-resp",
      label: "Upper Respiratory Problems",
      sets: {
        mustKnow: [
          {
            stem: "A patient in the clinic develops an anterior nosebleed. Which position should the nurse use?",
            options: [
              "Supine with the head turned to one side",
              "Sitting upright with the head tilted backward",
              "Sitting upright and leaning slightly forward",
              "Side-lying with the head of the bed elevated"
            ],
            answer: 2,
            rationale: "Leaning forward keeps blood from running down the back of the throat, where it could be aspirated. Tilting the head backward causes exactly what the position is meant to prevent.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is applying pressure to control an anterior nosebleed. Where should the pressure be applied?",
            options: [
              "Over the bony bridge of the nose",
              "On the soft tissue just below the bony prominence",
              "At the base of the nostrils against the upper lip",
              "Along both sides of the nose at the inner canthus"
            ],
            answer: 1,
            rationale: "Pinching the bone itself accomplishes nothing; the pressure has to be on the soft tissue just below the bony prominence. Ice is applied along with lateral pressure to promote vasoconstriction.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient's tracheostomy tube is accidentally dislodged. After extending the neck and inserting the outer cannula with the obturator in place, what should the nurse do next?",
            options: [
              "Reinsert the inner cannula",
              "Secure the obturator to the bedside",
              "Auscultate the patient's breath sounds",
              "Remove the obturator from the tube"
            ],
            answer: 3,
            rationale: "The obturator's point eases the tube into the stoma, but it fills the airway once the tube is in place. It has to come out immediately, before the inner cannula is replaced, breath sounds are checked, and the tube is secured.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with obstructive sleep apnea and COPD reports difficulty exhaling against the current device. Which order should the nurse anticipate?",
            options: [
              "Continuous positive airway pressure",
              "Supplemental oxygen by nasal cannula",
              "Bilevel positive airway pressure",
              "An oral appliance worn during sleep"
            ],
            answer: 2,
            rationale: "BiPAP delivers two pressures, with a lower one during exhalation, which makes it easier for the patient to push air out. That suits a patient who has trouble exhaling, such as one with COPD. CPAP holds one constant pressure throughout.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "Which findings in a patient's history are well-established risk factors for obstructive sleep apnea? Select all that apply.",
            options: [
              "Obesity",
              "Male sex",
              "Increased age",
              "Nasal or pharyngeal structural abnormalities",
              "A history of seasonal allergies",
              "Female sex"
            ],
            answers: [0, 1, 2, 3],
            rationale: "The four well-established risk factors are obesity, in which adipose tissue and a large neck circumference press on the airway, male sex, increased age, and nasal or pharyngeal structural abnormalities. Smoking is also a risk factor but a less well-established one, and seasonal allergies were not identified as one.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a sore throat has a negative rapid strep test. Which treatment should the nurse anticipate?",
            options: [
              "A course of oral antibiotics",
              "Nystatin swish-and-swallow solution",
              "A repeat rapid strep test in 48 hours",
              "Analgesics and antipyretics for comfort"
            ],
            answer: 3,
            rationale: "A negative rapid strep test points to a viral cause, which is by far the most common, and viral pharyngitis is managed with soothing measures, analgesics and antipyretics. Antibiotics are reserved for bacterial pharyngitis, since giving them for a viral infection drives antibiotic resistance.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a posterior nosebleed has just had posterior packing placed. Which assessment is the priority?",
            options: [
              "The patient's respiratory status",
              "The patient's reported pain level",
              "The condition of the oral mucosa",
              "The patient's oral fluid intake"
            ],
            answer: 0,
            rationale: "Posterior packing can impede breathing, so respiratory status is monitored closely. Pain control, oral care and hydration are all part of the plan of care, but they follow airway and breathing.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is performing tracheostomy care for a patient with a metal Jackson tube. Which action is correct?",
            options: [
              "Discard the inner cannula and insert a new one",
              "Clean the inner cannula with a scrub brush",
              "Deflate the cuff before removing the inner cannula",
              "Keep the obturator in the unit supply room"
            ],
            answer: 1,
            rationale: "The metal Jackson tube's inner cannula is cleaned with a scrub brush rather than discarded; the disposable inner cannula belongs to the plastic Shiley. A Jackson tube has no cuff, and the obturator stays taped at the bedside at all times regardless of tube type.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient presents with a spontaneous nosebleed and no history of trauma. Which question is most important for the nurse to ask?",
            options: [
              "Do you take any blood-thinning medication?",
              "Have you recently traveled to a higher altitude?",
              "Have you had a recent upper respiratory infection?",
              "Is there a family history of frequent nosebleeds?"
            ],
            answer: 0,
            rationale: "A blood dyscrasia, most commonly anticoagulant therapy, is a leading cause of spontaneous epistaxis, and it changes both the likely cause and how quickly the bleeding can be stopped. Dry air, including at higher altitudes, and infection are also causes but are less urgent to establish.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient taking warfarin is admitted with a posterior nosebleed. Which medication should the nurse anticipate to reverse the anticoagulation?",
            options: [
              "Protamine sulfate",
              "Vitamin K",
              "Aspirin",
              "Ibuprofen"
            ],
            answer: 1,
            rationale: "Vitamin K reverses warfarin, while protamine sulfate is the antidote for IV heparin. Aspirin and NSAIDs such as ibuprofen thin the blood further and are avoided in a patient with epistaxis.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          }
        ],
        extraPractice: [
          {
            stem: "A patient's partner reports loud snoring and pauses in breathing during sleep. Which diagnostic study should the nurse anticipate?",
            options: [
              "Polysomnography",
              "Pulmonary function testing",
              "An overnight pulse oximetry trend",
              "A chest x-ray"
            ],
            answer: 0,
            rationale: "Polysomnography, a sleep study performed at a sleep center, is the gold standard for diagnosing obstructive sleep apnea. Patients are frequently unaware of the problem themselves, and it is often the significant other who reports the snoring.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is reviewing a sleep study report that documents episodes of hypopnea. What does this term describe?",
            options: [
              "A complete cessation of breathing",
              "An increase in the depth of breathing",
              "A considerable slowing of breathing",
              "An irregular alternating breathing pattern"
            ],
            answer: 2,
            rationale: "Hypopnea is breathing that slows considerably, while apnea is a cessation of breathing. Both are respiratory-effort-related events.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient newly prescribed CPAP asks whether the machine will deliver oxygen. Which response by the nurse is accurate?",
            options: [
              "The machine delivers a set percentage of oxygen.",
              "The machine delivers oxygen only during inhalation.",
              "The machine delivers oxygen only if apnea is detected.",
              "The machine delivers pressure, not supplemental oxygen."
            ],
            answer: 3,
            rationale: "CPAP pushes one constant positive pressure into the airway to help hold it open during both inhalation and exhalation. No supplemental oxygen is involved, although oxygen may be added to the setup at home.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with mild obstructive sleep apnea asks what can be done besides using a device at night. Which instruction should the nurse include?",
            options: [
              "Sleep on your back with an extra pillow.",
              "Have a small alcoholic drink before bed.",
              "Sleep on your side rather than your back.",
              "Limit all fluids for four hours before bed."
            ],
            answer: 2,
            rationale: "The mandible drops back and obstructs the airway when the patient lies supine, so side-sleeping is taught. Weight reduction, exercise, good sleep hygiene, and avoiding alcohol and smoking are also recommended, which means alcohol is avoided rather than encouraged.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient is admitted with posterior nasal packing in place. Which interventions should the nurse include in the plan of care? Select all that apply.",
            options: [
              "Monitor respiratory status closely",
              "Provide humidification and oxygenation",
              "Maintain bed rest",
              "Provide oral care",
              "Encourage the patient to blow the nose hourly",
              "Administer aspirin for discomfort"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Packing can impede breathing, so respiratory status is monitored and humidification and oxygenation are provided, along with bed rest, pain control and oral care. Nose blowing is discouraged because it raises pressure inside the nose, and aspirin and NSAIDs are avoided because they thin the blood.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient who recently completed a course of antibiotics reports a sore throat with white patches in the mouth. Which treatment should the nurse anticipate?",
            options: [
              "A second course of oral antibiotics",
              "A rapid strep test before treatment",
              "Nystatin swish-and-swallow solution",
              "Antipyretics and increased fluids"
            ],
            answer: 2,
            rationale: "Fungal pharyngitis, commonly called thrush and caused by candida albicans, is seen in patients who have been on antibiotics. It is treated with nystatin as a swish-and-spit or swish-and-swallow solution.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "Which cluster of findings would most suggest bacterial rather than viral pharyngitis?",
            options: [
              "Gradual sore throat with clear drainage and no fever",
              "Sudden sore throat with tender enlarged tonsils and fever",
              "Chronic sore throat with hoarseness and weight loss",
              "Mild sore throat with white patches after antibiotic use"
            ],
            answer: 1,
            rationale: "Bacterial, streptococcal pharyngitis presents with a sudden-onset sore throat, tonsillar hypertrophy with swollen red tender tonsils, lymphadenopathy and fever. White patches after antibiotics suggest a fungal cause. Even so, the two are hard to separate by symptoms alone, which is why a rapid strep test is done.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is teaching a patient with increased intracranial pressure who has just had a nosebleed. Which instruction is most important?",
            options: [
              "Avoid blowing your nose while it heals.",
              "Apply ice to the back of your neck.",
              "Lie flat if the bleeding starts again.",
              "Rinse the nostrils with tap water."
            ],
            answer: 0,
            rationale: "Nose blowing raises pressure inside the nose and is discouraged after epistaxis, and it matters especially for a patient who already has increased intracranial pressure. Ice is applied to the nose along with lateral pressure, and the patient sits upright leaning forward rather than lying flat.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is admitting a patient with a new tracheostomy. Where should the obturator be kept?",
            options: [
              "In the patient's bedside supply drawer",
              "In the clean utility room with trach supplies",
              "Attached to the patient's gown",
              "Taped at the head of the patient's bed"
            ],
            answer: 3,
            rationale: "The obturator is taped at the bedside at all times, for either type of tube, so that it is immediately available to reinsert a tube that has been coughed out.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a CPAP order admits to using it only a few nights each week. Which response by the nurse is most appropriate?",
            options: [
              "Ask what makes the device uncomfortable to use.",
              "Explain that the device must be used every night.",
              "Suggest the patient request a BiPAP machine instead.",
              "Reassure the patient that partial use is acceptable."
            ],
            answer: 0,
            rationale: "An estimated 20 to 40% of patients with a CPAP or BiPAP order do not actually use it, because it is uncomfortable. Exploring the reason opens the door to patient education and problem-solving rather than simply restating the expectation.",
            topic: "Upper Respiratory Problems",
            source: "quiz-bank"
          }
        ],
        eaq: []
      }
    },
    {
      id: "week1-head-neck-ca",
      label: "Head & Neck Cancer",
      sets: {
        mustKnow: [
          {
            stem: "A patient who had a total laryngectomy is found unresponsive and apneic. How should the nurse deliver rescue breaths?",
            options: [
              "With a bag-valve mask over the mouth and nose",
              "With a bag-valve device fitted over the stoma",
              "With a mouth-to-mouth seal and the nose pinched",
              "With a mask over the mouth, occluding the stoma"
            ],
            answer: 1,
            rationale: "After a laryngectomy air no longer enters through the nose or mouth, so the stoma is the only airway. The patient is bagged at the stoma, using a pediatric adapter, a smaller face mask that fits over it.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient scheduled for a total laryngectomy asks whether they will ever eat normally again. Which response by the nurse is accurate?",
            options: [
              "Eating by mouth will not be possible after this surgery.",
              "Eating by mouth will require a permanent feeding tube.",
              "Eating by mouth will depend on whether a trach is placed.",
              "Eating by mouth is expected once post-op swelling resolves."
            ],
            answer: 3,
            rationale: "A laryngectomy removes the larynx, but the esophagus and the GI connection remain intact, so eating is still possible. A tube feeding may be needed temporarily while post-operative swelling heals, but eating normally is the eventual goal.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient returns to the unit after a radical neck dissection. Which nursing assessment takes priority?",
            options: [
              "Patency of the patient's airway",
              "Output from the Jackson-Pratt drain",
              "Appearance of the surgical incision",
              "The patient's current nutritional status"
            ],
            answer: 0,
            rationale: "There is a great deal going on in the neck after this surgery, and the airway runs directly through the operative region, so airway patency is the first priority. Drain output, the incision, and nutrition all matter but follow the airway.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A 42-year-old patient who has never used tobacco is diagnosed with head and neck cancer. Which statement best explains this presentation?",
            options: [
              "Head and neck cancer under age 50 is often associated with HPV.",
              "Head and neck cancer is most often diagnosed before age 50.",
              "Tobacco use accounts for nearly all head and neck cancers.",
              "Head and neck cancer occurs more often in women than in men."
            ],
            answer: 0,
            rationale: "Tobacco causes about 85% of head and neck cancers, and most cases are diagnosed after age 50 and more often in men. When a patient under 50 is diagnosed, HPV is often the associated factor instead.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "Which interventions should the nurse include in the post-operative plan of care after a radical neck dissection? Select all that apply.",
            options: [
              "Humidify the tracheostomy collar or oxygen source",
              "Suction the airway as needed",
              "Begin tube feedings early in the recovery period",
              "Arrange physical therapy and speech therapy consults",
              "Maintain strict bed rest until the drain is removed",
              "Report blood-tinged sputum in the first 48 hours to the provider"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Humidification replaces what the nose and mouth normally provide before a trach bypasses them, suctioning and coughing keep the airway clear, tube feedings begin right away because these patients are often malnourished before surgery and good nutrition enhances healing, and physical and speech therapy are part of post-operative recovery. Patients are gotten up and moving rather than kept on bed rest, and blood-tinged sputum in the first couple of days is expected from surgical trauma.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient is 3 days post-laryngectomy and wants to communicate with family. Which method can be used at this point?",
            options: [
              "Esophageal speech",
              "Tracheoesophageal voice restoration",
              "An artificial larynx",
              "Speech using a cuffed tracheostomy tube"
            ],
            answer: 2,
            rationale: "A handheld artificial larynx placed against the throat provides the vibration needed to produce speech and can be used immediately after surgery, which is part of why it is the most common option today. Esophageal speech is hard to learn, and tracheoesophageal voice restoration requires a surgically placed valve.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a new tracheostomy has thick, tenacious secretions. Which intervention addresses the underlying cause?",
            options: [
              "Increasing the frequency of suctioning",
              "Adding humidification to the oxygen source",
              "Repositioning the patient more frequently",
              "Deflating the tracheostomy cuff periodically"
            ],
            answer: 1,
            rationale: "The nose and mouth normally humidify air before it reaches the lungs, and a tracheostomy bypasses them. Adding humidification restores what was lost, while suctioning removes secretions without addressing why they are thick.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "On the second post-operative day after a radical neck dissection, a patient's sputum is blood-tinged. What is the nurse's interpretation of this finding?",
            options: [
              "An expected result of surgical trauma",
              "An early indication of a wound infection",
              "A sign that a major vessel has eroded",
              "Evidence that suctioning has been too aggressive"
            ],
            answer: 0,
            rationale: "Blood-tinged sputum is expected in the first couple of days after this surgery, caused by trauma from the surgery itself. It is the same principle as blood-tinged mucus after a bronchoscopy.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient's operative report lists a laryngectomy followed by a tracheostomy. What do these two procedures indicate?",
            options: [
              "The larynx was opened and the trachea was removed",
              "Both the larynx and the trachea were partially removed",
              "Both procedures created openings to bypass a tumor",
              "The larynx was removed and an opening was made in the trachea"
            ],
            answer: 3,
            rationale: "The suffix -ectomy means removal and -ostomy means opening, so the larynx was removed and an opening was created in the trachea. A tracheostomy often follows a laryngectomy.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient is considering esophageal speech after a laryngectomy. Which information should the nurse include?",
            options: [
              "It requires a handheld device held against the neck.",
              "It requires a surgically implanted valve device.",
              "It requires no device but is difficult to learn.",
              "It requires an intact larynx in order to produce sound."
            ],
            answer: 2,
            rationale: "In esophageal speech the patient sucks air into the esophagus and forms words while burping it back out, so no device is needed. The trade-off is that it is hard to learn and can be difficult for listeners to understand.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          }
        ],
        extraPractice: [
          {
            stem: "A family member asks why the patient's secretions come out of the neck opening when they cough. Which explanation should the nurse give?",
            options: [
              "The stoma is the only remaining connection to the airway.",
              "Swelling is temporarily blocking the nose and mouth.",
              "The tracheostomy tube is diverting secretions upward.",
              "The esophagus and trachea have been surgically joined."
            ],
            answer: 0,
            rationale: "After a laryngectomy the nose and mouth are no longer connected to the airway. Air enters only through the stoma, and sputum comes out the same way when the patient coughs.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A community health nurse is planning education aimed at reducing head and neck cancer. Which topic should receive the greatest emphasis?",
            options: [
              "Human papillomavirus vaccination",
              "Tobacco use and smoking cessation",
              "Recognizing symptoms before age 50",
              "Nutrition to prevent malnutrition"
            ],
            answer: 1,
            rationale: "Tobacco use causes about 85% of head and neck cancers, which makes it by far the largest contributor and the highest-yield target for prevention education. HPV is associated with disease in patients under 50 but accounts for a smaller share.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient newly diagnosed with head and neck cancer asks what treatment to expect first. Which response by the nurse is accurate?",
            options: [
              "Chemotherapy is typically started first.",
              "Radiation is typically started first.",
              "Surgery is typically the first treatment.",
              "Treatment usually begins with observation."
            ],
            answer: 2,
            rationale: "Surgery is the first line of treatment for head and neck cancer. Radiation and chemotherapy are also used, but they follow rather than precede surgical management here.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient with an early laryngeal lesion is scheduled for vocal cord stripping. What should the nurse understand about this procedure?",
            options: [
              "It removes the larynx and creates a permanent stoma.",
              "It is less extensive than removing the entire larynx.",
              "It requires a tracheostomy in every case.",
              "It is performed only after radiation has failed."
            ],
            answer: 1,
            rationale: "Vocal cord stripping is a less extensive surgical option than removing the larynx entirely, so it is not equivalent to a laryngectomy and does not by itself create a permanent stoma.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "Which statements should the nurse include when teaching a patient about life after a total laryngectomy? Select all that apply.",
            options: [
              "Air will enter your lungs only through the stoma",
              "Coughed-up secretions will come out through the stoma",
              "You will be able to eat by mouth once swelling resolves",
              "Emergency responders must ventilate through your stoma",
              "You can still breathe through your nose if the stoma is blocked",
              "You will need a permanent feeding tube for nutrition"
            ],
            answers: [0, 1, 2, 3],
            rationale: "After a laryngectomy the airway connects only to the stoma, so air goes in and secretions come out there, and rescue breathing is delivered there with a pediatric adapter. Eating by mouth remains possible because the esophagus is intact, with tube feeding only temporary while swelling resolves, and the nose and mouth are no longer an alternate airway.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient asks why lymph nodes are being removed during their cancer surgery. Which explanation should the nurse give?",
            options: [
              "It is done routinely for all head and neck cancer surgeries.",
              "It is done to create space for a tracheostomy tube.",
              "It is done to reduce swelling after radiation therapy.",
              "It is done when the cancer has spread beyond the original site."
            ],
            answer: 3,
            rationale: "Lymph node removal, or neck dissection, is done when the cancer has metastasized or spread into the muscle. It may involve dissecting neck muscles such as the sternocleidomastoid, and how extensive it is depends on how far the cancer has spread.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient scheduled for a radical neck dissection has lost weight over the past 2 months. Which intervention should the nurse anticipate?",
            options: [
              "Beginning tube feedings before or immediately after surgery",
              "Delaying surgery until the patient regains the lost weight",
              "Restricting oral intake to clear liquids until surgery",
              "Providing high-calorie supplements only after discharge"
            ],
            answer: 0,
            rationale: "These patients are often malnourished before surgery because they have not felt like eating, and good nutrition enhances healing. Tube feedings are therefore started right away, and sometimes even before the surgery.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "A patient is withdrawn and refuses to look in the mirror after a radical neck dissection. Which nursing action is most appropriate?",
            options: [
              "Remove the mirror from the patient's room.",
              "Acknowledge the change in appearance and stay present.",
              "Reassure the patient the appearance will fully return.",
              "Postpone the topic until discharge teaching."
            ],
            answer: 1,
            rationale: "The surgery can be disfiguring, and part of the neck may visibly cave in where tissue was removed. The physical modification is a large part of what makes this cancer devastating, so acknowledging the change while remaining present supports the patient, where false reassurance and avoidance do not.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "Which method of restoring speech after a laryngectomy requires a surgical procedure?",
            options: [
              "Esophageal speech using swallowed air",
              "An artificial larynx held to the neck",
              "Tracheoesophageal voice restoration",
              "Speech therapy without a device"
            ],
            answer: 2,
            rationale: "Tracheoesophageal voice restoration uses a valve device that is placed surgically. The artificial larynx is handheld, and esophageal speech uses no device at all.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          },
          {
            stem: "Which statement reflects why head and neck cancer is often difficult to treat at the time of diagnosis?",
            options: [
              "Most patients are diagnosed before age 50.",
              "Most tumors do not respond to surgical removal.",
              "Most patients decline treatment when it is offered.",
              "Most patients already have locally advanced disease."
            ],
            answer: 3,
            rationale: "Most patients already have locally advanced disease by the time they are diagnosed, which is a large part of what makes head and neck cancer so difficult to manage.",
            topic: "Head & Neck Cancer",
            source: "quiz-bank"
          }
        ],
        eaq: []
      }
    },
    {
      id: "week1-lower-resp",
      label: "Lower Respiratory Problems",
      sets: {
        mustKnow: [
          {
            stem: "A patient with COPD has an oxygen saturation of 84% and increased work of breathing. A nursing student suggests withholding oxygen because the patient may be a CO2 retainer. Which response by the nurse is correct?",
            options: [
              "Oxygen is withheld until an arterial blood gas confirms retention.",
              "Oxygen is given and titrated to a target around 88 to 90 percent.",
              "Oxygen is given only if the saturation falls below 80 percent.",
              "Oxygen is withheld and noninvasive ventilation is used instead."
            ],
            answer: 1,
            rationale: "A hypoxic patient is never denied oxygen. In a CO2 retainer the drive to breathe comes from a low oxygen level rather than a rising CO2, so the concern is over-targeting rather than oxygen itself. COPD patients in the hospital are typically kept around 88 to 90%, per provider preference.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient admitted 3 days ago for a hip fracture develops a fever and a new infiltrate on chest x-ray. How should this pneumonia be classified?",
            options: [
              "Community-acquired pneumonia",
              "Ventilator-associated pneumonia",
              "Hospital-acquired pneumonia",
              "Opportunistic pneumonia"
            ],
            answer: 2,
            rationale: "Pneumonia that begins 48 or more hours after admission, and was not present at the time of admission, is hospital-acquired. It would be classified as ventilator-associated only if the patient were intubated on a ventilator.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "An 82-year-old patient admitted for observation becomes newly confused overnight. Vital signs are within normal limits. Which action should the nurse take first?",
            options: [
              "Assess the patient for an underlying infection",
              "Reorient the patient and recheck in an hour",
              "Request an order for a sedative at bedtime",
              "Raise all four side rails for patient safety"
            ],
            answer: 0,
            rationale: "New-onset confusion in an older adult is often the earliest sign of an infection such as pneumonia, and it can appear before the more typical symptoms and before vital signs change. The same pattern shows up with urinary tract infections.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse reads a tuberculin skin test on a patient with HIV 60 hours after placement and measures 6 mm of induration. How should this result be interpreted?",
            options: [
              "Negative, because the induration is less than 10 mm",
              "Negative, because it was read more than 48 hours later",
              "Positive, because the patient is immunosuppressed",
              "Invalid, because erythema was not also measured"
            ],
            answer: 2,
            rationale: "For an immunosuppressed patient, including someone with HIV, recent contact with active TB, or an organ or lung transplant, induration of 5 mm or more is positive. The test is read 48 to 72 hours after placement, and it is induration, not redness, that is measured.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient is admitted with active tuberculosis. Which actions should the nurse include in the plan of care? Select all that apply.",
            options: [
              "Place the patient in a negative-pressure room",
              "Wear a fit-tested HEPA mask when entering the room",
              "Teach the patient to cover the mouth and nose when coughing",
              "Anticipate prophylactic medication for household contacts",
              "Place the patient in a positive-pressure room",
              "Discontinue precautions once the patient becomes afebrile"
            ],
            answers: [0, 1, 2, 3],
            rationale: "A negative-pressure room pushes air out rather than recirculating it into other patients' rooms, and staff must be fit-tested for the HEPA mask. Patients are taught to cover the mouth and nose when coughing and to wear a mask in crowds, and high-risk household contacts may be started on prophylactic medication. Three negative sputum AFB cultures, not the resolution of fever, establish that the patient is no longer infectious.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient taking medication for tuberculosis calls the clinic alarmed that their urine is orange. Which response by the nurse is appropriate?",
            options: [
              "This suggests bleeding and requires an immediate visit.",
              "This indicates the medication should be held until seen.",
              "This suggests the dose is too high and needs adjustment.",
              "This is an expected effect of one of your medications."
            ],
            answer: 3,
            rationale: "Rifampin turns excretions, including urine, red or orange. Recognizing this as expected matters so that it is not mistaken for hematuria.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse auscultates a patient one day after a right pneumonectomy and hears no breath sounds over the right lung field. What is the nurse's interpretation of this finding?",
            options: [
              "An expected finding after this procedure",
              "A finding that suggests a pneumothorax",
              "A finding that suggests mucus plugging",
              "A finding that requires immediate suctioning"
            ],
            answer: 0,
            rationale: "A pneumonectomy removes the entire lung, so there is no lung on that side to move air and no breath sounds to hear. That side also appears white rather than black on a chest x-ray. Assessment near the midline is interpreted cautiously, because sounds heard there may simply be transmitted from the remaining lung.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse is comparing the two conditions grouped under COPD. Which finding is most characteristic of chronic bronchitis?",
            options: [
              "Overstretched alveoli that impair gas exchange",
              "A reduction in total lung capacity over time",
              "Excessive production of secretions",
              "Loss of the normal cough reflex"
            ],
            answer: 2,
            rationale: "The defining feature of chronic bronchitis is excessive secretion production, while alveolar damage with impaired gas exchange describes emphysema. Most patients with COPD have some degree of both.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "Which patient is at highest risk for aspiration pneumonia?",
            options: [
              "A patient with a productive cough and a fever",
              "A patient recovering from a viral upper respiratory infection",
              "A patient using an incentive spirometer every hour",
              "A patient with dysphagia who drinks thin liquids"
            ],
            answer: 3,
            rationale: "Dysphagia is a leading risk factor for aspiration, and thin liquids are especially risky. Aspiration can also be silent, with no vomiting or even coughing, which is why identifying the risk and acting on it through positioning, diet texture and tube placement matters.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient's CBC with differential shows leukocytosis with a shift to the left. What does this indicate?",
            options: [
              "A decrease in circulating white blood cells",
              "A release of immature neutrophils into blood",
              "A predominance of lymphocytes over neutrophils",
              "A viral rather than a bacterial process"
            ],
            answer: 1,
            rationale: "Leukocytosis is an increase in white blood cells, and a shift to the left means an increase in neutrophils, specifically the immature ones released early to help fight an acute bacterial infection. Leukopenia would be a decrease instead.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          }
        ],
        extraPractice: [
          {
            stem: "A patient with COPD is observed exhaling through pursed lips. What does this indicate to the nurse?",
            options: [
              "The patient is experiencing acute respiratory distress.",
              "The patient has developed a compensatory breathing technique.",
              "The patient is attempting to increase the rate of breathing.",
              "The patient requires immediate bronchodilator therapy."
            ],
            answer: 1,
            rationale: "Pursed-lip breathing creates positive pressure between the lips and the alveoli that helps push trapped air back out. It is a compensatory mechanism that most patients with advanced disease adopt on their own.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A nurse notes that a patient's anteroposterior chest diameter approaches a 1:1 ratio. Which finding does this describe?",
            options: [
              "A barrel chest from years of air trapping",
              "A tripod position that expands the chest",
              "Cachexia from the calories breathing requires",
              "Prolonged expiration during forced exhalation"
            ],
            answer: 0,
            rationale: "Years of working hard to exhale expand the thorax, moving the anteroposterior diameter from the normal 2:1 ratio toward 1:1. That is a barrel chest.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "Which intervention should the nurse emphasize as the most effective way to slow the progression of COPD?",
            options: [
              "Adhering to prescribed inhaler therapy",
              "Receiving the annual influenza vaccine",
              "Stopping all tobacco use permanently",
              "Practicing energy conservation methods"
            ],
            answer: 2,
            rationale: "Smoking cessation is the single most effective and most cost-effective intervention for reducing COPD risk and slowing its progression. Inhaler adherence is the mainstay of self-management, and vaccination and energy conservation both matter, but none of them changes the disease course the way cessation does.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a long smoking history is being evaluated for lung cancer. Which symptom is most commonly reported?",
            options: [
              "Coughing up blood with exertion",
              "A persistently productive cough",
              "Pleuritic chest pain at rest",
              "Unexplained loss of weight"
            ],
            answer: 1,
            rationale: "The most common symptom of lung cancer is a persistently productive cough. It is easily missed because many patients are smokers who already have a chronic cough, so a change goes unnoticed until the disease is fairly advanced.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "Which interventions should the nurse include in the plan of care for a patient with COPD? Select all that apply.",
            options: [
              "Teach pursed-lip breathing and huff coughing",
              "Encourage tripod positioning during dyspnea",
              "Provide nutritional support",
              "Reinforce adherence to prescribed inhalers",
              "Restrict fluids to reduce secretion production",
              "Encourage a supine position to conserve energy"
            ],
            answers: [0, 1, 2, 3],
            rationale: "Pursed-lip breathing and huff coughing help move trapped air and secretions, tripod positioning expands the thorax and increases the surface area available for gas exchange, nutritional support addresses the enormous number of calories breathing consumes, and inhaler adherence is the mainstay of self-management. Fluids are increased rather than restricted, to thin secretions, and lying supine does not help a patient who is working to breathe.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient's sputum cytology is negative, but a chest x-ray shows a mass. What should the nurse tell the patient about the next step?",
            options: [
              "The negative cytology rules out a malignancy.",
              "A repeat chest x-ray in 3 months is the next step.",
              "A biopsy is needed to establish the diagnosis.",
              "A CT scan alone can confirm the diagnosis."
            ],
            answer: 2,
            rationale: "Only about 20 to 30 out of every 100 patients who actually have lung cancer test positive on sputum cytology alone, so a negative result rules nothing out. A biopsy provides actual tissue and is the definitive diagnostic test, while CT and MRI are used to assess for metastasis.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with a positive interferon gamma release assay has a clear chest x-ray and no symptoms. What should the nurse explain about this result?",
            options: [
              "The patient has latent infection and is not contagious.",
              "The patient has active disease requiring isolation.",
              "The patient's test result was most likely a false positive.",
              "The patient will require no further follow-up."
            ],
            answer: 0,
            rationale: "A clear chest x-ray with no Ghon nodule following a positive skin test or IGRA indicates latent TB, a persistent immune response with no clinical manifestations that is asymptomatic and non-contagious. It can convert to active disease years later in about 5 to 10% of patients, so follow-up still matters.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient taking isoniazid reports numbness and tingling in the fingers. What does the nurse recognize about this report?",
            options: [
              "An early sign of medication resistance",
              "An expected effect that resolves in 48 hours",
              "A finding unrelated to tuberculosis therapy",
              "A known adverse effect of the medication"
            ],
            answer: 3,
            rationale: "Isoniazid causes peripheral neuropathy, felt as numbness and tingling in the fingers, as well as hepatotoxicity. Isoniazid and acetaminophen are the two drugs in med-surg most associated with liver toxicity.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A patient with active TB is experiencing homelessness and has missed several clinic appointments. Which approach should the nurse anticipate?",
            options: [
              "Shortening the course of therapy to improve completion",
              "Direct observational therapy for each dose",
              "Switching to a single-drug regimen for simplicity",
              "Delaying therapy until stable housing is arranged"
            ],
            answer: 1,
            rationale: "Direct Observational Therapy has a provider directly supervise the patient taking each dose. It is used for patients at high risk of non-adherence, both to increase adherence and to decrease the risk of multi-drug-resistant TB.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          },
          {
            stem: "A postoperative patient with pneumonia is reluctant to deep breathe because of pain. Which nursing action best addresses this?",
            options: [
              "Postponing deep breathing until the pain resolves",
              "Substituting continuous oxygen for deep breathing",
              "Limiting activity to reduce the patient's oxygen demand",
              "Administering analgesia before pulmonary hygiene"
            ],
            answer: 3,
            rationale: "Pain with deep breaths and coughing leads patients to avoid taking good deep breaths, which becomes its own problem. Treating the pain first lets the patient participate in turning, coughing, deep breathing and incentive spirometry.",
            topic: "Lower Respiratory Problems",
            source: "quiz-bank"
          }
        ],
        eaq: []
      }
    }
  ]
};

/* Display order for the topic-breakdown strip on a custom exam.
   The four Week 1 topics are ordinary rows whose questions carry a
   topic matching their row label. The 11 that follow are the
   individual Fundamentals Review section labels (see the note above —
   the picker shows those merged into one row, but each question keeps
   its own specific topic for this breakdown). All in course order. */
window.TOPIC_ORDER = [
  "Respiratory Labs & Diagnostics",
  "Upper Respiratory Problems",
  "Head & Neck Cancer",
  "Lower Respiratory Problems",
  "Legal & Ethical Issues",
  "Nursing Process, Clinical Judgment & SBAR",
  "Obesity & Metabolic Syndrome",
  "Oxygenation & Tracheostomy",
  "Cardiovascular",
  "Diabetic Care & Nutrition",
  "Urinary & Bowel Elimination",
  "Integumentary",
  "Neurosensory & Pain",
  "Older Adults & Discharge Planning",
  "Palliative, Hospice & End of Life"
];
