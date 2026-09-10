/* ============================================================
   EXAM 2 JEOPARDY BANK — UPDATED
   NCLEX NGN Clinical Judgment Style Questions
   Week 2 & 3 High-Yield Content

   Difficulty: HARD — Scenario-based, no leading stems
   Format: 6 categories × 5 difficulty tiers (100-500)
   = 240 clinical judgment questions total
   ============================================================ */

window.JEOPARDY_EXAM2 = {
  "categories": [
    /* ========== WEEK 2: HEMATOLOGY & LABS ========== */
    {
      "id": "hematology-clinical",
      "name": "Hematology: Clinical Judgment",
      "source": "week2-hematology-labs.html",
      "clues": {
        "100": [
          {
            "id": "hem-100-0",
            "q": "A 62-year-old male presents with fatigue and dyspnea. Labs: Hgb 7.2, WBC 3.1, Plt 95K. MCV 68, MCHC 26. Reticulocyte count 0.3%. Which finding most concerning?",
            "a": "Pancytopenia with low reticulocyte count suggests bone marrow failure, not simple iron deficiency",
            "rationale": "All three cell lines are low with a blunted reticulocyte response — this pattern indicates marrow disease (aplastic anemia, leukemia, or severe B12 deficiency) rather than uncomplicated iron deficiency. The microcytic indices are a red herring; the pancytopenia is what signals marrow failure."
          },
          {
            "id": "hem-100-1",
            "q": "A patient on chronic warfarin presents with an INR of 9.2 and mild gum bleeding. PT 78 seconds. Which lab would best guide the need for reversal therapy?",
            "a": "Fibrinogen level and clinical bleeding assessment, not INR alone",
            "rationale": "INR >4 is elevated, but clinical significance depends on bleeding symptoms and fibrinogen — an asymptomatic patient with normal fibrinogen and isolated gum bleeding may need observation only, while active hemorrhage requires immediate reversal regardless of INR value."
          },
          {
            "id": "hem-100-2",
            "q": "A 28-year-old woman with Crohn's disease has Hgb 8.4, MCV 102, folate 2.2 (low), B12 1100 (low-normal). Which statement best guides treatment?",
            "a": "B12 deficiency in Crohn's requires parenteral B12; folate supplementation alone risks masking neurologic symptoms",
            "rationale": "Terminal ileum Crohn's disease causes B12 malabsorption requiring IM injection (not oral). Both are low, but correcting folate without B12 can mask B12's neurologic damage — B12 must be repleted first or simultaneously."
          },
          {
            "id": "hem-100-3",
            "q": "A 45-year-old with hemolytic anemia has elevated retic count (8%), LDH 950, haptoglobin <10, indirect bili 3.2. DAT (Coombs) is negative. What diagnosis is most likely?",
            "a": "Microangiopathic hemolytic anemia (MAHA) — mechanical fragmentation, not immune hemolysis",
            "rationale": "Negative DAT rules out immune hemolysis (autoimmune, alloimmunization). The hemolysis is real (elevated LDH, low haptoglobin, high retic response), so MAHA from mechanical shearing (TTP, HUS, DIC, prosthetic valve) is most likely."
          },
          {
            "id": "hem-100-4",
            "q": "During a massive transfusion protocol, a trauma patient receives 6 units PRBC in 20 minutes. INR rises from 1.2 to 2.1, aPTT 52. Plt 78K. What is the primary cause?",
            "a": "Dilutional coagulopathy from massive crystalloid/colloid and PRBC transfusion without component replacement",
            "rationale": "Rapid massive transfusion dilutes clotting factors and platelets; PRBC contains minimal plasma factors. Without concurrent FFP and platelets, coagulopathy develops from dilution, not consumption."
          },
          {
            "id": "hem-100-5",
            "q": "A patient with SCD presents with severe chest pain, fever, hypoxia, and new infiltrate on CXR. WBC 18K. Which lab most urgently guides ICU vs floor admission?",
            "a": "Arterial blood gas and chest imaging findings, which determine organ involvement and need for exchange transfusion",
            "rationale": "Acute chest syndrome in SCD can rapidly progress to ARDS and multiorgan failure. PaO2 <60, rising A-a gradient, or large infiltrates warrant ICU and exchange transfusion; mild cases may be managed on the floor with supportive care."
          },
          {
            "id": "hem-100-6",
            "q": "A 71-year-old with newly diagnosed MDS has Hgb 8.1, WBC 1.8, Plt 40K. What is the primary nursing concern that guides monitoring?",
            "a": "Infection risk from neutropenia and bleeding risk from thrombocytopenia — both require protective measures and close observation",
            "rationale": "MDS involves cytopenias that create compounded risk: low WBC invites infection despite potential fever masking; low platelets cause spontaneous bleeding. Strict hand hygiene, bleeding precautions, and frequent vital signs are essential."
          },
          {
            "id": "hem-100-7",
            "q": "A patient on clopidogrel for ACS has an aPTT of 38 and bleeding time of 14 minutes (prolonged) but normal PT. Platelet count 185K. What is the pathophysiology?",
            "a": "Platelet dysfunction from clopidogrel (P2Y12 inhibitor) — normal count but impaired function",
            "rationale": "Clopidogrel blocks platelet aggregation without changing count; aPTT can be prolonged from the anticoagulant co-medications (heparin, aspirin), but the bleeding time directly reflects platelet dysfunction — this combination is expected with dual antiplatelet therapy."
          }
        ],
        "200": [
          {
            "id": "hem-200-0",
            "q": "A 34-year-old G3P3 with postpartum hemorrhage (2.2L blood loss) has Hgb 6.8, Plt 95K, INR 1.8, fibrinogen 180. What is the immediate next step?",
            "a": "Administer FFP for hypofibrinogenemia and transfuse PRBC, then recheck coagulation studies — DIC protocol may be needed",
            "rationale": "Obstetric hemorrhage triggers DIC risk; fibrinogen <200 is abnormal and requires replacement. Combined with INR elevation and ongoing bleeding, FFP + PRBC + cryoprecipitate (for fibrinogen) is standard, with q1h labs."
          },
          {
            "id": "hem-200-1",
            "q": "A 56-year-old with cirrhosis presents with INR 8.3, albumin 1.9, and ascites. PT 95 seconds. Can fresh frozen plasma safely reverse the INR?",
            "a": "FFP alone is ineffective and risks cirrhotic decompensation — vitamin K (if deficient) plus reversal agent (PCC or direct factor replacement) is needed",
            "rationale": "Cirrhotic INR elevation is from hepatic synthetic dysfunction, not warfarin deficiency — FFP volume risks fluid overload and worsens ascites/encephalopathy. PCC (prothrombin complex concentrate) achieves reversal with minimal fluid, though the underlying liver disease remains."
          },
          {
            "id": "hem-200-2",
            "q": "A 67-year-old on rivaroxaban (factor Xa inhibitor) for AFib arrives with massive GI bleed, Hgb 5.2, INR 1.3. What reversal strategy is correct?",
            "a": "Andexanet alfa (factor Xa reversal agent) is first-line; FFP or PCC is not effective for factor Xa inhibitors",
            "rationale": "DOACs require specific reversal agents: andexanet alfa for Xa inhibitors (rivaroxaban, apixaban), idarucizumab for thrombin inhibitors (dabigatran). FFP/PCC do not reliably reverse factor Xa inhibitors."
          },
          {
            "id": "hem-200-3",
            "q": "A patient with newly diagnosed idiopathic thrombocytopenic purpura (ITP) has Plt 12K, no bleeding, and a normal bone marrow biopsy. Which treatment is indicated?",
            "a": "Observation or low-dose corticosteroids — treatment threshold for asymptomatic ITP is often ≥20K or higher if symptomatic",
            "rationale": "Plt <20K with no bleeding and confirmed ITP (normal marrow, normal Hgb/WBC) may be observed in the hospital or treated with low-dose steroids; IVIG or platelet transfusion reserved for bleeding or acute symptomatic thrombocytopenia."
          },
          {
            "id": "hem-200-4",
            "q": "A 44-year-old woman with hereditary spherocytosis (HS) presents with jaundice, splenomegaly, and hemoglobin 8.9. Retic 12%, LDH 1200, indirect bili 4.1. What is the role of splenectomy?",
            "a": "Splenectomy removes the site of RBC destruction and can increase Hgb significantly in HS, though it increases infection risk",
            "rationale": "In HS, the spleen destroys abnormal spherocytes. Splenectomy improves hemolysis, reduces transfusion need, and normalizes Hgb in many patients — but increases risk of sepsis from encapsulated organisms (need pneumococcal, Hib, meningococcal vaccines pre-op)."
          },
          {
            "id": "hem-200-5",
            "q": "A patient with G6PD deficiency presents with hemolytic crisis after taking dapsone. Labs show Hgb 7.1, WBC 18K, Hct 22%. Which medication should be immediately discontinued?",
            "a": "Dapsone (and any other oxidative stressor) — G6PD-deficient RBCs cannot handle oxidative stress and hemolyze",
            "rationale": "G6PD deficiency predisposes to hemolysis when exposed to oxidative stress (certain drugs like sulfonamides, dapsone, aspirin, antimalarials, fava beans, infection). The trigger must be removed immediately, supportive care given, and alternative medications used going forward."
          },
          {
            "id": "hem-200-6",
            "q": "A 72-year-old with stage 3 CKD (eGFR 38) and anemia (Hgb 7.6, ferritin 250, TSAT 15%) is started on ESA therapy. After 4 weeks, Hgb remains 7.8. What is the likely issue?",
            "a": "Iron deficiency limits ESA response — iron stores must be replete before ESA can effectively stimulate RBC production",
            "rationale": "ESA resistance in CKD anemia is often from iron deficiency despite normal-appearing ferritin (ferritin is an acute-phase reactant). Transferrin saturation <20% suggests functional iron deficiency; iron repletion (IV iron preferred in CKD) must precede or accompany ESA therapy."
          },
          {
            "id": "hem-200-7",
            "q": "A 38-year-old with hemophilia A on factor VIII prophylaxis develops inhibitors (Bethesda titer 15). How does this change management?",
            "a": "Bypass therapy (FEIBA, recombinant Factor VIIa) becomes first-line for bleeding; regular factor VIII is now ineffective",
            "rationale": "Inhibitors (anti-Factor VIII antibodies) render standard factor replacement ineffective. Bypass agents (FEIBA or rFVIIa) activate coagulation downstream of factor VIII. Inhibitor tolerance induction may eventually restore responsiveness to factor VIII."
          }
        ],
        "300": [
          {
            "id": "hem-300-0",
            "q": "A 58-year-old with sepsis-induced DIC has PT 48 sec, aPTT 65 sec, Plt 35K, fibrinogen 95, D-dimer >10. What is the first component to replace?",
            "a": "Cryoprecipitate for fibrinogen, then FFP, then PRBC as needed — fibrinogen must be corrected first to stop the bleeding cascade",
            "rationale": "In DIC, cryoprecipitate (fibrinogen concentrate) is first-line because it rapidly raises fibrinogen without excessive volume. Then FFP for other factors, platelets for thrombocytopenia, and PRBC for anemia — in that priority order."
          },
          {
            "id": "hem-300-1",
            "q": "A patient on heparin develops thrombocytopenia (Plt drop from 290K to 105K over 3 days) and a new DVT. What is the diagnosis and immediate management?",
            "a": "Heparin-induced thrombocytopenia (HIT) with paradoxical thrombosis — STOP heparin immediately and start direct thrombin inhibitor (argatroban or dabigatran)",
            "rationale": "HIT causes platelet consumption and paradoxically increases thrombosis risk. Heparin must be stopped and replaced with an alternative anticoagulant (NOT warfarin monotherapy) until platelet count recovers and HIT antibody testing confirms diagnosis."
          },
          {
            "id": "hem-300-2",
            "q": "A 42-year-old with antiphospholipid syndrome (APS) on warfarin (INR goal 2-3) has a recurrent VTE. What INR target is indicated?",
            "a": "INR 3-4 is recommended for APS-related thrombosis due to higher thrombotic risk despite anticoagulation",
            "rationale": "APS patients have higher thrombotic risk and often need higher INR targets (2.5-3.5 or 3-4 depending on guidelines) compared to non-APS VTE. Some require triple therapy (warfarin + LMWH + low-dose aspirin)."
          },
          {
            "id": "hem-300-3",
            "q": "A 29-year-old with SCD presents with acute pain crisis and hypoxia (SpO2 88%). Hgb is 8.1 (baseline 8.5), WBC 19K, Plt 95K. What is the best transfusion strategy?",
            "a": "Simple transfusion (not exchange) to raise Hgb toward 10, target SpO2 >90% — avoid over-transfusion that increases viscosity",
            "rationale": "Acute chest syndrome + pain crisis requires transfusion, but SCD patients need careful volume management. Simple transfusion to Hgb ~10 and oxygen therapy is often sufficient; exchange transfusion (to lower HbS to <30%) is reserved for life-threatening severity."
          },
          {
            "id": "hem-300-4",
            "q": "A 65-year-old with stage 4 CKD develops normocytic anemia (Hgb 7.2, MCV 92, retic 1.5%) despite normal iron stores. What is the pathophysiology?",
            "a": "Erythropoietin deficiency from declining renal function — the kidneys are failing to produce adequate EPO",
            "rationale": "CKD causes anemia primarily from EPO deficiency. Normal iron and low retic count confirm EPO deficiency (not iron deficiency or hemolysis). ESA therapy directly addresses the cause."
          },
          {
            "id": "hem-300-5",
            "q": "A patient with AML in remission develops sudden splenomegaly and increasing WBC (12K → 45K over 2 weeks) despite active chemotherapy. What does this suggest?",
            "a": "Leukemic relapse or emergence of a resistant clone — immediate bone marrow biopsy and flow cytometry are needed",
            "rationale": "Rising WBC with splenomegaly during therapy indicates either relapse or chemotherapy resistance. Blasts on CBC or abnormal flow cytometry confirms diagnosis; treatment regimen must be revised."
          },
          {
            "id": "hem-300-6",
            "q": "A 55-year-old with CLL has Hgb 7.8, reticulocyte count 8.5%, LDH 850, haptoglobin 12. DAT is positive. What complication is occurring?",
            "a": "Autoimmune hemolytic anemia (AIHA) secondary to CLL — high retic + positive DAT = immune hemolysis",
            "rationale": "AIHA is a known complication of CLL from T-cell dysfunction. Positive DAT (direct antiglobulin test) with high retic count and elevated LDH confirm immune hemolysis. Corticosteroids or other immunosuppression is indicated."
          },
          {
            "id": "hem-300-7",
            "q": "A 48-year-old with newly diagnosed thrombotic thrombocytopenic purpura (TTP) has Plt 18K, Hgb 6.9, Cr 2.1, temp 38.9°C, altered mental status. What is the immediate treatment?",
            "a": "Plasma exchange (plasmapheresis) — NOT platelet transfusion, which can worsen thrombotic events",
            "rationale": "TTP (pentad: thrombocytopenia, hemolytic anemia, renal dysfunction, fever, neurologic symptoms) is a medical emergency requiring urgent plasma exchange to remove ADAMTS13-blocking antibodies. Platelets worsen outcomes."
          }
        ],
        "400": [
          {
            "id": "hem-400-0",
            "q": "A 72-year-old with newly diagnosed multiple myeloma has Hgb 8.3, Cr 2.8, Ca 12.1, albumin 2.1. Serum viscosity is elevated. Which manifestation is most urgent?",
            "a": "Hyperviscosity syndrome with retinopathy/stroke risk — requires urgent plasmapheresis before chemotherapy",
            "rationale": "Hyperviscosity in myeloma creates stroke and MI risk and must be addressed immediately with plasmapheresis. Treatment of myeloma itself follows. Elevated Ca, Cr, and hypoalbuminemia are also addressed but are not as immediately life-threatening."
          },
          {
            "id": "hem-400-1",
            "q": "A 61-year-old with myelodysplastic syndrome (MDS-2) has IPSS score of 2.0 (high-risk). Hgb 7.8, WBC 3.2, Plt 65K. What is the expected median survival?",
            "a": "Approximately 9-30 months depending on cytogenetics — high-risk MDS progresses to AML in many patients",
            "rationale": "IPSS ≥1.5 is high-risk MDS; median survival is shortened and AML transformation risk is 25-35%. Allogeneic hematologic stem cell transplant may be considered depending on age, fitness, and donor availability."
          },
          {
            "id": "hem-400-2",
            "q": "A 44-year-old on warfarin (INR 2.8) for mechanical heart valve presents with INR 11.2 and epistaxis. Prothrombin time 125 seconds. What reversal agent is needed?",
            "a": "Fresh frozen plasma (FFP) 2-4 units + vitamin K 10 mg IV slowly (not IM) — prothrombin complex concentrate (PCC) if available and bleeding is severe",
            "rationale": "Supratherapeutic warfarin with bleeding requires dual reversal: FFP for immediate factor replacement + vitamin K (IM avoided due to hematoma risk) for sustained reversal. PCC is preferred over FFP if available."
          },
          {
            "id": "hem-400-3",
            "q": "A 37-year-old with paroxysmal nocturnal hemoglobinuria (PNH) develops thrombosis in the hepatic vein with Hgb drop to 7.1 and hemoglobinuria. What is the pathophysiology?",
            "a": "Uncontrolled complement activation causes hemolysis and thrombosis from platelet/WBC activation — treatment must block complement",
            "rationale": "PNH from acquired mutation in PIGA gene. Loss of complement inhibitors (CD55/CD59) allows uncontrolled C3/C5 activation → hemolysis + thrombosis (venous system especially). Eculizumab (C5 inhibitor) or newer agents (C3 inhibitors) are indicated."
          },
          {
            "id": "hem-400-4",
            "q": "A 52-year-old with congenital Factor V deficiency presents with hemarthrosis and bruising after minor trauma. Mixing study is abnormal. What management is correct?",
            "a": "Factor V concentrate (fresh frozen plasma has limited Factor V) + supportive care; bleeding prophylaxis for future trauma",
            "rationale": "Congenital Factor V deficiency (rare, 1 in 1M people) causes bleeding similar to hemophilia. FFP provides Factor V but in inadequate amounts; Factor V concentrate is preferred when available, though rare."
          },
          {
            "id": "hem-400-5",
            "q": "A 28-year-old with lupus anticoagulant (on no anticoagulation) develops DVT in the lower extremity. What is the treatment goal?",
            "a": "Long-term anticoagulation (not limited duration) with INR goal 2.0-3.0 or DOAC if thrombosis is confirmed",
            "rationale": "Lupus anticoagulant with thrombosis requires indefinite anticoagulation due to high recurrence risk. This differs from first unprovoked VTE (which may be treated for 3 months initially)."
          },
          {
            "id": "hem-400-6",
            "q": "A 61-year-old with ET (essential thrombocythemia) and Plt 880K presents with stroke despite aspirin. JAK2 mutation is positive. What is the next step?",
            "a": "Add hydroxyurea or peginterferon-α to reduce platelet burden, continue aspirin, investigate stroke etiology",
            "rationale": "High-risk ET (age >60, prior thrombosis, or high-risk mutations like JAK2) requires cytoreduction to reduce thrombotic risk. Aspirin alone is insufficient; cytoreductive agents are essential."
          },
          {
            "id": "hem-400-7",
            "q": "A 71-year-old with CML on imatinib (BCR-ABL inhibitor) develops resistance with rising WBC (145K → 240K over 4 weeks) and new blast crisis. What mutation likely explains resistance?",
            "a": "T315I mutation in the BCR-ABL kinase domain — imatinib-resistant and requires second-generation inhibitor (dasatinib, nilotinib, or ponatinib)",
            "rationale": "T315I is a common imatinib-resistance mutation. Second-generation tyrosine kinase inhibitors or ponatinib (which covers T315I) are indicated. Blast crisis is a poor prognostic sign requiring stem cell transplant consideration."
          }
        ],
        "500": [
          {
            "id": "hem-500-0",
            "q": "A 48-year-old with PV on hydroxyurea and aspirin develops thrombosis despite compliance. Jak2 V617F allele burden is 85%. What next management reduces thrombotic risk?",
            "a": "Add peginterferon-α to hydroxyurea or switch to peginterferon monotherapy — interferon may reduce allele burden and thrombotic risk more than hydroxyurea",
            "rationale": "High allele burden (>50%) in PV is a poor prognostic sign with thrombosis despite therapy. Peginterferon has been shown to reduce mutant allele burden in some patients, potentially improving outcomes over hydroxyurea."
          },
          {
            "id": "hem-500-1",
            "q": "A 59-year-old with bleeding disorder has normal PT/INR/aPTT/Plt/fibrinogen but prolonged bleeding time (22 min). Mixing study is normal. What is the likely diagnosis?",
            "a": "von Willebrand disease (vWD) or platelet dysfunction — requires von Willebrand factor assay and platelet aggregation study",
            "rationale": "Isolated prolonged bleeding time with normal standard coagulation panel suggests platelet dysfunction (qualitative defect). vWD presents this way; platelet electron microscopy or aggregation may reveal the defect."
          },
          {
            "id": "hem-500-2",
            "q": "A 33-year-old with sickle cell disease on hydroxyuea (HbF 22%) develops acute kidney injury (Cr 2.8 from baseline 0.9) and Hgb drops to 6.1. Reticulocyte count is 2.1% (lower than baseline 8-10%). What is occurring?",
            "a": "Sickle cell nephropathy with acute tubular necrosis + transient aplastic crisis — hydroxyurea is bone marrow suppressive",
            "rationale": "Low retic count in anemia during hydroxyurea + acute renal failure suggests dual pathology: drug-induced marrow suppression causing transient aplasia, plus SCD-related kidney disease. Hydroxyurea may need to be held temporarily."
          },
          {
            "id": "hem-500-3",
            "q": "A 56-year-old with newly diagnosed AML (FLT3-ITD positive) has WBC 185K, Plt 28K, LDH 2400, hyperuricemia (10.2). What is the most immediately life-threatening complication?",
            "a": "Tumor lysis syndrome (TLS) with hyperkalemia, hyperphosphatemia, and acute renal failure — prophylaxis and monitoring are urgent",
            "rationale": "AML with high burden (WBC >100K), especially with FLT3-ITD (aggressive subtype), carries extreme TLS risk. Allopurinol, IV hydration, and uric acid oxidase (rasburicase) are needed before chemotherapy to prevent hyperkalemia-induced cardiac arrest."
          },
          {
            "id": "hem-500-4",
            "q": "A 67-year-old with MPS has persistent anemia (Hgb 8.9) despite optimal iron therapy, ESA, and normal B12/folate. Ferritin 1200 (indicating iron overload). What is the underlying cause?",
            "a": "Anemia of chronic disease (ACD) combined with functional iron deficiency from hepcidin elevation — iron chelation may be needed",
            "rationale": "MPS triggers chronic inflammation (high ferritin) that raises hepcidin, blocking iron absorption despite adequate stores. Functional iron deficiency + ACD both worsen anemia. Iron chelation may paradoxically help by reducing inflammation."
          },
          {
            "id": "hem-500-5",
            "q": "A 44-year-old with severe hemophilia A (factor VIII <1%) on extended prophylaxis develops inhibitor (Bethesda 2.5). Bleeding today. What is the bypass agent of choice?",
            "a": "Recombinant Factor VIIa (rFVIIa, NovoSeven) bypasses Factor VIII by directly activating Factor X — FEIBA is alternative",
            "rationale": "Low-titer inhibitors may respond to high-dose factor VIII + IVIG, but with active bleeding, bypass agents are required. rFVIIa is preferred in many settings due to superior hemostasis vs. FEIBA in some studies, though both are acceptable."
          },
          {
            "id": "hem-500-6",
            "q": "A 51-year-old with primary amyloidosis (AL amyloid, TTR mutant) has coagulation studies showing PT 16, aPTT 48, Plt 85K, fibrinogen 210. Bleeding risk is high. Why are FFP and platelets insufficient?",
            "a": "Amyloid deposits in blood vessels impair hemostasis independent of factor replacement — direct vessel involvement requires hemostatic support but bleeding risk persists",
            "rationale": "AL amyloidosis deposits in vessel walls, causing bleeding diathesis that factor/platelet replacement cannot fully overcome. Prognosis is poor; chemotherapy targeting plasma cells is the only long-term solution."
          },
          {
            "id": "hem-500-7",
            "q": "A 68-year-old with MGUS (monoclonal protein 2.1 g/dL) develops hyperviscosity syndrome with stroke despite normal myeloma workup. What is the likely diagnosis?",
            "a": "Waldenstrom macroglobulinemia (WM) with IgM paraprotein, not multiple myeloma — IgM is larger and more viscous than IgG",
            "rationale": "IgM is pentameric and 5× larger than IgG, causing hyperviscosity at much lower levels (even <3 g/dL). WM is a B-cell lymphoma producing IgM, distinct from MM. Plasmapheresis + rituximab/chemoimmunotherapy is indicated."
          }
        ]
      }
    },

    /* ========== WEEK 2: ANEMIAS CLINICAL ========== */
    {
      "id": "anemias-advanced",
      "name": "Anemias: Advanced Clinical",
      "source": "week2-anemias.html",
      "clues": {
        "100": [
          {
            "id": "anemia-100-0",
            "q": "A 52-year-old woman with heavy menstrual bleeding has Hgb 8.2, MCV 71, ferritin 15, TIBC 480. Which intervention addresses the underlying anemia pathology?",
            "a": "Iron supplementation (oral ferrous sulfate 325 mg daily) + gynecology referral for menorrhagia treatment",
            "rationale": "Iron deficiency anemia from blood loss requires both iron replacement AND control of the bleeding source. Without treating menorrhagia, iron supplementation is a temporary fix."
          },
          {
            "id": "anemia-100-1",
            "q": "A 41-year-old with pernicious anemia (B12 50 pg/mL) reports numbness in his feet that has worsened over 3 months before diagnosis. After starting IM B12, why might neurologic symptoms persist?",
            "a": "B12 neurologic damage is often irreversible if prolonged before treatment — early myelin degeneration may not recover fully",
            "rationale": "B12 deficiency causes subacute combined degeneration (SCD) of the spinal cord. If untreated for months/years, demyelination becomes irreversible despite B12 repletion. Early recognition and treatment are crucial to prevent permanent disability."
          },
          {
            "id": "anemia-100-2",
            "q": "A 28-year-old with Crohn's disease and terminal ileum resection presents with B12 50, normal folate, neurologic symptoms. Why is oral B12 ineffective for her?",
            "a": "Intrinsic factor (produced in stomach) + terminal ileum absorption are both required — ileal resection prevents passive B12 absorption",
            "rationale": "B12 absorption requires intrinsic factor (IF) binding in the stomach + carrier-mediated absorption in the terminal ileum. Ileal resection eliminates the absorption site; parenteral B12 bypasses this defect."
          },
          {
            "id": "anemia-100-3",
            "q": "A 67-year-old woman with folate deficiency (folate 2.1) and macrocytic anemia refuses IM B12 but agrees to oral folate supplementation. What is the consequence?",
            "a": "Folate supplementation may mask B12 deficiency, allowing irreversible neurologic damage to progress unchecked",
            "rationale": "Folate can transiently improve macrocytic anemia from B12 deficiency, temporarily raising Hgb. This 'masked' B12 deficiency allows spinal cord damage to progress silently. Both B12 and folate levels MUST be checked before treating."
          },
          {
            "id": "anemia-100-4",
            "q": "A 19-year-old with newly diagnosed sickle cell disease has baseline Hgb 7.8, reticulocyte count 15%. A viral illness causes acute reticulocytopenia (retic drops to 2%). What is the immediate concern?",
            "a": "Transient aplastic crisis — viral suppression of bone marrow causes Hgb to drop acutely, risking tissue hypoxia and organ damage",
            "rationale": "In SCD, the already-stressed marrow's brief shutdown from infection causes acute anemia crisis. Hgb can drop to 3-4 within days, requiring supportive transfusion and close monitoring."
          },
          {
            "id": "anemia-100-5",
            "q": "A 34-year-old with hereditary spherocytosis (HS) develops severe hemolytic crisis with Hgb 5.2, Retic 22%, LDH 2800, indirect bili 6.1. Which treatment is first-line?",
            "a": "Supportive transfusion + IV fluids for renal protection, then steroids to reduce hemolysis acutely, followed by definitive splenectomy",
            "rationale": "Acute HS hemolytic crisis requires stabilization before definitive therapy. RBC transfusion, fluid resuscitation, and sometimes high-dose corticosteroids control the crisis; splenectomy (definitive) is scheduled after recovery."
          },
          {
            "id": "anemia-100-6",
            "q": "A 38-year-old with G6PD deficiency presents with hemolysis after starting sulfonamide antibiotics for UTI. Which statement guides discharge teaching?",
            "a": "Provide a list of medications and foods to avoid (dapsone, aspirin, sulfa drugs, fava beans) and advise G6PD testing for family members",
            "rationale": "G6PD patients must avoid oxidative triggers for life. Family screening is important because hemizygous males are at higher risk for severe hemolysis. Written lists of safe/unsafe medications/foods are essential."
          },
          {
            "id": "anemia-100-7",
            "q": "A 71-year-old with CKD stage 4 (GFR 22) on ESA therapy has Hgb 8.1, normal iron stores, normal B12/folate. Reticulocyte count is 0.8%. Why hasn't anemia improved?",
            "a": "ESA hyporesponsiveness from functional iron deficiency, chronic inflammation, or uremia — transferrin saturation should be checked",
            "rationale": "CKD anemia with inadequate ESA response despite normal ferritin suggests functional iron deficiency (hepcidin-driven) or other causes (chronic inflammation, ESA antibodies, uremia). TSAT <20% requires iron repletion."
          }
        ],
        "200": [
          {
            "id": "anemia-200-0",
            "q": "A 45-year-old with autoimmune hemolytic anemia (warm-antibody type) has Hgb 7.3, retic 18%, positive warm DAT. Bilirubin 3.1. Corticosteroids fail after 3 weeks. What is the next step?",
            "a": "Splenectomy (definitive in steroid-refractory AIHA) or rituximab (monoclonal antibody against B cells producing antibodies)",
            "rationale": "Warm AIHA responds to steroids in ~80% of cases, but 20% are steroid-refractory. Splenectomy (removes site of RBC destruction) or rituximab (depletes B cells) are next-line options with ~60-70% response rates."
          },
          {
            "id": "anemia-200-1",
            "q": "A 52-year-old with CLL develops cold-antibody AIHA (cold agglutinin disease) with Hgb 7.5 and clinical symptoms in cold weather. Why is splenectomy often ineffective?",
            "a": "Cold agglutinins bind RBCs primarily in the periphery (not spleen); IgM antibodies are too large for efficient splenic sequestration",
            "rationale": "Cold AIHA (IgM anti-RBC antibodies) activates complement in cold periphery, causing hemolysis that persists despite splenectomy. Treatment is protective cold avoidance + rituximab or chemotherapy (not surgery)."
          },
          {
            "id": "anemia-200-2",
            "q": "A 29-year-old with SCD has baseline Hgb 8.3. He develops fever (38.9°C), WBC 24K, chest pain, hypoxia (SpO2 87%). CXR shows new infiltrate. What is the diagnosis and treatment?",
            "a": "Acute chest syndrome (ACS) — exchange transfusion (target HbS <30%) + oxygen + supportive care, not simple transfusion",
            "rationale": "ACS in SCD is a medical emergency with high mortality. Exchange transfusion (not simple transfusion) rapidly reduces HbS to <30% and prevents sickling, combined with antibiotics for possible infection."
          },
          {
            "id": "anemia-200-3",
            "q": "A 67-year-old with aplastic anemia (Hgb 6.2, WBC 1.1, Plt 42K) is transfused with non-leukodepleted PRBCs. Over months, he develops alloimmunization and platelet refractoriness. Why did this happen?",
            "a": "Non-leukodepleted transfusions expose the patient to donor HLA antigens, triggering immune sensitization to leukocytes and platelets",
            "rationale": "Aplastic anemia patients receive multiple transfusions; non-leukodepleted products cause HLA alloimmunization in 50% of cases, leading to refractoriness and the need for HLA-matched products. Leukodepletion should be standard."
          },
          {
            "id": "anemia-200-4",
            "q": "A 61-year-old with megaloblastic anemia from B12 deficiency (B12 45) has severe neurologic involvement and is started on high-dose IM B12. Why must potassium be monitored closely in the first 24-48 hours?",
            "a": "B12 repletion rapidly stimulates erythropoiesis, consuming potassium and phosphate — hypokalemia can cause cardiac arrhythmias",
            "rationale": "B12 treatment initiates RBC production surge; rapidly proliferating cells consume K, PO4, and Mg. Hypokalemia can cause fatal arrhythmias. Electrolytes must be repleted prophylactically or monitored q6-12h."
          },
          {
            "id": "anemia-200-5",
            "q": "A 34-year-old with severe iron deficiency anemia (Hgb 6.1, ferritin 5) cannot tolerate oral iron (GI upset). She is started on IV iron (ferric carboxymaltose). What is the maximum safe total body iron that can be administered?",
            "a": "10-15 mg/kg IV iron based on weight and Hgb deficit; iron overload risk requires careful dosing",
            "rationale": "IV iron allows rapid repletion but carries overload risk. Dosing formulas calculate iron deficit and divide into safe doses. Excess IV iron causes oxidative injury and organ damage (especially cardiac, hepatic)."
          },
          {
            "id": "anemia-200-6",
            "q": "A 48-year-old woman with postpartum hemorrhage has Hgb 6.8 and iron studies consistent with absolute iron deficiency. She declines transfusion but accepts iron therapy. What is the expected Hgb rise timeline?",
            "a": "Approximately 1 g/dL per week with oral iron or 1-2 g/dL per week with IV iron (assuming marrow responds appropriately)",
            "rationale": "Iron-replete bone marrow responds optimally with ~1 g/dL/week Hgb increase. This timeline helps set realistic expectations for symptom improvement and determines if additional transfusion is needed."
          },
          {
            "id": "anemia-200-7",
            "q": "A 56-year-old with stage 4 CKD and anemia (Hgb 7.9) develops hypertension and headaches while on ESA therapy. What is the nursing priority?",
            "a": "Check blood pressure and assess for hypertensive emergency; ESA therapy increases Hgb and viscosity, raising stroke/MI risk",
            "rationale": "Rapid Hgb rise from ESA therapy increases viscosity and BP, with increased stroke/MI risk. Target Hgb for CKD is typically 10-11 (not higher), and BP must be carefully managed during therapy."
          }
        ],
        "300": [
          {
            "id": "anemia-300-0",
            "q": "A 39-year-old with severe pernicious anemia (B12 28 pg/mL) and spinal cord involvement (paresthesias, ataxia) is started on high-dose IM B12 (1000 mcg weekly). After 8 weeks, neurologic symptoms have not improved. What explains this?",
            "a": "Demyelination from prolonged B12 deficiency may be irreversible — B12 repletion halts progression but doesn't reverse established neurologic damage",
            "rationale": "Subacute combined degeneration (SCD) involves myelin destruction. Early B12 replacement (within weeks) prevents worsening and allows some recovery. Late treatment arrests but cannot fully reverse symptoms — duration of deficiency before diagnosis is key."
          },
          {
            "id": "anemia-300-1",
            "q": "A 44-year-old with SCD has chronic pain and is started on chronic opioids. His baseline retic count is 12%; now it's 2.8%. Hgb is 7.2 (baseline 8.1). What is the mechanism?",
            "a": "Opioids suppress bone marrow erythropoiesis — retic suppression indicates opioid-induced anemia, not hemolysis",
            "rationale": "Opioids are marrow-suppressive and worsen SCD anemia. In a patient already dependent on high reticulocytosis to compensate, opioid use causes critical anemia. Pain management must use non-opioid strategies when possible."
          },
          {
            "id": "anemia-300-2",
            "q": "A 58-year-old with autoimmune hemolytic anemia refractory to steroids and rituximab is offered splenectomy. Which finding would CONTRAINDICATE surgery?",
            "a": "Absence of spherocytes on blood smear or negative Coombs retest — suggests AIHA diagnosis is incorrect",
            "rationale": "If spherocytes are absent or DAT becomes negative during workup, AIHA may be misdiagnosed (consider TTP, drug-induced hemolysis, or other causes). Splenectomy only helps when the spleen is destroying antibody-coated RBCs."
          },
          {
            "id": "anemia-300-3",
            "q": "A 71-year-old with CKD and ESA-resistant anemia (Hgb 7.8 on ESA max dose) has ferritin 850, TSAT 28%. Iron studies suggest functional iron deficiency. Which intervention is next?",
            "a": "IV iron despite high ferritin (to improve hepcidin suppression and iron bioavailability) or hepcidin-targeted therapy if available",
            "rationale": "Functional iron deficiency (high ferritin, low TSAT, low serum iron) in CKD results from hepcidin elevation. IV iron can help overcome hepcidin block; hepcidin inhibitors (like luspatercept) are emerging therapies."
          },
          {
            "id": "anemia-300-4",
            "q": "A 62-year-old with congenital sickle cell disease and documented splenectomy undergoes cholecystectomy for cholelithiasis. Postoperatively, he develops fever, hypotension, and sepsis with Streptococcus pneumoniae. How could this have been prevented?",
            "a": "Pneumococcal vaccination (Prevnar13 + Pneumovax23) at least 2 weeks before elective surgery, plus prophylactic antibiotics perioperatively",
            "rationale": "Asplenic patients lose opsonization of polysaccharide-encapsulated bacteria and are at extreme risk for overwhelming sepsis from S. pneumoniae, H. influenzae, N. meningitidis. Vaccination and perioperative prophylaxis are essential."
          },
          {
            "id": "anemia-300-5",
            "q": "A 34-year-old with hereditary spherocytosis undergoes splenectomy for hemolytic anemia. Hgb rises from 8.2 to 10.8. What is the mechanism of improvement?",
            "a": "Removal of the primary site of RBC destruction; spherocytes survive longer in the circulation without splenic sequestration",
            "rationale": "In hereditary spherocytosis, the spleen's osmotic fragility testing identifies spherocytes as targets for sequestration. Splenectomy 'cures' the anemia by removing the destruction site, though spherocyte morphology persists."
          },
          {
            "id": "anemia-300-6",
            "q": "A 51-year-old with untreated celiac disease has macrocytic anemia (MCV 107), borderline B12 (200), normal folate, low iron. What is the primary cause of her anemia?",
            "a": "Iron deficiency (low iron stores) + malabsorption — macrocytosis may reflect B12 borderline status or reticulocytosis from blood loss",
            "rationale": "Celiac disease damages the small intestine, impairing absorption of iron (and sometimes B12/folate). Iron deficiency is often primary, but B12 malabsorption contributes. Gluten-free diet addresses both."
          },
          {
            "id": "anemia-300-7",
            "q": "A 28-year-old woman is found to have Hgb of 6.2 and profound microcytic hypochromic anemia (MCV 58, MCHC 22) with no prior medical history. Ferritin is 450 (high), serum iron is elevated, TIBC is low. What diagnosis should be considered?",
            "a": "Hereditary hemochromatosis with secondary anemia OR thalassemia trait — iron studies are unexpectedly abnormal for simple iron deficiency",
            "rationale": "Microcytic anemia with high ferritin is unusual and suggests either hereditary hemochromatosis (iron overload) or thalassemia trait (normal iron with microcytosis). Further testing (HFE gene, hemoglobin electrophoresis, RBC indices, family history) is needed."
          }
        ],
        "400": [
          {
            "id": "anemia-400-0",
            "q": "A 67-year-old with MGUS (M-spike 1.2, normal free light chains) develops sudden hemolytic anemia (Hgb 7.1, retic 14%, LDH 1500, low haptoglobin, positive DAT). What has occurred?",
            "a": "MGUS has evolved to Waldenstrom macroglobulinemia with secondary AIHA from IgM autoantibody production",
            "rationale": "WM is a clonal B-cell lymphoproliferative disorder that commonly produces IgM with autoimmune complications (AIHA, neuropathy, cryoglobulinemia). AIHA heralds aggressive disease and warrants treatment of WM itself."
          },
          {
            "id": "anemia-400-1",
            "q": "A 45-year-old with hereditary spherocytosis and prior splenectomy is stable (Hgb 10.2) but now develops acute hemolysis after blood transfusion (Hgb 6.8 24 hours post-transfusion). What is the diagnosis?",
            "a": "Delayed transfusion reaction (DHTR) from alloimmunization — post-transfusion hemolysis suggests RBC antibodies against donor antigen",
            "rationale": "Patients with chronic hemolysis + multiple transfusions (like HS post-splenectomy) become alloimmunized. Delayed hemolysis 24+ hours post-transfusion indicates minor blood group antibodies. Pre-transfusion antibody screening is needed before future transfusions."
          },
          {
            "id": "anemia-400-2",
            "q": "A 52-year-old with severe aplastic anemia (Hgb 6.1, WBC 0.8, Plt 20K) and multiple prior RBC transfusions develops alloimmunization to HLA antigens. Now each transfusion provides only 1 g/dL Hgb rise (vs 3 g/dL normally). What is the solution?",
            "a": "Request HLA-matched or HLA cross-matched PRBC to bypass immune refractoriness, or consider single-donor apheresis products",
            "rationale": "RBC alloimmunization from multiple transfusions in aplastic anemia makes future transfusions ineffective. HLA-matched or single-donor apheresis products (which reduce HLA antigen exposure) may restore transfusion efficacy."
          },
          {
            "id": "anemia-400-3",
            "q": "A 38-year-old with SCD undergoes rapid partial exchange transfusion for vaso-occlusive crisis with acute chest syndrome (Hgb 7.2, HbS 88% at presentation). After exchange (target HbS <30%), he develops acute transfusion reaction with fever, hemoglobinuria, and Hgb drop. What has occurred?",
            "a": "Acute hemolytic transfusion reaction (AHTR) — likely from minor blood group incompatibility in a multiply-transfused SCD patient",
            "rationale": "SCD patients are frequently transfused and at high risk for alloimmunization. AHTR during exchange suggests donor RBCs incompatible with recipient antibodies. Pre-transfusion antibody screen and phenotyping are critical in SCD."
          },
          {
            "id": "anemia-400-4",
            "q": "A 71-year-old with CKD stage 5 on hemodialysis has chronic anemia (Hgb 8.9) on ESA + iron therapy. His Hgb oscillates between 8.5-9.5 monthly. Why is this variation problematic?",
            "a": "Rapid Hgb fluctuations increase thrombotic (MI, stroke) and cardiovascular mortality risk — stable Hgb in the 10-11 range is safer",
            "rationale": "ESA dosing should target stable Hgb (not rapid oscillations). High Hgb (>11) increases thrombotic risk; frequent fluctuations worsen outcomes. Stable, moderate Hgb with consistent ESA dosing is the goal."
          },
          {
            "id": "anemia-400-5",
            "q": "A 44-year-old with systemic lupus erythematosus (SLE) develops Coombs-positive hemolytic anemia (Hgb 7.3) unresponsive to corticosteroids for 6 weeks. Serologies show high anti-dsDNA, low complement (C3 18, C4 6). What treatment is indicated?",
            "a": "Escalate to cyclophosphamide or mycophenolate mofetil (MMF) to suppress lupus activity driving hemolysis",
            "rationale": "Steroid-refractory hemolytic anemia in SLE indicates severe lupus activity requiring immunosuppression beyond steroids. Cytoxan or MMF target the underlying SLE and AIHA together."
          },
          {
            "id": "anemia-400-6",
            "q": "A 29-year-old with sickle thalassemia (HbSβ thalassemia) has baseline Hgb 9.1, retic 18%. He develops fever, severe bone pain, acute Hgb drop to 6.2, and retic falls to 1.2%. Laboratory findings: WBC 22K, Plt 185K. What is the diagnosis?",
            "a": "Transient aplastic crisis (TAC) from viral bone marrow suppression — most commonly from parvovirus B19",
            "rationale": "TAC in hemolytic anemias (SCD, HS, thalassemia) presents with sudden retic drop and acute anemia during viral illness. Parvovirus B19 directly suppresses erythroid lineage. Supportive transfusion is needed until marrow recovers (usually 1-2 weeks)."
          },
          {
            "id": "anemia-400-7",
            "q": "A 56-year-old with untreated Graves' disease develops microcytic hypochromic anemia (MCV 62, MCHC 24) despite normal iron stores (ferritin 180, TSAT 35%). Why is iron supplementation ineffective?",
            "a": "Thyroid hormone stimulates RBC production; untreated hyperthyroidism increases RBC turnover, not decreases iron availability",
            "rationale": "Graves' disease causes normocytic anemia from increased RBC turnover (not iron deficiency). Iron studies are normal. Treatment of hyperthyroidism (antithyroid drugs, radioiodine, or surgery) restores marrow homeostasis — iron supplementation is unnecessary."
          }
        ],
        "500": [
          {
            "id": "anemia-500-0",
            "q": "A 33-year-old with sickle-β⁰ thalassemia (both genes produce primarily HbS) develops stroke at age 16 and is started on chronic simple transfusion to maintain HbS <30%. Now at age 33, he has ferritin 4200, fibrosis T2* MRI <10 ms (severe cardiac iron). How does iron overload affect prognosis?",
            "a": "Cardiac iron deposition causes restrictive cardiomyopathy and arrhythmias — life-threatening if not managed with chelation",
            "rationale": "Chronic transfusion (essential for stroke prevention in SCD) causes iron overload. Cardiac iron (T2* <10 ms) is associated with >2-fold mortality increase from sudden cardiac death. Aggressive chelation therapy (deferasirox, deferoxamine, deferiprone) is urgent."
          },
          {
            "id": "anemia-500-1",
            "q": "A 41-year-old with B12 deficiency (B12 35) and spinal cord involvement (paresthesias, gait ataxia, cognitive changes) is started on IM B12 and high-dose folate. Why does cognitive improvement lag behind hematologic improvement?",
            "a": "CNS demyelination recovery is slower than marrow recovery — neurologic symptoms may persist for months despite biochemical correction",
            "rationale": "Hematologic improvement occurs within days of B12 repletion (RBC production resumes), but neurologic recovery depends on myelin regeneration and remyelination — a process taking weeks to months. Early diagnosis is key to prevent irreversible damage."
          },
          {
            "id": "anemia-500-2",
            "q": "A 48-year-old with cold agglutinin disease (IgM anti-I antibodies, high titer) has Hgb 7.2 and severe symptoms triggered by cold exposure. Why is splenectomy ineffective and what treatment works?",
            "a": "IgM is pentameric and activates complement peripherally, not in the spleen — rituximab (B-cell depletion) or bortezomib (proteasome inhibitor) is effective",
            "rationale": "Cold AIHA (CAD) causes hemolysis in the cold periphery through complement fixation, not splenic sequestration. Protective cold avoidance + immunosuppression (rituximab, bortezomib, chlorambucil) targets the disease."
          },
          {
            "id": "anemia-500-3",
            "q": "A 52-year-old with aplastic anemia successfully undergoes allogeneic hematopoietic stem cell transplant (SCT). Day 30 post-transplant: new anemia (Hgb 7.8), thrombocytopenia (Plt 35K), elevated creatinine, rash. What is the diagnosis?",
            "a": "Acute graft-versus-host disease (GVHD) affecting marrow, kidney, and skin — life-threatening complication of allogeneic SCT",
            "rationale": "Acute GVHD (usually day 10-30 post-SCT) causes donor T-cell attack on recipient tissues. Cytopenias result from marrow involvement; rash and Cr elevation reflect skin and renal GVHD. Treatment: high-dose corticosteroids + calcineurin inhibitors."
          },
          {
            "id": "anemia-500-4",
            "q": "A 67-year-old with MDS-2 (high-risk IPSS 2.5) has Hgb 7.3, pancytopenia, and 18% blasts. He has had no prior transfusions but is now transfusion-dependent. After 6 transfusions, his ferritin rises to 1800. What treatment addresses both MDS and iron overload?",
            "a": "Allogeneic SCT (only curative for MDS) + iron chelation to prevent cardiac/hepatic damage during pre-transplant therapy",
            "rationale": "High-risk MDS requires transplant for cure. Iron overload from multiple transfusions necessitates parallel chelation (deferasirox, deferoxamine) to prevent end-organ damage before and after transplant."
          },
          {
            "id": "anemia-500-5",
            "q": "A 54-year-old woman with autoimmune hemolytic anemia has positive warm DAT and negative cold agglutinin (IgG antibody). Steroids initially work (Hgb rises to 10), but relapse occurs at 2.5 mg prednisone daily. What salvage therapy is most effective?",
            "a": "Rituximab (anti-CD20 monoclonal antibody) depletes B cells producing anti-RBC antibodies — induces sustained remission in >50% of patients",
            "rationale": "Warm AIHA relapsing on low-dose steroids requires B-cell depletion. Rituximab induces remission in 50-70% of patients and allows steroid taper. Splenectomy is alternative but rituximab is now preferred second-line."
          },
          {
            "id": "anemia-500-6",
            "q": "A 44-year-old with hereditary spherocytosis (HS) and splenectomy develops abdominal pain, fever, elevated D-dimer, and acute anemia (Hgb 6.1, retic <1%). What rare complication has occurred?",
            "a": "Thrombotic event (splenic vein thrombosis or mesenteric thrombosis) in post-splenectomy HS — increased thrombotic risk from functional asplenia",
            "rationale": "Post-splenectomy patients (especially HS) have increased thrombotic risk from platelet dysfunction and loss of splenic filtration. Sudden anemia + low retic + pain/fever + elevated D-dimer suggest thrombosis requiring urgent imaging and anticoagulation."
          },
          {
            "id": "anemia-500-7",
            "q": "A 39-year-old with severe pernicious anemia (B12 15, methylmalonic acid >10,000 nmol/L) develops neuropsychiatric symptoms (paranoia, hallucinations) alongside paresthesias and ataxia. After high-dose IM B12, psychiatric symptoms resolve in days but neurologic symptoms persist for months. Why?",
            "a": "Psychiatric manifestations of B12 deficiency (dementia, psychosis, personality change) often reverse quickly with repletion; spinal cord demyelination recovery is slower",
            "rationale": "B12 deficiency affects both myelin (slower recovery) and neurotransmitter metabolism (faster reversal). CNS psychiatric symptoms can improve within days/weeks of B12, but SCD (myelin damage) requires months for recovery — emphasizing the importance of early diagnosis."
          }
        ]
      }
    },

    /* ========== WEEK 2: POLYCYTHEMIA ========== */
    {
      "id": "polycythemia-vascular",
      "name": "Polycythemia: Vascular Complications",
      "source": "week2-polycythemia.html",
      "clues": {
        "100": [
          {
            "id": "poly-100-0",
            "q": "A 62-year-old with polycythemia vera (hematocrit 54%) presents with sudden transient monocular vision loss (amaurosis fugax). What is the mechanism?",
            "a": "Thrombotic event in the retinal artery from increased blood viscosity and platelet dysfunction in PV",
            "rationale": "PV's increased hematocrit elevates viscosity dramatically; combined with JAK2-driven platelet dysfunction, thrombotic events are common. Amaurosis fugax is a transient retinal artery thrombosis—a stroke warning sign."
          },
          {
            "id": "poly-100-1",
            "q": "A 54-year-old with PV has hematocrit 56% and presents with pruritis that is exacerbated by hot baths. What causes this unique symptom?",
            "a": "Release of histamine from mast cells triggered by heat, causing itching that is pathognomonic for PV",
            "rationale": "Pruritis worsened by hot water (a PV classic) results from mast cell degranulation from heat exposure. This finding, combined with high Hct in the setting of JAK2 mutation, is diagnostic of PV."
          },
          {
            "id": "poly-100-2",
            "q": "A 71-year-old with secondary polycythemia (from COPD, SpO2 consistently 82%) has hematocrit 52% and platelets 450K. He is asymptomatic. Does he need phlebotomy?",
            "a": "Phlebotomy is generally NOT indicated for secondary polycythemia unless symptomatic — the Hct reflects appropriate EPO-driven compensation",
            "rationale": "Secondary polycythemia is a physiologic response to chronic hypoxia. Phlebotomy removes the compensatory response without fixing the underlying problem (lung disease). Treatment focuses on the primary condition."
          },
          {
            "id": "poly-100-3",
            "q": "A 58-year-old with PV on phlebotomy therapy develops thrombosis despite hematocrit 42%. JAK2 V617F allele burden is 78%. What is the implication?",
            "a": "High allele burden predicts thrombotic risk independent of hematocrit — phlebotomy alone is insufficient; cytoreductive therapy is needed",
            "rationale": "JAK2 allele burden is an independent risk factor for thrombosis. High burden (>50%) increases risk even with hematocrit control. Hydroxyurea or peginterferon is required to reduce mutant burden."
          },
          {
            "id": "poly-100-4",
            "q": "A 48-year-old with PV develops atypical angina with exertion (chest discomfort, dyspnea). Troponin is negative. What is the pathophysiology?",
            "a": "Increased blood viscosity from elevated Hct reduces coronary blood flow, causing demand ischemia without infarction",
            "rationale": "PV's high hematocrit increases viscosity, reducing oxygen delivery paradoxically despite high Hgb. Coronary microvascular ischemia from viscosity (not thrombosis) causes angina. Phlebotomy may relieve symptoms."
          },
          {
            "id": "poly-100-5",
            "q": "A 65-year-old with relative polycythemia (elevated Hct 54%, normal RBC mass, decreased plasma volume from dehydration) is started on phlebotomy. After 2 units removed over 1 week, he develops syncope. Why?",
            "a": "Phlebotomy is contraindicated in relative polycythemia; it worsens hypovolemia and reduces oxygen-carrying capacity without addressing the underlying dehydration",
            "rationale": "Relative polycythemia requires fluid replacement, not phlebotomy. Removing blood from a volume-depleted patient is harmful. Diagnosis requires RBC mass/plasma volume measurement to distinguish from true polycythemia."
          },
          {
            "id": "poly-100-6",
            "q": "A 72-year-old with PV on hydroxyurea and aspirin develops acute MI (STEMI). ECG shows inferior wall infarction. What is the likely mechanism?",
            "a": "Coronary thrombosis from PV thrombotic tendency, despite cytoreduction — indicates high-risk disease requiring aggressive anticoagulation consideration",
            "rationale": "MI in PV occurs from thrombosis; despite therapy, high-risk patients may require additional anticoagulation. Post-MI, PV patients have high reinfarction risk and warrant secondary prevention with anticoagulation ± antiplatelet therapy."
          },
          {
            "id": "poly-100-7",
            "q": "A 56-year-old with PV (hematocrit 58%) complains of headache, dizziness, and visual changes. BP is 168/95. What is the emergency and treatment?",
            "a": "Hypertensive emergency with stroke risk from viscosity and thrombotic tendency — urgent phlebotomy (reduce Hct to <45%) and antihypertensive therapy",
            "rationale": "PV causes hypertension from increased viscosity and catecholamine release. Headache/visual changes suggest stroke risk. Urgent phlebotomy (500 mL) + IV antihypertensives (nitroprusside, labetalol) to reduce viscosity and BP."
          }
        ],
        "200": [
          {
            "id": "poly-200-0",
            "q": "A 52-year-old with newly diagnosed PV (Hct 56%, platelets 620K, JAK2 V617F positive) has no prior thrombotic events. According to risk stratification, what is his risk category and treatment?",
            "a": "High-risk (age >60 OR thrombotic history) — he doesn't meet high-risk criteria; intermediate-risk warrants phlebotomy + low-dose aspirin",
            "rationale": "PV risk stratification: low-risk = age <60 with no thrombosis history (phlebotomy alone); intermediate = age 60-64; high-risk = age >60 or prior thrombosis (cytoreduction + phlebotomy + aspirin)."
          },
          {
            "id": "poly-200-1",
            "q": "A 68-year-old with PV on phlebotomy develops cerebral venous sinus thrombosis (CVST) with headache, seizure, and focal deficits. MRV confirms thrombosis. What is the treatment strategy?",
            "a": "CVST in PV requires anticoagulation (IV heparin, then warfarin) PLUS aggressive cytoreduction with hydroxyurea/peginterferon to prevent recurrence",
            "rationale": "CVST in PV is a high-risk thrombotic event. Unlike non-PV CVST, PV-associated CVST requires anticoagulation + cytoreduction together to address both the clot and the underlying myeloproliferative disorder."
          },
          {
            "id": "poly-200-2",
            "q": "A 61-year-old with PV develops hepatic vein thrombosis (Budd-Chiari syndrome) with acute abdominal pain, ascites, and hepatomegaly. What is the management?",
            "a": "Anticoagulation (IV heparin, then long-term warfarin) + TIPS (transjugular intrahepatic portosystemic shunt) if needed for decompensation + cytoreductive therapy for PV",
            "rationale": "BCS in PV is often fatal without treatment. Anticoagulation prevents clot progression; TIPS decompresses portal hypertension; cytoreduction addresses the underlying PV. Liver transplant may be needed for end-stage cirrhosis."
          },
          {
            "id": "poly-200-3",
            "q": "A 67-year-old with PV on phlebotomy (Hct maintained 42%) and aspirin develops bleeding (hematochezia, Hgb drop to 9.1 from 14.2). Why does this paradox occur in PV?",
            "a": "PV causes a paradoxical bleeding diathesis from acquired von Willebrand syndrome due to abnormally high shear stress on vWF multimers",
            "rationale": "Extremely high Hct in PV causes high shear stress that degrades von Willebrand factor multimers, leading to functional vWD. This creates a paradox: high thrombotic risk PLUS high bleeding risk. Phlebotomy addresses both."
          },
          {
            "id": "poly-200-4",
            "q": "A 55-year-old with PV develops gout attacks (uric acid 10.2) after phlebotomy. Why does phlebotomy increase uric acid?",
            "a": "Phlebotomy causes RBC destruction, releasing heme and nuclei → purine metabolism → uric acid elevation → gout risk",
            "rationale": "Phlebotomy-related hemolysis increases purine degradation and uric acid production. PV patients on phlebotomy require allopurinol or febuxostat prophylaxis and aggressive hydration to prevent gout and uric acid nephropathy."
          },
          {
            "id": "poly-200-5",
            "q": "A 74-year-old with PV develops post-phlebotomy iron deficiency (ferritin 8, TIBC 510, serum iron 12). Should iron be supplemented?",
            "a": "Iron supplementation should be AVOIDED in PV; iron deficiency actually helps control polycythemia by limiting RBC production",
            "rationale": "Iron deficiency is paradoxically beneficial in PV — it naturally limits erythropoiesis. Iron supplementation would drive RBC production and worsen polycythemia. Iron deficiency is intentionally maintained."
          },
          {
            "id": "poly-200-6",
            "q": "A 59-year-old with PV on hydroxyurea develops transformation to acute myeloid leukemia (AML). Blast percentage rises from 5% (baseline) to 28%. What is the prognosis?",
            "a": "Blast transformation (AML) in PV carries poor prognosis with median survival <1 year despite chemotherapy — secondary AML from myeloproliferative transformation is treatment-resistant",
            "rationale": "AML transformation in PV/MPN is a terminal event. Secondary AML from MPN transformation is often resistant to standard AML therapy. Median survival is <12 months; allogeneic SCT is the only curative option."
          },
          {
            "id": "poly-200-7",
            "q": "A 63-year-old with secondary polycythemia (from renal cell carcinoma producing EPO) has Hct 58%, platelets 280K, and MI risk factors. Should phlebotomy be performed?",
            "a": "Treatment depends on symptomatic status — if asymptomatic with Hct <60%, observation is reasonable; if symptomatic or Hct >65%, phlebotomy is indicated",
            "rationale": "Secondary polycythemia management focuses on the underlying cause (cancer treatment). Phlebotomy is reserved for symptomatic or very high Hct, unlike PV where it's routine. Cancer control is the primary goal."
          }
        ],
        "300": [
          {
            "id": "poly-300-0",
            "q": "A 64-year-old with PV develops progressive thrombocytosis (platelets 600K → 850K over 6 months) despite hydroxyurea therapy. JAK2 allele burden increases from 65% to 92%. What does this suggest?",
            "a": "Emerging hydroxyurea resistance with clonal evolution — switch to peginterferon-α or consider clinical trial enrollment for novel agents",
            "rationale": "Rising allele burden + cytopenia inadequacy during treatment indicates resistance. Peginterferon has shown ability to reduce allele burden in some patients and is second-line after hydroxyurea resistance."
          },
          {
            "id": "poly-300-1",
            "q": "A 57-year-old with PV on phlebotomy develops erythromelalgia (burning pain and erythema of extremities triggered by heat). What is the mechanism and treatment?",
            "a": "Microvascular thrombosis from platelet aggregation in PV — treated with aspirin (which relieves pain in ~90% of patients within hours)",
            "rationale": "Erythromelalgia is a PV-specific microthrombotic phenomenon. Low-dose aspirin (81 mg daily) provides dramatic pain relief within hours to days — one of the clearest treatment responses in PV."
          },
          {
            "id": "poly-300-2",
            "q": "A 71-year-old with PV develops progressive dyspnea and chest pain (troponin negative). Echocardiogram shows dilated right ventricle and elevated RVSP 65 mmHg. What is the diagnosis?",
            "a": "Pulmonary hypertension from chronic thromboembolic events and/or microvascular thrombosis in PV — carries poor prognosis",
            "rationale": "Chronic thrombotic events and microvascular disease in PV can lead to pulmonary hypertension. Once established, PHT is difficult to treat and associated with RV failure and poor outcomes."
          },
          {
            "id": "poly-300-3",
            "q": "A 52-year-old with PV and previous DVT on warfarin (INR 2.8) develops recurrent thrombosis 4 months later despite adequate anticoagulation. JAK2 allele burden is 88%. What is the management?",
            "a": "Increase INR target to 3.0-3.5 AND add cytoreductive therapy (if not already on it) — high allele burden PV requires aggressive dual approach",
            "rationale": "Recurrent VTE in anticoagulated PV suggests the JAK2-driven prothrombotic state overwhelms standard anticoagulation. Higher INR target + cytoreduction (hydroxyurea, peginterferon) are necessary."
          },
          {
            "id": "poly-300-4",
            "q": "A 61-year-old with PV develops progressive splenomegaly (spleen enlarged to 8 cm below costal margin) with left upper quadrant pain. Platelets drop to 95K. What is the diagnosis?",
            "a": "Myelofibrotic transformation (post-PV MF) — splenomegaly reflects extramedullary hematopoiesis as fibrosis replaces marrow",
            "rationale": "PV can transform to myelofibrosis (post-PV MF). Progressive splenomegaly with cytopenias indicates myeloid metaplasia and marrow fibrosis. Prognosis worsens; median survival ~5-10 years post-transformation."
          },
          {
            "id": "poly-300-5",
            "q": "A 66-year-old with PV on peginterferon-α develops hypothyroidism (TSH 8.2, free T4 low). How should thyroid disease be managed?",
            "a": "Continue peginterferon (hypothyroidism is manageable with levothyroxine) — the benefits of interferon in reducing thrombosis risk outweigh thyroid toxicity",
            "rationale": "Peginterferon commonly causes autoimmune thyroiditis. Thyroid-stimulating hormone monitoring and levothyroxine replacement are standard. Peginterferon is NOT stopped unless severe thyroid dysfunction develops."
          },
          {
            "id": "poly-300-6",
            "q": "A 48-year-old with PV (CALR mutation-positive, JAK2-negative) has Hct 57%, platelets 520K, and no prior thrombosis. What is expected regarding disease behavior?",
            "a": "CALR-mutant PV typically has lower thrombotic risk than JAK2-positive PV — phlebotomy + low-dose aspirin may be sufficient without cytoreduction",
            "rationale": "CALR mutation in MPN (including PV-like disease) carries better prognosis than JAK2 V617F. Thrombotic and hemorrhagic events are less common. Treatment is often less aggressive."
          },
          {
            "id": "poly-300-7",
            "q": "A 71-year-old with PV develops sudden severe headache, focal neurologic deficit, and altered mental status. MRI shows acute stroke. What is the immediate management?",
            "a": "Stroke protocol (thrombolytics if within window) + URGENT phlebotomy to reduce Hct below 45% + continuous cardiac monitoring + aggressive cytoreduction follow-up",
            "rationale": "Stroke in PV is a medical emergency requiring both acute stroke treatment AND urgent viscosity reduction via phlebotomy. High Hct significantly worsens stroke outcomes and must be lowered immediately."
          }
        ],
        "400": [
          {
            "id": "poly-400-0",
            "q": "A 58-year-old with PV has been well-controlled on hydroxyurea for 8 years with no thrombotic events. Repeat JAK2 shows allele burden dropped from 72% to 41%. Hct is 43%. Should therapy be changed?",
            "a": "Continue current therapy — stable clinical response with reduced allele burden is excellent; no change is needed",
            "rationale": "Allele burden reduction is a sign of effective therapy. Low allele burden correlates with lower thrombotic risk. Stable disease on current regimen requires no adjustment."
          },
          {
            "id": "poly-400-1",
            "q": "A 65-year-old with PV on peginterferon develops thrombocytopenia (platelets 65K) and worsening anemia (Hgb 9.2). A repeat bone marrow shows 15% blasts and increased fibrosis. What is this?",
            "a": "Myelofibrotic transformation with increased blasts — early progression toward AML in PV",
            "rationale": "Blasts in the marrow during PV disease evolution indicate accelerated transformation toward AML. This is a poor prognostic sign requiring consideration of allogeneic SCT."
          },
          {
            "id": "poly-400-2",
            "q": "A 72-year-old with PV and Budd-Chiari syndrome (anticoagulated for 2 years) develops refractory ascites with INR 2.4 (therapeutic). Bilirubin is 4.2, albumin 2.1, platelets 48K. What is the next intervention?",
            "a": "Evaluate for liver transplantation — end-stage liver disease from thrombosis/cirrhosis with coagulopathy is indication for transplant, not increased anticoagulation",
            "rationale": "BCS from PV that progresses to cirrhosis/liver failure requires transplantation. Anticoagulation doesn't reverse established cirrhosis. Transplant is the only definitive treatment."
          },
          {
            "id": "poly-400-3",
            "q": "A 59-year-old with PV develops sudden paralysis and sensory loss (spinal cord level T10). MRI shows spinal cord infarction. What is the presumed etiology and long-term management?",
            "a": "Spinal cord infarction from thrombosis of spinal cord blood supply — permanent neurologic deficit likely; require aggressive anticoagulation + cytoreduction to prevent recurrence",
            "rationale": "Spinal cord infarction in PV is rare but catastrophic. Thrombosis of the artery of Adamkiewicz or other spinal vessels causes irreversible spinal cord damage. Subsequent anticoagulation + cytoreduction prevent additional events."
          },
          {
            "id": "poly-400-4",
            "q": "A 68-year-old with PV on hydroxyurea and aspirin develops recurrent DVT (leg ultrasound positive) despite INR 2.2 on warfarin. JAK2 V617F is 91%. What is the next step?",
            "a": "Increase warfarin to INR 3.0-3.5 AND consider adding low-dose unfractionated heparin (bridge) pending INR optimization + consider switch from hydroxyurea to peginterferon",
            "rationale": "Recurrent thrombosis despite INR 2.2 warrants higher INR target + possible dual anticoagulation. High JAK2 burden (>80%) confers extreme thrombotic risk requiring maximal therapy."
          },
          {
            "id": "poly-400-5",
            "q": "A 64-year-old with PV develops acute mesenteric thrombosis (acute abdominal pain, shock, elevated lactate 5.8) despite antiplatelet therapy. What is the management?",
            "a": "Emergency surgery/endovascular revascularization + anticoagulation + aggressive cytoreduction + ICU support for sepsis/shock",
            "rationale": "Mesenteric thrombosis in PV is a surgical emergency. Mortality is high (>50%) even with treatment. Revascularization must be attempted before bowel necrosis; cytoreduction prevents recurrence."
          },
          {
            "id": "poly-400-6",
            "q": "A 71-year-old with PV develops progressive hearing loss and tinnitus. Audiometry confirms sensorineural hearing loss. What is the likely cause and is it reversible?",
            "a": "Microvascular ischemia of the inner ear from PV-related thrombosis — hearing loss may be partially reversible if caught early with aggressive treatment",
            "rationale": "Sudden sensorineural hearing loss in PV may be from inner ear thrombosis. Early recognition and aggressive cytoreduction/antiplatelet therapy can sometimes improve hearing if started promptly."
          },
          {
            "id": "poly-400-7",
            "q": "A 55-year-old with PV on hydroxyurea develops pregnancy. She has had prior DVT (now resolved, on warfarin). What anticoagulation strategy is correct during pregnancy?",
            "a": "Switch warfarin to low-molecular-weight heparin (LMWH) for first trimester + continue throughout pregnancy + hydroxyurea must be continued (teratogenic potential outweighed by thrombotic risk)",
            "rationale": "PV in pregnancy carries extreme thrombotic risk (especially with prior DVT). Warfarin is teratogenic (first trimester); LMWH is preferred. Hydroxyurea is continued because untreated PV carries higher fetal risk from miscarriage/stillbirth."
          }
        ],
        "500": [
          {
            "id": "poly-500-0",
            "q": "A 61-year-old with PV on hydroxyurea for 10 years develops myelofibrotic transformation with JAK2 allele burden at 85% and bone marrow fibrosis grade 3/3. Platelets are 45K, Hgb 7.8, WBC 2.1. What is the life expectancy?",
            "a": "Post-PV myelofibrosis has median survival 5-10 years; high allele burden + severe fibrosis + cytopenias predicts shorter survival (~3-5 years); allogeneic SCT is the only curative option",
            "rationale": "Post-PV MF is a terminal evolution of PV with poor prognosis. Median survival post-transformation is 5-10 years; high-risk features (advanced fibrosis, severe cytopenias, high mutation burden) worsen outcomes. Transplant is only cure."
          },
          {
            "id": "poly-500-1",
            "q": "A 67-year-old with PV develops stroke (ischemic) while on optimal therapy (Hct 42%, on hydroxyurea + aspirin). JAK2 V617F allele burden is 76%. Residual neurologic deficits are moderate. What post-stroke management is correct?",
            "a": "Continue aspirin + add warfarin target INR 2-3 + consider adding peginterferon to hydroxyurea to reduce allele burden + stroke rehabilitation",
            "rationale": "Stroke in optimally-treated PV suggests the JAK2 thrombotic drive is not fully controlled by cytoreduction alone. Dual antiplatelet-anticoagulation + more aggressive cytoreduction (peginterferon) + rehabilitation are needed."
          },
          {
            "id": "poly-500-2",
            "q": "A 73-year-old with PV and previous hemorrhagic stroke (not thrombotic) on aspirin develops acute thromboembolic stroke despite continuing aspirin. Should anticoagulation be added?",
            "a": "Adding anticoagulation after hemorrhagic stroke carries bleeding risk — stroke risk vs bleeding risk must be carefully weighed; consider heparin bridge with careful monitoring if thrombotic risk is deemed higher",
            "rationale": "This presents a clinical dilemma: PV thrombotic tendency vs. prior ICH bleeding risk. Anticoagulation may be warranted if thromboembolic events dominate, but carries substantial ICH risk. Individual risk stratification is essential."
          },
          {
            "id": "poly-500-3",
            "q": "A 58-year-old with PV develops portal vein thrombosis (confirmed by CT) with normal liver function tests and no encephalopathy. Platelets 580K, Hct 51%. Should anticoagulation be started?",
            "a": "YES — anticoagulation (warfarin INR 2-3) is indicated even with normal LFTs to prevent Budd-Chiari progression and liver transplant need",
            "rationale": "Portal vein thrombosis (PVT) in PV often progresses to BCS if untreated. Early anticoagulation + cytoreduction can prevent hepatic decompensation and avoid transplant."
          },
          {
            "id": "poly-500-4",
            "q": "A 64-year-old with PV on peginterferon develops new-onset diabetes (fasting glucose 180, A1C 8.2) and weight gain (15 lbs in 6 months). Is peginterferon implicated and what should be done?",
            "a": "Peginterferon can exacerbate diabetes and cause weight gain — monitor glucose closely, consider adding metformin/GLP-1 agonist, or consider switching back to hydroxyurea if diabetes is difficult to control",
            "rationale": "Peginterferon has metabolic toxicity including hyperglycemia and weight gain. If diabetes becomes difficult to control, switching to hydroxyurea or adding newer agents (ruxolitinib) may be warranted despite allele burden trade-offs."
          },
          {
            "id": "poly-500-5",
            "q": "A 72-year-old with PV (JAK2 V617F allele burden 88%) has been adherent to hydroxyurea for 7 years but now develops progressive thrombotic events (DVT then MI within 4 months). Allele burden has risen to 95%. What explains treatment failure?",
            "a": "Emerging hydroxyurea resistance with clonal evolution — consider switch to peginterferon-α or ruxolitinib (JAK1/2 inhibitor) to target the expanding clone",
            "rationale": "Rising allele burden on stable hydroxyurea doses indicates chemotherapy resistance. JAK inhibitors directly block JAK-STAT signaling and may overcome resistance better than hydroxyurea in some patients."
          },
          {
            "id": "poly-500-6",
            "q": "A 59-year-old with PV develops acute coronary syndrome (NSTEMI) with troponin 0.48 ng/mL. ECG shows ST depression in inferior leads. Angiography reveals 90% LAD stenosis with soft plaque. Should urgent PCI be performed?",
            "a": "YES — acute NSTEMI in PV requires standard ACS management (PCI, dual antiplatelet therapy) PLUS urgent phlebotomy to reduce Hct + continued cytoreduction",
            "rationale": "PV does not change ACS management strategy. PCI is indicated for acute NSTEMI with significant stenosis. However, phlebotomy should be performed urgently to reduce viscosity and improve coronary perfusion."
          },
          {
            "id": "poly-500-7",
            "q": "A 68-year-old with PV undergoes successful stroke thrombolysis and recovers well neurologically. Now on dual antiplatelet therapy + warfarin INR 2.5. Three months later, minor head injury causes epidural hematoma requiring drainage. What is the bleeding risk-benefit analysis?",
            "a": "Continue anticoagulation post-hematoma drainage after hematoma stability confirmed — PV thrombotic risk outweighs repeat ICH risk; balance with careful monitoring",
            "rationale": "PV patients who suffer thrombotic events face very high recurrence risk if anticoagulation is stopped. Even after ICH, continuing anticoagulation (with careful monitoring) is often warranted if thrombotic burden is very high."
          }
        ]
      }
    },

    /* ========== WEEK 2: TRANSFUSION REACTIONS ========== */
    {
      "id": "transfusion-clinical",
      "name": "Transfusion Reactions: Clinical Management",
      "source": "week2-transfusion-reactions.html",
      "clues": {
        "100": [
          {
            "id": "trans-100-0",
            "q": "A patient receiving his 2nd unit of PRBCs develops sudden fever (39.1°C), chills, and chest discomfort 15 minutes after transfusion starts. Hemoglobinuria is noted. What is the most likely diagnosis?",
            "a": "Acute hemolytic transfusion reaction (AHTR) — immediately STOP the transfusion and initiate emergency protocol",
            "rationale": "Classic AHTR presentation: fever + chills + back/chest pain + hemoglobinuria within minutes of transfusion. This is a medical emergency requiring immediate transfusion cessation and supportive care."
          },
          {
            "id": "trans-100-1",
            "q": "A patient 2 hours into RBC transfusion develops fever to 38.7°C and rigors but denies back pain or dyspnea. Urine is clear yellow. What is the most likely diagnosis?",
            "a": "Febrile non-hemolytic transfusion reaction (FNHTR) — most common transfusion reaction; acetaminophen can be given and transfusion may be resumed",
            "rationale": "FNHTR presents with fever + chills but NO hemoglobinuria, back pain, or respiratory symptoms. It's the most common transfusion reaction (~1% of transfusions) and typically self-limited."
          },
          {
            "id": "trans-100-2",
            "q": "After giving 250 mL of RBCs, a patient develops urticaria, mild throat tightness, and pruritus. Vital signs are stable. Should the transfusion be stopped immediately?",
            "a": "The transfusion should be PAUSED, the patient given IV diphenhydramine or antihistamine, and can be RESUMED after symptoms resolve if mild",
            "rationale": "Mild allergic reaction (urticaria, pruritus) can be treated and transfusion resumed. Severe allergic reaction (airway compromise, hypotension) requires permanent cessation and epinephrine."
          },
          {
            "id": "trans-100-3",
            "q": "A patient develops acute pulmonary edema (crackles, orthopnea, pink frothy sputum) 30 minutes after starting RBC transfusion. BNP is elevated. What is the diagnosis?",
            "a": "Transfusion-associated circulatory overload (TACO) — too much volume too fast in a volume-sensitive patient (heart failure, renal disease, age >65)",
            "rationale": "TACO is cardiogenic pulmonary edema from volume overload. Treatment: STOP transfusion, diuretics, oxygen, upright position. Prevention: slower infusion rates, diuretics pre-transfusion for high-risk patients."
          },
          {
            "id": "trans-100-4",
            "q": "A patient develops acute dyspnea, hypoxemia (SpO2 88%), and bilateral infiltrates on CXR 2 hours after transfusion. BNP is normal. What is the diagnosis?",
            "a": "Transfusion-related acute lung injury (TRALI) — non-cardiogenic pulmonary edema from immune or non-immune mechanisms",
            "rationale": "TRALI presents with acute respiratory distress + pulmonary edema WITHOUT elevated BNP/pulmonary pressures (distinguishes from TACO). TRALI is a medical emergency requiring supportive care (oxygen, mechanical ventilation if needed)."
          },
          {
            "id": "trans-100-5",
            "q": "A patient 3 days post-transfusion develops fever (38.2°C), jaundice, dark urine, and Hgb drops from 9.2 to 8.1. Direct Coombs is positive. What is the diagnosis?",
            "a": "Delayed hemolytic transfusion reaction (DHTR) — occurs days after transfusion from alloantibodies to minor blood group antigens",
            "rationale": "DHTR occurs when alloimmunized patients are retransfused with incompatible blood (minor antigen mismatch missed on initial screen). Positive Coombs + hemolysis days later is classic. Prevention: pre-transfusion antibody screening."
          },
          {
            "id": "trans-100-6",
            "q": "A patient transfused with 2 units RBCs develops acute fever (39.4°C), hypotension (BP 92/58), WBC 18K, tachycardia 128, and diarrhea. Blood cultures grow Staphylococcus aureus. What occurred?",
            "a": "Bacterial contamination of blood product — septic shock from transfused bacterially contaminated RBCs",
            "rationale": "Bacterial contamination is rare but catastrophic; typically from poor phlebotomy technique or cold-stored blood becoming contaminated. Presents as septic shock with fever + hypotension. Requires antibiotics + ICU support."
          },
          {
            "id": "trans-100-7",
            "q": "A patient with severe multiple myeloma receiving RBC transfusion develops acute respiratory distress, hypoxemia, and elevated BNP within 4 hours. What transfusion complication unique to high-risk patients is likely?",
            "a": "TACO (transfusion-associated circulatory overload) from combination of disease (marrow failure, renal dysfunction from Bence Jones proteins) and transfusion volume",
            "rationale": "MM patients have high TACO risk from renal disease + marrow dysfunction reducing tolerance for rapid infusion. Slower rates, diuretics, and careful fluid balance are essential in high-risk populations."
          }
        ],
        "200": [
          {
            "id": "trans-200-0",
            "q": "During AHTR, a patient develops oliguria (urine output 0.2 mL/kg/hr) and rising creatinine 1.2 → 2.8. Urinalysis shows dark urine with myoglobin but no RBCs on microscopy. What is the mechanism of renal injury?",
            "a": "Acute tubular necrosis (ATN) from myoglobinuria (hemolysis releasing myoglobin into filtrate, causing tubular toxicity and obstruction)",
            "rationale": "Hemoglobin from destroyed RBCs is filtered as myoglobin; high concentrations cause tubular toxicity and precipitation → AKI. Prevention: aggressive hydration (urine output >200 mL/hr) to dilute myoglobin."
          },
          {
            "id": "trans-200-1",
            "q": "A patient with prior transfusion develops DHTR. Direct Coombs is positive, retic is 12%, and INR/aPTT are prolonged. What complication has developed?",
            "a": "DHTR with possible DIC (disseminated intravascular coagulation) from severe hemolysis triggering coagulation cascade",
            "rationale": "Severe DHTR can progress to DIC, consuming clotting factors and platelets. INR/aPTT elevation during DHTR warrants immediate coagulation studies and possible FFP/platelets."
          },
          {
            "id": "trans-200-2",
            "q": "A patient receiving blood during massive transfusion protocol (8 units PRBC in 2 hours) develops sudden respiratory distress, bilateral infiltrates, and hypoxemia. BNP is borderline high. What is the diagnosis?",
            "a": "TRALI is more likely than TACO in rapid massive transfusion (multiple donors, immune mediators accumulate); TACO usually develops over hours, not acutely with rapid transfusion",
            "rationale": "Rapid massive transfusion increases TRALI risk (multiple donor exposures, accumulation of lipids/cytokines in stored blood triggering lung injury). TACO is more insidious; TRALI is acute."
          },
          {
            "id": "trans-200-3",
            "q": "A post-transfusion patient has positive direct Coombs but hemoglobin is stable and there is no hemoglobinuria. What is the implication?",
            "a": "Positive Coombs from transfused alloantibodies doesn't necessarily mean active hemolysis — monitor Hgb trend and clinical status before assuming DHTR",
            "rationale": "Positive Coombs can persist for weeks post-transfusion without active hemolysis. DHTR diagnosis requires hemolysis (falling Hgb) + positive Coombs + clinical symptoms (fever, jaundice)."
          },
          {
            "id": "trans-200-4",
            "q": "A patient receives irradiated RBCs (to prevent graft-versus-host disease). During transfusion, he develops fever, chills, and back pain. AHTR is suspected. Will irradiation explain this reaction?",
            "a": "NO — irradiation inactivates white blood cells but does not protect against ABO incompatibility or other immune hemolysis mechanisms causing AHTR",
            "rationale": "Irradiated RBCs still carry all RBC antigens; irradiation only kills WBCs to prevent transfusion-associated GVHD. AHTR can still occur from ABO/Rh incompatibility or other alloantibodies."
          },
          {
            "id": "trans-200-5",
            "q": "A multiply-transfused patient with sickle cell disease receives RBCs matched for ABO, Rh, and K antigen. During transfusion, AHTR occurs. What blood group system likely explains this?",
            "a": "A minor blood group antigen outside the routinely tested panel (Duffy, Kidd, MNS, Kell, Rh subtypes) — comprehensive phenotyping and antigen-matched blood are needed for future transfusions",
            "rationale": "SCD patients become alloimmunized from repeated transfusions and require extended phenotyping to identify multiple minor antigen antibodies. Comprehensive matching prevents future reactions."
          },
          {
            "id": "trans-200-6",
            "q": "A patient with severe anemia (Hgb 5.2) and acute leukemia receives RBC transfusion. He develops acute respiratory distress but maintains normal BNP. Chest X-ray shows new bilateral infiltrates. Diagnosis?",
            "a": "TRALI (transfusion-related acute lung injury) — acute leukemia is a risk factor for TRALI due to circulating inflammatory mediators/leukocyte activation",
            "rationale": "Acute leukemia (and sepsis, massive transfusion) increases TRALI risk. Normal BNP rules out TACO. TRALI treatment is supportive (oxygen, possible mechanical ventilation)."
          },
          {
            "id": "trans-200-7",
            "q": "A patient who previously tolerated RBC transfusions develops anaphylaxis (stridor, angioedema, hypotension) during a routine transfusion. What is likely different about THIS transfusion or patient status?",
            "a": "IgA deficiency in the patient who has now formed anti-IgA antibodies (previous transfusions contained IgA) — anaphylactic reaction to IgA in blood products",
            "rationale": "IgA-deficient patients who receive IgA-containing transfusions can form anti-IgA antibodies over time. Subsequent transfusion triggers anaphylaxis. Solution: washed RBCs or IgA-depleted products for future transfusions."
          }
        ],
        "300": [
          {
            "id": "trans-300-0",
            "q": "A post-op patient receives 5 units of PRBCs for hemorrhage. 30 minutes after the 5th unit, he develops sudden fever (39.8°C), hypotension (85/52), WBC 22K, acidosis pH 7.24. Blood cultures are pending. What is the emergency?",
            "a": "Bacterial contamination (septic shock) vs. AHTR — STOP transfusion immediately, start sepsis protocol (broad-spectrum antibiotics, fluids, vasopressors) and emergency compatibility workup",
            "rationale": "Septic shock from transfused bacterial contamination is rare but lethal. High fever + hypotension + metabolic acidosis during/immediately after transfusion suggests contamination. Differentiation from AHTR requires urgency in treatment (both require transfusion cessation)."
          },
          {
            "id": "trans-300-1",
            "q": "A transfused patient develops AHTR with severe hemoglobinuria (dark cola-colored urine), oliguria (urine output 0.1 mL/kg/hr), rising Cr 1.0 → 3.8, and K 6.8. What is the FIRST intervention to prevent fatal hyperkalemia?",
            "a": "Aggressive IV hydration to dilute myoglobin and maintain high urine output (goal >200 mL/hr) — this is FIRST priority; calcium gluconate for cardiac protection comes next if K remains elevated",
            "rationale": "Hyperkalemia from hemolysis + AKI is life-threatening. Fluids dilute myoglobin and myoglobin-induced K release, reducing AKI risk. Calcium gluconate (stabilizes cardiac membrane) is important but fluid resuscitation is first-line."
          },
          {
            "id": "trans-300-2",
            "q": "A patient with autoimmune hemolytic anemia (AIHA) on corticosteroids receives 'compatible' cross-matched RBCs for severe anemia. During transfusion, AHTR occurs. Why was the transfusion incompatible despite cross-match?",
            "a": "Patient's own warm autoantibodies coated transfused donor RBCs just as they coat native RBCs — 'compatible' cross-match is impossible in AIHA; transfusion should be avoided if possible or given with highest compatible blood",
            "rationale": "AIHA patients have difficulty finding compatible blood because their autoantibodies bind donor RBCs. High-dose immunoglobulin or exchange transfusion (rather than simple transfusion) may be considered in life-threatening AIHA anemia."
          },
          {
            "id": "trans-300-3",
            "q": "A patient develops TRALI (acute respiratory distress, bilateral infiltrates, normal BNP) 1 hour after transfusion. What is the pathophysiology and expected timeline for recovery?",
            "a": "TRALI from donor immune mediators (lipids, cytokines) activating recipient neutrophils in lungs → capillary leak/pulmonary edema. Recovery: 48-72 hours with supportive care in most cases; some progress to ARDS",
            "rationale": "TRALI mechanisms: donor HLA/HNA antibodies + recipient immune cells OR biological response modifiers in stored blood → lung inflammation. Most TRALI resolves within 3 days; severe cases require mechanical ventilation."
          },
          {
            "id": "trans-300-4",
            "q": "A patient with newly diagnosed pancreatic cancer receiving RBC transfusion develops TACO (pulmonary edema, BNP 1200, elevated PCWP). Diuretics and oxygen are given. Should transfusion be resumed after diuresis?",
            "a": "Transfusion should resume CAUTIOUSLY with modified approach: slower infusion rate, diuretics given before/during transfusion, and smaller transfusion units to achieve Hgb goal",
            "rationale": "TACO doesn't contraindicate future transfusion in truly anemic patients; it requires risk-mitigation strategies (slower rates, diuretics, smaller aliquots). Alternative: supplemental iron + erythropoiesis-stimulating agents if appropriate."
          },
          {
            "id": "trans-300-5",
            "q": "A patient receives RBC transfusion in the OR. Two hours post-op, his urine becomes tea-colored. Hgb has fallen from 10.2 to 8.9 despite transfusion. Lactate is 4.2. What is the primary concern?",
            "a": "Acute hemolytic transfusion reaction (AHTR) with acute kidney injury from myoglobinuria — immediate aggressive hydration and diuretics to prevent renal failure",
            "rationale": "Hemoglobinuria (tea-colored urine) + falling Hgb + elevated lactate (shock from hemolysis) = AHTR. Myoglobin-induced AKI is the primary life-threatening complication requiring urgent fluid resuscitation."
          },
          {
            "id": "trans-300-6",
            "q": "A patient with group O blood is accidentally transfused 2 units of group AB blood (ABO incompatibility). Transfusion is stopped after 100 mL. What complication is most likely?",
            "a": "ABO AHTR (immediate, severe) — monitor closely for shock, DIC, and acute kidney injury; supportive care (fluids, pressors if hypotensive, diuretics for urine output)",
            "rationale": "ABO incompatibility causes immediate, severe AHTR (in vivo hemolysis) because naturally occurring anti-A/anti-B IgM antibodies activate complement. Even small volumes (100 mL) can cause fatal hemolysis."
          },
          {
            "id": "trans-300-7",
            "q": "A pregnant woman with severe anemia receives RBC transfusion. Hours later, she develops allergic reaction (urticaria, mild angioedema). Can the transfusion resume if antihistamines/steroids are given?",
            "a": "Mild allergic reaction can typically resume after antihistamines, BUT pregnancy adds concern for hemolytic disease risk in fetus if alloimmunization occurs — carefully weigh risks",
            "rationale": "Pregnancy is a special consideration in transfusion-related alloimmunization. Mild allergic reactions are usually manageable, but in pregnant patients, any alloimmunization risk must be weighed against maternal anemia risk to fetus."
          }
        ],
        "400": [
          {
            "id": "trans-400-0",
            "q": "A patient with profound IgA deficiency (IgA <5 mg/dL) and known anti-IgA antibodies receives standard RBC transfusion in the OR. During transfusion, anaphylaxis develops (stridor, shock). What is the emergency management?",
            "a": "IM epinephrine 0.3-0.5 mg immediately, IV access, oxygen, stop transfusion — provide IgA-washed or IgA-depleted RBCs for future transfusions",
            "rationale": "IgA-deficient patients with anti-IgA antibodies experience anaphylaxis with standard blood products (which contain donor IgA). Life-threatening anaphylaxis requires epinephrine; future transfusions need IgA-depleted blood."
          },
          {
            "id": "trans-400-1",
            "q": "A patient transfused 10 units of RBCs in massive transfusion protocol (trauma, hemorrhagic shock) develops acute respiratory distress, severe hypoxemia (PaO2 48), bilateral 'white-out' on CXR, and requires mechanical ventilation. What is the diagnosis?",
            "a": "ARDS from TRALI (or combination TRALI + other causes: aspiration, infection) — mortality is 10-20% even with supportive care",
            "rationale": "Massive transfusion dramatically increases TRALI risk due to multiple blood donors and accumulation of biological response modifiers in stored RBCs. ARDS from TRALI has high mortality; treatment is supportive (mechanical ventilation, prone positioning if needed)."
          },
          {
            "id": "trans-400-2",
            "q": "A patient with acute leukemia and severe infection receives transfusion and develops DHTR 4 days post-transfusion with hemoglobinuria and Hgb drop to 5.1. Can transfusion be safely repeated?",
            "a": "Only with extensively matched blood — obtain extended phenotyping and transfuse against identified alloantibodies, or consider autologous reinfusion/cell salvage if massive bleeding",
            "rationale": "DHTR indicates alloimmunization; same blood source will cause recurrence. Extended typing identifies offending antibody/antigen pairs. Compatibility cannot be guaranteed but extended matching significantly improves safety."
          },
          {
            "id": "trans-400-3",
            "q": "A multiply-transfused patient with sickle cell disease receives matched transfusion and develops acute chest syndrome (fever, hypoxemia, infiltrates) within 24 hours of transfusion. Is this TRALI or acute chest syndrome (ACS)?",
            "a": "Likely SCD-associated ACS triggered/worsened by transfusion, not classic TRALI — differentiation may be impossible; treat as ACS (exchange transfusion, oxygen, antibiotics) + supportive care",
            "rationale": "SCD patients have high risk for ACS, which can be precipitated by transfusion or concurrent infection. Distinguishing ACS from TRALI is difficult clinically; management overlaps (supportive care, oxygenation, possibly exchange transfusion)."
          },
          {
            "id": "trans-400-4",
            "q": "A patient develops AHTR during the 1st unit of transfusion (previously transfused patient). Blood bank reports ABO/Rh match is correct but there was an 'error in pre-transfusion identification.' What error likely occurred?",
            "a": "Patient misidentification — wrong patient received the transfusion (compatible cross-match doesn't guarantee compatibility for recipient's own antibodies). Emergency verification of patient identity is needed",
            "rationale": "AHTR with correct ABO/Rh typing but ID error suggests wrong patient received blood. Pre-transfusion ID verification is critical (2-identifier minimum at bedside). This is a sentinel event with high mortality if unrecognized."
          },
          {
            "id": "trans-400-5",
            "q": "A patient recovers from AHTR (managed with fluids, diuretics, mechanical ventilation). Days later, he develops new anemia (Hgb 6.8), jaundice, elevated indirect bilirubin, and positive Coombs. What is this?",
            "a": "Delayed hemolytic transfusion reaction (DHTR) from alloimmunization during acute transfusion — occurs days after initial reaction from minor alloantibody emergence",
            "rationale": "DHTR can follow initial AHTR or develop independently days later. It requires repeat transfusion with incompatible blood (minor antigen mismatch). Extended phenotyping prevents future reactions."
          },
          {
            "id": "trans-400-6",
            "q": "A patient with warm AIHA (positive DAT) requires transfusion. Which approach is SAFEST for identifying blood compatible enough to transfuse?",
            "a": "Obtain extended RBC phenotype and rare blood panel to find least-incompatible blood; perform careful pre-transfusion compatibility testing with patient's own autoantibodies",
            "rationale": "AIHA creates a challenge: patient's autoantibodies coat all RBCs. Extended phenotyping may identify blood lacking target autoantigen (if autoantibody is specific). Worst-case: all blood is 'incompatible'; life-threatening anemia may require emergency transfusion anyway."
          },
          {
            "id": "trans-400-7",
            "q": "A post-transfusion patient develops microangiopathic hemolytic anemia (schistocytes on smear, elevated LDH, low platelets). Is this a transfusion reaction?",
            "a": "MAHA (thrombotic microangiopathy) is NOT a classic transfusion reaction but may be triggered by transfusion in susceptible patients (TTP, HUS, DIC risk) — treat underlying condition, not transfusion reaction",
            "rationale": "MAHA/thrombotic microangiopathy can be worsened by transfusion in predisposed patients. Distinction: if MAHA develops DURING transfusion from the transfusion itself, stop transfusion and treat the MAHA (plasma exchange for TTP, supportive care for HUS)."
          }
        ],
        "500": [
          {
            "id": "trans-500-0",
            "q": "A patient with severe AHTR (hemoglobinuria, oliguria, Cr 4.2, K 7.1, acidosis) develops refractory hyperkalemia despite calcium gluconate, insulin/glucose, and sodium bicarbonate. What is the next emergency step?",
            "a": "Emergent hemodialysis (or continuous venovenous hemofiltration in unstable patients) — hyperkalemia unresponsive to medical therapy with AKI is life-threatening",
            "rationale": "Medical therapies for hyperkalemia (calcium, insulin/glucose, bicarbonate, beta-agonists) have limited efficacy. AKI from AHTR prevents potassium excretion; dialysis is required to remove potassium and manage AKI."
          },
          {
            "id": "trans-500-1",
            "q": "A patient develops TRALI (bilateral pulmonary edema, mechanical ventilation required) after transfusion. 48 hours later, he improves enough to extubate. A retrospective antibody panel identifies HLA antibodies in the DONOR's plasma. What should be done?",
            "a": "The implicated blood donor should be counseled about TRALI risk and identified in the registry — donors with HLA antibodies can cause TRALI in recipients with matching HLA antigens",
            "rationale": "Donor HLA antibodies are a known cause of TRALI. Once identified, donors should avoid donating products rich in plasma (FFP, platelets). This is a rare but critical finding for blood safety."
          },
          {
            "id": "trans-500-2",
            "q": "A multiply-transfused patient with AML develops positive DAT but is found to have multiple alloantibodies (anti-K, anti-Kidd, anti-Duffy) spanning multiple blood group systems. Finding compatible blood is near-impossible. What is the solution?",
            "a": "Contact rare blood registries/rare donor locator services, obtain extensively phenotyped donor blood, or consider autologous reinfusion/cell salvage during emergency bleeding",
            "rationale": "Severe alloimmunization (multiple antibodies) makes compatible transfusion extremely difficult. Rare blood banks and international registries can locate compatible donors. In emergencies, cell salvage may avoid alloimmunization triggers."
          },
          {
            "id": "trans-500-3",
            "q": "A patient receives RBC transfusion and develops TRALI (respiratory distress, infiltrates, normal BNP). A second transfusion from DIFFERENT donors 48 hours later causes near-identical TRALI. What is the likely mechanism?",
            "a": "Recipient immune-mediated TRALI (rare) OR biological response modifiers in stored RBCs (lipids, cytokines) accumulating with repeated transfusions triggering repeated TRALI — avoid further transfusions if possible",
            "rationale": "Most TRALI is donor-specific (HLA/HNA antibodies), but recipient-driven TRALI can occur from recipient's own immune activation. Repeated TRALI with different donors suggests recipient factors or stored blood mediators."
          },
          {
            "id": "trans-500-4",
            "q": "A patient in septic shock receives massive transfusion (15 units PRBCs, 10 units FFP, 6 units platelets in 4 hours). He develops ARDS-level respiratory distress, worsening shock, and coagulopathy (PT >25, aPTT>100). What multifactorial complication has developed?",
            "a": "Combination of transfusion reactions (TRALI, TACO possible), dilutional coagulopathy, and sepsis-induced DIC — mortality extremely high despite aggressive supportive care",
            "rationale": "Massive transfusion in septic shock causes a 'perfect storm': TRALI + dilutional coagulopathy + DIC + ongoing infection. Mortality is 40-60% even with ICU support. Hemostatic resuscitation protocols (FFP:PRBC ratios) help but don't eliminate risk."
          },
          {
            "id": "trans-500-5",
            "q": "A patient with SEVERE IgA deficiency (IgA <5 mg/dL) but NO anti-IgA antibodies receives standard blood transfusion. Does anaphylaxis occur? What is the risk for future transfusions?",
            "a": "NO anaphylaxis occurs without anti-IgA antibodies — risk increases over time as patient receives multiple transfusions and forms anti-IgA alloimmunization (typically within 5-10 transfusions)",
            "rationale": "IgA-deficient patients develop anti-IgA antibodies AFTER repeated transfusion exposure. Initial transfusions are safe, but risk escalates with each unit. IgA-washed blood is eventually needed."
          },
          {
            "id": "trans-500-6",
            "q": "A patient develops DHTR (4 days post-transfusion with hemoglobinuria). Extended antibody panel identifies anti-Rh17 (rare alloantibody). What is the only source of compatible blood?",
            "a": "Blood from RhD-positive donors who are ALSO Rh17-negative (rare variant) — national rare blood registries must be contacted to locate suitable donors",
            "rationale": "Rare alloantibodies (like anti-Rh17) require blood from exceptionally rare donors with matching phenotypes. Blood banks maintain registries of rare-antigen-negative donors for exactly this situation."
          },
          {
            "id": "trans-500-7",
            "q": "A previously transfused patient is awaiting major surgery and has been found to have multiple alloantibodies (anti-K, anti-E, anti-Fy(a)). Comprehensive blood bank workup identifies NO compatible blood in the national registry. The patient requires urgent surgery. What is the ethical and clinical approach?",
            "a": "Emergency transfusion of 'least-incompatible' blood with patient and family informed of risks — document discussion thoroughly; use lowest transfusion volume possible; autologous reinfusion/cell salvage if available",
            "rationale": "This is a rare but real clinical crisis. When no compatible blood exists and surgery is life-saving, transfusing 'least-incompatible' blood may be the only option. Shared decision-making and careful documentation are essential."
          }
        ]
      }
    },

    /* ========== WEEK 3: ELECTROLYTES & PERIOPERATIVE ========== */
    {
      "id": "electrolytes-clinical",
      "name": "Electrolytes: Critical Judgment",
      "source": "week3-electrolytes.html",
      "clues": {
        "100": [
          {
            "id": "elec-100-0",
            "q": "A 68-year-old post-op patient develops confusion and headache on POD2. Vitals stable, no fever. Labs: Na 118, K 3.8, osmolarity 245. Why is slow correction essential here?",
            "a": "Rapid Na correction causes osmotic demyelination syndrome (ODS) from brain cell shrinkage — correct slowly 8-12 mEq/L in 24h",
            "rationale": "This is symptomatic hyponatremia with seizure risk. However, the brain has adapted to chronic low Na by reducing intracellular osmolytes. Rapid correction causes water to leave cells, shrinking the brain and causing demyelination. Slow correction allows gradual readjustment."
          },
          {
            "id": "elec-100-1",
            "q": "A dialysis patient with K 6.8 and peaked T-waves on EKG complains of chest tightness. Which intervention protects the heart FIRST before removing potassium?",
            "a": "Calcium gluconate 10% IV — stabilizes cardiac membrane to prevent dysrhythmias; then insulin/glucose to shift K intracellular",
            "rationale": "Calcium is cardioprotective and given first for EKG changes. Insulin and albuterol drive K into cells but take time. Dialysis removes K but is not immediate. Calcium buys time and prevents fatal arrhythmias."
          },
          {
            "id": "elec-100-2",
            "q": "A patient with hypercalcemia (12.1 mg/dL) and new AKI receives thiazide diuretic and loop diuretic together. Why is this dangerous?",
            "a": "Thiazides INCREASE calcium reabsorption — counteract treatment and worsen hypercalcemia; only loop diuretics should be used",
            "rationale": "Thiazide diuretics increase proximal tubule calcium reabsorption. In hypercalcemia, loop diuretics increase urinary Ca excretion. Using both is self-defeating and will fail to lower calcium."
          },
          {
            "id": "elec-100-3",
            "q": "A patient with Crohn's disease, diarrhea x 5 days develops weakness and cramping. Labs: K 2.8, Mg 1.4, Ca 7.2. Why might supplementing only potassium fail to resolve symptoms?",
            "a": "Hypomagnesemia prevents intracellular potassium and calcium uptake — all three must be repleted simultaneously",
            "rationale": "Mg is a cofactor for Na-K-ATPase; low Mg impairs K and Ca handling. Refractory hypokalemia or hypocalcemia always suggests hypomagnesemia. All three electrolytes must be addressed together."
          },
          {
            "id": "elec-100-4",
            "q": "A patient on digoxin develops hypokalemia (K 3.0) with premature ventricular contractions. Why is this patient at higher risk than others with same K level?",
            "a": "Digoxin toxicity increases with low K — hypokalemia increases myocardial sensitivity to digoxin, causing dangerous arrhythmias even at therapeutic digoxin levels",
            "rationale": "Digoxin sensitivity is enhanced by hypokalemia, hypomagnesemia, and hypercalcemia. A K of 3.0 in a digoxin patient is more dangerous than in non-digoxin patient because of increased toxicity risk."
          },
          {
            "id": "elec-100-5",
            "q": "A trauma patient receives 15 units PRBCs rapidly. Next labs: K 6.2 (up from 4.2 pre-transfusion). The hyperkalemia is from which source?",
            "a": "Potassium leaking from stored RBC units during massive transfusion — also from tissue damage releasing intracellular K",
            "rationale": "Massive PRBC transfusion causes dual hyperkalemia: (1) K from lysed RBCs in stored blood, (2) K from trauma-induced cell death. This is acute hyperkalemia requiring immediate treatment."
          },
          {
            "id": "elec-100-6",
            "q": "A patient presents with tetany and positive Trousseau sign. Which lab abnormality is MOST likely?",
            "a": "Hypocalcemia (total Ca <8.5 or ionized Ca <4.5) — neuromuscular irritability from decreased nerve threshold",
            "rationale": "Trousseau sign (hand tetany after BP cuff inflation) and Chvostek sign are classic for hypocalcemia. These signs reflect increased neuronal excitability from low extracellular calcium."
          },
          {
            "id": "elec-100-7",
            "q": "A patient with severe hypernatremia (Na 162) is given D5W (hypotonic) IV. Why is this correction dangerous if done too fast?",
            "a": "Water rapidly entering brain cells from osmotic gradient causes cerebral edema and seizures; must correct slowly to prevent ODS and cerebral edema",
            "rationale": "Hypernatremia causes brain cell shrinkage. Chronic hypernatremia triggers compensatory intracellular accumulation of osmolytes. Rapid correction allows water influx, causing brain swelling. Correct at 8-10 mEq/L per 24h."
          }
        ],
        "200": [
          {
            "id": "elec-200-0",
            "q": "A 45-year-old with newly diagnosed multiple myeloma and hypercalcemia (13.2) is started on aggressive saline hydration and loop diuretics. When does bisphosphonate therapy begin and why?",
            "a": "After hydration is started (not immediately) — bisphosphonates take 48-72 hours to work but are potent; requires adequate renal perfusion first to avoid AKI",
            "rationale": "Dehydration is the first priority in hypercalcemia — it increases renal calcium reabsorption, worsening hypercalcemia. Bisphosphonates inhibit osteoclast bone resorption but work slowly; waiting ensures kidney function is preserved."
          },
          {
            "id": "elec-200-1",
            "q": "An ICU patient on continuous renal replacement therapy (CRRT) develops hypokalemia (K 2.8) despite normal dietary K intake. What is the mechanism?",
            "a": "CRRT removes electrolytes continuously; K losses exceed intake — dialysate potassium concentration must be increased or supplementation added",
            "rationale": "CRRT is continuous and non-selective; it removes K, Mg, PO4, and other electrolytes continuously. Unlike intermittent hemodialysis, there's no 'off' time for electrolyte rebound. Dialysate composition must be adjusted."
          },
          {
            "id": "elec-200-2",
            "q": "A patient with SIADH (Na 110) complains of severe headache and nausea. Serum osmolarity is 230. What is the SAFEST initial treatment?",
            "a": "Fluid restriction (not hypertonic saline initially) if NO seizures — serum osmolarity indicates very low but stable hyponatremia",
            "rationale": "Asymptomatic or slowly developing hyponatremia responds to fluid restriction. Serum osmolarity 230 is severe but the patient is not seizing (yet). Hypertonic saline risks ODS. Fluid restriction addresses the SIADH mechanism."
          },
          {
            "id": "elec-200-3",
            "q": "A patient with severe liver disease, ascites, and diuretic use develops Na 125, K 2.2, Cl 85. Why is this triad of electrolyte losses so dangerous?",
            "a": "Hypokalemia and hypochloremia prevent renal sodium reabsorption — creates 'refractory hyponatremia' where Na cannot be corrected until K and Cl are repleted",
            "rationale": "In cirrhosis, aggressive diuretic use causes contraction alkalosis + hypokalemic, hypochloremic, hyponatremic state. Intracellular K deficit impairs Na regulation. All three must be corrected together."
          },
          {
            "id": "elec-200-4",
            "q": "A patient receiving IV potassium supplementation develops shooting pain at the IV site. The IV line remains patent. What should be done?",
            "a": "Remove peripheral IV immediately; place central line (K is highly irritating to peripheral veins and causes thrombophlebitis/tissue necrosis) and restart central infusion",
            "rationale": "Potassium infusion through peripheral lines causes chemical phlebitis and tissue damage. Central line placement is required for K supplementation. Never push K as IV bolus (causes fatal hyperkalemia)."
          },
          {
            "id": "elec-200-5",
            "q": "A 72-year-old on furosemide daily for CHF has chronically low K (3.2) and Mg (1.5). He's started on ACE inhibitor for new diagnosis of systolic HF. What electrolyte complication is likely?",
            "a": "Acute hyperkalemia — ACE-I reduces aldosterone, decreasing renal K excretion; combined with chronic K depletion + diuretic use = paradoxical severe hyperkalemia",
            "rationale": "Loop diuretics cause K and Mg wasting. ACE inhibitors reduce K excretion. In this patient, ACE-I unmasks the danger: K cannot leave kidney despite baseline hypokalemia. Must monitor K closely and may need to reduce or hold ACE-I."
          },
          {
            "id": "elec-200-6",
            "q": "A patient with pancreatitis presents with severe hypocalcemia (Ca 6.8), elevated PO4 (6.2), and normal albumin. Why is calcium NOT being given immediately despite seizure risk?",
            "a": "High PO4 × low Ca = precipitation risk; giving Ca increases risk of soft-tissue calcification and AKI — must lower PO4 first (dialysis, restrict intake) before correcting Ca",
            "rationale": "In pancreatitis, saponification (Ca × PO4 precipitation in fat necrosis) traps calcium. Correcting Ca without lowering PO4 can worsen calcification. Paradoxically, Ca supplementation may be harmful. Lower PO4 first, then cautiously supplement Ca."
          },
          {
            "id": "elec-200-7",
            "q": "A patient develops torsades de pointes arrhythmia. EKG shows prolonged QT. Labs: Ca normal, K normal, Mg 1.3. What is the most likely cause and treatment?",
            "a": "Hypomagnesemia causes prolonged QT and torsades; magnesium sulfate 1-2g IV is immediately life-saving antiarrhythmic",
            "rationale": "Mg regulates cardiac repolarization. Even mild hypomagnesemia can cause torsades de pointes. This is often overlooked because K and Ca are normal. Mg must be checked and repleted urgently."
          }
        ],
        "300": [
          {
            "id": "elec-300-0",
            "q": "A hospitalized patient with SIADH has Na 115. He is asymptomatic but you're concerned about complications. What is the earliest sign that hyponatremia is worsening before seizures occur?",
            "a": "Changes in mental status (subtle confusion, irritability) — reflect early cerebral edema before seizures develop",
            "rationale": "Symptomatic hyponatremia progresses: confusion → restlessness → seizures → coma → death. The window between confusion and seizure is narrow. Frequent neuro checks catch early changes before crisis."
          },
          {
            "id": "elec-300-1",
            "q": "A patient with rhabdomyolysis develops hyperkalemia (K 7.2) despite aggressive IV hydration and loop diuretics. ABG shows pH 7.25 (acidosis). Why is acidosis worsening hyperkalemia management?",
            "a": "Acidosis prevents K shift into cells (insulin/albuterol are less effective); must correct acidosis with sodium bicarbonate to allow K internalization",
            "rationale": "Acidosis causes H to move out of cells and K to move out (electrical neutrality). This opposes the effect of insulin/glucose/albuterol which move K in. Bicarbonate corrects acidosis and allows K-shifting therapies to work."
          },
          {
            "id": "elec-300-2",
            "q": "A patient with concurrent hyponatremia (Na 118) and hyperkalemia (K 6.8) receives hypertonic saline. Why does this worsen hyperkalemia temporarily before improving it?",
            "a": "Hypertonic saline increases serum osmolarity, causing water to leave cells; initially releases K from cells → higher K; but corrects hyponatremia which then allows K-shifting therapies to work",
            "rationale": "This is a complex scenario. Hypertonic saline causes transient hyperkalemia from cellular fluid shift, but it's necessary to correct life-threatening hyponatremia. The K is managed concurrently with other therapies."
          },
          {
            "id": "elec-300-3",
            "q": "A burn patient has severe hypocalcemia (Ca 6.5) and hyperkalemia (K 6.9) from rhabdomyolysis. Both are life-threatening. Which gets treated FIRST and why?",
            "a": "Hyperkalemia (calcium gluconate given first to protect heart) — then manage Ca and K with other measures; cardiac protection takes priority over slow Ca replacement",
            "rationale": "Hyperkalemia with EKG changes is immediately lethal from dysrhythmias. Hypocalcemia causes tetany/seizures but slower progression. Give calcium gluconate for cardiac protection, then address both electrolytes with coordinated therapy."
          },
          {
            "id": "elec-300-4",
            "q": "A patient with metastatic cancer on loop diuretics develops hyponatremia (Na 122) and hypomagnesemia (Mg 1.2). The hyponatremia does NOT respond to fluid restriction. Why not?",
            "a": "Hypomagnesemia impairs ADH function and Na regulation in kidneys — must replete Mg before Na correction will work",
            "rationale": "Mg is required for ADH receptor signaling. Severe hypomagnesemia causes SIADH-like pattern (inappropriate water retention despite low Na). Correcting Mg often resolves the hyponatremia without additional intervention."
          },
          {
            "id": "elec-300-5",
            "q": "An elderly patient with hyperparathyroidism has chronic hypercalcemia (11.8). She now has AKI (Cr 2.4, up from 1.0). What is the mechanism of hypercalcemia-induced AKI?",
            "a": "Hypercalcemia causes nephrogenic diabetes insipidus (polyuria, dehydration) leading to volume depletion AKI; also causes intrarenal vasoconstriction and calcium-phosphate precipitation in tubules",
            "rationale": "Chronic hypercalcemia causes nephrogenic DI from impaired kidney ability to concentrate urine. Polyuria → dehydration → prerenal AKI. Concurrent intrarenal precipitation of CaPO4 damages tubules. Volume repletion is key."
          },
          {
            "id": "elec-300-6",
            "q": "A patient on both spironolactone and ACE inhibitor develops life-threatening hyperkalemia (K 7.5) despite normal renal function. What specific change should be made first?",
            "a": "Hold spironolactone immediately — dual RAAS blockade (ACE-I + K-sparing diuretic) in normal renal function paradoxically causes severe hyperkalemia",
            "rationale": "ACE-I alone or spironolactone alone is usually safe in normal kidneys, but together they create dangerous hyperkalemia by reducing aldosterone activity (K-sparing + reduced excretion). One agent must be stopped."
          },
          {
            "id": "elec-300-7",
            "q": "A patient with critical illness and sepsis develops hypophosphatemia (PO4 1.2). Why might aggressive phosphate repletion lead to complications?",
            "a": "Rapid PO4 repletion risks severe hypocalcemia from Ca × PO4 precipitation; also causes hyperkalemia from cellular K shifts — must replete slowly and monitor Ca, K closely",
            "rationale": "PO4 repletion is complex: too fast causes hypocalcemia and hyperkalemia. Phosphate drives K into cells initially, then K rebounds. Soft tissue calcification is also risk. IV PO4 must be given slowly with close monitoring."
          }
        ],
        "400": [
          {
            "id": "elec-400-0",
            "q": "A patient with SIADH refractory to fluid restriction (Na remains 108 despite 600mL/day restriction) receives vaptans (vasopressin antagonist). What complications must be monitored?",
            "a": "Osmotic demyelination syndrome risk (too-rapid Na correction) — must increase Na slowly even with vaptans (max 6-8 mEq/L per 24h); also need to distinguish SIADH type to avoid ineffective therapy",
            "rationale": "Vaptans work by free water excretion, but can overcorrect if not monitored. ODS remains a risk even with pharmacotherapy. The underlying SIADH type (euvolemic vs. hypovolemic) determines success."
          },
          {
            "id": "elec-400-1",
            "q": "A post-transplant patient on tacrolimus and diuretics develops simultaneous hyponatremia (Na 120), hyperkalemia (K 6.5), and metabolic acidosis (pH 7.30). What is the likely diagnosis linking all three?",
            "a": "Type IV renal tubular acidosis (hypoaldosteronism) from tacrolimus nephrotoxicity — causes Na wasting, K retention, and acid retention simultaneously",
            "rationale": "Tacrolimus causes RTA Type IV by impairing aldosterone function. This causes the triad: Na wasting (hyponatremia), K retention (hyperkalemia), and acid retention (acidosis). Managing the tacrolimus is key."
          },
          {
            "id": "elec-400-2",
            "q": "A dialysis patient with severe secondary hyperparathyroidism has chronic hypercalcemia (10.8) and hyperphosphatemia (7.2). After parathyroidectomy, why is aggressive Ca/PO4 management critical in the immediate postop period?",
            "a": "'Hungry bone syndrome' — suddenly low PTH allows rapid bone uptake of Ca/PO4, causing severe hypocalcemia/hypophosphatemia that can cause tetany/seizures/arrhythmias",
            "rationale": "Post-parathyroidectomy, PTH drops instantly but bones are 'starved' for mineralization. They rapidly remove Ca and PO4 from serum. Severe hypocalcemia can develop within hours. Prophylactic Ca/PO4 supplementation prevents crisis."
          },
          {
            "id": "elec-400-3",
            "q": "An ICU patient on mechanical ventilation with severe sepsis has paradoxically elevated serum osmolarity despite hyponatremia (Na 125, osmolarity 310). What is causing this osmolar gap?",
            "a": "Unmeasured osmoles from sepsis (lactate, acetoacetate, unmeasured electrolytes) or artifact from pseudohyponatremia (hyperlipidemia/hyperproteinemia if lab uses older methods)",
            "rationale": "Calculated osmolarity = 2(Na) + glucose/18 + BUN/2.8. An osmolar gap suggests unmeasured osmoles (lactate >8, ketones, ethanol, osmotic laxatives) or lab artifact. Critical to identify cause."
          },
          {
            "id": "elec-400-4",
            "q": "A patient with advanced liver disease has worsening hyponatremia (Na 110) unresponsive to fluid restriction and albumin supplementation. Ascites is massive despite diuretics. What is the likely mechanism and best treatment?",
            "a": "Severe portal hypertension with 'hypervolemic hyponatremia' (excess total body Na/water with more water than Na) — may need terlipressin (vasopressin analog) to improve renal perfusion and Na excretion",
            "rationale": "Cirrhosis with portal hypertension causes splanchnic vasodilation, reflex activation of RAAS, and both Na and water retention (but proportionally more water). Standard fluid restriction may worsen renal failure. Terlipressin improves renal perfusion."
          },
          {
            "id": "elec-400-5",
            "q": "A patient post-TURP (transurethral resection of prostate) develops seizures 2 hours after surgery. Na 115. Why is the hyponatremia in TURP syndrome dangerous compared to other hyponatremia?",
            "a": "TURP syndrome causes ACUTE hyponatremia from rapid absorption of hypotonic irrigation fluid — brain has no time to adapt with osmolyte shifts, causing severe cerebral edema and seizure risk even at Na >110",
            "rationale": "Chronic hyponatremia (Na 110) is often tolerated; acute hyponatremia (Na 115) from TURP causes severe symptoms. The brain hasn't had time to lose osmolytes, so rapid fluid shifts cause massive cerebral edema."
          },
          {
            "id": "elec-400-6",
            "q": "An athlete with exertional heat stroke develops severe hypernatremia (Na 158) and rhabdomyolysis (CK 8,000). Aggressive free water replacement starts but patient becomes oliguric. What complication developed?",
            "a": "Acute kidney injury from myoglobin precipitation in renal tubules worsened by hypernatremic dehydration — kidney cannot concentrate urine or excrete myoglobin efficiently",
            "rationale": "Heat stroke + rhabdo + hypernatremia creates perfect storm for AKI. Myoglobin precipitates in acid urine and concentrated urine (hypernatremia prevents dilution). Must give free water AND alkalize urine (bicarbonate) to prevent precipitation."
          },
          {
            "id": "elec-400-7",
            "q": "A patient with multiple myeloma, hypercalcemia (11.5), and stage 4 CKD receives IV bisphosphonate. 48 hours later, Ca drops to 7.5 (symptomatic hypocalcemia). Why did Ca drop so dramatically?",
            "a": "CKD impairs FGF23 regulation; bisphosphonate suppresses bone turnover dramatically in CKD → causes paradoxical severe hypocalcemia from reduced bone resorption without adequate PTH response",
            "rationale": "Bisphosphonates are safer in normal kidneys because PTH responds to rising PO4. In CKD, FGF23 is dysregulated; bisphosphonates can cause overshoot hypocalcemia. Dose must be adjusted and monitoring intensified."
          }
        ],
        "500": [
          {
            "id": "elec-500-0",
            "q": "A patient with congestive heart failure develops hyponatremia (Na 118) despite ACE inhibitor use. Euvolemia on exam. SIADH workup shows high ADH but 'appropriate' SIADH mechanism. What accounts for this paradox?",
            "a": "'Reset osmostat' variant of SIADH — patient's hypothalamus perceives lower 'set point' (Na 120) as normal, releasing ADH at this lower threshold; chronic; minimal neurologic risk despite low Na",
            "rationale": "Not all SIADH is from malignancy or CNS disease. Heart failure can cause reset osmostat where osmoregulation occurs at lower Na. This is chronic and better tolerated; overly aggressive correction risks ODS."
          },
          {
            "id": "elec-500-1",
            "q": "A patient with concurrent severe hypokalemia (K 2.0), hypomagnesemia (Mg 1.2), and hypocalcemia (Ca 6.8) from chronic diarrhea is on digoxin. All three electrolytes must be repleted. Which order of repletion minimizes digoxin toxicity?",
            "a": "Replete Mg FIRST (enables K/Ca handling), then K, then Ca — replete all three concurrently but Mg takes priority because it's required for K/Ca homeostasis and digoxin sensitivity decreases with normal Mg",
            "rationale": "Mg is the gatekeeper. Without it, K and Ca repletion fail, and digoxin toxicity worsens. The order: Mg first (synergistic effect), then concurrent K and Ca with frequent monitoring."
          },
          {
            "id": "elec-500-2",
            "q": "A patient with diabetic ketoacidosis (DKA) has Na 130 (hyponatremia). Labs: K 6.2 (hyperkalemia), glucose 580. Why is the Na falsely low and what is 'corrected Na'?",
            "a": "'Pseudohyponatremia' from hyperglycemia — high glucose osmotically draws water into extracellular space, diluting Na; corrected Na ≈ actual Na + 0.016(glucose-100); may reveal actual hypernatremia or severe hyponatremia",
            "rationale": "In DKA with hyperglycemia, measured Na is artificially low. Each 100 mg/dL glucose >100 lowers Na by ~2-3 mEq/L. Corrected Na calculation reveals true status. Treating DKA (lowering glucose) raises measured Na."
          },
          {
            "id": "elec-500-3",
            "q": "A 78-year-old with severe hyponatremia (Na 105) develops seizures during treatment with 3% saline. Neurology suspects osmotic demyelination syndrome (ODS). What is the clinical challenge in distinguishing ODS from worsening hyponatremia-induced seizures?",
            "a": "Both cause neurologic deterioration during Na correction — ODS has delayed onset (12-72h post-correction), worsens with rapid correction >8-12 mEq/L per 24h; seizures from Na <105 are immediate; MRI shows ODS later",
            "rationale": "This is a teaching case: ODS is caused by TOO-FAST correction. Once suspected, STOP rapid correction. Prognosis of ODS is poor; prevention (slow correction) is key. Document the rate of correction."
          },
          {
            "id": "elec-500-4",
            "q": "A patient with metastatic lung cancer develops SIADH (Na 112) and is treated with vaptans. Na improves to 128 over 4 days. Two weeks later, Na drops back to 110 despite continuing vaptans. What accounts for tolerance?",
            "a": "Aquaresis-induced volume depletion activates RAAS/baroreceptors, which override vaptan effect; also, cancer progression worsens SIADH severity; need concurrent sodium salt supplementation or change SIADH management approach",
            "rationale": "Vaptans work initially but can cause reflex volume depletion that reactivates compensatory RAAS. Hypovolemia overrides the vaptan effect. Adding hypertonic saline to vaptans (dual approach) often works better."
          },
          {
            "id": "elec-500-5",
            "q": "A patient on chronic loop diuretics and ACE-I develops acute severe hyperkalemia (K 7.8) despite good renal function (Cr 1.0). Sudden increase in serum creatinine to 1.4 occurs. What drug interaction caused this crisis?",
            "a": "NSAIDs (started for pain) added to ACE-I + diuretic causing acute AKI and hyperkalemia through triple mechanism: NSAID reduces renal perfusion, ACE-I reduces aldosterone, diuretic loses Mg/K — kidney can't excrete K",
            "rationale": "NSAIDs + ACE-I + diuretics = the 'deadly triad' for hyperkalemia. NSAIDs reduce GFR, ACE-I reduces K excretion, diuretics worsen Mg loss. Avoid NSAIDs in this setting or use cautiously with close K monitoring."
          },
          {
            "id": "elec-500-6",
            "q": "An ICU patient with severe sepsis and ARDS on vasopressors has hyponatremia (Na 122) worsening despite hypertonic saline. Urine osmolarity 800. Why is the Na still falling and what is the likely diagnosis?",
            "a": "Non-osmotic ADH release from sepsis/hypoxia overwhelming hypertonic saline effect; vasopressor-induced splanchnic vasoconstriction worsening SIADH; need to address sepsis + consider fluid restriction despite hypertonic saline",
            "rationale": "In sepsis, ADH is released by non-osmotic stimuli (hypoxia, cytokines, pain, stress). This is more powerful than osmotic regulators. Hypertonic saline alone won't overcome it; must treat sepsis and may need to restrict free water."
          },
          {
            "id": "elec-500-7",
            "q": "A post-op patient on continuous venovenous hemofiltration (CVVH) for AKI has variable serum Na (ranges 120-135) and variable K (ranges 2.5-6.8) day-to-day. Labs are always abnormal despite adjusting dialysate. What system problem is occurring?",
            "a": "Dialysate composition is being incorrectly prepared or compounded daily; batch-to-batch variation in Na/K concentration causing erratic electrolyte levels; must verify dialysate formulation consistency or use standardized premixed solutions",
            "rationale": "CVVH requires consistent dialysate composition. If labs swing wildly, suspect dialysate problems (expired, contaminated, incorrectly mixed). Most centers now use premixed, standardized bags to prevent this."
          }
        ]
      }
    },
    {
      "id": "perioperative-advanced",
      "name": "Perioperative Nursing: Advanced Management",
      "source": "week3-perioperative-nursing.html",
      "clues": {
        "100": [
          {
            "id": "peri-100-0",
            "q": "A patient scheduled for elective laparoscopic surgery presents with a full stomach (ate breakfast 2 hours pre-op). Surgery is scheduled for 1 hour. What is the best action?",
            "a": "Postpone surgery — NPO guidelines (8h for food, 2h for clear liquids) must be followed; aspiration risk during anesthesia outweighs surgical urgency in elective case",
            "rationale": "Full stomach increases aspiration risk. Anesthesia suppresses airway reflexes. A full stomach + supine positioning + intubation = formula for aspiration pneumonia. Elective surgery should be rescheduled."
          },
          {
            "id": "peri-100-1",
            "q": "During pre-op assessment, patient reports allergic reaction to propofol (pruritis, swelling 10 years ago). Anesthesia plans general anesthesia. What precaution is essential?",
            "a": "Use alternative anesthetics (etomidate, ketamine) — propofol allergy requires avoidance; inform anesthesia team immediately; have emergency medications (epinephrine, antihistamines) available",
            "rationale": "Propofol allergy (though rare) can range from mild pruritis to anaphylaxis. Document clearly and ensure anesthesia uses alternative induction agents. Anaphylaxis during anesthesia is catastrophic."
          },
          {
            "id": "peri-100-2",
            "q": "A 68-year-old with COPD is in pre-op holding. Baseline SpO2 88%. Anesthesia pre-medication includes morphine 10mg IM. 15 minutes later, SpO2 drops to 82%, patient drowsy. What is the priority action?",
            "a": "Supplemental oxygen immediately, consider naloxone if severe respiratory depression — morphine depresses respiratory drive in COPD patients who depend on hypoxic drive",
            "rationale": "COPD patients with CO2 retention lose hypoxic drive to breathe; morphine further depresses respiration. SpO2 <85% + drowsiness = respiratory emergency. Naloxone reversal may be needed."
          },
          {
            "id": "peri-100-3",
            "q": "Intraoperatively, patient receives succinylcholine as muscle relaxant. Heart rate jumps to 135, masseter muscles tighten, end-tidal CO2 rises sharply. What is the immediate action?",
            "a": "STOP succinylcholine immediately, increase oxygen/hyperventilation, prepare dantrolene — this is MALIGNANT HYPERTHERMIA until proven otherwise",
            "rationale": "Jaw clenching + tachycardia + elevated ETCO2 are EARLY signs of MH. Do not wait for fever. Discontinue succinylcholine (or any triggering anesthetic) immediately."
          },
          {
            "id": "peri-100-4",
            "q": "During pre-op, patient reveals family history of 'anesthesia problems' in multiple relatives. Specifics unknown. Patient is nervous but otherwise healthy. What should be done?",
            "a": "Defer elective surgery; genetic testing for malignant hyperthermia should be considered; document family history; if surgery is urgent, use non-triggering anesthetics (TIVA with propofol, avoid succinylcholine/volatile agents)",
            "rationale": "Positive family history of anesthesia complications raises suspicion for MH or other pharmacogenetic anesthesia problems. Genetic testing is available. Elective cases should be deferred pending testing; urgent cases need modified anesthesia."
          },
          {
            "id": "peri-100-5",
            "q": "In the PACU, patient extubated 30 minutes ago now develops respiratory distress, stridor, and drooling. Most recent vital: HR 128, BP 165/95, SpO2 88%. What is this likely complication?",
            "a": "Laryngospasm or post-extubation edema — may have been triggered by aggressive suctioning, secretions, or anesthesia irritation; needs immediate assessment for airway patency; may need re-intubation or topical anesthetics/steroids",
            "rationale": "Post-extubation stridor indicates laryngeal edema or spasm. Risk factors: prolonged intubation, aggressive suctioning, small tube size. Needs immediate airway assessment and possible intervention."
          },
          {
            "id": "peri-100-6",
            "q": "A post-op patient reports inability to pass urine 6 hours after spinal anesthesia. Bladder palpable above pubic symphysis. Vital signs stable. What is the nursing action?",
            "a": "Insert straight catheter (or Foley if unable to void post-removal) — spinal anesthesia causes temporary paralysis of bladder; emptying may occur spontaneously, but catheterization required if retention continues",
            "rationale": "Spinal anesthesia temporarily blocks parasympathetic function, preventing bladder contraction. Most patients void within 4-6h; if not, catheterization is needed to prevent overdistension and UTI."
          },
          {
            "id": "peri-100-7",
            "q": "During post-op report, the PACU nurse states 'patient had two episodes of nausea, gave Zofran (ondansetron), patient is fine now.' How should you respond?",
            "a": "Check the patient immediately for other post-op complications (pain, hypoxia, hypotension, medications given) — PONV (post-operative nausea/vomiting) that requires antiemetics may indicate unrecognized pain or other problems",
            "rationale": "PONV is common but not normal. Effective analgesia and anti-emetics are important, but PONV can mask serious complications. Ensure pain is controlled and other causes ruled out."
          }
        ],
        "200": [
          {
            "id": "peri-200-0",
            "q": "A 42-year-old with history of arthritis and GERD is scheduled for exploratory laparotomy. Current medications: ibuprofen daily, omeprazole daily, atorvastatin, clopidogrel (for prior MI). Pre-op instruction said 'hold all meds morning of surgery.' Which med should NOT have been held?",
            "a": "Clopidogrel (and other antiplatelet agents) — hold time depends on urgency; 5-7 days ideal but may proceed with clopidogrel if bleeding risk acceptable; NSAIDs should be held (surgical bleeding risk); statin and PPI can be held",
            "rationale": "Clopidogrel removal increases thrombotic risk (stent thrombosis, MI). NSAIDs should be held (bleeding risk). Timing depends on surgical urgency and cardiac risk. Surgeon/anesthesia must make this decision jointly."
          },
          {
            "id": "peri-200-1",
            "q": "A patient in the OR on isoflurane anesthesia suddenly becomes hypertensive (BP 180/110) and tachycardic (HR 142). Core temp 37.5°C. What is the FIRST differential diagnosis to consider?",
            "a": "Light anesthesia (inadequate anesthetic depth) causing sympathetic response — NOT malignant hyperthermia (no muscle rigidity, no ETCO2 elevation, normal temperature initially); deepen anesthesia and reassess",
            "rationale": "Hypertension + tachycardia alone are not MH. MH requires muscle signs + elevated ETCO2 + rising temperature. Light anesthesia causes sympathetic surge. Increase anesthetic depth first."
          },
          {
            "id": "peri-200-2",
            "q": "During gynecologic laparoscopy under general anesthesia, the surgeon inflates CO2 insufflation. Suddenly, BP drops to 88/52, heart rate drops to 48. What is this complication and how is it managed?",
            "a": "Vasovagal response (common with laparoscopy) — may be CO2 insufflation-related peritoneal irritation or hypercarbia; reduce insufflation pressure if possible, elevate legs, give IV fluid bolus, atropine if bradycardia persistent; consider repositioning to Trendelenburg",
            "rationale": "Laparoscopy with CO2 insufflation can cause vagal response. Hypercarbia from CO2 absorption also occurs. Management: lower insufflation pressure, increase minute ventilation to reduce CO2, IV fluids, atropine for bradycardia."
          },
          {
            "id": "peri-200-3",
            "q": "A patient undergoes major abdominal surgery with epidural anesthesia for post-op pain control. In the PACU, epidural is working well for pain. However, patient has NO lower extremity movement and cannot void (post-op hour 4). What explains this?",
            "a": "High epidural level from migration or excessive local anesthetic dose — causing temporary sensory/motor block of sacral nerves; monitor closely for resolution; if worsens or causes respiratory depression, may need urgent notification of anesthesia",
            "rationale": "Epidurals can migrate cephalad, especially with position changes. Sacral nerve blockade is temporary but must be distinguished from other post-op complications (DVT, compartment syndrome). Most resolve as anesthetic wears off."
          },
          {
            "id": "peri-200-4",
            "q": "A post-op patient 2 hours from recovery has severe pain (8/10) despite morphine IV given twice in PACU. Pain is localized to operative site. Dressing is intact, no drainage noted. What is the priority action?",
            "a": "Notify surgeon to evaluate — inadequately controlled pain despite opioids suggests possible post-op complications (bleeding, hematoma, compartment syndrome, bowel perforation); operative site must be re-assessed",
            "rationale": "Opioid-refractory pain in immediate post-op period is a red flag. Surgeon must evaluate for bleeding, infection, compartment syndrome. Do not just keep giving opioids without assessment."
          },
          {
            "id": "peri-200-5",
            "q": "A patient with severe post-op pain is on continuous epidural morphine (2 mg/h) but still has pain score 7/10. Respiratory rate 10, SpO2 92%. How should analgesia be adjusted?",
            "a": "Do NOT increase epidural dose — respiratory depression (RR 10) is a sign of opioid toxicity; notify anesthesia for possible dose reduction or change in analgesic agent; consider non-opioid adjuncts (regional blocks, NSAIDs, acetaminophen)",
            "rationale": "Respiratory depression limits opioid escalation. Multi-modal analgesia (combining techniques) is safer than increasing single-agent opioid. Regional blocks, NSAIDs, and other agents reduce opioid requirements."
          },
          {
            "id": "peri-200-6",
            "q": "During pre-op holding, patient with allergic rhinitis mentions 'I took my pseudoephedrine decongestant this morning because I was congested.' Later intraoperatively under general anesthesia, patient develops severe hypertension and tachycardia. Why is this problematic?",
            "a": "Pseudoephedrine is a sympathomimetic that increases anesthesia-related hypertension/tachycardia risk; combined with anesthetics (especially halothane) can cause serious dysrhythmias and myocardial ischemia",
            "rationale": "Sympathomimetic decongestants + anesthetics = increased risk of dangerous hypertension, tachycardia, and dysrhythmias (especially with halothane). Pre-op screening must catch medication use."
          },
          {
            "id": "peri-200-7",
            "q": "A patient post-op from major surgery is on PCA (patient-controlled analgesia) morphine. Nurse finds patient unresponsive, respirations shallow (8/min), oxygen saturation 85%. What is the immediate action?",
            "a": "Bag-valve-mask ventilation/supplemental oxygen, naloxone 0.4mg IV (may need repeat doses q2-3min up to 10mg), notify anesthesia/physician, prepare for possible intubation if no response",
            "rationale": "This is opioid overdose/toxicity. Naloxone is the antidote. Respiratory support is immediate priority. Must reverse opioid effects and monitor for recurrence (naloxone half-life shorter than morphine)."
          }
        ],
        "300": [
          {
            "id": "peri-300-0",
            "q": "An 85-year-old with multiple comorbidities (CHF, COPD, CKD) is scheduled for hip fracture repair. Anesthesia options discussed: general (intubation) vs. regional (spinal). Patient is very anxious about 'being put to sleep.' What is the safest approach?",
            "a": "Regional (spinal) anesthesia preferred in this high-risk patient — avoids airway intubation, maintains respiratory drive, reduces post-op cognitive dysfunction risk; sedation can be light; discuss benefits/risks with patient and anesthesia team",
            "rationale": "Regional anesthesia avoids general anesthesia's risks (aspiration, ventilator-associated pneumonia, cognitive dysfunction, prolonged recovery). For elderly, high-risk patients with hip fracture, regional is often safer."
          },
          {
            "id": "peri-300-1",
            "q": "A patient with sleep apnea (untreated) is recovered in PACU post-op. Vitals stable, alert. Opioid doses were limited due to sleep apnea risk. In the ward 4 hours later, patient falls asleep after oral pain medication. How should post-op monitoring be adjusted?",
            "a": "Continuous pulse oximetry mandatory — patient with untreated sleep apnea + opioids at high risk for post-op respiratory depression/desaturation; consider apnea monitor; avoid opioid dose escalation; use non-opioid analgesics when possible",
            "rationale": "Untreated sleep apnea + opioids = dangerous combination for post-op respiratory failure. Continuous monitoring is essential. Consider ICU-level monitoring for this patient in ward setting."
          },
          {
            "id": "peri-300-2",
            "q": "A patient undergoes total knee replacement under spinal anesthesia. Intraoperatively, he develops lower extremity paralysis (expected) but also develops urinary retention. 6 hours post-op, he still cannot void despite normal sensation returning. Why?",
            "a": "High-dose opioids used intraoperatively (+ epidural extension) + spinal anesthesia residual effects on sacral nerves = combined blockade of voiding reflex; may need catheterization; monitor for overdistension",
            "rationale": "Spinal anesthesia + opioids can combine to cause prolonged urinary retention. The sacral nerve recovery lags. Catheterization may be needed if no void by 6-8h post-op."
          },
          {
            "id": "peri-300-3",
            "q": "During pre-op, a 6-year-old child is very anxious. Anesthesia gives premedication 30 minutes before induction. In the operating room, child is drowsy but fighting induction. After several minutes of struggling, child suddenly becomes limp and unresponsive. What is this emergency sign?",
            "a": "Laryngospasm (child went limp = airway completely obstructed, child became hypoxic and lost consciousness) — immediately apply positive pressure ventilation with 100% O2, prepare for emergency intubation",
            "rationale": "Laryngospasm in anesthetized child is an emergency. Limp state indicates hypoxia from complete airway obstruction. Positive pressure ventilation with 100% O2 breaks the spasm. Succinylcholine may be needed if spasm won't break."
          },
          {
            "id": "peri-300-4",
            "q": "A post-op patient with epidural analgesia develops sudden lower back pain at the epidural insertion site 24 hours post-op. Temperature 38.2°C (100.8°F). Epidural catheter appears intact. What complication must be ruled out?",
            "a": "Epidural abscess (or hematoma) — fever + localized back pain + epidural anesthesia = red flag; requires urgent MRI and infectious disease consult; may need immediate catheter removal and antibiotics",
            "rationale": "Post-epidural infections (abscess, meningitis) are rare but devastating. Fever + localized pain = infection until proven otherwise. Early diagnosis and treatment crucial."
          },
          {
            "id": "peri-300-5",
            "q": "A patient in the PACU post-op from major surgery has received: morphine 8mg IV, ketorolac 30mg IV, and local anesthetic at surgical site. Despite this multi-modal analgesia, pain is still 7/10. The patient is also nauseated (vomited once). Vital signs: HR 92, RR 14, BP 120/78. What is the most likely cause of pain?",
            "a": "Inadequate pain control from insufficient anesthetic at surgical site OR early complication (bleeding, infection, compartment syndrome if appropriate); consider re-dosing regional anesthetic or escalating opioids cautiously; evaluate for complications",
            "rationale": "Multi-modal analgesia is appropriate, but persistent pain despite adequate doses suggests either inadequate regional block (needs re-dosing) or complication. Nausea is common with opioids; pain control improves it."
          },
          {
            "id": "peri-300-6",
            "q": "A patient undergoing emergency cesarean section under general anesthesia receives succinylcholine for intubation. Immediately after paralysis, the fetal heart rate on monitor drops from 140 to 80 and stays low. Is this malignant hyperthermia or something else?",
            "a": "Succinylcholine-induced transient fetal bradycardia (NOT MH) — succinylcholine causes vagal stimulation and transient fetal heart rate decrease; usually recovers quickly; atropine can prevent if anticipated; different from maternal MH",
            "rationale": "Succinylcholine causes vagal effects. In obstetrics, this can briefly slow fetal heart rate. It's benign and transient, unlike MH. Anticholinergic premedication (glycopyrrolate) prevents this."
          },
          {
            "id": "peri-300-7",
            "q": "A patient with chronic pain on high-dose opioids (morphine 120mg daily) requires emergency surgery under general anesthesia. Intraoperatively, he becomes severely hypertensive and tachycardic despite adequate anesthetic depth (verified by processed EEG). What is this phenomenon?",
            "a": "Opioid-tolerant patient showing acute withdrawal signs from lack of usual opioid dose during surgery — OR team should have continued some opioid (or increased intraoperative dose dramatically); post-op must resume opioid regimen immediately",
            "rationale": "Patients on chronic opioids develop dependence. Acute withdrawal (even during surgery) causes sympathetic surge. Intraoperative opioid requirements are much higher in tolerant patients. Post-op opioid regimen must resume quickly."
          }
        ],
        "400": [
          {
            "id": "peri-400-0",
            "q": "A 72-year-old with COPD, CKD (Cr 2.1), and hypertension is in pre-op. Anesthesia plans regional (spinal) anesthesia. Just before spinal injection, what is the critical concern regarding THE SOLUTION being injected?",
            "a": "Hyperbaric (dextrose-containing) vs. isobaric spinal anesthetic choice matters — CKD patients have altered glucose metabolism; in CKD with spinal glucose exposure, hyperglycemia + hyperosmolar state risk AKI progression; isobaric solution preferred",
            "rationale": "Dextrose-containing hyperbaric spinal solutions can worsen hyperglycemia and increase osmotic load in CKD. Isobaric solutions (without dextrose) are safer. Anesthesia must adjust choice for renal function."
          },
          {
            "id": "peri-400-1",
            "q": "An obese (BMI 52) patient scheduled for bariatric surgery develops complete airway obstruction during general anesthesia induction (before intubation). Mask ventilation impossible, SpO2 dropping. What is the immediate decision?",
            "a": "EMERGENCY CRICOTHYROTOMY or emergency tracheostomy if immediately available — this is 'can't intubate, can't oxygenate' (CICO) emergency; surgical airway is life-saving; avoid laryngospasm medications; oxygenate at all costs",
            "rationale": "Obese patients have difficult airways. Complete obstruction pre-intubation = can't ventilate = must do surgical airway. Surgical airway decisions must be made quickly in crisis situations."
          },
          {
            "id": "peri-400-2",
            "q": "A patient on warfarin (INR 3.2) requires emergency appendectomy. Anesthesia is concerned about neuraxial anesthesia (spinal/epidural) risk. What is the recommendation and why?",
            "a": "Avoid neuraxial anesthesia — warfarin at INR >1.5 increases epidural hematoma risk; use general anesthesia instead; coordinate with surgery to reverse warfarin if urgency allows (FFP or vitamin K); if already on epidural, must be removed 24h after reversal",
            "rationale": "Warfarin at therapeutic levels = contraindication to neuraxial anesthesia due to epidural hematoma risk. General anesthesia safer in anticoagulated patients. Reversal therapy timing is complex."
          },
          {
            "id": "peri-400-3",
            "q": "A post-op patient on epidural analgesia develops sudden onset leg weakness bilaterally, loss of bowel/bladder function, and back pain. Temperature 37.8°C. This is POD1. What is the surgical emergency and what should happen immediately?",
            "a": "Epidural abscess or hematoma causing SPINAL CORD COMPRESSION — this is a neurosurgical emergency; STAT MRI needed; epidural catheter must be removed; neurosurgery consult urgent; if cord compression confirmed, emergent decompression may be needed",
            "rationale": "Acute spinal cord compression post-epidural is life-threatening and requires emergency intervention. Hours matter for neurologic recovery. Paralysis is an indication for urgent imaging and decompression."
          },
          {
            "id": "peri-400-4",
            "q": "A patient with severe sleep apnea (AHI 78) is extubated immediately post-op against nursing recommendation. 2 hours later in the PACU, patient becomes hypoxic (SpO2 82%) and appears to stop breathing for 15 seconds. What error in post-op care occurred?",
            "a": "Premature extubation in high-risk sleep apnea patient — should have remained intubated longer or monitored in ICU post-op; sleep apnea worsens post-op (opioids, anesthesia, supine positioning); early extubation = disaster",
            "rationale": "Sleep apnea + post-op opioids + anesthesia effects = high risk for post-extubation respiratory failure. These patients often need ICU monitoring and may require re-intubation. Early extubation decisions must account for sleep apnea severity."
          },
          {
            "id": "peri-400-5",
            "q": "A patient recovering from spinal anesthesia in PACU suddenly develops severe headache, neck stiffness, and fever (39.1°C / 102.3°F). This is 4 hours post-op. What must be ruled out immediately?",
            "a": "Post-dural puncture (spinal) meningitis — fever + headache + neck stiffness after spinal anesthesia = infection until proven otherwise; STAT LP with CSF analysis, blood cultures, antibiotics (empiric coverage) immediately; may also be post-dural puncture headache (PDPH) but fever suggests infection",
            "rationale": "Post-spinal anesthesia meningitis is rare but recognized complication. It's a medical emergency requiring immediate CSF analysis and antibiotics. PDPH can be severe but doesn't cause fever or meningeal signs."
          },
          {
            "id": "peri-400-6",
            "q": "An extremely anxious patient scheduled for minor surgery is given propofol as induction agent. Within seconds, blood pressure drops to 72/40, heart rate 48. What is the mechanism and how is it managed?",
            "a": "Propofol causes profound vasodilation and negative inotropy — sudden hypocarbia + sympathetic depression; immediately give IV fluid bolus (500-1000mL), reduce propofol infusion rate, consider vasopressor (phenylephrine, norepinephrine), check for anaphylaxis (flushing, angioedema)",
            "rationale": "Propofol is potent vasodilator. Anxious patients may be compensating hemodynamically; propofol collapses this balance. Rapid fluid resuscitation and vasopressor support needed. Differentiate from anaphylaxis."
          },
          {
            "id": "peri-400-7",
            "q": "A patient at high risk for MH (family history) undergoes surgery under TIVA (total intravenous anesthesia) with propofol and remifentanil. Intraoperatively, ETCO2 rises to 55, temp 38.1°C, muscles seem slightly rigid. What is the clinical significance?",
            "a": "TIVA with propofol is safe for MH patients (propofol is non-triggering) — ETCO2 elevation + mild temp rise may be from CO2 insufflation (if laparoscopy) or hypoventilation; mild rigidity could be inadequate muscle relaxation; NOT malignant hyperthermia in this anesthetic technique",
            "rationale": "TIVA with non-triggering agents (propofol, etomidate) is safe choice for MH patients. Avoid volatile anesthetics and succinylcholine. ETCO2 elevation + temp rise in TIVA is not classic MH pattern but still warrants investigation."
          }
        ],
        "500": [
          {
            "id": "peri-500-0",
            "q": "A patient with severe MH episode develops rhabdomyolysis (CK 25,000), hyperkalemia (K 7.8), acidosis (pH 7.18), and DIC (fibrinogen 85, INR 3.2). After STOP-MH protocol and dantrolene 10mg/kg, patient stabilizes hemodynamically. What is the critical post-op complication to prevent?",
            "a": "Acute kidney injury from myoglobin precipitation — aggressive IV hydration (maintain urine output >1-2 mL/kg/hr), alkalize urine with sodium bicarbonate, monitor urine myoglobin, electrolytes, CPK q4-6h; dantrolene continued q4-6h for 24-48h",
            "rationale": "Post-MH crisis, most common cause of death is AKI from myoglobin + DIC. Massive hydration and urine alkalinization prevent tubular precipitation. Continuous monitoring in ICU essential."
          },
          {
            "id": "peri-500-1",
            "q": "A patient with diagnosed MH susceptibility (biopsy-confirmed) is now requiring urgent orthopedic surgery for open fracture. Anesthesia team has never used dantrolene before. What preparation is essential?",
            "a": "Pre-operative dantrolene protocol: have dantrolene sodium prepared (36-40 vials × 20mg each on call), mixing supplies ready, IV access pre-placed, ICU bed reserved, non-triggering anesthetic plan confirmed (TIVA, avoid volatiles/succinylcholine), dantrolene dosing reviewed (2.5 mg/kg initial, repeat q5min)",
            "rationale": "In known MH patients, preparation is everything. Dantrolene preparation takes time (must mix powder). Team familiarity with protocol, pre-positioning equipment, and communication are life-saving."
          },
          {
            "id": "peri-500-2",
            "q": "A patient survives acute MH crisis with successful dantrolene reversal. 6 hours post-op in ICU, he develops sudden muscle rigidity, fever 39.2°C, and elevated CPK (now 30,000, up from 25,000). ETCO2 (if intubated) is rising again. What is this?",
            "a": "MH recrudescence — crisis recurring post-op despite successful intraoperative reversal; dantrolene must be continued q4-6h for 24-48h post-op; aggressive supportive care; risk increases with longer/more severe initial crisis",
            "rationale": "Recrudescence occurs in 25-50% of MH cases despite dantrolene. Continued dantrolene dosing post-op is mandatory. Continued ICU monitoring and aggressive fluid/electrolyte management critical."
          },
          {
            "id": "peri-500-3",
            "q": "A patient with severe post-op pain and on high-dose opioid infusion develops altered mental status, pinpoint pupils, and respiratory depression (RR 6). Naloxone 0.4mg IV given, partial reversal occurs but patient remains drowsy. What explains incomplete naloxone response?",
            "a": "Other CNS depressants co-administered (benzodiazepines, propofol infusion, or other sedatives) — naloxone reverses opioids only; remaining depressants cause ongoing altered mental status; may need larger/repeated naloxone doses or consider other reversal agents for benzodiazepines",
            "rationale": "Naloxone only reverses mu-receptor agonists (opioids). If benzodiazepines or other CNS depressants given, naloxone won't reverse those. Multiple drug reversal may be needed."
          },
          {
            "id": "peri-500-4",
            "q": "A complex surgical patient with multiple comorbidities is in ICU post-op on mechanical ventilation, vasopressors, and multiple drips. Trying to wean anesthesia/sedation, but every time sedation reduced, patient develops severe hypertension and tachycardia. Why might aggressive sedation reduction be dangerous here?",
            "a": "Underlying critical illness (sepsis, myocardial ischemia risk, massive blood loss replaced, severe pain) may NOT be controlled by light sedation — patient needs titrated balance of sedation, analgesia, and vasopressor support; too-rapid reduction risks: MI, hypertensive crisis, increased oxygen demand",
            "rationale": "Post-op patients need multi-modal support. Over-aggressive weaning of sedation/analgesia in still-unstable patients increases risk of cardiac and metabolic crisis. Gradual, physiologic titration is safer."
          },
          {
            "id": "peri-500-5",
            "q": "A patient with known anaphylaxis history to latex is scheduled for elective knee arthroscopy. Anesthesia team confirms 'latex-free' equipment cart prepared. Intraoperatively, patient suddenly develops flushing, hypotension (70/35), and stridor. What happened and what is the immediate action?",
            "a": "Anaphylaxis — likely from latex exposure despite 'latex-free' setup (common failure: gloves, blood pressure cuff, other supplies from wrong cart) OR to anesthetic agent (succinylcholine, antibiotics); IMMEDIATELY: stop surgery, IV epinephrine 0.3-0.5mg IM (or IV if severe), oxygen, IV fluids, antihistamines, steroids",
            "rationale": "Latex-free protocols fail when vigilance slips (mixed-up equipment carts). Anaphylaxis in OR is catastrophic but treatable with immediate epinephrine. Rapid IV access and medication administration are life-saving."
          },
          {
            "id": "peri-500-6",
            "q": "A post-op patient with epidural anesthesia develops acute paraplegia (complete paralysis below catheter level) within 1 hour of epidural placement. MRI shows epidural hematoma compressing spinal cord. Patient was NOT on anticoagulation. What rare complication likely occurred?",
            "a": "Unrecognized spinal artery puncture during epidural placement causing epidural arterial bleeding → hematoma/cord compression; or underlying coagulopathy undetected pre-op; emergency neurosurgery decompression needed urgently",
            "rationale": "Epidural hematomas are rare (1 in 150,000) but devastating. Non-anticoagulated patient suggests arterial puncture. Rapid cord compression = emergency decompression surgery. Outcome depends on speed of decompression."
          },
          {
            "id": "peri-500-7",
            "q": "A patient post-op from major surgery develops acute respiratory distress, hypoxemia (SpO2 78% on 50% O2), and pulmonary edema on chest X-ray in PACU (2 hours post-op). CVP reading shows elevated pressure. He received 8 units PRBC, 3L LR, and 1L colloid intraoperatively. What is the complication?",
            "a": "Transfusion-associated circulatory overload (TACO) or flash pulmonary edema from massive fluid/blood resuscitation + possible TRALI; differentiate: TACO = cardiogenic (elevated CVP, responds to diuretics), TRALI = non-cardiogenic (normal CVP, does NOT respond to diuretics); treat accordingly",
            "rationale": "Massive resuscitation can cause pulmonary edema. TACO (fluid overload) vs. TRALI (immune-mediated) require different management. CVP and response to diuretics help differentiate. Both are life-threatening."
          }
        ]
      }
    },
    {
      "id": "malignant-hyperthermia",
      "name": "Malignant Hyperthermia: Crisis Management",
      "source": "week3-perioperative-nursing.html",
      "clues": {
        "100": [
          {
            "id": "mh-100-0",
            "q": "A patient with strong family history of 'anesthesia problems' is scheduled for elective surgery. What is the most important pre-operative screening question?",
            "a": "'Has anyone in your family had problems during or after anesthesia or had a high fever during surgery?' — this simple question identifies MH risk and allows use of non-triggering anesthetics",
            "rationale": "Family history of anesthesia complications is the strongest risk factor for MH. Early identification allows modified anesthetic plan, preventing crisis."
          },
          {
            "id": "mh-100-1",
            "q": "During general anesthesia with isoflurane and succinylcholine, masseter muscles suddenly tighten (jaw clenching). The patient is otherwise stable. Is this malignant hyperthermia?",
            "a": "Possible early sign of MH (trismus = masseter rigidity is an early indicator) — STOP succinylcholine and volatile agent immediately, begin hyperventilation and 100% O2, monitor ETCO2 and temperature closely",
            "rationale": "Masseter rigidity (trismus) is an EARLY sign of MH. Do not ignore it as 'normal' anesthesia response. Discontinue triggering agents immediately."
          },
          {
            "id": "mh-100-2",
            "q": "What is the single most sensitive EARLY sign of malignant hyperthermia that should raise immediate suspicion?",
            "a": "Elevated end-tidal CO2 (ETCO2) — indicates hypermetabolism from uncontrolled muscle metabolism; fever is a LATE sign; ETCO2 rise is the earliest warning",
            "rationale": "MH causes hypermetabolism → CO2 production increases before temperature rises. ETCO2 monitoring in OR is critical. Fever is late and dangerous; ETCO2 is early warning sign."
          },
          {
            "id": "mh-100-3",
            "q": "A patient develops MH crisis. Dantrolene sodium is ordered STAT. The OR pharmacy says 'we don't stock dantrolene regularly.' What is the clinical consequence of delay?",
            "a": "Dantrolene must be prepared from powder vials (takes 3-5 minutes per vial to mix); without dantrolene, heat cannot be stopped, rhabdomyolysis worsens, hyperkalemia escalates → cardiac arrest likely",
            "rationale": "Dantrolene is the ONLY specific treatment for MH. Every minute of delay worsens outcome. Hospitals MUST have dantrolene available and staff trained in preparation."
          },
          {
            "id": "mh-100-4",
            "q": "In the STOP-MH mnemonic, what does the 'P' stand for and why is it critical?",
            "a": "'Prepare dantrolene' — dantrolene sodium 2.5 mg/kg IV is the ONLY specific MH treatment; must be prepared immediately and given as soon as ready",
            "rationale": "Dantrolene works by blocking calcium release in muscle. It's not fast-acting but is life-saving and must be given. Without dantrolene, cooling and supportive measures alone cannot stop the crisis."
          },
          {
            "id": "mh-100-5",
            "q": "After stopping triggering agents and starting dantrolene for MH crisis, the patient's muscles are still rigid. Temperature is 40.2°C (104.4°F). What is the next intervention?",
            "a": "Aggressive cooling (ice packs, cold IV saline, cooling blankets) AND continue dantrolene q5 min until signs resolve (max 10 mg/kg) — cool aggressively while awaiting dantrolene effect",
            "rationale": "Cooling is supportive but dantrolene is curative. Continue both concurrently. Target core temp <38.5°C to prevent complications of hyperthermia."
          },
          {
            "id": "mh-100-6",
            "q": "A patient with MH susceptibility is going for emergency surgery. What anesthetic agents are SAFE to use?",
            "a": "Non-triggering agents: TIVA (total intravenous anesthesia with propofol + remifentanil), local/regional anesthesia, nitrous oxide (NOT volatile anesthetics or depolarizing muscle relaxants like succinylcholine)",
            "rationale": "Safe anesthetics for MH patients: propofol, etomidate, opioids, benzodiazepines, non-depolarizing muscle relaxants, local anesthetics. Avoid: halothane, isoflurane, sevoflurane, succinylcholine."
          },
          {
            "id": "mh-100-7",
            "q": "After successful treatment of MH crisis with dantrolene, the patient is recovering well in ICU. When should dantrolene be discontinued?",
            "a": "Dantrolene should be continued 1 mg/kg IV q4-6h for 24-48 hours post-crisis to prevent recrudescence (recurrence); patient must be ICU-monitored during this period",
            "rationale": "Recrudescence occurs in 25-50% of MH crises. Continued dantrolene dosing prevents repeat episodes. Early discharge risks deadly recurrence."
          }
        ],
        "200": [
          {
            "id": "mh-200-0",
            "q": "A patient develops MH crisis. After discontinuing triggering agents, he receives dantrolene 2.5 mg/kg IV. 5 minutes later, muscles still rigid, ETCO2 still 60, temp 39.8°C. What is the next dantrolene dose?",
            "a": "Repeat dantrolene 2.5 mg/kg IV immediately (continue q5 min until signs resolve, max 10 mg/kg total) — do not wait; signs must resolve; prepare additional dantrolene vials",
            "rationale": "Dantrolene dosing is 2.5 mg/kg initial, then repeat q5min until MH signs resolve or max 10 mg/kg reached. Signs persisting means continue dosing."
          },
          {
            "id": "mh-200-1",
            "q": "During an MH crisis, the patient develops severe hyperkalemia (K 8.2) with peaked T-waves on EKG. Temperature is 41.1°C. What drug is given FIRST and why?",
            "a": "Calcium gluconate 10% IV (cardiac membrane stabilization) to prevent fatal dysrhythmias, THEN insulin/glucose to shift K intracellular, THEN continue aggressive cooling and dantrolene",
            "rationale": "Hyperkalemia in MH crisis is cardiac emergency. Calcium protects heart first, then K is managed while treating core MH problem."
          },
          {
            "id": "mh-200-2",
            "q": "A patient with suspected MH is on day 2 post-op. He had a successful STOP-MH protocol. Now he's complaining of muscle pain, dark urine, and feeling weak. CPK is 35,000. Why are these findings concerning?",
            "a": "Ongoing rhabdomyolysis from muscle damage — myoglobin in urine (dark color = myoglobinuria); CPK elevation reflects severe muscle breakdown; must continue aggressive hydration (target urine output 1-2 mL/kg/hr), alkalize urine with bicarbonate, monitor for acute kidney injury",
            "rationale": "Post-MH, muscle breakdown continues. Myoglobin in urine is toxic to kidney tubules. Aggressive hydration and urine alkalinization prevent AKI."
          },
          {
            "id": "mh-200-3",
            "q": "A family member of an MH-susceptible patient asks: 'Will my child definitely get malignant hyperthermia if they need surgery?' How should this be answered?",
            "a": "MH is inherited in autosomal dominant pattern (50% inheritance if one parent affected), but susceptibility ≠ guarantee of reaction; with proper anesthetic selection (non-triggering agents), MH-susceptible patients can have safe surgery",
            "rationale": "MH is pharmacogenetic. Inheritance is likely but not guaranteed. Importantly, reaction can be prevented with proper anesthesia selection."
          },
          {
            "id": "mh-200-4",
            "q": "A patient with known MH susceptibility is having elective hernia repair under local anesthesia with light IV sedation (no general anesthesia, no triggering agents). What precautions are still essential?",
            "a": "Have dantrolene and emergency equipment available (though MH unlikely without general anesthesia), inform anesthesia team of MH history, avoid succinylcholine even for local procedures, have reversal agents (naloxone, flumazenil) ready for IV sedation",
            "rationale": "Even with local anesthesia, complications can occur. Full emergency preparedness is standard of care."
          },
          {
            "id": "mh-200-5",
            "q": "During an MH crisis, after giving dantrolene, the patient's temperature is 40.9°C. Aggressive cooling is underway. The ICU is 5 minutes away from the OR. Should the patient go to ICU or should cooling continue in the OR?",
            "a": "Continue active cooling in the OR until core temperature <38.5°C (target), THEN transfer to ICU with continued cooling if needed — do not delay cooling; transport with portable cooling, monitor, dantrolene ready for repeat dosing",
            "rationale": "Cool as aggressively as possible in OR. Then transfer to ICU with continued monitoring and cooling. Core temperature management is priority."
          },
          {
            "id": "mh-200-6",
            "q": "A post-MH patient on day 3 develops sudden fever (39.5°C), myoglobinuria worsens, and CPK rises to 45,000 (was declining). Is this recrudescence? What is the differential?",
            "a": "May be recrudescence (10-25% of MH crises recur) OR new infection/sepsis/rhabdomyolysis cause — requires careful workup: repeat dantrolene q4-6h if recrudescence suspected, cultures, imaging to rule out infection/other cause",
            "rationale": "Recrudescence is real but rare. Post-MH patients are also at risk for other complications (infection from ICU stay, continuing myoglobin-induced AKI). Differential diagnosis needed."
          },
          {
            "id": "mh-200-7",
            "q": "A patient survives an MH crisis and is discharged from hospital. What patient education is CRITICAL before leaving the hospital?",
            "a": "MedAlert bracelet (must wear for life), inform ALL healthcare providers (including dentists), genetic testing recommended for family members, provide list of safe anesthetics to carry, explain that future surgery is possible with proper anesthesia, encourage family to get tested",
            "rationale": "Post-MH patients must be prepared for future healthcare needs. MedAlert bracelet is essential. Family screening can prevent future crises."
          }
        ],
        "300": [
          {
            "id": "mh-300-0",
            "q": "A patient with suspected MH develops cardiac arrest during crisis (ventricular fibrillation). After initiating CPR and ACLS, what is the critical medication addition SPECIFIC to MH?",
            "a": "Dantrolene 2.5 mg/kg IV immediately (continue CPR simultaneously) — dantrolene may reverse VF or improve outcomes post-resuscitation; may need repeated doses; continue both ACLS and dantrolene protocol concurrently",
            "rationale": "MH cardiac arrest may be reversible with aggressive dantrolene therapy even during CPR. Standard ACLS + dantrolene is the protocol."
          },
          {
            "id": "mh-300-1",
            "q": "A patient with neuroleptic malignant syndrome (NMS) history (severe reaction to antipsychotics) is scheduled for surgery. What precautions regarding MH are needed?",
            "a": "NMS and MH share similar pathophysiology (abnormal calcium regulation in muscle) — treat as potential MH susceptible; use non-triggering anesthetics, have dantrolene available (dantrolene also treats NMS), avoid dopamine antagonists post-op",
            "rationale": "NMS and MH are related phenomena. Patients with NMS history should be treated as MH-susceptible even if not genetically confirmed."
          },
          {
            "id": "mh-300-2",
            "q": "During MH crisis management, hyperventilation to blow off CO2 is recommended. However, aggressive hyperventilation causes hypokalemia (from respiratory alkalosis) while rhabdomyolysis causes hyperkalemia. How is this managed?",
            "a": "Continue hyperventilation (needed to reduce ETCO2 from MH hypermetabolism) — the competing effects of respiratory alkalosis and hyperkalemia from rhabdo requires careful monitoring; give calcium gluconate early for cardiac protection, monitor K closely, use insulin/glucose cautiously (as K shifts), aggressive IV fluids",
            "rationale": "MH management requires balancing multiple physiologic derangements. Hyperventilation is essential despite hypokalemia risk. Multifactorial management is needed."
          },
          {
            "id": "mh-300-3",
            "q": "A patient has a positive MH muscle biopsy (caffeine-halothane contracture test positive). He's never had a surgery. What counseling is needed about risk?",
            "a": "MH is DEFINITE genetic predisposition — if exposed to triggering agents, will likely have MH crisis; however, with non-triggering anesthetics, can have completely safe surgery; absolutely MUST wear MedAlert bracelet, inform all providers, and have family tested (autosomal dominant inheritance)",
            "rationale": "Positive contracture test = confirmed MH susceptibility. Genetic counseling and family screening are essential."
          },
          {
            "id": "mh-300-4",
            "q": "An MH crisis occurs at a small rural hospital with NO dantrolene stock. What is the emergency protocol?",
            "a": "Call Poison Control / MH Hotline (1-844-MH-CRISE) for emergency dantrolene supply location/delivery; contact nearest tertiary center for possible dantrolene transport by helicopter/emergency courier; meanwhile, maximize cooling, hyperventilation, IV fluids, electrolyte management, ACLS as needed",
            "rationale": "The MH Hotline connects hospitals with emergency dantrolene sources. Rural hospitals MUST have protocols for this rare but devastating emergency."
          },
          {
            "id": "mh-300-5",
            "q": "A post-MH patient is being weaned from mechanical ventilation in ICU. ABG shows persistent acidosis (pH 7.22), elevated potassium (5.8), and CPK still 20,000. Should extubation be attempted?",
            "a": "NO — continue support until acid-base status improves, K normalizes, and CPK trends down significantly; extubation in setting of acidosis/hyperkalemia risks life-threatening dysrhythmias and hypoventilation from continued muscle injury",
            "rationale": "MH sequelae can persist. Premature extubation risks complications. ICU support should continue until recovery evident."
          },
          {
            "id": "mh-300-6",
            "q": "After an MH crisis, the anesthesia team wants to know what SPECIFIC triggering agent(s) caused the reaction (halothane? isoflurane? succinylcholine?). Does it matter for future anesthetics?",
            "a": "For MH-susceptible patients, ALL volatile anesthetic agents (halothane, isoflurane, sevoflurane, desflurane) are dangerous and should be avoided; succinylcholine also unsafe; the specific trigger that caused THIS crisis matters less than avoiding ALL triggers in future — non-triggering agents are used regardless",
            "rationale": "MH-susceptible individuals should avoid all volatile anesthetics and succinylcholine. Identifying the specific trigger is academic; clinical management is to avoid all triggers."
          },
          {
            "id": "mh-300-7",
            "q": "A patient with MH requires emergency cesarean section at 32 weeks for preeclampsia/placental abruption. What is the anesthetic plan?",
            "a": "TIVA (propofol/remifentanil) for induction and maintenance (non-triggering), non-depolarizing muscle relaxant, regional neuraxial anesthesia if time allows (single-shot spinal is fast), prepare dantrolene STAT, notify neonatal team (dantrolene crosses placenta), ice immediately available for cooling",
            "rationale": "Emergency cesarean in MH patient is complex: must protect mother AND baby. TIVA is safest. Neonatal team should know about potential MH exposure."
          }
        ],
        "400": [
          {
            "id": "mh-400-0",
            "q": "A patient with chronic malignant hyperthermia history (had previous crisis, treated successfully) now presents for routine dental procedure. Dentist wants to give nitrous oxide and local anesthesia only. Is general anesthesia avoidable? Is nitrous oxide safe?",
            "a": "YES — general anesthesia can be avoided with local anesthesia + light sedation without triggering agents; nitrous oxide is SAFE (non-triggering); however, ensure emergency equipment/dantrolene available and anesthesia/dentistry team informed of MH history",
            "rationale": "Nitrous oxide is not a trigger. Regional anesthesia is perfectly safe. MH patients can have dental work safely with proper planning."
          },
          {
            "id": "mh-400-1",
            "q": "During MH crisis, dantrolene 10 mg/kg (maximum dose) has been given. ETCO2 is still 75, temperature 42.8°C (109°F), muscles remain rigid. What is the management of this 'dantrolene-resistant' or 'severe MH'?",
            "a": "'Dantrolene-resistant' MH is extremely rare but possible (different genetic mutations); maximum supported management: continue cooling aggressively (ice, ice-cold IV saline, cooling blankets, iced saline bladder/stomach/peritoneal lavage if available), hyperventilation 100% O2, manage hyperkalemia (calcium, insulin/glucose), consider ECMO/cardiopulmonary bypass for aggressive core cooling if available, continue ICU support",
            "rationale": "Rare severe MH may not respond fully to maximum dantrolene. Extreme cooling methods (including ECMO) and maximal supportive care are then needed."
          },
          {
            "id": "mh-400-2",
            "q": "A surgeon calls regarding a patient with MH susceptibility scheduled for major abdominal surgery. Surgeon says 'It's elective but we need to do it within 3 weeks. Is there time to get genetic testing?' What should the anesthesiologist advise?",
            "a": "Genetic testing typically takes 3-4 weeks (may be delayed further); do NOT delay surgery waiting for testing — instead, prepare MH-safe anesthetic plan (TIVA, non-triggering agents, dantrolene available, ICU admission planned) and proceed safely; genetic testing can be done post-op for family counseling",
            "rationale": "Genetic testing shouldn't delay necessary surgery. Safe anesthesia planning is the priority."
          },
          {
            "id": "mh-400-3",
            "q": "Post-MH, patient develops acute kidney injury (creatinine rises from 0.9 to 2.8 in 18 hours). Urine myoglobin is 4+ (very high). He's on aggressive IV hydration but still oliguric. What is the next intervention?",
            "a": "Emergent hemodialysis to remove myoglobin, control hyperkalemia, and manage acidosis — continue IV hydration, alkalize urine if possible, monitor electrolytes closely, consider continuous renal replacement therapy (CRRT) as alternative",
            "rationale": "Myoglobin-induced AKI can require dialysis. Oliguric AKI + high myoglobin = indication for RRT."
          },
          {
            "id": "mh-400-4",
            "q": "A 35-year-old MH patient with two prior uneventful surgeries under TIVA anesthesia is now having a third surgery. He's been counseled about MH and wears a MedAlert bracelet. On day of surgery, he's extremely anxious. Can he receive pre-operative anxiolytic? What agents are safe?",
            "a": "YES — benzodiazepines (midazolam, lorazepam) and opioids are safe pre-meds for MH patients; avoid anticholinergics if possible (can increase HR, mimicking MH); keep all pre-op medications documented and communicated to anesthesia team",
            "rationale": "MH patients benefit from anxiolytic pre-medication. Benzodiazepines and opioids are perfectly safe."
          },
          {
            "id": "mh-400-5",
            "q": "During routine post-op check, an ICU nurse notices a patient who had MH crisis now has 'rigor mortis-like' muscle rigidity, severe hyperthermia (40.7°C), and is unresponsive. It's 36 hours post-crisis. Is this recrudescence or something else? What is the immediate action?",
            "a": "POSSIBLE recrudescence — give dantrolene 1 mg/kg IV immediately; HOWEVER, also rule out other causes (infection/sepsis, NMS from medications, thyroid storm, heat stroke) — fever + rigidity suggests recrudescence but requires rapid evaluation; continue ICU protocols",
            "rationale": "Recrudescence occurs in minority of cases but is life-threatening when it occurs. It must be treated immediately."
          },
          {
            "id": "mh-400-6",
            "q": "An MH patient is discharged from hospital with prescription for Tylenol with codeine for post-op pain. Before discharge, what medication review is critical?",
            "a": "Codeine is SAFE (it's an opioid, not a triggering agent); however, review ALL medications to avoid: dopamine antagonists (which can trigger NMS), stimulants, and ensure patient understands to inform FUTURE providers about MH history and use ONLY documented safe anesthetics",
            "rationale": "Opioids are safe for MH patients. Medication review ensures no triggering agents were inadvertently prescribed."
          },
          {
            "id": "mh-400-7",
            "q": "A family of an MH-susceptible patient wants genetic testing. The genetic counselor explains that multiple genes can cause MH (RYR1, CACNA1S mutations). This means: (A) Testing will definitely find THE mutation; (B) Some family members may have MH but testing could miss it; (C) Only RYR1-positive relatives are truly at risk. Which is correct and why?",
            "a": "Answer B — Multiple genes can cause MH; DNA testing identifies ~70-80% of MH-susceptible families; some affected individuals may not have identifiable mutations ('genetic negative'); muscle biopsy (contracture test) is still gold standard for individual MH susceptibility assessment",
            "rationale": "MH genetic testing is good but not perfect. Even genetically negative individuals can have MH. Clinical suspicion and muscle biopsy remain important."
          }
        ],
        "500": [
          {
            "id": "mh-500-0",
            "q": "An anesthesiologist at a small hospital has NEVER encountered an MH crisis. The hospital stocks 5 vials of dantrolene (total 100mg), which is likely insufficient for a large patient (280 lbs / 127 kg). The MH Hotline is busy. What is the action plan?",
            "a": "Immediately contact hospital administration/pharmacy to obtain emergency dantrolene supply (goal: 36-40 vials minimum; can request from other hospitals, blood banks, poison control); meanwhile, activate emergency cooling/resuscitation/supportive care protocols and transfer patient to tertiary center if MH crisis occurs; hospital must ensure adequate dantrolene stock before any elective surgeries",
            "rationale": "Inadequate dantrolene stock is a patient safety hazard. Hospitals must ensure sufficient supply."
          },
          {
            "id": "mh-500-1",
            "q": "A patient with MH susceptibility has an emergency surgery during a time of national dantrolene shortage. The hospital has exactly 3 vials of dantrolene (60mg total) but the patient requires estimated 150-200mg based on weight. Surgery cannot be delayed. What is the anesthetic approach?",
            "a": "Proceed with non-triggering anesthesia (TIVA), aggressive monitoring, prepare for ICU admission, notify all OR staff of shortage, use alternative cooling methods (ice, cold saline) prepared in advance, contact nearby hospitals for additional dantrolene backup; if MH suspected, give available dantrolene immediately and transfer to facility with more supply if crisis develops",
            "rationale": "Surgery must proceed even with inadequate dantrolene if truly emergency. Non-triggering anesthesia minimizes risk. Creative emergency planning is needed."
          },
          {
            "id": "mh-500-2",
            "q": "Post-MH, a patient with rhabdomyolysis develops disseminated intravascular coagulation (DIC) with low fibrinogen (100) and high INR (3.5). He's bleeding from IV sites and ET tube. CPK is 40,000. What is the management priority: (A) Transfuse FFP/platelets to correct coagulopathy; (B) Focus on myoglobin removal/kidney support; (C) Combined approach?",
            "a": "Answer C — Combined approach: transfuse blood products (FFP, cryoprecipitate for fibrinogen, platelets) for active bleeding WHILE aggressively managing rhabdomyolysis (hydration, dialysis, cooling if still hyperthermic) — DIC in MH is from severe rhabdomyolysis; treating the muscle injury is key to DIC resolution",
            "rationale": "Post-MH DIC requires dual approach: hemostatic support for bleeding + aggressive treatment of underlying muscle injury."
          },
          {
            "id": "mh-500-3",
            "q": "A patient with MH developed crisis, was treated with maximum dantrolene (10 mg/kg), and recovered. Two years later, he needs ANOTHER surgery (emergency fracture repair). He's anxious about repeat MH. The anesthesia plan is TIVA, no general anesthesia. Should dantrolene be given prophylactically ('just in case') before induction?",
            "a": "NO — prophylactic dantrolene is NOT recommended (not proven beneficial, side effects possible, adds confusion); proceed with non-triggering anesthesia, have dantrolene ready for immediate use if ANY suspicion of MH, inform patient that risk is minimized but he must report any unusual symptoms post-op",
            "rationale": "Prophylactic dantrolene is not standard. Preparedness and vigilance are key."
          },
          {
            "id": "mh-500-4",
            "q": "During an MH crisis in an obese patient (BMI 51, weight 330 lbs), calculation of dantrolene dose is debated: (A) Use actual body weight (7.5g needed); (B) Ideal body weight (~180 lbs); (C) Something in between. What is recommended?",
            "a": "Use ACTUAL BODY WEIGHT — dantrolene dosing of 2.5 mg/kg is based on actual weight; however, for severely obese patients, clinicians sometimes use a modified calculation, but standard teaching is actual weight; the most important thing is to give dantrolene STAT and repeat as needed (maximum 10 mg/kg of actual weight)",
            "rationale": "Standard dosing uses actual weight. In crisis, give dantrolene immediately and titrate based on response, not calculations."
          },
          {
            "id": "mh-500-5",
            "q": "Post-MH crisis patient has received 10 mg/kg dantrolene, cooled to 36.8°C core temp, labs normalizing. On day 4 post-op, he suddenly develops new-onset fever (39.1°C), new muscle pain, and CPK rises from 2,000 to 12,000. Cultures negative. Medications reviewed: he was just started on statins 2 days ago. What is the likely diagnosis and next step?",
            "a": "Statin-induced myopathy (or recrudescence) — discontinue statin immediately, check creatine kinase/renal function, supportive care; differentiate from infection (cultures, imaging) and recrudescence (though both are less likely than statin myopathy given timing); if recrudescence suspected, restart dantrolene",
            "rationale": "Statins cause myopathy. In this context, post-MH, starting statins was poor timing. Medication review is critical."
          },
          {
            "id": "mh-500-6",
            "q": "A patient with confirmed MH susceptibility and a sibling who also has confirmed MH both require elective surgery (patient on Monday, sibling on Friday). Can the patient's surgery provide any useful information for the sibling's anesthetic management?",
            "a": "Somewhat — if both have same genetic mutation (likely given familial MH), and patient's surgery is successful under non-triggering anesthesia, it confirms that mutation-bearing individuals can have safe surgery with proper plan; however, each patient's anesthesia must still be independently planned with full MH precautions (each reaction severity is unpredictable)",
            "rationale": "Family members with same MH mutation may have variable phenotypes. Each requires individual planning."
          },
          {
            "id": "mh-500-7",
            "q": "A patient post-MH crisis is recovering in ICU. Neurology consult was called because patient has persistent altered mental status despite normal ammonia, glucose, and imaging. Anesthesia wonders if hypermetabolism, residual dantrolene effects, or prolonged sedative use could explain it. What workup should be done?",
            "a": "Comprehensive post-ICU workup: EEG to rule out seizures, CSF analysis to rule out meningitis (given procedures/central lines), medication review (benzodiazepine/propofol accumulation from prolonged ICU sedation), consider dantrolene-related myopathy effects on cognition (rare), neuropsychiatric evaluation — altered mental status post-MH has multiple etiologies that must be systematically excluded",
            "rationale": "Post-ICU altered mental status requires thorough investigation. Multiple factors contribute."
          }
        ]
      }
    }
  ]
};

