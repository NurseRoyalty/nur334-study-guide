/* ============================================================
   QUIZ BANK - BUILD YOUR OWN EXAM
   NCLEX NGN Clinical Judgment Style Questions
   Week 2 & 3 High-Yield Content

   Structure: Topic-based with three sets:
   - mustKnow: Essential questions (likely exam topics)
   - extraPractice: Additional reinforcement
   - eaq: Extended application questions (complex scenarios)
   ============================================================ */

window.QUIZ_BANK = [
  /* ========== WEEK 2: HEMATOLOGY TOPICS ========== */
  {
    id: "hematology-labs-interpretation",
    label: "Hematology Labs: Clinical Interpretation",
    sets: {
      mustKnow: [
        {
          stem: "A 62-year-old male presents with fatigue and dyspnea. Labs: Hgb 7.2, WBC 3.1, Plt 95K. MCV 68, MCHC 26. Reticulocyte count 0.3%. Which finding most concerning?",
          options: [
            "Microcytic indices suggesting iron deficiency anemia",
            "Pancytopenia with low reticulocyte count suggests bone marrow failure",
            "Thrombocytopenia from bleeding",
            "Leukopenia from infection"
          ],
          answer: 1,
          rationale: "All three cell lines are low with a blunted reticulocyte response — this pattern indicates marrow disease (aplastic anemia, leukemia, or severe B12 deficiency) rather than uncomplicated iron deficiency. The microcytic indices are a red herring; the pancytopenia is what signals marrow failure.",
          topic: "Hematology Labs",
          source: "week2"
        },
        {
          stem: "A patient on chronic warfarin presents with an INR of 9.2 and mild gum bleeding. PT 78 seconds. Which lab would best guide the need for reversal therapy?",
          options: [
            "INR >4 alone indicates reversal is needed",
            "PT <60 seconds is safe, no reversal needed",
            "Fibrinogen level and clinical bleeding assessment, not INR alone",
            "Repeat INR in 4 hours to see if it trends down"
          ],
          answer: 2,
          rationale: "INR >4 is elevated, but clinical significance depends on bleeding symptoms and fibrinogen — an asymptomatic patient with normal fibrinogen and isolated gum bleeding may need observation only, while active hemorrhage requires immediate reversal regardless of INR value.",
          topic: "Hematology Labs",
          source: "week2"
        },
        {
          stem: "A 45-year-old with hemolytic anemia has elevated retic count (8%), LDH 950, haptoglobin <10, indirect bili 3.2. DAT (Coombs) is negative. What diagnosis is most likely?",
          options: [
            "Autoimmune hemolytic anemia",
            "Microangiopathic hemolytic anemia (MAHA) — mechanical fragmentation, not immune hemolysis",
            "Transfusion reaction",
            "Sepsis-induced hemolysis"
          ],
          answer: 1,
          rationale: "Negative DAT rules out immune hemolysis (autoimmune, alloimmunization). The hemolysis is real (elevated LDH, low haptoglobin, high retic response), so MAHA from mechanical shearing (TTP, HUS, DIC, prosthetic valve) is most likely.",
          topic: "Hematology Labs",
          source: "week2"
        }
      ],
      extraPractice: [
        {
          stem: "During a massive transfusion protocol, a trauma patient receives 6 units PRBC in 20 minutes. INR rises from 1.2 to 2.1, aPTT 52. Plt 78K. What is the primary cause?",
          options: [
            "DIC from tissue injury",
            "Dilutional coagulopathy from massive crystalloid/colloid and PRBC transfusion without component replacement",
            "Warfarin contamination of blood products",
            "Platelet antibodies from previous transfusions"
          ],
          answer: 1,
          rationale: "Rapid massive transfusion dilutes clotting factors and platelets; PRBC contains minimal plasma factors. Without concurrent FFP and platelets, coagulopathy develops from dilution, not consumption.",
          topic: "Hematology Labs",
          source: "week2"
        }
      ],
      eaq: [
        {
          stem: "A trauma patient receives 15 units PRBCs rapidly. Next labs: K 6.2 (up from 4.2 pre-transfusion). The hyperkalemia is from which source?",
          options: [
            "Normal potassium in RBCs during transfusion",
            "Potassium leaking from stored RBC units during massive transfusion — also from tissue damage releasing intracellular K",
            "Patient was already hyperkalemic before transfusion",
            "Hyperkalemia only occurs with FFP transfusion"
          ],
          answer: 1,
          rationale: "Massive PRBC transfusion causes dual hyperkalemia: (1) K from lysed RBCs in stored blood, (2) K from trauma-induced cell death. This is acute hyperkalemia requiring immediate treatment.",
          topic: "Hematology Labs",
          source: "week2"
        }
      ]
    }
  },

  {
    id: "anemias-clinical-scenarios",
    label: "Anemias: Advanced Clinical",
    sets: {
      mustKnow: [
        {
          stem: "A 28-year-old woman with Crohn's disease has Hgb 8.4, MCV 102, folate 2.2 (low), B12 1100 (low-normal). Which statement best guides treatment?",
          options: [
            "Folate supplementation alone is sufficient",
            "B12 deficiency in Crohn's requires parenteral B12; folate supplementation alone risks masking neurologic symptoms",
            "Vitamin B12 injections are only for pernicious anemia",
            "Oral B12 supplements will work in terminal ileum disease"
          ],
          answer: 1,
          rationale: "Terminal ileum Crohn's disease causes B12 malabsorption requiring IM injection (not oral). Both are low, but correcting folate without B12 can mask B12's neurologic damage — B12 must be repleted first or simultaneously.",
          topic: "Anemias",
          source: "week2"
        },
        {
          stem: "A 38-year-old woman on heavy menstrual bleeding with iron deficiency anemia (Hgb 6.8, MCV 62, ferritin 5) asks when her anemia will improve after starting iron supplementation. What should you explain?",
          options: [
            "Symptoms improve in 3-5 days as Hgb rises quickly",
            "Iron replacement takes 3-6 months for full repletion of stores; reticulocyte response begins in 3-7 days; clinical improvement in 2-3 weeks",
            "Iron will work immediately if taken with orange juice",
            "Transfusion is needed because oral iron is ineffective"
          ],
          answer: 1,
          rationale: "Iron replacement is slow: bone marrow responds within 3-7 days (↑ retic count), but Hgb only rises 0.2-0.3 g/dL per day. Full repletion of iron stores takes 3-6 months. Patient counseling prevents premature discontinuation.",
          topic: "Anemias",
          source: "week2"
        }
      ],
      extraPractice: [
        {
          stem: "A patient with pernicious anemia (PA) has been on monthly B12 injections for 3 years but develops new paresthesias and ataxia. Labs show normal B12 level. What explains this?",
          options: [
            "Pernicious anemia is cured and B12 injections should be stopped",
            "Neurologic damage from PREVIOUS B12 deficiency is irreversible — ongoing B12 prevents further decline but cannot reverse past damage",
            "Patient has new spinal cord compression",
            "B12 injections cause neurologic symptoms"
          ],
          answer: 1,
          rationale: "B12 deficiency causes demyelination of spinal cord and peripheral nerves. Once neurologic damage occurs, it's irreversible even after B12 repletion begins. Early diagnosis and treatment prevent this outcome.",
          topic: "Anemias",
          source: "week2"
        }
      ],
      eaq: [
        {
          stem: "A patient with hereditary spherocytosis (HS) presents with severe anemia (Hgb 5.2), reticulocyte count 22%, LDH 1200, and signs of hemolytic crisis. What is the FIRST priority intervention?",
          options: [
            "Splenectomy immediately",
            "Transfusion + supportive care with close monitoring; splenectomy is elective after crisis resolves",
            "Folic acid supplementation",
            "Hydroxyurea therapy"
          ],
          answer: 1,
          rationale: "Hemolytic crisis in HS requires urgent transfusion and ICU support. Splenectomy is definitive but is elective surgery (best done 4+ weeks after crisis). Immediate priority is stabilizing hemoglobin and supporting vital organs.",
          topic: "Anemias",
          source: "week2"
        }
      ]
    }
  },

  {
    id: "polycythemia-complications",
    label: "Polycythemia: Vascular & Thrombotic",
    sets: {
      mustKnow: [
        {
          stem: "A 58-year-old with polycythemia vera presents with transient monocular vision loss (amaurosis fugax) lasting 2 minutes. Hgb 19.2, Hct 58%. Blood pressure 168/92. What is this symptom and why is it dangerous?",
          options: [
            "Migraine aura, no treatment needed",
            "Transient ischemic attack (TIA) from thrombosis — polycythemia increases blood viscosity and clotting risk; this is a warning sign for stroke",
            "Retinal migraine from low oxygen",
            "Normal transient visual symptoms in polycythemia"
          ],
          answer: 1,
          rationale: "Amaurosis fugax is a TIA-equivalent in the ophthalmic artery territory. PV-related thrombotic events are common. Phlebotomy to target Hct <45% and antiplatelet therapy (aspirin) are needed to prevent stroke.",
          topic: "Polycythemia",
          source: "week2"
        },
        {
          stem: "A patient with polycythemia vera develops pruritus (itching) that is WORSE after bathing in warm water. Why does warm water trigger this symptom?",
          options: [
            "Allergic reaction to soap",
            "Histamine release from mast cells triggered by heat; PV cells produce excessive histamine",
            "Dry skin from bathing",
            "Psychological symptom unrelated to polycythemia"
          ],
          answer: 1,
          rationale: "PV results in mast cell proliferation and excessive histamine production. Warm water triggers histamine release, causing intense pruritus. This is a pathognomonic symptom of PV and helps distinguish it from secondary polycythemia.",
          topic: "Polycythemia",
          source: "week2"
        }
      ],
      extraPractice: [
        {
          stem: "A 72-year-old with secondary polycythemia (from chronic hypoxia/COPD, Hct 58%) is scheduled for surgery. Phlebotomy is considered pre-op to reduce Hct. What is the caution?",
          options: [
            "Phlebotomy always improves surgical outcomes",
            "Phlebotomy in secondary polycythemia risks worsening hypoxia by reducing oxygen-carrying capacity; patient depends on high Hct for oxygenation",
            "Phlebotomy is contraindicated in any polycythemia",
            "Phlebotomy should be done the morning of surgery"
          ],
          answer: 1,
          rationale: "In SECONDARY polycythemia, the high Hct is a COMPENSATION for hypoxia. Phlebotomy removes this compensatory mechanism, potentially worsening tissue oxygenation. In PRIMARY polycythemia (PV, PET), phlebotomy is beneficial.",
          topic: "Polycythemia",
          source: "week2"
        }
      ],
      eaq: [
        {
          stem: "A 64-year-old with COPD (baseline SpO2 88%) is in PACU post-extubation and develops sudden respiratory distress, confusion, and tachycardia. SpO2 drops to 80%. The anesthesia monitor shows ETCO2 spike to 68. What is the most concerning diagnosis and immediate action?",
          options: [
            "Simple anxiety; give benzodiazepine",
            "Malignant hyperthermia — ETCO2 elevation indicates hypermetabolism; STOP triggering agents, hyperventilate 100% O2, prepare dantrolene",
            "Normal COPD exacerbation",
            "Anesthesia wearing off"
          ],
          answer: 1,
          rationale: "ETCO2 spike to 68 in PACU indicates metabolic crisis — most likely MH recrudescence or delayed recognition. MH is life-threatening and requires immediate dantrolene. COPD baseline SpO2 88% makes hypoxemia even more dangerous.",
          topic: "Polycythemia",
          source: "week2"
        }
      ]
    }
  },

  {
    id: "transfusion-reactions-management",
    label: "Transfusion Reactions: Recognition & Management",
    sets: {
      mustKnow: [
        {
          stem: "A patient receiving RBC transfusion develops sudden fever (38.5°C), back pain, and hemoglobinuria (dark urine). What transfusion reaction is this and what is the FIRST action?",
          options: [
            "Mild allergic reaction; continue transfusion",
            "Acute hemolytic transfusion reaction (AHTR) — STOP transfusion immediately, disconnect IV line, verify patient/blood identification",
            "Febrile nonhemolytic transfusion reaction; give antipyretics",
            "TRALI; administer steroids"
          ],
          answer: 1,
          rationale: "AHTR presents with fever, back pain, flank pain, hemoglobinuria, and hypotension. This is life-threatening. STOP the transfusion immediately, keep IV patent for emergency medications, send blood back to bank for testing.",
          topic: "Transfusion Reactions",
          source: "week2"
        },
        {
          stem: "A patient develops bilateral pulmonary edema, hypoxemia, and respiratory distress 30 minutes after blood transfusion. BNP is normal, CVP normal. Which complication is this?",
          options: [
            "TACO (transfusion-associated circulatory overload) from fluid",
            "TRALI (transfusion-related acute lung injury) — non-cardiogenic pulmonary edema from immune-mediated capillary leak",
            "Anaphylaxis",
            "Aspiration pneumonia"
          ],
          answer: 1,
          rationale: "TRALI presents with respiratory distress and pulmonary edema but normal BNP and CVP (non-cardiogenic). It's immune-mediated (HLA/HNA antibodies). TACO would show elevated CVP and BNP. Management: oxygen, supportive care.",
          topic: "Transfusion Reactions",
          source: "week2"
        }
      ],
      extraPractice: [
        {
          stem: "A multiply-transfused patient develops fever (38.8°C) 48 hours after transfusion with hemoglobinuria and indirect hyperbilirubinemia. Hemoglobin dropped 1.2 g/dL post-transfusion. This is most likely which reaction?",
          options: [
            "Acute hemolytic transfusion reaction",
            "Delayed hemolytic transfusion reaction (DHTR) from alloimmunization — fever + hemolysis 1-2 weeks post-transfusion; patient has formed RBC alloantibodies from prior transfusion",
            "Bacterial contamination of blood",
            "Transient response to transfusion, no reaction"
          ],
          answer: 1,
          rationale: "DHTR occurs days to weeks after transfusion as alloantibodies develop/boost. Hemolysis is usually mild (unlike AHTR). Management: supportive care, future transfusions with antigen-negative blood.",
          topic: "Transfusion Reactions",
          source: "week2"
        }
      ],
      eaq: [
        {
          stem: "A patient in septic shock receives massive transfusion (15 units PRBCs, 10 units FFP, 6 units platelets in 4 hours). Develops ARDS-level respiratory distress, coagulopathy (PT >25, aPTT>100). What multifactorial complication has developed?",
          options: [
            "Simple TRALI",
            "Combination of transfusion reactions (TRALI, TACO possible), dilutional coagulopathy, and sepsis-induced DIC — mortality extremely high",
            "Bacterial contamination only",
            "Anaphylaxis"
          ],
          answer: 1,
          rationale: "Massive transfusion in septic shock causes a 'perfect storm': TRALI + dilutional coagulopathy + DIC + ongoing infection. Mortality is 40-60% even with ICU support. Hemostatic resuscitation protocols (FFP:PRBC ratios) help but don't eliminate risk.",
          topic: "Transfusion Reactions",
          source: "week2"
        }
      ]
    }
  },

  /* ========== WEEK 3: ELECTROLYTES TOPICS ========== */
  {
    id: "sodium-imbalances",
    label: "Sodium Imbalances: Hyponatremia & Hypernatremia",
    sets: {
      mustKnow: [
        {
          stem: "A 68-year-old post-op patient develops confusion and headache on POD2. Labs: Na 118, K 3.8, osmolarity 245. Why is slow correction essential here?",
          options: [
            "Any treatment can wait several days",
            "Rapid Na correction causes osmotic demyelination syndrome (ODS) from brain cell shrinkage — correct slowly 8-12 mEq/L in 24h",
            "Rapid correction is the only effective treatment",
            "Headache is unrelated to electrolytes"
          ],
          answer: 1,
          rationale: "Symptomatic hyponatremia requires correction but slowly. Rapid correction causes osmotic shrinkage of brain cells, leading to demyelination (ODS). The brain has adapted to chronic low Na by reducing intracellular osmolytes.",
          topic: "Sodium Imbalances",
          source: "week3"
        },
        {
          stem: "A patient with severe hypernatremia (Na 162) is given D5W (hypotonic) IV. Why is this correction dangerous if done too fast?",
          options: [
            "D5W is not an appropriate fluid for hypernatremia",
            "Water rapidly entering brain cells from osmotic gradient causes cerebral edema and seizures; must correct slowly",
            "Hypernatremia cannot be corrected with fluids",
            "D5W has too much glucose"
          ],
          answer: 1,
          rationale: "Hypernatremia causes brain cell shrinkage. Rapid correction allows water influx, causing brain swelling. Correct at 8-10 mEq/L per 24h. Chronic hypernatremia triggers compensatory intracellular osmolyte accumulation.",
          topic: "Sodium Imbalances",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A hospitalized patient with SIADH has Na 115. He is asymptomatic. Serum osmolarity is 230. What is the SAFEST initial treatment?",
          options: [
            "Hypertonic saline immediately",
            "Fluid restriction (not hypertonic saline initially) if NO seizures — slow correction is safer",
            "Normal saline",
            "No treatment needed for asymptomatic patient"
          ],
          answer: 1,
          rationale: "Asymptomatic hyponatremia can be managed conservatively with fluid restriction. Hypertonic saline risks ODS if correction is too rapid.",
          topic: "Sodium Imbalances",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "A patient with SIADH refractory to fluid restriction (Na remains 108 despite 600mL/day restriction) receives vaptans. What complications must be monitored?",
          options: [
            "Vaptans have no risks",
            "Osmotic demyelination syndrome risk (too-rapid Na correction) — must increase Na slowly even with vaptans",
            "Hypernatremia will always develop",
            "Vaptans cause permanent kidney damage"
          ],
          answer: 1,
          rationale: "Vaptans work by free water excretion but can overcorrect if not monitored. ODS remains a risk even with pharmacotherapy. Monitor Na closely.",
          topic: "Sodium Imbalances",
          source: "week3"
        }
      ]
    }
  },

  {
    id: "potassium-imbalances",
    label: "Potassium Imbalances: Cardiac Effects",
    sets: {
      mustKnow: [
        {
          stem: "A dialysis patient with K 6.8 and peaked T-waves on EKG complains of chest tightness. Which intervention protects the heart FIRST before removing potassium?",
          options: [
            "Dialysis to remove potassium",
            "Calcium gluconate 10% IV — stabilizes cardiac membrane to prevent dysrhythmias",
            "Insulin/glucose immediately",
            "Sodium bicarbonate only"
          ],
          answer: 1,
          rationale: "Calcium is cardioprotective and given first for EKG changes. Insulin and albuterol drive K into cells but take time. Dialysis removes K but is not immediate. Calcium buys time and prevents fatal arrhythmias.",
          topic: "Potassium Imbalances",
          source: "week3"
        },
        {
          stem: "A patient with rhabdomyolysis develops hyperkalemia (K 7.2) despite aggressive IV hydration and loop diuretics. ABG shows pH 7.25 (acidosis). Why is acidosis worsening hyperkalemia management?",
          options: [
            "Acidosis is unrelated to potassium shifts",
            "Acidosis prevents K shift into cells (insulin/albuterol are less effective); must correct acidosis with sodium bicarbonate",
            "Acidosis only causes respiratory problems",
            "Acidosis helps lower potassium"
          ],
          answer: 1,
          rationale: "Acidosis causes H to move out of cells and K to move out (electrical neutrality). This opposes insulin/glucose/albuterol effects. Bicarbonate corrects acidosis and allows K-shifting therapies to work.",
          topic: "Potassium Imbalances",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A patient on digoxin develops hypokalemia (K 3.0) with premature ventricular contractions. Why is this patient at higher risk than others with same K level?",
          options: [
            "Digoxin toxicity is unrelated to potassium levels",
            "Digoxin toxicity increases with low K — hypokalemia increases myocardial sensitivity to digoxin, causing dangerous arrhythmias",
            "PVCs are not serious",
            "Digoxin protects against hypokalemia"
          ],
          answer: 1,
          rationale: "Digoxin sensitivity is enhanced by hypokalemia. A K of 3.0 in a digoxin patient is more dangerous than in non-digoxin patient because of increased toxicity risk.",
          topic: "Potassium Imbalances",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "A post-transplant patient on tacrolimus develops simultaneous hyponatremia (Na 120), hyperkalemia (K 6.5), and metabolic acidosis (pH 7.30). What is the likely underlying mechanism?",
          options: [
            "Three separate unrelated problems",
            "Type IV renal tubular acidosis (hypoaldosteronism) from tacrolimus nephrotoxicity — causes Na wasting, K retention, and acid retention simultaneously",
            "Sepsis",
            "Medication error"
          ],
          answer: 1,
          rationale: "Tacrolimus causes RTA Type IV by impairing aldosterone function. This causes the triad: Na wasting (hyponatremia), K retention (hyperkalemia), and acid retention (acidosis).",
          topic: "Potassium Imbalances",
          source: "week3"
        }
      ]
    }
  },

  {
    id: "calcium-imbalances-clinical",
    label: "Calcium Imbalances: Hypocalcemia & Hypercalcemia",
    sets: {
      mustKnow: [
        {
          stem: "A patient presents with tetany and positive Trousseau sign. Which lab abnormality is MOST likely?",
          options: [
            "Hyperkalemia",
            "Hypocalcemia (total Ca <8.5 or ionized Ca <4.5) — neuromuscular irritability from decreased nerve threshold",
            "Low magnesium only",
            "High sodium"
          ],
          answer: 1,
          rationale: "Trousseau sign (hand tetany after BP cuff inflation) is classic for hypocalcemia. These signs reflect increased neuronal excitability from low extracellular calcium.",
          topic: "Calcium Imbalances",
          source: "week3"
        },
        {
          stem: "A patient with hypercalcemia (12.1 mg/dL) and new AKI receives thiazide diuretic and loop diuretic together. Why is this dangerous?",
          options: [
            "All diuretics are safe in hypercalcemia",
            "Thiazides INCREASE calcium reabsorption — counteract treatment; only loop diuretics should be used",
            "Loop diuretics alone are ineffective",
            "Diuretics have no effect on calcium"
          ],
          answer: 1,
          rationale: "Thiazide diuretics increase proximal tubule calcium reabsorption. Using both is self-defeating and will fail to lower calcium. Only loop diuretics should be used.",
          topic: "Calcium Imbalances",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A patient with severe hypocalcemia (Ca 6.8) from pancreatitis is being treated with IV calcium. Why might aggressive calcium repletion lead to complications if phosphate is also high (PO4 6.2)?",
          options: [
            "Calcium supplementation is always safe",
            "High PO4 × low Ca = precipitation risk; giving Ca increases risk of soft-tissue calcification and AKI — must lower PO4 first",
            "Phosphate is unrelated to calcium",
            "Calcium should never be given with pancreatitis"
          ],
          answer: 1,
          rationale: "In pancreatitis, saponification (Ca × PO4 precipitation) traps calcium and soft tissue deposits. Must lower PO4 first before correcting Ca.",
          topic: "Calcium Imbalances",
          source: "week3"
        }
      ],
      eaq: []
    }
  },

  {
    id: "magnesium-phosphate-imbalances",
    label: "Magnesium & Phosphate: The Forgotten Electrolytes",
    sets: {
      mustKnow: [
        {
          stem: "A patient with Crohn's disease, diarrhea x 5 days develops weakness and cramping. Labs: K 2.8, Mg 1.4, Ca 7.2. Why might supplementing only potassium fail to resolve symptoms?",
          options: [
            "Potassium supplementation is always sufficient",
            "Hypomagnesemia prevents intracellular potassium and calcium uptake — all three must be repleted simultaneously",
            "Diarrhea doesn't affect minerals",
            "Only calcium needs to be repleted"
          ],
          answer: 1,
          rationale: "Mg is a cofactor for Na-K-ATPase; low Mg impairs K and Ca handling. Refractory hypokalemia or hypocalcemia always suggests hypomagnesemia. All three must be addressed together.",
          topic: "Magnesium & Phosphate",
          source: "week3"
        },
        {
          stem: "A patient develops torsades de pointes arrhythmia. EKG shows prolonged QT. Labs: Ca normal, K normal, Mg 1.3. What is the most likely cause and treatment?",
          options: [
            "Hyperkalemia causing arrhythmia",
            "Hypomagnesemia causes prolonged QT and torsades; magnesium sulfate 1-2g IV is immediately life-saving antiarrhythmic",
            "Long QT syndrome genetic",
            "No treatment needed"
          ],
          answer: 1,
          rationale: "Mg regulates cardiac repolarization. Even mild hypomagnesemia can cause torsades de pointes. This is often overlooked because K and Ca are normal. Mg must be checked and repleted urgently.",
          topic: "Magnesium & Phosphate",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A post-transplant patient on tacrolimus and diuretics develops hypomagnesemia (Mg 1.2) with refractory hypokalemia and hypocalcemia despite supplementation. What is the management priority?",
          options: [
            "Only supplement potassium",
            "Replete Mg FIRST (enables K/Ca handling); replete all three concurrently but Mg takes priority",
            "Never supplement magnesium",
            "Calcium alone will fix everything"
          ],
          answer: 1,
          rationale: "Mg is the gatekeeper. Without it, K and Ca repletion fail. Mg must be corrected first or concurrently.",
          topic: "Magnesium & Phosphate",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "A post-op patient on continuous renal replacement therapy (CRRT) develops hypokalemia (K 2.8) despite normal dietary K intake. What is the mechanism and how is it managed?",
          options: [
            "CRRT does not remove electrolytes",
            "CRRT removes electrolytes continuously; dialysate potassium concentration must be increased or supplementation added",
            "Patient should fast to stop hypokalemia",
            "Medications cause all the potassium loss"
          ],
          answer: 1,
          rationale: "CRRT is continuous and non-selective. Dialysate composition must be adjusted for electrolyte losses.",
          topic: "Magnesium & Phosphate",
          source: "week3"
        }
      ]
    }
  },

  /* ========== WEEK 3: PERIOPERATIVE NURSING ========== */
  {
    id: "preoperative-assessment-prep",
    label: "Preoperative Assessment & NPO Status",
    sets: {
      mustKnow: [
        {
          stem: "A patient scheduled for elective laparoscopic surgery presents with a full stomach (ate breakfast 2 hours pre-op). Surgery is scheduled for 1 hour. What is the best action?",
          options: [
            "Proceed with surgery, no delay",
            "Postpone surgery — NPO guidelines (8h for food, 2h for clear liquids) must be followed; aspiration risk during anesthesia outweighs surgical urgency in elective case",
            "Give the patient antacids and proceed",
            "Use regional anesthesia instead to avoid intubation"
          ],
          answer: 1,
          rationale: "Full stomach increases aspiration risk. Anesthesia suppresses airway reflexes. Elective surgery should be rescheduled.",
          topic: "Preoperative Care",
          source: "week3"
        },
        {
          stem: "During pre-op assessment, patient reports allergic reaction to propofol (pruritis, swelling 10 years ago). Anesthesia plans general anesthesia. What precaution is essential?",
          options: [
            "Propofol can be used if dose is reduced",
            "Use alternative anesthetics (etomidate, ketamine) — propofol allergy requires avoidance; have emergency medications available",
            "Propofol allergy is not serious",
            "Schedule surgery without anesthesia"
          ],
          answer: 1,
          rationale: "Propofol allergy (though rare) can range from mild pruritis to anaphylaxis. Document clearly and use alternative induction agents.",
          topic: "Preoperative Care",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A 42-year-old with history of arthritis and GERD is scheduled for exploratory laparotomy. Current medications: ibuprofen daily, omeprazole daily, atorvastatin, clopidogrel (for prior MI). Pre-op instruction said 'hold all meds.' Which med should NOT have been held?",
          options: [
            "Omeprazole",
            "Atorvastatin",
            "Clopidogrel (and other antiplatelet agents) — hold time depends on urgency; timing must be decided by surgeon/anesthesia",
            "All should be held"
          ],
          answer: 2,
          rationale: "Clopidogrel removal increases thrombotic risk. NSAIDs should be held (bleeding risk). Timing depends on surgical urgency.",
          topic: "Preoperative Care",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "A 71-year-old with history of MI (3 years ago), hypertension, and type 2 DM is admitted for emergent hernia repair. He took his atenolol, lisinopril, and metformin morning-of-surgery at 0600. Surgery at 0800. Labs: K 4.2, Cr 1.3 (baseline 1.0). BP 168/92, HR 62. What complication requires immediate management?",
          options: [
            "Hyperglycemia from missed insulin",
            "Contrast-induced acute kidney injury risk (Cr elevated) — hold metformin, ensure hydration; emergency surgery cannot wait for washout",
            "Hypertension only",
            "Beta-blocker toxicity from overdose"
          ],
          answer: 1,
          rationale: "Metformin + elevated baseline creatinine + emergency surgery = AKI/lactic acidosis risk if metformin is not held and patient isn't well-hydrated. Anesthesia must know metformin status.",
          topic: "Preoperative Care",
          source: "week3"
        }
      ]
    }
  },

  {
    id: "malignant-hyperthermia-recognition",
    label: "Malignant Hyperthermia: Early Recognition & STOP Protocol",
    sets: {
      mustKnow: [
        {
          stem: "During general anesthesia with isoflurane and succinylcholine, masseter muscles suddenly tighten (jaw clenching). Patient is otherwise stable. Is this malignant hyperthermia?",
          options: [
            "No, this is normal muscle relaxation",
            "Possible early sign of MH (trismus = masseter rigidity) — STOP succinylcholine and volatile agent immediately, hyperventilate 100% O2",
            "Allergic reaction only",
            "Always need to wait for fever to confirm"
          ],
          answer: 1,
          rationale: "Masseter rigidity is an EARLY sign of MH. Do not wait for fever. Discontinue triggering agents immediately.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        },
        {
          stem: "What is the single most sensitive EARLY sign of malignant hyperthermia that should raise immediate suspicion?",
          options: [
            "Fever >104°F",
            "Elevated end-tidal CO2 (ETCO2) — indicates hypermetabolism from uncontrolled muscle metabolism; fever is LATE",
            "Cyanosis",
            "Loss of consciousness"
          ],
          answer: 1,
          rationale: "MH causes hypermetabolism → CO2 production increases before temperature rises. ETCO2 monitoring is critical. Fever is late.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "In the STOP-MH mnemonic, what does the 'P' stand for and why is it critical?",
          options: [
            "Position the patient",
            "Prepare dantrolene — dantrolene sodium 2.5 mg/kg IV is the ONLY specific MH treatment",
            "Phenylephrine administration",
            "Prophylactic antibiotics"
          ],
          answer: 1,
          rationale: "Dantrolene works by blocking calcium release in muscle. It's the only specific treatment for MH.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "After stopping triggering agents and starting dantrolene for MH crisis, the patient's muscles are still rigid. Temperature is 40.2°C (104.4°F). What is the next intervention?",
          options: [
            "Wait for dantrolene to work",
            "Aggressive cooling (ice packs, cold IV saline, cooling blankets) AND continue dantrolene q5 min until signs resolve",
            "Give more propofol",
            "Discontinue all medications"
          ],
          answer: 1,
          rationale: "Cooling is supportive but dantrolene is curative. Continue both concurrently. Target core temp <38.5°C.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        }
      ]
    }
  },

  {
    id: "malignant-hyperthermia-management",
    label: "Malignant Hyperthermia: Dantrolene Dosing & Post-Crisis Care",
    sets: {
      mustKnow: [
        {
          stem: "A patient with family history of 'anesthesia problems' is scheduled for elective surgery. What is the most important pre-operative screening question?",
          options: [
            "'Do you get nervous with doctors?'",
            "'Has anyone in your family had problems during or after anesthesia or had a high fever during surgery?' — identifies MH risk",
            "'Have you ever had surgery before?'",
            "'Do you take medications?'"
          ],
          answer: 1,
          rationale: "Family history of anesthesia complications is the strongest risk factor for MH. Early identification allows modified anesthetic plan.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        },
        {
          stem: "A patient develops MH crisis. Dantrolene sodium is ordered STAT. The OR pharmacy says 'we don't stock dantrolene regularly.' What is the clinical consequence of delay?",
          options: [
            "Delays are acceptable",
            "Dantrolene must be prepared from powder vials (takes 3-5 minutes per vial); without dantrolene, heat cannot be stopped, rhabdomyolysis worsens → cardiac arrest likely",
            "Other drugs can substitute for dantrolene",
            "Delay only causes minor complications"
          ],
          answer: 1,
          rationale: "Dantrolene is the ONLY specific treatment. Every minute of delay worsens outcome. Hospitals MUST have dantrolene available.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A patient develops MH crisis. After discontinuing triggering agents, he receives dantrolene 2.5 mg/kg IV. 5 minutes later, muscles still rigid, ETCO2 still 60. What is the next dantrolene dose?",
          options: [
            "Wait another 10 minutes",
            "Repeat dantrolene 2.5 mg/kg IV immediately (continue q5 min until signs resolve, max 10 mg/kg total)",
            "Give propofol instead",
            "No additional dantrolene needed"
          ],
          answer: 1,
          rationale: "Dantrolene dosing is 2.5 mg/kg initial, then repeat q5min until MH signs resolve or max 10 mg/kg reached.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "After successful treatment of MH crisis with dantrolene, the patient is recovering well in ICU. When should dantrolene be discontinued?",
          options: [
            "Immediately after crisis resolves",
            "Dantrolene should be continued 1 mg/kg IV q4-6h for 24-48 hours post-crisis to prevent recrudescence",
            "Never stop dantrolene",
            "Only if patient develops side effects"
          ],
          answer: 1,
          rationale: "Recrudescence occurs in 25-50% of MH crises. Continued dantrolene dosing prevents repeat episodes. Early discharge risks deadly recurrence.",
          topic: "Malignant Hyperthermia",
          source: "week3"
        }
      ]
    }
  },

  {
    id: "postoperative-pacu-complications",
    label: "Postoperative PACU: Common Complications",
    sets: {
      mustKnow: [
        {
          stem: "In the PACU, patient extubated 30 minutes ago now develops respiratory distress, stridor, and drooling. Most recent vital: HR 128, BP 165/95, SpO2 88%. What is this likely complication?",
          options: [
            "Normal post-extubation response",
            "Laryngospasm or post-extubation edema — may have been triggered by aggressive suctioning; needs immediate assessment for airway patency",
            "Fever only",
            "Hypercarbia"
          ],
          answer: 1,
          rationale: "Post-extubation stridor indicates laryngeal edema or spasm. Needs immediate airway assessment and possible intervention.",
          topic: "Postoperative Care",
          source: "week3"
        },
        {
          stem: "A post-op patient reports inability to pass urine 6 hours after spinal anesthesia. Bladder palpable above pubic symphysis. Vital signs stable. What is the nursing action?",
          options: [
            "Wait 24 hours for spontaneous voiding",
            "Insert straight catheter (or Foley if unable to void post-removal) — spinal anesthesia causes temporary bladder paralysis",
            "Give diuretics to force urination",
            "Do nothing; this always resolves"
          ],
          answer: 1,
          rationale: "Spinal anesthesia temporarily blocks parasympathetic function. Catheterization is needed if retention continues.",
          topic: "Postoperative Care",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A 68-year-old with COPD is in pre-op holding. Baseline SpO2 88%. Anesthesia gives morphine 10mg IM. 15 minutes later, SpO2 drops to 82%, patient drowsy. What is the priority action?",
          options: [
            "Wait and observe",
            "Supplemental oxygen immediately, consider naloxone if severe respiratory depression — morphine depresses respiratory drive in COPD",
            "Give more morphine",
            "Call surgeon to cancel"
          ],
          answer: 1,
          rationale: "COPD patients depend on hypoxic drive; morphine further depresses respiration. This is an emergency.",
          topic: "Postoperative Care",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "A patient extubated 20 minutes ago is now in PACU with HR 128, BP 185/98, temp 38.1°C, muscle tension visible. ETCO2 was 42 on the vent, now unavailable. OR staff comments 'we had difficulty with paralysis.' What is your immediate assessment and action?",
          options: [
            "Pain only; give morphine",
            "Possible incomplete reversal of neuromuscular blockade OR early MH signs — assess jaw clenching/masseter rigidity, muscle tone; if present STOP all activity, apply ice, notify anesthesia, prepare for dantrolene",
            "Simple emergence delirium",
            "Hypertension treatment only"
          ],
          answer: 1,
          rationale: "Difficulty with paralysis reversal + tachycardia + hypertension + muscle tension + fever in PACU suggests either inadequate reversal (recurarization risk) or MH beginning. Masseter rigidity is key discriminator. This requires urgent evaluation.",
          topic: "Postoperative Care",
          source: "week3"
        }
      ]
    }
  },

  {
    id: "postoperative-pain-analgesia",
    label: "Postoperative Pain Management & Opioid Safety",
    sets: {
      mustKnow: [
        {
          stem: "A post-op patient 2 hours from recovery has severe pain (8/10) despite morphine IV given twice in PACU. Pain is localized to operative site. Dressing is intact. What is the priority action?",
          options: [
            "Just keep giving more opioids",
            "Notify surgeon to evaluate — inadequately controlled pain suggests possible complications (bleeding, hematoma, compartment syndrome)",
            "This is normal and will improve",
            "Pain score doesn't matter"
          ],
          answer: 1,
          rationale: "Opioid-refractory pain suggests complications. Surgeon must evaluate.",
          topic: "Postoperative Care",
          source: "week3"
        },
        {
          stem: "A patient with severe post-op pain is on continuous epidural morphine (2 mg/h) but still has pain score 7/10. Respiratory rate 10, SpO2 92%. How should analgesia be adjusted?",
          options: [
            "Increase epidural dose further",
            "Do NOT increase — respiratory depression (RR 10) is opioid toxicity; use multi-modal analgesia (regional blocks, NSAIDs) instead",
            "Stop all pain medication",
            "Intubate the patient"
          ],
          answer: 1,
          rationale: "Respiratory depression limits opioid escalation. Multi-modal analgesia is safer.",
          topic: "Postoperative Care",
          source: "week3"
        }
      ],
      extraPractice: [
        {
          stem: "A patient post-op from major surgery is on PCA (patient-controlled analgesia) morphine. Nurse finds patient unresponsive, respirations shallow (8/min), oxygen saturation 85%. What is the immediate action?",
          options: [
            "Continue PCA as ordered",
            "Bag-valve-mask ventilation, naloxone 0.4mg IV, notify anesthesia — this is opioid overdose requiring urgent reversal",
            "Wait for patient to wake up",
            "Give more oxygen only"
          ],
          answer: 1,
          rationale: "This is opioid toxicity/overdose. Naloxone is the antidote. Respiratory support is immediate priority.",
          topic: "Postoperative Care",
          source: "week3"
        }
      ],
      eaq: [
        {
          stem: "A 58-year-old post-op from open abdominal surgery (POD1) reports pain 6/10 despite epidural morphine running (rate already increased twice in 6 hours). HR 102, BP 142/88, RR 18, SpO2 94%. He refuses to cough or move. When anesthesia arrives, ETCO2 (if measured) is found high. What is NOT causing this pain picture?",
          options: [
            "Inadequate analgesia from opioid tolerance",
            "The opioid IS working well — high HR/BP/RR suggest the patient is splinting (guarding due to pain) which requires better multimodal analgesia, not more opioids alone",
            "Surgical complication",
            "Respiratory depression already present"
          ],
          answer: 3,
          rationale: "Vital signs suggest pain and splinting, not respiratory depression. Splinting increases CO2 production and risk of atelectasis. Multi-modal analgesia (epidural + regional blocks + NSAIDs + acetaminophen) is needed.",
          topic: "Postoperative Care",
          source: "week3"
        }
      ]
    }
  }
];
