/* ============================================================
   quiz-bank.js — the "Build Your Own Exam" question bank.

   Structure: one entry per TOPIC, each with three question SETS.
   The page renders topics as rows and sets as columns, so a topic
   with an empty set shows a greyed-out, unselectable cell. Nothing
   breaks if a set is empty — leave it [] until you have content.

   ------------------------------------------------------------
   THE THREE SETS, AND WHAT EACH IS FOR
   ------------------------------------------------------------
   mustKnow       Tracks the bullets on must-know.html ONE FOR ONE.
                  This is a hard invariant. Cut a bullet there, the
                  question goes too — UNLESS a surviving bullet still
                  depends on it. Add a bullet, it needs a question.

   extraPractice  High-yield lecture content that is NOT on the Must
                  Know page. Must not test the same point as any
                  mustKnow question in the same topic.

   eaq            Imported from an outside question bank (a publisher's
                  adaptive quizzing product, a question app, whatever).
                  Rename the column in `columns` below to suit. If your
                  course has no such source, leave every one empty and
                  the column simply renders as disabled.

   ------------------------------------------------------------
   INVARIANTS TO CHECK AFTER ANY EDIT (see RULES.md)
   ------------------------------------------------------------
     * Every topic carries exactly 1 mustKnow SATA + 1 extraPractice
       SATA (topics with very little content are the only exception,
       and should be listed as exceptions in your CLAUDE.md).
     * No duplicate stems anywhere in the file.
     * No answer slot holds more than ~50% of a topic's questions.
       Authoring naturally puts the right answer first — rotate them
       deliberately, asserting the option SET is unchanged so no
       content drifts.
     * Every question has topic, source, and a non-empty rationale.
     * Every answer/answers index is in range.

   ------------------------------------------------------------
   ADDING A TOPIC
   ------------------------------------------------------------
   Copy a whole { id, label, week, sets } block. `label` is what shows
   in the row and in the topic-breakdown strip, and every question's
   `topic` field in that block must match it EXACTLY.
   ============================================================ */
