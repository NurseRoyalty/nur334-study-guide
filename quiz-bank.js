/* ============================================================
   QUIZ BANK - BUILD YOUR OWN EXAM
   NCLEX NGN Clinical Judgment Style Questions
   Week 2 & 3 High-Yield Content

   Structure: Topic-based with three sets:
   - mustKnow: Essential scenarios (likely exam topics)
   - extraPractice: Additional complex cases
   - eaq: Extended application questions (highest complexity)

   Format: Action-focused clinical judgment with realistic
   patient scenarios, vital signs, labs, and nursing decisions.
   ============================================================ */

window.QUIZ_BANK = [
  /* ========== WEEK 2: HEMATOLOGY TOPICS ========== */
  {
    id: "hematology-labs-interpretation",
    label: "Hematology Labs: Clinical Interpretation",
    sets: {
      mustKnow: [
        {
          id: "hem-mk-001",
          q: "A 62-year-old male admitted with fatigue and dyspnea for 3 weeks. Vital signs: HR 102, RR 22, BP 140/88. Labs: Hgb 7.2, WBC 3.1, Plt 95K, MCV 68, MCHC 26, Retic 0.3%, Iron studies normal, B12/Folate normal. The patient has received 2 liters of IV fluids. Which action takes priority?",
          a: "Prepare patient for bone marrow biopsy to diagnose marrow failure (pancytopenia + inappropriately low reticulocyte response)",
          options: [
            "Transfuse PRBCs immediately to correct anemia",
            "Prepare patient for bone marrow biopsy to diagnose marrow failure (pancytopenia + inappropriately low reticulocyte response)",
            "Give iron supplementation for microcytic anemia",
            "Initiate B12/folate replacement therapy"
          ],
          rationale: "Pancytopenia with blunted reticulocyte response indicates BONE MARROW DISEASE (aplastic anemia, leukemia, MDS), not peripheral loss. Normal iron/B12/Folate rule out nutritional deficiencies. Microcytic indices are a red herring. Diagnosis requires bone marrow biopsy. Transfusion is only supportive."
        },
        {
          id: "hem-mk-002",
          q: "A 45-year-old female with newly diagnosed SLE presents acutely with hemolytic anemia. Labs: Hgb 6.8 (was 10.2 one week ago), Retic 12%, LDH 980, Haptoglobin <10, Indirect bili 2.8, DAT (Coombs) POSITIVE. Temperature 38.5°C, HR 118, RR 26, altered mental status. Blood bank reports 'incompatible crossmatch.' What is the PRIORITY nursing action?",
          a: "Notify physician immediately; patient needs transfusion despite crossmatch incompatibility — transfuse least-incompatible blood after discussing risks/benefits",
          options: [
            "Hold all transfusions until compatible blood is available",
            "Notify physician immediately; patient needs transfusion despite crossmatch incompatibility — transfuse least-incompatible blood after discussing risks/benefits",
            "Give only PRBCs without FFP to avoid antibody reactions",
            "Wait for steroid therapy to take effect before transfusing"
          ],
          rationale: "Life-threatening hemolytic anemia (altered mental status, Hgb 6.8, hemolysis markers) requires IMMEDIATE transfusion. In autoimmune hemolysis (positive DAT), incompatible crossmatch is EXPECTED because patient's antibodies react with all donor RBCs. Management: Verify patient/blood ID, discuss risks, transfuse least-incompatible blood if Hgb remains dangerously low. Do NOT withhold transfusion in life-threatening situation."
        },
        {
          id: "hem-mk-003",
          q: "A 55-year-old post-op day 1 from major abdominal surgery with massive transfusion (6 units PRBC, 2L crystalloid). Labs show: PT 18 sec, aPTT 58 sec, Plt 65K (pre-op 280K), Fibrinogen 150. Minor oozing from surgical drain (50mL/hour). What is the PRIMARY mechanism and IMMEDIATE action?",
          a: "Dilutional coagulopathy from massive transfusion without balanced component replacement; initiate 1:1:1 protocol (PRBC:FFP:Platelets) and use rapid infusion warmer for all products",
          options: [
            "DIC from surgical trauma; give only crystalloid to avoid fluid overload",
            "Dilutional coagulopathy from massive transfusion without balanced component replacement; initiate 1:1:1 protocol (PRBC:FFP:Platelets) and use rapid infusion warmer for all products",
            "Thrombocytopenia; transfuse platelets only",
            "Vitamin K deficiency; give IV vitamin K now"
          ],
          rationale: "ALL three measures (PT, aPTT, Plt, Fibrinogen) are LOW — this is DILUTIONAL, not consumptive (would see in DIC). Massive transfusion dilutes clotting factors without balanced component replacement. Solution: 1:1:1 ratio PRBC:FFP:Platelets with rapid infusion warmer. Do NOT use crystalloid alone (worsens dilution). FFP and platelets are needed NOW."
        },
        {
          id: "hem-mk-004",
          q: "A 38-year-old receiving RBC transfusion develops sudden fever (38.5°C), back pain, hemoglobinuria (dark urine), and hypotension (BP 88/52). What transfusion reaction is this and what is the FIRST action?",
          a: "STOP transfusion immediately, disconnect IV, verify patient/blood identification, send blood back to bank, obtain STAT labs (CBC, coagulation, UA for hemoglobin)",
          options: [
            "Mild allergic reaction; continue transfusion with antihistamine",
            "STOP transfusion immediately, disconnect IV, verify patient/blood identification, send blood back to bank, obtain STAT labs (CBC, coagulation, UA for hemoglobin)",
            "Febrile nonhemolytic reaction; give acetaminophen and slow transfusion rate",
            "TRALI; administer steroids and supportive oxygen"
          ],
          rationale: "Acute hemolytic transfusion reaction (AHTR) presents with fever, back/flank pain, hemoglobinuria, and hypotension — LIFE-THREATENING. This is a medical emergency. Immediate actions: STOP transfusion, keep IV patent for emergency meds, verify identification, save blood and urine for testing, obtain coagulation studies for DIC risk."
        },
        {
          id: "hem-mk-005",
          q: "A 68-year-old on warfarin for atrial fibrillation presents with severe gum bleeding, hematuria, and melena. INR 9.5, Hgb 8.2 (down 1.9 g/dL from baseline). Vital signs: BP 92/55, HR 118, RR 24. What is the PRIORITY intervention?",
          a: "Assess bleeding severity; give fresh frozen plasma (FFP) 10-15 mL/kg PLUS vitamin K 10mg IV for ACTIVE MAJOR BLEEDING; hold warfarin",
          options: [
            "Give vitamin K only; transfusion not needed with INR reversal",
            "Assess bleeding severity; give fresh frozen plasma (FFP) 10-15 mL/kg PLUS vitamin K 10mg IV for ACTIVE MAJOR BLEEDING; hold warfarin",
            "Continue warfarin; recheck INR in 2 hours",
            "Give fresh frozen plasma with no vitamin K"
          ],
          rationale: "INR 9.5 with ACTIVE bleeding (hematuria, melena, gum bleeding) and hemodynamic instability (hypotension, tachycardia) = life-threatening hemorrhage. FFP provides immediate factor replacement; vitamin K works slowly but is long-lasting. Both needed for ACTIVE MAJOR BLEEDING. Do NOT use vitamin K alone — too slow. Consider PCC if available."
        }
      ],
      extraPractice: [
        {
          id: "hem-ep-001",
          q: "A 48-year-old with polycythemia vera (Hct 58%, Hgb 19.2) presents with transient monocular vision loss lasting 90 seconds (now resolved). Reports new onset headaches. Aspirin was recently discontinued by his PCP. BP 162/94, HR 88. What should the nurse FIRST communicate to physician?",
          a: "This patient has AMAUROSIS FUGAX (TIA-equivalent) indicating imminent stroke risk; reinitiate aspirin immediately — thrombotic prophylaxis is CRITICAL in PV",
          options: [
            "Discontinue all blood pressure medications to reduce bleeding risk",
            "This patient has AMAUROSIS FUGAX (TIA-equivalent) indicating imminent stroke risk; reinitiate aspirin immediately — thrombotic prophylaxis is CRITICAL in PV",
            "Monitor vision only; no treatment needed for transient symptoms",
            "Increase hematocrit target to 65% to improve oxygen delivery"
          ],
          rationale: "Amaurosis fugax in PV is a WARNING SIGN of thrombotic event and stroke risk. Aspirin 75-100mg daily is STANDARD thrombotic prophylaxis in PV and should NOT have been stopped without active bleeding. This patient needs: (1) Reinitiate aspirin, (2) Target Hct <45% with phlebotomy, (3) Neurology evaluation for stroke risk. Discontinuing aspirin increased risk dramatically."
        },
        {
          id: "hem-ep-002",
          q: "A 52-year-old on IV iron supplementation for severe iron deficiency anemia (Hgb 6.4) develops acute onset fever (38.9°C), rigors, chest tightness, dyspnea, and hypotension (BP 95/58, HR 128) 15 minutes after iron infusion started. What is the APPROPRIATE nursing response?",
          a: "STOP iron infusion immediately; keep IV patent; assess for anaphylaxis (urticaria, stridor, angioedema); administer epinephrine 0.3-0.5mg IM if anaphylaxis present; notify physician STAT",
          options: [
            "Slow infusion rate and monitor closely; reaction will resolve",
            "STOP iron infusion immediately; keep IV patent; assess for anaphylaxis (urticaria, stridor, angioedema); administer epinephrine 0.3-0.5mg IM if anaphylaxis present; notify physician STAT",
            "Continue iron infusion at slower rate with antihistamine",
            "Give only supportive care; iron dextran reactions are not dangerous"
          ],
          rationale: "Iron dextran has ~1% anaphylaxis risk presenting with fever, rigors, hypotension, tachycardia, dyspnea — MEDICAL EMERGENCY. Management: (1) STOP infusion, (2) Keep IV patent, (3) Assess for anaphylaxis signs, (4) Give epinephrine if needed, (5) Notify physician STAT, (6) Consider alternative iron formulation (iron sucrose has lower risk). Do NOT re-challenge with iron dextran."
        },
        {
          id: "hem-ep-003",
          q: "A 35-year-old trauma patient in hemorrhagic shock (SBP 78, HR 142) receives massive transfusion (15 units PRBC, 8 units FFP, 4 units platelets in 2 hours). Core temperature drops to 35.1°C (94°F). Patient becomes unresponsive with dilated pupils. Labs show K 6.8, Ca 6.2, pH 7.18. What is the MOST pressing complication to address FIRST?",
          a: "Severe hyperkalemia (K 6.8) with metabolic acidosis creating cardiac dysrhythmia risk; give calcium gluconate for membrane protection, then insulin/glucose to shift K intracellularly, then sodium bicarbonate",
          options: [
            "Hypothermia only; rewarm with blankets and continue transfusion",
            "Severe hyperkalemia (K 6.8) with metabolic acidosis creating cardiac dysrhythmia risk; give calcium gluconate for membrane protection, then insulin/glucose to shift K intracellularly, then sodium bicarbonate",
            "Hypocalcemia; give calcium chloride to replace citrate-related losses",
            "Stop all transfusions until body warms up"
          ],
          rationale: "Massive transfusion creates PERFECT STORM: (1) Hyperkalemia from RBC lysis in stored blood + tissue K from shock, (2) Hypocalcemia from citrate, (3) Hypomagnesemia, (4) Metabolic acidosis from hypoperfusion, (5) Hypothermia from cold products. K 6.8 + acidosis + hypocalcemia = FATAL DYSRHYTHMIAS IMMINENT. PRIORITY: (1) Calcium gluconate (protects heart), (2) Insulin + glucose (shifts K in), (3) Sodium bicarbonate (corrects acidosis), (4) Warm ALL products, (5) Consider ECMO for rewarming if temp <32°C."
        }
      ],
      eaq: [
        {
          id: "hem-eaq-001",
          q: "A multiply-transfused 45-year-old patient (20+ transfusions lifetime) develops fever (38.7°C) 3 days post-transfusion. Labs: hemoglobinuria present, jaundice (bili 2.4), Hgb dropped 1.8 g/dL despite transfusion, LDH elevated. DAT initially negative, now positive. What transfusion complication has occurred and what is the nursing action?",
          a: "Delayed hemolytic transfusion reaction (DHTR) from RBC alloimmunization; notify blood bank of reaction type, obtain repeat type & screen for alloantibody identification, document in chart, arrange future transfusions with antigen-negative blood",
          options: [
            "Acute hemolytic reaction; prepare for ICU admission and dialysis",
            "Delayed hemolytic transfusion reaction (DHTR) from RBC alloimmunization; notify blood bank of reaction type, obtain repeat type & screen for alloantibody identification, document in chart, arrange future transfusions with antigen-negative blood",
            "Sepsis from contaminated blood product; start broad-spectrum antibiotics",
            "Simple fever from transfusion; give acetaminophen and observe"
          ],
          rationale: "DHTR occurs 3-14 days post-transfusion when patient has been previously immunized to RBC antigens. Unlike AHTR (immediate, severe), DHTR is mild-to-moderate. DAT may initially be negative then become positive (delayed antibody formation/boost). Management: (1) Notify blood bank of DELAYED reaction, (2) Send repeat type & screen for alloantibody ID, (3) Document permanently in patient's chart, (4) Use antigen-negative blood for future transfusions matching the identified antibody. Multiple prior transfusions create high alloimmunization risk."
        },
        {
          id: "hem-eaq-002",
          q: "A 72-year-old with acute MI presents with syncope and chest pain. Labs show pancytopenia (Hgb 6.8, WBC 14.2, Plt 420K — extremely elevated), hemolysis markers (LDH 850, Haptoglobin <10, indirect bili 2.1). Smear shows schistocytes. DAT is NEGATIVE. Renal function: Cr 2.2 (baseline 0.9). What is the MOST likely diagnosis and URGENT action?",
          a: "Microangiopathic hemolytic anemia (MAHA) from likely DIC with acute MI or possible TTP; STAT cardiology for ACS workup, STAT coagulation studies (PT/aPTT/Fibrinogen for DIC), ICU admission, consider plasma exchange if TTP suspected",
          options: [
            "Immune hemolytic anemia; give steroids and IVIG",
            "Microangiopathic hemolytic anemia (MAHA) from likely DIC with acute MI or possible TTP; STAT cardiology for ACS workup, STAT coagulation studies (PT/aPTT/Fibrinogen for DIC), ICU admission, consider plasma exchange if TTP suspected",
            "Simple anemia from bleeding; transfuse PRBCs",
            "Iron deficiency; start supplementation"
          ],
          rationale: "Schistocytes (fragmented RBCs) + negative DAT + hemolysis + acute AKI + chest pain + thrombocytosis (reactive to PLT consumption) = MAHA, not immune hemolysis. Differential: (1) DIC from acute MI with tissue damage, (2) TTP (with neuro/renal symptoms), (3) HUS (less likely in adult). This is LIFE-THREATENING. PRIORITY: (1) STAT ECG for ACS, (2) Coagulation studies for DIC assessment, (3) ICU admission, (4) Cardiology consult, (5) Consider plasma exchange protocol if TTP in differential."
        }
      ]
    }
  },

  {
    id: "anemias-clinical-scenarios",
    label: "Anemias: Advanced Clinical Management",
    sets: {
      mustKnow: [
        {
          id: "ane-mk-001",
          q: "A 28-year-old woman with Crohn's disease has progressive numbness in feet for 2 months and recent confusion. Labs: Hgb 8.4, MCV 102, Folate 2.2 (low), B12 1100 (low-normal). She tried oral B12 supplements 'but they didn't help.' What is your assessment and PRIORITY action?",
          a: "B12 deficiency with IRREVERSIBLE neurologic demyelination already occurring; start IMMEDIATE IM B12 injections (not oral — terminal ileum disease prevents absorption), neurology referral for cord assessment, both B12 and folate repletion required",
          options: [
            "Folate supplementation alone is sufficient; recheck labs in 4 weeks",
            "B12 deficiency with IRREVERSIBLE neurologic demyelination already occurring; start IMMEDIATE IM B12 injections (not oral — terminal ileum disease prevents absorption), neurology referral for cord assessment, both B12 and folate repletion required",
            "Prescribe high-dose oral B12; patient hasn't tried enough",
            "Simple anemia; transfuse and monitor"
          ],
          rationale: "Terminal ileum Crohn's causes B12 malabsorption requiring IM injection (oral supplements useless). Neurologic symptoms (paresthesias, confusion) indicate demyelination has already started and is IRREVERSIBLE. Ongoing B12 treatment prevents FURTHER damage but cannot reverse past damage. Management: (1) Monthly IM B12 indefinitely, (2) Address folate simultaneously (risk of masking B12 neuro damage if folate corrected alone), (3) Urgent neurology consult with possible spinal cord MRI."
        },
        {
          id: "ane-mk-002",
          q: "A 38-year-old woman with heavy menstrual bleeding has iron deficiency anemia (Hgb 6.8, MCV 62, Ferritin 5). She asks 'When will my anemia improve after starting iron?' What should you explain about expected timeline and CONCURRENT management?",
          a: "Explain that reticulocyte response begins in 3-7 days, clinical symptoms improve in 2-3 weeks, but FULL repletion takes 3-6 months; ALSO address the underlying menorrhagia (contraception, gynecology referral, iron supplementation alone won't fix the bleeding source)",
          options: [
            "Symptoms will improve in 3-5 days as Hgb rises quickly with iron",
            "Explain that reticulocyte response begins in 3-7 days, clinical symptoms improve in 2-3 weeks, but FULL repletion takes 3-6 months; ALSO address the underlying menorrhagia (contraception, gynecology referral, iron supplementation alone won't fix the bleeding source)",
            "Iron will work immediately if taken with orange juice",
            "Transfusion is needed because oral iron is ineffective"
          ],
          rationale: "Iron replacement is SLOW: bone marrow responds in 3-7 days (elevated retic count), Hgb rises only 0.2-0.3 g/dL per day, and full iron store repletion takes 3-6 months. Patient counseling prevents premature discontinuation. CRITICAL: Don't just treat anemia — address the CAUSE (menorrhagia) with gynecology/contraception options. Without treating bleeding source, anemia recurs."
        },
        {
          id: "ane-mk-003",
          q: "A 45-year-old with hereditary spherocytosis (HS) presents with severe anemia (Hgb 5.2), reticulocyte count 22%, LDH 1200, and signs of hemolytic crisis. What is the FIRST priority intervention?",
          a: "Transfusion + intensive supportive care with close monitoring in ICU; splenectomy is ELECTIVE surgery done 4+ weeks after crisis resolves, not during acute crisis",
          options: [
            "Perform emergency splenectomy immediately",
            "Transfusion + intensive supportive care with close monitoring in ICU; splenectomy is ELECTIVE surgery done 4+ weeks after crisis resolves, not during acute crisis",
            "Folic acid supplementation only",
            "Hydroxyurea therapy to suppress hemolysis"
          ],
          rationale: "Hemolytic crisis in HS requires urgent transfusion and ICU support. Splenectomy is the DEFINITIVE treatment but is elective surgery (best done weeks after crisis when patient is stable). Immediate priority: (1) Transfusion to stabilize Hgb, (2) ICU monitoring, (3) Supportive care, (4) Folic acid supplementation (ongoing need from high erythropoiesis), (5) Plan splenectomy after recovery."
        },
        {
          id: "ane-mk-004",
          q: "A patient with pernicious anemia (PA) has been on monthly B12 injections for 3 years but develops new paresthesias and ataxia. Labs show B12 is normal now (900). What explains the persistent neurologic symptoms and what is the nursing implication?",
          a: "Neurologic damage from PREVIOUS untreated B12 deficiency is IRREVERSIBLE; B12 replacement prevents further decline but cannot reverse demyelination; patient needs neurology follow-up and counseling about prognosis",
          options: [
            "Pernicious anemia is cured; B12 injections should be stopped",
            "Neurologic damage from PREVIOUS untreated B12 deficiency is IRREVERSIBLE; B12 replacement prevents further decline but cannot reverse demyelination; patient needs neurology follow-up and counseling about prognosis",
            "Patient has new spinal cord compression unrelated to B12",
            "B12 injections are causing the symptoms"
          ],
          rationale: "B12 deficiency causes demyelination of spinal cord and peripheral nerves. Once this damage occurs, it's IRREVERSIBLE even after B12 repletion begins. Early diagnosis and treatment could have prevented this outcome. Management: (1) Continue B12 injections indefinitely, (2) Neurology follow-up for documentation of deficits, (3) Physical therapy if needed, (4) Patient education about importance of continuing injections, (5) Screen family members for PA/B12 risk."
        },
        {
          id: "ane-mk-005",
          q: "A 38-year-old with chronic kidney disease (Cr 3.2, eGFR 18) on darbepoetin (ESA) has Hgb 7.8 with inappropriately low reticulocyte count (2.1%) despite adequate ESA dosing. Iron/B12/Folate are normal. BP 168/92. What is the MOST likely diagnosis and appropriate next step?",
          a: "ESA resistance from CKD complications; check iron saturation and TSAT (not just ferritin), screen for infection/inflammation, assess for hyperparathyroidism, review ACE-I/ARB use (can reduce ESA response), consider IV iron or ESA dose adjustment",
          options: [
            "Simple iron deficiency; increase iron supplementation",
            "ESA resistance from CKD complications; check iron saturation and TSAT (not just ferritin), screen for infection/inflammation, assess for hyperparathyroidism, review ACE-I/ARB use (can reduce ESA response), consider IV iron or ESA dose adjustment",
            "Aplastic anemia; prepare for bone marrow biopsy",
            "Hypertension causing anemia"
          ],
          rationale: "ESA hyporesponsiveness in CKD results from: (1) Functional iron deficiency (ferritin normal but TSAT low), (2) Chronic inflammation, (3) Infections (UTI, access), (4) Hyperparathyroidism, (5) ACE-I/ARB use. Next steps: (1) Check TSAT and ferritin (TSAT is key), (2) Screen for infection with CBC, CMP, blood cultures, (3) Check PTH for secondary hyperparathyroidism, (4) Review medications, (5) Consider IV iron supplementation, (6) Referral to nephrologist for ESA resistance protocol."
        }
      ],
      extraPractice: [
        {
          id: "ane-ep-001",
          q: "A 42-year-old with sickle cell disease presents with acute chest syndrome (chest pain, fever 39.2°C, new pulmonary infiltrates). Hgb 7.2, WBC 16, O2 sat 88% on room air, RR 28. He has received 2 units PRBC in ER. What is the PRIORITY nursing action now?",
          a: "Obtain blood cultures, start broad-spectrum antibiotics STAT (sickle cell patients are functionally asplenic), increase oxygen to maintain SpO2 >95%, consider exchange transfusion if more infiltrates develop, prepare for ICU admission",
          options: [
            "Just give more blood transfusions until Hgb is normal",
            "Obtain blood cultures, start broad-spectrum antibiotics STAT (sickle cell patients are functionally asplenic), increase oxygen to maintain SpO2 >95%, consider exchange transfusion if more infiltrates develop, prepare for ICU admission",
            "Observe and treat with supportive care only",
            "Perform splenectomy emergency surgery"
          ],
          rationale: "Acute chest syndrome in sickle cell disease can progress to ARDS with 10-15% mortality. These patients are functionally asplenic (high infection risk). PRIORITY: (1) Blood cultures STAT, (2) Antibiotics covering atypical organisms (Mycoplasma, Chlamydia also cause ACS), (3) Oxygen therapy (target SpO2 >95%), (4) Exchange transfusion (simple transfusion increases viscosity), (5) ICU monitoring, (6) Hydroxyurea and folic acid for ongoing management."
        },
        {
          id: "ane-ep-002",
          q: "A 55-year-old with multiple myeloma on chemotherapy develops Hgb 7.8, retic 1.2%, WBC 2.1, Plt 95K. He is asymptomatic. His 'baseline' per chart is Hgb 9.5 but this was from 6 months ago. He's been receiving chemo for 4 months. What is the APPROPRIATE assessment?",
          a: "This patient likely has chemo-induced bone marrow suppression; obtain careful baseline history (what WAS his true baseline before chemo?), assess for bleeding/infection symptoms, consider holding or delaying next chemo cycle, possible transfusion if symptomatic, evaluate for myelodysplasia risk from chemo",
          options: [
            "Simple anemia; give iron supplementation",
            "This patient likely has chemo-induced bone marrow suppression; obtain careful baseline history (what WAS his true baseline before chemo?), assess for bleeding/infection symptoms, consider holding or delaying next chemo cycle, possible transfusion if symptomatic, evaluate for myelodysplasia risk from chemo",
            "Immediate transfusion regardless of symptoms",
            "Increase chemotherapy dose to treat myeloma"
          ],
          rationale: "Chemotherapy causes dose-dependent bone marrow suppression. This patient's declining Hgb/WBC/Platelets over 4 months is classic for chemo toxicity. PRIORITY: (1) Verify TRUE baseline (was he Hgb 9.5 BEFORE chemo?), (2) Assess for infection (fever, infection signs) and bleeding (bruising, bleeding gums), (3) Hold or delay chemo if counts severely depressed, (4) Transfuse if symptomatic (not just based on number), (5) Consider colony-stimulating factors (G-CSF) if WBC very low, (6) Screen for secondary myelodysplasia (chemo long-term complication)."
        }
      ],
      eaq: [
        {
          id: "ane-eaq-001",
          q: "A 32-year-old with autoimmune hemolytic anemia (AIHA, positive DAT) on prednisone 60mg daily for 2 weeks has Hgb 8.2 (unchanged from admission), retic 4.2% (should be high with this Hgb). Indirect bili 3.1, LDH 920. She's taking PPI for GI protection. She says 'I'm bruising easily and feel weak.' What is the MOST likely explanation and what should the nurse FIRST communicate?",
          a: "Steroid-refractory hemolytic anemia likely due to warm AIHA subtype that requires SECOND-line therapy; possible steroid inefficacy masked by PPI-reduced GI bleeding risk; notify physician — patient needs IVIG, rituximab, or splenectomy consideration; assess for steroid side effects (immunosuppression, hypertension, hyperglycemia)",
          options: [
            "The prednisone is working; just wait longer for response",
            "Steroid-refractory hemolytic anemia likely due to warm AIHA subtype that requires SECOND-line therapy; possible steroid inefficacy masked by PPI-reduced GI bleeding risk; notify physician — patient needs IVIG, rituximab, or splenectomy consideration; assess for steroid side effects (immunosuppression, hypertension, hyperglycemia)",
            "Patient's weak feeling is just from prednisone side effects, not hemolysis",
            "Transfuse immediately without further workup"
          ],
          rationale: "Warm AIHA typically responds to prednisone 60-80%, but 20% are steroid-refractory. Stable/rising Hgb after 2 weeks suggests steroid failure. Low retic response despite high hemolysis indicates bone marrow not responding adequately. Bruising + weakness suggest ongoing hemolysis + possible steroid toxicity. Next steps: (1) Verify steroid response (repeat labs for hemolysis markers, retic), (2) Assess for infections (immunosuppressed), (3) Monitor glucose, BP, GI symptoms, (4) Plan second-line therapy: IVIG, rituximab, splenectomy, or combination, (5) Blood bank consult for transfusion strategy (most difficult in AIHA due to panreactivity)."
        }
      ]
    }
  },

  {
    id: "polycythemia-complications",
    label: "Polycythemia: Vascular & Thrombotic Complications",
    sets: {
      mustKnow: [
        {
          id: "poly-mk-001",
          q: "A 58-year-old with polycythemia vera (Hgb 19.2, Hct 58%) presents with transient monocular vision loss (amaurosis fugax) lasting 2 minutes. BP 168/92, HR 88. He was taking aspirin but PCP discontinued it 2 weeks ago. What is this symptom and what is your PRIORITY action?",
          a: "Amaurosis fugax is a TIA-equivalent indicating IMMINENT STROKE RISK; notify physician immediately to REINITIATE aspirin (75-100mg daily) — this is critical thrombotic prophylaxis in PV that should not have been stopped",
          options: [
            "Migraine aura; no urgent treatment needed",
            "Amaurosis fugax is a TIA-equivalent indicating IMMINENT STROKE RISK; notify physician immediately to REINITIATE aspirin (75-100mg daily) — this is critical thrombotic prophylaxis in PV that should not have been stopped",
            "Retinal migraine from low oxygen; increase oxygen therapy",
            "Normal transient symptoms in polycythemia; reassure patient"
          ],
          rationale: "Amaurosis fugax in PV is a WARNING SIGN of thrombotic event. The increased blood viscosity (high Hgb/Hct) combined with polycythemia-related platelet dysfunction creates high thrombotic risk. Aspirin is STANDARD prophylaxis and discontinuation increased stroke risk. PRIORITY: (1) Reinitiate aspirin 75-100mg daily, (2) Target Hct <45% with phlebotomy, (3) Manage hypertension, (4) Neurology consult for stroke risk assessment, (5) Consider anticoagulation if recurrent TIAs."
        },
        {
          id: "poly-mk-002",
          q: "A 62-year-old with polycythemia vera develops intense, burning pruritus that is MUCH WORSE after bathing in warm water. He says the itching is 'unbearable' and affects his quality of life. What is this symptom and how should it be managed?",
          a: "Aquagenic pruritus from mast cell proliferation and excessive histamine release triggered by heat; manage with: avoid hot water (use lukewarm), antihistamines (H1 and H2 blockers), aspirin (inhibits histamine release), PUVA therapy if severe, consider cyproterone acetate",
          options: [
            "Allergic reaction to soap; switch to fragrance-free products",
            "Aquagenic pruritus from mast cell proliferation and excessive histamine release triggered by heat; manage with: avoid hot water (use lukewarm), antihistamines (H1 and H2 blockers), aspirin (inhibits histamine release), PUVA therapy if severe, consider cyproterone acetate",
            "Dry skin from bathing; apply moisturizer after showering",
            "Psychological symptom; reassure patient it will resolve"
          ],
          rationale: "Aquagenic pruritus is PATHOGNOMONIC for polycythemia vera. PV results in mast cell proliferation and excessive histamine production. Heat triggers histamine release, causing intense burning itching (often worse than pruritus in primary biliary cirrhosis). This significantly impacts quality of life. Management: (1) Educate about warm/hot water avoidance, (2) First-line: H1 + H2 blockers (cimetidine + diphenhydramine), (3) Aspirin (dual benefit: antihistamine + antiplatelet), (4) Consider PUVA phototherapy for severe cases, (5) Cyproterone acetate as alternative (off-label)."
        },
        {
          id: "poly-mk-003",
          q: "A 72-year-old with secondary polycythemia from chronic hypoxia (COPD, Hct 58%) is scheduled for elective surgery. Phlebotomy is considered to reduce Hct pre-operatively. What is the CRITICAL caution with this approach?",
          a: "In SECONDARY polycythemia, the high Hct is a COMPENSATORY ADAPTATION for hypoxia — phlebotomy removes this compensation and risks worsening tissue oxygenation; only PRIMARY polycythemia benefits from phlebotomy",
          options: [
            "Phlebotomy always improves surgical outcomes",
            "In SECONDARY polycythemia, the high Hct is a COMPENSATORY ADAPTATION for hypoxia — phlebotomy removes this compensation and risks worsening tissue oxygenation; only PRIMARY polycythemia benefits from phlebotomy",
            "Phlebotomy is contraindicated in ANY polycythemia",
            "Phlebotomy should be done the morning of surgery"
          ],
          rationale: "This is a CRITICAL distinction often missed: (1) PRIMARY polycythemia (PV, PET): High Hct is PATHOLOGIC → phlebotomy reduces viscosity and thrombotic risk → BENEFICIAL. (2) SECONDARY polycythemia (hypoxia, EPO-producing tumors): High Hct is COMPENSATION for low oxygen → phlebotomy removes this compensation → HARMFUL (worsens hypoxemia). This patient with COPD depends on high Hct for tissue oxygenation. Phlebotomy would cause tissue hypoxia. Pre-op management: (1) Optimize pulmonary status, (2) Use lowest acceptable phlebotomy (if any), (3) Ensure adequate oxygenation perioperatively."
        }
      ],
      extraPractice: [],
      eaq: [
        {
          id: "poly-eaq-001",
          q: "A 64-year-old with COPD (baseline SpO2 88%) and secondary polycythemia (Hct 56%, Hgb 18.8) is admitted post-op from abdominal surgery. He develops sudden respiratory distress, confusion, and tachycardia. SpO2 drops to 80%, ETCO2 suddenly rises to 68. Heart rate 128, BP 162/98, temperature 37.8°C. OR staff notes 'we had difficulty with muscle relaxation.' What is your MOST likely diagnosis and IMMEDIATE action?",
          a: "POSSIBLE MALIGNANT HYPERTHERMIA or delayed recognition from surgery; assess for masseter rigidity, muscle tension, and rigidity; if present: STOP all activity, hyperventilate 100% O2, apply ice, PREPARE DANTROLENE, notify anesthesia STAT — do NOT assume it's just COPD exacerbation",
          options: [
            "COPD exacerbation; give bronchodilators and steroids",
            "POSSIBLE MALIGNANT HYPERTHERMIA or delayed recognition from surgery; assess for masseter rigidity, muscle tension, and rigidity; if present: STOP all activity, hyperventilate 100% O2, apply ice, PREPARE DANTROLENE, notify anesthesia STAT — do NOT assume it's just COPD exacerbation",
            "Normal post-op response; reassure patient",
            "Sepsis only; start antibiotics"
          ],
          rationale: "ETCO2 spike to 68 in immediate post-op period is NOT normal and is most concerning for metabolic crisis. Possible etiologies: (1) MH recrudescence (difficulty with muscle relaxation is clue), (2) Inadequate reversal of neuromuscular blockade with recurarization, (3) Sepsis (less likely timing), (4) COPD exacerbation (possible but ETCO2 elevation suggests hypermetabolism). The key finding is ETCO2 elevation which indicates hypermetabolism or inadequate ventilation. This patient's COPD baseline SpO2 88% makes any hypoxemia especially dangerous. Do NOT miss MH — assess for muscle rigidity, especially masseter. Prepare dantrolene as precaution."
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
          id: "tr-mk-001",
          q: "A patient receiving RBC transfusion develops sudden fever (38.5°C), severe back pain, flank pain, hemoglobinuria (dark urine), and hypotension (BP 82/48). What transfusion reaction is this and what is the FIRST action?",
          a: "Acute hemolytic transfusion reaction (AHTR) — STOP transfusion IMMEDIATELY, disconnect IV, verify patient/blood identification, keep IV patent for emergency meds, send blood back to bank, obtain STAT labs",
          options: [
            "Mild allergic reaction; continue transfusion",
            "Acute hemolytic transfusion reaction (AHTR) — STOP transfusion IMMEDIATELY, disconnect IV, verify patient/blood identification, keep IV patent for emergency meds, send blood back to bank, obtain STAT labs",
            "Febrile nonhemolytic reaction; give antipyretics and slow infusion",
            "TRALI; administer steroids"
          ],
          rationale: "AHTR presents with fever, back/flank pain, hemoglobinuria, and hypotension — LIFE-THREATENING emergency. This is ABO incompatibility until proven otherwise. Immediate actions: (1) STOP transfusion, (2) Keep IV patent for emergency medications, (3) Verify patient/blood ID (ABO mistake is most common cause), (4) Send blood/tubing back to bank, (5) Send patient's urine/blood for hemoglobin, (6) Monitor for DIC (coagulation studies), (7) Aggressive IV hydration, (8) Monitor urine output (risk of acute kidney injury from hemoglobinuria)."
        },
        {
          id: "tr-mk-002",
          q: "A patient develops bilateral pulmonary edema, hypoxemia (SpO2 88%), and respiratory distress 25 minutes after blood transfusion begins. BNP is NORMAL (145), CVP is NORMAL. Chest X-ray shows bilateral infiltrates. Troponin negative. What complication is this and what is the management?",
          a: "TRALI (transfusion-related acute lung injury) — non-cardiogenic pulmonary edema from immune-mediated capillary leak; STOP transfusion, give supplemental oxygen/CPAP, NO diuretics (will worsen hypovolemia), supportive care only, notify blood bank",
          options: [
            "TACO (transfusion-associated circulatory overload); give diuretics",
            "TRALI (transfusion-related acute lung injury) — non-cardiogenic pulmonary edema from immune-mediated capillary leak; STOP transfusion, give supplemental oxygen/CPAP, NO diuretics (will worsen hypovolemia), supportive care only, notify blood bank",
            "Anaphylaxis; give epinephrine",
            "Aspiration pneumonia"
          ],
          rationale: "TRALI vs TACO distinction is CRITICAL because management is opposite: (1) TRALI: Normal BNP/CVP, non-cardiogenic edema from HLA/HNA antibodies, treated with O2/CPAP/supportive care (NO diuretics), usually resolves 48-96h. (2) TACO: Elevated BNP/CVP, cardiogenic pulmonary edema from fluid overload, treated with diuretics. This patient has TRALI (normal cardiac markers, normal fluid status). Management: Oxygen/CPAP, supportive care, notify blood bank (may defer future transfusions from this donor)."
        },
        {
          id: "tr-mk-003",
          q: "A multiply-transfused patient develops fever (38.8°C) 48 hours after transfusion with hemoglobinuria and jaundice. Hemoglobin dropped 1.2 g/dL post-transfusion. Direct antiglobulin test (DAT) becomes positive. This is most likely which transfusion reaction?",
          a: "Delayed hemolytic transfusion reaction (DHTR) from RBC alloimmunization; patient has formed new alloantibodies from prior transfusions; notify blood bank, obtain repeat type & screen, arrange future transfusions with antigen-negative blood",
          options: [
            "Acute hemolytic transfusion reaction",
            "Delayed hemolytic transfusion reaction (DHTR) from RBC alloimmunization; patient has formed new alloantibodies from prior transfusions; notify blood bank, obtain repeat type & screen, arrange future transfusions with antigen-negative blood",
            "Bacterial contamination",
            "No reaction; expected response to transfusion"
          ],
          rationale: "DHTR occurs 3-14 days post-transfusion in previously sensitized patients. Unlike AHTR (immediate, severe), DHTR is mild-to-moderate. DAT becomes positive as new antibodies form. Hemolysis is usually less severe than AHTR. Management: (1) Notify blood bank of reaction type, (2) Repeat type & screen for alloantibody identification, (3) Document in chart permanently, (4) Use antigen-negative blood for all future transfusions. Multiple prior transfusions = high risk for alloimmunization."
        },
        {
          id: "tr-mk-004",
          q: "A patient in septic shock receives massive transfusion (15 units PRBC, 10 units FFP, 6 units platelets in 4 hours). Develops ARDS-level respiratory distress (P/F ratio 95), coagulopathy (PT >25, aPTT >100, Fib 80). ETCO2 elevated, massive pulmonary edema. What multifactorial complication has developed?",
          a: "Combination of transfusion reactions (TRALI possible), dilutional coagulopathy, DIC from sepsis, and ARDS from sepsis — mortality extremely high; priorities: (1) Aggressive supportive care in ICU, (2) Minimize further transfusions, (3) Treat sepsis cause, (4) Coagulation management (FFP/Platelets/Cryofibrinogen as indicated), (5) Respiratory support/ECMO consideration",
          options: [
            "Simple TRALI only",
            "Combination of transfusion reactions (TRALI possible), dilutional coagulopathy, DIC from sepsis, and ARDS from sepsis — mortality extremely high; priorities: (1) Aggressive supportive care in ICU, (2) Minimize further transfusions, (3) Treat sepsis cause, (4) Coagulation management (FFP/Platelets/Cryofibrinogen as indicated), (5) Respiratory support/ECMO consideration",
            "Bacterial contamination only",
            "Anaphylaxis only"
          ],
          rationale: "Massive transfusion in septic shock creates a 'PERFECT STORM': (1) TRALI from transfused blood, (2) Dilutional coagulopathy from massive infusion, (3) DIC from sepsis + endotoxin + tissue damage, (4) ARDS from sepsis + transfusion. Mortality is 40-60% even with ICU support. This patient needs: (1) ICU-level care, (2) Hemostatic resuscitation (balanced PRBC:FFP:Platelet ratios 1:1:1), (3) Aggressive source control for sepsis, (4) Coagulation studies q2-4h, (5) Consider ECMO if worsens."
        },
        {
          id: "tr-mk-005",
          q: "A patient with IgA deficiency (previously diagnosed) receives blood transfusion. 10 minutes after transfusion starts, develops sudden anaphylaxis (urticaria, angioedema, stridor, hypotension 72/42, HR 140). What is happening and what is the IMMEDIATE action?",
          a: "Anaphylaxis from anti-IgA antibodies reacting with IgA in transfused blood; STOP transfusion immediately, give epinephrine 0.3-0.5mg IM STAT, establish IV access if not present, monitor airway, use IgA-deficient blood products for all future transfusions",
          options: [
            "Mild allergic reaction; continue transfusion",
            "Anaphylaxis from anti-IgA antibodies reacting with IgA in transfused blood; STOP transfusion immediately, give epinephrine 0.3-0.5mg IM STAT, establish IV access if not present, monitor airway, use IgA-deficient blood products for all future transfusions",
            "Simple fever reaction",
            "TACO; give diuretics"
          ],
          rationale: "IgA-deficient patients with anti-IgA antibodies can develop ANAPHYLAXIS with any transfusion containing IgA. This is LIFE-THREATENING. Immediate actions: (1) STOP transfusion, (2) Give epinephrine IM 0.3-0.5mg STAT (do NOT use IV initially), (3) Establish IV if needed, (4) Have airway equipment ready, (5) Monitor for biphasic anaphylaxis (can recur 8-12h later), (6) Use IgA-deficient or washed blood products for all future transfusions, (7) Alert patient to wear medical alert bracelet."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  /* ========== WEEK 3: ELECTROLYTES TOPICS ========== */
  {
    id: "sodium-imbalances",
    label: "Sodium Imbalances: Hyponatremia & Hypernatremia",
    sets: {
      mustKnow: [
        {
          id: "sod-mk-001",
          q: "A 68-year-old post-op patient develops confusion and headache on POD2. Labs: Na 118, K 3.8, osmolarity 245. Vital signs: BP 140/85, HR 88, RR 16, temp 37.2°C. What is the PRIORITY in correcting this hyponatremia?",
          a: "Correct SLOWLY at 8-12 mEq/L per 24 hours (NOT rapidly) — rapid correction causes osmotic demyelination syndrome from brain cell shrinkage; use 3% hypertonic saline cautiously with frequent sodium checks",
          options: [
            "Fluid restriction only; no need for hypertonic saline",
            "Correct SLOWLY at 8-12 mEq/L per 24 hours (NOT rapidly) — rapid correction causes osmotic demyelination syndrome from brain cell shrinkage; use 3% hypertonic saline cautiously with frequent sodium checks",
            "Rapid correction with 3% saline to get Na >130 in 2 hours",
            "Give normal saline and monitor"
          ],
          rationale: "Symptomatic hyponatremia (confusion, headache) requires correction but SLOWLY. Rapid correction causes osmotic demyelination syndrome (ODS): brain cells shrink from osmotic gradient, leading to demyelination, permanent neurologic damage. The brain has adapted to chronic hyponatremia by reducing intracellular osmolytes. Correction must allow these osmolytes to be re-accumulated (takes time). Target: increase Na 8-12 mEq/L in first 24h, slower if chronic. Use 3% saline with frequent checks (q2-4h initially)."
        },
        {
          id: "sod-mk-002",
          q: "A patient with severe hypernatremia (Na 162, osmolarity 335) is given D5W (hypotonic) IV for correction. Why must this be done SLOWLY and what is the danger of rapid correction?",
          a: "Rapid water replacement causes water influx into brain cells (osmotic gradient), leading to CEREBRAL EDEMA and seizures; correct SLOWLY at 8-10 mEq/L per 24 hours; chronic hypernatremia triggers compensatory intracellular osmolyte accumulation that takes time to reverse",
          options: [
            "D5W is not appropriate for hypernatremia",
            "Rapid water replacement causes water influx into brain cells (osmotic gradient), leading to CEREBRAL EDEMA and seizures; correct SLOWLY at 8-10 mEq/L per 24 hours; chronic hypernatremia triggers compensatory intracellular osmolyte accumulation that takes time to reverse",
            "Hypernatremia cannot be corrected with fluids",
            "D5W contains too much glucose"
          ],
          rationale: "Hypernatremia causes brain cell shrinkage. Rapid correction allows water influx faster than osmolytes can be lost, causing brain swelling (cerebral edema, seizures). Chronic hypernatremia (present >48h) triggers compensatory accumulation of intracellular osmolytes; removing these osmolytes takes time. Target correction: 8-10 mEq/L per 24h. Rapid correction (>10-12 mEq/L per 24h) increases risk of seizures, coma, death."
        },
        {
          id: "sod-mk-003",
          q: "A hospitalized patient with SIADH has Na 115, asymptomatic. Serum osmolarity 230, urine osmolarity 680 (inappropriately concentrated). What is the SAFEST initial treatment approach?",
          a: "Fluid restriction (NOT hypertonic saline initially) — if patient is asymptomatic, slow correction is safer; hypertonic saline risks osmotic demyelination syndrome if correction too rapid",
          options: [
            "Hypertonic saline immediately",
            "Fluid restriction (NOT hypertonic saline initially) — if patient is asymptomatic, slow correction is safer; hypertonic saline risks osmotic demyelination syndrome if correction too rapid",
            "Normal saline only",
            "No treatment; asymptomatic patient will auto-correct"
          ],
          rationale: "SIADH-induced hyponatremia with NO SYMPTOMS can be managed conservatively with fluid restriction (usually 600-800mL/day). Hypertonic saline is reserved for SYMPTOMATIC hyponatremia (seizures, altered mental status, coma). The risk-benefit favors conservative management in asymptomatic patient. If symptoms develop (seizure), then hypertonic saline becomes appropriate. SIADH is usually self-limited (viral illness, medications); treat underlying cause."
        },
        {
          id: "sod-mk-004",
          q: "A patient on vaptans (V2-receptor antagonists) for SIADH refractory to fluid restriction has Na rising from 108 to 122 in 18 hours. Labs show Na increasing 14 mEq/L in 24 hours. What is the PRIORITY nursing action?",
          a: "SLOW the sodium correction rate — current correction is too FAST (>10 mEq/L per 24h) and risks osmotic demyelination syndrome even with vaptans; reduce vaptan dose or temporarily hold, increase sodium intake cautiously, recheck Na q4-6h",
          options: [
            "Continue vaptans at current dose; faster correction is better",
            "SLOW the sodium correction rate — current correction is too FAST (>10 mEq/L per 24h) and risks osmotic demyelination syndrome even with vaptans; reduce vaptan dose or temporarily hold, increase sodium intake cautiously, recheck Na q4-6h",
            "Give hypertonic saline to speed up correction",
            "No action needed; patient is improving"
          ],
          rationale: "Vaptans work by blocking V2-receptors and increasing free water excretion, BUT they can OVERCORRECT sodium if not monitored. ODS risk remains even with vaptans. Correction rate >10-12 mEq/L per 24h is DANGEROUS regardless of therapy. This patient's rate of 14 mEq/L in 18h is TOO FAST. Management: (1) Reduce vaptan dose or hold temporarily, (2) Monitor Na q4-6h, (3) Target 8-10 mEq/L per 24h, (4) Educate patient about salt/fluid intake to modulate correction rate."
        },
        {
          id: "sod-mk-005",
          q: "A patient with CNS infection (meningitis) develops hyponatremia (Na 122) with SIADH. He requires fluid restriction for hyponatremia management BUT the medical team is concerned about his mental status. What is the clinical challenge here and how should it be balanced?",
          a: "SIADH from CNS infection requires fluid restriction BUT this patient also needs adequate cerebral perfusion and hydration for recovery from meningitis — balance fluid restriction AGAINST infection treatment needs; use hypertonic saline cautiously if Na <120 or symptomatic to raise Na while maintaining adequate perfusion",
          options: [
            "Aggressive fluid restriction regardless of infection severity",
            "SIADH from CNS infection requires fluid restriction BUT this patient also needs adequate cerebral perfusion and hydration for recovery from meningitis — balance fluid restriction AGAINST infection treatment needs; use hypertonic saline cautiously if Na <120 or symptomatic to raise Na while maintaining adequate perfusion",
            "No fluid restriction; let SIADH resolve on its own",
            "Fluid restriction alone will not help with meningitis"
          ],
          rationale: "This is a clinical dilemma: SIADH requires fluid restriction, but CNS infection requires adequate hydration for cerebral perfusion and antibiotic delivery. Management requires BALANCE: (1) Moderate fluid restriction (800-1000mL/day, not severe), (2) Monitor Na closely q6-8h, (3) If Na <120 or BECOMES symptomatic, use hypertonic saline cautiously, (4) Treat underlying infection aggressively, (5) Consider vaptans if SIADH severe, (6) Once CNS infection resolves, SIADH usually resolves."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  {
    id: "potassium-imbalances",
    label: "Potassium Imbalances: Cardiac Effects",
    sets: {
      mustKnow: [
        {
          id: "pot-mk-001",
          q: "A dialysis patient with K 6.8 and EKG showing peaked T-waves develops chest tightness. Vital signs: BP 128/82, HR 74, RR 16. Which intervention MUST be done FIRST before removing potassium?",
          a: "Give calcium gluconate 10% 10-20mL IV — stabilizes cardiac membrane to prevent dysrhythmias; this buys time for insulin/glucose to shift K into cells and dialysis to remove it",
          options: [
            "Start dialysis immediately to remove potassium",
            "Give calcium gluconate 10% 10-20mL IV — stabilizes cardiac membrane to prevent dysrhythmias; this buys time for insulin/glucose to shift K into cells and dialysis to remove it",
            "Give insulin/glucose immediately without calcium",
            "Sodium bicarbonate only"
          ],
          rationale: "Calcium is CARDIOPROTECTIVE and given FIRST for EKG changes (peaked T-waves, widened QRS, loss of P-wave). It stabilizes the cardiac membrane, preventing fatal dysrhythmias. Calcium takes effect in 1-3 minutes. Then use: (1) Insulin + glucose (shifts K into cells, takes 10-20 min), (2) Albuterol nebulized (shifts K into cells), (3) Sodium bicarbonate if acidotic, (4) Dialysis removes K (definitive). Order: Calcium → Insulin/Glucose/Albuterol → Sodium bicarbonate → Dialysis."
        },
        {
          id: "pot-mk-002",
          q: "A patient with rhabdomyolysis-induced hyperkalemia (K 7.2) receives aggressive IV hydration and loop diuretics. ABG shows pH 7.25 (metabolic acidosis). Despite insulin + glucose, K remains high. Why is the acidosis preventing K correction and what must be done?",
          a: "Acidosis causes H to shift out of cells and K to shift out (electrical neutrality) — this OPPOSES insulin/glucose effects; correct acidosis with sodium bicarbonate IV to allow K-shifting therapies to work effectively",
          options: [
            "Acidosis is unrelated to potassium shifts",
            "Acidosis causes H to shift out of cells and K to shift out (electrical neutrality) — this OPPOSES insulin/glucose effects; correct acidosis with sodium bicarbonate IV to allow K-shifting therapies to work effectively",
            "Acidosis only causes respiratory problems",
            "Acidosis helps lower potassium"
          ],
          rationale: "CRITICAL concept: Acidosis WORSENS hyperkalemia by preventing K from shifting into cells. Intracellular H accumulation displaces K extracellularly (maintains charge neutrality). Bicarbonate corrects pH, allowing K to move intracellularly. Treatment sequence for rhabdomyolysis-induced hyperkalemia with acidosis: (1) IV fluids (hydration + urine alkalinization with bicarbonate to prevent myoglobin precipitation), (2) Sodium bicarbonate for acidosis, (3) Insulin + glucose, (4) Albuterol, (5) Dialysis if needed, (6) Monitor for hyperuricemia, hyperphosphatemia, hypocalcemia."
        },
        {
          id: "pot-mk-003",
          q: "A patient on digoxin develops hypokalemia (K 3.0) with premature ventricular contractions (PVCs). Why is this patient at HIGHER RISK than other hypokalemic patients with the same K level?",
          a: "Digoxin toxicity is ENHANCED by hypokalemia — low K increases myocardial sensitivity to digoxin, causing dangerous dysrhythmias (PVCs, atrial fibrillation, AV block); K must be corrected urgently",
          options: [
            "Digoxin toxicity is unrelated to potassium levels",
            "Digoxin toxicity is ENHANCED by hypokalemia — low K increases myocardial sensitivity to digoxin, causing dangerous dysrhythmias (PVCs, atrial fibrillation, AV block); K must be corrected urgently",
            "PVCs are not serious in digoxin patients",
            "Digoxin protects against hypokalemia"
          ],
          rationale: "Hypokalemia + digoxin = DANGEROUS combination. Low K increases myocardial sensitivity to digoxin, predisposing to toxic arrhythmias. A K of 3.0 in digoxin patient is MORE DANGEROUS than in non-digoxin patient. PVCs are a sign of possible digoxin toxicity. Management: (1) Check digoxin level (normal 0.5-2.0 ng/mL), (2) Correct K urgently (IV if needed), (3) Hold digoxin if level elevated or symptomatic, (4) Monitor EKG continuously, (5) Check Mg and Ca (also affect digoxin sensitivity)."
        },
        {
          id: "pot-mk-004",
          q: "A post-transplant patient on tacrolimus develops the triad: hyponatremia (Na 120), hyperkalemia (K 6.5), and metabolic acidosis (pH 7.30). These seem unrelated but have ONE common cause. What is the mechanism and what is it called?",
          a: "Type IV renal tubular acidosis (RTA) from tacrolimus-induced hypoaldosteronism — causes Na wasting (hyponatremia), K retention (hyperkalemia), and acid retention (metabolic acidosis) SIMULTANEOUSLY",
          options: [
            "Three separate unrelated problems",
            "Type IV renal tubular acidosis (RTA) from tacrolimus-induced hypoaldosteronism — causes Na wasting (hyponatremia), K retention (hyperkalemia), and acid retention (metabolic acidosis) SIMULTANEOUSLY",
            "Sepsis",
            "Medication error with overdose"
          ],
          rationale: "Tacrolimus causes selective HYPOALDOSTERONISM by reducing aldosterone production/effect. Aldosterone is critical for: (1) Na reabsorption (↓ aldosterone → Na wasting → hyponatremia), (2) K excretion (↓ aldosterone → K retention → hyperkalemia), (3) H+ excretion (↓ aldosterone → H retention → metabolic acidosis). The triad is TYPE IV RTA. Management: (1) Monitor Na, K, acid-base closely, (2) May need to reduce tacrolimus dose, (3) Add mineralocorticoid (fludrocortisone) if severe, (4) Dietary K restriction, (5) Sodium supplementation."
        },
        {
          id: "pot-mk-005",
          q: "A patient with Addison's disease (adrenal insufficiency) presents with hypotension (BP 88/52), severe hypokalemia (K 2.6), and hyponatremia (Na 118). What is the PRIORITY treatment sequence?",
          a: "FIRST: IV fluids with NORMAL SALINE (not D5W) to restore intravascular volume and correct Na; SECOND: IV potassium replacement (carefully with cardiac monitoring); THIRD: Immediate corticosteroid replacement (hydrocortisone) to treat adrenal crisis",
          options: [
            "Potassium replacement first, then fluids",
            "FIRST: IV fluids with NORMAL SALINE (not D5W) to restore intravascular volume and correct Na; SECOND: IV potassium replacement (carefully with cardiac monitoring); THIRD: Immediate corticosteroid replacement (hydrocortisone) to treat adrenal crisis",
            "Fluids with D5W (hypotonic)",
            "Steroids only; no fluid replacement needed"
          ],
          rationale: "Addisonian crisis combines: hypotension (hypovolemia from Na wasting), severe hypokalemia (aldosterone deficiency), hyponatremia (cortisol + aldosterone deficiency). Treatment sequence: (1) IV saline (NOT hypotonic) to restore volume and correct Na, (2) IV K+ replacement with continuous cardiac monitoring (high risk of dysrhythmias), (3) IMMEDIATE IV hydrocortisone 100mg stat then q6-8h (treat cortisol/aldosterone deficiency), (4) Dextrose-containing fluids only AFTER Na corrected and steroids started (initial fluid should be saline). Do NOT use hypotonic fluids initially (worsens hyponatremia)."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  {
    id: "calcium-magnesium-imbalances",
    label: "Calcium & Magnesium: Critical Electrolyte Management",
    sets: {
      mustKnow: [
        {
          id: "cal-mk-001",
          q: "A patient presents with tetany, positive Trousseau sign (hand spasm with BP cuff inflation), and perioral paresthesias. Which electrolyte abnormality is MOST likely and what is the IMMEDIATE management?",
          a: "Hypocalcemia (total Ca <8.5 or ionized Ca <4.5) causing neuromuscular hyperexcitability; give calcium gluconate 10% IV 10-20mL cautiously over 2-5 minutes with continuous cardiac monitoring; check simultaneously for hypomagnesemia and hypokalemia (cofactors)",
          options: [
            "Hyperkalemia",
            "Hypocalcemia (total Ca <8.5 or ionized Ca <4.5) causing neuromuscular hyperexcitability; give calcium gluconate 10% IV 10-20mL cautiously over 2-5 minutes with continuous cardiac monitoring; check simultaneously for hypomagnesemia and hypokalemia (cofactors)",
            "Low magnesium only",
            "High sodium"
          ],
          rationale: "Trousseau sign (hand tetany with BP cuff) is CLASSIC for hypocalcemia. Reflects increased neuronal excitability from low extracellular Ca. Management: (1) IV calcium gluconate (cardiac monitoring essential — hyperkalemia + hypocal = dysrhythmia risk), (2) Check Mg simultaneously (Mg is cofactor for Ca/K handling), (3) Identify cause (hypoparathyroidism, hypomagnesemia, alkalosis, vitamin D deficiency), (4) Oral calcium supplementation after IV, (5) Treat underlying cause."
        },
        {
          id: "cal-mk-002",
          q: "A patient with hypercalcemia (12.1 mg/dL) and new acute kidney injury (Cr 2.2) receives BOTH thiazide and loop diuretics by mistake. Why is this drug combination inappropriate and dangerous?",
          a: "Thiazide diuretics INCREASE calcium reabsorption in the proximal tubule — they OPPOSE treatment and will fail to lower calcium; ONLY loop diuretics should be used for hypercalcemia; reverse the thiazide immediately",
          options: [
            "All diuretics are equally effective for hypercalcemia",
            "Thiazide diuretics INCREASE calcium reabsorption in the proximal tubule — they OPPOSE treatment and will fail to lower calcium; ONLY loop diuretics should be used for hypercalcemia; reverse the thiazide immediately",
            "Loop diuretics alone are ineffective",
            "Diuretics have no effect on calcium"
          ],
          rationale: "CRITICAL error: Thiazide diuretics INCREASE proximal tubule calcium reabsorption (opposite of what's needed). Using both together is self-defeating and will FAIL to lower calcium. For hypercalcemia: (1) STOP thiazide immediately, (2) Use LOOP diuretics only, (3) Aggressive IV hydration (saline first-line), (4) Address underlying cause (PTH, malignancy, granulomas), (5) Consider bisphosphonates or calcitonin if refractory. This patient's AKI worsens the situation (reduced Ca excretion) — may need dialysis."
        },
        {
          id: "cal-mk-003",
          q: "A patient with severe hypocalcemia (Ca 6.8) from pancreatitis is being treated with IV calcium. Labs also show high phosphate (PO4 6.2). Why is aggressive calcium repletion dangerous in this situation?",
          a: "In pancreatitis, high PO4 × low Ca = precipitation risk; giving Ca increases risk of calcium phosphate deposition in soft tissues (saponification) and worsening AKI — MUST lower PO4 FIRST before correcting Ca",
          options: [
            "Calcium supplementation is always safe",
            "In pancreatitis, high PO4 × low Ca = precipitation risk; giving Ca increases risk of calcium phosphate deposition in soft tissues (saponification) and worsening AKI — MUST lower PO4 FIRST before correcting Ca",
            "Phosphate is unrelated to calcium",
            "Calcium should never be given with pancreatitis"
          ],
          rationale: "Pancreatitis causes hypocalcemia from saponification (Ca × PO4 precipitation into fatty tissue). High phosphate + IV calcium = WORSE saponification, soft tissue damage, and worsening AKI. Management: (1) Lower PO4 FIRST (dialysis, phosphate binders), (2) Once PO4 lower, then cautiously give IV calcium, (3) Monitor kidney function closely, (4) Treat underlying pancreatitis, (5) Magnesium replacement (often co-deficient)."
        },
        {
          id: "mag-mk-001",
          q: "A patient with Crohn's disease and diarrhea x 5 days develops weakness, cramping, and EKG changes. Labs: K 2.8 (low), Mg 1.4 (low), Ca 7.2 (low), phosphate normal. You give potassium supplementation but K remains low. Why is supplementing only potassium insufficient?",
          a: "Hypomagnesemia prevents K and Ca uptake/retention in cells because Mg is a COFACTOR for Na-K-ATPase; all THREE electrolytes must be repleted simultaneously — refractory K hypokalemia/hypocalcemia always suggests Mg deficiency",
          options: [
            "Potassium supplementation is always sufficient",
            "Hypomagnesemia prevents K and Ca uptake/retention in cells because Mg is a COFACTOR for Na-K-ATPase; all THREE electrolytes must be repleted simultaneously — refractory K hypokalemia/hypocalcemia always suggests Mg deficiency",
            "Diarrhea doesn't affect minerals",
            "Only calcium needs to be repleted"
          ],
          rationale: "Magnesium is the 'GATEKEEPER' electrolyte: it's a cofactor for (1) Na-K-ATPase (K handling), (2) Ca channels (Ca handling), (3) Multiple enzymes. Without Mg, K and Ca supplementation fail. Diarrhea loses all three. CRITICAL: (1) Always check Mg when K/Ca are low, (2) Replete Mg FIRST or CONCURRENTLY, (3) K/Ca repletion will fail if Mg stays low, (4) Mg replacement takes time (slow repletion). Management: IV magnesium sulfate if severe, oral magnesium supplement if mild."
        },
        {
          id: "mag-mk-002",
          q: "A patient develops torsades de pointes arrhythmia with EKG showing prolonged QT interval. Lab results: Ca normal, K normal (4.2), Mg 1.3 (low). What is the most likely cause and what is the IMMEDIATE treatment?",
          a: "Hypomagnesemia causes prolonged QT and torsades de pointes — magnesium is critical for cardiac repolarization; give magnesium sulfate 1-2g IV STAT as life-saving antiarrhythmic; also check for QT-prolonging drugs (some antibiotics, antipsychotics, antiemetics)",
          options: [
            "Hyperkalemia causing arrhythmia",
            "Hypomagnesemia causes prolonged QT and torsades de pointes — magnesium is critical for cardiac repolarization; give magnesium sulfate 1-2g IV STAT as life-saving antiarrhythmic; also check for QT-prolonging drugs (some antibiotics, antipsychotics, antiemetics)",
            "Long QT syndrome genetic",
            "No treatment needed"
          ],
          rationale: "Hypomagnesemia is often OVERLOOKED because K and Ca are normal. But Mg regulates cardiac repolarization. Even mild Mg deficiency can cause torsades de pointes (polymorphic VT). This is frequently missed because providers check K/Ca but not Mg. Management: (1) Magnesium sulfate 1-2g IV STAT, (2) Continuous cardiac monitoring, (3) Identify cause (diuretics, diarrhea, PPIs reduce Mg absorption), (4) Check for QT-prolonging drugs, (5) Avoid triggers (correction of electrolytes too quickly can paradoxically worsen), (6) Replete Mg to >2.0 mEq/L."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  /* ========== WEEK 3: PERIOPERATIVE NURSING ========== */
  {
    id: "preoperative-assessment-prep",
    label: "Preoperative Assessment & Optimization",
    sets: {
      mustKnow: [
        {
          id: "preop-mk-001",
          q: "A patient scheduled for elective laparoscopic surgery presents with a FULL STOMACH (ate breakfast 2 hours ago). Surgery scheduled for 1 hour. Current vitals stable. What is the BEST action?",
          a: "POSTPONE surgery — NPO guidelines (8 hours for food, 2 hours for clear liquids) must be followed; aspiration risk during anesthesia outweighs urgency of elective procedure; reschedule for another day",
          options: [
            "Proceed with surgery; anesthesia will manage airway",
            "POSTPONE surgery — NPO guidelines (8 hours for food, 2 hours for clear liquids) must be followed; aspiration risk during anesthesia outweighs urgency of elective procedure; reschedule for another day",
            "Give antacids and proceed",
            "Use regional anesthesia instead to avoid intubation"
          ],
          rationale: "NPO requirements exist for SAFETY. Full stomach during anesthesia increases aspiration risk to gastric contents (pneumonia, ARDS, death). For ELECTIVE surgery, NPO violation is reason to cancel and reschedule. Anesthesia cannot 'guarantee' aspiration won't happen. Regional anesthesia alone may be option but requires careful airway assessment. Best action: reschedule."
        },
        {
          id: "preop-mk-002",
          q: "During pre-op assessment, patient reports prior allergic reaction to propofol (pruritis and swelling 10 years ago) when he received general anesthesia. Anesthesia plans general anesthesia with propofol. What PRECAUTION is essential?",
          a: "Propofol allergy requires AVOIDANCE; use alternative anesthetics (etomidate, ketamine) for induction; inform anesthesia team of allergy, stock emergency medications (epinephrine), have airway equipment ready",
          options: [
            "Propofol can be used if dose is reduced",
            "Propofol allergy requires AVOIDANCE; use alternative anesthetics (etomidate, ketamine) for induction; inform anesthesia team of allergy, stock emergency medications (epinephrine), have airway equipment ready",
            "Propofol allergy is not serious",
            "Regional anesthesia is the only option"
          ],
          rationale: "Propofol allergy (though rare) can range from mild pruritis to anaphylaxis. Any documented allergy means AVOIDANCE. Previous reaction (10 years ago) suggests IgE-mediated hypersensitivity — re-exposure risks severe reaction. Management: (1) Document allergy clearly, (2) Use alternative agents (etomidate, ketamine), (3) Stock emergency meds, (4) Have airway equipment ready, (5) Consider pre-medication with antihistamines/steroids, (6) Regional anesthesia if appropriate for surgery."
        },
        {
          id: "preop-mk-003",
          q: "A 42-year-old with history of arthritis and GERD is scheduled for exploratory laparotomy. Medications: ibuprofen daily, omeprazole daily, atorvastatin, clopidogrel (for prior MI 2 years ago). Pre-op instruction said 'hold all meds.' Which medication should NOT have been held and why?",
          a: "Clopidogrel hold timing must be decided with surgeon/anesthesia based on urgency — abrupt cessation increases thrombotic risk; NSAID should be held (bleeding risk); atorvastatin continuation generally recommended",
          options: [
            "Omeprazole — should be continued",
            "Clopidogrel hold timing must be decided with surgeon/anesthesia based on urgency — abrupt cessation increases thrombotic risk; NSAID should be held (bleeding risk); atorvastatin continuation generally recommended",
            "Atorvastatin — should be held",
            "All should be held"
          ],
          rationale: "Pre-op medication management requires nuance: (1) Clopidogrel — risk of discontinuation (thrombosis) vs benefit (reduced bleeding). Timing depends on surgery urgency. Patient with recent MI (2 years) is STILL at thrombotic risk. Holding should be surgeon/anesthesia decision, not blanket. (2) NSAIDs — hold (bleeding risk). (3) Omeprazole — can continue (GI protection). (4) Atorvastatin — generally continue (cardiovascular protection). CRITICAL: Do not give generic 'hold all meds' instruction."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  {
    id: "malignant-hyperthermia-recognition",
    label: "Malignant Hyperthermia: Recognition & Emergency Response",
    sets: {
      mustKnow: [
        {
          id: "mh-mk-001",
          q: "During general anesthesia with isoflurane and succinylcholine, the patient's masseter muscles suddenly tighten (jaw clenching). Patient is otherwise stable. Temperature still 37.1°C. Is this malignant hyperthermia and what is the action?",
          a: "Masseter rigidity (trismus) is an EARLY warning sign of MH — DO NOT WAIT for fever; STOP succinylcholine and volatile anesthetic IMMEDIATELY, hyperventilate 100% O2, notify anesthesia, prepare for potential dantrolene",
          options: [
            "No, this is normal muscle relaxation; continue",
            "Masseter rigidity (trismus) is an EARLY warning sign of MH — DO NOT WAIT for fever; STOP succinylcholine and volatile anesthetic IMMEDIATELY, hyperventilate 100% O2, notify anesthesia, prepare for potential dantrolene",
            "Allergic reaction only",
            "Always wait for fever to confirm MH"
          ],
          rationale: "Masseter rigidity is an EARLY and SENSITIVE sign of MH susceptibility. Do NOT wait for temperature elevation (that's LATE). Immediate management: (1) STOP triggering agents (succinylcholine, volatile anesthetics), (2) Hyperventilate with 100% O2, (3) Notify anesthesia immediately, (4) Prepare dantrolene, (5) Continue surgery with non-triggering agents if emergency, or abort if possible, (6) Monitor closely for fulminant MH (fever, muscle rigidity, rhabdomyolysis, DIC)."
        },
        {
          id: "mh-mk-002",
          q: "What is the single MOST sensitive EARLY sign of malignant hyperthermia that should raise immediate clinical suspicion BEFORE fever develops?",
          a: "Elevated end-tidal CO2 (ETCO2) — indicates hypermetabolism from uncontrolled muscle metabolism; ETCO2 elevation is EARLY, fever is LATE and indicates crisis is already advanced",
          options: [
            "Fever >104°F",
            "Elevated end-tidal CO2 (ETCO2) — indicates hypermetabolism from uncontrolled muscle metabolism; ETCO2 elevation is EARLY, fever is LATE and indicates crisis is already advanced",
            "Cyanosis",
            "Loss of consciousness"
          ],
          rationale: "MH causes hypermetabolism → accelerated CO2 production from uncontrolled muscle metabolism. ETCO2 RISES FIRST (within minutes), BEFORE temperature rises. Fever is a LATE sign (indicates severity). ETCO2 monitoring is CRITICAL in anesthesia. Any UNEXPLAINED rise in ETCO2 during anesthesia should trigger MH suspicion. Other signs in order: (1) ↑ETCO2 (earliest), (2) Muscle rigidity, (3) ↑ Temperature (late), (4) Dysrhythmias, (5) Rhabdomyolysis, (6) DIC, (7) Hyperkalemia, (8) Acute kidney injury."
        },
        {
          id: "mh-mk-003",
          q: "What does the 'P' in STOP-MH mnemonic stand for and why is it CRITICAL?",
          a: "'P' = Prepare dantrolene sodium 2.5 mg/kg IV — dantrolene is the ONLY specific treatment for MH; it blocks calcium release in muscle, stopping hypermetabolism; every minute of delay worsens outcome",
          options: [
            "Position the patient",
            "'P' = Prepare dantrolene sodium 2.5 mg/kg IV — dantrolene is the ONLY specific treatment for MH; it blocks calcium release in muscle, stopping hypermetabolism; every minute of delay worsens outcome",
            "Phenylephrine administration",
            "Prophylactic antibiotics"
          ],
          rationale: "STOP-MH: (1) Stop triggering agents, (2) Terminate anesthesia/surgery, (3) Oxygen 100%, (4) Prepare dantrolene. Dantrolene is LIFE-SAVING. It's the ONLY drug that stops the underlying problem (calcium-induced muscle contraction). Every moment counts. It must be mixed from powder (takes 3-5 min per vial). Hospitals MUST stock dantrolene readily available. Initial dose: 2.5 mg/kg IV push, repeat every 5 minutes until signs resolve, max 10 mg/kg."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  {
    id: "malignant-hyperthermia-management",
    label: "Malignant Hyperthermia: Dantrolene Management & Post-Crisis Care",
    sets: {
      mustKnow: [
        {
          id: "mh-m-mk-001",
          q: "A patient with FAMILY HISTORY of 'anesthesia problems' is scheduled for elective surgery. What is the most important pre-operative question to ask and why?",
          a: "'Has anyone in your family had problems during or after surgery, or had high fever during anesthesia?' — Family history of anesthesia complications is the STRONGEST risk factor for MH; identifying risk allows modified anesthetic plan (avoid triggering agents)",
          options: [
            "'Do you get nervous with doctors?'",
            "'Has anyone in your family had problems during or after surgery, or had high fever during anesthesia?' — Family history of anesthesia complications is the STRONGEST risk factor for MH; identifying risk allows modified anesthetic plan (avoid triggering agents)",
            "'Have you ever had surgery before?'",
            "'Do you take medications?'"
          ],
          rationale: "Family history is the STRONGEST MH risk factor (autosomal dominant pattern). Early identification allows: (1) Non-triggering anesthetic plan (propofol, opioids, non-depolarizing paralytics, local/regional anesthesia), (2) Use of dantrolene preoperatively in some protocols, (3) Avoidance of succinylcholine + volatile agents, (4) Increased vigilance with ETCO2 monitoring. Patients with family history should get MRI muscle testing to confirm/exclude MH susceptibility."
        },
        {
          id: "mh-m-mk-002",
          q: "A patient develops MH crisis during surgery. Dantrolene is ordered STAT. The OR pharmacy says 'we don't stock dantrolene regularly — it takes 30 minutes to get from hospital pharmacy.' What is the critical consequence of this delay?",
          a: "Dantrolene must be prepared from powder vials (3-5 min per vial); without immediate access, heat production cannot be stopped, rhabdomyolysis worsens → cardiac arrest likely; this is a HOSPITAL SAFETY ISSUE — dantrolene MUST be immediately available in ORs",
          options: [
            "Delays are acceptable; other drugs can substitute",
            "Dantrolene must be prepared from powder vials (3-5 min per vial); without immediate access, heat production cannot be stopped, rhabdomyolysis worsens → cardiac arrest likely; this is a HOSPITAL SAFETY ISSUE — dantrolene MUST be immediately available in ORs",
            "Other drugs can substitute for dantrolene",
            "Delay only causes minor complications"
          ],
          rationale: "Dantrolene is the ONLY effective treatment for MH. Mortality dramatically increases with delays. All ORs MUST stock dantrolene in a rapid-access location (e.g., pre-loaded crash carts). Hospitals failing to stock dantrolene immediately available are negligent. This is a CRITICAL patient safety issue. Without dantrolene: (1) Hypermetabolism continues, (2) Temperature rises uncontrollably, (3) Rhabdomyolysis worsens, (4) Hyperkalemia → cardiac dysrhythmias, (5) DIC develops, (6) Cardiac arrest → death."
        },
        {
          id: "mh-m-mk-003",
          q: "A patient develops MH crisis. After stopping triggering agents, he receives dantrolene 2.5 mg/kg IV. 5 minutes later, muscles still rigid, ETCO2 still elevated at 60, temperature 39.8°C. What is the NEXT dantrolene dose?",
          a: "Repeat dantrolene 2.5 mg/kg IV immediately and continue every 5 minutes until signs resolve (↓ETCO2, ↓ muscle rigidity, ↓temp), maximum 10 mg/kg total dose",
          options: [
            "Wait another 10 minutes",
            "Repeat dantrolene 2.5 mg/kg IV immediately and continue every 5 minutes until signs resolve (↓ETCO2, ↓ muscle rigidity, ↓temp), maximum 10 mg/kg total dose",
            "Give propofol instead",
            "No additional dantrolene needed"
          ],
          rationale: "Dantrolene dosing protocol: (1) Initial: 2.5 mg/kg IV push, (2) If no response in 5 min: repeat 2.5 mg/kg, (3) Continue repeating q5min, (4) Maximum: 10 mg/kg total cumulative dose. Endpoints for stopping: (1) ETCO2 normalized, (2) Muscle rigidity resolved, (3) Temperature stabilized, (4) Rhabdomyolysis/ DIC markers improve. Most MH episodes respond to 2-3 doses, but some need up to 10 mg/kg."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  {
    id: "postoperative-pacu-complications",
    label: "Postoperative PACU: Recognition & Management of Complications",
    sets: {
      mustKnow: [
        {
          id: "pacu-mk-001",
          q: "In the PACU, a patient extubated 30 minutes ago develops respiratory distress, stridor, and drooling. Vitals: HR 128, BP 165/95, SpO2 88%, RR 32. Most recent anesthesia was spinal block (not general). What is this complication and what is the action?",
          a: "Post-extubation laryngeal edema or laryngospasm — may have been triggered by aggressive suctioning or tube-related trauma; assess airway urgently (listen for stridor, check for angioedema), have airway equipment ready, consider nebulized epinephrine, notify anesthesia/ENT",
          options: [
            "Normal post-extubation response; monitor only",
            "Post-extubation laryngeal edema or laryngospasm — may have been triggered by aggressive suctioning or tube-related trauma; assess airway urgently (listen for stridor, check for angioedema), have airway equipment ready, consider nebulized epinephrine, notify anesthesia/ENT",
            "Fever only",
            "Hypercarbia only"
          ],
          rationale: "Post-extubation stridor indicates laryngeal obstruction. Etiologies: (1) Edema from intubation trauma (most common), (2) Laryngospasm, (3) Vocal cord injury, (4) Anaphylaxis (if rapid onset with other signs). Management: (1) Assess airway (listen, look for angioedema), (2) Have airway equipment ready (reintubation kit, cricothyrotomy setup), (3) Nebulized racemic epinephrine (reduces edema), (4) Sterile humidified oxygen, (5) Notify anesthesia/ENT, (6) Monitor closely (stridor at rest is concerning; may need reintubation)."
        },
        {
          id: "pacu-mk-002",
          q: "A post-op patient reports inability to pass urine 6 hours after spinal anesthesia. Bladder is palpable/distended above pubic symphysis. Vital signs stable. What is the mechanism and what is the nursing action?",
          a: "Spinal anesthesia temporarily blocks parasympathetic nerves → urinary retention; straight catheterization (or Foley if unable to void post-removal) is needed to prevent bladder distention and damage",
          options: [
            "Wait 24 hours for spontaneous voiding",
            "Spinal anesthesia temporarily blocks parasympathetic nerves → urinary retention; straight catheterization (or Foley if unable to void post-removal) is needed to prevent bladder distention and damage",
            "Give diuretics to force urination",
            "Do nothing; patient will void eventually"
          ],
          rationale: "Spinal anesthesia blocks sacral parasympathetic fibers (S2-S4), temporarily paralyzing bladder detrusor muscle. Catheterization prevents: (1) Bladder overdistention, (2) Detrusor muscle damage from stretching, (3) Post-void residual volumes. Management: (1) Assess bladder fullness (distention, palpation, ultrasound), (2) Catheterize if >500mL retained or patient uncomfortable, (3) If Foley used, remove once patient can void, (4) Encourage voiding (position, privacy, warm fluids), (5) Spinal effects usually resolve within 4-8 hours."
        },
        {
          id: "pacu-mk-003",
          q: "A 68-year-old with COPD (baseline SpO2 88%) is in pre-op holding. Anesthesia gives morphine 10mg IM. 15 minutes later, SpO2 drops to 82%, patient drowsy. What is the PRIORITY action?",
          a: "Apply supplemental oxygen IMMEDIATELY; consider naloxone if severe respiratory depression — morphine depresses respiratory drive, especially dangerous in COPD patients who depend on hypoxic respiratory drive",
          options: [
            "Wait and observe",
            "Apply supplemental oxygen IMMEDIATELY; consider naloxone if severe respiratory depression — morphine depresses respiratory drive, especially dangerous in COPD patients who depend on hypoxic respiratory drive",
            "Give more morphine",
            "Call surgeon to cancel"
          ],
          rationale: "CRITICAL: COPD patients depend on HYPOXIC DRIVE (low O2 triggers breathing). Morphine suppresses respiratory center. This patient is in RESPIRATORY CRISIS. Management: (1) Oxygen STAT (increases SpO2), (2) Position upright, (3) Stimulate patient, (4) If severe respiratory depression (RR <8, SpO2 not improving): naloxone 0.4-0.8mg IV/IM (reverses opioid), (5) Notify anesthesia, (6) COPD patients should get reduced opioid doses or avoid pre-medication morphine."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  },

  {
    id: "postoperative-pain-analgesia",
    label: "Postoperative Pain Management & Opioid Safety",
    sets: {
      mustKnow: [
        {
          id: "pain-mk-001",
          q: "A post-op patient 2 hours from recovery has SEVERE pain (8/10) despite morphine IV given TWICE in PACU. Pain localized to operative site. Surgical dressing intact, no obvious bleeding. What is the PRIORITY action?",
          a: "Notify surgeon immediately to evaluate for complications (bleeding, hematoma, compartment syndrome, bowel perforation) — opioid-refractory pain indicates possible surgical complication, not just inadequate analgesia",
          options: [
            "Just keep giving more opioids",
            "Notify surgeon immediately to evaluate for complications (bleeding, hematoma, compartment syndrome, bowel perforation) — opioid-refractory pain indicates possible surgical complication, not just inadequate analgesia",
            "This is normal post-op pain; give time",
            "Pain score doesn't matter; reassure patient"
          ],
          rationale: "Severe pain unresponsive to adequate opioids is a RED FLAG for complications: (1) Bleeding/hematoma (expanding mass), (2) Compartment syndrome (increasing pressure), (3) Bowel perforation (peritonitis), (4) Vascular compromise (ischemic pain). Never simply escalate opioids without investigation. Surgeon MUST evaluate. Management: (1) Surgical evaluation, (2) Examine wound/extremity for signs of complications, (3) If complications ruled out: use multi-modal analgesia (regional blocks, NSAIDs, acetaminophen) rather than escalating opioids alone."
        },
        {
          id: "pain-mk-002",
          q: "A patient with severe post-op pain is on continuous epidural morphine (2 mg/h) but pain remains 7/10. Vital signs: BP 120/70, HR 82, RR 10, SpO2 92%. How should analgesia be adjusted?",
          a: "Do NOT increase epidural — RR 10 indicates respiratory depression from opioid toxicity; use multi-modal analgesia instead: regional blocks, NSAIDs, acetaminophen, avoid opioid escalation with respiratory depression",
          options: [
            "Increase epidural dose further to 3 mg/h",
            "Do NOT increase epidural — RR 10 indicates respiratory depression from opioid toxicity; use multi-modal analgesia instead: regional blocks, NSAIDs, acetaminophen, avoid opioid escalation with respiratory depression",
            "Stop all pain medication",
            "Intubate the patient"
          ],
          rationale: "Respiratory depression (RR 10) is a CEILING EFFECT limiting opioid escalation. Further opioids risk respiratory failure. Management: (1) Do NOT increase dose, (2) Use multi-modal analgesia: regional nerve blocks (peripheral/epidural), NSAIDs (ibuprofen, ketorolac if no contraindications), acetaminophen, (3) Local anesthetics at incision site, (4) If RR stays <10: consider naloxone to partially reverse, (5) Position upright, supplemental oxygen, monitor closely."
        },
        {
          id: "pain-mk-003",
          q: "A post-op patient on PCA (patient-controlled analgesia) morphine is found UNRESPONSIVE, shallow respirations (8/min), SpO2 85%. What is the IMMEDIATE action?",
          a: "Bag-valve-mask ventilation STAT, naloxone 0.4mg IV STAT to reverse opioid, notify anesthesia — this is OPIOID OVERDOSE, a medical emergency",
          options: [
            "Continue PCA as ordered",
            "Bag-valve-mask ventilation STAT, naloxone 0.4mg IV STAT to reverse opioid, notify anesthesia — this is OPIOID OVERDOSE, a medical emergency",
            "Wait for patient to wake up",
            "Give more oxygen only"
          ],
          rationale: "Opioid overdose presents with: (1) Unresponsiveness, (2) Severe respiratory depression (RR <8), (3) Hypoxemia. This is LIFE-THREATENING. Immediate management: (1) Bag-valve-mask ventilation (do NOT delay for IV access), (2) Naloxone 0.4-0.8mg IV/IM/intranasal STAT, (3) Notify anesthesia, (4) Hold PCA, (5) Continuous monitoring, (6) Be ready to repeat naloxone (half-life shorter than morphine), (7) Investigate cause: malfunction, patient confusion about dosing, previous doses not counted."
        }
      ],
      extraPractice: [],
      eaq: []
    }
  }
];
