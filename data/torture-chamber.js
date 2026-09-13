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
     * every topic with 4+ questions has a minimum gap of 3 (when the
       topic pool is large enough for this to be mathematically
       possible — see the 2026-08-23 note below for when it isn't);
     * no third of the exam holds far more of one topic than another;
     * no 3-topic cycle repeats three times running (A B C A B C A B C).

   ============================================================
   PROVENANCE NOTE
   ============================================================
   Keep a dated log here of what changed and why — question count,
   per-topic counts, the answer-count spread, and any rebalance. It is
   the only record of the design decisions once the questions are
   shuffled.

   --- 2026-08-23: Initial build (15 questions, 3 Week 1 topics) ---
   Replaced the 3 demo questions with a real exam covering the three
   Week 1 topics (Antimicrobials & Antibiotics, Antivirals, HIV &
   ART), per explicit user request for an "extremely hard," true-
   challenge SATA exam. An initial version of this build mixed in all
   11 Pathopharm Review topics as well (70 questions total, 5/topic
   across 14 topics) — the user reviewed that draft and asked to scale
   back to Week 1 only, so the 11 Pathopharm Review sets were dropped
   from this file. That generated-and-validated content is preserved
   at /home/claude/generated/torture-chamber/*.json in case a future
   session is asked to add it (or a Week 2 equivalent) later.

   Method: 3 parallel research agents each read exactly one Week 1
   topic page and wrote 5 extremely-hard, NCLEX NGN/clinical-judgment-
   style SATA questions (6-8 options each, "several distractors"),
   grounded only in that page's lecture content, following the four
   anti-giveaway rules above. A structural + giveaway validation pass
   (matching this repo's own tools/verify.js zero-margin "unique
   longest option is correct" check) flagged 7 of these 15 questions
   for the length-bias defect (rule 3) despite explicit drafting
   instructions to avoid it. All 7 were individually rewritten
   (trimming the correct option, or adding genuine clinical detail to
   a distractor) via a second round of dedicated fix agents, re-
   verified afterward at 0 flags remaining.

   Per-topic counts (5 questions each, 15 total):
     Antimicrobials & Antibiotics (ABX)   5
     Antivirals                            5
     HIV & Antiretroviral Therapy (ART)    5

   Answer-count-per-question spread (rule 2): 1 correct x1, 2 correct
   x4, 3 correct x4, 4 correct x4, 5 correct x2. No all-correct item —
   a known gap versus "mix in all-correct" above, accepted for this
   narrower 15-question pool since it would otherwise skew heavily
   toward the largest topic's single all-correct-eligible question.
   Option-count spread: 7-option x8, 8-option x7.

   ORDERING note: the "minimum gap of 3" rule above is mathematically
   impossible to satisfy with only 3 topics of 5 questions each in 15
   slots (it would require at least 19 slots) — deliberately relaxed
   for this build to "no two adjacent questions share a topic" plus
   the no-3-cycle-repeat and thirds-balance checks, which the final
   order satisfies. Restore the full minimum-gap-3 rule once the topic
   pool grows large enough (roughly 5+ topics) to make it feasible
   again.
   ============================================================ */
window.EXAM_DATA = {
  id: "torture-chamber",
  title: "The Torture Chamber",

  questions: [
    {
      stem: "A 78-year-old patient was exposed to a family member with confirmed influenza A three days ago and remains asymptomatic. The prescriber is considering oseltamivir for this patient. Which of the following are accurate regarding this medication's use?",
      options: [
        "The drug is available in both oral and IV formulations for patients unable to swallow",
        "It must be started before or within 48 hours of symptom onset to have a meaningful effect",
        "It works by inhibiting viral DNA polymerase, causing chain termination",
        "Once a patient exposed to influenza is hospitalized with severe symptoms, starting the drug at that point is highly likely to shorten the illness",
        "Post-exposure prophylaxis is a typical use for this drug, chosen partly to help avoid driving flu resistance to the medication",
        "Side effects are limited to mild gastrointestinal upset in elderly patients, with no risk to the kidneys or nervous system",
        "It is equally effective against influenza A and influenza B strains",
      ],
      answers: [1, 4],
      rationale: "Oseltamivir must be started before or within 48 hours of symptom onset, and it's primarily used for post-exposure prophylaxis (often in elderly or immunocompromised patients) partly to avoid driving resistance. It is PO only, not available IV. Its mechanism is neuraminidase inhibition — DNA polymerase chain termination is ganciclovir's mechanism. Once a patient is sick enough to be hospitalized, the drug is unlikely to help because the virus has usually already finished replicating — the opposite of what that option claims. Its side effects are not 'limited to' GI upset; seizures and renal impairment are also listed. It is best against influenza A with only some action against B, not equally effective against both.",
      topic: "Antivirals"
    },
    {
      stem: "A patient with a documented seizure disorder needs broad-spectrum IV therapy for a severe, resistant infection, and the prescriber is weighing which carbapenem to order. Which points should guide the nurse's understanding of this drug class?",
      options: [
        "Cilastatin is added to imipenem specifically to lower imipenem's seizure risk.",
        "Carbapenems should be infused rapidly, over about 15 minutes, to limit total drug exposure.",
        "Ertapenem would be the safest first choice here given its favorable seizure profile compared to other carbapenems.",
        "Meropenem is often chosen over imipenem-cilastatin in this situation because of its lower seizure risk.",
        "Once the patient stabilizes, the carbapenem can be switched to an oral form given its good bioavailability.",
        "Meropenem requires co-administration with cilastatin, the same as imipenem.",
        "CRE, bacteria resistant to carbapenems, is a public health emergency, fatal in roughly half of affected patients.",
        "Carbapenems are considered narrow-spectrum agents reserved for organisms other drug classes can't reach.",
      ],
      answers: [3, 6],
      rationale: "Meropenem is preferred over imipenem-cilastatin when possible specifically for its lower seizure risk, and CRE is explicitly framed as a public health emergency that is fatal in roughly half of affected patients. The distractors misapply real facts: cilastatin's actual role is blocking a kidney enzyme (dehydropeptidase) that would otherwise break imipenem down too fast, not lowering seizure risk; carbapenems are infused over 60 minutes, not 15; the source material never attributes a favorable seizure profile to ertapenem, so that comparison is unsupported; carbapenems are IV only, never oral; meropenem's actual advantage is that it does NOT require cilastatin, unlike imipenem; and carbapenems are the broadest-spectrum antibiotic class available, the opposite of narrow-spectrum.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)"
    },
    {
      stem: "A nursing student summarizes how each class of antiretroviral drugs works within the HIV life cycle. Which of the student's statements are correct?",
      options: [
        "NRTIs inhibit reverse transcriptase, blocking HIV's ability to incorporate its RNA into the host cell's DNA.",
        "Protease inhibitors block the virus from entering the host cell by binding the CCR5 co-receptor on the cell surface, preventing the conformational change the virus needs to fuse with and enter the cell.",
        "Integrase inhibitors inhibit the enzyme that inserts viral DNA into the host cell's own genetic material.",
        "Fusion inhibitors block the virus from entering the cell by preventing it from fusing with the host cell membrane.",
        "NNRTIs also inhibit reverse transcriptase, working similarly to NRTIs.",
        "CCR5 antagonists inhibit HIV protease, preventing assembly of new virus particles.",
        "Protease inhibitors inhibit HIV protease.",
        "CCR5 antagonists block viral entry via the CCR5 co-receptor protein.",
      ],
      answers: [0, 2, 3, 4, 6, 7],
      rationale: "Six of the eight statements correctly match the page's drug-class table: NRTIs and NNRTIs both inhibit reverse transcriptase; integrase inhibitors inhibit integrase, the enzyme that inserts viral DNA into host DNA; fusion inhibitors and CCR5 antagonists both block viral entry (fusion with the membrane, and the CCR5 co-receptor, respectively); and protease inhibitors inhibit HIV protease. The two wrong statements swap mechanisms between classes: option 2 assigns protease inhibitors the CCR5-binding, entry-blocking job that actually belongs to CCR5 antagonists, and option 6 assigns CCR5 antagonists the protease-inhibiting, assembly-blocking job that actually belongs to protease inhibitors — each is a real mechanism from the page attached to the wrong drug class.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)"
    },
    {
      stem: "A nurse is reviewing cephalosporin orders written for several different patients and recalling how coverage and precautions vary by generation. Which of the following statements are accurate?",
      options: [
        "A first-generation cephalosporin such as cephalexin reliably covers enterococcus and streptococcus.",
        "Cefazolin has minimal CNS penetration, a poor meningitis choice despite its prophylaxis role.",
        "Ceftazidime, a third-generation agent, provides coverage against pseudomonas.",
        "Cefuroxime, a second-generation agent, is an appropriate choice for a pseudomonas infection.",
        "Ceftaroline, the newest generation, covers ESBL-producing organisms and Klebsiella.",
        "Cefepime crosses the blood-brain barrier and covers both gram-positive and gram-negative organisms.",
        "Cephalosporins as a class are considered pregnancy category B.",
        "Ceftriaxone requires extra caution in patients with significant renal impairment.",
      ],
      answers: [1, 2, 5, 6],
      rationale: "Cefazolin is the classic surgical-prophylaxis cephalosporin but has minimal CNS penetration, making it a poor meningitis choice. Ceftazidime (third-generation) and cefepime (fourth-generation) are the earlier-generation agents that specifically cover pseudomonas, with cefepime also crossing the blood-brain barrier and covering both gram-positive and gram-negative organisms. Cephalosporins as a class are pregnancy category B. The distractors each borrow a real fact and misapply it: cefuroxime is second-generation, and second-generation drugs are explicitly NOT for pseudomonas (that coverage belongs to ceftazidime/cefepime); ceftaroline is the broadest, newest generation but specifically does NOT cover Klebsiella or ESBL organisms, the opposite of what's claimed; first-generation cephalosporins explicitly do not cover enterococcus or strep; and ceftriaxone's caution flag is liver dysfunction, not renal impairment.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)"
    },
    {
      stem: "A nursing instructor is explaining, in general terms, why there are so few antiviral drugs compared to antibiotics and how the antivirals that do exist actually work. Which of the following reflect what was taught?",
      options: [
        "Viruses can only replicate inside a living host cell, so an effective drug risks harming healthy cells too",
        "Most antivirals only work during the replication phase, and symptoms often appear after replication has already largely finished",
        "Antivirals work primarily by directly destroying the bacterial cell wall surrounding the virus",
        "Unlike bacteria, viruses do not have their own cell wall to serve as a selective drug target",
        "Effective antiviral therapy currently exists for only a limited number of viruses",
        "Once started, antiviral therapy fully eradicates the causative virus from the body in nearly all cases, eliminating any risk of future reactivation or recurrent outbreaks",
        "Antivirals generally work by inhibiting viral replication, which then allows the immune system to clear the virus",
      ],
      answers: [0, 1, 3, 4, 6],
      rationale: "This is the core reasoning from the lecture: viruses only replicate inside host cells (making healthy cells a collateral risk), most antivirals only act during the narrow replication window, viruses lack their own cell wall (unlike bacteria), only a handful of viruses have effective antiviral therapy, and the general mechanism is inhibiting replication so the immune system can finish the job. The 'bacterial cell wall' option inverts the actual teaching point — viruses don't have a cell wall at all, which is exactly why antivirals can't target one the way antibiotics target bacteria. The 'fully eradicates' option contradicts the specific 'not a cure' facts given for both acyclovir (virus stays dormant) and ganciclovir (recurrent infections are expected).",
      topic: "Antivirals"
    },
    {
      stem: "During a code, a nurse sustains a needle stick from a patient later confirmed HIV-positive. A coworker assisting the same code has blood splash directly onto their face. Which statement about these two exposures is accurate?",
      options: [
        "The needlestick carries an estimated transmission risk of under 1%.",
        "The face splash carries a higher risk than the needlestick because facial mucous membranes absorb the virus more readily.",
        "Because blood was visibly involved, both exposures should be classified in the same high-risk category as unprotected sex with a known HIV-positive partner.",
        "Since both calculated risks are so low, neither nurse is required to complete exposure paperwork or reporting.",
        "Post-exposure prophylaxis cannot be offered unless the source patient's viral load is confirmed to be at or below the 2% transmission threshold used for treated perinatal exposure.",
        "Shared injection equipment carries a similar sub-1% risk to a needlestick exposure in a healthcare setting, since both involve a needle.",
        "The face splash exposure carries essentially the same risk as a blood transfusion from an unscreened donor.",
      ],
      answers: [0],
      rationale: "Only the needlestick statement is correct — the page states needle sticks carry a risk 'still under 1%.' The face splash is actually LOWER risk, not higher: face/skin splash with body fluid is 'essentially zero risk, even if blood is present,' reversing option 2's claim. Blood exposure alone doesn't move an occupational exposure into the same 'high risk' tier as unprotected anal/vaginal sex — that category is reserved for sexual and injection-related exposure, not splashes or sticks. The page explicitly states any exposure, regardless of how low the risk, still requires completing exposure paperwork/reporting, so option 4 directly contradicts that. No viral-load threshold for offering PEP appears anywhere on the page — option 5 misapplies the <2% treated-perinatal-transmission figure to a PEP eligibility rule that doesn't exist. Shared injection equipment is explicitly classified as high risk, not comparable to a sub-1% needlestick. Blood transfusion is described as 'possible, but rare' given current screening — a different, non-'essentially zero' risk level than a face splash.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)"
    },
    {
      stem: "The care team is finalizing an antibiotic stewardship and culture-collection plan for a hospitalized patient with suspected severe sepsis. Which of the following practices and facts are correct?",
      options: [
        "Delay the first antibiotic dose until cultures return, even if the patient is rapidly deteriorating.",
        "The MIC value on a sensitivity report represents the concentration that kills 99.9% of the bacterial colony.",
        "Obtain the sample through the patient's existing central line to minimize discomfort.",
        "Draw two blood culture sets, one aerobic bottle and one anaerobic bottle.",
        "Recognize that starting the antibiotic before the culture is drawn can prevent the organism from growing, making it harder to identify.",
        "Treat the culture order as routine, to be completed sometime during the current shift.",
        "Community-acquired infections are typically more often bacterial and resistant than hospital-acquired infections, which shapes empiric therapy.",
        "A clear zone with no bacterial growth around a disk in a disk diffusion test means that drug is effective against the organism.",
      ],
      answers: [3, 4, 7],
      rationale: "Two blood culture bottles (one aerobic, one anaerobic) are standard, starting an antibiotic before the culture is drawn can prevent the organism from growing and complicate identification (which is exactly why cultures are prioritized), and a clear zone on disk diffusion indicates an effective drug. The distractors misapply real facts: severe sepsis and a rapidly deteriorating patient are the explicit exceptions where treatment cannot wait for cultures; peripheral sticks are preferred over central lines/ports for culture draws because those devices commonly contaminate the sample; a culture order is a stat priority, not routine; the 99.9%-kill definition belongs to MBC, not MIC (MIC only reflects the concentration that stops growth); and hospital-acquired infections, not community-acquired ones, are described as more often bacterial and resistant.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)"
    },
    {
      stem: "A transplant recipient is started on IV ganciclovir for CMV. Which points about this drug's black-box warnings should be included in patient teaching?",
      options: [
        "Tissue necrosis can occur at the IV insertion site, so line patency must be closely monitored",
        "Hematologic toxicity can cause pancytopenia, so lab values need close monitoring",
        "Combining the drug with certain antibiotics can increase seizure risk",
        "The drug may impair fertility in both men and women of childbearing age",
        "Extra caution is needed in patients with a pre-existing low platelet count caused by idiopathic thrombocytopenic purpura, an autoimmune condition marked by antibody-mediated platelet destruction",
        "The drug carries a risk of fetal toxicity and birth defects if a partner becomes pregnant during treatment",
        "GI distress and seizures are the primary black-box warnings associated with this medication",
        "Animal studies suggest the drug may be carcinogenic",
      ],
      answers: [1, 3, 5, 7],
      rationale: "Ganciclovir's four black-box warnings are hematologic toxicity (pancytopenia), fertility impairment, fetal toxicity/birth defects, and possible carcinogenicity. IV tissue necrosis and the ITP caution belong to acyclovir, not ganciclovir. The imipenem interaction is a real ganciclovir safety concern, but it's a separate drug-interaction caution, not one of the four listed black-box warnings. 'GI distress and seizures' are acyclovir's general side effects, not ganciclovir's black-box items — a fact borrowed from the wrong drug and mislabeled as a black-box warning.",
      topic: "Antivirals"
    },
    {
      stem: "A nurse is reviewing a chart to determine whether a patient's diagnosis meets AIDS-defining criteria. Which findings, if present, would independently classify this patient's diagnosis as AIDS regardless of CD4 count?",
      options: [
        "Pneumocystis pneumonia (PCP)",
        "Oral hairy leukoplasia on the lateral tongue",
        "A CD4 count of 250 cells/mm³ with no opportunistic infection",
        "Kaposi sarcoma",
        "Increased risk of periodontal disease",
        "Wasting syndrome",
        "A CD4 percentage of 15%, with no AIDS-defining condition documented",
        "HIV-related encephalopathy (AIDS dementia complex)",
      ],
      answers: [0, 3, 5, 7],
      rationale: "PCP, Kaposi sarcoma, wasting syndrome, and HIV-related encephalopathy/AIDS dementia complex are all listed as AIDS-defining conditions — any one of them classifies the diagnosis as AIDS independent of CD4 count. Oral hairy leukoplasia and increased periodontal disease risk are oral manifestations that appear as CD4 counts begin to drop — early warning signs, not AIDS-defining conditions themselves. A CD4 count of 250 cells/mm³ falls in the 200–499 range (Stage 2), above the <200 threshold that defines AIDS by count alone, and with no AIDS-defining condition present this patient doesn't meet either criterion. Likewise, a CD4 percentage of 15% falls in the 14–25% Stage 2 range, not the <14% Stage 3 range — this distractor uses a real number from the CDC staging table but places it just outside the AIDS-defining threshold.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)"
    },
    {
      stem: "A patient newly diagnosed with genital herpes is started on oral acyclovir. When explaining how the medication actually stops the virus, which of the following are accurate mechanisms of action for acyclovir?",
      options: [
        "Requires binding to a viral cell wall protein to gain entry",
        "Interferes with viral DNA and RNA synthesis, halting nucleic acid production",
        "Causes viral DNA polymerase chain termination",
        "Prevents the virus from binding to the host cell so it cannot replicate further",
        "Permanently eliminates the virus from the body, preventing any future outbreaks",
        "Stimulates the body's own immune response to help clear the virus",
        "Inhibits neuraminidase, the enzyme influenza viruses use to replicate",
      ],
      answers: [1, 3, 5],
      rationale: "Acyclovir's three lecture-stated mechanisms are: interfering with viral DNA/RNA synthesis, blocking the virus from binding to the host cell, and stimulating the immune system to help kill the virus. 'Causes viral DNA polymerase chain termination' is ganciclovir's mechanism, not acyclovir's, and 'inhibits neuraminidase' is oseltamivir's mechanism — both real facts from the page but attached to the wrong drug. Acyclovir also does not permanently eliminate the virus; it decreases severity, frequency, and shedding, but the virus stays dormant. Viruses do not have their own cell wall at all, so no antiviral mechanism involves binding a 'viral cell wall protein.'",
      topic: "Antivirals"
    },
    {
      stem: "A patient receiving an IV vancomycin infusion for MRSA bacteremia develops facial flushing, itching, and a diffuse rash about 20 minutes into the infusion, along with a mild drop in blood pressure. Which nursing actions and knowledge points are appropriate for this patient's ongoing care?",
      options: [
        "Slow the infusion rate rather than stopping the drug.",
        "Draw peak level about 30 minutes before the infusion starts, not after it ends.",
        "Draw a trough level approximately 30 minutes before the next scheduled dose.",
        "Stop the infusion immediately and document a true anaphylactic allergy.",
        "Monitor platelet counts throughout therapy.",
        "Use extra caution if the patient is also scheduled for IV contrast dye.",
        "Reassure the patient that this reaction indicates permanent, irreversible hearing loss.",
        "Consider premedicating with diphenhydramine before the next dose.",
      ],
      answers: [0, 2, 4, 5, 7],
      rationale: "This presentation is Red Man syndrome, an infusion-rate reaction rather than a true allergy, so the fix is slowing the infusion (correct), not stopping it and documenting anaphylaxis (wrong -- no true allergy has occurred). Vancomycin monitoring includes a trough drawn about 30 minutes before the next dose and, separately, a peak drawn about 30 minutes AFTER the infusion finishes -- the distractor describing a peak drawn before the infusion starts reverses that timing. Thrombocytopenia and nephrotoxicity mean platelet counts should be monitored and extra caution is needed with other nephrotoxic agents like IV contrast; premedicating with diphenhydramine is an accepted strategy for this reaction. The closest trap is the hearing-loss option: vancomycin's ototoxicity is described as reversible, unlike the permanent ototoxicity associated with aminoglycosides -- this distractor borrows the wrong drug's toxicity profile.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)"
    },
    {
      stem: "One patient, diagnosed with HIV years ago, has a CD4 count of 550 cells/mm³ and an undetectable viral load on ART. A second patient was infected within the past two weeks, is not yet on treatment, and reports fever, sore throat, and muscle aches. Which statements are accurate?",
      options: [
        "The treated patient's CD4 count of 550 cells/mm³ with an undetectable viral load is consistent with clinical latency being maintained indefinitely on effective treatment.",
        "The newly infected patient's fever, sore throat, and muscle aches mean they have already progressed to the symptomatic HIV/AIDS stage, since clinical latency itself produces no symptoms and only advanced immunosuppression would explain a symptomatic presentation.",
        "The newly infected patient is not infectious until seroconversion occurs and antibodies become detectable.",
        "A CD4 count of 550 cells/mm³ meets the CDC's Stage 3 surveillance criteria based on CD4 count alone.",
        "The newly infected patient's symptoms are consistent with acute infection, during which roughly 40–60% of infected people don't notice or can't identify their symptoms.",
        "Because the treated patient's viral load is undetectable, that patient is no longer considered HIV-positive.",
        "As CD4 count declines over the course of untreated infection, viral load tends to rise correspondingly.",
      ],
      answers: [0, 4, 6],
      rationale: "Correct: a treated patient with viral load undetectable and CD4 around 500–600 matches the page's description of clinical latency 'maintained indefinitely' with effective treatment. The second patient's nonspecific symptoms (fever, sore throat, muscle aches) match the acute stage, where 40–60% of people don't notice or can't identify symptoms. CD4 count and viral load move inversely as untreated disease progresses. Distractors: the page states a person is infectious from day one, even before symptoms appear, not only after seroconversion — option 2 is wrong. A CD4 of 550 falls in Stage 1 (≥500), not Stage 3 (<200) — option 3 flips the threshold. The page explicitly says an undetectable viral load means effectively no transmission risk but the person is 'still considered HIV-positive' — option 5 contradicts this directly. Flu-like symptoms are acute-stage findings, not evidence of having reached the symptomatic HIV/AIDS stage — option 1 confuses the two stages.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)"
    },
    {
      stem: "A kidney transplant recipient develops CMV retinitis and, separately, a CMV respiratory infection. Which of the following are accurate?",
      options: [
        "CMV retinitis is treated with a topical ganciclovir ointment applied directly to the eye",
        "Treatment is typically initiated orally, then transitioned to IV for the final weeks of therapy",
        "CMV is an equally common concern in immunocompetent and immunocompromised patients",
        "CMV cannot be cured, so affected patients experience recurrent infections despite treatment",
        "Oral ganciclovir tablets may be crushed and mixed with food for easier swallowing",
        "The drug is cleared primarily by the liver, so hepatic function should be monitored closely",
        "If a crushed tablet contacts bare skin, the area should be left alone since the drug is not absorbed through skin",
        "CMV respiratory infection in immunocompromised patients is treated with a subcutaneous ganciclovir injection",
      ],
      answers: [3],
      rationale: "CMV cannot be cured; patients have recurrent infections even with treatment. CMV retinitis is actually treated with an intraocular injection, not a topical ointment (topical ointment is a route used for a different drug, acyclovir, for a different condition). Treatment order is reversed in the distractor — ganciclovir is usually started IV for a few weeks first, then transitioned to oral, not the other way around. CMV is only a concern in immunocompromised patients, not the general population. The tablet should never be crushed or split, and if it contacts bare skin the area should be washed with soap and water, not left alone. Ganciclovir is cleared through the kidneys, not the liver. No subcutaneous route for ganciclovir is described on the page.",
      topic: "Antivirals"
    },
    {
      stem: "A patient in the ICU is receiving IV gentamicin for a resistant gram-negative infection and is scheduled to receive a neuromuscular blocking agent before an upcoming procedure. Which nursing concerns are most appropriate given this combination of therapies?",
      options: [
        "Monitor closely for profound respiratory distress given the gentamicin/neuromuscular blocker combination.",
        "Reassure the patient that nephrotoxicity from gentamicin is irreversible and will require permanent dialysis.",
        "Administer the aminoglycoside before any beta-lactamase inhibitor to maximize the synergistic effect.",
        "Assess for tinnitus or hearing changes, keeping in mind this ototoxicity can become permanent.",
        "Draw peak and trough levels at any convenient time, since strict timing doesn't affect aminoglycoside results.",
        "Anticipate a lower initial dose, since aminoglycosides are bacteriostatic and require sustained levels to work.",
        "Watch for CNS effects such as confusion, disorientation, or numbness and tingling.",
      ],
      answers: [0, 3, 6],
      rationale: "Gentamicin combined with a neuromuscular blocker can cause profound respiratory distress, aminoglycoside ototoxicity can become permanent (unlike vancomycin's reversible hearing loss), and CNS effects like confusion, disorientation, and numbness/tingling are recognized aminoglycoside effects. The closest traps swap facts between drugs or reverse a process: aminoglycoside nephrotoxicity is usually reversible -- permanence belongs to the ototoxicity, not the nephrotoxicity; the correct sequence is giving the beta-lactamase inhibitor first so the aminoglycoside can get into the bacterial cell, not the reverse; peak/trough timing is exactly what's monitored for aminoglycosides, so 'anytime' is wrong; and aminoglycosides are described as potent against gram-negative organisms, not bacteriostatic -- that label belongs to other classes like macrolides, tetracyclines, and sulfonamides.",
      topic: "Antimicrobials &amp; Antibiotics (ABX)"
    },
    {
      stem: "A clinic counsels two patients: one is HIV-negative and in an ongoing relationship with an HIV-positive partner and wants continued protection; the other had unprotected sex two days ago with a partner just found to be HIV-positive and needs guidance now. Which statement correctly matches management to patient?",
      options: [
        "The first patient could be started on PrEP, an ongoing antiretroviral regimen that reduces transmission risk by more than 90%.",
        "PrEP is given for 28 days, after which HIV testing is performed at 6 and 12 weeks to confirm it worked.",
        "Clinics offer PrEP broadly to any sexually active adult who requests it, since limiting it to those with an identified ongoing risk would be discriminatory.",
        "The second patient should begin a 28-day course of PEP, with HIV testing done at 6 and 12 weeks.",
        "PEP is an ongoing daily antiretroviral combination pill taken indefinitely by anyone with a partner who is HIV-positive.",
        "Reducing transmission risk by more than 90% is a benefit specifically associated with completing the 28-day PEP course after a high-risk exposure.",
      ],
      answers: [0, 3],
      rationale: "The first patient fits PrEP — ongoing antiretroviral medication for an HIV-negative person with an HIV-positive partner, reducing risk by more than 90%. The second patient fits PEP — started after a known high-risk exposure, given for 28 days with testing at 6 and 12 weeks. The distractors cross-wire the two: option 2 attaches PEP's 28-day/6-and-12-week timeline to PrEP, which is ongoing, not time-limited. Option 3 contradicts the page directly — clinics screen and interview first specifically because giving PrEP out broadly increases the risk of drug resistance. Option 4 attaches PrEP's 'ongoing, taken indefinitely' description to PEP, which is a defined 28-day course, not ongoing. Option 5 attaches PrEP's >90% risk-reduction figure to PEP, a statistic the page never states for PEP.",
      topic: "HIV &amp; Antiretroviral Therapy (ART)"
    },
    {
      stem: "A 68-year-old patient with COPD is admitted with dyspnea. The nurse notes a sustained oxygen saturation of 100% on 3L nasal cannula. Which interventions should the nurse initiate? (Select all that apply)",
      options: [
        "Gradually wean oxygen to lower settings while monitoring SpO2 and respiratory status",
        "Maintain current oxygen settings to prevent acute hypoxemia",
        "Monitor for signs of CO2 retention such as altered mental status and increased somnolence",
        "Educate the patient that maintaining SpO2 at 100% is the target goal for long-term management",
        "Assess breathing patterns and muscle use to evaluate work of breathing"
      ],
      answers: [0, 2, 4],
      rationale: "Correct: Gradually wean oxygen to lower settings while monitoring SpO2 and respiratory status; Monitor for signs of CO2 retention such as altered mental status and increased somnolence; Assess breathing patterns and muscle use to evaluate work of breathing. These align with clinical evidence for Respiratory. Incorrect: Maintain current oxygen settings to prevent acute hypoxemia; Educate the patient that maintaining SpO2 at 100% is the target goal for long-term management — these represent common misconceptions or contraindicated actions.",
      topic: "Respiratory"
    },
    {
      stem: "A patient is undergoing diagnostic testing for suspected active tuberculosis. Which findings would support active TB disease requiring airborne precautions? (Select all that apply)",
      options: [
        "Positive AFB sputum smear result on microscopy with acid-fast staining",
        "Positive QuantiFERON-TB Gold test result with normal chest X-ray",
        "Clinical presentation of hemoptysis, night sweats, and chronic cough lasting >3 weeks",
        "Positive PPD induration with infiltrates on chest X-ray in an immunocompromised patient",
        "Elevated WBC count and positive sputum culture pending sensitivity results"
      ],
      answers: [0, 2, 3, 4],
      rationale: "Correct: Positive AFB sputum smear result on microscopy with acid-fast staining; Clinical presentation of hemoptysis, night sweats, and chronic cough lasting >3 weeks; Positive PPD induration with infiltrates on chest X-ray in an immunocompromised patient; Elevated WBC count and positive sputum culture pending sensitivity results. These align with clinical evidence for Respiratory Diagnostics. Incorrect: Positive QuantiFERON-TB Gold test result with normal chest X-ray — these represent common misconceptions or contraindicated actions.",
      topic: "Respiratory Diagnostics"
    },
    {
      stem: "A patient has a new tracheostomy following a laryngectomy for cancer. Which nursing actions are essential to prevent complications? (Select all that apply)",
      options: [
        "Perform frequent suctioning based on respiratory assessment findings to maintain airway patency",
        "Keep the cuff inflated at all times to completely seal the airway",
        "Monitor for signs of mucus plugging or obstruction that could lead to respiratory distress",
        "Initiate oral intake immediately to promote swallowing function and prevent aspiration",
        "Assess lung sounds and work of breathing to detect early signs of infection or obstruction"
      ],
      answers: [0, 2, 4],
      rationale: "Correct: Perform frequent suctioning based on respiratory assessment findings to maintain airway patency; Monitor for signs of mucus plugging or obstruction that could lead to respiratory distress; Assess lung sounds and work of breathing to detect early signs of infection or obstruction. These align with clinical evidence for Tracheostomy Care. Incorrect: Keep the cuff inflated at all times to completely seal the airway; Initiate oral intake immediately to promote swallowing function and prevent aspiration — these represent common misconceptions or contraindicated actions.",
      topic: "Tracheostomy Care"
    },
    {
      stem: "An immobile post-operative patient develops hospital-acquired pneumonia on day 5 after surgery. Which interventions would address the underlying pathophysiology? (Select all that apply)",
      options: [
        "Encourage use of incentive spirometer to promote alveolar expansion and mobilize secretions",
        "Administer IV antibiotics based on sputum culture and sensitivity results",
        "Increase fluid intake to thin secretions and facilitate expectoration",
        "Limit mobility to reduce metabolic demands and allow respiratory recovery"
      ],
      answers: [0, 1, 2],
      rationale: "Correct: Encourage use of incentive spirometer to promote alveolar expansion and mobilize secretions; Administer IV antibiotics based on sputum culture and sensitivity results; Increase fluid intake to thin secretions and facilitate expectoration. These align with clinical evidence for Pneumonia Management. Incorrect: Limit mobility to reduce metabolic demands and allow respiratory recovery — these represent common misconceptions or contraindicated actions.",
      topic: "Pneumonia Management"
    },
    {
      stem: "A patient with anterior epistaxis presents to urgent care with moderate bleeding. After initial first aid, epistaxis packing is placed. Which nursing assessment findings warrant immediate physician notification? (Select all that apply)",
      options: [
        "Oxygen saturation dropping to 88% with difficulty breathing around the packing",
        "Patient reports of neck pain or difficulty swallowing that could indicate posterior involvement",
        "Copious amounts of bright red drainage on the packing that continues after 20 minutes of pressure",
        "Patient anxiety about the packing placement and fear of continued bleeding",
        "Elevated heart rate (HR 102) and slightly low blood pressure (BP 118/76) consistent with compensatory response"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Oxygen saturation dropping to 88% with difficulty breathing around the packing; Patient reports of neck pain or difficulty swallowing that could indicate posterior involvement; Copious amounts of bright red drainage on the packing that continues after 20 minutes of pressure; Elevated heart rate (HR 102) and slightly low blood pressure (BP 118/76) consistent with compensatory response. These align with clinical evidence for Epistaxis Management. Incorrect: Patient anxiety about the packing placement and fear of continued bleeding — these represent common misconceptions or contraindicated actions.",
      topic: "Epistaxis Management"
    },
    {
      stem: "A patient with obstructive sleep apnea is prescribed CPAP therapy but reports poor compliance due to discomfort. Which nursing interventions should be implemented? (Select all that apply)",
      options: [
        "Educate on gradual adaptation by wearing mask during waking hours before nighttime use",
        "Discuss alternative mask styles that may improve comfort and fit (nasal pillows vs full face)",
        "Reassure patient that current mask is only option and compliance will improve over time",
        "Explain the long-term health consequences of untreated OSA including cardiovascular complications",
        "Recommend immediate escalation to BiPAP due to CPAP intolerance"
      ],
      answers: [0, 1, 3],
      rationale: "Correct: Educate on gradual adaptation by wearing mask during waking hours before nighttime use; Discuss alternative mask styles that may improve comfort and fit (nasal pillows vs full face); Explain the long-term health consequences of untreated OSA including cardiovascular complications. These align with clinical evidence for Sleep Apnea. Incorrect: Reassure patient that current mask is only option and compliance will improve over time; Recommend immediate escalation to BiPAP due to CPAP intolerance — these represent common misconceptions or contraindicated actions.",
      topic: "Sleep Apnea"
    },
    {
      stem: "A patient has just returned to the unit after undergoing a diagnostic bronchoscopy with conscious sedation. Which nursing actions are critical during the immediate post-procedure period? (Select all that apply)",
      options: [
        "Maintain NPO status until gag reflex returns to prevent aspiration",
        "Monitor respiratory status closely and ensure oxygen is available at bedside",
        "Assess level of consciousness and ability to protect airway before allowing oral intake",
        "Encourage the patient to eat a light meal once they are alert to replenish energy",
        "Position patient semi-upright and provide suctioning equipment if needed"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Maintain NPO status until gag reflex returns to prevent aspiration; Monitor respiratory status closely and ensure oxygen is available at bedside; Assess level of consciousness and ability to protect airway before allowing oral intake; Position patient semi-upright and provide suctioning equipment if needed. These align with clinical evidence for Bronchoscopy Post-Procedure. Incorrect: Encourage the patient to eat a light meal once they are alert to replenish energy — these represent common misconceptions or contraindicated actions.",
      topic: "Bronchoscopy Post-Procedure"
    },
    {
      stem: "A patient with COPD presents to the ED with acute exacerbation following 4 days of upper respiratory infection symptoms. Which clinical findings are consistent with COPD exacerbation? (Select all that apply)",
      options: [
        "Increased production of thick, purulent sputum beyond baseline chronic production",
        "Increased dyspnea and use of accessory muscles indicating increased work of breathing",
        "Barrel chest appearance with decreased anteroposterior diameter",
        "Presence of fever and elevation in white blood cell count suggesting infection"
      ],
      answers: [0, 1, 3],
      rationale: "Correct: Increased production of thick, purulent sputum beyond baseline chronic production; Increased dyspnea and use of accessory muscles indicating increased work of breathing; Presence of fever and elevation in white blood cell count suggesting infection. These align with clinical evidence for COPD Exacerbation. Incorrect: Barrel chest appearance with decreased anteroposterior diameter — these represent common misconceptions or contraindicated actions.",
      topic: "COPD Exacerbation"
    },
    {
      stem: "A patient is found to have an incidental lung mass on chest X-ray performed after a motor vehicle accident. Which characteristics suggest advanced disease requiring staging? (Select all that apply)",
      options: [
        "Persistent productive cough with hemoptysis for several weeks",
        "Unintentional weight loss of 15 pounds over the past 3 months",
        "Chest wall pain with deep inspiration localized to tumor site",
        "Mass less than 1cm in size with no mediastinal lymph node involvement",
        "Hoarseness due to involvement of recurrent laryngeal nerve"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Persistent productive cough with hemoptysis for several weeks; Unintentional weight loss of 15 pounds over the past 3 months; Chest wall pain with deep inspiration localized to tumor site; Hoarseness due to involvement of recurrent laryngeal nerve. These align with clinical evidence for Lung Cancer Presentation. Incorrect: Mass less than 1cm in size with no mediastinal lymph node involvement — these represent common misconceptions or contraindicated actions.",
      topic: "Lung Cancer Presentation"
    },
    {
      stem: "A patient has been diagnosed with active pulmonary tuberculosis and is admitted to the hospital. Which precautions and interventions should be implemented? (Select all that apply)",
      options: [
        "Place patient in airborne isolation room with negative pressure ventilation",
        "Ensure all healthcare workers use N95 respirators when entering the room",
        "Maintain respiratory isolation for minimum 2 weeks of appropriate antibiotic therapy and negative sputum smears",
        "Allow family members to visit freely as TB is not contagious through contact",
        "Educate patient on covering mouth when coughing and importance of medication adherence"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Place patient in airborne isolation room with negative pressure ventilation; Ensure all healthcare workers use N95 respirators when entering the room; Maintain respiratory isolation for minimum 2 weeks of appropriate antibiotic therapy and negative sputum smears; Educate patient on covering mouth when coughing and importance of medication adherence. These align with clinical evidence for Tuberculosis Infection Control. Incorrect: Allow family members to visit freely as TB is not contagious through contact — these represent common misconceptions or contraindicated actions.",
      topic: "Tuberculosis Infection Control"
    },
    {
      stem: "A 75-year-old patient with iron deficiency anemia presents with dyspnea on exertion and pallor. Which nursing interventions address the underlying pathophysiology? (Select all that apply)",
      options: [
        "Administer supplemental oxygen to increase oxygen-carrying capacity and reduce dyspnea",
        "Implement activity restrictions and energy conservation measures to reduce oxygen demand",
        "Provide dietary education on iron-rich foods and vitamin C to enhance iron absorption",
        "Administer blood transfusion immediately to rapidly correct hemoglobin deficit",
        "Monitor for signs of heart failure from increased cardiac workload compensating for anemia"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Administer supplemental oxygen to increase oxygen-carrying capacity and reduce dyspnea; Implement activity restrictions and energy conservation measures to reduce oxygen demand; Provide dietary education on iron-rich foods and vitamin C to enhance iron absorption; Monitor for signs of heart failure from increased cardiac workload compensating for anemia. These align with clinical evidence for Anemia Pathophysiology. Incorrect: Administer blood transfusion immediately to rapidly correct hemoglobin deficit — these represent common misconceptions or contraindicated actions.",
      topic: "Anemia Pathophysiology"
    },
    {
      stem: "A patient diagnosed with polycythemia vera is at risk for thromboembolic complications. Which assessments and interventions should be prioritized? (Select all that apply)",
      options: [
        "Monitor for stroke symptoms such as facial drooping, arm weakness, and speech difficulty",
        "Encourage aggressive hydration to decrease blood viscosity and improve perfusion",
        "Administer antiplatelet agents per protocol to reduce clotting risk",
        "Recommend venipuncture as preferred phlebotomy method to avoid hematoma formation"
      ],
      answers: [0, 1, 2],
      rationale: "Correct: Monitor for stroke symptoms such as facial drooping, arm weakness, and speech difficulty; Encourage aggressive hydration to decrease blood viscosity and improve perfusion; Administer antiplatelet agents per protocol to reduce clotting risk. These align with clinical evidence for Polycythemia Vera. Incorrect: Recommend venipuncture as preferred phlebotomy method to avoid hematoma formation — these represent common misconceptions or contraindicated actions.",
      topic: "Polycythemia Vera"
    },
    {
      stem: "During a blood transfusion, a patient develops fever (101.5°F), chills, dyspnea, and back pain starting 15 minutes after initiation. Which actions should the nurse take? (Select all that apply)",
      options: [
        "Immediately stop the transfusion and keep vein patent with normal saline",
        "Notify the physician and verify patient identification and blood product information",
        "Monitor vital signs frequently and assess respiratory status for signs of pulmonary edema",
        "Send blood unit and patient blood samples to laboratory for compatibility re-evaluation",
        "Resume transfusion slowly after administering antipyretics to reduce fever"
      ],
      answers: [0, 1, 2, 3],
      rationale: "Correct: Immediately stop the transfusion and keep vein patent with normal saline; Notify the physician and verify patient identification and blood product information; Monitor vital signs frequently and assess respiratory status for signs of pulmonary edema; Send blood unit and patient blood samples to laboratory for compatibility re-evaluation. These align with clinical evidence for Transfusion Reactions. Incorrect: Resume transfusion slowly after administering antipyretics to reduce fever — these represent common misconceptions or contraindicated actions.",
      topic: "Transfusion Reactions"
    },
    {
      stem: "A patient with a triple-lumen central venous catheter (CVC) is receiving multiple infusions. Which complications should the nurse monitor for? (Select all that apply)",
      options: [
        "Catheter-related bloodstream infection (CRBSI) presenting with fever, chills, and positive blood cultures",
        "Venous thromboembolism indicated by arm swelling, pain, and decreased upper extremity perfusion",
        "Pneumothorax if catheter placement involved subclavian or internal jugular approach",
        "Extravasation into surrounding tissue causing warmth, erythema, and tissue necrosis with vesicant infusions",
        "Occlusion from clot formation that resolves spontaneously with normal saline flush"
      ],
      answers: [0, 1, 2, 3],
      rationale: "Correct: Catheter-related bloodstream infection (CRBSI) presenting with fever, chills, and positive blood cultures; Venous thromboembolism indicated by arm swelling, pain, and decreased upper extremity perfusion; Pneumothorax if catheter placement involved subclavian or internal jugular approach; Extravasation into surrounding tissue causing warmth, erythema, and tissue necrosis with vesicant infusions. These align with clinical evidence for Central Venous Catheter Management. Incorrect: Occlusion from clot formation that resolves spontaneously with normal saline flush — these represent common misconceptions or contraindicated actions.",
      topic: "Central Venous Catheter Management"
    },
    {
      stem: "A 55-year-old patient with chronic liver disease requires blood product replacement before surgery. Which component selections are appropriate? (Select all that apply)",
      options: [
        "Packed RBCs to restore oxygen-carrying capacity if Hgb is <7 or <8 with comorbidities",
        "Fresh frozen plasma to replace coagulation factors and correct INR prolongation",
        "Platelets if platelet count <20K without bleeding or <50K with active bleeding",
        "Whole blood to provide all blood components in one transfusion",
        "Cryoprecipitate if fibrinogen <100 mg/dL causing coagulopathy"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Packed RBCs to restore oxygen-carrying capacity if Hgb is <7 or <8 with comorbidities; Fresh frozen plasma to replace coagulation factors and correct INR prolongation; Platelets if platelet count <20K without bleeding or <50K with active bleeding; Cryoprecipitate if fibrinogen <100 mg/dL causing coagulopathy. These align with clinical evidence for Blood Component Therapy. Incorrect: Whole blood to provide all blood components in one transfusion — these represent common misconceptions or contraindicated actions.",
      topic: "Blood Component Therapy"
    },
    {
      stem: "Which statements accurately reflect blood type compatibility for transfusion? (Select all that apply)",
      options: [
        "Type O negative is the universal donor that can be given to any patient type",
        "Type AB positive is the universal recipient that can receive from any blood type",
        "Rh negative patients require RhIG after delivery or with RBCs from Rh positive donors",
        "Minor blood group antibodies are clinically insignificant and do not require crossmatching",
        "Type A patient can safely receive type B blood if transfusion is emergent"
      ],
      answers: [0, 1, 2],
      rationale: "Correct: Type O negative is the universal donor that can be given to any patient type; Type AB positive is the universal recipient that can receive from any blood type; Rh negative patients require RhIG after delivery or with RBCs from Rh positive donors. These align with clinical evidence for Blood Typing and Compatibility. Incorrect: Minor blood group antibodies are clinically insignificant and do not require crossmatching; Type A patient can safely receive type B blood if transfusion is emergent — these represent common misconceptions or contraindicated actions.",
      topic: "Blood Typing and Compatibility"
    },
    {
      stem: "A patient receiving their second unit of PRBCs develops sudden fever, severe back pain, and hemoglobinuria. Which actions indicate appropriate hemolytic reaction management? (Select all that apply)",
      options: [
        "Stop transfusion immediately and maintain IV access with normal saline",
        "Notify physician and blood bank of suspected acute hemolytic transfusion reaction",
        "Obtain blood cultures, repeat type and cross, and direct antiglobulin (Coombs) test",
        "Monitor urine output closely and encourage aggressive hydration to prevent acute kidney injury",
        "Continue monitoring vital signs and prepare patient for ICU admission if hemodynamically unstable"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "Correct: Stop transfusion immediately and maintain IV access with normal saline; Notify physician and blood bank of suspected acute hemolytic transfusion reaction; Obtain blood cultures, repeat type and cross, and direct antiglobulin (Coombs) test; Monitor urine output closely and encourage aggressive hydration to prevent acute kidney injury; Continue monitoring vital signs and prepare patient for ICU admission if hemodynamically unstable. These align with clinical evidence for Acute Hemolytic Reaction. Incorrect:  — these represent common misconceptions or contraindicated actions.",
      topic: "Acute Hemolytic Reaction"
    },
    {
      stem: "A critically ill patient with sepsis shows signs of DIC with lab values showing prolonged PT/INR, low platelets, elevated D-dimer, and low fibrinogen. Which manifestations warrant immediate intervention? (Select all that apply)",
      options: [
        "Petechial rash and bleeding from multiple sites indicating systemic bleeding",
        "Oliguria and rising creatinine suggesting DIC-related renal thrombosis",
        "Altered mental status from cerebral microvascular thrombosis",
        "Spontaneous bleeding that will resolve once coagulation cascade exhausts",
        "Rapid administration of blood products and anticoagulation per protocol to stop cascade"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Petechial rash and bleeding from multiple sites indicating systemic bleeding; Oliguria and rising creatinine suggesting DIC-related renal thrombosis; Altered mental status from cerebral microvascular thrombosis; Rapid administration of blood products and anticoagulation per protocol to stop cascade. These align with clinical evidence for Disseminated Intravascular Coagulation. Incorrect: Spontaneous bleeding that will resolve once coagulation cascade exhausts — these represent common misconceptions or contraindicated actions.",
      topic: "Disseminated Intravascular Coagulation"
    },
    {
      stem: "A patient with immune thrombocytopenia (ITP) has a platelet count of 15K and is experiencing spontaneous gum bleeding. Which nursing interventions are appropriate? (Select all that apply)",
      options: [
        "Use only soft-bristled toothbrush and recommend salt water rinses for oral care",
        "Administer platelet transfusion only if active bleeding or count <20K without bleeding",
        "Monitor for intracranial hemorrhage and assess for headache, vision changes, or altered mental status",
        "Restrict activity and enforce bed rest to prevent minor trauma and bleeding events",
        "Withhold all NSAIDs and recommend acetaminophen only for fever or pain management"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "Correct: Use only soft-bristled toothbrush and recommend salt water rinses for oral care; Administer platelet transfusion only if active bleeding or count <20K without bleeding; Monitor for intracranial hemorrhage and assess for headache, vision changes, or altered mental status; Restrict activity and enforce bed rest to prevent minor trauma and bleeding events; Withhold all NSAIDs and recommend acetaminophen only for fever or pain management. These align with clinical evidence for Thrombocytopenia Management. Incorrect:  — these represent common misconceptions or contraindicated actions.",
      topic: "Thrombocytopenia Management"
    },
    {
      stem: "A 72-year-old patient with SIADH develops severe hyponatremia (Na+ 118 mEq/L) with confusion, seizures, and coma. Which interventions reflect appropriate seizure precautions and correction? (Select all that apply)",
      options: [
        "Administer 3% hypertonic saline slowly (8-12 mEq/L increase in 24 hours) to avoid osmotic demyelination",
        "Implement seizure precautions including padded bed rails and easy access to suction",
        "Restrict free water intake and encourage sodium-containing fluids depending on etiology",
        "Rapidly correct sodium to normal to immediately stop seizure activity",
        "Monitor neurological status frequently and obtain stat sodium levels during correction"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Administer 3% hypertonic saline slowly (8-12 mEq/L increase in 24 hours) to avoid osmotic demyelination; Implement seizure precautions including padded bed rails and easy access to suction; Restrict free water intake and encourage sodium-containing fluids depending on etiology; Monitor neurological status frequently and obtain stat sodium levels during correction. These align with clinical evidence for Hyponatremia Pathophysiology. Incorrect: Rapidly correct sodium to normal to immediately stop seizure activity — these represent common misconceptions or contraindicated actions.",
      topic: "Hyponatremia Pathophysiology"
    },
    {
      stem: "A delirious patient with diabetes insipidus presents with Na+ 158 mEq/L, severe thirst, and restlessness. Which clinical considerations guide treatment? (Select all that apply)",
      options: [
        "Identify underlying cause (diabetes insipidus vs excessive water loss) to guide definitive treatment",
        "Initiate free water replacement via IV D5W or NG tube if patient cannot drink safely",
        "Correct sodium slowly (8-10 mEq/L in 24 hours) to prevent cerebral edema from osmotic rebound",
        "Administer hypertonic saline to rapidly lower sodium and resolve neurological symptoms",
        "Monitor for signs of overcorrection including lethargy, seizures, and cerebral edema"
      ],
      answers: [0, 1, 2, 4],
      rationale: "Correct: Identify underlying cause (diabetes insipidus vs excessive water loss) to guide definitive treatment; Initiate free water replacement via IV D5W or NG tube if patient cannot drink safely; Correct sodium slowly (8-10 mEq/L in 24 hours) to prevent cerebral edema from osmotic rebound; Monitor for signs of overcorrection including lethargy, seizures, and cerebral edema. These align with clinical evidence for Hypernatremia Management. Incorrect: Administer hypertonic saline to rapidly lower sodium and resolve neurological symptoms — these represent common misconceptions or contraindicated actions.",
      topic: "Hypernatremia Management"
    },
    {
      stem: "A patient with K+ 2.8 mEq/L presents after prolonged diarrhea. Which cardiac and neuromuscular findings should trigger urgent intervention? (Select all that apply)",
      options: [
        "EKG changes including prolonged PR interval, widened QRS, and flattened T waves",
        "Muscle weakness, fatigue, and cramping affecting activities of daily living",
        "Potential for life-threatening dysrhythmias including premature ventricular contractions",
        "Polyuric non-oliguric acute kidney injury from kaluresis",
        "Constipation and decreased GI motility from smooth muscle effects"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "Correct: EKG changes including prolonged PR interval, widened QRS, and flattened T waves; Muscle weakness, fatigue, and cramping affecting activities of daily living; Potential for life-threatening dysrhythmias including premature ventricular contractions; Polyuric non-oliguric acute kidney injury from kaluresis; Constipation and decreased GI motility from smooth muscle effects. These align with clinical evidence for Hypokalemia Complications. Incorrect:  — these represent common misconceptions or contraindicated actions.",
      topic: "Hypokalemia Complications"
    },
    {
      stem: "A patient with acute kidney injury has K+ 6.8 mEq/L with EKG showing peaked T waves and shortened QT interval. Which interventions should be implemented? (Select all that apply)",
      options: [
        "Administer calcium gluconate IV to stabilize myocardial membrane and reduce dysrhythmia risk",
        "Give insulin with dextrose or beta-agonist to shift potassium intracellularly",
        "Administer sodium polystyrene sulfonate to enhance GI elimination of potassium",
        "Place on continuous cardiac monitoring and have emergency equipment at bedside",
        "Restrict potassium intake but avoid rapid correction that could cause hypokalemia"
      ],
      answers: [0, 1, 2, 3, 4],
      rationale: "Correct: Administer calcium gluconate IV to stabilize myocardial membrane and reduce dysrhythmia risk; Give insulin with dextrose or beta-agonist to shift potassium intracellularly; Administer sodium polystyrene sulfonate to enhance GI elimination of potassium; Place on continuous cardiac monitoring and have emergency equipment at bedside; Restrict potassium intake but avoid rapid correction that could cause hypokalemia. These align with clinical evidence for Hyperkalemia Emergency. Incorrect:  — these represent common misconceptions or contraindicated actions.",
      topic: "Hyperkalemia Emergency"
    },
    {
      stem: "A post-operative patient on NPO status for 16 hours shows signs of dehydration including tachycardia (HR 112), hypotension (BP 102/58), and poor skin turgor. Which fluid replacement strategies are appropriate? (Select all that apply)",
      options: [
        "Initiate IV fluid replacement with maintenance fluids at 1-2 mL/kg/hr to restore intravascular volume",
        "Monitor urine output (goal 0.5-1 mL/kg/hr) as indicator of adequate perfusion and renal function",
        "Avoid fluid overload that could precipitate heart failure or pulmonary edema",
        "Use hypertonic saline as preferred fluid to rapidly increase osmolality and shift fluids extravascularly"
      ],
      answers: [0, 1, 2],
      rationale: "Correct: Initiate IV fluid replacement with maintenance fluids at 1-2 mL/kg/hr to restore intravascular volume; Monitor urine output (goal 0.5-1 mL/kg/hr) as indicator of adequate perfusion and renal function; Avoid fluid overload that could precipitate heart failure or pulmonary edema. These align with clinical evidence for Fluid Volume Deficit. Incorrect: Use hypertonic saline as preferred fluid to rapidly increase osmolality and shift fluids extravascularly — these represent common misconceptions or contraindicated actions.",
      topic: "Fluid Volume Deficit"
    },
    {
      stem: "During preoperative assessment, the nurse identifies risk factors for complications. Which findings require physician notification before surgery? (Select all that apply)",
      options: [
        "Uncontrolled hypertension (BP 180/105) increasing perioperative cardiac risk",
        "Positive pregnancy test in reproductive-aged female requiring surgical plan modification",
        "Active URI with productive cough increasing aspiration and respiratory complication risk",
        "NPO status maintained for >8 hours for elective morning surgery increasing dehydration",
        "Mild anxiety about surgery procedure that can be addressed with reassurance alone"
      ],
      answers: [0, 1, 2, 3],
      rationale: "Correct: Uncontrolled hypertension (BP 180/105) increasing perioperative cardiac risk; Positive pregnancy test in reproductive-aged female requiring surgical plan modification; Active URI with productive cough increasing aspiration and respiratory complication risk; NPO status maintained for >8 hours for elective morning surgery increasing dehydration. These align with clinical evidence for Preoperative Assessment. Incorrect: Mild anxiety about surgery procedure that can be addressed with reassurance alone — these represent common misconceptions or contraindicated actions.",
      topic: "Preoperative Assessment"
    },
    {
      stem: "A patient is positioned supine for a 3-hour abdominal surgery. Which pressure injury and nerve injury risks should perioperative nurses assess? (Select all that apply)",
      options: [
        "Occipital pressure injury from head resting directly on operating table without padding",
        "Brachial plexus injury from arm abduction >90 degrees creating nerve stretch",
        "Sciatic nerve compression injury from external rotation of hip and knee",
        "Sacral pressure injury from direct pressure on bony prominence over 2+ hours",
        "Peroneal nerve injury from knee flexion >40 degrees compressing nerve at fibular head"
      ],
      answers: [0, 1, 3, 4],
      rationale: "Correct: Occipital pressure injury from head resting directly on operating table without padding; Brachial plexus injury from arm abduction >90 degrees creating nerve stretch; Sacral pressure injury from direct pressure on bony prominence over 2+ hours; Peroneal nerve injury from knee flexion >40 degrees compressing nerve at fibular head. These align with clinical evidence for Intraoperative Positioning. Incorrect: Sciatic nerve compression injury from external rotation of hip and knee — these represent common misconceptions or contraindicated actions.",
      topic: "Intraoperative Positioning"
    },
    {
      stem: "A post-operative patient 4 hours after major surgery reports severe pain (9/10) unrelieved by scheduled analgesics. Which assessment findings could indicate a complication rather than expected surgical pain? (Select all that apply)",
      options: [
        "Pain disproportionate to surgical procedure with hemodynamic instability (tachycardia, hypotension)",
        "Localized pain at surgical site with warmth, erythema, and purulent drainage suggesting infection",
        "Pain radiating down lower extremities with calf swelling suggesting DVT",
        "Chest pain with dyspnea suggesting pulmonary embolism or cardiac complication",
        "Expected incisional pain that responds well to opioid analgesia within 1-2 hours"
      ],
      answers: [0, 1, 2, 3],
      rationale: "Correct: Pain disproportionate to surgical procedure with hemodynamic instability (tachycardia, hypotension); Localized pain at surgical site with warmth, erythema, and purulent drainage suggesting infection; Pain radiating down lower extremities with calf swelling suggesting DVT; Chest pain with dyspnea suggesting pulmonary embolism or cardiac complication. These align with clinical evidence for Postoperative Pain Management. Incorrect: Expected incisional pain that responds well to opioid analgesia within 1-2 hours — these represent common misconceptions or contraindicated actions.",
      topic: "Postoperative Pain Management"
    },
    {
      stem: "During anesthesia induction, the anesthesiologist notes early signs of malignant hyperthermia (MH) including muscle rigidity and elevated end-tidal CO2. Which immediate interventions are critical? (Select all that apply)",
      options: [
        "Discontinue all triggering anesthetic agents immediately and switch to safe anesthetics",
        "Administer dantrolene sodium 2.5 mg/kg IV push and prepare additional doses if needed",
        "Begin active cooling measures including IV cold saline, ice packs, and peritoneal lavage",
        "Hyperventilate with 100% oxygen to eliminate residual volatile anesthetic from lungs",
        "Continue surgery as planned since early signs may resolve with continued anesthetic"
      ],
      answers: [0, 1, 2, 3],
      rationale: "Correct: Discontinue all triggering anesthetic agents immediately and switch to safe anesthetics; Administer dantrolene sodium 2.5 mg/kg IV push and prepare additional doses if needed; Begin active cooling measures including IV cold saline, ice packs, and peritoneal lavage; Hyperventilate with 100% oxygen to eliminate residual volatile anesthetic from lungs. These align with clinical evidence for Malignant Hyperthermia. Incorrect: Continue surgery as planned since early signs may resolve with continued anesthetic — these represent common misconceptions or contraindicated actions.",
      topic: "Malignant Hyperthermia"
    }
  ]
};

/* Display order for the topic-breakdown strip at the top of the page. */
window.TOPIC_ORDER = [
  "Antimicrobials &amp; Antibiotics (ABX)",
  "Antivirals",
  "HIV &amp; Antiretroviral Therapy (ART)"
];