window.QUIZ_BANK = {

  /* Column headings and the legend under the intro line. Rename these
     for your course — "EAQs" only means something in a nursing program. */
  columns: [
    { key: "mustKnow",      label: "Must Know",      blurb: "Everything the lectures explicitly stated or heavily hinted will be tested." },
    { key: "extraPractice", label: "Extra Practice", blurb: "Other topics from the lecture content, prioritized by highest yield." },
    { key: "eaq",           label: "Question Bank",  blurb: "Imported questions from an outside question bank, sorted by topic, with duplicates removed." }
  ],

  topics: [
    {
        "id": "week1-antimicrobials-antibiotics",
        "label": "Antimicrobials &amp; Antibiotics (ABX)",
        "week": 1,
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A nurse is preparing to draw blood cultures for a patient with a new fever and an existing central venous catheter. Which action best reduces the risk of a false-positive culture result?",
                    "options": [
                        "Draw the sample from a peripheral vein rather than the central line",
                        "Draw both culture bottles from the central line to save time",
                        "Draw only one culture bottle instead of two separate bottles",
                        "Wait to draw the culture until after the first antibiotic dose is given"
                    ],
                    "answer": 0,
                    "rationale": "Surface bacteria on central lines and ports commonly contaminate samples, so a peripheral stick is preferred whenever possible. The closest distractor is drawing from the central line 'to save time' — this is tempting because it avoids an extra stick, but the passage specifically warns that central-line/port draws commonly contaminate results, which is why a peripheral draw is preferred despite the added effort.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is caring for a patient in the emergency department with suspected bacterial meningitis. The provider orders IV antibiotics to be given immediately, before culture results return. Which of the following best explains this decision?",
                    "options": [
                        "Meningitis cultures cannot grow properly once bacteria have colonized the CNS",
                        "Meningitis is one of the situations where treatment cannot wait for culture results",
                        "Meningitis antibiotics are only effective if started within one hour of symptom onset",
                        "Meningitis cultures do not require separate aerobic and anaerobic bottles"
                    ],
                    "answer": 1,
                    "rationale": "Meningitis is explicitly named as one of the exceptions (along with a critically ill/rapidly declining patient or severe sepsis) where treatment can't wait on culture results. The closest distractor claims cultures 'cannot grow properly' after CNS colonization — this sounds like a lab-science explanation but isn't stated anywhere on the page; the actual reasoning given is about not delaying treatment, not about culture viability.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A student nurse states, 'A bacteriostatic drug directly kills the bacteria, while a bactericidal drug only slows its growth.' The instructor should correct this statement by explaining that...",
                    "options": [
                        "bactericidal drugs slow bacterial growth without killing the organism",
                        "bacteriostatic drugs work by disrupting the bacterial cell wall until it lyses",
                        "bactericidal drugs kill the organism outright, unlike bacteriostatic drugs",
                        "both terms actually describe drugs that block folic acid synthesis pathways"
                    ],
                    "answer": 2,
                    "rationale": "The passage defines bactericidal as killing the bacteria outright and bacteriostatic as only inhibiting growth/reproduction — the reverse of the student's statement. The closest distractor simply restates the student's original (backwards) claim about bactericidal drugs, which is exactly the misconception being corrected, not the correction itself.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient presents with a severe infection, and the organism has not yet been identified. The provider starts an antibiotic empirically that is effective against many organism types. Which statement best reflects the rationale for this choice?",
                    "options": [
                        "Broad-spectrum drugs are narrow-spectrum drugs given at a higher concentration",
                        "Narrow-spectrum drugs are preferred whenever the causative organism is unknown",
                        "Broad-spectrum antibiotics remove the need for a culture and sensitivity test",
                        "Broad-spectrum antibiotics cover many organism types when the organism is not yet known"
                    ],
                    "answer": 3,
                    "rationale": "Broad spectrum is described as a 'shotgun approach' used specifically when the organism isn't known yet or hasn't cultured out. The closest distractor flips narrow/broad spectrum indications — narrow spectrum actually requires knowing the organism and its sensitivities, the opposite of this scenario.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse needs to schedule peak and trough lab draws for a patient receiving IV gentamicin. Which timing is correct?",
                    "options": [
                        "Draw the trough about 30 minutes before the next dose and the peak about 30 minutes after the infusion finishes",
                        "Draw the peak about 30 minutes before the next dose and the trough about 30 minutes after the infusion finishes",
                        "Draw both the peak and trough immediately before the next dose is due",
                        "Draw the peak level about 30 minutes after the oral tablet is swallowed"
                    ],
                    "answer": 0,
                    "rationale": "The mnemonic 'PEAK after, TROUGH before' matches option 0 exactly. The closest distractor simply swaps which level is drawn before versus after, which would give an inaccurate peak/trough result. The oral-dosing option is also wrong since the page states peaks are only drawn for IV drugs, but the before/after swap is the more tempting error.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving IV vancomycin develops flushing and itching of the neck and upper body during the infusion, with a stable blood pressure. What is the most appropriate nursing action?",
                    "options": [
                        "Stop the infusion immediately and notify the provider of a suspected anaphylactic reaction",
                        "Slow the infusion rate, since this reaction is consistent with Red Man syndrome",
                        "Administer a stat dose of oral vancomycin to reduce systemic absorption",
                        "Continue the infusion at the same rate and document it as an expected effect"
                    ],
                    "answer": 1,
                    "rationale": "Red Man syndrome (flushing, itching, sometimes tachycardia/hypotension) results from infusing vancomycin too fast, and the fix is to slow the infusion, not stop the drug. The closest distractor — stopping the infusion for suspected anaphylaxis — is tempting because the symptoms could look allergic, but the page specifically distinguishes this reaction as rate-related rather than a reason to discontinue therapy.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has been on IV vancomycin for a resistant gram-positive infection for one week. Which combination of assessments best reflects the toxicities the nurse should monitor for?",
                    "options": [
                        "Liver function, due to this drug's hepatotoxic risk",
                        "QT interval and seizure threshold",
                        "Renal function, hearing changes, and platelet counts",
                        "Joint pain and photosensitivity reactions"
                    ],
                    "answer": 2,
                    "rationale": "Vancomycin's stated toxic effects are nephrotoxicity, reversible hearing loss, and thrombocytopenia — matching renal function, hearing, and platelets. The closest distractor, QT interval and seizure threshold, is actually the levofloxacin (fluoroquinolone) toxicity profile described on the page, not vancomycin's.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with a documented history of anaphylaxis to penicillin is being considered for a cephalosporin to treat a serious infection. What is the most important consideration for the nurse to communicate to the provider?",
                    "options": [
                        "Cross-reactivity is common, so cephalosporins should be avoided after any penicillin reaction",
                        "Cephalosporins are contraindicated in pregnancy, so an alternative should be selected",
                        "A sulfa-based antibiotic would be a safer alternative given this allergy history",
                        "Cross-reactivity is more likely because this reaction was anaphylactic rather than a mild rash"
                    ],
                    "answer": 3,
                    "rationale": "The page states cross-reactivity is rare (1-4%) but is still avoided when the original penicillin reaction was anaphylactic rather than just a rash — matching option 3. The closest distractor overstates cross-reactivity as 'common,' when the page explicitly calls it rare; it also wrongly implies all penicillin reactions warrant avoidance rather than specifically anaphylactic ones.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse reviews a new order for piperacillin-tazobactam (Zosyn) and recalls that tazobactam is included to address antibiotic resistance. What is tazobactam's role in this combination?",
                    "options": [
                        "It inhibits the beta-lactamase enzyme that would otherwise inactivate the antibiotic",
                        "It blocks a kidney enzyme that would break the antibiotic down too quickly",
                        "It provides additional gram-negative coverage as a second antibiotic",
                        "It is given separately from the antibiotic to prevent nephrotoxicity"
                    ],
                    "answer": 0,
                    "rationale": "Drugs ending in '-bactam' are beta-lactamase inhibitors that protect the antibiotic from being broken down by bacterial beta-lactamase. The closest distractor describes cilastatin's actual role (blocking the kidney enzyme dehydropeptidase that breaks down imipenem) — a real page fact, but attributed to the wrong drug.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a staphylococcal skin infection, and cultures show the organism produces penicillinase. Which penicillin is the most appropriate choice?",
                    "options": [
                        "Amoxicillin, since it is preferred for oral dosing",
                        "Nafcillin, since it resists breakdown by penicillinase",
                        "Penicillin G, since it has broad gram-positive coverage",
                        "Piperacillin-tazobactam, since it covers pseudomonas"
                    ],
                    "answer": 1,
                    "rationale": "Nafcillin is specifically named as the penicillinase-resistant penicillin and the drug of choice when the organism secretes penicillinase, which is common with staph infections. The closest distractor, amoxicillin, is a real fact about oral preference for aminopenicillins, but amoxicillin resistance is described as rising, not penicillinase resistance.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is caring for an ICU patient started on IV piperacillin-tazobactam for a pseudomonas infection. Which lab values should the nurse monitor closely while the patient is on this medication?",
                    "options": [
                        "Liver enzymes and INR",
                        "Hearing tests and creatinine",
                        "Platelet function and renal status",
                        "QT interval and white blood cell count"
                    ],
                    "answer": 2,
                    "rationale": "The page specifically instructs watching platelet function and renal status with extended-spectrum piperacillin-tazobactam. The closest distractor, hearing tests and creatinine, describes aminoglycoside monitoring (ototoxicity and nephrotoxicity), not the platelet/renal focus given for this drug.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A provider needs to select a cephalosporin for a patient with bacterial meningitis. Which characteristic makes ceftriaxone an appropriate choice?",
                    "options": [
                        "It has the strongest activity against pseudomonas among the cephalosporins",
                        "It is dosed multiple times daily to maintain CNS drug levels",
                        "It has minimal CNS penetration and is paired with a carbapenem",
                        "It crosses the blood-brain barrier and is dosed once daily"
                    ],
                    "answer": 3,
                    "rationale": "Ceftriaxone is described as once-daily dosing that crosses the blood-brain barrier, making it useful for meningitis. The closest distractor attributes 'minimal CNS penetration' to ceftriaxone, but that description actually belongs to first-generation cephalosporins like cefazolin on the page.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is administering IV meropenem to a patient with a history of a seizure disorder. What is the priority nursing consideration?",
                    "options": [
                        "Monitor closely for seizures, a known risk with this drug class",
                        "Infuse the dose over 24 hours to reduce cardiotoxicity",
                        "Request a switch to imipenem-cilastatin, since it carries a lower seizure risk than meropenem",
                        "Pair the dose with cilastatin to prevent seizure activity"
                    ],
                    "answer": 0,
                    "rationale": "Carbapenems carry a real risk of drug-induced seizures, so close monitoring is the priority in a patient with a seizure history. The closest distractor reverses a real fact: the page states meropenem is used more often specifically because it has a lower seizure risk than imipenem, not the other way around.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse attends an infection-control in-service about carbapenem-resistant Enterobacteriaceae (CRE). Which statement about CRE should the nurse identify as accurate?",
                    "options": [
                        "CRE infections are resistant to vancomycin but respond well to carbapenems",
                        "CRE is a public health emergency because carbapenems are the broadest-spectrum option left",
                        "CRE spreads mainly through contaminated white coats rather than direct contact",
                        "CRE has a mortality rate similar to routine hospital-acquired UTIs"
                    ],
                    "answer": 1,
                    "rationale": "CRE is described as a public health emergency precisely because carbapenems are the broadest-spectrum antibiotics available, leaving very few remaining options once resistance develops. The closest distractor confuses CRE with VRE — it is VRE, not CRE, that relates to vancomycin resistance, and CRE is by definition resistant to carbapenems, not responsive to them.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving IV gentamicin is scheduled for a procedure requiring a neuromuscular blocking agent. What is the nurse's priority concern?",
                    "options": [
                        "Increased risk of Red Man syndrome from the drug combination",
                        "Increased risk of a disulfiram-like reaction",
                        "Increased risk of profound respiratory distress",
                        "Increased risk of a photosensitivity reaction"
                    ],
                    "answer": 2,
                    "rationale": "The page specifically warns that gentamicin combined with a neuromuscular blocker (paralytic) can cause profound respiratory distress. The closest distractor, Red Man syndrome, is a real toxicity but belongs to vancomycin infusing too quickly, not gentamicin with a paralytic.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is prescribed IV gentamicin together with a beta-lactamase inhibitor combination drug for a synergistic effect. In what order should the nurse plan to administer these medications?",
                    "options": [
                        "Administer both medications at the same time through the same IV line",
                        "Administer the gentamicin first so it reaches peak levels sooner",
                        "Administer the two drugs 24 hours apart to avoid combined nephrotoxicity",
                        "Administer the beta-lactamase inhibitor combination first, then the gentamicin"
                    ],
                    "answer": 3,
                    "rationale": "The page states the beta-lactamase inhibitor should be given first so the aminoglycoside can get into the bacterial cell for a synergistic effect. The closest distractor reverses this order, giving gentamicin first, which is the opposite of the stated sequence.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient started on clindamycin for an intra-abdominal anaerobic infection reports new diarrhea with visible blood. What should the nurse suspect?",
                    "options": [
                        "Pseudomembranous colitis related to C. diff overgrowth",
                        "An expected adverse effect that needs no further evaluation",
                        "A true cross-allergy reaction to penicillin",
                        "Red Man syndrome from infusing the drug too quickly"
                    ],
                    "answer": 0,
                    "rationale": "The page lists C. diff/pseudomembranous colitis as a notable clindamycin risk, with diarrhea and bloody stool as key warning signs. The closest distractor, a penicillin cross-allergy, is a real page concept but applies to cephalosporins, not clindamycin, which is a lincosamide.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is providing discharge teaching to a patient starting metronidazole for a C. diff infection who mentions plans to have wine with dinner that evening. What is the most important teaching point?",
                    "options": [
                        "Alcohol is safe as long as it is consumed at least 2 hours after the dose",
                        "Alcohol should be avoided for at least 36 hours after the last dose",
                        "Alcohol only interacts with the IV form of this medication",
                        "Alcohol increases the risk of a photosensitivity reaction with this medication"
                    ],
                    "answer": 1,
                    "rationale": "The page's danger callout states no alcohol for at least 24 hours before starting and 36 hours after the last dose, due to a toxic, disulfiram-like reaction. The closest distractor invents a 2-hour 'safe window,' which contradicts the much longer avoidance period actually stated.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is caring for a patient with HIV who has been started on sulfamethoxazole-trimethoprim (Bactrim). Which finding should prompt the nurse to hold the next dose and notify the provider?",
                    "options": [
                        "Mild nausea after the first dose",
                        "Dry mouth and mild nausea",
                        "New fever followed by a skin rash",
                        "Diarrhea that resolved after one loose stool"
                    ],
                    "answer": 2,
                    "rationale": "The page states sulfonamide reactions typically start with fever, then a skin rash, and that HIV patients have a higher rate of adverse reactions. The closest distractor, dry mouth and mild nausea, lists real adverse effects from the page, but they are described as common across most antibiotics generally (associated with metronidazole), not the specific allergic warning pattern for Bactrim.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is providing teaching to a patient newly started on doxycycline for acne. Which statements should the nurse include? Select all that apply.",
                    "options": [
                        "\"This medication should not be used during pregnancy because it can cause permanent tooth discoloration in the developing fetus.\"",
                        "\"Take this medication with a full meal to increase absorption.\"",
                        "\"Use sunscreen and protective clothing because this drug can cause photosensitivity.\"",
                        "\"This medication kills bacteria by causing the cell wall to rupture.\"",
                        "\"This medication is approved for use in children under 8 years old without restriction.\"",
                        "\"Report any new or worsening diarrhea or unusual bruising while taking this medication.\""
                    ],
                    "answers": [
                        0,
                        2,
                        5
                    ],
                    "rationale": "Correct: tetracyclines are contraindicated in pregnancy due to enamel hypoplasia (permanent tooth discoloration), photosensitivity is a class-wide side effect, and diarrhea plus occasional thrombocytopenia (unusual bruising) are also listed class-wide effects to report. Incorrect: tetracyclines should be taken fasting since food reduces absorption, not with a full meal; they work by inhibiting protein synthesis via ribosome binding (bacteriostatic), not by rupturing the cell wall (that mechanism belongs to beta-lactams); and they are explicitly contraindicated, not approved, for children under 8.",
                    "topic": "Antimicrobials &amp; Antibiotics (ABX)",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    },
    {
        "id": "week1-antivirals",
        "label": "Antivirals",
        "week": 1,
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A nursing student asks why there are so few antiviral medications compared to antibiotics. Which explanation by the instructor is most accurate?",
                    "options": [
                        "Because a virus replicates inside human cells, so a drug that stops it risks harming the patient's own cells too",
                        "Because viruses have a thick, rigid protective cell wall that essentially no antiviral drug developed so far is able to penetrate",
                        "Because symptoms typically appear well before viral replication actually begins, leaving little time to act",
                        "Because antiviral drugs can only be given by the IV route, which severely limits their outpatient use"
                    ],
                    "answer": 0,
                    "rationale": "The page explains that because a virus lives and replicates inside the patient's own cells, a drug that kills the virus risks killing healthy cells too. The closest distractor, the cell-wall option, flips the actual fact: it is bacteria (the antibiotic target) that have a cell wall, while viruses do not.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks how antiviral medications actually get rid of a virus. What is the nurse's best explanation of the general mechanism?",
                    "options": [
                        "The antiviral directly kills viral particles circulating in the bloodstream",
                        "The antiviral inhibits viral replication, which allows the body's own immune system to clear the virus",
                        "The antiviral causes chain termination of the virus's own DNA polymerase enzyme, which kills the infected cell and the virus outright",
                        "The antiviral prevents the virus from binding to host cells, which cures the infection"
                    ],
                    "answer": 1,
                    "rationale": "The lecture states the general antiviral mechanism is inhibiting replication so the immune system can clear the virus. The closest distractor describes DNA polymerase chain termination, which the page attributes specifically to ganciclovir, not to antivirals as a class.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "The nurse is reviewing which antiviral drugs treat which viral infections. Based on the lecture content, which pairing is correct?",
                    "options": [
                        "Ganciclovir is used to treat influenza during the contagious period",
                        "Oseltamivir is the antiviral used to treat cytomegalovirus infections",
                        "Acyclovir is used to treat herpes zoster, also known as shingles",
                        "Famciclovir is the specific antiviral used to treat RSV infections"
                    ],
                    "answer": 2,
                    "rationale": "Acyclovir is used for the herpes simplex/varicella-zoster family, including shingles. The closest distractor pairs RSV with famciclovir, but the lecture explicitly names RSV without giving a specific drug for it.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing student lists acyclovir's mechanisms of action. Which of the following is NOT one of acyclovir's three mechanisms?",
                    "options": [
                        "Interferes with viral nucleic acid synthesis, stopping viral DNA and RNA synthesis",
                        "Prevents the virus from binding to the host cell so it cannot replicate further",
                        "Turns on the body's own immune system to help kill the virus",
                        "Causes chain termination of the viral DNA polymerase"
                    ],
                    "answer": 3,
                    "rationale": "The three acyclovir mechanisms on the page are nucleic acid synthesis inhibition, blocking cell binding, and immune activation. Chain termination of DNA polymerase is the closest distractor because it is a real mechanism on this page, but it belongs to ganciclovir, not acyclovir.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with genital herpes asks the nurse if acyclovir will cure the infection permanently. What is the nurse's best response?",
                    "options": [
                        "Acyclovir reduces outbreak severity and frequency, but the virus remains dormant, not eliminated",
                        "Acyclovir clears the virus completely from the body after one full course of treatment",
                        "Acyclovir is only effective while an outbreak is actively happening and provides no benefit at any other time",
                        "Acyclovir works well for a first infection but has no effect on recurrent outbreaks"
                    ],
                    "answer": 0,
                    "rationale": "The page states acyclovir decreases severity, frequency, and duration and reduces shedding, but does not eliminate the virus, which stays dormant. The closest distractor claims the virus is cleared from the body, directly contradicting the 'not a cure' point.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is receiving IV acyclovir for a severe herpes infection. Which nursing action is priority to prevent a serious complication of this route?",
                    "options": [
                        "Infuse the medication rapidly to reduce total infusion time",
                        "Ensure the IV line is very patent, or use a central line",
                        "Withhold the medication if the patient reports mild GI upset",
                        "Monitor platelet counts closely due to the patient's ITP history"
                    ],
                    "answer": 1,
                    "rationale": "The page's danger callout specifically warns that IV acyclovir can cause tissue necrosis, so the line must be very patent or a central line used. The closest distractor, platelet monitoring, is a real page fact about acyclovir and ITP, but it addresses a different caution, not the necrosis risk from the IV route.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse reviews the history of a patient about to start acyclovir and notes idiopathic thrombocytopenic purpura (ITP). What is the nurse's best action?",
                    "options": [
                        "Hold the medication permanently, since acyclovir is strictly contraindicated in every patient who has a history of ITP",
                        "Switch the administration route to topical only, to avoid any systemic effects on platelets",
                        "Give the medication with caution, since ITP means the patient already has a low starting platelet count",
                        "Change the prescription to oseltamivir instead, since it carries no hematologic risk at all"
                    ],
                    "answer": 2,
                    "rationale": "The page states acyclovir is used cautiously, not avoided, in patients with ITP. The closest distractor overstates this as a contraindication, which is stronger than what the page describes.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient newly diagnosed with genital herpes asks why the acyclovir prescription includes refills. What is the nurse's best explanation?",
                    "options": [
                        "The refills are a pharmacy error, since acyclovir is only used once",
                        "Refills are provided because acyclovir is typically taken continuously for the rest of the patient's life as ongoing suppressive therapy",
                        "Refills allow the dose to be gradually increased until the virus is eliminated",
                        "Because outbreaks can reoccur, acyclovir is often prescribed with refills for repeat treatment courses"
                    ],
                    "answer": 3,
                    "rationale": "The page states acyclovir treats both initial and recurrent outbreaks and is often prescribed with refills because outbreaks can reoccur. The closest distractor, ongoing lifelong suppressive therapy, sounds clinically plausible but is not what the page describes; the page ties refills to repeat outbreak treatment, not continuous dosing.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 55-year-old patient asks the nurse about preventing shingles. What should the nurse include when teaching about the Shingrix vaccine?",
                    "options": [
                        "Shingrix is a live vaccine that can reduce shingles risk and lessen outbreak severity if it does occur",
                        "Shingrix is an inactivated vaccine that is only recommended starting at age 65 or older",
                        "Shingrix is a vaccine that fully eliminates the herpes zoster virus from the body once it has been administered",
                        "Shingrix is a vaccine given only to patients who are already severely immunocompromised"
                    ],
                    "answer": 0,
                    "rationale": "The page states Shingrix is a live vaccine given at age 50 and older that reduces shingles risk and decreases frequency/severity of outbreaks. The closest distractor flips two details — calling it inactivated and moving the age to 65 — which contradicts the stated facts.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient calls the clinic five days after flu symptom onset asking about starting oseltamivir. What should the nurse explain about its effectiveness at this point?",
                    "options": [
                        "Oseltamivir will still fully treat the infection, since it works at any point during the illness",
                        "Oseltamivir likely won't help much now, since it must start within 48 hours of symptom onset",
                        "Oseltamivir works best only after the patient has already been hospitalized for the flu",
                        "Oseltamivir should be started now, specifically to help prevent renal impairment"
                    ],
                    "answer": 1,
                    "rationale": "The page states oseltamivir must be started before or within 48 hours of symptom onset to be effective. The closest distractor draws on the real page note about hospitalized flu patients, but flips its meaning — the page says starting outside the 48-hour window is unlikely to help even if the patient is hospitalized, not that hospitalization is when it works best.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse explains why oseltamivir is typically reserved for elderly and immunocompromised patients after flu exposure rather than given routinely for active flu symptoms. What is the primary rationale?",
                    "options": [
                        "Oseltamivir is too costly for routine use in otherwise healthy patients",
                        "Oseltamivir only comes in an IV formulation, which limits outpatient use",
                        "Reserving its use helps avoid driving viral resistance to the drug",
                        "Oseltamivir is not approved for influenza A, only influenza B"
                    ],
                    "answer": 2,
                    "rationale": "The page states oseltamivir is reserved for prophylaxis in elderly and immunocompromised patients after exposure to avoid driving flu resistance to the drug. The closest distractor flips the target-virus fact — the page says oseltamivir works best against influenza A with some action against B, not the reverse.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing student is studying oseltamivir's mechanism of action. Which statement is correct?",
                    "options": [
                        "It inhibits the viral DNA polymerase enzyme directly, causing termination of the growing viral DNA chain",
                        "It interferes with viral nucleic acid synthesis directly",
                        "It prevents the virus from binding to the host cell",
                        "It inhibits neuraminidase, an enzyme the flu virus needs to replicate"
                    ],
                    "answer": 3,
                    "rationale": "The page states oseltamivir inhibits neuraminidase, stopping viral replication. Every distractor is a real mechanism from this page, but each belongs to a different drug: DNA polymerase chain termination is ganciclovir's, and nucleic acid synthesis interference and blocking cell binding are acyclovir's.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with CMV retinitis is prescribed ganciclovir. Which route should the nurse anticipate for this specific presentation?",
                    "options": [
                        "Intraocular injection directly into the eye",
                        "Oral tablet only, to avoid systemic absorption",
                        "IV infusion through a central line only",
                        "Topical ointment applied to the affected eye"
                    ],
                    "answer": 0,
                    "rationale": "The page states CMV retinitis is treated with an intraocular injection of ganciclovir. The closest distractor, a topical ointment, is a real route on this page, but it is listed for acyclovir, not ganciclovir.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is teaching a community class about CMV. Which statement best reflects the population at risk described in the lecture?",
                    "options": [
                        "CMV is a significant concern for the general healthy population, and routine screening is recommended for all patients regardless of immune status",
                        "CMV is primarily a concern in immunocompromised patients, such as transplant recipients or those with AIDS",
                        "CMV mainly affects patients receiving prophylactic oseltamivir after flu exposure",
                        "CMV is curable with a full course of ganciclovir, unlike other viral infections"
                    ],
                    "answer": 1,
                    "rationale": "The page states CMV is only a concern in immunocompromised patients, such as transplant recipients or immunosuppressed/AIDS patients, and is not a concern for the general population. The closest distractor claims CMV is curable, which contradicts the page's statement that CMV can't be cured and causes recurrent infections.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which mechanism of action is correctly matched to ganciclovir?",
                    "options": [
                        "Inhibits neuraminidase to stop viral replication",
                        "Prevents the virus from binding to host cells",
                        "Inhibits viral DNA polymerase, causing chain termination",
                        "Turns on and strengthens the body's own immune system response in order to help kill the virus directly"
                    ],
                    "answer": 2,
                    "rationale": "The page states ganciclovir inhibits viral DNA polymerase, causing chain termination. Every distractor is a real mechanism on this page but belongs to a different drug: neuraminidase inhibition is oseltamivir's, and preventing cell binding and immune activation are acyclovir's.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is prescribed oral ganciclovir tablets after completing an IV course. What is the most important instruction the nurse should give about administration?",
                    "options": [
                        "Take the tablet only on an empty stomach to increase absorption significantly",
                        "Crush the tablet completely and mix it thoroughly into a small amount of food or a beverage before administering",
                        "Store the tablet in the refrigerator at all times to prevent degradation",
                        "Do not crush or split the tablet; wash bare skin with soap and water if contacted"
                    ],
                    "answer": 3,
                    "rationale": "The page states oral ganciclovir tablets should not be crushed or split, since contact can irritate the skin, and any exposed skin should be washed with soap and water. The closest distractor tells the patient to crush the tablet, the exact opposite of the stated instruction.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on ganciclovir develops a new infection requiring antibiotic therapy. Which medication should the nurse flag as increasing seizure risk if combined with ganciclovir?",
                    "options": [
                        "Imipenem",
                        "A nephrotoxic drug such as an aminoglycoside",
                        "Oseltamivir",
                        "Acyclovir"
                    ],
                    "answer": 0,
                    "rationale": "The page's cross-reference note specifically warns against combining ganciclovir with imipenem due to increased seizure risk. The closest distractor, acyclovir, is tempting because acyclovir itself lists seizures as a side effect, but the page names imipenem, not acyclovir, as the drug that interacts with ganciclovir to raise seizure risk.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving ganciclovir is also started on a nephrotoxic medication for an unrelated condition. What is the nurse's priority action?",
                    "options": [
                        "Discontinue ganciclovir immediately, since nephrotoxic medications are contraindicated with it",
                        "Monitor renal function closely, since ganciclovir is cleared through the kidneys",
                        "Switch the patient to IV acyclovir instead, since it carries no renal risk",
                        "Hold both medications until a hematology consult addresses pancytopenia risk"
                    ],
                    "answer": 1,
                    "rationale": "The page notes ganciclovir is cleared through the kidneys, so caution and renal monitoring are needed with other nephrotoxic drugs. The closest distractor suggests switching to IV acyclovir as having no renal risk, but the page lists renal impairment as a side effect of acyclovir as well.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is teaching a patient about to start ganciclovir. Which of the following are among the black-box warnings for this medication? Select all that apply.",
                    "options": [
                        "Hematologic toxicity, including pancytopenia",
                        "Impaired fertility in men and women of childbearing age",
                        "Fetal toxicity and birth defects",
                        "Possible carcinogenicity based on animal studies",
                        "Tissue necrosis at the IV insertion site",
                        "Renal impairment requiring dose adjustment"
                    ],
                    "answers": [
                        0,
                        1,
                        2,
                        3
                    ],
                    "rationale": "The page lists exactly four ganciclovir black-box warnings: hematologic toxicity/pancytopenia, fertility impairment, fetal toxicity/birth defects, and possible carcinogenicity. Tissue necrosis is a real risk on this page but belongs to IV acyclovir, not to ganciclovir's black-box warnings, and renal impairment is a separate caution the page ties to ganciclovir's renal clearance, not one of the four named black-box warnings.",
                    "topic": "Antivirals",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    },
    {
        "id": "week1-hiv",
        "label": "HIV &amp; Antiretroviral Therapy (ART)",
        "week": 1,
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A nursing student is reviewing the HIV life cycle. Which event occurs first when HIV encounters a susceptible host cell?",
                    "options": [
                        "The virus binds to the CD4 receptor on the host cell surface.",
                        "Reverse transcriptase converts viral RNA into a DNA copy.",
                        "HIV integrase inserts viral DNA into the host cell's genome.",
                        "New viral copies are released to infect other CD4 cells."
                    ],
                    "answer": 0,
                    "rationale": "Per the life cycle described, the virus first binds to the CD4 receptor before fusing with and entering the cell. The closest distractor, reverse transcriptase converting RNA to DNA, is the next major step but happens only after the virus has already entered the cell.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks the nurse to explain why HIV is called a 'retrovirus.' Which explanation is accurate based on the virus's life cycle?",
                    "options": [
                        "It integrates directly into host DNA without using any enzymes.",
                        "It carries RNA only and uses reverse transcriptase to copy itself into DNA.",
                        "It carries both RNA and DNA, allowing replication in any cell type.",
                        "It uses HIV integrase to convert its RNA into a protein coat."
                    ],
                    "answer": 1,
                    "rationale": "A retrovirus carries only RNA and uses reverse transcriptase to make a DNA copy inside the host cell. The closest distractor, integrating without any enzymes, is wrong because integration is performed by the enzyme HIV integrase, and it skips the reverse-transcription step entirely.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "During patient teaching about the HIV life cycle, a nurse explains the role of HIV integrase. Which statement correctly describes this enzyme's action?",
                    "options": [
                        "It binds the virus to the CD4 receptor on the host cell.",
                        "It converts the virus's RNA into a DNA copy inside the host cell.",
                        "It inserts newly made viral DNA into the host cell's own genetic material.",
                        "It assembles and releases new viral copies from the host cell."
                    ],
                    "answer": 2,
                    "rationale": "HIV integrase inserts the newly synthesized viral DNA into the host cell's genetic material. The closest distractor describes reverse transcriptase's role (making the DNA copy), a common mix-up between the two enzymes.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with advanced, untreated HIV asks why they keep developing infections they've had before and successfully fought off in the past. Which explanation reflects the pathophysiology described in the lecture?",
                    "options": [
                        "HIV destroyed the antibodies the body previously produced against those infections.",
                        "HIV's bone marrow effects immediately stopped all white blood cell production.",
                        "Rising viral load directly causes old infections to reactivate on its own.",
                        "HIV destroyed enough CD4 T cells that the immune system's long-term memory is lost."
                    ],
                    "answer": 3,
                    "rationale": "CD4 T cells provide cell-mediated immunity, the body's long-term immune memory; once enough are destroyed, that memory function is lost, leaving the person vulnerable to prior infections. The closest distractor plays off the real fact that HIV antibodies aren't effective at neutralizing the virus, but the page states these antibodies still form and persist — they are not described as destroyed.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A newly diagnosed patient asks the nurse if HIV can ever be cured with treatment. Which response is accurate based on the pathophysiology of the virus?",
                    "options": [
                        "No — HIV's DNA integrates into the host cell's genome, so infection is lifelong.",
                        "No — HIV antibodies attack and destroy the patient's own CD4 cells.",
                        "Yes — an undetectable viral load means the virus has been completely eliminated.",
                        "Yes — ART repairs reverse transcriptase so it can no longer function."
                    ],
                    "answer": 0,
                    "rationale": "Because viral DNA becomes part of the host cell's own DNA, HIV cannot be fully cleared, only suppressed — infection is lifelong. The closest distractor confuses an undetectable viral load with a cure; the page explicitly states the person is still considered HIV-positive even when viral load is undetectable.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient in the acute (early) stage of HIV infection asks whether they could have transmitted the virus before noticing any symptoms. What is the nurse's best response?",
                    "options": [
                        "\"No, a person only becomes infectious once symptoms of acute infection appear.\"",
                        "\"Yes, a person is infectious from day one, even before symptoms appear.\"",
                        "\"No, infectiousness begins only after seroconversion produces detectable antibodies.\"",
                        "\"Yes, but only once the CD4 count drops below 200 cells/mm³.\""
                    ],
                    "answer": 1,
                    "rationale": "During acute infection, the person is infectious from day one, even before symptoms appear. The closest distractor confuses infectiousness onset with seroconversion; the page notes seroconversion is when the person becomes highly infectious, not when infectiousness begins.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient recently diagnosed with HIV asks how long they could remain in the clinical latency (chronic) stage without treatment. Based on the material presented, what should the nurse explain?",
                    "options": [
                        "It typically lasts only a few weeks before progressing to symptomatic disease.",
                        "It cannot be predicted because CD4 counts remain unchanged during this stage.",
                        "Untreated, it typically lasts about 3 to 12 years before progressing.",
                        "With treatment, it always progresses to AIDS within 3 to 12 years."
                    ],
                    "answer": 2,
                    "rationale": "Untreated clinical latency typically lasts about 3-12 years; with effective treatment it can be maintained indefinitely. The closest distractor flips this framing, applying the untreated timeframe to a treated patient.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on ART has a viral load report showing a decreasing trend over the past six months. Based on the inverse relationship described between CD4 count and viral load, what should the nurse expect to see in the CD4 count?",
                    "options": [
                        "The CD4 count should decrease in proportion to the viral load.",
                        "The CD4 count should remain completely unaffected by viral load changes.",
                        "The CD4 count should drop below the AIDS-defining threshold of 200.",
                        "The CD4 count should tend to rise as the viral load falls."
                    ],
                    "answer": 3,
                    "rationale": "CD4 count and viral load move inversely — as viral load drops, CD4 count tends to rise. The closest distractor describes a direct rather than inverse relationship, the opposite of what the page states.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's labs show a CD4 count of 150 cells/mm³ with no AIDS-defining condition present. According to the CDC surveillance staging system, which stage should the nurse document?",
                    "options": [
                        "Stage 3",
                        "Stage 2",
                        "Stage 1",
                        "Stage 0"
                    ],
                    "answer": 0,
                    "rationale": "CDC Stage 3 is defined as a CD4 count under 200 cells/mm³, regardless of AIDS-defining condition status. The closest distractor, Stage 2, corresponds to the 200-499 cells/mm³ range, an easy miscalculation for a value just below 200.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a CD4 count of 550 cells/mm³ but has just been diagnosed with Kaposi sarcoma. How should the nurse classify this patient's diagnosis?",
                    "options": [
                        "HIV infection only, because the CD4 count is above the AIDS-defining threshold.",
                        "AIDS, because the presence of an AIDS-defining condition qualifies regardless of CD4 count.",
                        "Clinical latency, because the CD4 count indicates a stable immune system.",
                        "Acute infection, because Kaposi sarcoma is an early symptom of seroconversion."
                    ],
                    "answer": 1,
                    "rationale": "A diagnosis becomes AIDS if either the CD4 count drops under 200 OR an AIDS-defining condition is present, regardless of CD4 count. The closest distractor wrongly assumes CD4 count is the only qualifying criterion, ignoring the condition-based pathway.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is reviewing a patient's chart for conditions that meet AIDS-defining criteria. Select all conditions from the list below that are classified as AIDS-defining conditions.",
                    "options": [
                        "Kaposi sarcoma",
                        "Oral hairy leukoplakia",
                        "Pneumocystis pneumonia (PCP)",
                        "Tuberculosis (TB)",
                        "Periodontal disease",
                        "Wasting syndrome"
                    ],
                    "answers": [
                        0,
                        2,
                        3,
                        5
                    ],
                    "rationale": "The AIDS-defining conditions to memorize are Kaposi sarcoma, wasting syndrome, invasive candidiasis, PCP, TB, invasive cervical cancer, and HIV-related encephalopathy/AIDS dementia complex. Oral hairy leukoplakia and periodontal disease are the closest distractors — both appear on the page under Oral Manifestations as early signs of dropping CD4 counts, not as AIDS-defining conditions themselves.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is teaching a class about HIV-associated dementia (AIDS dementia complex). Which statement should be included?",
                    "options": [
                        "It occurs because antiretroviral therapy directly damages neurons.",
                        "It affects the majority of patients today, similar to rates seen before modern treatment.",
                        "It occurs because HIV crosses the blood-brain barrier and is an AIDS-defining illness.",
                        "It resolves completely once viral load becomes undetectable."
                    ],
                    "answer": 2,
                    "rationale": "HIV-associated dementia is thought to occur because HIV crosses the blood-brain barrier and is considered an AIDS-defining illness. The closest distractor is wrong because the page states it historically affected 40-60% of patients but is far less common now with modern treatment, not still affecting the majority today.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A dental hygienist notes oral hairy leukoplakia on the tongue of a patient with HIV. What should this finding prompt the nurse to consider?",
                    "options": [
                        "The patient has already met AIDS-defining diagnostic criteria based on this finding.",
                        "The patient's viral load has dropped to an undetectable level.",
                        "The patient has developed Pneumocystis pneumonia, an AIDS-defining condition.",
                        "The patient's CD4 count may be dropping, prompting regimen reassessment."
                    ],
                    "answer": 3,
                    "rationale": "Oral manifestations like oral hairy leukoplakia appear as CD4 counts begin to drop, an early sign the immune system is struggling and a cue to reassess the treatment regimen. The closest distractor is wrong because oral hairy leukoplakia is not listed among the AIDS-defining conditions on the page — it is a separate oral manifestation.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A pregnant patient with HIV asks about the risk of transmitting the virus to her baby if she takes antiretroviral therapy throughout pregnancy. What should the nurse explain?",
                    "options": [
                        "Treatment lowers the risk to less than 2%, versus 25-30% untreated.",
                        "The risk remains at 25-30% regardless of treatment status.",
                        "Treatment eliminates all transmission risk, reducing it to 0%.",
                        "The risk increases with treatment due to drug exposure to the fetus."
                    ],
                    "answer": 0,
                    "rationale": "Perinatal transmission risk is about 25-30% if the mother is untreated and less than 2% if she is treated. The closest distractor overstates protection by claiming treatment reduces risk to 0%, which the page does not state.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse experiences a needle stick injury while caring for a patient with HIV. What should the nurse understand about this exposure?",
                    "options": [
                        "The risk is essentially zero, so no reporting or follow-up is required.",
                        "The risk is still under 1%, but exposure paperwork must be completed regardless.",
                        "The risk exceeds that of unprotected anal or vaginal sex with an HIV-positive partner.",
                        "The risk is impossible to estimate because needle sticks were not studied."
                    ],
                    "answer": 1,
                    "rationale": "Needle stick risk is still under 1%, and regardless of how low the risk, any exposure still requires completing exposure paperwork/reporting. The closest distractor incorrectly assigns needle sticks the essentially-zero risk level described for face/skin splash exposure and wrongly says no follow-up is needed.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient newly diagnosed with HIV expresses fear that they could transmit the virus to family members through shared meals or hugging. Which teaching point addresses this concern accurately?",
                    "options": [
                        "HIV is spread through casual contact such as hugging, requiring home precautions.",
                        "HIV can be transmitted through saliva during kissing, so close contact should be limited.",
                        "HIV is not spread by casual, non-fluid contact such as hugging or sharing a toilet seat.",
                        "HIV can be transmitted through sharing a toilet seat if the patient has open sores."
                    ],
                    "answer": 2,
                    "rationale": "The page explicitly lists HIV as not spread by sharing a toilet seat, hugging, kissing or spit, or other casual non-fluid contact. The closest distractor wrongly claims kissing/saliva transmits HIV, which directly contradicts the page's list.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is prescribed a medication classified as a CCR5 antagonist. The nurse understands this drug works at which step of the HIV life cycle?",
                    "options": [
                        "Blocking HIV protease from processing viral proteins.",
                        "Blocking HIV integrase from inserting viral DNA into the host genome.",
                        "Blocking reverse transcriptase from copying viral RNA into DNA.",
                        "Blocking the virus from entering the cell via the CCR5 co-receptor protein."
                    ],
                    "answer": 3,
                    "rationale": "CCR5 antagonists block viral entry via the CCR5 co-receptor protein. The closest distractor describes NRTIs/NNRTIs, which act later in the cycle by inhibiting reverse transcriptase rather than blocking entry.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is providing teaching about NRTIs for a patient newly starting ART. The patient asks which adverse effect requires the closest monitoring, especially during the first couple months of treatment. Which response is correct?",
                    "options": [
                        "\"Lactic acidosis carries a black-box warning, so your lactate levels will be monitored closely.\"",
                        "\"Peripheral neuropathy carries a black-box warning, so your reflexes will be monitored closely.\"",
                        "\"Pancreatitis carries a black-box warning, so your amylase and lipase will be monitored closely.\"",
                        "\"Hepatic steatosis carries a black-box warning, so your liver enzymes will be monitored closely.\""
                    ],
                    "answer": 0,
                    "rationale": "NRTIs carry a black-box warning specifically for lactic acidosis, with lactate levels monitored especially in the first couple months of treatment. Peripheral neuropathy, pancreatitis, and hepatic steatosis are all real NRTI adverse effects listed on the page, but none of them is tied to the black-box warning — making the pancreatitis option the closest tempting distractor since it is also a serious listed effect.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is reviewing a new prescription for a patient starting ART for the first time. A typical initial regimen should include which combination of drug classes?",
                    "options": [
                        "One NRTI plus one NNRTI only.",
                        "Two NRTIs plus a third agent from another class.",
                        "Three drugs from the same class to maximize effectiveness.",
                        "One fusion inhibitor plus one CCR5 antagonist only."
                    ],
                    "answer": 1,
                    "rationale": "A typical ART regimen is three drugs: two NRTIs plus a third agent from a different class. The closest distractor, one NRTI plus one NNRTI, describes only two reverse-transcriptase-inhibiting drugs rather than the two-NRTI-plus-third-agent structure described on the page.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on ART asks whether they still need to disclose their HIV status to sexual partners now that their viral load is undetectable. What should the nurse explain?",
                    "options": [
                        "\"No, an undetectable viral load means you are no longer HIV-positive.\"",
                        "\"Yes, because an undetectable viral load still carries the same transmission risk as an untreated infection.\"",
                        "\"An undetectable viral load means there's effectively no risk of transmitting HIV, but you're still HIV-positive.\"",
                        "\"An undetectable viral load means your CD4 count has returned to normal and treatment can be stopped.\""
                    ],
                    "answer": 2,
                    "rationale": "An undetectable viral load means effectively no risk of transmitting HIV to others, but the person is still considered HIV-positive. The closest distractor wrongly claims the person is no longer HIV-positive, contradicting the page's statement that they remain HIV-positive.",
                    "topic": "HIV &amp; Antiretroviral Therapy (ART)",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    },
    {
        "id": "pathopharm-review",
        "label": "Pathopharm Review",
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A patient's medication list shows 'acetaminophen 500mg,' while the bottle in their bag is labeled 'Tylenol.' Which naming convention does 'acetaminophen' represent?",
                    "options": [
                        "The generic name",
                        "The trade name",
                        "The chemical name",
                        "The prototype name"
                    ],
                    "answer": 0,
                    "rationale": "Acetaminophen is the official, single generic name — lowercase, used on exams/NCLEX and in the medical record. Tylenol is the trade name (the manufacturer's capitalized brand), the chemical name would be a long research-oriented name like acetylparaminophenol, and 'prototype' describes a class's first/reference drug, not a naming category.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing instructor explains that ibuprofen is used as the standard comparison point when evaluating the effectiveness and side effects of newer NSAIDs. What is ibuprofen serving as in this context?",
                    "options": [
                        "The trade name for the NSAID class",
                        "A Schedule III controlled substance",
                        "An enteral-only medication",
                        "The prototype drug for the NSAID class"
                    ],
                    "answer": 3,
                    "rationale": "A prototype drug is the first drug in a class, used as the benchmark for comparing newer drugs in that same class — exactly the role described. Ibuprofen isn't a trade name (that's a specific brand like Advil), isn't a controlled substance, and 'enteral-only' isn't a real limitation tied to prototype status.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking an antihypertensive develops a blood pressure so low they become dizzy and nearly faint — well beyond the intended reduction. How should this effect be classified?",
                    "options": [
                        "A therapeutic effect",
                        "A toxic/adverse effect",
                        "An expected side effect",
                        "An allergic reaction"
                    ],
                    "answer": 1,
                    "rationale": "Dropping well past the intended therapeutic range into a harmful, dangerous effect is toxicity/an adverse effect. The therapeutic effect would be the intended, controlled blood pressure reduction; a side effect is an unintended but typically minor/expected effect at a normal dose; and an allergic reaction is an immune response (hives, anaphylaxis), not a dose-related exaggeration of the drug's action.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "After years on the market, a drug is found to carry a pattern of severe, sometimes fatal reactions in a subset of patients. The FDA responds by requiring the strictest warning a drug can carry while still remaining available. What is this called?",
                    "options": [
                        "A black box warning",
                        "A Schedule I reclassification",
                        "A Phase 2 clinical hold",
                        "An OTC restriction"
                    ],
                    "answer": 0,
                    "rationale": "A black box warning is the FDA's strictest warning short of pulling a drug from the market entirely, added when post-market (Phase 4) monitoring reveals a pattern of severe reactions. Schedule I reclassification is about abuse potential, not safety warnings; a Phase 2 hold happens during pre-market testing, not after years on the market; and OTC restriction is about purchase access, not a safety label.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following statements about Schedule II controlled substances are true? Select all that apply.",
                    "options": [
                        "They have a high potential for abuse but some accepted medical use",
                        "They have no accepted medical use",
                        "Automatic refills are not permitted — a new prescription is required each time",
                        "Examples include opioids like hydromorphone and oxycodone",
                        "They have a very low potential for abuse"
                    ],
                    "answers": [
                        0,
                        2,
                        3
                    ],
                    "rationale": "Schedule II drugs have a high abuse potential but a recognized medical use (like hydromorphone and oxycodone), and they cannot be auto-refilled — a new prescription is required every time. 'No accepted medical use' describes Schedule I, not II, and 'very low abuse potential' describes drugs much further down the schedule (like Schedule V), not Schedule II.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A medication label warns against taking the drug with grapefruit juice. What is the most likely reason for this warning?",
                    "options": [
                        "Grapefruit juice increases gastric motility, reducing absorption",
                        "Grapefruit juice is a CYP450 inducer, reducing the drug's therapeutic effect",
                        "Grapefruit juice is a CYP450 inhibitor, which can cause the drug to build up to toxic levels",
                        "Grapefruit juice binds the drug in the GI tract, preventing absorption entirely"
                    ],
                    "answer": 2,
                    "rationale": "Grapefruit juice is a well-known CYP450 enzyme inhibitor, so it slows metabolism of drugs that rely on that pathway, letting the drug build up toward toxic levels. It is not an inducer (an inducer would speed metabolism up and reduce drug effect, the opposite problem), and it does not act by changing gastric motility or by directly binding the drug in the gut.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with liver disease and low albumin is started on warfarin, which is normally 97-99% protein-bound. What is the primary concern with this patient?",
                    "options": [
                        "The drug will have reduced bioavailability due to first-pass metabolism",
                        "The drug will be unable to cross the blood-brain barrier",
                        "More warfarin will circulate unbound and active, raising bleeding risk",
                        "The patient's CYP450 enzymes will become inducers instead of substrates"
                    ],
                    "answer": 2,
                    "rationale": "Only unbound drug is pharmacologically active; low albumin means less protein available to bind the drug, so more stays free/active — a real concern for a highly protein-bound, narrow-therapeutic-index drug like warfarin. Bioavailability/first-pass is a liver-metabolism concept tied to oral absorption, not protein binding; blood-brain barrier crossing depends on lipid solubility, not albumin; and CYP450 enzymes don't 'become' inducers — that's a separate metabolic pathway concept.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is caring for a patient on warfarin, a drug with a narrow therapeutic index. What does this mean for how the drug should be managed?",
                    "options": [
                        "There is a wide margin between a therapeutic dose and a toxic dose",
                        "The drug has a very short half-life and must be given multiple times a day",
                        "The drug cannot be given to older adults under any circumstances",
                        "There is a small margin between a therapeutic dose and a toxic dose, requiring close monitoring"
                    ],
                    "answer": 3,
                    "rationale": "A narrow therapeutic index means the effective dose and the toxic dose are close together, so the drug needs close monitoring (like warfarin's INR checks) to stay in a safe range. A wide margin describes the opposite (a wide/safe therapeutic index), and narrow therapeutic index is a safety-margin concept — it doesn't by itself describe half-life or forbid use in a specific age group.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A medication has a half-life of about 6 hours. Roughly how long will it take for the drug to reach steady state?",
                    "options": [
                        "6 hours",
                        "24-30 hours",
                        "12 hours",
                        "72 hours"
                    ],
                    "answer": 1,
                    "rationale": "Steady state takes about 4-5 half-lives to reach, so 4-5 x 6 hours is roughly 24-30 hours. One half-life (6 hours) only gets the drug to 50% elimination, not steady state; 12 hours is just 2 half-lives; and 72 hours would be 12 half-lives, far beyond what's needed.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is prescribed a fentanyl transdermal patch. Which route of administration does this represent?",
                    "options": [
                        "Enteral",
                        "Parenteral",
                        "Sublingual",
                        "Topical"
                    ],
                    "answer": 3,
                    "rationale": "A transdermal patch is applied to the body surface, making it a topical route. Enteral routes go through the GI tract (oral, sublingual, buccal, rectal) — sublingual is actually a subtype of enteral, not a separate category here — and parenteral routes are typically injections, neither of which describes a patch applied to skin.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient takes diphenhydramine (Benadryl) for seasonal allergies. Which best describes how this drug works?",
                    "options": [
                        "It is an antagonist that blocks histamine from binding to its receptor",
                        "It is an agonist that binds histamine receptors to produce an allergic response",
                        "It works through a receptor-less chemical interaction, similar to an antacid",
                        "It is a CYP450 inhibitor that reduces histamine metabolism"
                    ],
                    "answer": 0,
                    "rationale": "Diphenhydramine is an antagonist — it binds histamine receptors without activating them, blocking histamine's effects. An agonist would activate the receptor and cause the allergic response rather than relieve it (the opposite mechanism), and antihistamines work through receptor binding, not a receptor-less chemical reaction or CYP450 inhibition.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient overdoses on opioids and is given naloxone (Narcan), which reverses the opioid's effects. What type of drug interaction does this represent?",
                    "options": [
                        "An additive effect",
                        "Synergism/potentiation",
                        "An antidote",
                        "A pharmacogenomic reaction"
                    ],
                    "answer": 2,
                    "rationale": "An antidote is a drug given specifically to reverse/antagonize another drug's toxic effects — exactly naloxone's role with opioids. Additive effect is two similar-mechanism drugs combining on purpose for a stronger effect (not a reversal), synergism is two different-mechanism drugs combining for a greater-than-either effect, and pharmacogenomics is about how a person's genes affect drug response, unrelated to this reversal scenario.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is transcribing a medication order and needs to write a dose of one-quarter milligram. Which of the following follows correct medication safety writing conventions?",
                    "options": [
                        "1.0 mg",
                        "0.25 mg",
                        ".25 mg",
                        "0.250 mg"
                    ],
                    "answer": 1,
                    "rationale": "Medication safety convention calls for a leading zero before a decimal (0.25 mg) and no trailing zeros, since a trailing zero or a missing leading zero can be misread and cause a tenfold dosing error. '1.0 mg' has an unnecessary trailing zero (and is also the wrong dose), '.25 mg' is missing the leading zero, and '0.250 mg' has an unnecessary trailing zero after the decimal.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "For a drug to be approved for over-the-counter (OTC) sale, which of the following must be true?",
                    "options": [
                        "The consumer must be able to diagnose the condition and monitor the drug's effectiveness themselves",
                        "The drug must have a narrow therapeutic index",
                        "The drug must be a Schedule III or higher controlled substance",
                        "The drug must require a prototype comparison before sale"
                    ],
                    "answer": 0,
                    "rationale": "OTC status requires that the drug is safe with low risk of side effects/abuse, and that an ordinary consumer can self-diagnose the condition and monitor whether the drug is working, without a prescriber's oversight. A narrow therapeutic index is the opposite of what makes a drug OTC-safe, controlled substances are not sold OTC at all, and there's no 'prototype comparison' requirement for OTC approval.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "The nurse is caring for a patient who reports feeling nauseous and dizzy. The nurse also notes a heart rate of 118 bpm, wheezes on lung auscultation, and a pulse oximetry reading of 94%. Which of these findings is a symptom rather than a sign?",
                    "options": [
                        "Wheezes heard on auscultation",
                        "Heart rate of 118 bpm",
                        "A pulse oximetry reading of 94%",
                        "The patient reporting nausea"
                    ],
                    "answer": 3,
                    "rationale": "A symptom is subjective data — something the patient reports, like nausea. The other three findings are all objective data the clinician directly measures or observes (auscultation, heart rate, pulse oximetry), which makes them signs, not symptoms — including the pulse oximetry reading, which can look 'subjective' as a self-reported-feeling but is actually a measured value.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with a high fever has flushed, diaphoretic skin. Which physiologic process best explains this presentation?",
                    "options": [
                        "Increased insulin release to lower blood glucose",
                        "Bronchodilation to improve gas exchange",
                        "Vasodilation and sweat gland activation to lose heat",
                        "Vasoconstriction and shivering to conserve heat"
                    ],
                    "answer": 2,
                    "rationale": "When body temperature rises, blood vessels dilate (causing flushing) and sweat glands secrete fluid — both mechanisms help the body lose heat back toward its normal range. Vasoconstriction and shivering are the opposite response, used to conserve heat when temperature drops too low, not too high.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is best classified as an intrinsic factor in the development of disease?",
                    "options": [
                        "A genetic mutation affecting protein production",
                        "Exposure to a respiratory virus",
                        "Chronic cigarette smoking",
                        "Exposure to an environmental toxin"
                    ],
                    "answer": 0,
                    "rationale": "Intrinsic factors come from inside the body — genetics is a classic example. Viral exposure, smoking, and environmental toxins are all extrinsic factors, since they originate outside the body.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which components make up the epidemiologic triangle used to understand the development of disease? Select all that apply.",
                    "options": [
                        "Pathogen (agent)",
                        "Host",
                        "Environment",
                        "Diagnosis",
                        "Prognosis"
                    ],
                    "answers": [
                        0,
                        1,
                        2
                    ],
                    "rationale": "The epidemiologic triangle is pathogen (agent), host, and environment — disease risk emerges when all three come together. Diagnosis and prognosis are real disease-process terms from this same topic, but they aren't part of the epidemiologic triangle itself, which makes them good near-miss distractors rather than throwaway options.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse explains to a patient with newly diagnosed heart failure that their condition has a good chance of improving with treatment and lifestyle changes. Which disease process is the nurse describing?",
                    "options": [
                        "Etiology",
                        "Prognosis",
                        "Diagnosis",
                        "Occurrence"
                    ],
                    "answer": 1,
                    "rationale": "Prognosis is the expected disease course or outcome — the likelihood of returning to baseline. Diagnosis is naming the disease (already done here), etiology is its cause, and occurrence describes how often/when symptoms happen — none of those describe an expected outcome.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has had the varicella-zoster virus dormant in their body for years before it reactivates as shingles. Which term describes this type of disease onset?",
                    "options": [
                        "Insidious onset",
                        "Prodromal onset",
                        "Idiopathic onset",
                        "Latent onset"
                    ],
                    "answer": 3,
                    "rationale": "Latent onset describes a disease process that is present but inactive, capable of becoming active again later — exactly the chickenpox-to-shingles pattern. Insidious is slow/gradual symptom progression (not dormancy), prodromal is the early warning signs right before a disease becomes active, and idiopathic describes an unknown cause, not a timing pattern.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient develops a bowel perforation as a complication of a colonoscopy. Which term best classifies the cause of this complication?",
                    "options": [
                        "Iatrogenic",
                        "Idiopathic",
                        "Exacerbation",
                        "Prodromal"
                    ],
                    "answer": 0,
                    "rationale": "Iatrogenic means the healthcare field itself caused the disease or complication — here, the procedure caused the perforation. Idiopathic means the cause is unknown (this cause is well known), exacerbation is a worsening of an existing chronic disease, and prodromal describes early warning signs, not a cause category.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's lab results show leukopenia. What does this finding indicate?",
                    "options": [
                        "An elevated white blood cell count",
                        "Inflammation of white blood cell-producing tissue",
                        "A decreased white blood cell count",
                        "A disease process affecting white blood cells"
                    ],
                    "answer": 2,
                    "rationale": "The suffix '-penia' means a lack of or deficiency, so leukopenia is a decreased white blood cell count. '-Cytosis' (not '-penia') would indicate an elevated count; '-itis' would indicate inflammation; '-pathy' would indicate a disease process — all different suffixes with different meanings.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which term correctly describes a blood pressure reading that is above the normal range?",
                    "options": [
                        "Hypotensive",
                        "Normotensive",
                        "Hypoactive",
                        "Hypertensive"
                    ],
                    "answer": 3,
                    "rationale": "The prefix 'hyper-' means above/over, so hypertensive describes a high blood pressure reading. 'Hypo-' (hypotensive) means below/low — the opposite direction — and normotensive/hypoactive don't describe an elevated reading at all.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is best classified as an extrinsic factor in the development of disease?",
                    "options": [
                        "A genetic predisposition inherited from a parent",
                        "Chronic exposure to secondhand smoke",
                        "An autoimmune attack on pancreatic beta cells",
                        "An underproduction of thyroid hormone"
                    ],
                    "answer": 1,
                    "rationale": "Extrinsic factors come from outside the body — secondhand smoke exposure is an environmental/lifestyle example. A genetic predisposition, an autoimmune attack, and a hormone production problem are all intrinsic factors, since they originate from inside the body.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient who has been immobile in a leg cast for 8 weeks shows decreased muscle mass in that leg. Which cellular adaptation does this represent?",
                    "options": [
                        "Atrophy",
                        "Hypertrophy",
                        "Hyperplasia",
                        "Dysplasia"
                    ],
                    "answer": 0,
                    "rationale": "Atrophy is a decrease in cell size (and resulting tissue mass) from disuse — exactly what happens to muscle immobilized in a cast. Hypertrophy and hyperplasia both describe tissue growing larger (from bigger cells or more cells, respectively), the opposite direction, and dysplasia describes abnormal cell size/shape/organization, not a size decrease from disuse.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A pathology report describes cervical cells with abnormal size, shape, and organization — the cells are still a normal mature cell type, and the changes are reversible. Which term does this describe?",
                    "options": [
                        "Neoplasia",
                        "Dysplasia",
                        "Metaplasia",
                        "Anaplasia"
                    ],
                    "answer": 1,
                    "rationale": "Dysplasia is abnormal cell size, shape, and organization within a still-recognizable, still-mature cell type — and it is reversible if the cause is removed. Metaplasia is one mature cell type replacing another (not abnormal size/shape within the same type), neoplasia is new, uncontrolled tissue growth, and anaplasia is a loss of cell differentiation seen in malignancy — a further, less reversible step than dysplasia.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A wound produces thick, foul-smelling, yellow-green drainage with high levels of neutrophils and protein. Which type of exudate is this, and what does it suggest?",
                    "options": [
                        "Serous — mild inflammation",
                        "Serosanguineous — a normal postoperative finding",
                        "Purulent — a bacterial infection",
                        "Hemorrhagic — active bleeding"
                    ],
                    "answer": 2,
                    "rationale": "Purulent exudate is thick, opaque, and neutrophil/protein-rich, and it points to a bacterial infection. Serous is thin and watery (mild inflammation, no infection), serosanguineous is thin and blood-tinged (common and expected after surgery), and hemorrhagic is heavily blood-tinged from active bleeding — none match this thick, foul-smelling description.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A mother who recently had COVID-19 breastfeeds her infant. Which antibody passed through breast milk provides the infant with passive immunity?",
                    "options": [
                        "IgG",
                        "IgM",
                        "IgE",
                        "IgA"
                    ],
                    "answer": 3,
                    "rationale": "IgA is the antibody found in breast milk (and other body secretions), so it is the one that transfers passive immunity to a breastfeeding infant. IgG crosses the placenta (a different passive-immunity route, not breast milk), IgM is the first antibody made in a new infection, and IgE is associated with allergic responses — none of those are the breast-milk antibody.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse reviews culture results showing an organism resistant to all antibiotics in the carbapenem class. Which term describes this organism?",
                    "options": [
                        "CRE (carbapenem-resistant Enterobacteriaceae)",
                        "MRSA",
                        "MDRO",
                        "Colonization"
                    ],
                    "answer": 0,
                    "rationale": "CRE specifically names Enterobacteriaceae resistant to carbapenem antibiotics. MRSA is a different specific organism (methicillin-resistant Staph aureus, not carbapenem-related), MDRO is the broader umbrella term for any multidrug-resistant organism (a plausible near-miss, but not the specific carbapenem-resistant term the question is asking for), and colonization describes an organism's presence without infection, not a resistance pattern.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient develops severe, watery, orange-tinged diarrhea one month after completing IV antibiotics for pneumonia. A stool PCR is ordered instead of a culture. Which organism is most likely responsible, and why is PCR used?",
                    "options": [
                        "Candida albicans; fungal organisms can't be detected by PCR",
                        "Clostridium difficile; a stool culture would take too long, so PCR checks for a specific DNA marker instead",
                        "MRSA; stool cultures cannot detect resistant bacteria",
                        "A carbapenem-resistant organism; PCR is required for all carbapenem testing"
                    ],
                    "answer": 1,
                    "rationale": "C. diff is the classic post-antibiotic superinfection causing watery, foul, orange-tinged diarrhea, and PCR is used because it detects the organism's DNA marker faster than waiting on a culture to grow. Candida is a fungal superinfection but presents differently (thrush/vaginal, not this diarrhea pattern) and the PCR reasoning given for it is wrong; MRSA and carbapenem-resistant organisms are not the antibiotic-associated diarrhea organism being described here.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which lipoprotein is often referred to as 'good cholesterol' because higher levels decrease the risk of adverse cardiovascular events?",
                    "options": [
                        "HDL",
                        "LDL",
                        "VLDL",
                        "Total cholesterol"
                    ],
                    "answer": 0,
                    "rationale": "HDL (high-density lipoprotein) is the 'good' cholesterol — higher HDL levels decrease cardiovascular risk. LDL is the 'bad' cholesterol (increases atherosclerosis risk), VLDL is mostly triglycerides and isn't measured directly, and total cholesterol is a combined score, not a single lipoprotein.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "About three-quarters of the cholesterol in a person's body comes from which source?",
                    "options": [
                        "Dietary (exogenous) intake",
                        "Absorption through the skin",
                        "Breakdown of muscle tissue",
                        "Production by the liver (endogenous)"
                    ],
                    "answer": 3,
                    "rationale": "About three-quarters of the body's cholesterol is endogenous — produced by the liver via the HMG-CoA reductase pathway. Only about a quarter comes from diet (exogenous), and cholesterol is not absorbed through skin or produced by muscle breakdown.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 22-year-old with a strong family history of high cholesterol is started on a statin but shows little improvement in LDL levels despite good adherence. What is the most likely explanation?",
                    "options": [
                        "The patient has hyperuricemia from an unrelated condition",
                        "The patient likely has familial hypercholesterolemia, which involves a defect in LDL receptors that statins rely on",
                        "The patient is not taking the statin with food",
                        "The patient has VLDL-predominant hyperlipidemia, which statins cannot treat"
                    ],
                    "answer": 1,
                    "rationale": "Familial hypercholesterolemia involves a genetic defect in liver LDL receptors — since statins work by prompting the liver to build more LDL receptors, patients with this defect respond poorly. Hyperuricemia is a thiazide diuretic concern, not a statin-response issue; taking with food only affects GI tolerability, not LDL-lowering; and there's no such thing as a statin-resistant 'VLDL-predominant' category taught in this course.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the first step in the development of atherosclerotic plaque?",
                    "options": [
                        "Platelet aggregation forming a thrombus",
                        "Macrophages converting into foam cells",
                        "Formation of a lipid core",
                        "Injury to the endothelium, such as from smoking or chronic hypertension"
                    ],
                    "answer": 3,
                    "rationale": "Plaque formation begins with an injury to the endothelium (from smoking, chronic hemodynamic wall stress/hypertension, or hyperglycemia), which increases permeability and lets LDL under the vessel wall. Foam cell formation, lipid core buildup, and thrombus formation all happen later in the sequence, not first.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "In atherosclerosis, what are 'foam cells,' and how do they form?",
                    "options": [
                        "Platelets that aggregate at the site of a plaque rupture",
                        "Endothelial cells that have become permeable",
                        "Macrophages that have engulfed trapped LDL/lipids in the vessel wall",
                        "Smooth muscle cells that have hypertrophied in response to pressure"
                    ],
                    "answer": 2,
                    "rationale": "Foam cells are macrophages that arrive at the site of endothelial injury and engulf the LDL that has leaked under the vessel wall — their accumulation appears as fatty streaks and is an early step in plaque development. Platelet aggregation happens later (at plaque rupture), and foam cells are not endothelial or smooth muscle cells themselves.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's C-reactive protein (CRP) level is elevated. What does this finding tell the clinician?",
                    "options": [
                        "The patient definitely has significant coronary atherosclerosis",
                        "The patient has a nonspecific marker of systemic inflammation, which may suggest increased atherosclerosis risk",
                        "The patient's LDL receptors are defective",
                        "The patient's statin dose needs to be doubled immediately"
                    ],
                    "answer": 1,
                    "rationale": "CRP is a nonspecific marker of systemic inflammation — an elevated level can suggest increased atherosclerosis risk but is not a definitive test for it, since there's no simple blood test that confirms atherosclerosis directly. It says nothing about LDL receptor function, and it isn't a trigger for automatically changing statin dosing.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How do statins (HMG-CoA reductase inhibitors) lower LDL levels in the blood?",
                    "options": [
                        "They directly bind and neutralize circulating LDL particles",
                        "They increase urinary excretion of cholesterol",
                        "They block cholesterol production, prompting the liver to build more LDL receptors that pull LDL from the blood",
                        "They block the small intestine from absorbing dietary cholesterol"
                    ],
                    "answer": 2,
                    "rationale": "Statins block HMG-CoA reductase, reducing the liver's own cholesterol production; the liver responds by building more LDL receptors, which pull LDL out of the bloodstream. Statins don't bind LDL directly, don't work through urinary excretion, and blocking intestinal cholesterol absorption is how ezetimibe works, not statins.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on long-term statin therapy reports new muscle pain and dark, tea-colored urine. What complication should the nurse suspect?",
                    "options": [
                        "A normal, expected side effect requiring no action",
                        "Hepatotoxicity from statin-induced liver damage",
                        "An allergic reaction to the statin",
                        "Rhabdomyolysis, which can lead to acute kidney failure"
                    ],
                    "answer": 3,
                    "rationale": "Muscle pain plus dark urine is a classic presentation of rhabdomyolysis — muscle fiber breakdown whose byproducts can cause acute kidney failure, a serious statin adverse effect that needs prompt evaluation. This is not a benign expected effect; hepatotoxicity would show as liver-related signs (elevated AST/ALT, jaundice) rather than muscle pain and dark urine, and nothing here suggests an allergic reaction.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why are patients typically advised to take their statin medication at night?",
                    "options": [
                        "The liver produces more cholesterol at night, so this is when the drug is most effective",
                        "Statins cause severe daytime drowsiness",
                        "Nighttime dosing prevents the dry cough side effect",
                        "Statins must be taken on an empty stomach, which is easiest at night"
                    ],
                    "answer": 0,
                    "rationale": "The liver makes more cholesterol at night, so taking a statin at night — especially a shorter-half-life one like simvastatin or rosuvastatin — lines up the drug's peak effect with peak cholesterol production. Statins aren't known for causing significant daytime drowsiness, the dry cough is an ACE inhibitor side effect (not related to statin timing), and statins don't require an empty stomach.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How does ezetimibe (Zetia) lower cholesterol levels?",
                    "options": [
                        "It blocks HMG-CoA reductase in the liver",
                        "It binds bile acids in the GI tract to increase their excretion",
                        "It directly inhibits renin release from the kidney",
                        "It blocks the small intestine's ability to absorb cholesterol from diet and bile"
                    ],
                    "answer": 3,
                    "rationale": "Ezetimibe blocks the small intestine's absorption of cholesterol, from both dietary intake and bile — a different mechanism than statins. Blocking HMG-CoA reductase is how statins work, binding bile acids describes a different secondary drug class (bile acid sequestrants) not covered in detail here, and renin inhibition is unrelated to cholesterol-lowering drugs entirely.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the initial trigger that starts the RAS (renin-angiotensin-aldosterone) cascade?",
                    "options": [
                        "Elevated blood pressure sensed by the aorta",
                        "Decreased renal perfusion, which causes the kidney to release renin",
                        "High potassium levels sensed by the adrenal gland",
                        "Increased cardiac output sensed by the left ventricle"
                    ],
                    "answer": 1,
                    "rationale": "The RAS cascade begins with decreased renal perfusion (low blood volume or pressure), which triggers the kidney to release renin, setting off the rest of the cascade. Elevated blood pressure would suppress, not trigger, this cascade; the cascade isn't triggered by potassium sensing in the adrenal gland; and increased cardiac output is the opposite of the low-perfusion state that activates RAS.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What are the two main effects of angiotensin II once it is formed?",
                    "options": [
                        "Vasodilation and increased sodium excretion",
                        "Bronchodilation and decreased heart rate",
                        "Potent vasoconstriction and stimulation of aldosterone release",
                        "Direct inhibition of renin release"
                    ],
                    "answer": 2,
                    "rationale": "Angiotensin II is a potent vasoconstrictor and it stimulates the adrenal glands to release aldosterone, which causes sodium/water retention — together these raise blood pressure. Vasodilation and increased sodium excretion describe the opposite effect (closer to what ARBs/ACE inhibitors produce by blocking this pathway); angiotensin II has no role in bronchodilation or renin inhibition.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's blood pressure reads 128/86. Using the 2019 AHA classification, how should this be categorized, and why?",
                    "options": [
                        "Hypertension Stage 1, because the diastolic value alone (86) meets that threshold, and Stage 1 only requires one number to qualify",
                        "Elevated, because the systolic value (128) falls in the Elevated range",
                        "Normal, because the systolic value is below 130",
                        "Hypertension Stage 2, because any diastolic value above 80 automatically qualifies as Stage 2"
                    ],
                    "answer": 0,
                    "rationale": "Stage 1 hypertension uses 'or' logic — only one number needs to meet the threshold (systolic 130-139 OR diastolic 80-89). Here, the diastolic of 86 alone qualifies as Stage 1, even though the systolic of 128 would only read as Elevated on its own. Elevated and Normal both require BOTH numbers to qualify ('and' logic), which isn't the case here, and Stage 2 requires a diastolic above 90, not just above 80.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is diagnosed with hypertension caused by a pheochromocytoma (an adrenal medullary tumor). How should this hypertension be classified and managed?",
                    "options": [
                        "Primary hypertension, managed the same way as any other case of essential hypertension",
                        "Secondary hypertension, managed by treating the underlying tumor",
                        "Hypertensive emergency, requiring immediate IV medication regardless of blood pressure reading",
                        "Primary hypertension, since pheochromocytoma is a genetic risk factor"
                    ],
                    "answer": 1,
                    "rationale": "A pheochromocytoma is a known, identifiable cause of hypertension, which makes this secondary hypertension — managed by treating the underlying cause (the tumor). Primary hypertension has no single known cause, so a hypertension with a clearly identified tumor source doesn't fit that category, and classification as an emergency depends on the blood pressure reading and presence of end-organ damage, not simply having a secondary cause.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the key clinical feature that distinguishes hypertensive emergency from hypertensive urgency?",
                    "options": [
                        "Hypertensive emergency requires a systolic reading above 200, while urgency does not",
                        "Hypertensive emergency only occurs in patients with secondary hypertension",
                        "Hypertensive emergency involves evidence of end-organ damage; urgency does not",
                        "Hypertensive emergency is treated with oral medication, while urgency is treated with IV medication"
                    ],
                    "answer": 2,
                    "rationale": "Both hypertensive urgency and emergency share the same blood pressure threshold (systolic ≥180 and/or diastolic ≥120) — what separates them is that emergency involves signs of end-organ damage (headache, vision changes, stroke, chest pain), while urgency does not. There's no separate, higher systolic cutoff for emergency, it isn't limited to secondary hypertension, and the treatment routes are reversed from what's listed — emergency gets IV medication, urgency gets oral.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is caring for a patient on hydrochlorothiazide who also has a history of gout. What should the nurse monitor for?",
                    "options": [
                        "Hypokalemia and hyperuricemia, both of which thiazide diuretics can worsen",
                        "Hyperkalemia, since thiazide diuretics spare potassium",
                        "Ototoxicity, a known thiazide side effect",
                        "Rebound hypertension if the medication is stopped abruptly"
                    ],
                    "answer": 0,
                    "rationale": "Thiazide diuretics can cause hypokalemia and hyperuricemia — the hyperuricemia is a specific concern in patients with gout, since it can worsen gout flares. Thiazides cause potassium LOSS, not sparing (that's spironolactone's role), ototoxicity is a loop diuretic risk, and rebound hypertension with abrupt discontinuation is a beta blocker/clonidine concern, not a diuretic one.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why must IV furosemide (Lasix) be administered slowly rather than as a rapid IV push?",
                    "options": [
                        "Rapid administration increases the risk of hyperkalemia",
                        "Rapid administration increases the risk of rebound hypertension",
                        "Rapid administration increases the risk of angioedema",
                        "Rapid administration increases the risk of ototoxicity"
                    ],
                    "answer": 3,
                    "rationale": "Furosemide carries a risk of ototoxicity (hearing problems), usually transient, and giving it slowly via IV helps reduce that risk. It causes potassium LOSS (hypokalemia), not hyperkalemia; rebound hypertension is a beta blocker/clonidine discontinuation concern; and angioedema is an ACE inhibitor risk, not a loop diuretic one.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is about to administer a scheduled dose of metoprolol. The patient's last blood pressure and heart rate were recorded 3 hours ago. What should the nurse do first?",
                    "options": [
                        "Administer the dose as scheduled, since vitals were recently checked",
                        "Reassess blood pressure and heart rate immediately before giving the dose",
                        "Hold the dose permanently and notify the provider",
                        "Give the dose but document that vitals were not rechecked"
                    ],
                    "answer": 1,
                    "rationale": "Blood pressure and heart rate must be reassessed immediately before every beta blocker dose, not relied on from hours earlier, given the risk of hypotension and bradycardia. The dose should only be held (not given) if heart rate is below 60 or systolic blood pressure is below 100 after that fresh check — administering without rechecking, or documenting a skipped check, both skip a required safety step.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient starting lisinopril develops swelling around the eyes, lips, and throat with difficulty breathing shortly after the first dose. What is happening, and how serious is it?",
                    "options": [
                        "First-dose hypotension, a common and expected effect that will resolve on its own",
                        "A dry cough progressing to airway irritation, requiring only reassurance",
                        "Angioedema, a rare but life-threatening reaction involving laryngeal swelling",
                        "Hyperkalemia, which typically presents with facial swelling"
                    ],
                    "answer": 2,
                    "rationale": "Swelling of the eyes, lips, and especially the throat/larynx with breathing difficulty is angioedema — a rare (0.1-0.7% overall, higher in African American/Black patients) but life-threatening ACE inhibitor reaction that can close the airway. This is not the common dry cough side effect, not first-dose hypotension (which presents as lightheadedness/fainting risk, not swelling), and hyperkalemia doesn't cause facial or airway swelling.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following are recognized secondary causes of hyperlipidemia? Select all that apply.",
                    "options": [
                        "Hypothyroidism",
                        "Bile duct obstruction",
                        "Certain medications, such as diuretics and glucocorticoids",
                        "Hyperthyroidism",
                        "Increased physical activity"
                    ],
                    "answers": [
                        0,
                        1,
                        2
                    ],
                    "rationale": "Recognized secondary causes include hypothyroidism (an altered-metabolism disorder), bile duct obstruction (which blocks cholesterol from being secreted into bile), and certain medications like diuretics, glucocorticoids, cyclosporine, and amiodarone. Hyperthyroidism is the opposite condition from the one actually implicated (hypothyroidism), and increased physical activity is a protective behavior that helps lower lipid levels, not a cause of hyperlipidemia.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's hemoglobin A1c results at 6.8%. Based on standard diagnostic criteria, how should this be classified?",
                    "options": [
                        "Normal",
                        "Prediabetes",
                        "Diabetes",
                        "Insufficient data to classify"
                    ],
                    "answer": 2,
                    "rationale": "An A1c of 6.5% or above is diagnostic of diabetes. Normal is roughly 5-5.5%, and prediabetes is 5.7-6.4% — 6.8% falls above the diabetes threshold.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with hyperglycemia reports being abnormally hungry, explaining that it's due to the breakdown of fat and protein and cellular starvation. Which of the classic 'three P's' does this describe?",
                    "options": [
                        "Polydipsia",
                        "Polyuria",
                        "Polyphagia",
                        "Polyneuropathy"
                    ],
                    "answer": 2,
                    "rationale": "Polyphagia is increased hunger caused by the breakdown of fat and protein and cellular starvation. Polydipsia is excessive thirst (from dehydration/increased osmolality), polyuria is excessive urination (from osmotic diuresis), and polyneuropathy is not one of the three P's at all.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the primary pathophysiologic difference between type 1 and type 2 diabetes?",
                    "options": [
                        "Type 1 involves insulin resistance; type 2 involves a complete lack of insulin",
                        "Type 1 and type 2 both involve a complete lack of endogenous insulin",
                        "Type 1 involves a complete lack of endogenous insulin; type 2 primarily involves insulin resistance",
                        "Type 1 and type 2 both involve primarily insulin resistance"
                    ],
                    "answer": 2,
                    "rationale": "Type 1 diabetes results from autoimmune destruction of beta cells, producing a complete lack of endogenous insulin. Type 2 diabetes is primarily driven by insulin resistance (cells don't respond normally to insulin), with possible decreased secretion over time from beta cell exhaustion.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with type 1 diabetes presents to the emergency department with a blood glucose of 580 mg/dL, severe acidosis, and ketonuria. Which acute complication is this?",
                    "options": [
                        "Diabetic ketoacidosis (DKA)",
                        "Hyperosmolar hyperglycemic syndrome (HHNS)",
                        "Somogyi effect",
                        "Dawn phenomenon"
                    ],
                    "answer": 0,
                    "rationale": "DKA is the most common acute complication in type 1 diabetes — severe hyperglycemia, ketone-driven acidosis, and ketonuria, which can progress to coma. HHNS is primarily seen in type 2 diabetes with even higher glucose levels but a different, osmolality-driven mechanism. The Somogyi effect and dawn phenomenon both describe patterns of morning hyperglycemia, not acute crises.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A diabetic patient becomes suddenly diaphoretic, pale, tachycardic, and anxious. What is the nurse's first priority action?",
                    "options": [
                        "Administer insulin per sliding scale",
                        "Give the patient's scheduled oral antidiabetic medication",
                        "Call the rapid response team",
                        "Check the patient's blood sugar immediately"
                    ],
                    "answer": 3,
                    "rationale": "These are classic hypoglycemia symptoms, and hypoglycemia is easy to confirm and easy to treat — the first action is to check blood sugar immediately. Giving insulin or an oral antidiabetic would worsen a hypoglycemic episode, and a rapid response call is premature before confirming the cause.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A diabetic patient's urinalysis shows microalbuminuria. What does this finding most likely represent?",
                    "options": [
                        "The first manifestation of diabetic nephropathy",
                        "A normal, expected finding in diabetes requiring no follow-up",
                        "A sign of diabetic retinopathy",
                        "A sign of resolving diabetic neuropathy"
                    ],
                    "answer": 0,
                    "rationale": "Microalbuminuria — protein leaking into urine from a thickening glomerular basement membrane — is the first manifestation of diabetic kidney dysfunction (nephropathy) and signals the onset of systemic diabetic complications. It is not a normal/expected finding, and it is not related to retinopathy or neuropathy directly.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Approximately what proportion of individuals with type 2 diabetes will develop a macrovascular complication such as coronary artery disease or stroke?",
                    "options": [
                        "About one-tenth",
                        "About two-thirds",
                        "About one-third",
                        "Nearly all"
                    ],
                    "answer": 2,
                    "rationale": "Globally, about one-third of individuals with type 2 diabetes develop some type of macrovascular complication (coronary artery disease, heart attack, stroke, heart failure, or peripheral artery disease).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is preparing to give insulin lispro. When should this rapid-acting insulin be administered relative to a meal?",
                    "options": [
                        "30 minutes before the meal",
                        "It does not need to be timed with meals",
                        "Immediately after the meal is finished",
                        "As the patient begins eating"
                    ],
                    "answer": 3,
                    "rationale": "Insulin lispro has a very fast onset (15 minutes) and is given as the patient starts eating, to control the postprandial glucose rise without risking hypoglycemia if the meal is delayed. Giving it 30 minutes before the meal risks hypoglycemia if the patient doesn't eat right away.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse needs to draw up regular insulin and NPH insulin into the same syringe. What is the correct sequence, and why?",
                    "options": [
                        "Draw up the cloudy NPH first, then the clear regular insulin, to avoid diluting the NPH",
                        "The order does not matter as long as both are drawn into the same syringe",
                        "Draw up the clear regular insulin first, then the cloudy NPH, to avoid contaminating the short-acting insulin",
                        "Draw up whichever insulin has the larger dose first"
                    ],
                    "answer": 2,
                    "rationale": "'Clear before cloudy' — draw the clear, short/rapid-acting insulin first, then the cloudy NPH. This prevents the short-acting vial from being contaminated with longer-acting insulin, which could blunt a fast correction dose used later.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which insulin type has no peak and is never mixed with other insulins in the same syringe?",
                    "options": [
                        "Insulin lispro (rapid-acting)",
                        "Insulin regular (short-acting)",
                        "NPH (intermediate-acting)",
                        "Insulin glargine (long-acting)"
                    ],
                    "answer": 3,
                    "rationale": "Insulin glargine (Lantus) has no peak, giving steady 24-hour coverage, and should never be mixed with other insulins in the same syringe. Lispro, regular, and NPH all have a defined peak.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which insulin is the only one that can be given intravenously, and where is it most often seen used that way?",
                    "options": [
                        "Insulin lispro — used in outpatient insulin pens",
                        "Insulin glargine — used for rapid correction of severe hyperglycemia",
                        "NPH insulin — used for once-daily basal dosing",
                        "Insulin regular — used in insulin pumps and IV infusions, such as for DKA"
                    ],
                    "answer": 3,
                    "rationale": "Regular insulin is the only type that can be given IV (bolus or infusion) or IM, and is used in insulin pumps and IV infusions, such as for DKA, where tight, fast glycemic control is needed. All the other insulin types are subcutaneous only.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Before administering any dose of insulin, what is the single most important safety step?",
                    "options": [
                        "Confirm the patient's most recent A1c result",
                        "Verify the patient has eaten within the last 24 hours",
                        "Obtain a current blood sugar reading, checked immediately before the dose",
                        "Confirm the patient's weight from the admission assessment"
                    ],
                    "answer": 2,
                    "rationale": "A current blood sugar — checked right before the dose, not from an hour ago or earlier in the day — must be obtained before giving any insulin. A1c reflects long-term averages and isn't a substitute for a current reading, and while recent food intake matters clinically, it doesn't replace confirming the current glucose value itself.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A hospitalized patient's insulin order reads: 'Give 2 units for blood glucose 150-200, give 8 units for blood glucose 300-350,' with doses given before meals and at bedtime. What type of insulin regimen is this?",
                    "options": [
                        "Sliding scale regimen",
                        "Basal-only regimen",
                        "Continuous subcutaneous insulin infusion",
                        "Fixed-combination regimen"
                    ],
                    "answer": 0,
                    "rationale": "A sliding scale regimen gives regular insulin with meals and at bedtime (AC and HS), with the dose based on the blood glucose reading at that moment per a provider-defined scale — exactly what's described. It is not basal-only, not a pump-delivered continuous infusion, and not a fixed combination dose.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient reports waking up most mornings with a blood glucose around 300 mg/dL despite not eating anything overnight, and further questioning reveals they are taking a large basal insulin dose at bedtime. Which phenomenon best explains this pattern?",
                    "options": [
                        "Dawn phenomenon",
                        "Insulin allergy",
                        "Diabetic ketoacidosis",
                        "Somogyi effect"
                    ],
                    "answer": 3,
                    "rationale": "The Somogyi effect is rebound morning hyperglycemia caused by excessive bedtime insulin, which triggers nocturnal hypoglycemia and a counter-regulatory glucose release — usually a sign that the bedtime/basal insulin dose needs to be reduced. The dawn phenomenon is a normal cortisol/growth-hormone-driven morning rise, not tied to excess insulin dosing.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking metformin is scheduled for a CT scan with IV contrast. What is the appropriate nursing consideration?",
                    "options": [
                        "No special consideration is needed — metformin and contrast do not interact",
                        "Metformin should typically be held for about 48 hours around the contrast administration",
                        "Metformin should be doubled before the contrast to protect the kidneys",
                        "The patient should be switched to insulin permanently before any contrast study"
                    ],
                    "answer": 1,
                    "rationale": "Metformin is renally cleared, and IV contrast is nephrotoxic — combining them risks acidosis, so metformin is commonly held for about 48 hours around contrast administration (per provider order). It should not be doubled, and a single contrast study does not require a permanent switch to insulin.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why does metformin typically not cause hypoglycemia the way a sulfonylurea can?",
                    "options": [
                        "Metformin is not absorbed by the body",
                        "Metformin does not stimulate insulin release from the pancreas",
                        "Metformin only works in patients without any insulin resistance",
                        "Metformin is always given with a meal that prevents hypoglycemia"
                    ],
                    "answer": 1,
                    "rationale": "Metformin lowers blood glucose by reducing hepatic glucose production and enhancing glucose uptake by muscle — it does not stimulate insulin release from the pancreas, so it doesn't typically cause hypoglycemia on its own. Sulfonylureas, by contrast, directly stimulate insulin secretion.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking a sulfonylurea for type 2 diabetes reports regularly taking ibuprofen for joint pain. Why is this combination a concern?",
                    "options": [
                        "NSAIDs like ibuprofen can potentiate the hypoglycemic effect of sulfonylureas",
                        "NSAIDs completely block the absorption of sulfonylureas",
                        "NSAIDs cause sulfonylureas to be converted into an inactive metabolite",
                        "There is no known interaction between NSAIDs and sulfonylureas"
                    ],
                    "answer": 0,
                    "rationale": "NSAIDs (like ibuprofen, naproxen), along with alcohol, cimetidine, and sulfa antibiotics, can potentiate the hypoglycemic effect of sulfonylureas, increasing hypoglycemia risk. They don't block absorption or convert the drug to an inactive form.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with a history of medullary thyroid carcinoma is being considered for a GLP-1 receptor agonist (such as semaglutide) for type 2 diabetes. What is the primary concern?",
                    "options": [
                        "GLP-1 agonists carry a black box warning for thyroid C-cell tumors and are contraindicated in this history",
                        "GLP-1 agonists are contraindicated only in patients with a peanut allergy",
                        "GLP-1 agonists cannot be given to any patient over the age of 60",
                        "There is no specific concern; GLP-1 agonists are safe in this population"
                    ],
                    "answer": 0,
                    "rationale": "GLP-1 receptor agonists carry a black box warning for the risk of thyroid C-cell tumors and are contraindicated in patients with a history of medullary thyroid carcinoma or multiple endocrine neoplasia syndrome type 2.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A female patient starting an SGLT2 inhibitor (such as dapagliflozin) asks why she has developed recurrent yeast infections since starting the medication. What is the best explanation?",
                    "options": [
                        "SGLT2 inhibitors suppress the immune system broadly",
                        "SGLT2 inhibitors cause glucose to be excreted in the urine, which promotes fungal/yeast growth",
                        "SGLT2 inhibitors are known to cause severe electrolyte depletion that leads to infection",
                        "This is unrelated to the medication and requires no further teaching"
                    ],
                    "answer": 1,
                    "rationale": "SGLT2 inhibitors block renal glucose reabsorption, so more glucose is excreted in the urine — this promotes bacterial and fungal/yeast growth, increasing UTI and yeast infection risk (more common in females due to shorter urethral length). They don't broadly suppress the immune system.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is visceral adipose tissue considered a greater cardiometabolic risk than subcutaneous adipose tissue?",
                    "options": [
                        "Visceral fat is less hormonally active than subcutaneous fat",
                        "Visceral fat is more hormonally active and is associated with impaired lipid/glucose metabolism, insulin resistance, and metabolic syndrome",
                        "Subcutaneous fat cannot be measured and is therefore assumed to be more dangerous",
                        "Visceral and subcutaneous fat carry identical health risks"
                    ],
                    "answer": 1,
                    "rationale": "Visceral adipose tissue, stored between abdominal organs, is more hormonally active than subcutaneous fat and is associated with impaired lipid and glucose metabolism, insulin resistance, metabolic syndrome, and increased cardiovascular and cancer risk. Subcutaneous fat, by contrast, is considered the healthier, less inflammatory storage type.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with obesity has chronically elevated leptin levels but continues to overeat and gain weight. What does this most likely indicate?",
                    "options": [
                        "The patient has an adiponectin deficiency",
                        "The patient has developed leptin resistance",
                        "The patient's leptin levels are actually too low to signal satiety",
                        "Leptin has no role in appetite regulation"
                    ],
                    "answer": 1,
                    "rationale": "With obesity, chronically high leptin levels can lead to leptin resistance — the hormone loses its appetite-suppressing effect, promoting continued overeating, excess weight gain, hyperglycemia/hyperinsulinemia, hyperlipidemia, and inflammation, despite leptin levels being high rather than low.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a waist circumference of 44 inches, a triglyceride level of 210 mg/dL, and a blood pressure of 148/92. Based on these three findings alone, which condition should the nurse suspect?",
                    "options": [
                        "Type 1 diabetes",
                        "Metabolic syndrome",
                        "Diabetic ketoacidosis",
                        "Familial hypercholesterolemia"
                    ],
                    "answer": 1,
                    "rationale": "Metabolic syndrome is diagnosed with three or more of: elevated waist circumference (>40 in men), elevated triglycerides, low HDL, hypertension, and elevated fasting glucose. This patient already meets three criteria — waist circumference, triglycerides, and hypertension — which is enough on its own for metabolic syndrome, and none of the other listed conditions fit this specific combination of findings.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following are recognized criteria used to diagnose metabolic syndrome? Select all that apply.",
                    "options": [
                        "Elevated waist circumference",
                        "Elevated triglycerides",
                        "Low HDL",
                        "Elevated LDL specifically",
                        "Hypertension"
                    ],
                    "answers": [
                        0,
                        1,
                        2,
                        4
                    ],
                    "rationale": "The recognized metabolic syndrome criteria are elevated waist circumference, elevated triglycerides, low HDL, hypertension, and elevated fasting glucose — a patient needs three or more to be diagnosed. Elevated LDL specifically is not one of the named criteria (triglycerides and HDL are the lipid measures used, not LDL).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's platelet count results at 85,000/mcL. Based on standard thresholds, how should this be classified?",
                    "options": [
                        "Thrombocytopenia",
                        "A normal platelet count",
                        "Thrombocytosis",
                        "Polycythemia"
                    ],
                    "answer": 0,
                    "rationale": "A platelet count below about 100,000 is generally classified as thrombocytopenia, placing the patient at high bleeding risk. Normal is 150,000-400,000; thrombocytosis is an elevated count, and polycythemia refers to excess red blood cells, not platelets.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What happens when a resting (smooth) platelet senses vessel wall injury?",
                    "options": [
                        "It immediately dissolves and is cleared by the spleen",
                        "It converts fibrinogen directly into fibrin without any other steps",
                        "It transitions to a spiky (dendritic) shape, becomes sticky, and adheres to the injury site",
                        "It releases erythropoietin to stimulate red blood cell production"
                    ],
                    "answer": 2,
                    "rationale": "Platelet activation involves a shape change from smooth to spiky/dendritic, along with increased stickiness and adhesion to the vessel wall injury site — this begins the aggregation process that leads to clot formation. Platelets don't dissolve, don't directly convert fibrinogen to fibrin themselves, and don't release erythropoietin.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the relationship between plasma and serum?",
                    "options": [
                        "Serum and plasma are two names for the exact same substance",
                        "Serum is plasma with additional clotting factors added",
                        "Serum is plasma minus the clotting factors",
                        "Plasma is formed only from white blood cells, while serum comes from red blood cells"
                    ],
                    "answer": 2,
                    "rationale": "Serum is plasma with the clotting factors removed — put another way, serum plus clotting factors equals plasma. They are not the same substance, and neither is derived specifically from white or red blood cells.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How does tissue factor pathway inhibitor (TFPI) help stop the coagulation cascade?",
                    "options": [
                        "It converts plasminogen into plasmin",
                        "It inhibits factor Xa",
                        "It directly destroys fibrin strands",
                        "It stimulates additional platelet aggregation"
                    ],
                    "answer": 1,
                    "rationale": "TFPI, produced by platelets and endothelial cells, inhibits factor Xa, halting further activation of the clotting cascade. Converting plasminogen to plasmin is the role of tPA/uPA (fibrinolysis, a separate later process), and TFPI does not destroy fibrin directly or stimulate platelet aggregation.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Once a blood vessel has healed and a clot is no longer needed, what process breaks it down?",
                    "options": [
                        "Fibrinolysis, carried out by plasmin after tPA/uPA activate plasminogen",
                        "Glycogenolysis, carried out by the liver",
                        "Lipolysis, carried out in adipose tissue",
                        "Proteolysis, carried out in skeletal muscle"
                    ],
                    "answer": 0,
                    "rationale": "Fibrinolysis is the natural clot-removal process: tissue plasminogen activator (tPA) and urokinase plasminogen activator (uPA) convert plasminogen into plasmin, which breaks down fibrin. Glycogenolysis, lipolysis, and proteolysis are unrelated metabolic processes.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks whether their anticoagulant medication will help dissolve the DVT they already have. What is the accurate response?",
                    "options": [
                        "Anticoagulants directly dissolve existing clots within a few hours",
                        "Anticoagulants prevent new clot formation and prevent an existing clot from extending, but do not dissolve the existing clot",
                        "Anticoagulants only work on arterial clots, not venous clots",
                        "Anticoagulants convert the clot into scar tissue immediately"
                    ],
                    "answer": 1,
                    "rationale": "Anticoagulants inhibit clotting factors to prevent new clot formation and prevent an existing clot from growing larger, but they have no direct effect on breaking down a clot that has already formed. They aren't limited to arterial clots, and they don't convert clots to scar tissue.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the key mechanistic difference between heparin and enoxaparin (Lovenox)?",
                    "options": [
                        "Heparin inactivates thrombin and factor Xa; enoxaparin inactivates factor Xa only",
                        "Heparin inactivates factor Xa only; enoxaparin inactivates thrombin and factor Xa",
                        "Both drugs work identically and inactivate the same factors",
                        "Heparin works only on platelets, while enoxaparin works only on fibrin directly"
                    ],
                    "answer": 0,
                    "rationale": "Heparin activates antithrombin, which indirectly inactivates both thrombin and factor Xa. Enoxaparin (a low-molecular-weight heparin) only inactivates factor Xa, not thrombin — which is part of why enoxaparin doesn't require the same routine coagulation lab monitoring as heparin.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is heparin dosing considered particularly high-risk for medication error?",
                    "options": [
                        "It is dosed on a weight-based protocol using the patient's weight in kilograms, and calculations are the nurse's responsibility",
                        "It is the only medication given entirely by mouth in the ICU",
                        "It requires no monitoring at all once started",
                        "It is always given at a single fixed dose regardless of the patient"
                    ],
                    "answer": 0,
                    "rationale": "Heparin is typically dosed on a weight-based protocol (weight in kilograms), and calculating rate/dose changes falls on the nurse — a well-known source of error, which is why many facilities require an independent double-check before boluses or rate changes. It is given IV or subcutaneously (not PO), does require regular lab monitoring, and is not a single fixed dose for all patients.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is giving IV protamine sulfate to reverse heparin. What is the priority safety consideration?",
                    "options": [
                        "It should be given slowly, since giving it too fast can cause profound hypotension",
                        "It must be given as a rapid IV push to be effective",
                        "It should always be given subcutaneously instead of IV",
                        "It has no notable adverse effects and requires no special precautions"
                    ],
                    "answer": 0,
                    "rationale": "Protamine sulfate must be given IV slowly — pushing it too quickly can cause profound hypotension. It is not given subcutaneously for this purpose, and it is not free of adverse effects.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on a heparin infusion develops a platelet count of 80,000/mcL along with new, unexpected clot formation. What is the most likely explanation and the appropriate nursing action?",
                    "options": [
                        "This is an expected heparin effect requiring no action",
                        "This is a normal finding that only requires increased fluid intake",
                        "This indicates the heparin dose is too low and should be increased",
                        "This is heparin-induced thrombocytopenia (HIT) — stop the heparin immediately and anticipate a non-heparin anticoagulant"
                    ],
                    "answer": 3,
                    "rationale": "A dropping platelet count with new thrombus formation in a patient on heparin suggests heparin-induced thrombocytopenia (HIT), an antibody-mediated reaction seen in about 5-15% of patients on heparin. The heparin should be stopped immediately, with a non-heparin anticoagulant (such as argatroban) considered if anticoagulation is still needed. This is not expected, not a sign of underdosing, and not managed with fluids alone.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the mechanism of action of warfarin (Coumadin)?",
                    "options": [
                        "It directly inhibits factor Xa",
                        "It activates antithrombin",
                        "It inhibits vitamin K, preventing synthesis of several vitamin-K-dependent clotting factors",
                        "It irreversibly binds and inactivates thrombin"
                    ],
                    "answer": 2,
                    "rationale": "Warfarin is a vitamin K inhibitor — by blocking vitamin K's role, it prevents the liver from synthesizing several clotting factors. Direct factor Xa inhibition describes apixaban/rivaroxaban, antithrombin activation describes heparin, and direct thrombin inhibition describes argatroban/bivalirudin.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why does warfarin typically require several days of bridging therapy with a faster-acting anticoagulant when first started?",
                    "options": [
                        "Warfarin has no anticoagulant effect at any point during therapy",
                        "Warfarin's onset is delayed about 24 hours, and existing clotting factors already in circulation must clear before full effect is seen",
                        "Warfarin works faster than heparin, so no bridging is ever needed",
                        "Warfarin must be given IV for the first week of therapy"
                    ],
                    "answer": 1,
                    "rationale": "Warfarin blocks the synthesis of new vitamin-K-dependent clotting factors, but factors already circulating are unaffected and must naturally clear — onset is delayed about 24 hours, with full anticoagulant effect taking longer, which is why bridging with a faster agent is common. Warfarin is PO only, not IV.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient newly started on warfarin has a baseline INR of about 1. What INR range is generally considered therapeutic once the patient is stabilized on warfarin?",
                    "options": [
                        "0.5-1",
                        "1-1.5",
                        "2-3.5",
                        "5-7"
                    ],
                    "answer": 2,
                    "rationale": "The therapeutic INR range for most warfarin indications is about 2-3.5 (roughly double or more of the untreated baseline of ~1 or less). A range of 5-7 would indicate a dangerously supratherapeutic level with high bleeding risk.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What dietary teaching should a nurse give a patient starting warfarin regarding vitamin-K-rich foods (such as leafy greens)?",
                    "options": [
                        "Avoid all vitamin-K-containing foods completely for the duration of therapy",
                        "Keep vitamin K intake roughly consistent day to day, rather than avoiding or dramatically increasing it",
                        "Eat as much vitamin K as possible to counteract the medication",
                        "Vitamin K intake has no effect on warfarin and requires no teaching"
                    ],
                    "answer": 1,
                    "rationale": "Since warfarin blocks vitamin-K-dependent clotting factor synthesis, large day-to-day swings in vitamin K intake are what destabilize INR control — the goal is consistent intake, not total avoidance. Eating more to 'counteract' the medication would be dangerous and inappropriate, and vitamin K intake very much does affect warfarin's action.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is a major advantage of apixaban and rivaroxaban over warfarin?",
                    "options": [
                        "They require daily INR monitoring for safety",
                        "They have no risk of bleeding whatsoever",
                        "They do not require routine coagulation lab monitoring",
                        "They can be safely combined with any other anticoagulant"
                    ],
                    "answer": 2,
                    "rationale": "A key selling point of apixaban/rivaroxaban is that they do not require the routine coagulation lab monitoring warfarin does, improving adherence. They still carry bleeding risk like any anticoagulant, and should not be combined with other anticoagulants.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the reversal agent for apixaban and rivaroxaban?",
                    "options": [
                        "Protamine sulfate",
                        "Vitamin K",
                        "Desmopressin (DDAVP)",
                        "Andexanet alfa (Andexxa)"
                    ],
                    "answer": 3,
                    "rationale": "Andexanet alfa (Andexxa), a recombinant factor Xa, reverses apixaban and rivaroxaban. Protamine reverses heparin/enoxaparin, vitamin K reverses warfarin, and DDAVP is used for aspirin/clopidogrel/ticagrelor's antiplatelet effect.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is having an acute MI and is given aspirin in the emergency department. How should it be administered, and why?",
                    "options": [
                        "Swallowed whole with a full glass of water for slow, sustained absorption",
                        "Dissolved in water and administered via IV push",
                        "Given as a rectal suppository to bypass first-pass metabolism",
                        "Chewed, using a non-enteric-coated tablet, for fast absorption of its antiplatelet effect"
                    ],
                    "answer": 3,
                    "rationale": "For an acute MI, aspirin should be chewed (not swallowed whole) and must be a non-enteric-coated tablet, since enteric coating is designed to survive intact until the intestine, which would delay the fast antiplatelet effect needed in an emergency.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is aspirin generally avoided in children?",
                    "options": [
                        "It has no effect on platelets in pediatric patients",
                        "It is associated with Reye syndrome in children",
                        "It is not absorbed at all in the pediatric GI tract",
                        "Pediatric dosing has never been established for any indication"
                    ],
                    "answer": 1,
                    "rationale": "Aspirin is avoided in children because of its association with Reye syndrome, a serious and potentially fatal condition. It does affect platelets in children as in adults, and it is absorbed normally — the concern is Reye syndrome risk, not lack of effect.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How do clopidogrel and ticagrelor exert their antiplatelet effect?",
                    "options": [
                        "They activate antithrombin to inactivate thrombin and factor Xa",
                        "They inhibit vitamin K synthesis of clotting factors",
                        "They convert plasminogen into plasmin to break down existing clots",
                        "They alter the platelet membrane by inhibiting ADP, reducing platelet aggregation"
                    ],
                    "answer": 3,
                    "rationale": "Clopidogrel and ticagrelor are ADP inhibitors — they alter the platelet membrane so it doesn't receive the aggregation signal, reducing platelet accumulation. Activating antithrombin describes heparin, inhibiting vitamin K describes warfarin, and converting plasminogen to plasmin describes the fibrinolytic system, not these drugs.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Argatroban and bivalirudin are direct thrombin inhibitors most often used to treat which condition?",
                    "options": [
                        "Warfarin-induced bleeding",
                        "Aspirin allergy",
                        "Vitamin K deficiency",
                        "Heparin-induced thrombocytopenia (HIT)"
                    ],
                    "answer": 3,
                    "rationale": "Direct thrombin inhibitors like argatroban and bivalirudin are used to treat HIT (and in patients at high HIT risk undergoing procedures like PCI), since they provide anticoagulation without relying on heparin. They are not used for warfarin-induced bleeding, vitamin K deficiency, or aspirin allergy.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A thrombus that has detached from the vessel wall and originated in the venous system is specifically termed what?",
                    "options": [
                        "An arterial embolus",
                        "A venous thromboembolism (VTE)",
                        "A pulmonary infarction",
                        "A hemostatic plug"
                    ],
                    "answer": 1,
                    "rationale": "Once a venous thrombus detaches from the vessel wall, it becomes a thromboembolus — and because it originated in the venous system, it's specifically called a venous thromboembolism (VTE). It is not arterial, not automatically a pulmonary infarction (though it could travel there), and a hemostatic plug describes the initial platelet response to injury, not a detached clot.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A postoperative orthopedic patient develops sudden massive leg swelling, intense deep pain, and severe cyanosis of the limb. Which condition should the nurse suspect?",
                    "options": [
                        "Post-thrombotic syndrome",
                        "Superficial phlebitis",
                        "Phlegmasia cerulea dolens",
                        "Simple bruising from the surgical procedure"
                    ],
                    "answer": 2,
                    "rationale": "Phlegmasia cerulea dolens ('painful blue inflammation') is a rare but true emergency involving near-total occlusion of major leg veins, causing sudden massive swelling, intense pain, and severe cyanosis — if untreated, it can progress to amputation or gangrene. Post-thrombotic syndrome develops more gradually over time and doesn't present this acutely, and superficial phlebitis and simple bruising don't produce this degree of swelling and cyanosis.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the purpose of an inferior vena cava (IVC) filter?",
                    "options": [
                        "To dissolve existing clots chemically",
                        "To measure a patient's INR continuously",
                        "To replace the need for any anticoagulant therapy",
                        "To mechanically catch traveling clots before they reach the heart, lungs, or brain"
                    ],
                    "answer": 3,
                    "rationale": "An IVC filter is a mechanical device placed in the inferior vena cava that catches traveling clots before they can reach vital organs like the heart, lungs, or brain. It does not dissolve clots chemically, does not replace anticoagulant therapy in all cases, and is not a monitoring device.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following are components of Virchow's triad, the three factors that promote venous thrombosis formation? Select all that apply.",
                    "options": [
                        "Venous stasis",
                        "Venous endothelial damage",
                        "Hypercoagulable states",
                        "Arterial hypertension",
                        "Decreased serum albumin"
                    ],
                    "answers": [
                        0,
                        1,
                        2
                    ],
                    "rationale": "Virchow's triad consists of venous stasis (slow blood flow), venous endothelial damage (injury to the vein lining), and hypercoagulable states (conditions that increase clotting tendency, such as pregnancy or malignancy). Arterial hypertension and decreased serum albumin are not part of Virchow's triad.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a hematocrit of 30% with a normal red blood cell count, drawn shortly after receiving several liters of IV fluid. What is the most likely explanation for the low hematocrit?",
                    "options": [
                        "Dilution of the packed red blood cells from fluid volume overload",
                        "A true loss of red blood cell mass",
                        "A laboratory error that should be ignored",
                        "An increase in hemoglobin concentration"
                    ],
                    "answer": 0,
                    "rationale": "Hematocrit is a PERCENTAGE of blood volume made up of packed red blood cells. Fluid overload increases plasma volume, which dilutes that percentage even though the actual red blood cell count/mass hasn't changed. This is not necessarily a true RBC loss, a lab error, or an increase in hemoglobin concentration.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which white blood cell type is the most prevalent at a fresh site of inflammation or injury, arriving first?",
                    "options": [
                        "Basophils",
                        "Neutrophils",
                        "Eosinophils",
                        "Lymphocytes"
                    ],
                    "answer": 1,
                    "rationale": "Neutrophils are the most prevalent white blood cell type and the first responders at a fresh inflammation/injury site, rising especially with acute bacterial infection and trauma. Basophils and eosinophils are more associated with allergic/parasitic responses, and lymphocytes are the primary immunity cells associated with chronic bacterial or acute viral infection.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A CBC with differential shows an increased proportion of bands relative to segs. What does this finding, known as a 'shift to the left,' typically indicate?",
                    "options": [
                        "A chronic viral infection",
                        "A resolved, fully treated infection",
                        "An acute bacterial infection",
                        "A parasitic infection"
                    ],
                    "answer": 2,
                    "rationale": "A shift to the left describes an increased proportion of bands (immature neutrophils) relative to segs (mature neutrophils), which occurs during an acute bacterial infection as the bone marrow releases immature neutrophils faster than usual. It does not indicate a chronic viral infection, a resolved infection, or a parasitic infection.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a chronic MRSA wound infection that has persisted for months. Which white blood cell type would be expected to increase in response?",
                    "options": [
                        "Eosinophils",
                        "Basophils",
                        "Neutrophils only",
                        "Lymphocytes"
                    ],
                    "answer": 3,
                    "rationale": "Lymphocytes rise with chronic bacterial infection (acting as memory cells) as well as acute viral infection. Neutrophils are more associated with acute bacterial infection and trauma, while eosinophils and basophils are more associated with allergic and parasitic responses.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's WBC count rises from 8,000 to 16,000 due to a surge in neutrophils, while their absolute lymphocyte count stays exactly the same at 2,400. What happens to the lymphocyte PERCENTAGE on the differential?",
                    "options": [
                        "It stays exactly the same as before",
                        "It increases proportionally with the neutrophils",
                        "It decreases, even though the absolute lymphocyte count hasn't changed",
                        "Lymphocyte percentage cannot be calculated in this scenario"
                    ],
                    "answer": 2,
                    "rationale": "Differential percentages are relative to the total WBC count. If the total count doubles because of a neutrophil surge while the absolute lymphocyte count stays the same, the lymphocyte PERCENTAGE will drop, since it now represents a smaller share of a larger total — even though nothing actually changed about the lymphocytes themselves.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the defining difference between leukocytosis and leukopenia?",
                    "options": [
                        "Leukocytosis is a low platelet count; leukopenia is a low red blood cell count",
                        "Leukocytosis is an above-normal total WBC count; leukopenia is a below-normal total WBC count",
                        "Leukocytosis and leukopenia both refer to the same finding",
                        "Leukocytosis refers only to neutrophils; leukopenia refers only to lymphocytes"
                    ],
                    "answer": 1,
                    "rationale": "Leukocytosis is an elevated total white blood cell count, while leukopenia is a decreased total white blood cell count. Neither term refers to platelets or red blood cells specifically, and neutropenia (not leukocytosis/leukopenia) refers specifically to a low neutrophil count.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient undergoing chemotherapy has an absolute neutrophil count (ANC) of 700. What nursing precautions should be implemented?",
                    "options": [
                        "No special precautions are needed since this is expected with chemotherapy",
                        "Contact precautions for a suspected multidrug-resistant organism",
                        "Neutropenic precautions, including strict hand hygiene and avoiding sick contacts, raw produce, and fresh flowers",
                        "Standard precautions only, with no additional dietary restrictions"
                    ],
                    "answer": 2,
                    "rationale": "An ANC below 1,000 indicates neutropenia, placing the patient at high, potentially life-threatening infection risk. Neutropenic precautions include meticulous hand hygiene, avoiding contact with anyone sick, avoiding raw fruits/vegetables/grains, no fresh flowers, and keeping the patient's door shut in the hospital — this is not something to leave unaddressed just because it's an expected chemotherapy effect.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the mechanism of action of filgrastim (Neupogen)?",
                    "options": [
                        "It directly kills malignant white blood cells",
                        "It inhibits bone marrow activity to reduce cell turnover",
                        "It replaces red blood cells lost through bleeding",
                        "It promotes the proliferation, differentiation, and activation of cells that produce granulocytes"
                    ],
                    "answer": 3,
                    "rationale": "Filgrastim is a granulocyte colony-stimulating factor (G-CSF) that promotes proliferation, differentiation, and activation of the cells that produce granulocytes, used to treat leukopenia/neutropenia. It does not directly kill malignant cells, does not address red blood cell loss, and stimulates (rather than inhibits) bone marrow activity.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the most common adverse effect of filgrastim, and why does it occur?",
                    "options": [
                        "Hepatotoxicity, because the drug is metabolized in the liver",
                        "Bone pain, because the drug stimulates activity in the bone marrow where these cells are produced",
                        "Severe hypotension, unrelated to its mechanism",
                        "Permanent hearing loss"
                    ],
                    "answer": 1,
                    "rationale": "Bone pain is the most common adverse effect of filgrastim, which makes sense given that it stimulates granulocyte production in the bone marrow, where these cells originate.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A college student presents with several weeks of fatigue, sore throat, and swollen cervical lymph nodes. Labs show an elevated WBC count that is 95% lymphocytes. Which condition is most consistent with this picture?",
                    "options": [
                        "Infectious mononucleosis",
                        "Chronic myelocytic leukemia",
                        "Multiple myeloma",
                        "Myelodysplastic syndrome"
                    ],
                    "answer": 0,
                    "rationale": "Infectious mononucleosis, most often caused by Epstein-Barr virus, classically presents in adolescents/young adults with fatigue, sore throat, lymphadenopathy, and a markedly lymphocyte-predominant WBC differential (~95% lymphocytes). CML, multiple myeloma, and myelodysplastic syndrome present very differently and are more common in older adults.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is a patient with acute infectious mononucleosis advised to avoid contact sports?",
                    "options": [
                        "Because of an increased risk of bone fracture",
                        "Because of severe joint inflammation",
                        "Because of an increased seizure risk",
                        "Because of splenomegaly and the associated risk of splenic rupture"
                    ],
                    "answer": 3,
                    "rationale": "Mononucleosis commonly causes splenomegaly (enlarged spleen), and contact sports raise the risk of splenic rupture, a serious complication. There is no established increased fracture risk, seizure risk, or joint inflammation specifically tied to mono.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the hallmark laboratory finding in myelodysplastic syndrome?",
                    "options": [
                        "Cytopenias — low blood counts across multiple cell types",
                        "An isolated elevation in platelets only",
                        "A markedly elevated hemoglobin and hematocrit",
                        "A normal complete blood count with abnormal imaging only"
                    ],
                    "answer": 0,
                    "rationale": "Myelodysplastic syndrome, sometimes called bone marrow failure disorder, is characterized by cytopenias — low counts across blood cell types — which can lead to anemia, infection, and spontaneous bleeding/bruising. It is not defined by an isolated platelet elevation, elevated Hgb/Hct, or a normal CBC.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which leukemia is the most common form of childhood leukemia, with a peak incidence between ages 3 and 7?",
                    "options": [
                        "Chronic myelocytic leukemia (CML)",
                        "Chronic lymphocytic leukemia (CLL)",
                        "Acute myelocytic leukemia (AML)",
                        "Acute lymphocytic leukemia (ALL)"
                    ],
                    "answer": 3,
                    "rationale": "Acute lymphocytic leukemia (ALL) is the most common childhood leukemia, accounting for about 80% of childhood acute leukemias, with peak incidence between ages 3 and 7. AML is primarily an adult disease, and CLL/CML are chronic leukemias most associated with older adults.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which leukemia is primarily a disease of older adults, with a median age of onset around 64?",
                    "options": [
                        "Acute lymphocytic leukemia (ALL)",
                        "Acute myelocytic leukemia (AML)",
                        "Infectious mononucleosis",
                        "Myelodysplastic syndrome in children"
                    ],
                    "answer": 1,
                    "rationale": "Acute myelocytic leukemia (AML) is primarily an adult disease, with a median age of onset around 64 and about 80% of acute leukemia cases in adults being AML. ALL is primarily a childhood disease, and mononucleosis/myelodysplastic syndrome are not types of leukemia.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How are leukemias classified according to the affected stem cell line?",
                    "options": [
                        "As either erythroid or thrombocytic",
                        "As either lymphocytic (lymphoid stem cells — B cells, T cells, plasma cells) or myelocytic (myeloid stem cells)",
                        "As either granulocytic or agranulocytic only",
                        "As either pediatric or adult, with no other distinction"
                    ],
                    "answer": 1,
                    "rationale": "Leukemias are classified by the predominant affected stem cell line as either lymphocytic (from lymphoid stem cells — B cells, T cells, plasma cells) or myelocytic (from myeloid stem cells), and separately by pace as acute or chronic. They are not classified as erythroid/thrombocytic, and while granulocytes are relevant to CML specifically, that is not the overall classification scheme.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How does the clinical onset of acute leukemia typically differ from chronic leukemia?",
                    "options": [
                        "Acute leukemia has a sudden, 'stormy' onset; chronic leukemia has an insidious onset, often found incidentally on routine labs",
                        "Acute leukemia is always asymptomatic; chronic leukemia always presents with severe symptoms",
                        "Both acute and chronic leukemias present identically in all patients",
                        "Chronic leukemia has a sudden onset, while acute leukemia develops slowly over years"
                    ],
                    "answer": 0,
                    "rationale": "Acute leukemias present with a sudden, 'stormy' onset — bone pain, bruising, fever, fatigue, infection — related to decreased mature white cells, red cells, and platelets. Chronic leukemias have an insidious onset and are frequently discovered incidentally during routine medical care.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A lymph node biopsy reveals Reed-Sternberg cells. Which diagnosis does this finding support?",
                    "options": [
                        "Non-Hodgkin lymphoma",
                        "Chronic myelocytic leukemia",
                        "Multiple myeloma",
                        "Hodgkin disease"
                    ],
                    "answer": 3,
                    "rationale": "Reed-Sternberg cells, which originate from B cells, are the distinctive diagnostic finding in Hodgkin disease (Hodgkin lymphoma). Non-Hodgkin lymphoma specifically lacks these cells, and multiple myeloma and CML have entirely different diagnostic findings.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why does non-Hodgkin lymphoma generally carry a less certain prognosis than Hodgkin disease?",
                    "options": [
                        "Non-Hodgkin lymphoma has no available treatment options",
                        "Non-Hodgkin lymphoma spreads in an unpredictable pattern and is often diagnosed at a later, more widespread stage",
                        "Non-Hodgkin lymphoma only affects children, who tolerate treatment poorly",
                        "Hodgkin disease is untreatable, making the comparison irrelevant"
                    ],
                    "answer": 1,
                    "rationale": "Unlike Hodgkin disease, which spreads in a predictable manner, non-Hodgkin lymphoma spreads unpredictably and often early to sites like the liver, spleen, and bone marrow — leading to diagnosis at a later, more widespread stage and a less certain prognosis. Both diseases do have treatment options (chemotherapy, radiation, stem cell transplant), and non-Hodgkin lymphoma affects mostly older adults, not primarily children.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with multiple myeloma has an elevated serum calcium level. What is the most likely underlying mechanism?",
                    "options": [
                        "Excessive dietary calcium intake",
                        "Dehydration alone, unrelated to the disease process",
                        "Overproduction of vitamin D by malignant cells",
                        "Increased osteoclast activity from malignant plasma cells breaking down bone"
                    ],
                    "answer": 3,
                    "rationale": "In multiple myeloma, malignant plasma cells invade bone and increase osteoclast activity, causing bone destruction/reabsorption that releases stored calcium into the bloodstream, producing hypercalcemia. This is a disease-related bone process, not primarily a dietary, vitamin D, or dehydration-related cause.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which finding on urine testing is specific to multiple myeloma?",
                    "options": [
                        "Bence Jones protein",
                        "Glycosuria",
                        "Microalbuminuria",
                        "Hematuria only, with no other findings"
                    ],
                    "answer": 0,
                    "rationale": "Bence Jones protein — specific abnormal light-chain proteins — is a characteristic urine finding in multiple myeloma. Glycosuria is associated with diabetes/hyperglycemia, microalbuminuria with diabetic nephropathy, and isolated hematuria is not the specific multiple myeloma finding being described here.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the first symptom most commonly reported by patients later diagnosed with multiple myeloma?",
                    "options": [
                        "Acute shortness of breath",
                        "Sudden severe headache",
                        "Bone pain, sometimes discovered through a fracture or back pain evaluation",
                        "Painless skin rash"
                    ],
                    "answer": 2,
                    "rationale": "Bone pain is usually the first symptom of multiple myeloma, and patients are sometimes diagnosed after presenting for evaluation of a fracture or back pain. Headache, shortness of breath, and skin rash are not the classic presenting symptoms of this disease.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient reports seasonal allergy symptoms and is also being evaluated for a possible parasitic infection. Which white blood cell type would the nurse expect to be elevated in both scenarios?",
                    "options": [
                        "Neutrophils",
                        "Monocytes",
                        "Eosinophils",
                        "Basophils only, with no eosinophil involvement"
                    ],
                    "answer": 2,
                    "rationale": "Eosinophils rise with both allergic reactions and parasitic infections, tied to their role in phagocytosis related to antigen-antibody reactions — remembered with the mnemonic 'worms, wheezes, and weird diseases.' Neutrophils are tied to acute bacterial infection/trauma, and monocytes to phagocytosis of cellular debris rather than allergic/parasitic response specifically.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following are appropriate neutropenic precautions for a hospitalized patient with an ANC below 1,000? Select all that apply.",
                    "options": [
                        "Strict hand hygiene for staff and visitors",
                        "Avoiding fresh flowers in the patient's room",
                        "Avoiding raw fruits, vegetables, and grains",
                        "Encouraging frequent visits from anyone, sick or well, to boost morale",
                        "Keeping the patient's hospital room door shut"
                    ],
                    "answers": [
                        0,
                        1,
                        2,
                        4
                    ],
                    "rationale": "Neutropenic precautions include strict hand hygiene, avoiding fresh flowers, avoiding raw fruits/vegetables/grains, and keeping the patient's door shut in the hospital. Encouraging visits from anyone regardless of illness status is the opposite of appropriate — contact with sick individuals should specifically be avoided, since neutropenic patients have little ability to fight off infection.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Osmosis is best described as which of the following?",
                    "options": [
                        "Movement of solute molecules from an area of high concentration to low concentration",
                        "Active, ATP-dependent movement of electrolytes against a concentration gradient",
                        "Movement of water across a semi-permeable membrane from an area of low solute concentration to high solute concentration",
                        "Movement of water across a semi-permeable membrane from an area of high solute concentration to low solute concentration"
                    ],
                    "answer": 2,
                    "rationale": "Osmosis moves water (the solvent) toward the more concentrated side. Option D reverses the correct direction of osmosis, option A describes diffusion (solute movement, not water), and option B describes active transport, a different process entirely.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "During diffusion, what happens to the total volume of liquid?",
                    "options": [
                        "It stays the same — only the distribution of molecules changes",
                        "It decreases as solutes are consumed",
                        "It increases proportionally to the concentration gradient",
                        "It equalizes only if a semi-permeable membrane is present"
                    ],
                    "answer": 0,
                    "rationale": "Diffusion moves molecules/solutes from high to low concentration until evenly distributed, but the liquid volume itself doesn't change — unlike osmosis, where water volume shifts between compartments. Diffusion doesn't consume solutes, doesn't scale volume with the gradient, and — unlike osmosis — doesn't require a semi-permeable membrane to occur.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Hydrostatic pressure at the capillary level is generated primarily by what, and what does it do?",
                    "options": [
                        "Plasma colloids; it pulls fluid into the vascular space",
                        "Osmotic gradients; it pulls fluid into the interstitial space",
                        "Sodium concentration; it pushes fluid into the intracellular space",
                        "Blood pressure; it pushes fluid out of the vascular system into the interstitial space"
                    ],
                    "answer": 3,
                    "rationale": "Hydrostatic pressure is generated by blood pressure at the capillary level and pushes fluid OUT of the vascular system into the interstitial space. Option A actually describes oncotic pressure (driven by colloids, pulling fluid IN), and options B and C describe mechanisms not used to define either pressure in this material.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which plasma protein is the primary colloid responsible for oncotic (colloid osmotic) pressure?",
                    "options": [
                        "Fibrinogen",
                        "Albumin",
                        "Globulin",
                        "Hemoglobin"
                    ],
                    "answer": 1,
                    "rationale": "Albumin is the primary colloid driving oncotic pressure, pulling fluid into the vascular space; it's measured indirectly via total protein level. Globulin and fibrinogen are also colloids but not the primary one, and hemoglobin isn't a plasma colloid at all — it's carried inside red blood cells.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following electrolytes is an anion (negatively charged)?",
                    "options": [
                        "Sodium",
                        "Calcium",
                        "Magnesium",
                        "Phosphorus"
                    ],
                    "answer": 3,
                    "rationale": "Phosphorus, along with chloride and bicarbonate, is negatively charged (an anion). Sodium, calcium, and magnesium are all positively charged cations.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which set of electrolytes has the highest concentration inside cells (intracellularly)?",
                    "options": [
                        "Potassium, magnesium, phosphorus",
                        "Sodium, chloride, bicarbonate",
                        "Calcium, sodium, chloride",
                        "Bicarbonate, calcium, potassium"
                    ],
                    "answer": 0,
                    "rationale": "Potassium, magnesium, and phosphorus have the highest intracellular concentrations. Sodium, chloride, bicarbonate, and calcium are found in highest concentration extracellularly, so the other three options each mix in at least one extracellular electrolyte.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is a recognized cause of hyponatremia?",
                    "options": [
                        "High dietary sodium intake",
                        "Chronic hypercalcemia",
                        "Severe diarrhea and vomiting",
                        "Excessive protein intake"
                    ],
                    "answer": 2,
                    "rationale": "GI losses like diarrhea and vomiting are a recognized cause of hyponatremia. High dietary sodium intake would push sodium up rather than down; chronic hypercalcemia and excessive protein intake aren't described causes of hyponatremia in this material.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with hyponatremia has increased blood pressure, weight gain, and a bounding pulse. Which type of hyponatremia does this suggest, and what's the appropriate treatment?",
                    "options": [
                        "Depletional hyponatremia; treat with normal saline",
                        "Dilutional hyponatremia; treat with fluid restriction",
                        "Depletional hyponatremia; treat with fluid restriction",
                        "Dilutional hyponatremia; treat with normal saline"
                    ],
                    "answer": 1,
                    "rationale": "Increased blood pressure, weight gain, and a bounding pulse describe a hypervolemic picture — dilutional hyponatremia (too much water diluting the sodium), which is treated with fluid restriction. Depletional hyponatremia (options A/C) instead presents as hypovolemic and is treated with sodium replacement, not fluid restriction; pairing the correct diagnosis with the wrong treatment (option D) would worsen the volume overload.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is rapid correction of severe, prolonged hyponatremia dangerous?",
                    "options": [
                        "It can cause a hypertensive emergency",
                        "It can trigger rebound hypokalemia",
                        "It has no significant risks if the patient is monitored",
                        "It can trigger osmotic demyelination syndrome, including locked-in syndrome"
                    ],
                    "answer": 3,
                    "rationale": "Correcting hyponatremia too quickly causes brain dehydration and risks osmotic demyelination syndrome, which can produce irreversible neurologic damage — even locked-in syndrome. It isn't described as causing a hypertensive emergency or rebound hypokalemia, and it carries a real, serious risk regardless of monitoring, which is exactly why the correction rate itself must be limited.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the primary indication for sodium bicarbonate therapy, and what precaution applies to its administration?",
                    "options": [
                        "Metabolic acidosis; it's a vesicant, so give via central line when possible",
                        "Hyperkalemia; give as a rapid IV push",
                        "Metabolic alkalosis; give freely through any peripheral IV",
                        "Hypercalcemia; no special precautions needed"
                    ],
                    "answer": 0,
                    "rationale": "Sodium bicarbonate's primary indication is metabolic acidosis, and it's a vesicant at high concentrations, so central line administration is preferred. It isn't a first-line hyperkalemia treatment (that's Kayexalate or D50/insulin), it treats acidosis rather than alkalosis, and it does carry real precautions rather than none.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following can cause hypokalemia?",
                    "options": [
                        "Renal failure with decreased urine output",
                        "Metabolic alkalosis, which shifts potassium from extracellular to intracellular space",
                        "Massive crush injury",
                        "ACE inhibitor use"
                    ],
                    "answer": 1,
                    "rationale": "Alkalosis shifts potassium into cells, lowering the serum level — a recognized cause of hypokalemia. The other three options (renal failure with low output, crush injury, ACE inhibitor use) are all causes of HYPERkalemia instead.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with extensive burns is at risk for hyperkalemia. Why?",
                    "options": [
                        "Burned skin absorbs potassium from topical dressings",
                        "Burn patients universally develop acute renal failure",
                        "Massive cell injury releases intracellular potassium into the bloodstream",
                        "Pain medications given for burns increase potassium absorption"
                    ],
                    "answer": 2,
                    "rationale": "Potassium lives mostly inside cells — massive cell injury from burns, crush injuries, or sepsis ruptures cells and releases that intracellular potassium into the bloodstream. Dressings don't deliver potassium, burn patients don't universally develop renal failure, and pain medications aren't described as a hyperkalemia mechanism.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the specific danger of administering undiluted potassium chloride as an IV push?",
                    "options": [
                        "It can cause ventricular fibrillation, a lethal rhythm",
                        "It can cause anaphylaxis",
                        "It can cause severe hypertension",
                        "It can cause acute kidney injury within minutes"
                    ],
                    "answer": 0,
                    "rationale": "Undiluted IV potassium can cause ventricular fibrillation, a rhythm incompatible with life — which is why IV potassium must always be diluted and infused slowly. It isn't described as an anaphylaxis trigger, a cause of hypertension, or a cause of rapid kidney injury.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Kayexalate (sodium polystyrene sulfonate) should be used cautiously or avoided in which patient?",
                    "options": [
                        "A patient with normal bowel function",
                        "A patient with an ileus",
                        "A patient with hyperkalemia and no GI symptoms",
                        "A patient able to tolerate oral medications"
                    ],
                    "answer": 1,
                    "rationale": "Kayexalate works via the digestive tract, so it requires normal bowel function — a patient with an ileus (or constipation) is at risk for intestinal obstruction or necrosis, so it should be avoided. The other three options describe patients for whom Kayexalate would actually be appropriate to give.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "When giving the D50/regular insulin combination for emergent hyperkalemia, what is essential to monitor?",
                    "options": [
                        "Blood pressure only, since insulin doesn't affect glucose in this context",
                        "No monitoring is needed since the effect is temporary",
                        "Blood glucose, before the dose and again about 5 minutes after the D50",
                        "Potassium level only, rechecked after 24 hours"
                    ],
                    "answer": 2,
                    "rationale": "Any time insulin is given, blood glucose must be checked — before the dose and again about 5 minutes after the D50 (or sooner if hypoglycemia symptoms appear). Insulin absolutely does affect glucose here (that's why D50 is paired with it), skipping monitoring is unsafe, and waiting 24 hours to recheck potassium would miss the point of an urgent intervention.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which set of findings is most consistent with hypomagnesemia?",
                    "options": [
                        "Lethargy, floppiness, decreased reflexes",
                        "Bradycardia and hypotension",
                        "Polyuria and extreme thirst",
                        "Hyperactive reflexes, tremors, seizures"
                    ],
                    "answer": 3,
                    "rationale": "Low magnesium causes an overactive-muscle picture: hyperactive reflexes, cramps, tremors, and seizures. Option A actually describes HIGH magnesium, and bradycardia/hypotension and polyuria/thirst aren't the described magnesium-specific findings in this material.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with hypomagnesemia develops rapid, uncontrolled eye movements. What is this sign called?",
                    "options": [
                        "Nystagmus",
                        "Chvostek's sign",
                        "Trousseau's sign",
                        "Tetany"
                    ],
                    "answer": 0,
                    "rationale": "Nystagmus is the classic eye sign of low magnesium. Chvostek's and Trousseau's signs are associated with low calcium, not magnesium, and tetany refers to muscle spasm, not an eye finding.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which electrolyte replacement, unlike most others, can be given as an IV push if absolutely necessary?",
                    "options": [
                        "Potassium chloride",
                        "Magnesium sulfate",
                        "Calcium chloride",
                        "Sodium bicarbonate"
                    ],
                    "answer": 1,
                    "rationale": "Magnesium sulfate is one of the few electrolyte replacements that can be given IV push if absolutely necessary. Potassium must never be pushed IV (ventricular fibrillation risk), and calcium chloride and sodium bicarbonate are vesicants typically given via central line rather than push.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is recovering from parathyroid surgery. Why does the nurse monitor calcium levels closely?",
                    "options": [
                        "Parathyroid surgery has no effect on calcium regulation",
                        "Parathyroid surgery routinely causes hypercalcemia",
                        "Calcium levels can drop suddenly after thyroid/parathyroid surgery",
                        "Calcium monitoring is only needed if the patient reports symptoms"
                    ],
                    "answer": 2,
                    "rationale": "Calcium can drop suddenly after thyroid or parathyroid surgery, so close monitoring is warranted regardless of symptoms — hypocalcemia symptoms can appear quickly once levels fall. The parathyroid glands directly regulate calcium (so surgery does affect it), and the risk described is hypocalcemia, not hypercalcemia.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How does the nurse elicit Trousseau's sign, and what does a positive result indicate?",
                    "options": [
                        "Tap the facial nerve in front of the ear; facial twitching indicates hypercalcemia",
                        "Inflate a blood pressure cuff above systolic pressure for about 3 minutes; a carpal spasm indicates hyperkalemia",
                        "Tap the facial nerve in front of the ear; facial twitching indicates hypocalcemia",
                        "Inflate a blood pressure cuff above systolic pressure for about 3 minutes; a carpal spasm indicates hypocalcemia"
                    ],
                    "answer": 3,
                    "rationale": "Trousseau's sign is elicited by inflating a BP cuff above systolic pressure for about 3 minutes — a resulting carpal spasm is positive for hypocalcemia. Option C actually describes Chvostek's sign (the facial nerve tap), and options A/B pair the wrong condition (hypercalcemia/hyperkalemia) with the finding.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is IV calcium chloride typically given via a central line rather than a peripheral IV?",
                    "options": [
                        "It is a vesicant and can damage tissue if it infiltrates",
                        "It requires refrigeration during infusion",
                        "Peripheral IVs cannot accommodate the required infusion rate",
                        "It must be mixed with dextrose immediately before infusion"
                    ],
                    "answer": 0,
                    "rationale": "Calcium chloride (and calcium gluconate) is a vesicant, meaning it can damage surrounding tissue if it infiltrates — a central line reduces that risk. It doesn't require refrigeration during infusion, peripheral IVs can physically accommodate the infusion, and it isn't described as requiring dextrose mixing.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is a first-line treatment approach for hypercalcemia?",
                    "options": [
                        "Fluid restriction to reduce circulating volume",
                        "Adequate hydration (3-4 L/day) to promote renal calcium excretion",
                        "Withholding all diuretics",
                        "Oral calcium supplementation to normalize levels gradually"
                    ],
                    "answer": 1,
                    "rationale": "Hypercalcemia is treated with adequate hydration (about 3-4 L/day), which promotes renal excretion of calcium and reduces kidney stone risk; diuretics may also be added, since sodium excretion is accompanied by calcium excretion. Fluid restriction and withholding diuretics both work against that goal, and giving MORE calcium would worsen the problem.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a low serum calcium level. What change in phosphorus would the nurse expect, given their inverse relationship?",
                    "options": [
                        "Phosphorus would also be low",
                        "Phosphorus levels are unrelated to calcium",
                        "Phosphorus would be elevated",
                        "Phosphorus would be normal but binding would increase"
                    ],
                    "answer": 2,
                    "rationale": "Calcium and phosphorus have an inverse relationship — when calcium is low, phosphorus tends to be elevated, and vice versa. They are not unrelated, phosphorus wouldn't also be low, and this relationship isn't described as leaving phosphorus normal with only binding changed.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following are appropriate nursing safety practices when administering IV potassium chloride? Select all that apply.",
                    "options": [
                        "Dilute the potassium before infusion",
                        "Infuse via a rapid IV push if the patient is symptomatic",
                        "Monitor the patient on telemetry during the infusion",
                        "Confirm the patient has adequate urine output/renal function before administering",
                        "Limit the peripheral infusion rate to no more than about 10 mEq/hr"
                    ],
                    "answers": [
                        0,
                        2,
                        3,
                        4
                    ],
                    "rationale": "IV potassium must always be diluted, requires telemetry monitoring, needs confirmed renal function/urine output before administration, and has a capped infusion rate (about 10 mEq/hr peripherally, up to 20 mEq/hr via central line). Option B directly contradicts the core safety rule — potassium is never given as a rapid IV push, even in a symptomatic patient, since undiluted IV potassium can cause lethal ventricular fibrillation.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is nociception?",
                    "options": [
                        "The overall process of sensing and interpreting pain, involving afferent pathways, interpretive centers, and efferent pathways",
                        "The process by which chronic pain develops from tissue damage",
                        "The release of endorphins in response to exercise",
                        "The conduction of nerve impulses exclusively through C fibers"
                    ],
                    "answer": 0,
                    "rationale": "Nociception is the overall process of feeling and interpreting pain: afferent pathways carry the initial signal, interpretive centers (the brain) recognize it as pain, and efferent pathways produce the response. It's not specific to chronic pain development, endorphin release from exercise, or C fibers alone — nociception involves both A-delta and C fibers.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which nerve fiber type transmits dull, aching, poorly localized pain?",
                    "options": [
                        "A-delta fibers",
                        "C fibers",
                        "A-alpha fibers",
                        "A-beta fibers"
                    ],
                    "answer": 1,
                    "rationale": "C fibers are smaller, far more numerous, and transmit dull, aching, burning, poorly-localized pain. A-delta fibers instead transmit sharp, well-localized, 'fast' pain. A-alpha and A-beta are the larger nerve fibers involved in the gate control theory, not primary pain transmission.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with severe acute knee pain reports barely noticing her chronic low back pain today. This is best explained by which concept?",
                    "options": [
                        "Gate control theory",
                        "Referred pain",
                        "Perceptual dominance affecting pain threshold",
                        "Pain tolerance"
                    ],
                    "answer": 2,
                    "rationale": "Perceptual dominance means intense pain at one site can raise the pain threshold (mask pain) at another site. Gate control theory involves large nerve fiber stimulation (touch, massage) blocking smaller-fiber pain transmission, not one pain site masking another. Referred pain is felt at a distance from its actual source, and pain tolerance is about how much pain intensity someone can handle, not one pain masking another.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient describes burning, shooting, electric-shock-like pain following a nerve injury that hasn't responded to standard analgesics. What type of pain is this?",
                    "options": [
                        "Cutaneous/somatic pain",
                        "Visceral pain",
                        "Referred pain",
                        "Neuropathic pain"
                    ],
                    "answer": 3,
                    "rationale": "Neuropathic pain originates from a lesion or injury within the central nervous system itself, is described as shooting, burning, or electric-shock-like, and frequently does not respond to usual pain medications. Cutaneous/somatic and visceral pain are both nociceptive (arising from pain receptors responding to actual injury), and referred pain is felt at a distance from its source rather than being nerve-injury pain itself.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient having a myocardial infarction reports pain in the jaw, neck, and left arm rather than the chest. This is an example of which phenomenon?",
                    "options": [
                        "Referred pain",
                        "Phantom pain",
                        "Neuropathic pain",
                        "Perceptual dominance"
                    ],
                    "answer": 0,
                    "rationale": "Referred pain is felt at a distance from the actual pathology because the brain can't always distinguish the true source — the classic example is MI pain felt in the jaw, neck, or arm. Phantom pain originates from an amputated body part, neuropathic pain comes from nerve injury, and perceptual dominance describes one pain site masking another, not pain felt in a different location than its source.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking tramadol for pain is also prescribed an SSRI. What is the priority safety concern?",
                    "options": [
                        "Increased risk of hepatotoxicity",
                        "Increased seizure risk from a lowered seizure threshold",
                        "Increased risk of GI bleeding",
                        "Increased risk of gingival hyperplasia"
                    ],
                    "answer": 1,
                    "rationale": "Tramadol combined with other CNS depressants like SSRIs, MAOIs, or TCAs lowers the seizure threshold, raising seizure risk. Hepatotoxicity is the key acetaminophen overdose concern, GI bleeding is an NSAID concern, and gingival hyperplasia is specific to phenytoin — none apply to the tramadol/SSRI combination.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the key pharmacologic difference between gabapentin and pregabalin regarding dosing?",
                    "options": [
                        "Pregabalin has a ceiling effect; gabapentin does not",
                        "Both have identical ceiling effects",
                        "Gabapentin has a ceiling effect around 1,800 mg/day; pregabalin does not",
                        "Neither drug has a ceiling effect"
                    ],
                    "answer": 2,
                    "rationale": "Gabapentin has a ceiling effect around 1,800 mg/day, meaning doses beyond that provide no additional benefit. Pregabalin's efficacy is not limited by that same plateau, making the other three options incorrect.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which statement about COX-1 is accurate?",
                    "options": [
                        "COX-1 is primarily responsible for inflammation and fever",
                        "COX-1 is only found in the central nervous system",
                        "Blocking COX-1 has no effect on GI protection",
                        "COX-1 produces prostaglandins that protect the gastric mucosa and support platelet aggregation"
                    ],
                    "answer": 3,
                    "rationale": "COX-1 produces largely protective, 'housekeeping' prostaglandins — protecting the gastric mucosa and supporting platelet aggregation via thromboxane. Inflammation and fever are actually driven by COX-2, not COX-1; COX-1 isn't limited to the CNS, and blocking it directly reduces GI protection (the source of NSAID GI side effects).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the main trade-off of using a selective COX-2 inhibitor like celecoxib instead of a non-selective NSAID?",
                    "options": [
                        "Lower GI ulcer risk but higher cardiovascular thrombotic risk",
                        "Higher GI ulcer risk but lower cardiovascular risk",
                        "No difference in either GI or cardiovascular risk",
                        "Lower risk of both GI ulcers and cardiovascular events"
                    ],
                    "answer": 0,
                    "rationale": "Selective COX-2 inhibitors like celecoxib carry about an 87% lower risk of GI ulcer with long-term use since COX-1's protective effects are preserved, but this comes with a higher risk of cardiovascular thrombotic events (heart attack, stroke) as a trade-off — not a universal reduction or a wash in both directions.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What makes aspirin unique among NSAIDs?",
                    "options": [
                        "It has no effect on platelet function",
                        "It irreversibly inhibits COX-1 in platelets, producing an antiplatelet effect",
                        "It reversibly inhibits both COX-1 and COX-2 equally",
                        "It is a selective COX-2 inhibitor"
                    ],
                    "answer": 1,
                    "rationale": "Aspirin is the only NSAID that irreversibly inhibits COX-1 within platelets, reducing thromboxane formation and producing a true antiplatelet effect — other NSAIDs lack this property. It isn't a selective COX-2 inhibitor, and its COX-1 inhibition is irreversible, not merely reversible like other non-selective NSAIDs.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A parent asks whether they can give their 10-year-old aspirin for a fever during a bout of influenza. What should the nurse advise?",
                    "options": [
                        "Aspirin is preferred for viral illness because of its antipyretic effect",
                        "Aspirin is only contraindicated in children under 2 years old",
                        "Avoid aspirin — use acetaminophen or ibuprofen instead, due to Reye syndrome risk",
                        "Aspirin is safe as long as the dose is weight-based"
                    ],
                    "answer": 2,
                    "rationale": "Aspirin should be avoided in children (especially under 15) with a viral illness because of Reye syndrome risk — a rare but serious, high-mortality condition. Acetaminophen and ibuprofen are the appropriate alternatives; the risk isn't limited to children under 2, and no dosing adjustment makes aspirin safe in this scenario.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the recommended maximum duration of ketorolac (Toradol) therapy, and why?",
                    "options": [
                        "14 days, due to its mild GI effects",
                        "There is no time limit since it lacks addictive properties",
                        "30 days, similar to other NSAIDs",
                        "5 days or less, due to its significant renal toxicity risk"
                    ],
                    "answer": 3,
                    "rationale": "Ketorolac is limited to 5 days or less because of its significant renal toxicity risk, despite being a powerful analgesic comparable to morphine. Its GI effects are not mild, and the short duration limit exists specifically because of the renal risk, not the absence of addictive properties.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the maximum recommended acetaminophen dose per 24 hours for a patient with chronic alcohol use or liver disease?",
                    "options": [
                        "2,000 mg",
                        "4,000 mg",
                        "6,000 mg",
                        "1,000 mg"
                    ],
                    "answer": 0,
                    "rationale": "Patients with liver disease or chronic alcohol use should not exceed 2,000 mg of acetaminophen per 24 hours, due to increased hepatotoxicity risk. 4,000 mg is the limit for a healthy adult, 1,000 mg is closer to the single-dose ceiling effect, and 6,000 mg exceeds any recommended limit.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the mechanism of acetylcysteine (Mucomist) in treating acetaminophen overdose?",
                    "options": [
                        "It blocks acetaminophen absorption in the GI tract",
                        "It restores glutathione stores needed to detoxify the toxic acetaminophen metabolite",
                        "It induces vomiting to remove unabsorbed acetaminophen",
                        "It binds acetaminophen directly and inactivates it"
                    ],
                    "answer": 1,
                    "rationale": "An acetaminophen overdose depletes the liver's glutathione stores, letting a toxic metabolite accumulate and cause hepatic necrosis. Acetylcysteine restores glutathione so the toxic metabolite can be detoxified — it doesn't bind acetaminophen directly, block its GI absorption, or work by inducing vomiting.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving IV morphine has a respiratory rate of 8 breaths/minute and requires vigorous stimulation to arouse. What should the nurse anticipate for the next scheduled dose?",
                    "options": [
                        "An increased dose to manage breakthrough pain",
                        "No change, since respiratory rate naturally fluctuates",
                        "A dose reduction of about 25-50%",
                        "Immediate discontinuation of all future opioid doses"
                    ],
                    "answer": 2,
                    "rationale": "When a patient needs significant physical stimulation to be aroused after an opioid dose, the next dose should be reduced by about 25-50% — not increased, ignored, or fully discontinued outright, since the patient still has pain that needs to be managed safely.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why are fentanyl doses typically ordered in micrograms rather than milligrams?",
                    "options": [
                        "Fentanyl is only available in liquid form",
                        "Microgram dosing reduces the risk of addiction",
                        "Fentanyl has a very short duration of action",
                        "Fentanyl is extremely potent — 0.1 mg IV fentanyl equals about 10 mg IV morphine"
                    ],
                    "answer": 3,
                    "rationale": "Fentanyl is so potent that 0.1 mg IV is roughly equivalent to 10 mg IV morphine, so doses are given in micrograms for precision. This isn't about its formulation, addiction risk, or duration of action — it's purely a function of its extreme potency.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How does the potency of IV hydromorphone compare to IV morphine?",
                    "options": [
                        "1 mg of IV hydromorphone is approximately equal to 7 mg of IV morphine",
                        "1 mg of IV hydromorphone is approximately equal to 1 mg of IV morphine",
                        "1 mg of IV hydromorphone is approximately equal to 10 mg of IV morphine",
                        "1 mg of IV hydromorphone is approximately equal to 3 mg of IV morphine"
                    ],
                    "answer": 0,
                    "rationale": "Hydromorphone is about 7 times more potent than morphine, so 1 mg IV hydromorphone is roughly equivalent to 7 mg IV morphine. It is not equipotent to morphine, and the 10x relationship actually describes fentanyl's potency compared to morphine, not hydromorphone's.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is meperidine (Demerol) rarely used for long-term or repeated dosing?",
                    "options": [
                        "It is not compatible with any route of administration",
                        "A toxic metabolite accumulates with repeated doses and can cause seizures",
                        "It has no analgesic effect with repeated dosing",
                        "It causes irreversible respiratory depression after a single dose"
                    ],
                    "answer": 1,
                    "rationale": "Meperidine breaks down into a toxic metabolite that accumulates with repeated dosing and can cause seizures, which is why it's avoided for long-term or multiple-dose use. It can be given PO or IV, retains analgesic effect with repeated dosing (which is exactly the problem), and its respiratory depression risk is actually lower than other opioids, not irreversible after one dose.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is codeine contraindicated in children under 18?",
                    "options": [
                        "It has no analgesic properties in pediatric patients",
                        "It is not effective as a cough suppressant in children",
                        "It carries a risk of life-threatening breathing problems",
                        "It causes gingival hyperplasia in pediatric patients"
                    ],
                    "answer": 2,
                    "rationale": "Codeine is not given to patients under 18 due to the risk of life-threatening breathing problems. It does have analgesic and antitussive (cough-suppressant) effects in children — that's exactly why it would otherwise be considered — and gingival hyperplasia is a phenytoin effect, unrelated to codeine.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What makes methadone a preferred choice for opioid-addiction treatment/detoxification?",
                    "options": [
                        "It provides a stronger euphoric effect than other opioids to ease cravings",
                        "It is a Schedule IV medication with minimal monitoring requirements",
                        "It has no potential for abuse or addiction",
                        "It has a long half-life and produces less euphoric 'high' than other opioids, while still controlling withdrawal"
                    ],
                    "answer": 3,
                    "rationale": "Methadone's long half-life allows less frequent dosing while controlling withdrawal, and it produces less of the euphoric 'high' associated with other opioids — though it is still addictive, not free of abuse potential. It's a Schedule II medication requiring careful monitoring, not Schedule IV with minimal oversight.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which statement about naloxone (Narcan) is accurate?",
                    "options": [
                        "It has a short half-life, so repeat dosing or a continuous infusion may be needed",
                        "It provides a mild analgesic effect while reversing opioid toxicity",
                        "It causes respiratory depression as an adverse effect",
                        "It permanently reverses opioid tolerance"
                    ],
                    "answer": 0,
                    "rationale": "Naloxone has a short half-life, so a patient may need repeat doses or a continuous drip to sustain reversal of opioid effects. It has no analgesic properties of its own, does not cause respiratory depression (that's exactly why it's used to reverse it), and doesn't permanently change opioid tolerance.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which patient is most likely to be considered 'opioid-naive,' requiring extra caution with dosing?",
                    "options": [
                        "A patient with a history of chronic opioid use for cancer pain",
                        "An elderly patient who has never taken opioid pain medication before",
                        "A patient currently on a methadone maintenance program",
                        "A patient who takes oxycodone daily for chronic back pain"
                    ],
                    "answer": 1,
                    "rationale": "An opioid-naive patient has little or no prior opioid exposure — elderly and young patients are more likely to fall into this category and have an exaggerated response to opioids. Patients with chronic opioid use for cancer pain, on methadone maintenance, or taking daily oxycodone all have established opioid exposure and tolerance, the opposite of naive.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What two criteria must be met for a diagnosis of epilepsy?",
                    "options": [
                        "A family history of seizures plus one seizure episode",
                        "Seizures occurring only during sleep",
                        "More than one seizure, with no evidence of a reversible metabolic cause",
                        "A single tonic-clonic seizure confirmed by EEG"
                    ],
                    "answer": 2,
                    "rationale": "Epilepsy requires more than one seizure with no evidence of a reversible metabolic cause (like blood sugar imbalance, drug effect, or fever). A single seizure, regardless of EEG confirmation, does not meet the criteria, nor does a family history alone, and epilepsy isn't defined by seizures occurring only during sleep.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is an example of a secondary seizure cause?",
                    "options": [
                        "A seizure with no identifiable trigger or metabolic cause",
                        "A seizure classified as epilepsy after multiple episodes",
                        "An idiopathic seizure with unknown cause and genetic predisposition",
                        "A febrile seizure in a child with a high fever"
                    ],
                    "answer": 3,
                    "rationale": "Secondary seizures have an identifiable cause — fever (febrile seizures), drugs, blood sugar imbalance, traumatic brain injury, stroke, meningitis, or tumors. Primary/idiopathic epilepsy, by contrast, has no identifiable cause despite a genetic predisposition, so the other three options all describe primary rather than secondary seizures.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A seizure originating in one specific region of the brain used to be called a 'partial seizure.' What is the current terminology?",
                    "options": [
                        "Focal seizure",
                        "Generalized seizure",
                        "Absence seizure",
                        "Myoclonic seizure"
                    ],
                    "answer": 0,
                    "rationale": "A seizure originating in one specific brain region is now called a focal seizure (formerly 'partial'). Generalized seizures involve both hemispheres, absence seizures are a generalized-onset subtype seen mainly in childhood, and myoclonic seizures can be either focal or generalized depending on the patient — none of these is the direct renamed equivalent of 'partial.'",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has been seizing continuously for 35 minutes without a postictal recovery period. What is this condition called, and why is it dangerous?",
                    "options": [
                        "A simple absence seizure — no intervention is needed",
                        "Status epilepticus — it can progress to respiratory arrest, hypoxia, and permanent brain damage",
                        "Todd's paralysis — a temporary and benign condition",
                        "Postictal psychosis — it resolves spontaneously without treatment"
                    ],
                    "answer": 1,
                    "rationale": "Status epilepticus is a series of seizures without postictal recovery, or a single seizure lasting 30 minutes or more — a true emergency that can progress to respiratory arrest, hypoxia, permanent brain damage, and death. Absence seizures are brief and self-limited, and the other two options are not the condition being described here.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient who has been seizure-free for three years on an antiepileptic drug decides to stop taking it abruptly without consulting their provider. What is the priority concern?",
                    "options": [
                        "The patient's seizure threshold will permanently increase",
                        "The patient will experience immediate hepatotoxicity",
                        "Abruptly stopping an AED can trigger seizures",
                        "There is no significant risk since the patient has been seizure-free for years"
                    ],
                    "answer": 2,
                    "rationale": "Antiepileptic drugs must never be stopped abruptly, even after years of being seizure-free, because doing so can trigger seizures. Stopping the medication does not raise the seizure threshold, doesn't cause immediate liver toxicity, and years of seizure freedom on the medication doesn't eliminate this risk if it's discontinued abruptly.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is newly started on phenytoin (Dilantin) for seizure control. Which of the following are appropriate points of patient education? Select all that apply.",
                    "options": [
                        "Schedule regular dental checkups to help prevent gingival hyperplasia",
                        "Attend all appointments for therapeutic drug level monitoring",
                        "Never stop taking this medication abruptly, even if seizure-free",
                        "This medication has no interactions with other drugs",
                        "If pregnant or planning pregnancy, discuss the increased risk of birth defects with your provider"
                    ],
                    "answers": [
                        0,
                        1,
                        2,
                        4
                    ],
                    "rationale": "Phenytoin requires regular dental care due to gingival hyperplasia risk, ongoing therapeutic drug level monitoring (narrow therapeutic range of about 10-20 mcg/mL), and must never be stopped abruptly, since doing so can trigger seizures — standard teaching for any AED. It's also teratogenic, so pregnancy planning needs provider discussion. Option D is false and the one to flag: phenytoin is highly protein-bound and a CYP450 inducer, causing many significant drug interactions rather than none.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A hospitalized elderly patient becomes restless, irritable, and inattentive over two days after surgery, with dilated pupils, tachycardia, and occasional hallucinations. Which condition does this describe?",
                    "options": [
                        "Hyperactive delirium",
                        "Hypoactive delirium",
                        "Vascular dementia",
                        "Frontotemporal dementia"
                    ],
                    "answer": 0,
                    "rationale": "Hyperactive delirium involves autonomic nervous system overactivity developing over 2-3 days, with restlessness, irritability, insomnia, hallucinations, dilated pupils, tachycardia, and diaphoresis — common post-surgery and in hospitalized elderly patients. Hypoactive delirium instead presents with decreased alertness and apathy, not agitation, and both dementia types are chronic, not acute, presentations.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with chronic liver failure becomes forgetful, apathetic, and slow to speak, sleeping much of the day, without agitation. Which condition does this describe?",
                    "options": [
                        "Excited delirium syndrome",
                        "Hypoactive delirium",
                        "Alzheimer disease",
                        "Delirium tremens"
                    ],
                    "answer": 1,
                    "rationale": "Hypoactive delirium involves right-sided frontal/basal ganglion disruption and is more common with metabolic disorders like liver or kidney failure, presenting as decreased alertness, apathy, slow speech, and frequent sleep rather than agitation. Excited delirium and delirium tremens are hyperactive, dangerous presentations, and Alzheimer disease is a chronic dementia, not an acute metabolic derangement.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is teaching a family the difference between delirium and dementia. Which statement is accurate?",
                    "options": [
                        "Delirium always requires antipsychotic medication to resolve",
                        "Dementia has a sudden onset, while delirium develops slowly over years",
                        "Delirium is typically acute and reversible once the cause is treated, while dementia is chronic and irreversible",
                        "Dementia patients are at lower risk for developing delirium than the general population"
                    ],
                    "answer": 2,
                    "rationale": "Delirium is acute (hours to days) and usually reversible once its underlying cause is identified and treated, while dementia is a chronic, progressive, irreversible decline. Antipsychotics are reserved for delirium only when the patient is a danger to themselves or others, not a routine requirement. Onset is reversed in the second option, and dementia patients are actually at HIGHER risk for delirium, not lower, which is why consistent routines matter for them.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's genetic testing reveals mutations in tau-encoding genes, and the family reports increasing personality changes and poor judgment with onset before age 60. Which dementia type does this best fit?",
                    "options": [
                        "Vascular dementia",
                        "Lewy body dementia",
                        "Alzheimer disease",
                        "Frontotemporal dementia"
                    ],
                    "answer": 3,
                    "rationale": "Frontotemporal dementia (formerly Pick disease) is familial when onset occurs before age 60, involves mutations in tau-encoding genes, and its behavioral variant presents with personality and judgment changes. Vascular dementia relates to cerebrovascular disease and hypoperfusion, not genetic tau mutations, and Alzheimer disease's genetic link is more associated with early-onset disease and amyloid/tau pathology rather than a distinct tau-gene-mutation syndrome with three named subtypes.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is a documented risk factor for Alzheimer disease?",
                    "options": [
                        "Down syndrome",
                        "Recent viral upper respiratory infection",
                        "Low socioeconomic status alone",
                        "Male sex"
                    ],
                    "answer": 0,
                    "rationale": "Down syndrome is a documented Alzheimer disease risk factor, along with age over 65, family history, existing mild cognitive impairment, unhealthy lifestyle, head trauma, and social isolation. A recent viral URI is not a listed risk factor, socioeconomic status alone isn't cited as a direct risk factor in this content, and about two-thirds of Alzheimer patients are female, not male.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with a history of small vessel cerebrovascular disease, hypertension, and diabetes develops a stepwise cognitive decline after a stroke. Which dementia type is most consistent with this presentation?",
                    "options": [
                        "Alzheimer disease",
                        "Vascular dementia",
                        "Frontotemporal dementia",
                        "Delirium"
                    ],
                    "answer": 1,
                    "rationale": "Vascular dementia is the second most common dementia type, related to cerebrovascular disease (large artery disease, cardioembolism, small vessel disease, stroke) causing cerebral hypoperfusion, with hypertension, diabetes, hyperlipidemia, and smoking as risk factors. Alzheimer disease's pathophysiology centers on amyloid plaques and tau tangles rather than vascular events, frontotemporal dementia involves tau-gene mutations, and delirium is an acute, not chronic stepwise, process.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which statement about frontotemporal dementia (formerly Pick disease) is accurate?",
                    "options": [
                        "It is the most common form of dementia overall",
                        "It is diagnosed primarily through inflammatory blood markers",
                        "It has three recognized syndromes: behavioral variant, progressive nonfluent, and semantic dementia",
                        "It responds well to cholinesterase inhibitor therapy"
                    ],
                    "answer": 2,
                    "rationale": "Frontotemporal dementia has three syndromes: behavioral variant (personality/judgment), progressive nonfluent (language/writing), and semantic dementia (word/sentence formation). It is rare, not the most common dementia type; it's diagnosed via genetic testing, not inflammatory blood markers; and there is no treatment available for it, unlike Alzheimer disease's cholinesterase inhibitors.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with mild-moderate Alzheimer disease is started on donepezil. What is its mechanism of action?",
                    "options": [
                        "Blocking NMDA receptors to reduce excess glutamate activity",
                        "Blocking beta-amyloid plaque formation directly",
                        "Enhancing GABA's inhibitory effects in the CNS",
                        "Increasing acetylcholine by inhibiting the enzyme that breaks it down"
                    ],
                    "answer": 3,
                    "rationale": "Donepezil is a cholinesterase inhibitor that increases acetylcholine availability by inhibiting acetylcholinesterase, the enzyme that normally breaks it down, and is used for mild-moderate Alzheimer disease. Blocking NMDA receptors describes memantine's mechanism instead, no drug in this content directly blocks plaque formation, and enhancing GABA describes benzodiazepines, an unrelated drug class.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with moderate-severe Alzheimer disease is started on memantine. What adverse effect should the nurse anticipate as most common, and what patient teaching addresses it?",
                    "options": [
                        "Constipation — encourage fiber intake and stool softeners",
                        "Severe hypertension — hold the dose and notify the provider",
                        "Bradycardia — monitor apical pulse before each dose",
                        "Gingival hyperplasia — recommend regular dental checkups"
                    ],
                    "answer": 0,
                    "rationale": "Constipation is memantine's most common side effect, addressed with fiber and stool softeners; the drug also causes confusion, hypotension (not severe hypertension), headache, and dizziness. Bradycardia is a donepezil-associated cardiovascular effect, and gingival hyperplasia is a phenytoin (an antiepileptic, not a dementia drug) side effect.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient describes obsessive, intrusive thoughts and repeated checking rituals, and separately shows increased impulsivity and aggression. Which neurotransmitter deficit is most associated with this symptom pattern?",
                    "options": [
                        "Dopamine",
                        "Serotonin",
                        "Norepinephrine",
                        "Acetylcholine"
                    ],
                    "answer": 1,
                    "rationale": "A serotonin (5-HT) deficit is associated with OCD-like symptoms (obsessions/compulsions) as well as increased impulsivity, suicide risk, and aggression. Dopamine deficit instead causes Parkinson's-like symptoms, apathy, and anhedonia; norepinephrine imbalance affects alertness/energy and anxiety; and acetylcholine is the neurotransmitter reduced in Alzheimer disease, not the four neurotransmitters emphasized for mood/anxiety disorders.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which statement about major depressive disorder is accurate based on its pathophysiology?",
                    "options": [
                        "It has a single identified genetic cause",
                        "It carries no increased cardiovascular risk",
                        "It is roughly twice as common in women as in men, in part because men underreport it",
                        "Symptoms must include appetite loss specifically, not appetite gain"
                    ],
                    "answer": 2,
                    "rationale": "Depression is about twice as common in women as men, partly because men underreport it, and its etiology is complex — genetic, biological, environmental, and psychological factors combined, not one identified genetic cause. It's associated with a 64% greater coronary artery disease risk, and appetite disturbance can go in either direction (loss or gain), not appetite loss exclusively.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is teaching a patient newly started on an antidepressant. What is the most important point about onset of effect?",
                    "options": [
                        "The medication should relieve symptoms within 24-48 hours",
                        "Effects are permanent after a single dose",
                        "The medication only works if taken with food",
                        "Full therapeutic effect typically takes about 4-8 weeks"
                    ],
                    "answer": 3,
                    "rationale": "Antidepressants generally take about 4-8 weeks to reach full therapeutic effect — a critical teaching point so patients don't stop the medication prematurely believing it isn't working. They do not act within 24-48 hours, a single dose does not produce a permanent effect, and food timing is not the determining factor for antidepressant efficacy in this content.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient describes being afraid a panic attack will start again, and has begun avoiding situations that might trigger one. Which two concepts describe this?",
                    "options": [
                        "Anticipatory anxiety and avoidance anxiety",
                        "Hyperarousal and re-experiencing",
                        "Generalized worry and autonomic hyperactivity",
                        "Obsession and compulsion"
                    ],
                    "answer": 0,
                    "rationale": "Panic disorder involves anticipatory anxiety (fearful expectation that panic will start) and avoidance anxiety (strategies used to increase control and decrease panic risk) — together driving the panic cycle. Hyperarousal/re-experiencing describes PTSD, generalized worry/autonomic hyperactivity describes GAD, and obsession/compulsion describes OCD.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with generalized anxiety disorder is started on buspirone. Which statement about this medication is accurate?",
                    "options": [
                        "It has a rapid onset, making it ideal for breakthrough anxiety",
                        "It has no sedative effect and does not intensify CNS depressants, but has a slow onset",
                        "It has significant abuse potential similar to benzodiazepines",
                        "It works primarily by enhancing GABA's inhibitory effects"
                    ],
                    "answer": 1,
                    "rationale": "Buspirone has an unknown mechanism, no sedative effect, no abuse potential, doesn't intensify CNS depressants, but has a slow anxiolytic onset — meaning it isn't used for breakthrough anxiety, unlike benzodiazepines. Its abuse potential is low, not similar to benzodiazepines, and its mechanism is not GABA enhancement, which describes benzodiazepines instead.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A combat veteran reports recurrent nightmares, avoidance of reminders of the event, and an exaggerated startle response. Which three core symptoms of PTSD does this reflect, and what is a relatively new psychotherapy modality used to treat it?",
                    "options": [
                        "Obsession, compulsion, and avoidance; treated with deep brain stimulation",
                        "Anhedonia, fatigue, and poor concentration; treated with bupropion",
                        "Hyperarousal, avoidance, and re-experiencing; treated with EMDR",
                        "Anticipatory anxiety, avoidance anxiety, and panic; treated with propranolol"
                    ],
                    "answer": 2,
                    "rationale": "PTSD's three core symptoms are hyperarousal, avoidance of reminders, and re-experiencing events, and EMDR (eye movement desensitization and reprocessing) is a relatively new trauma-focused psychotherapy used to treat it. The other symptom triads describe OCD, depression, and panic disorder respectively, and their paired treatments (deep brain stimulation, bupropion, propranolol) belong to those other conditions, not PTSD's first-line psychotherapy.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with social anxiety disorder is prescribed propranolol for an upcoming public speaking engagement. How should this medication be timed?",
                    "options": [
                        "Taken daily regardless of scheduled events",
                        "Taken only after symptoms of anxiety have already started",
                        "Taken at bedtime the night before the event",
                        "Taken 1-2 hours before the anticipated triggering event"
                    ],
                    "answer": 3,
                    "rationale": "Propranolol, a beta-blocker used for social anxiety disorder, is taken 1-2 hours before a known triggering event to help the patient get through it. It is not a daily maintenance medication in this use, isn't reserved for after symptoms begin, and bedtime-the-night-before dosing would not provide coverage at the time of the actual event.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has intrusive, unwanted thoughts about contamination and repeatedly washes their hands to the point of skin breakdown. Which terms describe these two components, and what is a second-line medication for this condition?",
                    "options": [
                        "Obsessions and compulsions; clomipramine (a TCA) is second-line",
                        "Hyperarousal and avoidance; treated with an SSRI",
                        "Anticipatory and avoidance anxiety; treated with buspirone",
                        "Positive and negative symptoms; treated with an antipsychotic"
                    ],
                    "answer": 0,
                    "rationale": "The intrusive thoughts are obsessions and the repeated rituals are compulsions, defining OCD. SSRIs are first-line for OCD, with clomipramine (a TCA) as second-line. Hyperarousal/avoidance describes PTSD, anticipatory/avoidance anxiety describes panic disorder, and positive/negative symptoms is psychotic-disorder terminology, not used to describe OCD in this content.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is started on fluoxetine (Prozac) for depression. What is its mechanism of action?",
                    "options": [
                        "Blocking reuptake of both serotonin and norepinephrine",
                        "Blocking serotonin reuptake at the presynaptic nerve ending",
                        "Inhibiting monoamine oxidase to increase norepinephrine, serotonin, and dopamine",
                        "Blocking reuptake of norepinephrine and serotonin via anticholinergic activity"
                    ],
                    "answer": 1,
                    "rationale": "Fluoxetine is an SSRI — it selectively blocks serotonin reuptake at the presynaptic nerve ending, leaving more serotonin available in the synapse. Blocking both serotonin and norepinephrine reuptake describes an SNRI like venlafaxine, inhibiting monoamine oxidase describes an MAOI, and anticholinergic-associated norepinephrine/serotonin reuptake blockade describes a TCA.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking duloxetine (Cymbalta), an SNRI, should be monitored for which specific adverse effect more closely than with a typical SSRI?",
                    "options": [
                        "Gingival hyperplasia",
                        "Hypertensive crisis with tyramine-containing foods",
                        "Increased liver function tests (LFTs)",
                        "Gynecomastia"
                    ],
                    "answer": 2,
                    "rationale": "SNRIs share most SSRI adverse effects but additionally cause sweating, blurred vision, and increased LFTs, with duloxetine specifically flagged for liver function monitoring. Gingival hyperplasia is a phenytoin effect, hypertensive crisis with tyramine is an MAOI risk, and gynecomastia is not an adverse effect discussed for SNRIs in this content.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with depression and a history of suicidal ideation is being considered for a tricyclic antidepressant (TCA). What is the primary safety concern that limits TCA use in this population?",
                    "options": [
                        "TCAs cause immediate physical dependence",
                        "TCAs are contraindicated in anyone with a psychiatric diagnosis",
                        "TCAs require inpatient administration only",
                        "TCA overdose can be fatal, which is especially concerning given the patient's elevated suicide risk"
                    ],
                    "answer": 3,
                    "rationale": "TCAs like amitriptyline have good efficacy and tolerable side effects but carry a risk of fatal overdose — a major concern since depression and anxiety already place patients at higher suicide risk, and the medication itself can sometimes increase suicidal thoughts. TCAs are not described as causing immediate physical dependence, are not contraindicated for all psychiatric diagnoses (they treat some), and are prescribed for outpatient use, not inpatient-only administration.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking phenelzine (Nardil), an MAOI, asks what foods to avoid. What should the nurse teach?",
                    "options": [
                        "Avoid aged cheese, smoked meats, yeast breads, and red wine due to tyramine content",
                        "Avoid grapefruit and fatty foods",
                        "Avoid foods high in vitamin K",
                        "No dietary restrictions are needed with MAOIs"
                    ],
                    "answer": 0,
                    "rationale": "MAOIs like phenelzine require strict avoidance of tyramine-rich foods (aged cheese, smoked meats, yeast/bread, red wine) to prevent a hypertensive crisis, the most serious MAOI risk. Grapefruit/fatty food avoidance is a benzodiazepine (CYP450) teaching point, vitamin K restriction relates to warfarin, and MAOIs absolutely require dietary restriction, not none.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is started on bupropion (Wellbutrin) for depression with a history of seizures. What should the nurse recognize as most relevant?",
                    "options": [
                        "Bupropion has no interaction concerns with seizure history",
                        "Bupropion lowers the seizure threshold, so seizure history is a relevant safety consideration",
                        "Bupropion is the safest antidepressant for any patient with a seizure history",
                        "Bupropion causes sedation, making seizure activity less likely to be noticed"
                    ],
                    "answer": 1,
                    "rationale": "Bupropion's known side effects include seizure risk, making a seizure history clinically relevant before starting this stimulant-like, amphetamine-structured antidepressant. It is not seizure-history-neutral, is not described as the safest choice for such patients, and it causes a stimulant effect (decreased appetite, faster onset) rather than sedation.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient took an accidental benzodiazepine overdose and is showing significant CNS/respiratory depression. What is the antidote, and what combination should patients on benzodiazepines be taught to avoid?",
                    "options": [
                        "Naloxone; avoid combining with antihypertensives",
                        "Acetylcysteine; avoid combining with acetaminophen",
                        "Flumazenil; avoid combining with other CNS depressants like alcohol, opioids, or Benadryl",
                        "Protamine sulfate; avoid combining with anticoagulants"
                    ],
                    "answer": 2,
                    "rationale": "Flumazenil is the benzodiazepine antidote, and patients should be taught never to combine benzodiazepines with other CNS depressants (alcohol, opioids, barbiturates, Benadryl) due to the risk of fatal respiratory depression. Naloxone reverses opioids, acetylcysteine reverses acetaminophen toxicity, and protamine sulfate reverses heparin — none apply to benzodiazepine overdose.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which statement correctly reflects current understanding of substance use disorder (SUD) pathophysiology?",
                    "options": [
                        "SUD is best understood as a personal weakness or moral failure",
                        "SUD reflects genetics alone, with no environmental contribution",
                        "SUD-related brain changes are permanent and cannot improve with abstinence",
                        "SUD involves a complex interaction of environmental, biological, genetic, and brain-chemistry factors, including large dopamine surges that disrupt normal reward pathways"
                    ],
                    "answer": 3,
                    "rationale": "SUD is a disease driven by a complex interaction of environmental, biological, genetic, and brain-chemistry factors — large, rapid dopamine surges from substance use disrupt normal reward pathways, causing adaptive downregulation over time. It is explicitly not a personal weakness, is not genetics alone, and brain imaging shows these dopamine transporter changes are reversible with abstinence, not permanent.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is identified as a protective factor against substance use disorder, rather than a risk factor?",
                    "options": [
                        "Parental monitoring and support",
                        "Lack of parental supervision",
                        "Drug availability at school",
                        "Community poverty"
                    ],
                    "answer": 0,
                    "rationale": "Parental monitoring and support is a protective factor, along with good self-control, positive relationships, good grades, school anti-drug policies, and neighborhood resources. Lack of parental supervision, drug availability at school, and community poverty are all listed as risk factors instead.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient in opioid use disorder treatment is prescribed buprenorphine/naloxone (Suboxone) rather than methadone. What is the key mechanistic difference?",
                    "options": [
                        "Suboxone must be given IV daily at a clinic, while methadone is sublingual",
                        "Methadone is a full mu agonist occupying opioid receptors, while Suboxone combines a partial agonist (buprenorphine) with an antagonist (naloxone) for lower abuse potential",
                        "Suboxone has no risk of causing withdrawal symptoms, unlike methadone",
                        "Methadone is only used for alcohol use disorder, not opioid use disorder"
                    ],
                    "answer": 1,
                    "rationale": "Methadone is a full synthetic opioid analgesic and mu agonist that occupies opioid receptors to reduce cravings, while Suboxone pairs buprenorphine (a partial agonist) with naloxone (an antagonist), giving it lower abuse potential than methadone or buprenorphine alone. Suboxone is actually given sublingually or buccally, not IV, and methadone is given at a clinic, not the reverse; Suboxone can still cause opioid withdrawal symptoms as a side effect, and methadone is specifically used for opioid use disorder, not alcohol use disorder.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient in opioid withdrawal reports feeling extremely miserable with nausea, vomiting, and muscle aches. The nurse should recognize that, compared to benzodiazepine or alcohol withdrawal, opioid withdrawal is:",
                    "options": [
                        "Equally likely to cause seizures and delirium tremens",
                        "More dangerous because it can cause Wernicke's encephalopathy",
                        "Unpleasant and flu-like, but not life-threatening",
                        "Typically shorter, resolving fully within 24 hours"
                    ],
                    "answer": 2,
                    "rationale": "Opioid withdrawal is severe and flu-like — nausea, vomiting, cramps, diarrhea, sweating, muscle aches — but not life-threatening, unlike benzodiazepine/alcohol withdrawal, which can cause seizures, delirium tremens, and Wernicke's encephalopathy. Opioid withdrawal generally lasts 5-10 days, not resolving within 24 hours.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient in alcohol withdrawal is being monitored for signs of Wernicke's encephalopathy. Which combination of findings should the nurse recognize as its three hallmark traits?",
                    "options": [
                        "Tachycardia, hypertension, and fever",
                        "Palpitations, panic attacks, and headache",
                        "Hallucinations, agitation, and diaphoresis",
                        "Confusion/disorientation, ocular motor dysfunction (nystagmus), and gait ataxia"
                    ],
                    "answer": 3,
                    "rationale": "Wernicke's encephalopathy's three hallmark traits are confusion/disorientation/attention issues, ocular motor dysfunction (nystagmus, lateral rectus palsy, conjugate gaze palsy), and gait ataxia — prevented with thiamine supplementation during alcohol withdrawal treatment. Tachycardia/hypertension/fever and hallucinations/agitation/diaphoresis describe delirium tremens instead, and palpitations/panic attacks/headache are non-dangerous withdrawal symptoms shared by benzodiazepines and alcohol.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient in alcohol withdrawal is at risk for seizures and delirium tremens. Which two interventions should the nurse anticipate as standard treatment? Select all that apply.",
                    "options": [
                        "A benzodiazepine taper to prevent seizures and reduce delirium tremens severity",
                        "Thiamine (vitamin B1) supplementation to help prevent Wernicke's encephalopathy",
                        "Immediate administration of naloxone",
                        "Strict avoidance of tyramine-containing foods",
                        "Encouraging participation in 12-step programs or therapy alongside medical treatment"
                    ],
                    "answers": [
                        0,
                        1,
                        4
                    ],
                    "rationale": "Alcohol withdrawal is treated with a benzodiazepine taper (prevents seizures, decreases DT severity), thiamine supplementation (chronic alcohol use impairs vitamin absorption and thiamine deficiency causes Wernicke's encephalopathy), and 12-step/therapy support alongside medication. Naloxone reverses opioid overdose, not alcohol withdrawal, and tyramine avoidance is an MAOI dietary restriction unrelated to alcohol withdrawal management.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is NOT one of the three ways fungus typically becomes pathogenic, according to lecture content?",
                    "options": [
                        "Genetic mutation of normal skin flora into a fungal pathogen",
                        "Implantation through broken skin after an injury",
                        "Inhalation of airborne fungal spores",
                        "Antibiotic use wiping out normal flora, allowing fungal overgrowth"
                    ],
                    "answer": 0,
                    "rationale": "Fungus becomes a problem through implantation (entering via broken skin), inhalation (airborne spores), or after antibiotic use (which wipes out normal flora and lets fungus proliferate). Genetic mutation of normal flora into a fungal pathogen is not a mechanism discussed in this content.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a fungal infection affecting keratinized tissue (hair, skin, nails). A separate patient has a yeast infection of the mucous membranes. Which terms and causative organisms correctly match each patient?",
                    "options": [
                        "Both are candidiasis, caused by dermatophytes",
                        "The first is tinea, caused by dermatophytes; the second is candidiasis, caused by Candida albicans",
                        "The first is candidiasis, caused by Candida albicans; the second is tinea, caused by dermatophytes",
                        "Both are tinea, caused by Candida albicans"
                    ],
                    "answer": 1,
                    "rationale": "Tinea (ringworm) is caused by dermatophytes, which favor keratinized tissue — hair, skin, and nails. Candidiasis is caused by the yeast Candida albicans and favors mucous membranes and skin. The two are frequently confused, but their causative organisms and preferred tissue types are distinct.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A child is diagnosed with tinea capitis (cradle cap). Why can't this be treated with a topical antifungal cream alone?",
                    "options": [
                        "Topical antifungals cause permanent alopecia in children",
                        "Tinea capitis is caused by a virus, not a fungus, so antifungals don't work at all",
                        "Topical antifungals are not effective for tinea capitis; oral systemic antifungals are required for 4-6 weeks",
                        "Children under 12 cannot use any antifungal medication"
                    ],
                    "answer": 2,
                    "rationale": "Tinea capitis specifically requires oral systemic antifungals given twice daily for 4-6 weeks, since topical creams/ointments are not effective for this dermatophyte infection of the scalp. It is fungal, not viral, and children can use antifungal medications generally — the issue is the topical route's ineffectiveness for this specific infection site.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is nystatin never given intravenously?",
                    "options": [
                        "It has poor GI absorption when given IV",
                        "It only comes in a topical cream formulation",
                        "IV nystatin causes immediate anaphylaxis in all patients",
                        "It is too toxic to be given by the IV route"
                    ],
                    "answer": 3,
                    "rationale": "Nystatin is too toxic to be given IV, so it is only used topically (creams, powders) or orally (swish-and-spit or swish-and-swallow) for superficial candidiasis. Poor GI absorption describes the oral route specifically, it is available in liquid/oral forms in addition to topical, and it does not universally cause anaphylaxis.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving IV amphotericin B for a systemic fungal infection needs which of the following monitored, given the drug's known toxicities?",
                    "options": [
                        "BUN/creatinine and continuous cardiac monitoring",
                        "Liver function tests only",
                        "Blood glucose only",
                        "INR and platelet count"
                    ],
                    "answer": 0,
                    "rationale": "Amphotericin B is a high-alert drug that is hard on the kidneys (monitor BUN/creatinine) and can cause cardiac dysrhythmias (requires cardiac monitoring during IV administration), so it must be diluted and infused slowly. Liver function monitoring is the key concern with azole antifungals, not amphotericin B, and blood glucose/INR/platelets are not the primary monitoring concerns for this drug.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient starting fluconazole for a fungal infection should be monitored for which adverse effect, and what memory aid helps recall it?",
                    "options": [
                        "Nephrotoxicity — remember azoles have an 'N' for nephron",
                        "Hepatotoxicity — remember azoles have an 'L' in the name for liver",
                        "Cardiotoxicity — remember azoles have a 'C' for cardiac",
                        "Ototoxicity — remember azoles have an 'O' for otic"
                    ],
                    "answer": 1,
                    "rationale": "Azole antifungals like fluconazole carry a risk of liver toxicity — the memory aid taught is that azoles have an 'L' in the name for Liver — so AST/ALT should be monitored along with signs like jaundice or abdominal pain. Nephrotoxicity/cardiac monitoring is the amphotericin B concern instead, and ototoxicity is not a documented azole effect in this content.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking oral fluconazole is also prescribed a proton pump inhibitor (PPI). What should the nurse recognize about timing these two medications?",
                    "options": [
                        "They should be given at the exact same time to maximize effect",
                        "The PPI should always be given first, then fluconazole 24 hours later",
                        "They should be separated by at least 2 hours, since fluconazole needs an acidic stomach environment to absorb",
                        "There is no interaction and no special timing is needed"
                    ],
                    "answer": 2,
                    "rationale": "Azoles like fluconazole require an acidic stomach environment for proper absorption, so they should be separated from PPIs or other acid-reducing medications by at least 2 hours. Giving them simultaneously or without separation risks reduced fluconazole absorption, and a full 24-hour separation is not the standard taught here.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Griseofulvin is specifically indicated for which situation?",
                    "options": [
                        "First-line treatment of superficial candidiasis",
                        "IV treatment of systemic mycoses in immunocompromised patients",
                        "Prophylaxis before cardiac surgery",
                        "Dermatophyte infections of the scalp, skin, or nails resistant to other treatments"
                    ],
                    "answer": 3,
                    "rationale": "Griseofulvin is an older, inexpensive drug that inhibits fungal mitosis by binding keratin, used for dermatophyte infections of the scalp, skin, or nails that are resistant to other treatments. It is not first-line for candidiasis, is not used IV for systemic mycoses (that's amphotericin B's role), and is not a surgical prophylaxis agent.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A pregnant patient develops dark macules across both cheeks. A separate patient develops depigmented patches of skin with no clear cause, possibly linked to an autoimmune condition. Which conditions do these two presentations describe?",
                    "options": [
                        "The first is melasma; the second is vitiligo",
                        "Both describe vitiligo",
                        "The first is vitiligo; the second is melasma",
                        "Both describe tinea versicolor"
                    ],
                    "answer": 0,
                    "rationale": "Melasma ('the mask of pregnancy') causes dark macules on the face, common in pregnancy or with oral contraceptive use. Vitiligo is an acquired condition causing depigmented skin patches from abnormal melanin production, sometimes associated with autoimmune conditions like pernicious anemia or hyperthyroidism. Neither is tinea versicolor, which involves bleached patches from a yeast overgrowth.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient develops a painful, vesicular rash on a red base that follows a single dermatome and does not cross the midline. What is the diagnosis, and what significant complication should the nurse educate about?",
                    "options": [
                        "Cellulitis; risk of MRSA",
                        "Herpes zoster (shingles); risk of postherpetic neuralgia",
                        "Impetigo; risk of scarring",
                        "Contact dermatitis; risk of secondary infection"
                    ],
                    "answer": 1,
                    "rationale": "Shingles (herpes zoster) reactivates from dormant varicella zoster virus in a single dermatome, producing an asymmetric, non-midline-crossing vesicular rash. A significant complication is postherpetic neuralgia — persistent pain in the same area, affecting about 13% of patients over 60. Cellulitis, impetigo, and contact dermatitis do not follow a dermatomal pattern.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient develops red, warm, raised skin with palpable borders and purulent, fluctuant drainage. What is this, and what is the primary treatment?",
                    "options": [
                        "Cellulitis; treated with topical antibacterial only",
                        "Tinea corporis; treated with oral antifungals",
                        "An abscess; treated with incision and drainage plus antibiotics",
                        "Psoriasis; treated with UV phototherapy"
                    ],
                    "answer": 2,
                    "rationale": "An abscess presents as inflamed, red, raised skin with palpable borders and purulent, fluctuant (fluid-filled) drainage — treated with incision and drainage (I&D) plus antibiotics. Cellulitis is diffuse redness/warmth/swelling without a discrete fluctuant collection and is treated with antibiotics alone, while tinea and psoriasis are unrelated skin conditions with different presentations and treatments.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A hospitalized patient develops a MRSA infection linked to a recent central line placement. A separate patient in the community develops a painful boil that tests positive for MRSA. How should treatment differ between these two patients?",
                    "options": [
                        "Both should be treated identically with oral dicloxacillin",
                        "The hospital-acquired case requires no antibiotics, only observation",
                        "The community-acquired case must be treated with IV vancomycin only",
                        "The hospital-acquired case is typically treated with IV vancomycin or linezolid; the community-acquired case with Bactrim or dicloxacillin"
                    ],
                    "answer": 3,
                    "rationale": "Hospital-acquired MRSA, often linked to invasive procedures like central lines, is typically treated with IV vancomycin or linezolid. Community-acquired MRSA, often starting as a painful boil transmitted person-to-person, is typically treated with Bactrim or dicloxacillin. MRSA requires antibiotic treatment in both settings, and treatment approaches differ by acquisition setting.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Using the ABCDE mnemonic for melanoma screening, which finding would be MOST concerning?",
                    "options": [
                        "A mole with an irregular, notched border and color variation from brown to blue that has grown larger over the past few months",
                        "A uniformly brown mole, 3mm in diameter, unchanged for years",
                        "A symmetric mole with even, smooth borders",
                        "A small, flesh-colored, dome-shaped bump that has not changed"
                    ],
                    "answer": 0,
                    "rationale": "The ABCDEs are Asymmetry, Border irregularity, Color variation, Diameter greater than a pencil eraser, and Evolving change over time — a mole with an irregular/notched border, color variation, and recent growth hits multiple concerning criteria. A small, unchanged, uniformly colored mole and a symmetric mole with even borders are reassuring findings, and a flesh-colored dome-shaped bump that hasn't changed is more consistent with an early basal cell lesion, not the ABCDE melanoma pattern being tested here.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which statement correctly compares basal cell carcinoma, squamous cell carcinoma, and melanoma?",
                    "options": [
                        "Melanoma is the most common but least dangerous",
                        "Basal cell carcinoma is the most common and usually does not metastasize; melanoma is rare but the most deadly, spreading both radially and vertically",
                        "Squamous cell carcinoma never metastasizes under any circumstances",
                        "Basal cell carcinoma has the highest metastasis rate of the three"
                    ],
                    "answer": 1,
                    "rationale": "Basal cell carcinoma is the most common skin cancer and usually does not metastasize (most curable), while melanoma is rare but the most deadly, spreading both radially (wide) and vertically (deep) into the dermis. Squamous cell carcinoma can metastasize if not caught early, and basal cell carcinoma has the lowest, not highest, metastasis rate of the three.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a chronic, non-contagious skin condition with thick, white/silvery, red-edged plaques that has been linked to obesity and cardiovascular disease. A separate patient has itchy, dry, thickened skin behind the knees and on the wrists with a family history of asthma. Which conditions do these describe?",
                    "options": [
                        "The first is eczema; the second is psoriasis",
                        "Both describe psoriasis",
                        "The first is psoriasis; the second is eczema",
                        "Both describe contact dermatitis"
                    ],
                    "answer": 2,
                    "rationale": "Psoriasis produces thick, white/silvery, red-edged plaques from overly rapid skin cell turnover, and is linked (though not fully explained) to obesity and cardiovascular disease. Eczema (atopic dermatitis) produces itchy, dry, thickened skin often at the knees/wrists, with a hereditary tendency linked to asthma and hay fever. Neither presentation is contact dermatitis, which is a Type IV hypersensitivity reaction to a specific contact allergen.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving concentrated enteral tube feedings develops diarrhea. Which pathophysiologic mechanism of diarrhea is most likely responsible?",
                    "options": [
                        "Secretory diarrhea",
                        "Exudative diarrhea",
                        "Diarrhea related to motility disturbance",
                        "Osmotic diarrhea"
                    ],
                    "answer": 3,
                    "rationale": "Osmotic diarrhea results from increased osmotically active solutes pulling sodium and water into the gut, and is commonly seen with concentrated tube feedings. Secretory diarrhea results from a bacterial toxin (e.g., Vibrio cholerae), exudative diarrhea from active bowel inflammation (e.g., Crohn's disease), and motility-disturbance diarrhea from decreased small intestine absorption (e.g., dumping syndrome), none of which describe concentrated tube feedings.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking bismuth subsalicylate (Pepto-Bismol) for diarrhea calls the clinic concerned that their tongue and stool have turned black. What should the nurse explain?",
                    "options": [
                        "This is a harmless effect from bismuth combining with sulfur in the mouth and GI tract",
                        "This indicates GI bleeding and requires immediate emergency evaluation",
                        "This means the patient has developed a fungal superinfection",
                        "This is a sign of liver failure and the medication should be stopped immediately"
                    ],
                    "answer": 0,
                    "rationale": "Dark stools and a darkened tongue are a harmless, well-known effect of bismuth subsalicylate, caused by bismuth combining with naturally present sulfur in the mouth and GI tract. It is not a sign of GI bleeding, fungal infection, or liver failure, though patients should still be advised what to expect so it isn't alarming.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why is diphenoxylate with atropine (Lomotil) prescription-only, while loperamide (Imodium) is available over the counter?",
                    "options": [
                        "Lomotil is far more expensive to manufacture",
                        "Lomotil's atropine component carries anticholinergic adverse effects that can be significant",
                        "Loperamide only works for viral diarrhea, not bacterial diarrhea",
                        "Lomotil has no anti-motility effect at all"
                    ],
                    "answer": 1,
                    "rationale": "Diphenoxylate with atropine (Lomotil) carries anticholinergic adverse effects (urinary retention, dry skin, bradycardia, hypotension, and more) from its atropine component, which can be serious enough to require a prescription. Loperamide is a simpler anti-peristaltic agent without those same anticholinergic risks, which is why it's available OTC — the difference isn't about viral vs. bacterial diarrhea or manufacturing cost.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with Clostridioides difficile (C. diff) infection is prescribed a probiotic specifically studied for this use. Which product is this?",
                    "options": [
                        "Lactobacillus (Bacid/Culturelle)",
                        "Bismuth subsalicylate",
                        "Saccharomyces boulardii (Florastor)",
                        "Docusate sodium"
                    ],
                    "answer": 2,
                    "rationale": "Saccharomyces boulardii (Florastor) is specifically used in the treatment of C. diff. Lactobacillus-based probiotics are more general gut-flora replacements often used after antibiotic-associated diarrhea generally, bismuth subsalicylate is an adsorbent antidiarrheal, and docusate sodium is a laxative, not a probiotic.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is teaching a patient with chronic constipation about long-term laxative use. Which class is appropriate for ongoing, long-term use, unlike the others?",
                    "options": [
                        "Stimulant laxatives (bisacodyl, senna)",
                        "Saline laxatives (magnesium citrate)",
                        "Hyperosmotic laxatives (polyethylene glycol)",
                        "Bulk-forming laxatives (psyllium)"
                    ],
                    "answer": 3,
                    "rationale": "Bulk-forming laxatives like psyllium work similarly to dietary fiber with no systemic effects, making them the only class appropriate for long-term use. Stimulant, saline, and hyperosmotic laxatives are all intended for short-term use only, and inappropriate long-term use of any of them can lead to dependence or bowel damage.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with hepatic encephalopathy is prescribed lactulose. Beyond treating constipation, why is this drug specifically useful for this patient?",
                    "options": [
                        "It reduces blood ammonia levels, which is beneficial in hepatic encephalopathy",
                        "It has no other benefit beyond treating constipation",
                        "It cures the underlying liver disease",
                        "It is the only laxative safe to give IV"
                    ],
                    "answer": 0,
                    "rationale": "Lactulose creates a hyperosmotic environment in the large intestine and also reduces blood ammonia levels, which is specifically beneficial for patients with hepatic encephalopathy (a condition caused by ammonia buildup). It does not cure liver disease, and it is given orally, not IV — all antidiarrheals and most laxatives discussed in this content are oral or rectal, not IV.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which class of laxatives carries the highest risk of dependence, and why?",
                    "options": [
                        "Bulk-forming laxatives, because they are used long-term",
                        "Stimulant laxatives, because they directly induce intestinal peristalsis in a dose-proportional way",
                        "Emollient laxatives, because they are used in every fecal impaction",
                        "Saline laxatives, because they act within minutes"
                    ],
                    "answer": 1,
                    "rationale": "Stimulant laxatives (bisacodyl, senna) directly induce intestinal peristalsis, with effects proportional to the dose — this class carries the highest dependence risk among laxatives. Bulk-forming laxatives are the safest for long-term use precisely because they don't carry this risk, and emollient/saline laxatives are used for shorter-term or procedural purposes without the same dependence profile.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is stung by a bee for the second time in their life and develops hives and swelling 15-20 minutes later, but had no reaction to the first sting. What explains this timing?",
                    "options": [
                        "The venom dose was simply larger the second time",
                        "This is a Type IV delayed hypersensitivity reaction",
                        "The first exposure sensitized the patient by triggering IgE antibody production, which then bound to mast cells awaiting a second exposure",
                        "This indicates the patient developed a new food allergy unrelated to the bee sting"
                    ],
                    "answer": 2,
                    "rationale": "Type I hypersensitivity typically requires a first exposure to sensitize the patient — triggering B cells to mature into plasma cells that produce IgE antibodies, which then bind to mast cells and wait. A second exposure links the antigen to the mast-cell-bound IgE, triggering degranulation and the allergic symptoms 15-20 minutes later. This is not simply about venom dose, is a Type I (not Type IV) reaction given the timing, and is unrelated to a new food allergy.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient develops laryngeal edema and severe hypotension within minutes of receiving an IV antibiotic. What is the priority nursing action and rationale?",
                    "options": [
                        "Administer an oral antihistamine and observe for 30 minutes",
                        "Continue the antibiotic infusion at a slower rate",
                        "Apply a topical corticosteroid to any visible hives",
                        "Recognize this as anaphylaxis, a life-threatening emergency, and prepare to administer epinephrine"
                    ],
                    "answer": 3,
                    "rationale": "Laryngeal edema and severe hypotension indicate anaphylaxis — a life-threatening systemic Type I hypersensitivity reaction requiring immediate epinephrine, along with antihistamines and glucocorticoids. An oral antihistamine alone is inadequate for this severity, continuing the causative infusion is dangerous, and topical corticosteroids do not address the airway/circulatory emergency.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is preparing epinephrine for a patient in anaphylaxis versus a patient in cardiac arrest. What is the critical safety distinction?",
                    "options": [
                        "Anaphylaxis uses a 1:1,000 concentration; cardiac arrest uses a more dilute 1:10,000 concentration",
                        "There is no difference; the same concentration is used for both situations",
                        "Anaphylaxis uses a 1:10,000 concentration; cardiac arrest uses 1:1,000",
                        "Epinephrine is never given for anaphylaxis, only for cardiac arrest"
                    ],
                    "answer": 0,
                    "rationale": "Anaphylaxis dosing uses a 1:1,000 concentration of epinephrine, while cardiac arrest (per ACLS protocol) uses a more dilute 1:10,000 concentration. Confusing the two concentrations and routes can be fatal — giving an IM-concentration dose by the IV route, for example — so this distinction must always be double-checked before administration.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving a blood transfusion develops fever, chills, and flushing 10 minutes into the infusion. What type of hypersensitivity reaction is this, and what is the immediate nursing action?",
                    "options": [
                        "Type IV delayed hypersensitivity; continue the transfusion and reassess in 48 hours",
                        "Type II cytotoxic hypersensitivity; stop the transfusion immediately",
                        "Type III immune complex hypersensitivity; slow the infusion rate and monitor",
                        "Type I hypersensitivity; administer epinephrine immediately"
                    ],
                    "answer": 1,
                    "rationale": "A transfusion reaction is a classic Type II (cytotoxic) hypersensitivity reaction, mediated by antibodies attacking antigens on the surface of transfused red blood cells. Fever, chills, or flushing during a transfusion means the transfusion must be stopped immediately, not continued, slowed, or treated as a Type I reaction requiring epinephrine (though severe transfusion reactions can become life-threatening if not stopped promptly).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with rheumatoid arthritis has antigen-antibody complexes depositing into their joints, triggering inflammation that damages the joint tissue. Which type of hypersensitivity does this describe, and what actually causes the tissue damage?",
                    "options": [
                        "Type II; the antibody-antigen complex directly attacks and lyses the joint cells",
                        "Type IV; T cells directly destroy the joint tissue with no antibody involvement",
                        "Type III; the inflammatory response to the deposited complex — not the complex itself — causes the tissue damage",
                        "Type I; mast cell degranulation destroys the joint cartilage"
                    ],
                    "answer": 2,
                    "rationale": "Rheumatoid arthritis is a classic Type III (immune complex) hypersensitivity reaction — antigen-antibody complexes (IgG/IgM) form in circulation and deposit into tissue (here, the joints), and the resulting inflammatory response, not the complex itself, causes the tissue damage. In Type II, the complex attacks the cell directly instead, Type IV involves no antibodies at all, and Type I involves IgE/mast cells, not immune complex deposition.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why does a tuberculin (Mantoux/TB) skin test need to be read 48-72 hours after placement rather than immediately?",
                    "options": [
                        "It is a Type I IgE-mediated reaction that takes that long to develop",
                        "The injected fluid itself takes 48-72 hours to fully absorb",
                        "It is actually read immediately, and the 48-72 hour window is a common misconception",
                        "It is a Type IV delayed hypersensitivity reaction, requiring time for T lymphocytes to migrate to the site and become active"
                    ],
                    "answer": 3,
                    "rationale": "The TB skin test is a classic Type IV (delayed) hypersensitivity reaction — mediated by T lymphocytes rather than antibodies, it takes time for T cells to migrate to the injection site and become active, so manifestations peak 48-72 hours after exposure. It is not IgE-mediated (that would be immediate, within minutes), and the delay is a genuine feature of the reaction's biology, not a matter of fluid absorption or a misconception.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "An elderly nursing home resident becomes acutely confused with no fever or dysuria reported. What should the nurse suspect, and why might this presentation be easy to miss?",
                    "options": [
                        "A urinary tract infection — elderly patients often present atypically with confusion rather than classic urinary symptoms",
                        "A stroke — UTIs never cause confusion in the elderly",
                        "Dementia progression — UTIs are unrelated to acute confusion",
                        "Medication overdose — this is unrelated to infection risk"
                    ],
                    "answer": 0,
                    "rationale": "Elderly patients with a UTI often present atypically — with confusion, anorexia, lethargy, anxiety, or increased falls — rather than the classic dysuria, frequency, and urgency seen in younger adults, making the diagnosis easy to miss without a high index of suspicion. This presentation should prompt UTI screening, not be dismissed as unrelated to infection, though stroke and medication effects remain reasonable differentials to also rule out.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is prescribed phenazopyridine (Pyridium) for UTI-related pain along with an antibiotic. What key teaching point should the nurse provide about phenazopyridine specifically?",
                    "options": [
                        "It replaces the need for the antibiotic entirely",
                        "It will turn the urine a harmless reddish-orange color and does not treat the infection itself",
                        "It must be taken on an empty stomach to prevent nausea",
                        "It cures the UTI within 24 hours"
                    ],
                    "answer": 1,
                    "rationale": "Phenazopyridine is a urinary analgesic that relieves UTI-related pain but does not treat the underlying infection — the antibiotic does that. A well-known, harmless side effect is that it turns urine a reddish-orange color, which patients should be told to expect so it isn't alarming. It does not replace antibiotic therapy, and no empty-stomach requirement or 24-hour cure claim is part of its teaching points here.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient experiences involuntary urine leakage every time she sneezes or lifts a heavy object, but does not experience sudden urges to void. Which type of incontinence is this, and what is the underlying cause?",
                    "options": [
                        "Urge incontinence, caused by an overactive detrusor muscle",
                        "Overflow incontinence, caused by an overly full bladder",
                        "Stress incontinence, caused by loss of pelvic floor muscle or fascial support",
                        "Functional incontinence, caused by a mobility limitation"
                    ],
                    "answer": 2,
                    "rationale": "Stress incontinence occurs with increased intra-abdominal pressure (sneezing, coughing, lifting), from loss of pelvic floor muscle or fascial support — often related to childbirth trauma or pelvic surgery — which disrupts the normal bladder-urethra angle. Urge incontinence instead involves a sudden urge with an overactive detrusor muscle, overflow incontinence involves an overly full bladder leaking, and functional incontinence involves an intact urinary system but a physical/cognitive barrier to reaching the toilet in time.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "During a blood transfusion, which of the following findings should prompt the nurse to stop the transfusion immediately? Select all that apply.",
                    "options": [
                        "New fever and chills",
                        "Flushing of the skin",
                        "New chest or back pain",
                        "A single voided urine of normal color and amount",
                        "Sudden restlessness and anxiety"
                    ],
                    "answers": [
                        0,
                        1,
                        2,
                        4
                    ],
                    "rationale": "Fever/chills, flushing, chest or back pain, and sudden restlessness/anxiety are all classic early signs of a transfusion reaction (a Type II hypersensitivity reaction) and should prompt stopping the transfusion immediately. A single voided urine of normal color and amount is a reassuring, unremarkable finding and is not a reason to stop the transfusion.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which term describes the body's stable, balanced set point itself, as opposed to the active process of getting back to it?",
                    "options": [
                        "Homeostasis",
                        "Allostasis",
                        "Allostatic load",
                        "General adaptation syndrome"
                    ],
                    "answer": 0,
                    "rationale": "Homeostasis (\"homeo\" = same/similar + \"stasis\" = stable) is the balanced set point itself. Allostasis is the dynamic process that gets the body back to — or adjusts — that set point. Allostatic load is the wear-and-tear demand of maintaining that process, and general adaptation syndrome is the staged physiologic response to a stressor, not the set point.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse explains that allostasis is best described as:",
                    "options": [
                        "The fixed, unchanging set point the body must return to",
                        "The dynamic process the body uses to achieve and maintain a steady state, including adjusting set points as needed",
                        "The point at which body systems fail from chronic stress",
                        "The initial fight-or-flight burst of energy"
                    ],
                    "answer": 1,
                    "rationale": "Allostasis is the body's dynamic, active process for attaining and maintaining stability, which can involve shifting a set point temporarily to meet a demand (e.g., increased respiratory rate during exercise). The fixed set point itself is homeostasis, systemic failure from chronic stress is allostatic overload, and the fight-or-flight burst is the alarm stage.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing student feels a manageable level of nervous energy before an exam that helps her focus and perform well. This is an example of:",
                    "options": [
                        "Distress",
                        "Allostatic overload",
                        "Eustress",
                        "Exhaustion stage"
                    ],
                    "answer": 2,
                    "rationale": "Eustress is positive stress perceived as within one's coping ability — it can motivate, sharpen focus, and improve performance. Distress is the opposite (perceived as beyond one's coping ability, decreasing performance), and allostatic overload/exhaustion describe systems breaking down under chronic, unresolved stress, not manageable pre-exam nerves.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "In the statement \"the upcoming certification exam is making the nurse anxious,\" which part is the stressor?",
                    "options": [
                        "The nurse's anxiety",
                        "The nurse's certification",
                        "The nurse's coping mechanism",
                        "The certification exam"
                    ],
                    "answer": 3,
                    "rationale": "The stressor is the actual force or challenge causing the stress response — here, the certification exam. The anxiety itself is the stress (what is felt in the body/mind), not the stressor.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which factor influencing a person's coping ability reflects that a child raised by a parent who panics under stress may learn to panic as well?",
                    "options": [
                        "Culture and environment",
                        "Genetics",
                        "Pre-existing health status",
                        "Prior personal experience"
                    ],
                    "answer": 0,
                    "rationale": "Culture and environment shape how stress is handled — values, viewpoints, and the environment someone grows up in (including a caregiver's stress responses) can be learned. Genetics refers to inherent differences in relaxation response, pre-existing health status refers to concurrent disease adding allostatic demand, and prior personal experience refers to one's own past encounters (e.g., anticipatory anxiety from a bad dental visit).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is an example of an unhealthy coping mechanism, as described in lecture?",
                    "options": [
                        "Going for a run after a stressful day",
                        "Using alcohol to manage stress",
                        "Talking to a friend about a stressful event",
                        "Practicing meditation"
                    ],
                    "answer": 1,
                    "rationale": "Drug or alcohol consumption is specifically named as an unhealthy way to cope with stress. Exercise, social support, and meditation are all examples of positive, effective coping strategies that help resolve the stressful situation or the feelings around it.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Place the stages of General Adaptation Syndrome in the correct order.",
                    "options": [
                        "Resistance, alarm, exhaustion",
                        "Exhaustion, resistance, alarm",
                        "Alarm, resistance, exhaustion",
                        "Alarm, exhaustion, resistance"
                    ],
                    "answer": 2,
                    "rationale": "General Adaptation Syndrome unfolds as alarm (initial fight-or-flight burst), then resistance (the body tries to cope with ongoing stress), and finally exhaustion if the stressor isn't resolved and supplies run out.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "During the alarm stage, corticotropin-releasing hormone (CRH) from the hypothalamus activates which two pathways simultaneously?",
                    "options": [
                        "The parasympathetic nervous system and the renal system",
                        "The somatic nervous system and the thyroid axis",
                        "The immune system and the digestive system",
                        "The sympathetic (adrenergic) pathway and the HPA axis"
                    ],
                    "answer": 3,
                    "rationale": "CRH simultaneously activates the sympathetic nervous system (leading to catecholamine release from the adrenal medulla — the adrenergic response) and the HPA axis (leading to ACTH release from the anterior pituitary and cortisol release from the adrenal cortex).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the correct sequence of the sympathetic/adrenergic stress pathway?",
                    "options": [
                        "CRH → sympathetic nervous system → adrenal medulla → catecholamines",
                        "CRH → anterior pituitary → adrenal cortex → cortisol",
                        "ACTH → adrenal medulla → aldosterone",
                        "CRH → adrenal cortex → catecholamines"
                    ],
                    "answer": 0,
                    "rationale": "The adrenergic pathway runs CRH → sympathetic nervous system → adrenal medulla → catecholamines (norepinephrine and epinephrine). The CRH → anterior pituitary → adrenal cortex → cortisol sequence describes the separate HPA axis, and the adrenal medulla releases catecholamines, not aldosterone (aldosterone comes from the adrenal cortex).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is the correct sequence of the HPA axis?",
                    "options": [
                        "CRH → adrenal medulla → catecholamines",
                        "CRH → anterior pituitary → ACTH → adrenal cortex → cortisol",
                        "ACTH → hypothalamus → cortisol",
                        "CRH → adrenal cortex → ACTH → cortisol"
                    ],
                    "answer": 1,
                    "rationale": "The HPA axis runs hypothalamus (CRH) → anterior pituitary (ACTH) → adrenal cortex (cortisol), a negative feedback loop that normally keeps cortisol in a normal range. The CRH → adrenal medulla → catecholamines sequence describes the separate sympathetic/adrenergic pathway.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is a sympathetic nervous system (\"fight-or-flight\") effect?",
                    "options": [
                        "Increased peristalsis",
                        "Bladder contraction",
                        "Bronchiole dilation",
                        "Increased salivation"
                    ],
                    "answer": 2,
                    "rationale": "The SNS dilates bronchioles to improve oxygenation to the muscles. Increased peristalsis, bladder contraction, and increased salivation are all parasympathetic (\"rest-and-digest\") effects — the SNS instead decreases peristalsis, inhibits bladder contraction, and stops salivation.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is a parasympathetic nervous system (\"rest-and-digest\") effect?",
                    "options": [
                        "Pupil dilation",
                        "Inhibited bladder contraction",
                        "Decreased gastric secretion",
                        "Increased peristalsis"
                    ],
                    "answer": 3,
                    "rationale": "The PNS increases peristalsis as part of digestion resuming. Pupil dilation, inhibited bladder contraction, and decreased gastric secretion are all sympathetic (\"fight-or-flight\") effects instead.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is norepinephrine's primary cardiovascular action during the stress response?",
                    "options": [
                        "Constricting smooth muscle in blood vessels to maintain blood pressure",
                        "Relaxing bronchial smooth muscle",
                        "Increasing insulin secretion",
                        "Increasing heart contractility directly"
                    ],
                    "answer": 0,
                    "rationale": "Norepinephrine is the primary constrictor of vascular smooth muscle, regulating blood flow distribution and maintaining blood pressure. Relaxing bronchial smooth muscle and enhancing heart contractility are primarily epinephrine's actions, and both catecholamines inhibit (not increase) insulin secretion.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which action is primarily attributed to epinephrine rather than norepinephrine?",
                    "options": [
                        "Pupil dilation for far-distance vision",
                        "Enhancing heart contractility and increasing cardiac output",
                        "Decreasing gastric secretion",
                        "Primary vasoconstriction of blood vessels"
                    ],
                    "answer": 1,
                    "rationale": "Epinephrine enhances heart contractility, increases heart rate and venous return, and raises cardiac output, and it relaxes bronchial smooth muscle to dilate airways. Pupil dilation, decreased gastric secretion, and primary vasoconstriction are more specifically norepinephrine's actions.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How does cortisol affect the immune system during the stress response?",
                    "options": [
                        "It enhances white blood cell response",
                        "It has no effect on immune function",
                        "It suppresses the immune response, increasing infection risk",
                        "It only affects the reproductive system, not immunity"
                    ],
                    "answer": 2,
                    "rationale": "Cortisol suppresses the immune response — it causes lymph tissue atrophy and only a limited white blood cell response, increasing the risk for infection and inflammation. It also inhibits reproductive hormones, but that is a separate effect, not its only one.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What is aldosterone's primary action in the kidney?",
                    "options": [
                        "Excreting sodium and retaining potassium",
                        "Increasing glucose reabsorption",
                        "Inhibiting ADH release",
                        "Reabsorbing sodium while excreting potassium and hydrogen ions"
                    ],
                    "answer": 3,
                    "rationale": "Aldosterone acts on the kidney to reabsorb sodium and excrete potassium and hydrogen ions; because water follows sodium, this promotes fluid retention, raising extracellular volume and blood pressure. It does not act on glucose reabsorption or ADH release.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why can severe or prolonged stress contribute to conditions like PTSD?",
                    "options": [
                        "Catecholamines and glucocorticoids work together in the brain to form strong memories of the stressor, which can become traumatic memories",
                        "Cortisol directly damages the hippocampus with no effect on memory formation",
                        "Stress hormones have no role in memory",
                        "PTSD is unrelated to the HPA axis"
                    ],
                    "answer": 0,
                    "rationale": "Catecholamines and glucocorticoids work together in the brain to help form memories of a stressor, which is normally adaptive (it teaches the brain how to respond next time) but can create a traumatic memory from a severe or prolonged stressor, contributing to conditions like PTSD.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "When a stressor resolves during the resistance stage, what physiologic shift occurs?",
                    "options": [
                        "The sympathetic nervous system further intensifies its response",
                        "The parasympathetic nervous system takes over, producing a cholinergic relaxation response",
                        "The adrenal cortex immediately atrophies",
                        "Cortisol production permanently stops"
                    ],
                    "answer": 1,
                    "rationale": "When the stressor is removed, the parasympathetic nervous system takes over with a cholinergic relaxation response — heart rate and blood pressure lower and immune function, sleep, and digestion improve. Hormone levels take some time to normalize, so lingering jitteriness for a short while is common (e.g., after narrowly avoiding a car accident).",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "If a stressor continues past the resistance stage without resolving, what happens?",
                    "options": [
                        "The body fully adapts with no further consequences",
                        "Hormone levels immediately return to baseline",
                        "The body's supplies (blood sugar, catecholamines, cortisol) become depleted, pushing it toward exhaustion",
                        "The parasympathetic nervous system takes permanent control"
                    ],
                    "answer": 2,
                    "rationale": "The stress response is not an unlimited supply. If the stressor continues, blood sugar runs low and stores of norepinephrine, epinephrine, and cortisol become depleted, and the body can no longer sustain the same response — moving it toward the exhaustion stage.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "During the exhaustion stage, what happens to the adrenal cortex and lymph tissue respectively?",
                    "options": [
                        "Both atrophy",
                        "The adrenal cortex atrophies while lymph tissue hypertrophies",
                        "Both hypertrophy",
                        "The adrenal cortex hypertrophies from overstimulation while lymph tissue atrophies from underuse"
                    ],
                    "answer": 3,
                    "rationale": "Constant HPA-axis stimulation causes the overworked adrenal cortex to hypertrophy, while the underused lymph tissue atrophies — raising infection risk as the immune system weakens.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks if their stress caused their bleeding stomach ulcer. What is the accurate nursing response?",
                    "options": [
                        "Stress can worsen an existing ulcer, but it does not cause bleeding ulcers to develop in the first place",
                        "Stress is the direct and sole cause of all bleeding ulcers",
                        "Stress has no relationship at all to ulcers",
                        "Stress causes ulcers only in patients who already have diabetes"
                    ],
                    "answer": 0,
                    "rationale": "It was once believed that stress directly causes bleeding ulcers, but that isn't accurate — stress can worsen an existing ulcer, but current understanding is that stress alone does not cause bleeding ulcers to develop.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "What distinguishes allostatic overload from allostatic load?",
                    "options": [
                        "Allostatic overload is a normal daily occurrence with no health consequences",
                        "Allostatic overload is when chronic over- or under-activation of stress systems reaches a point of exhaustion that damages organs/tissues, while allostatic load is the normal wear-and-tear demand of daily stress",
                        "Allostatic load only occurs in the alarm stage",
                        "Allostatic overload and allostatic load are interchangeable terms with no distinction"
                    ],
                    "answer": 1,
                    "rationale": "Allostatic load is the normal demand chronic stress places on the HPA axis, sympathetic nervous system, and immune system. Allostatic overload is what happens when those systems are chronically over- or under-activated beyond capacity, reaching exhaustion, damaging organs/tissues, and allowing stress-induced disease to develop.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following is a physical sign of allostatic overload described in lecture?",
                    "options": [
                        "Improved digestion",
                        "Decreased heart rate variability improvement",
                        "Irritable bladder",
                        "Enhanced immune response"
                    ],
                    "answer": 2,
                    "rationale": "Irritable bladder is among the physical signs and symptoms of allostatic overload described in lecture, along with hair loss, tension headaches, palpitations, digestive complaints, acne, and sleep disturbances. Overload does not improve digestion or immune function — it impairs them.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Why are hospitalized patients particularly vulnerable to the effects of sleep deprivation?",
                    "options": [
                        "Hospital rooms are typically too cold",
                        "Hospitalized patients sleep more than usual",
                        "Sleep deprivation does not affect hospitalized patients differently than others",
                        "The hospital environment is noisy, frequently interrupted, and lacks privacy, disrupting quality sleep"
                    ],
                    "answer": 3,
                    "rationale": "Hospitals are often not quiet or peaceful — patients are frequently poked, prodded, and woken at all hours, disrupting quality sleep. This can cause irritability, apathy, difficulty with memory, poor judgment, and even hallucinations or mental status changes.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Chronic overstress has been strongly associated with all of the following EXCEPT:",
                    "options": [
                        "Type 1 diabetes",
                        "Hypertension",
                        "Irritable bowel syndrome",
                        "Rheumatoid arthritis"
                    ],
                    "answer": 0,
                    "rationale": "Lecture specifically linked chronic overstress to type 2 diabetes, not type 1, along with coronary artery disease, hypertension, stroke, tension headaches, rheumatoid arthritis and other autoimmune diseases, irritable bowel syndrome, ulcers, and sexual disorders.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "How does prolonged excess cortisol affect blood glucose?",
                    "options": [
                        "It has no effect on blood glucose",
                        "It raises blood glucose by promoting gluconeogenesis and decreasing peripheral glucose utilization, potentially causing hyperglycemia",
                        "It lowers blood glucose the same way insulin does",
                        "It only affects glucose stored in muscle, not the liver"
                    ],
                    "answer": 1,
                    "rationale": "Cortisol raises blood glucose — the opposite of insulin. It promotes gluconeogenesis, decreases peripheral glucose utilization, inhibits glucose uptake by muscle and adipose tissue, and promotes glycogen storage; prolonged excess causes hyperglycemia.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on long-term high-dose corticosteroids develops fat redistribution to the face and trunk with thinning extremities. What is this classically called?",
                    "options": [
                        "Peripheral neuropathy",
                        "Lipodystrophy of the extremities only",
                        "\"Moon face\" and \"buffalo hump\"",
                        "Myxedema"
                    ],
                    "answer": 2,
                    "rationale": "Cortisol redistributes fat, breaking it down from the extremities and depositing it in the face and trunk. With chronic exposure, this produces the classic \"moon face\" and \"buffalo hump\" appearance.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on long-term dexamethasone develops hyponatremia and hyperkalemia despite normal kidney function. What is the most likely explanation and appropriate treatment?",
                    "options": [
                        "This is expected and requires no treatment",
                        "The patient needs an increased dexamethasone dose only",
                        "The patient has developed diabetes insipidus and needs desmopressin",
                        "Salt wasting from dexamethasone's lack of aldosterone activity — treated by adding fludrocortisone, the only mineralocorticoid replacement"
                    ],
                    "answer": 3,
                    "rationale": "Unlike hydrocortisone, dexamethasone has no aldosterone (mineralocorticoid) activity, which can cause salt wasting — the inability to maintain sodium levels, with potassium rising despite normally functioning kidneys. Fludrocortisone, the only mineralocorticoid replacement, is added to correct this.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                },
                {
                    "stem": "Which of the following are appropriate patient teaching points for someone starting long-term oral corticosteroid therapy? Select all that apply.",
                    "options": [
                        "Take the medication at the same time each day",
                        "Stop taking the medication as soon as symptoms improve",
                        "Wear a medical alert bracelet",
                        "Monitor weight and blood glucose regularly",
                        "There's no need to adjust the dose during illness since it's already a systemic medication"
                    ],
                    "answers": [
                        0,
                        2,
                        3
                    ],
                    "rationale": "Long-term steroid patients should take the medication at a consistent time each day (to mimic the body's natural hormonal pattern), wear a medical alert bracelet, and monitor weight and blood glucose since both can rise with extended use. Stopping as soon as symptoms improve is dangerous — steroids must be tapered, never stopped abruptly — and dosing does need to increase during illness or major stress (sick-day dosing), since the patient's own adrenal glands cannot compensate.",
                    "topic": "Pathopharm Review",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    },
    {
        "id": "week2-uri",
        "label": "Upper Respiratory Infections (URI)",
        "week": 2,
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A patient reports coughing up yellow sputum for one day and asks whether this means an infection requiring antibiotics. Which statement should guide the nurse's response?",
                    "options": [
                        "Purulent-appearing sputum suggests infection, but color alone doesn't confirm it without further testing",
                        "Yellow sputum on its own confirms a bacterial infection, regardless of any other symptoms present today",
                        "Sputum color only matters if the patient also has a temperature above 103°F",
                        "Clear sputum always rules out infection, so only colored sputum needs to be evaluated"
                    ],
                    "answer": 0,
                    "rationale": "Sputum can be cultured to check for infection, but color alone isn't diagnostic — coughing up something yellow doesn't automatically mean a bacterial infection or a need for antibiotics. A purulent appearance raises suspicion, but confirmation requires further testing such as a culture. A single temperature threshold and sputum clarity alone aren't the deciding factors described in the lecture.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient reports a cough with clear mucus, sore throat, and fatigue that started five days ago after a cold. The nurse recognizes this most likely reflects acute bronchitis rather than chronic bronchitis because of which feature?",
                    "options": [
                        "There is no airflow obstruction, and it typically resolves within about 3 to 4 weeks",
                        "The patient has a 20-year smoking history documented in the chart",
                        "Symptoms have occurred for at least 3 months a year for 2 consecutive years, per the chart",
                        "The cough is accompanied by permanent airflow obstruction on spirometry"
                    ],
                    "answer": 0,
                    "rationale": "Acute (simple) bronchitis is inflammation of the bronchi and bronchioles without airflow obstruction, and it is usually mild and self-limiting, resolving in about 3 to 4 weeks. Chronic bronchitis, by contrast, does involve airflow obstruction and is defined by symptoms for at least 3 months a year for at least 2 consecutive years, usually related to smoking — none of which fit this five-day history.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient tells the nurse, \"I get bronchitis every winter, so I must have chronic bronchitis.\" Which response is most accurate?",
                    "options": [
                        "That's correct, since any recurring winter cough automatically qualifies as chronic bronchitis",
                        "One winter isn't enough — it needs symptoms 3 months a year, for at least 2 years",
                        "Chronic bronchitis is diagnosed by a single sputum culture result, not by symptom timing or duration",
                        "Recurrent bronchitis of any length always indicates permanent airflow obstruction has already developed"
                    ],
                    "answer": 1,
                    "rationale": "Chronic bronchitis requires bronchitis symptoms for at least 3 months of the year, for at least 2 consecutive years — a single winter episode, however recurrent it feels, does not by itself meet that definition. It's also usually related to cigarette smoking. Diagnosis isn't based on a single culture result.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient declines the flu vaccine, saying, \"I got vaccinated last year and still caught the flu, so it doesn't work.\" What is the most accurate response?",
                    "options": [
                        "That's a valid point — the vaccine hasn't been shown to provide any measurable benefit",
                        "The vaccine should have prevented infection entirely, so the dose given may have been ineffective this time",
                        "The vaccine won't prevent every infection, but it lowers severe illness and death risk by about 36%",
                        "The vaccine's composition each year has no bearing on how well last year's dose worked"
                    ],
                    "answer": 2,
                    "rationale": "The flu vaccine doesn't necessarily prevent infection, but it reduces the risk of severe illness and death by about 36%. Vaccine composition also changes yearly based on predicted strains, so a vaccine's benefit is specific to that year's formulation — it isn't a sign the vaccine \"doesn't work\" if the patient still gets sick.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "An 80-year-old patient with influenza develops a new productive cough with purulent sputum and worsening fever four days into the illness. What does this presentation most likely indicate?",
                    "options": [
                        "A secondary bacterial pneumonia, a known complication of influenza, especially in older adults",
                        "A normal, expected progression of viral influenza needing only continued supportive care at home",
                        "An allergic reaction to the influenza vaccine given earlier during this illness",
                        "Resolution of the influenza infection as the body clears the virus naturally"
                    ],
                    "answer": 0,
                    "rationale": "Secondary bacterial pneumonia is a serious, well-known complication of influenza — a major reason the flu vaccine is emphasized in elderly and comorbid patients. A new productive, purulent cough and worsening fever days into an influenza illness is a red flag for this complication, not an expected recovery pattern.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing student asks why an antihistamine used for seasonal allergies wouldn't be expected to affect a patient's heart rate or stomach acid production. What is the best explanation?",
                    "options": [
                        "Antihistamines block all histamine receptors equally, so heart rate changes would still be expected too",
                        "Allergy antihistamines act on H1 receptors — those control smooth muscle and capillary dilation, not H2",
                        "H2 receptors control allergy symptoms, while H1 receptors regulate heart rate and stomach acid",
                        "Allergy medications work by increasing histamine release rather than blocking its receptors"
                    ],
                    "answer": 1,
                    "rationale": "Histamine has two receptor types: H1 receptors mediate smooth muscle contraction and capillary dilation — the target of antihistamines used for allergies. H2 receptors mediate heart rate and gastric acid secretion, which is a separate drug target (H2 blockers). Antihistamines block histamine's effects; they don't increase its release.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with seasonal allergic rhinitis asks why exposure to pollen causes sneezing and itchy, watery eyes. Which explanation is accurate?",
                    "options": [
                        "Pollen directly damages the nasal mucosa, causing inflammation independent of the immune system too",
                        "The reaction only affects the nose, since allergic rhinitis is limited to nasal tissue",
                        "The reaction is IgE-mediated, triggering histamine release that produces the nasal and eye symptoms",
                        "Pollen exposure causes a direct bacterial infection of the nasal passages"
                    ],
                    "answer": 2,
                    "rationale": "Allergic rhinitis is inflammation and swelling of the nasal mucous membranes from an IgE-mediated histamine release triggered by environmental allergens like pollen, and it affects the upper and lower airways as well as the eyes — which is why watery, itchy eyes accompany the nasal symptoms. It isn't a direct mucosal injury or a bacterial process.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient reports facial pressure, nasal congestion, and sore throat that has lasted 12 days. What does this duration suggest about the likely cause?",
                    "options": [
                        "The duration alone confirms bacterial infection and requires starting IV antibiotics without any testing",
                        "This duration is still typical for viral sinusitis, so no further workup is needed yet",
                        "Facial pressure lasting beyond a week always points to a sinus tumor instead",
                        "Symptoms past a week raise suspicion for bacterial sinusitis, since viral cases clear in 5–7 days"
                    ],
                    "answer": 3,
                    "rationale": "Viral sinusitis is self-limiting and usually resolves in 5 to 7 days, while bacterial sinusitis can last up to 4 weeks. Symptoms lasting longer than about a week raise suspicion for a bacterial cause — that's why duration is one of the questions typically asked when evaluating sinus symptoms. Duration alone doesn't require IV antibiotics, and a 12-day history isn't suggestive of a tumor.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks why sinusitis is treated more aggressively than other upper respiratory infections that produce similar symptoms. What is the best explanation?",
                    "options": [
                        "Sinusitis is taken more seriously because the sinuses sit close to the brain",
                        "Sinusitis always requires surgical drainage, unlike other upper respiratory infections",
                        "Sinusitis is the only upper respiratory infection ever caused by bacteria",
                        "Sinusitis symptoms are more severe than epiglottitis symptoms in every case"
                    ],
                    "answer": 0,
                    "rationale": "Sinusitis is treated more aggressively than most other URIs because of the sinuses' proximity to the brain. It doesn't always require surgery, other URIs (like pharyngitis) can also be bacterial, and epiglottitis — a true airway emergency — is more acutely dangerous than sinusitis.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient presents with a sore throat, and the nurse is trying to determine whether the cause is more likely bacterial or viral before the provider decides on testing. Which finding would point more toward a bacterial cause?",
                    "options": [
                        "A runny nose and mild cough accompanying the sore throat",
                        "White spots or exudate visible on the throat and tonsils",
                        "A gradual onset of symptoms occurring over several days",
                        "Clear nasal discharge without any visible throat exudate"
                    ],
                    "answer": 1,
                    "rationale": "Bacterial pharyngitis (such as strep) often shows white spots or exudate on the throat and tonsils, while viral pharyngitis typically doesn't. A runny nose and clear discharge are more consistent with a viral process.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A child arrives with a rapid onset of fever, drooling, difficulty swallowing, and inspiratory stridor, but no barking cough. The nurse recognizes this presentation as most consistent with which condition, and why?",
                    "options": [
                        "Croup, since inspiratory stridor and rapid onset are classic for laryngotracheobronchitis",
                        "Simple bronchitis, since fever and trouble swallowing are common with any URI",
                        "Epiglottitis, since no barking cough plus drooling and stridor sets it apart from croup",
                        "Allergic rhinitis, since drooling suggests excess mucus from histamine release"
                    ],
                    "answer": 2,
                    "rationale": "The absence of a barking cough is what distinguishes epiglottitis from croup, and drooling plus inspiratory stridor and retractions are hallmark epiglottitis findings. Epiglottitis is rare but potentially life-threatening — a swollen epiglottis can block the airway without timely treatment. Croup produces the barking cough that is notably absent here.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with an active upper respiratory infection is scheduled for elective surgery next week. The anesthesia team recommends postponing the procedure. What is the primary reasoning behind this recommendation?",
                    "options": [
                        "General anesthesia is contraindicated in anyone who has ever had a URI",
                        "Postponing surgery allows time to finish a full course of antiviral medication",
                        "Elective surgery must always wait until a sputum culture returns negative",
                        "An active URI raises the risk of bronchospasm during anesthesia and intubation"
                    ],
                    "answer": 3,
                    "rationale": "An active URI can be reason enough to delay an elective procedure because it raises the risk of bronchospasm — sudden constriction of the bronchial muscles — during anesthesia and intubation. This isn't a blanket rule against anesthesia for anyone with any URI history, an antiviral course, or a culture requirement.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nurse is reviewing a new prescription for a first-generation antihistamine and checking the patient's history for conditions requiring extra caution. Select all conditions that would warrant caution before administering this medication.",
                    "options": [
                        "Closed-angle glaucoma",
                        "Benign prostatic hyperplasia (BPH)",
                        "Uncontrolled hypertension",
                        "Seasonal allergic rhinitis flare-up",
                        "A seizure disorder",
                        "Well-controlled type 2 diabetes"
                    ],
                    "answers": [0, 1, 2, 4],
                    "rationale": "First-generation antihistamines carry a mild anticholinergic effect and can raise blood pressure, so caution is warranted with closed-angle glaucoma, cardiac disease, kidney disease/uncontrolled hypertension, peptic ulcer disease, seizures, BPH, and pregnancy. Seasonal allergic rhinitis is the indication for the drug, not a caution, and well-controlled diabetes isn't listed as a factor.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient who drives a delivery truck for a living needs a daily antihistamine for allergic rhinitis and is concerned about staying alert at work. Which teaching point best addresses this concern?",
                    "options": [
                        "Diphenhydramine is preferred since its sedating effect wears off quickly for most patients by evening",
                        "All antihistamines cause the same amount of drowsiness no matter the generation",
                        "A second-generation antihistamine like loratadine causes much less drowsiness and suits morning dosing",
                        "The patient should avoid antihistamines entirely and rely only on decongestants"
                    ],
                    "answer": 2,
                    "rationale": "Second-generation antihistamines (loratadine, fexofenadine, cetirizine) have fewer side effects and much less drowsiness than first-generation options like diphenhydramine, and can be taken in the morning. Diphenhydramine is the sedating option associated with the \"Benadryl hangover,\" not a quick-wearing-off effect.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has been using an over-the-counter nasal decongestant spray for six days and reports that congestion is now worse than before starting it. What is the most likely explanation?",
                    "options": [
                        "The patient has developed a new sinus infection unrelated to the medication itself",
                        "Rebound nasal congestion from decongestant use beyond the recommended 4-day limit",
                        "The decongestant dose was too low to be effective from the start",
                        "This is an expected allergic reaction to the medication's active ingredient"
                    ],
                    "answer": 1,
                    "rationale": "Decongestants like pseudoephedrine and phenylephrine shouldn't be used for more than 4 days because of the risk of rebound nasal congestion — congestion that returns worse once the medication is stopped or overused. Tapering off is recommended if it's been used for 2 to 3 days.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient recovering from chest surgery reports a dry, non-productive cough that is so severe it is preventing sleep and causing incisional pain. Which category of medication is most appropriate to address this specific problem?",
                    "options": [
                        "An expectorant, to help thin and mobilize the minimal secretions present",
                        "A mucolytic given by nebulizer, to reduce the thickness of retained mucus",
                        "A decongestant, to reduce nasal congestion that is contributing to the cough",
                        "A cough suppressant, since coughing isn't serving a protective purpose here"
                    ],
                    "answer": 3,
                    "rationale": "Coughing is usually a beneficial, protective response, so cough suppressants (dextromethorphan, benzonatate) are reserved for when it isn't — such as a dry, non-productive cough or post-surgical chest pain from coughing too hard to sleep. Expectorants and mucolytics target excess or thick secretions, which isn't this patient's problem, and a decongestant addresses nasal symptoms, not a post-surgical cough.",
                    "topic": "Upper Respiratory Infections (URI)",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    },
    {
        "id": "week2-pneumonia-tuberculosis",
        "label": "Pneumonia &amp; Tuberculosis",
        "week": 2,
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A nurse is reviewing risk factors for pneumonia with a patient who drinks alcohol heavily. The patient asks why alcohol use would raise pneumonia risk when it mainly affects the liver. Which explanation is accurate based on the risk factors taught for pneumonia?",
                    "options": ["Alcohol use raises pneumonia risk primarily through aspiration, since heavy alcohol use can impair consciousness and airway protection","Alcohol use raises pneumonia risk because it directly damages lung tissue the same way chronic smoking does over many years","Alcohol use was described as a pneumonia risk factor only when combined with an existing diagnosis of liver cirrhosis or hepatitis","Alcohol use raises pneumonia risk by suppressing the cough reflex permanently, even long after a person has stopped drinking entirely in this scenario"],
                    "answer": 0,
                    "rationale": "Alcohol use raises pneumonia risk mainly through aspiration, since heavy use can impair consciousness and airway protection, not through a direct effect on lung tissue or a liver-disease requirement.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient develops a new pneumonia 5 days after being admitted to the hospital for an unrelated surgery, and was never placed on a ventilator. Which classification applies, and how does its expected course compare with pneumonia acquired outside the hospital?",
                    "options": ["This is CAP, community-acquired pneumonia, since the patient was admitted for an unrelated reason rather than for pneumonia itself","This is HAP, hospital-acquired pneumonia, since it developed 48 or more hours after admission, and HAP generally has worse outcomes than CAP","This is VAP, ventilator-associated pneumonia, since any pneumonia acquired during a hospital stay is classified this way regardless of ventilator use","This is HCAP, healthcare-associated pneumonia, since that category includes any pneumonia occurring at any point during a hospital admission"],
                    "answer": 1,
                    "rationale": "HAP is defined as pneumonia developing 48 or more hours after hospital admission and generally carries worse outcomes than CAP; this patient was not ventilated, so VAP does not apply, and the hospital onset rules out CAP.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A student is asked to describe the sequence of events in pneumonia pathophysiology, starting once a pathogen reaches the lower airway. Which sequence correctly reflects what was taught?",
                    "options": ["Gas exchange is impaired first, which then triggers an inflammatory reaction, and mucus only accumulates afterward once the infection has resolved for this patient","The immune system activates and clears the pathogen immediately upon entry, so mucus accumulation and impaired gas exchange do not typically occur","Inflammation and vasodilation occur, infection spreads to the alveoli, mucus accumulates between alveoli and capillaries, and gas exchange becomes impaired","Goblet cells are suppressed rather than stimulated, resulting in a dry cough and preserved gas exchange throughout the course of the infection"],
                    "answer": 2,
                    "rationale": "Pneumonia pathophysiology proceeds from inflammation and vasodilation, to alveolar spread with goblet cell stimulation and mucus accumulation between alveoli and capillaries, to impaired gas exchange — not the reverse order.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with pneumonia has a productive cough with green, rusty-colored sputum, while another patient with pneumonia has a dry, scant cough. Which statement about these two presentations is accurate?",
                    "options": ["The dry, scant cough pattern is more typical of bacterial pneumonia, while the rusty, purulent sputum is more typical of viral pneumonia","Both presentations are equally common in bacterial pneumonia, and cough character was not taught as a way to distinguish the two causes","Sputum color and consistency were taught as unrelated to the underlying cause and should not influence the nurse's assessment at all","The rusty, purulent sputum pattern is more typical of bacterial pneumonia, while the dry, scant cough is more typical of viral pneumonia"],
                    "answer": 3,
                    "rationale": "Purulent, rusty or green sputum is typical of bacterial pneumonia, while a dry, scant cough is more typical of viral pneumonia; cough character is a taught distinguishing feature, not an unrelated detail.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with pneumonia is breathing with visibly increased accessory muscle use and a rising heart rate, but oxygen saturation remains adequate. A short time later, the patient can no longer maintain oxygenation despite maximal effort. Which pair of terms correctly labels these two stages?",
                    "options": ["The first stage is respiratory distress; the second stage is respiratory failure, which is heading toward respiratory arrest","The first stage is respiratory failure; the second stage is respiratory distress, which is a milder and more stable condition","Both stages describe respiratory failure, since any accessory muscle use already indicates the patient can no longer compensate","Both stages describe respiratory distress, since respiratory failure by definition never progresses gradually like this"],
                    "answer": 0,
                    "rationale": "Respiratory distress is maintained oxygenation with increased work of breathing; respiratory failure is the inability to compensate any longer, heading toward respiratory arrest — these are sequential, not identical, stages.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with suspected pneumonia has a chest X-ray showing an infiltrate and an elevated white blood cell count. The provider still orders a sputum culture and sensitivity before finalizing antibiotic therapy. Which statement explains why this additional test matters?",
                    "options": ["Sputum culture and sensitivity is ordered only to confirm the chest X-ray finding, since it cannot provide any additional treatment-guiding information","Sputum culture and sensitivity is the gold standard because it identifies the specific pathogen and which antibiotics will actually work against it","Sputum culture and sensitivity is used only when the white blood cell count is normal, since an elevated count alone confirms bacterial cause","Sputum culture and sensitivity is considered less reliable than chest X-ray and is ordered mainly for research and reporting purposes only"],
                    "answer": 1,
                    "rationale": "Sputum culture and sensitivity is the gold standard because it identifies the specific pathogen and guides antibiotic selection, information a chest X-ray or CBC alone cannot provide.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with pneumonia is found to have dullness to percussion, inspiratory crackles, increased tactile fremitus, and egophony over one lung region. What do these findings together indicate?",
                    "options": ["These findings indicate a normal, well-aerated lung region, since resonance and clear breath sounds would be expected there instead","These findings only occur in viral pneumonia and would not be expected with a bacterial cause of the patient's pneumonia","These findings indicate a consolidated area of lung tissue, consistent with the physical assessment findings taught for pneumonia","These findings indicate the pneumonia has already resolved and the consolidated area is simply residual scar tissue from a prior infection"],
                    "answer": 2,
                    "rationale": "Dullness to percussion, crackles, increased fremitus, and egophony over a lung region are the classic physical assessment findings of a consolidated area from pneumonia, not findings of a normal or resolved lung.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A hospitalized patient develops pneumonia with blood cultures growing a gram-negative organism, and the care team notes the patient has a central line. Which organism group fits this scenario as taught in this unit?",
                    "options": ["Streptococcus pneumoniae, a gram-positive organism that is the most common cause of community-acquired bacterial pneumonia in this scenario according to this unit","Staphylococcus aureus, a gram-positive organism that typically enters through the bloodstream or an IV route rather than a central line","Mycoplasma pneumoniae, an organism with properties of both bacteria and viruses that typically causes a mild walking pneumonia presentation","Pseudomonas, Acinetobacter, or Klebsiella pneumoniae, gram-negative organisms often linked to central-line infections and hospital-acquired pneumonia"],
                    "answer": 3,
                    "rationale": "Pseudomonas, Acinetobacter, and Klebsiella pneumoniae are the gram-negative organisms linked to central-line infections and hospital-acquired pneumonia, distinct from the gram-positive organisms and atypical pneumonias covered elsewhere in this unit.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with dysphagia aspirates a small amount of highly acidic gastric contents. The nurse explains to the family why this matters for how severe the resulting pneumonia will be. Which explanation is accurate?",
                    "options": ["The severity of the inflammatory response in aspiration pneumonia depends on the pH of the aspirate, with more acidic content causing worse inflammation","The severity of aspiration pneumonia depends only on the total volume aspirated, and the pH of the aspirated material makes no real difference","Aspiration pneumonia severity is determined by the patient's baseline lung function alone, regardless of the pH of the aspirated material","Acidic gastric contents were taught to be less damaging than neutral secretions, since acid is thought to have some antimicrobial effect on tissue during treatment"],
                    "answer": 0,
                    "rationale": "Aspiration pneumonia severity depends on the pH of the aspirate, with more acidic content causing a worse inflammatory response, not on volume alone or baseline lung function.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient at high aspiration risk is prescribed a proton pump inhibitor as part of a prevention strategy. Which teaching point explains why a PPI is used for this purpose?",
                    "options": ["A PPI directly kills any bacteria present in aspirated material before it can reach the lower respiratory tract and cause infection","A PPI lowers gastric acidity, which reduces the inflammatory damage to the lungs if aspiration of stomach contents does occur","A PPI strengthens the cough reflex, making silent aspiration far less likely to occur in patients with a decreased gag reflex","A PPI improves gastric emptying so completely that the stomach is essentially always empty, preventing aspiration from occurring at all"],
                    "answer": 1,
                    "rationale": "A PPI is used in aspiration-risk patients because lowering gastric acidity reduces the inflammatory damage if aspiration occurs; it does not kill bacteria, strengthen the cough reflex, or eliminate gastric contents.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A previously healthy young adult develops viral pneumonia during flu season. A few days into the illness, new purulent sputum and worsening fever develop. Which teaching point about viral pneumonia explains why this can happen?",
                    "options": ["This new presentation means the original diagnosis was incorrect, since viral pneumonia by definition cannot be followed by any bacterial complication","Purulent sputum developing during viral pneumonia is expected and does not indicate any need to reassess the patient or consider antibiotics","Viruses impair the lungs' immune defenses, which raises the risk of a secondary bacterial pneumonia developing on top of the original viral infection","Viral pneumonia was taught to always require antibiotics from the very first day of illness specifically to prevent this exact scenario"],
                    "answer": 2,
                    "rationale": "Viruses impair the lungs' immune defenses, which raises the risk of a secondary bacterial pneumonia developing during the course of a viral illness — new purulent sputum and worsening fever are a classic sign of this.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient recovering from HIV-related immunosuppression develops a pneumonia caused by a yeast-like fungus. Which organism from this unit's coverage of atypical pneumonia is most consistent with this scenario?",
                    "options": ["Mycoplasma pneumoniae, the organism responsible for the mild, walking pneumonia presentation described in this unit","Legionella, a gram-negative organism spread through contaminated water systems such as old air conditioners or hot tubs","Streptococcus pneumoniae, the most common bacterial cause of community-acquired pneumonia covered earlier in this unit","Pneumocystis pneumonia (PCP), which is associated with immunosuppression and is most common in patients with HIV"],
                    "answer": 3,
                    "rationale": "Pneumocystis pneumonia (PCP) is a yeast-like fungus associated with immunosuppression and is most common in patients with HIV, distinguishing it from Mycoplasma, Legionella, and Streptococcus pneumoniae.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A cluster of pneumonia cases is traced back to an old air conditioning system at a hotel, and one confirmed case must be reported to the health department. Which organism and teaching point match this scenario?",
                    "options": ["Legionella, since Legionella pneumonia is a reportable disease so the contaminated water source can be identified and addressed","Aspergillus, since Aspergillus pneumonia is a reportable disease tied to old building walls and construction sites rather than water systems","Mycoplasma pneumoniae, since walking pneumonia outbreaks traced to a building's water system must be reported to the health department","Pneumocystis pneumonia, since PCP outbreaks linked to a shared water source require mandatory health department reporting in this scenario"],
                    "answer": 0,
                    "rationale": "Legionella pneumonia is a reportable disease because it is spread through contaminated water systems like old air conditioners, so the source can be identified and addressed; Aspergillus, Mycoplasma, and PCP have different sources and are not tied to this reporting requirement.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "An elderly patient asks why the provider recommended both the PCV13 and PPSV23 vaccines instead of just one. Which statement accurately reflects what these vaccines cover?",
                    "options": ["PCV13 and PPSV23 cover the exact same 13 strains of pneumococcal pneumonia, so receiving both provides no additional protection","PCV13 covers 13 strains of pneumococcal pneumonia and PPSV23 covers an additional 23 types, so together they broaden the coverage","PPSV23 is given only to children, while PCV13 is reserved specifically for elderly and immunocompromised adult patients only","Both vaccines were taught as protecting against viral pneumonia specifically, rather than against pneumococcal bacterial strains as taught here"],
                    "answer": 1,
                    "rationale": "PCV13 covers 13 strains of pneumococcal pneumonia and PPSV23 covers an additional 23 types, so giving both broadens coverage rather than duplicating it.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing instructor asks why tuberculosis typically infects the lungs before other organs, even though Mycobacterium tuberculosis can also grow in bone or brain. Which explanation matches what was taught?",
                    "options": ["M. tuberculosis is an anaerobic organism that thrives in low-oxygen environments, which is why the lungs are affected before other tissues","M. tuberculosis has no particular oxygen requirement at all, and the lungs are only affected first because of how the bacteria are transmitted based on these findings","M. tuberculosis is an aerobic, rod-shaped bacillus that needs a lot of oxygen to grow, and the lungs provide that oxygen-rich environment first","M. tuberculosis specifically targets lung tissue through a receptor-based mechanism unrelated to the organism's own oxygen requirements"],
                    "answer": 2,
                    "rationale": "M. tuberculosis is an aerobic, rod-shaped bacillus that needs abundant oxygen to grow, which is why the oxygen-rich lungs are typically affected before bone or brain.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A chest X-ray in a patient with suspected TB shows a walled-off area containing macrophages and lymphocytes with a hard outer casing and a cheese-like center of broken-down tissue. What is this structure called, and what is its center called?",
                    "options": ["This is an abscess, and its center is described as purulent rather than caseous, unlike the structures described in this unit","This is a cavitation, and its hard outer casing is what was taught to be called the caseous center in this unit","This is a consolidation, the same term used for the chest X-ray finding described for bacterial pneumonia earlier in this course","This is a granuloma, sometimes called a tubercle, and its cheese-like center is described as caseous"],
                    "answer": 3,
                    "rationale": "A TB granuloma, also called a tubercle, is a walled-off area of macrophages and lymphocytes with a hard outer casing and a caseous (cheese-like) center of broken-down tissue — distinct from an abscess or a chest X-ray consolidation.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A student asks why TB treatment takes so much longer than treatment for most bacterial infections. Which explanation reflects what was taught about M. tuberculosis's growth rate?",
                    "options": ["M. tuberculosis is very slow-growing, and most drugs work by targeting actively proliferating organisms, making treatment inherently slower","M. tuberculosis actually grows faster than most bacteria, but treatment is prolonged only because of how the drugs are metabolized by the liver","TB treatment length has nothing to do with the organism's growth rate and is instead based purely on insurance and cost considerations","M. tuberculosis grows at a typical bacterial rate, but treatment is extended mainly because the bacteria hide inside red blood cells"],
                    "answer": 0,
                    "rationale": "M. tuberculosis is very slow-growing, and most antimicrobial drugs target actively proliferating organisms, which is a key reason TB treatment courses are so much longer than typical bacterial infections.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks how TB is usually spread from person to person. Which statement accurately reflects the transmission route taught in this unit?",
                    "options": ["TB is spread almost exclusively through contaminated food and water, similar to the transmission route described for Legionella pneumonia based on these findings","TB travels in airborne droplets expelled by an infected person's cough or sneeze and inhaled by a new host, making human-to-human spread the most common route","TB is spread primarily through direct skin contact with an infected person, rather than through any airborne or droplet-based route","TB is spread mainly from cattle and birds to humans, with human-to-human transmission described as rare compared to this animal route"],
                    "answer": 1,
                    "rationale": "TB travels in airborne droplets expelled by coughing or sneezing and inhaled by a new host, making human-to-human transmission by far the most common route, rather than food, water, skin contact, or animal-to-human spread.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with a positive TB skin test years ago has never developed any symptoms and has a normal chest X-ray now. The patient asks whether this means the infection is gone. Which response best reflects latent TB as taught in this unit?",
                    "options": ["A positive TB skin test with no symptoms means the infection has been fully cleared and no bacteria remain anywhere in the body at this point","Latent TB was taught to always progress to active TB within a fixed period of time, regardless of the person's immune status or other risk factors for this presentation","In latent TB, the bacteria survive but stay walled off and dormant inside granulomas, producing no clinical signs or symptoms, and it can remain latent for life","Latent TB only applies to extrapulmonary cases, so a positive skin test with a normal chest X-ray actually suggests active pulmonary TB instead"],
                    "answer": 2,
                    "rationale": "In latent TB, bacteria survive but stay walled off and dormant inside granulomas with no clinical signs or symptoms, and it can remain latent for life unless the immune system later fails to contain it.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with well-controlled latent TB begins high-dose corticosteroid therapy for a separate autoimmune condition and later develops active TB symptoms. Which explanation fits what was taught about reactivation of latent TB? Select all that apply.",
                    "options": ["Immunosuppressive medications can allow the bacteria to reactivate once the immune system can no longer contain them","HIV or other causes of immunocompromise are recognized triggers for reactivation of latent TB into active disease","Poor nutritional status and renal failure are also recognized triggers for reactivating latent TB into active disease","Reactivation of latent TB was taught to occur completely at random, with no identifiable triggers of any kind","Once TB becomes latent, it was taught to be biologically incapable of ever reactivating into active disease again within this unit"],
                    "answers": [0,1,2],
                    "rationale": "Immunosuppressive medications, HIV/immunocompromise, poor nutritional status, and renal failure are all recognized triggers that let latent TB bacteria reactivate into active disease; reactivation is not random or impossible.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with active TB reports fatigue, weight loss, and a low-grade afternoon fever that has been present for weeks, but no night sweats yet. A few weeks later, night sweats develop. Which statement about these symptoms is accurate?",
                    "options": ["Night sweats are the least specific TB symptom, while fatigue, weight loss, and low-grade fever are considered the most TB-specific findings","All of these symptoms were taught as equally specific to TB, with no distinction made between early nonspecific and more TB-specific findings at this point","The presence of night sweats actually rules out TB and instead points toward a different diagnosis entirely, based on what was taught","Fatigue, weight loss, and low-grade fever are nonspecific early symptoms, while night sweats are more specific to TB as the disease progresses"],
                    "answer": 3,
                    "rationale": "Fatigue, weight loss, and low-grade fever are nonspecific early TB symptoms, while night sweats are more specific to TB and tend to appear as the disease progresses.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with long-standing untreated TB develops new bone pain, and imaging later shows involvement outside the lungs. Which statement about extrapulmonary TB matches what was taught?",
                    "options": ["If TB bacteria implant somewhere outside the lungs, the effects depend on the site, such as bone pain from bone involvement or neurologic symptoms from meningitis","Extrapulmonary TB was taught to only ever affect the kidneys, so bone pain in this patient would not be attributed to TB based on this unit's content for this condition","TB bacteria cannot spread outside the lungs under any circumstances, so this presentation would need to be explained by an unrelated diagnosis","Extrapulmonary TB was described as always occurring before any pulmonary symptoms develop, rather than after long-standing untreated disease"],
                    "answer": 0,
                    "rationale": "TB bacteria that implant outside the lungs cause site-specific effects, such as bone pain from bone involvement or neurologic symptoms from meningitis, which is why extrapulmonary TB is not limited to one organ.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing student who works in a high-risk clinical area needs TB screening, while a general population patient with no particular risk factors also needs screening. Which pairing of screening methods matches what was taught?",
                    "options": ["The high-risk nursing student typically gets a TB skin test, while the non-high-risk patient typically gets an interferon-gamma release assay","The high-risk nursing student typically gets an interferon-gamma release assay, while the non-high-risk patient typically gets a TB skin test","Both the high-risk student and the non-high-risk patient are screened the same way, using a chest X-ray as the very first screening step","Neither the interferon-gamma release assay nor the TB skin test was taught as an appropriate screening test for either of these two groups"],
                    "answer": 1,
                    "rationale": "High-risk individuals, such as healthcare workers in high-risk areas, typically get an interferon-gamma release assay (a blood draw), while non-high-risk general population screening uses the TB skin test.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient has a positive TB skin test at a routine screening visit. The provider orders a chest X-ray next before confirming a diagnosis. Which statement explains the role of the chest X-ray at this point in the workup?",
                    "options": ["The chest X-ray is ordered only to rule out pneumonia and has no role in the TB workup once a screening test has already come back positive","A positive TB skin test alone is sufficient to confirm active disease, so the chest X-ray in this scenario is an unnecessary additional step in this situation","A positive screening test alone doesn't confirm active TB, so the chest X-ray is the next step, looking for granulomas to guide further workup","The chest X-ray replaces the need for sputum stain and culture entirely once it shows any abnormal finding consistent with a granuloma"],
                    "answer": 2,
                    "rationale": "A positive screening test alone does not confirm active TB, so a chest X-ray is the next step to look for granulomas; sputum stain and culture are still needed afterward to confirm the diagnosis directly.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient newly started on isoniazid and rifampin for active TB asks the nurse what symptoms to report right away. Which combination of teaching points reflects the shared and distinct concerns for these two first-line drugs? Select all that apply.",
                    "options": ["Report any yellowing of the skin or eyes, since both isoniazid and rifampin can cause hepatotoxicity that needs to be monitored","Report numbness or tingling in the hands or feet, since isoniazid can cause peripheral neuropathy, often reduced by taking pyridoxine","Expect urine and other body fluids like tears or sweat to turn a red-orange-brown color while taking rifampin, which is harmless","Isoniazid and rifampin were taught as having no notable drug interactions with any other medications the patient might be taking as described here","Both isoniazid and rifampin are given only by injection, so the patient does not need any teaching about oral administration"],
                    "answers": [0,1,2],
                    "rationale": "Isoniazid and rifampin both carry hepatotoxicity risk requiring monitoring for jaundice, isoniazid can cause peripheral neuropathy often mitigated with pyridoxine, and rifampin harmlessly discolors body fluids — both drugs also carry real interactions with other medications, and both are given orally.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient taking isoniazid for active TB is also prescribed phenytoin for a seizure disorder. Which teaching point reflects the drug interaction taught for this combination?",
                    "options": ["Isoniazid has no known interaction with phenytoin, so no additional monitoring is needed when the two drugs are taken together","Isoniazid decreases phenytoin's effects significantly, so the phenytoin dose would typically need to be increased during co-administration for this condition","Isoniazid and phenytoin cannot be taken together under any circumstances and this combination should never be prescribed at all","Isoniazid increases phenytoin's effects, so the patient should be monitored closely for signs of phenytoin toxicity while taking both drugs"],
                    "answer": 3,
                    "rationale": "Isoniazid increases phenytoin's effects, so patients on both drugs need close monitoring for phenytoin toxicity rather than assuming no interaction or needing a phenytoin dose increase.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on rifampin for active TB is also taking warfarin and a beta blocker for other chronic conditions. Which teaching point reflects rifampin's effect on these other medications?",
                    "options": ["Rifampin is a strong CYP inducer that decreases the effects of drugs like warfarin and beta blockers, so those patients may need higher doses","Rifampin has no meaningful effect on the metabolism of other medications, so no dose adjustments are typically needed with rifampin","Rifampin increases the effects of warfarin and beta blockers so significantly that those medications must be stopped entirely during treatment","Rifampin only affects the metabolism of other TB medications and has no interaction with cardiovascular or anticoagulant medications at all"],
                    "answer": 0,
                    "rationale": "Rifampin is a strong CYP inducer that decreases the effects of drugs such as warfarin and beta blockers, so those patients may need higher doses during rifampin therapy, not the reverse.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient starting ethambutol for TB asks why the provider mentioned needing more frequent eye exams during treatment. Which teaching point explains this concern?",
                    "options": ["Ethambutol can cause hyperuricemia and gout-like joint pain, which is why more frequent monitoring visits are recommended during treatment over time","Ethambutol can cause retrobulbar neuritis, inflammation of the optic nerve, so visual changes need to be monitored closely during treatment","Ethambutol can cause ototoxicity affecting hearing, which is why more frequent monitoring visits are recommended during this treatment","Ethambutol has no recognized visual side effects, and the more frequent visits are unrelated to any effect of this specific medication"],
                    "answer": 1,
                    "rationale": "Ethambutol can cause retrobulbar neuritis, inflammation of the optic nerve, which is why visual changes are monitored and more frequent eye exams may be recommended, distinct from the hyperuricemia or ototoxicity risks of other TB drugs.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with a history of gout is started on TB therapy, and the provider is cautious about one particular first-line drug. Which drug and rationale match this concern?",
                    "options": ["Ethambutol, because it can cause hyperuricemia and is contraindicated in patients with any history of gout or joint disease","Streptomycin, because it can cause hyperuricemia in addition to its known ototoxicity and nephrotoxicity side effects","Pyrazinamide, because it can cause hyperuricemia and is contraindicated in severe hepatic disease or acute gout","Isoniazid, because it can cause hyperuricemia in addition to its known risk of hepatotoxicity and peripheral neuropathy"],
                    "answer": 2,
                    "rationale": "Pyrazinamide can cause hyperuricemia and is contraindicated in severe hepatic disease or acute gout, distinguishing it from ethambutol, streptomycin, and isoniazid, which carry different toxicity profiles.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving daily intramuscular streptomycin injections for TB develops ringing in the ears and a decline in kidney function. Which teaching point reflects the known toxicity profile of this drug?",
                    "options": ["Streptomycin is associated with hepatotoxicity and peripheral neuropathy, the same profile described in this unit for isoniazid","Streptomycin is associated with retrobulbar neuritis and visual disturbances, the same profile described in this unit for ethambutol","Streptomycin has no recognized toxicity concerns and was taught as the safest of the five first-line TB medications covered","Streptomycin, an aminoglycoside, is associated with ototoxicity, nephrotoxicity, and blood dyscrasias affecting bleeding times"],
                    "answer": 3,
                    "rationale": "Streptomycin, an aminoglycoside, is associated with ototoxicity, nephrotoxicity, and blood dyscrasias affecting bleeding times, a distinct profile from isoniazid's hepatotoxicity/neuropathy or ethambutol's visual effects.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A recent immigrant with limited prior access to consistent medication is diagnosed with a TB strain that does not respond to standard first-line therapy. Which statement about MDR-TB and its risk factors matches what was taught?",
                    "options": ["MDR-TB is a growing concern, and populations with less consistent access to medications in their country of origin are at particularly high risk","MDR-TB was taught as occurring at random with no association to prior medication access, immune status, or living conditions of any kind","MDR-TB is treated with the exact same first-line drug regimen as non-resistant TB, since resistance does not change the treatment approach during this admission","MDR-TB was taught as a concern only in animal populations, since human-to-human transmission of resistant strains does not occur"],
                    "answer": 0,
                    "rationale": "MDR-TB is a growing national and global concern, and populations with less consistent access to medications in their country of origin, along with other at-risk groups, face particularly high risk — resistant cases require second-line therapy, not the standard first-line regimen.",
                    "topic": "Pneumonia &amp; Tuberculosis",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    },
    {
        "id": "week2-anemia-polycythemia",
        "label": "Anemia &amp; Polycythemia",
        "week": 2,
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A 34-year-old woman with a 5-year history of iron deficiency anemia presents with severe dyspnea and palpitations. Lab results show hemoglobin 6.2 g/dL, hematocrit 19%, and microcytic cells. On examination, the nurse notes spoon-shaped nails, a smooth tongue, and the patient admits to craving ice chips daily. The patient reports being a vegetarian and mentions her periods are 'heavier than normal.' Which factor most significantly contributed to the development of severe anemia in this patient?",
                    "options": ["The patient's vegetarian diet lacks iron-rich protein sources, compounded by menstrual blood loss", "Spoon nails indicate the body cannot absorb dietary iron regardless of intake", "Ice craving is the primary cause of anemia, requiring behavioral intervention", "A genetic mutation preventing iron utilization explains both the nails and the anemia"],
                    "answer": 0,
                    "rationale": "Iron deficiency develops from either decreased intake (vegetarian diet lacking bioavailable iron) or excessive loss (heavy menstruation). Both factors apply here, creating a cumulative deficit. Spoon nails and pica (ice craving) are manifestations of iron deficiency, not causes—they indicate the body is already depleted. The stem contains multiple teaching points: vegetarian diets CAN provide adequate iron if planned, but heme iron from animal sources is more bioavailable; menstrual losses compound dietary insufficiency; pica is a compensatory behavior, not a primary driver. Genetics don't account for the timeline (5-year gradual onset).",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 68-year-old man with a history of atrophic gastritis presents with hemoglobin 8.1 g/dL, macrocytic RBCs on the blood smear, and recent onset of gait instability and paresthesias in both feet. He reports that his stomach medication was changed 2 years ago after he developed chronic heartburn. Which of the following explains why this patient's neurologic symptoms developed despite transfusion being offered?",
                    "options": ["Transfusion temporarily corrects anemia but cannot reverse the neurologic damage already occurring from B12 deficiency", "His atrophic gastritis prevents red blood cells from absorbing oxygen, so transfusion is ineffective", "Macrocytic cells cannot carry oxygen despite transfusion, so the brain remains hypoxic", "Paresthesias indicate a separate neurologic disorder unrelated to his B12 deficiency"],
                    "answer": 0,
                    "rationale": "This question tests understanding of why B12 deficiency is uniquely dangerous. B12 deficiency causes TWO problems: megaloblastic anemia (which transfusion addresses) AND progressive neurologic damage from impaired DNA synthesis in nerve sheaths. Transfusion fixes the oxygen-carrying deficit but does NOT reverse ongoing neurologic deterioration. The atrophic gastritis destroyed parietal cells, stopping intrinsic factor production—the pathway that allows B12 absorption. Once neurologic symptoms appear, rapid B12 replacement (not transfusion) is critical because further delay can cause permanent disability. The stem establishes timeline: symptoms emerged after the medication change (likely a proton-pump inhibitor worsening parietal cell damage). The closest distractor falsely equates macrocytic cells with inability to carry oxygen—macrocytic cells carry oxygen fine; the problem is impaired DNA synthesis, not oxygen capacity.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 24-year-old Black patient with sickle cell disease calls his clinic reporting severe bone pain, fever of 101.5°F, and he mentions he went hiking in Colorado 3 days ago. His last crisis was 8 months ago. Upon assessment, SpO2 is 94% on room air, and he denies respiratory symptoms. Which intervention takes priority?",
                    "options": ["Initiate broad-spectrum antibiotics immediately and assess for infection before starting hydration and oxygen", "Begin supplemental oxygen and IV hydration while obtaining blood cultures and assessing for infection triggers", "Provide pain management and have him monitor at home since his SpO2 is acceptable and he denies respiratory involvement", "Delay treatment pending genetic testing to confirm sickle cell genotype since symptoms could represent another hemoglobinopathy"],
                    "answer": 1,
                    "rationale": "Sickle cell crisis is triggered by factors that increase oxygen demand or lower oxygen availability—altitude (Colorado hiking), fever (infection or inflammatory response), and dehydration from travel all apply here. The core crisis management is simultaneous: oxygen to increase tissue oxygen, IV fluids to prevent further sickling by reducing blood viscosity, and infection workup (blood cultures, antibiotics) because infection is both a trigger AND a life-threatening complication in sickle cell patients. The SpO2 of 94% seems borderline acceptable but in a sickle cell patient signals marginal tissue perfusion at altitude—intervention is needed. Delaying antibiotics while cultures process is dangerous; broad-spectrum coverage starts immediately based on clinical suspicion. Distractors: home monitoring misses a medical emergency; withholding oxygen ignores the altitude/oxygen demand factor; delaying for genetic confirmation wastes critical time (diagnosis is established).",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A hospitalized 52-year-old smoker with COPD is receiving erythropoiesis-stimulating agent (ESA) therapy for anemia of chronic kidney disease. Current labs: hemoglobin 10.1 g/dL, hematocrit 30%, creatinine 2.8 mg/dL. The nurse reviews the medication administration record and prepares to administer the scheduled ESA dose. What is the nurse's most appropriate action?",
                    "options": ["Administer the full ESA dose as prescribed since hemoglobin is below the therapeutic target of 12 g/dL", "Hold the ESA dose, verify the most recent hemoglobin level, and notify the provider before administering", "Administer half the scheduled dose to bring hemoglobin up gradually while avoiding overcorrection", "Administer the ESA dose but monitor the patient closely for signs of thrombosis given his smoking history"],
                    "answer": 1,
                    "rationale": "The ESA black-box warning states: NEVER administer if hemoglobin is GREATER THAN 10 g/dL due to risk of stroke, MI, thromboembolism, and hypercoagulability. This patient's hemoglobin is 10.1—just above the threshold. The nurse must verify the current level and HOLD the dose. The provider must reassess before continuing ESA therapy. This is a critical safety check that prevents overcorrection into a polycythemic, hypercoagulable state. The patient's smoking history compounds thrombotic risk. Distractors: therapeutic target of 12 is incorrect (goal is ~11 or less in CKD anemia); partial dosing isn't appropriate—it's either safe to give or it isn't; 'monitoring closely' doesn't prevent a life-threatening complication that should be prevented by not overdosing.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 7-year-old child with newly diagnosed iron deficiency anemia is prescribed ferrous sulfate liquid by the pediatrician. The child's parent calls the clinic concerned because the child's stool turned dark green/black after the first dose. The nurse's response should be based on understanding that:",
                    "options": ["Dark stools indicate GI bleeding and the medication should be held immediately pending evaluation", "This is an expected finding from iron therapy and does not indicate GI bleeding, but the parent should give the medication with food if GI upset occurs", "Dark stools mean the iron is not being absorbed and the dose should be increased for efficacy", "The child has developed a medication allergy and a different iron formulation must be substituted"],
                    "answer": 1,
                    "rationale": "Iron oxidizes in the GI tract, producing dark stools—a NORMAL, expected finding that should be explained proactively to prevent medication non-adherence. Teaching must include: dark green/black stool ≠ GI bleeding, expect this finding, it's harmless. Additionally, liquid iron can stain teeth (use straw), may cause metallic taste, and often causes GI upset. Iron is best absorbed on an empty stomach with vitamin C, but many patients take it with food early in treatment to reduce nausea—that's appropriate. Never with antacids or calcium (decreases absorption). Ferrous sulfate is only ~20% elemental iron by weight, so the dose looks large but delivers a modest amount of actual iron. Distractors: misinterpreting this as bleeding causes unnecessary ER visits and medication abandonment; increased dosing without medical guidance risks toxicity (especially concerning in pediatrics where overdose is a leading poisoning cause); there's no allergy component here.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 45-year-old patient is admitted with severe anemia. Admission labs show: hemoglobin 4.8 g/dL, hematocrit 14%, WBC 1.2 × 10³/mm³, platelets 45 × 10³/mm³, reticulocyte count 0.8% (low). Bone marrow biopsy shows fatty replacement of normal marrow tissue with few hematopoietic cells. Which complication poses the highest immediate risk to this patient?",
                    "options": ["Severe hypoxemia from the profound anemia requiring immediate transfusion", "Infection from neutropenia combined with inability to mount an adequate immune response", "Bleeding from severe thrombocytopenia with risk of intracranial hemorrhage", "Heart failure from chronic hypoxemia forcing increased cardiac output"],
                    "answer": 1,
                    "rationale": "This is aplastic anemia—pancytopenia (low RBCs, WBCs, platelets) from bone marrow failure. The low reticulocyte count confirms the marrow ISN'T responding (in hemolytic anemia, reticulocytes would be elevated). The fatty marrow indicates aplasia. Pancytopenia creates a three-way crisis: anemia (low O2), infection (low WBCs), and bleeding (low platelets). Which is most immediately life-threatening? INFECTION. A WBC of 1.2 is severe neutropenia; combined with impaired marrow function, the patient cannot fight infection effectively. A simple infection can rapidly progress to sepsis and death. Platelets of 45 do carry bleeding risk, but 45 is not yet in the range where spontaneous bleeding is likely (that's typically <10-20). Immediate priorities: strict infection prevention, possibly reverse isolation, prophylactic antibiotics, and watchful surveillance. The anemia will be transfused carefully (avoid fluid overload). Distractors: hypoxemia from hemoglobin 4.8 IS severe and WILL be treated, but patients can sometimes compensate with increased cardiac output if the drop is gradual; heart failure is a concern but less immediately lethal than sepsis; thrombocytopenia IS dangerous but 45 is manageable with precautions.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 28-year-old patient with newly diagnosed sickle cell disease is being discharged from the hospital after treatment for a vaso-occlusive crisis. During discharge teaching, the nurse explains factors that trigger sickling. The patient asks, 'Why did the doctor say I should avoid high altitude and take breaks during exercise?' Which physiological explanation is most accurate?",
                    "options": ["High altitude and exercise both cause acidosis, which makes hemoglobin S polymerize and sickle cells rigid", "High altitude and exercise increase oxygen demand; if oxygen delivery cannot meet this demand, hemoglobin S distorts RBCs into sickles", "High altitude reduces barometric pressure, which directly causes hemoglobin to denature; exercise causes dehydration that thickens blood", "Both situations activate the complement cascade, triggering immune-mediated hemolysis of sickled cells"],
                    "answer": 1,
                    "rationale": "Sickle cell disease worsens when tissue oxygen levels drop (relative hypoxemia). High altitude = lower atmospheric oxygen. Intense exercise = increased metabolic oxygen demand that may exceed delivery. Both situations trigger sickling because hemoglobin S polymerizes preferentially under LOW OXYGEN conditions. When oxygen is low, hemoglobin S distorts RBCs into the characteristic sickle shape; these cells clog vessels, causing vaso-occlusion and pain crisis. The mechanism is OXYGEN AVAILABILITY, not acidosis or barometric pressure. Sickling does worsen with dehydration (increases blood viscosity), but that's a secondary mechanism; the primary trigger is low oxygen. Distractors: acidosis does play a role but is secondary to the oxygen mechanism; barometric pressure at altitude doesn't 'denature' hemoglobin—it just means less O2 is available to bind; complement cascade causes hemolysis in some acquired hemolytic anemias but not in sickle cell disease, which is a structural hemoglobinopathy.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's hematocrit is elevated after a large-volume fluid resuscitation was just started, while the hemoglobin from an hour earlier was already known to be low from chronic anemia. A student asks why hemoglobin, not hematocrit, is used as the more reliable indicator of anemia. Which explanation is accurate?",
                    "options": ["Hemoglobin is affected by plasma volume status just as much as hematocrit is, so neither value is actually more reliable than the other one","Hematocrit measures oxygen-carrying capacity directly, while hemoglobin only estimates it indirectly from the total red blood cell count","Hematocrit is heavily affected by a patient's plasma volume status, while hemoglobin is not, so hemoglobin gives a more reliable picture of true anemia","Hemoglobin can only be measured accurately after a patient has been NPO for at least 8 hours, unlike hematocrit, which has no such requirement in this scenario"],
                    "answer": 2,
                    "rationale": "Hematocrit is heavily affected by plasma volume status, so fluid shifts can mask or exaggerate anemia; hemoglobin does not have this limitation, making it the more reliable indicator.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A CBC shows red blood cells of normal size with normal hemoglobin color, in a patient who reports a recent gastrointestinal bleed. Another patient's CBC shows large, abnormally shaped cells with normal hemoglobin color. Which pairing of morphology to likely cause is correct?",
                    "options": ["Normal-sized, normal-colored cells suggest B12 deficiency, and large cells with normal color suggest recent blood loss","Both presentations point to iron deficiency anemia, since morphology alone cannot distinguish blood loss from a vitamin deficiency for this patient overall","Both presentations described here are inconsistent with any anemia type and would require an entirely repeated laboratory workup","Normal size and color point to a cause like blood loss, sickle cell disease, or aplastic anemia, while large cells with normal color point to a B12 or folate deficiency"],
                    "answer": 3,
                    "rationale": "Normal-sized, normal-colored cells point to causes like blood loss, sickle cell disease, or aplastic anemia, while large cells with normal hemoglobin color point to a B12 or folate deficiency — morphology does distinguish these causes.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with anemia appears notably pale, especially in the face and hands. The patient's spouse asks the nurse why the patient looks so pale when the blood count is low rather than absent. Which explanation reflects the mechanism taught for pallor in anemia?",
                    "options": ["The body redistributes blood away from the skin toward organs that need it more, such as the kidneys, lungs, gut, brain, and heart","Pallor occurs because the remaining red blood cells lose their red pigment entirely once hemoglobin drops below a certain level","Pallor in anemia is caused by a separate, unrelated skin condition that commonly develops at the same time as low blood counts","The heart pumps less blood overall in anemia, which is the direct and only cause of the visibly pale skin seen in these patients according to this unit"],
                    "answer": 0,
                    "rationale": "In anemia, the body redistributes blood away from the skin toward organs that need it more, such as the kidneys, lungs, gut, brain, and heart, which is why pallor develops even when red cells are simply reduced, not absent.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "One patient loses 2 liters of blood suddenly from trauma, while another patient's hemoglobin drops to the same final level gradually over months from an unnoticed slow GI bleed. The trauma patient is in shock, while the slow-bleed patient reports only mild fatigue. Which explanation accounts for this difference?",
                    "options": ["The trauma patient must have lost significantly more total blood volume than the slow-bleed patient, even though the final hemoglobin values match","The slow-bleed patient's anemia is not clinically significant since symptoms are mild, regardless of what the actual hemoglobin level shows","Severity depends on how fast blood is lost, not just the resulting hemoglobin level, since the body has time to compensate for a slow loss","The trauma patient's symptoms are unrelated to blood loss and instead point to a separate traumatic injury requiring its own workup"],
                    "answer": 2,
                    "rationale": "Severity depends on how fast blood is lost, not just the resulting hemoglobin level; a slow loss gives the body time to compensate, while a fast loss of the same magnitude causes acute decompensation.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A pregnant patient asks why the provider specifically emphasized folate intake this trimester, beyond the general importance of a balanced diet. Which teaching point about folate deficiency anemia in pregnancy is accurate?",
                    "options": ["Folate deficiency in pregnancy was taught as a concern only for the mother's anemia symptoms, with no effect on fetal development at all","Folate absorption requires intrinsic factor just like B12, so pregnancy-related folate deficiency is caused by the same gastric mechanism","Folate deficiency anemia is microcytic and hypochromic in pregnancy specifically, unlike the macrocytic pattern seen in other populations","Folate needs increase greatly in pregnancy, and low folate raises the risk of low birth weight and neural tube defects in the fetus"],
                    "answer": 3,
                    "rationale": "Folate needs increase greatly in pregnancy, and low folate raises the risk of low birth weight and neural tube defects, which is why folate intake gets particular emphasis beyond general nutrition.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with progressive chronic kidney disease develops anemia even though iron studies and vitamin levels are normal. Which mechanism explains this type of anemia?",
                    "options": ["Failing kidneys cannot release enough erythropoietin to adequately signal the bone marrow, so red blood cell production drops","Chronic kidney disease directly destroys circulating red blood cells through an immune-mediated hemolytic process in the kidneys","Chronic kidney disease causes iron to become trapped in the kidneys themselves, making it unavailable for red blood cell production","Chronic kidney disease was taught to cause anemia only once the patient also develops a coexisting nutritional deficiency"],
                    "answer": 0,
                    "rationale": "Failing kidneys cannot release enough erythropoietin to adequately signal the bone marrow, so red blood cell production drops even when iron and vitamin levels are normal — this is anemia of chronic kidney disease.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient develops pancytopenia after a course of chemotherapy, and a bone marrow biopsy shows fatty replacement of normal marrow tissue. Which statement about the causes of this type of anemia is accurate?",
                    "options": ["Aplastic anemia is caused exclusively by inherited genetic mutations and cannot be triggered by chemotherapy, radiation, or infection","Aplastic anemia occurs only when a patient also has a separate diagnosis of chronic kidney disease affecting erythropoietin production during treatment","Aplastic anemia can result from high-dose toxic exposures such as chemotherapy or radiation, an autoimmune reaction, or bone marrow cancer","Aplastic anemia was taught as always idiopathic, meaning a specific cause like chemotherapy could never actually be identified"],
                    "answer": 2,
                    "rationale": "Aplastic anemia can result from high-dose toxic exposures such as chemotherapy or radiation, an autoimmune reaction, or bone marrow cancer, not only from inherited mutations or a coexisting kidney diagnosis.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with a hemolytic anemia has a low hemoglobin but the bone marrow appears to be responding vigorously to the ongoing RBC destruction. Which lab finding would the nurse expect that reflects this compensatory marrow response?",
                    "options": ["A decreased reticulocyte count, since the marrow suppresses new red blood cell production once hemolysis has been detected","A normal reticulocyte count, since reticulocyte levels do not change in response to red blood cell destruction of any kind","An increased platelet count specifically, since platelets rather than reticulocytes reflect marrow response in hemolytic anemia as taught here","An increased reticulocyte count, since the marrow releases immature red blood cells early to try to keep pace with the destruction"],
                    "answer": 3,
                    "rationale": "An increased reticulocyte count reflects the marrow releasing immature red blood cells early to try to keep pace with ongoing hemolytic destruction, distinguishing hemolytic anemia from a hypoproliferative anemia like aplastic anemia.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient of Southeast Asian descent is found to have microcytic, hypochromic red blood cells, but iron studies are normal and the patient denies any dietary iron restriction. Which condition and ancestry link fits this presentation best?",
                    "options": ["Alpha thalassemia, an autosomal recessive condition tracing to Asian ancestry including Chinese, Vietnamese, and Cambodian populations","Beta thalassemia, an autosomal recessive condition tracing specifically to Greek, Italian, and Jewish ancestry rather than Asian ancestry","Iron deficiency anemia, since microcytic, hypochromic cells always indicate an iron problem regardless of the patient's iron study results","Sickle cell disease, since it is the most common hemoglobinopathy overall and produces the same microcytic, hypochromic cell pattern"],
                    "answer": 0,
                    "rationale": "Alpha thalassemia is the form tracing to Asian ancestry (Chinese, Vietnamese, Cambodian), while beta thalassemia traces to Greek, Italian, or Jewish ancestry; normal iron studies rule out iron deficiency as the cause here.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with pernicious anemia who has had prior gastric surgery is prescribed cyanocobalamin. The patient asks whether the medication can be given through the IV line already in place for other medications. Which teaching point is accurate?",
                    "options": ["Cyanocobalamin can be given by any route including IV, and the existing IV line would be an appropriate and preferred choice here","Cyanocobalamin must always be given IV in patients with a history of gastric surgery, since oral absorption cannot occur at all","Cyanocobalamin can be given PO, subQ, IM, or intranasally, but it is never given IV, so a different route would be used instead","Cyanocobalamin is only available as an oral formulation, so questions about IV, subQ, or IM administration would not apply"],
                    "answer": 2,
                    "rationale": "Cyanocobalamin can be given PO, subQ, IM, or intranasally, but it is never given IV, so an existing IV line would not be an appropriate route for this medication regardless of the patient's surgical history.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A toddler is diagnosed with iron deficiency anemia after the parent reports the child frequently chews on ice and craves other non-food items. The provider also notes koilonychia and glossitis on exam. Which of these findings are specific manifestations of iron deficiency anemia taught in this unit? Select all that apply.",
                    "options": ["Glossitis, a smooth, sore tongue","Koilonychia, spoon-shaped nails","Pica, craving non-food items such as ice chips or hard candy","Aquagenic pruritus that is worse with warm water exposure","A ruddy, plethoric skin color across the face and extremities"],
                    "answers": [0,1,2],
                    "rationale": "Glossitis, koilonychia, and pica are the specific manifestations of iron deficiency anemia taught in this unit; aquagenic pruritus and a ruddy, plethoric color are instead classic findings of polycythemia vera, not iron deficiency.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient's hematocrit reads 68% after several days of poor oral intake and vomiting, but a repeat hematocrit after IV fluid resuscitation returns to 44%. Which type of polycythemia does this pattern best illustrate?",
                    "options": ["Primary polycythemia (polycythemia vera), a bone marrow stem cell disorder that resolves once IV fluids are administered","Secondary polycythemia, a compensatory response to chronic tissue hypoxia that improves once fluids are given intravenously","This pattern does not fit any type of polycythemia discussed in this unit and instead suggests a laboratory measurement error based on these findings","Relative polycythemia, a false elevation from hemoconcentration due to low plasma volume rather than a true excess of red blood cells"],
                    "answer": 3,
                    "rationale": "A hematocrit that normalizes once IV fluids correct the plasma volume deficit reflects relative polycythemia, a false elevation from hemoconcentration rather than a true excess of red blood cells.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 65-year-old man is diagnosed with a rare, slow-growing bone marrow stem cell disorder that overproduces red blood cells and often white blood cells and platelets as well. Which condition matches this description, and what population is most commonly affected?",
                    "options": ["Secondary polycythemia, most commonly affecting patients with COPD or those living at high altitude regardless of age or sex","Polycythemia vera, typically occurring in people over 60 and about twice as common in men","Relative polycythemia, typically occurring in dehydrated patients of any age with no particular sex predominance described","Aplastic anemia, typically occurring in younger adults and affecting all three blood cell lines through bone marrow failure"],
                    "answer": 1,
                    "rationale": "Polycythemia vera is a rare, slow-growing bone marrow stem cell disorder typically occurring in people over 60 and about twice as common in men, distinct from the hypoxia-driven mechanism of secondary polycythemia.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with severe COPD develops a persistently elevated red blood cell count over several years. The provider explains this is the body's adaptive response rather than a bone marrow cancer. Which mechanism explains this type of polycythemia?",
                    "options": ["A single mutated bone marrow stem cell begins overproducing red blood cells independently of any oxygen-sensing mechanism at all","Chronic COPD directly stimulates the bone marrow through inflammatory cytokines without any involvement of the kidneys or erythropoietin according to this unit","The kidneys sense chronic hypoxia and secrete erythropoietin, prompting the bone marrow to produce more red blood cells to increase oxygen-carrying capacity","The spleen enlarges in COPD and begins producing red blood cells directly, bypassing the bone marrow and kidney feedback loop entirely"],
                    "answer": 2,
                    "rationale": "In secondary polycythemia, the kidneys sense chronic hypoxia and secrete erythropoietin, prompting the bone marrow to produce more red blood cells as a compensatory response — this is not a bone marrow cancer or spleen-driven process.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with polycythemia vera reports intense itching that becomes much worse after a warm shower, along with a ruddy, flushed complexion. Which statement about these findings is accurate?",
                    "options": ["These findings are classic for secondary polycythemia specifically and would not be expected to occur in polycythemia vera","Itching that worsens with warm water exposure is unrelated to polycythemia and instead suggests a primary dermatologic condition","A ruddy complexion in polycythemia vera indicates inadequate treatment and always requires an immediate dose of erythropoietin-suppressing therapy","A ruddy, plethoric color and aquagenic pruritus that worsens with heat or water are classic manifestations of polycythemia vera"],
                    "answer": 3,
                    "rationale": "A ruddy, plethoric color and aquagenic pruritus that worsens with heat or water are classic manifestations of polycythemia vera specifically, not an unrelated dermatologic condition or a sign requiring immediate dose escalation.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with longstanding polycythemia reports frequent headaches, difficulty concentrating, and is noted to have hypertension on repeated readings. Which mechanism from the complications shared by primary and secondary polycythemia explains these findings?",
                    "options": ["Increased blood viscosity and volume from the excess red blood cells raises blood pressure and can impair perfusion, causing headache and difficulty concentrating","Decreased blood flow from clumped red blood cells is the mechanism responsible for hypertension, headache, and difficulty concentrating in this patient within this unit","Hypermetabolism from the excess red blood cells is the mechanism responsible for the hypertension and headache described in this patient","These findings are unrelated to the red blood cell count and instead point to a coexisting, previously undiagnosed neurologic condition"],
                    "answer": 0,
                    "rationale": "Increased blood viscosity and volume from the excess red blood cells raises blood pressure and can impair perfusion, producing the headache and difficulty concentrating described, distinct from the decreased-flow or hypermetabolism mechanisms.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with polycythemia develops calf pain and swelling, and the provider is concerned about deep vein thrombosis. Which mechanism from the complications of polycythemia explains this increased clotting risk?",
                    "options": ["Hypermetabolism from the excess red blood cells is the primary mechanism responsible for the increased clotting risk seen here","Excess red blood cells collide and clump, slowing blood flow and raising the risk of DVT, angina, cerebral insufficiency, and TIAs","Increased blood viscosity and volume alone, without any change in blood flow, accounts for the clotting risk described in this patient","This clotting risk was taught as occurring only in relative polycythemia and not in either primary or secondary absolute polycythemia"],
                    "answer": 1,
                    "rationale": "Excess red blood cells collide and clump, slowing blood flow and raising the risk of DVT, angina, cerebral insufficiency, and TIAs — this decreased-flow mechanism, not viscosity or hypermetabolism alone, explains clotting complications like this one.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with polycythemia vera develops sudden slurred speech and one-sided weakness. The care team immediately treats this as an emergency. Which complication does this presentation reflect, and why is it considered the biggest overall concern with absolute polycythemia?",
                    "options": ["Aquagenic pruritus, since intense itching in polycythemia vera can progress rapidly to neurologic symptoms if left untreated within this unit","Hypermetabolism, since night sweats and weight loss in polycythemia can progress to stroke-like symptoms if untreated","Stroke from clotting, since too many red blood cells collide and clump in vessels, blocking blood flow to the brain and heart","Relative polycythemia, since dehydration-related hemoconcentration is the leading cause of stroke in these patients"],
                    "answer": 2,
                    "rationale": "Stroke and heart attack from clotting are considered the biggest overall concern with absolute polycythemia, since too many red blood cells collide and clump in vessels, blocking blood flow to the brain and heart — not itching or hypermetabolism.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient receiving epoetin alfa for anemia of chronic kidney disease has hemoglobin rechecked and it now reads 10.8 g/dL, above the black-box warning threshold. The nurse recognizes that continuing the dose as scheduled without holding it could push this patient toward which condition?",
                    "options": ["Relative polycythemia from hemoconcentration, since ESA therapy is known to reduce plasma volume directly","Secondary polycythemia from chronic hypoxia, since ESA therapy is known to worsen the patient's underlying lung disease at this point","Polycythemia vera, since ESA therapy is known to trigger the same bone marrow stem cell mutation seen in that condition","An iatrogenic polycythemic, hypercoagulable state from overcorrected hemoglobin, raising the risk of stroke and heart attack"],
                    "answer": 3,
                    "rationale": "Continuing ESA therapy despite hemoglobin above the black-box threshold risks an iatrogenic polycythemic, hypercoagulable state from overcorrection, raising the risk of stroke and heart attack — a different mechanism than relative polycythemia, secondary polycythemia, or polycythemia vera.",
                    "topic": "Anemia &amp; Polycythemia",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    },
    {
        "id": "week2-obstructive-airway-disorders",
        "label": "Obstructive Airway Disorders",
        "week": 2,
        "sets": {
            "mustKnow": [],
            "extraPractice": [
                {
                    "stem": "A 35-year-old patient with asthma presents to the ED with dyspnea, widespread wheezing, and is using accessory muscles to breathe. Peak flow is 40% of personal best. The patient received albuterol nebulizer treatment in the waiting room but reports only minimal improvement. Blood gas shows pH 7.32, PaCO2 72 mmHg, PaO2 58 mmHg. The nurse anticipates which immediate intervention?",
                    "options": ["Another albuterol nebulizer treatment since peak flow has improved from baseline emergency status", "Preparation for intubation and mechanical ventilation due to impending respiratory failure from status asthmaticus", "IV furosemide to reduce airway edema causing the persistent bronchoconstriction", "Chest X-ray to rule out pneumothorax as an alternative diagnosis explaining the lack of response"],
                    "answer": 1,
                    "rationale": "This is status asthmaticus—life-threatening, unrelenting asthma attack. The clinical signs are all present: diminished response to bronchodilators, accessory muscle use, low peak flow (40%), and critically, a RISING CO2 (72) with metabolic acidosis (pH 7.32). Rising CO2 in an asthmatic means the lungs can't ventilate adequately despite treatment—the airways are so obstructed that air can't move. This is respiratory failure developing. The provider will likely order IV epinephrine, IV corticosteroids, and prepare for intubation because the patient is decompensating. A 'silent chest' (absent breath sounds) with CO2 >70 is the classic harbinger of imminent need for mechanical ventilation. Distractors: more albuterol alone won't fix rising CO2 (needs additional systemic therapy); furosemide treats pulmonary edema, not status asthmaticus; chest X-ray may be done but won't change immediate management and delays critical airway intervention.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 58-year-old man with a 40-year smoking history presents with chronic productive cough for the past 18 months, mild dyspnea on exertion, and occasional ankle edema. Chest X-ray shows hyperinflation. Pulmonary function tests show FEV1 of 45% predicted. The patient denies wheezing and reports his cough is worse in winter. Which finding most specifically points to chronic bronchitis rather than emphysema?",
                    "options": ["FEV1 of 45% predicted, which is characteristic of obstructive lung disease", "A 40-year smoking history, which is the primary risk factor for both conditions", "Productive cough present for at least 3 months of the year over at least 2 consecutive years", "Hyperinflation on chest X-ray, indicating air trapping in the lungs"],
                    "answer": 2,
                    "rationale": "Chronic bronchitis is DEFINED by productive cough (not dry) lasting at least 3 months per year for at least 2 consecutive years. This timing/symptom pattern IS the diagnostic criterion, not just a finding. The patient reports 18 months of cough worse in winter—this fits the chronic bronchitis pattern perfectly. Emphysema, by contrast, presents with dyspnea and quiet breath sounds, not a prominent productive cough. Both show FEV1 reduction, hyperinflation, and smoking risk—those are shared. But the productive cough pattern is the key differentiator for bronchitis. Blue bloater (chronic bronchitis) presents with cough/mucus/hypoxia/edema; pink puffer (emphysema) presents with dyspnea/barrel chest/pursed lips/malnutrition. Distractors: FEV1 and hyperinflation are present in both COPD components; smoking history applies to both—neither is specific to bronchitis alone.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 62-year-old patient with emphysema is admitted with acute dyspnea. On examination: quiet, diminished breath sounds bilaterally, barrel chest, pursed-lip breathing, and vital signs show RR 24, SpO2 89% on room air. ABG results: pH 7.35, PaCO2 52 mmHg, PaO2 62 mmHg. The patient is on home oxygen but removed it 'because it felt uncomfortable.' The nurse's priority assessment should focus on:",
                    "options": ["Determining the cause of the patient's decision to discontinue oxygen and exploring alternatives for delivery", "Immediately correcting the low oxygen saturation without exploring the patient's reasoning, since hypoxemia poses acute risk", "Assessing for acute infection (pneumonia, acute bronchitis) or other triggers of the decompensation", "Checking troponin and BNP to rule out cardiac causes of dyspnea since cor pulmonale is common in emphysema"],
                    "answer": 2,
                    "rationale": "While the low SpO2 needs treatment, the PRIORITY assessment is identifying what triggered THIS acute decompensation. A patient on chronic home oxygen who suddenly worsens has likely encountered a new trigger: acute infection (most common), pneumothorax (blebs can rupture), pneumonia, or acute exacerbation from environmental exposure. The patient's decision to remove oxygen is a red flag for either intolerance/discomfort (treatable) or symptom misattribution. In emphysema, cor pulmonale (right-sided heart failure) IS a risk, but troponin/BNP are secondary considerations after identifying the acute trigger. The nurse should: assess for productive cough, fever, chest pain, recent exposures; obtain chest X-ray; culture sputum if productive; start antibiotics empirically if infection is suspected. Oxygen therapy gets reinstituted and adjusted for comfort (nasal cannula vs mask, flow rates). Distractors: exploring 'discomfort' without first ruling out life-threatening triggers delays critical diagnosis; cardiac workup is important but not the immediate priority when infection/pneumothorax could be killing him; respiratory depression from high-flow oxygen is a real concern in COPD CO2 retainers, but this patient's CO2 is only mildly elevated at 52.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 19-year-old college student with a history of exercise-induced wheezing is evaluated for asthma. During pulmonary function testing, baseline FEV1 is normal at 92% predicted. After exercise challenge, FEV1 drops to 72% predicted within 10 minutes, then gradually recovers to 88% predicted over the next 30 minutes. The patient denies current respiratory symptoms. Which statement most accurately reflects this finding?",
                    "options": ["The test result is normal because FEV1 recovered above 85% predicted, ruling out asthma", "Exercise-induced bronchoconstriction is confirmed; the reversibility after stopping exercise is consistent with asthma pathophysiology", "The patient has emphysema, not asthma, because there was any decrease in FEV1 with exertion", "Repeat testing is needed because a single abnormal test cannot diagnose asthma"],
                    "answer": 1,
                    "rationale": "Exercise-induced asthma (now called exercise-induced bronchoconstriction) is triggered by hyperventilation and airway cooling during exertion. The drop from 92% to 72% is significant (20-point decline) and diagnostic. Critically, the REVERSIBILITY after stopping exercise—FEV1 recovered toward baseline—is the hallmark of asthma. Asthma is defined as variable, reversible airflow obstruction; this patient demonstrates exactly that. Emphysema would NOT reverse because the alveolar destruction is permanent—once destroyed, those air spaces don't recover. The patient's normal baseline and recovery pattern distinguish asthma from restrictive or fixed obstructive diseases. Distractors: an 88% recovery isn't 'normal'—the 20-point drop is abnormal and diagnostic even though complete recovery occurred; emphysema diagnosis is incorrect because there's no reversibility in true emphysema (this reversibility rules it out); while repeat testing might be done, this single test is sufficient for diagnosis given the history and findings.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with chronic asthma has been using an inhaled corticosteroid (ICS) daily for 6 months with good symptom control. During a routine visit, the patient mentions increased shortness of breath during the morning commute and weekend outings. Peak flow measurements show: baseline 420 L/min, morning 340 L/min (81% of personal best), midday 395 L/min (94% of personal best). Using the asthma action plan zones, what is the patient's status and most appropriate next step?",
                    "options": ["Green zone—continue current ICS therapy since midday peak flow is in the safe range", "Yellow zone—suggest doubling the ICS dose and monitoring peak flow twice daily until consistently in green zone", "Red zone—escalate immediately to oral corticosteroids and urgent provider evaluation", "Green zone with emerging yellow zone symptoms—increase rescue bronchodilator availability and discuss adding a long-acting beta agonist with the provider"],
                    "answer": 3,
                    "rationale": "Peak flow zones use percentage of PERSONAL BEST: Green ≥80%, Yellow 50-80%, Red <50%. This patient's morning peak flow of 340 is 81% (barely in green) but the TREND is concerning: morning dips to 81%, doesn't fully recover even by midday (94%). This pattern (morning symptoms, variation across the day) suggests inadequate control despite current ICS monotherapy. The patient is technically in green zone by numbers alone, but the VARIABILITY and TREND indicate worsening control. The appropriate step is NOT to escalate to oral steroids yet (red zone action), but to OPTIMIZE current therapy: add a long-acting beta agonist (LABA) to the ICS for better airway smooth muscle control, increase rescue bronchodilator access, and monitor closely. This prevents progression to true exacerbations. Distractors: 'continue current therapy' misses the emerging problem; doubling ICS alone without LABA won't address the smooth muscle component; jumping to oral steroids (red zone therapy) is premature when yellow zone interventions haven't been tried.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A nursing student asks why patients with severe, longstanding obstructive airway disease eventually develop both low oxygen and high carbon dioxide levels, when early in the disease only oxygen levels seemed to fall. Which explanation best fits the pathophysiology taught for obstructive disease?",
                    "options": ["Air trapped behind narrowed airways creates a ventilation-perfusion mismatch that worsens over time, eventually impairing carbon dioxide elimination as well as oxygenation","The alveoli stay completely normal in obstructive disease, so any carbon dioxide retention must come from an unrelated separate cardiac condition rather than the lung disease itself","Carbon dioxide always rises before oxygen falls in obstructive disease, since it diffuses less easily across the alveolar membrane than oxygen does","Carbon dioxide retention only develops once a patient begins using supplemental oxygen at home, not from the underlying airway obstruction itself"],
                    "answer": 0,
                    "rationale": "Obstructive disease causes air trapping and V/Q mismatch that worsens progressively; early on the mismatch mainly impairs oxygenation, but as disease advances the same mismatch impairs CO2 elimination too, producing hypercapnia. The distractors invert or misstate the timing and mechanism taught for this basic pathophysiology.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient newly diagnosed with asthma asks the nurse what actually makes asthma different from a one-time bout of bronchitis. Which teaching point reflects the definition of asthma covered in this unit?",
                    "options": ["Asthma causes airway obstruction that is permanent and does not improve even after the trigger is removed or bronchodilators are given","Asthma is a chronic condition of variable, reversible airflow obstruction driven by airway inflammation and hyperresponsiveness to triggers","Asthma only affects children and typically resolves completely and permanently once the child reaches adulthood without any further treatment","Asthma is diagnosed exclusively by a single chest X-ray showing hyperinflated lungs, without any need for pulmonary function testing"],
                    "answer": 1,
                    "rationale": "Asthma's hallmark is variable, reversible airflow obstruction from inflammation and hyperresponsiveness, distinguishing it from fixed obstructive processes like emphysema. It is not limited to children, is not permanent, and diagnosis relies on pulmonary function testing, not X-ray alone.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with asthma tells the nurse that cold air, strong perfume, and exercise all seem to bring on an attack, but she doesn't understand why such different things trigger the same reaction. Which teaching response is most accurate?",
                    "options": ["Each trigger works through a completely separate mechanism, so no single airway pathway explains why such different exposures all provoke the same symptoms in this patient","Only allergens like pollen or dust can trigger true asthma; cold air and exercise instead point to a separate diagnosis that mimics asthma","These varied triggers all act on already-sensitized, hyperresponsive airways, producing the same bronchoconstriction and inflammation regardless of what set it off","Triggers only matter for patients whose asthma is poorly controlled; a patient using daily controller medication would not react to any of them"],
                    "answer": 2,
                    "rationale": "Asthma triggers share a common final pathway: they provoke bronchoconstriction and inflammation in airways that are already hyperresponsive, which is why unrelated exposures like cold air, exercise, and irritants all produce the same reaction. The other options wrongly separate the mechanism, exclude non-allergic triggers, or claim controller therapy eliminates all reactivity.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with asthma has an acute reaction to a trigger, improves with treatment, and then develops a second wave of airway narrowing and inflammation roughly 4 to 8 hours later without any new exposure. The patient is confused about why symptoms returned. Which explanation matches the early- versus late-phase asthmatic response?",
                    "options": ["The return of symptoms means the initial treatment failed completely and the patient should be treated as if no medication had been given at all","This pattern indicates a brand new, unrelated trigger exposure occurred, since one exposure cannot cause two separate rounds of bronchoconstriction in this way","Late symptom recurrence like this is unique to chronic bronchitis and does not occur as part of the asthma pathophysiology taught in this unit","This second wave is the late asthmatic response, a delayed inflammatory reaction that can recur for up to 48 hours after the single initial trigger exposure"],
                    "answer": 3,
                    "rationale": "A single trigger exposure can produce an early bronchospastic response followed by a late-phase inflammatory response that can recur for up to 48 hours, which is why patient teaching includes monitoring well beyond the initial treatment. It does not mean treatment failed, does not require a new exposure, and is an asthma-specific, not bronchitis-specific, pattern.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with asthma of many years' duration undergoes pulmonary function testing that shows a fixed component of airflow obstruction that no longer fully reverses with bronchodilator therapy. Which process explains this finding?",
                    "options": ["Airway remodeling from repeated cycles of inflammation and injury has caused structural changes that persist even when bronchospasm is treated","The patient has developed emphysema instead of asthma, since asthma by definition can never produce any fixed, irreversible component at all","The bronchodilator dose being used is simply too low, and increasing the dose alone would be expected to fully reverse the fixed obstruction","Pulmonary function testing cannot distinguish reversible from fixed obstruction, so this finding cannot actually be interpreted this way at all"],
                    "answer": 0,
                    "rationale": "Long-standing, poorly controlled asthma can lead to airway remodeling, structural change from repeated inflammatory injury that produces a fixed obstructive component pulmonary function testing can detect. This does not mean the diagnosis has changed to emphysema or that a higher bronchodilator dose would reverse structural remodeling.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 55-year-old with a long smoking history and a persistent productive cough for the past year is being evaluated for chronic bronchitis versus another cause of chronic cough. Based on the diagnostic timing criterion taught for chronic bronchitis, which history would confirm the diagnosis?",
                    "options": ["A productive cough present for any 2 weeks total during the past year, regardless of whether it recurred in any prior year","A productive cough present for at least 3 months of the year for at least 2 consecutive years, matching the standard diagnostic definition","A productive cough that occurred once for a full month last year but has not recurred at all since, with no cough present again at all this year","A productive cough that started suddenly 3 days ago and has already been improving steadily since it began"],
                    "answer": 1,
                    "rationale": "Chronic bronchitis is defined by a productive cough present for at least 3 months a year for at least 2 consecutive years. A brief 2-week cough, a single non-recurring month, or a recent 3-day cough do not meet this diagnostic timing threshold.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks why vaping was described as making chronic bronchitis risk so much worse when combined with cigarette smoking. Which statement reflects the risk relationship taught in this unit?",
                    "options": ["Vaping alone carries the same risk as smoking, so combining the two habits does not meaningfully change a person's overall risk of chronic bronchitis","Vaping was taught as fully protective against chronic bronchitis, so adding it to a smoking habit was described as reducing the person's overall risk","Combining smoking and vaping increases chronic bronchitis risk roughly sixfold, on top of the fact that smoking alone accounts for about 90% of cases","The combined risk from smoking plus vaping was described as identical to smoking alone, since vaping itself carries essentially no additional risk"],
                    "answer": 2,
                    "rationale": "Smoking accounts for roughly 90% of chronic bronchitis cases, and combining smoking with vaping was taught as raising risk about sixfold rather than leaving it unchanged or making vaping protective.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with chronic bronchitis asks whether quitting smoking now, after 20 years, will actually help. Which response most accurately reflects what was taught about chronic bronchitis and smoking cessation?",
                    "options": ["Quitting will not change the disease course at all at this point, so continuing to smoke would make no additional difference going forward","Quitting will fully reverse the goblet cell hyperplasia and mucus hypersecretion already present, restoring the airways to their pre-disease state","Quitting only matters for preventing emphysema, since chronic bronchitis progression is driven entirely by genetic factors rather than smoke exposure","Quitting halts further progression of the disease, but the damage already present, including goblet cell hyperplasia, is not reversed by stopping"],
                    "answer": 3,
                    "rationale": "Smoking cessation in chronic bronchitis halts further progression but does not reverse existing structural changes such as goblet cell hyperplasia. It is not futile, does not fully restore the airways, and chronic bronchitis is smoke-driven, not primarily genetic.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "An instructor emphasizes that airflow obstruction in emphysema is not caused by mucus plugging the airways the way it is in chronic bronchitis. If a student is asked what actually causes the obstruction in emphysema, which answer is correct?",
                    "options": ["Obstruction results from chronic inflammation and loss of elastic recoil in the alveolar walls, which causes airways to collapse during exhalation","Obstruction results from thick mucus plugs identical to those seen in chronic bronchitis, just located deeper within the smaller bronchioles instead","Obstruction results from bronchospasm of the smooth muscle surrounding the airways, the same mechanism responsible for an acute asthma attack","Obstruction results from scarring and fibrosis of the lung parenchyma, the same restrictive process that occurs in interstitial lung disease"],
                    "answer": 0,
                    "rationale": "Emphysema's obstruction comes from chronic inflammation and loss of elastic recoil, which lets airways collapse on exhalation, not from mucus plugging, bronchospasm, or restrictive fibrosis, which are mechanisms taught for other conditions.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient asks how emphysema actually destroys lung tissue at the cellular level. Which explanation matches the protease/antiprotease mechanism taught in this unit?",
                    "options": ["Elevated antiprotease levels overwhelm normal protease activity, which paradoxically causes the same tissue destruction seen with protease excess","An imbalance favoring protease activity over antiprotease protection allows enzymes to break down elastin in the alveolar walls, destroying lung tissue","Emphysema results from a buildup of excess elastin in the alveolar walls, which stiffens the lungs and prevents normal alveolar expansion over time","Emphysema develops when white blood cells stop responding to any inflammatory signal at all, halting the immune response within the alveoli entirely over time"],
                    "answer": 1,
                    "rationale": "Emphysema develops when proteases outweigh antiprotease protection, breaking down elastin and destroying alveolar walls. Excess antiprotease, excess elastin buildup, and a halted immune response all misstate the actual imbalance taught for this mechanism.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A 44-year-old nonsmoker is diagnosed with emphysema, and the provider orders testing for a specific genetic cause. Which statement about this genetic form of emphysema is accurate?",
                    "options": ["Alpha-1 antitrypsin deficiency accounts for the large majority of emphysema cases and should be suspected in almost every patient who is diagnosed","Alpha-1 antitrypsin deficiency only causes chronic bronchitis, not emphysema, despite both conditions falling under the COPD umbrella term","Alpha-1 antitrypsin deficiency is the genetic form of emphysema, but it accounts for less than 2% of cases, so most emphysema is smoking-related","Alpha-1 antitrypsin deficiency cannot be tested for and is diagnosed only by excluding every other possible cause of the patient's emphysema"],
                    "answer": 2,
                    "rationale": "Alpha-1 antitrypsin deficiency is the recognized genetic form of emphysema but accounts for under 2% of cases, so the large majority remain smoking-related. It causes emphysema specifically, and it can be tested for directly rather than diagnosed only by exclusion.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient with advanced emphysema presents with a thin build, barrel-shaped chest, and pursed-lip breathing, and is noted to maintain a near-normal oxygen saturation despite obvious dyspnea. Which classic description from the Blue Bloater versus Pink Puffer comparison does this patient match?",
                    "options": ["Blue Bloater, the chronic-bronchitis-predominant presentation with productive cough, cyanosis, and significant peripheral edema noted on the exam today","Neither pattern applies to emphysema, since the Blue Bloater/Pink Puffer comparison was taught only for distinguishing asthma from bronchitis","This presentation is inconsistent with either classic pattern and instead suggests the patient actually has undiagnosed chronic bronchitis","Pink Puffer, the emphysema-predominant presentation with dyspnea, pursed-lip breathing, and relatively preserved oxygenation despite a thin build"],
                    "answer": 3,
                    "rationale": "The thin, barrel-chested patient with pursed-lip breathing and near-normal oxygenation is the classic 'Pink Puffer' emphysema presentation, contrasted with the cyanotic, edematous 'Blue Bloater' pattern of chronic bronchitis. The comparison applies specifically to emphysema versus bronchitis, not asthma.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient is prescribed albuterol for quick relief and asks why the provider also prescribed salmeterol to take every day. Which teaching point distinguishes a short-acting beta agonist from a long-acting beta agonist as covered in this unit?",
                    "options": ["A SABA acts within minutes for rescue, while a LABA lasts 12 to 24 hours for prevention and is paired with an inhaled corticosteroid","A SABA and a LABA work through entirely different receptor types, so a LABA cannot be used for airway obstruction from asthma or COPD at all","A LABA acts faster than a SABA and should replace the rescue inhaler entirely for any patient experiencing acute, sudden-onset dyspnea","A SABA is intended for scheduled daily prevention while a LABA is reserved strictly for acute rescue use during a sudden asthma attack"],
                    "answer": 0,
                    "rationale": "SABAs like albuterol act within minutes for rescue use, while LABAs like salmeterol have a longer 12-24 hour duration meant for daily prevention and are always paired with an inhaled corticosteroid. A LABA does not act faster than a SABA and is not used for acute rescue, and the roles are not reversed.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on ipratropium for COPD asks how it differs from the albuterol inhaler already being used. Which statement about ipratropium's mechanism is accurate?",
                    "options": ["Ipratropium is a corticosteroid that reduces airway inflammation directly and carries the same oral candidiasis risk taught for inhaled steroids","Ipratropium is a leukotriene receptor antagonist taken by mouth rather than inhaled, similar to montelukast, rather than being an inhaled bronchodilator at all","Ipratropium is an anticholinergic that blocks bronchoconstriction by opposing acetylcholine, and is often combined with a beta agonist, as in Combivent or DuoNeb","Ipratropium works by stabilizing mast cells to prevent histamine release, the same prophylactic mechanism described in this unit for cromolyn"],
                    "answer": 2,
                    "rationale": "Ipratropium is an anticholinergic bronchodilator that opposes acetylcholine-driven bronchoconstriction and is commonly combined with a beta agonist, as in Combivent or DuoNeb. It is not a corticosteroid, not a leukotriene receptor antagonist, and does not work through mast cell stabilization.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                },
                {
                    "stem": "A patient on theophylline for COPD calls the clinic reporting nausea, restlessness, and a new tremor. The nurse recognizes these as possible early signs of toxicity. Which teaching points about theophylline support monitoring closely for this? Select all that apply.",
                    "options": ["Theophylline has a narrow therapeutic index, so blood levels must be monitored closely to avoid toxicity","Theophylline is metabolized to a compound related to caffeine, which can contribute to symptoms like restlessness and tremor at higher levels","A patient who quits smoking while on theophylline may need a dose adjustment, since smoking status affects theophylline metabolism","Theophylline is considered a first-line rescue inhaler and should be used before albuterol for any episode of acute bronchospasm at home today","Theophylline toxicity has no recognized early warning signs, so nausea and tremor in this patient are unrelated to the medication"],
                    "answers": [0,1,2],
                    "rationale": "Theophylline has a narrow therapeutic index requiring level monitoring, is metabolized to a caffeine-related compound that can cause restlessness and tremor at toxic levels, and its metabolism changes with smoking status, so cessation can require a dose adjustment. It is a second-line oral agent, not a first-line rescue inhaler, and it does have recognized early toxicity signs.",
                    "topic": "Obstructive Airway Disorders",
                    "source": "quiz-bank"
                }
            ],
            "eaq": []
        }
    }
  
],

  TOPIC_ORDER: [
    "Antimicrobials &amp; Antibiotics (ABX)",
    "Antivirals",
    "HIV &amp; Antiretroviral Therapy (ART)",
    "Upper Respiratory Infections (URI)",
    "Obstructive Airway Disorders",
    "Pneumonia &amp; Tuberculosis",
    "Pathopharm Review",
    "Anemia &amp; Polycythemia"
  ]
};
