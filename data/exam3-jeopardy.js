/* ============================================================
   data/exam3-jeopardy.js — Exam 3 Jeopardy question bank
   (Week 4 Renal & Urinary + Week 5 HIV / Integumentary ONLY).

   This file is the ONLY place Exam 3 Jeopardy content lives. The game
   engine (assets/exam3-jeopardy.js) contains no questions, so to add,
   edit, or remove clues just change this file — no game code needed.

   Shape:
     categories[] -> { id, name, week (4 or 5),
                       clues: { "100":[...], "200":[...], ... "500":[...] } }
     each clue    -> { q, a, rationale }

   Each game draws 3 Week 4 + 3 Week 5 categories and one clue per
   value. Difficulty rises with value inside every category, so keep
   new 100s easier than that category's 200s, and so on. Adding more
   clues to a value's list means more games before any repeat.
   ============================================================ */
window.JEOPARDY_EXAM3 = {
  "categories": [
    {
      "id": "w4-uti",
      "name": "Urinary Tract Infections",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "An 81-year-old nursing home resident who was oriented yesterday is suddenly confused today. There is no fever and no urinary complaint. Which condition should the nurse make sure is ruled out?",
            "a": "A urinary tract infection.",
            "rationale": "In older adults, confusion is often the first and only sign of a UTI. Fever, dysuria, and urgency may be absent, so any acute mental status change needs a UTI ruled out."
          },
          {
            "q": "A client with dysuria and frequency needs a clean-catch urine specimen. What two instructions does the nurse give about how to collect it?",
            "a": "Cleanse the perineal area first, then begin voiding and collect the midstream portion.",
            "rationale": "Cleansing and midstream collection reduce contamination from skin flora, which keeps the urinalysis and culture accurate."
          }
        ],
        "200": [
          {
            "q": "A woman with urgency and suprapubic discomfort has a temperature of 37.0°C. Her dipstick is positive for nitrites and leukocyte esterase. How should the nurse interpret these results?",
            "a": "They support a bacterial lower UTI (cystitis).",
            "rationale": "Nitrites mean bacteria are converting dietary nitrate, and leukocyte esterase means WBCs are present (pyuria). With no fever or systemic signs, this points to a lower UTI, not pyelonephritis."
          },
          {
            "q": "A client started on phenazopyridine for dysuria calls, worried that their urine has turned bright orange. How should the nurse respond?",
            "a": "Reassure the client that this is an expected effect of the medication.",
            "rationale": "Phenazopyridine (Pyridium) relieves dysuria and turns urine orange. It is a comfort measure, and the color change is not bleeding or a sign the infection is getting worse."
          }
        ],
        "300": [
          {
            "q": "On postoperative day 3, a client who is ambulating and stable still has an indwelling catheter left in \"for convenience.\" What is the nurse's priority advocacy action, and why?",
            "a": "Advocate for prompt removal of the catheter.",
            "rationale": "Indwelling catheters are a major UTI risk factor (CAUTI), and each day one stays in raises the risk of a healthcare-associated infection. UTIs make up about one-third of all HAIs."
          },
          {
            "q": "A pregnant client asks why she keeps getting bladder infections. Which two pregnancy-related factors should the nurse explain?",
            "a": "Hormones relax the ureters, and the fetus compresses the bladder.",
            "rationale": "Both changes promote urinary stasis, a major UTI risk factor, which is why pregnancy increases UTI risk."
          }
        ],
        "400": [
          {
            "q": "A nurse with recurrent cystitis works 12-hour shifts, rarely voids during her shift, drinks little water, and wipes from back to front. Which modifiable risk factors should the teaching address?",
            "a": "Void regularly instead of holding urine, increase fluid intake, and wipe front to back.",
            "rationale": "Habitually delaying urination (\"nurse's bladder\") causes stasis, low fluid intake concentrates urine, and wiping back to front introduces fecal bacteria. These are the behavioral risk factors she can change."
          },
          {
            "q": "Two days into nitrofurantoin for uncomplicated cystitis, a client feels better and plans to stop the medication. She also plans to cut back on fluids to reduce urgency. What should the nurse correct?",
            "a": "She should finish the full prescribed course and increase fluids rather than restrict them.",
            "rationale": "Uncomplicated UTIs are treated for 3–7 days. Fluids are increased, not restricted, to help flush the bladder, and frequent voiding helps empty it completely."
          }
        ],
        "500": [
          {
            "q": "A hospitalized client cannot give a reliable clean-catch specimen, and an accurate culture is needed before antibiotics start. Which collection method fits this setting, and which is the gold standard for a sterile specimen?",
            "a": "Straight catheterization for this hospitalized client; suprapubic aspiration is the gold standard.",
            "rationale": "Straight catheterization is used in hospitalized clients when accuracy matters. Suprapubic aspiration bypasses the urethra completely. The culture confirms the organism and its sensitivities so a broad-spectrum antibiotic can be narrowed."
          },
          {
            "q": "An 82-year-old being treated for a UTI now has a temperature of 38.9°C, HR 118, BP 88/50, and new flank pain. What has most likely happened, and what does the nurse recognize about its severity?",
            "a": "The UTI has progressed to an upper-tract infection with urosepsis (bacteremia), which is life-threatening.",
            "rationale": "Urosepsis happens when a UTI progresses to bacteremia. Fever, flank pain, tachycardia, and hypotension signal systemic spread that needs immediate provider notification."
          }
        ]
      }
    },
    {
      "id": "w4-pyelo",
      "name": "Pyelonephritis",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "A client with 2 days of frequency and dysuria now has a temperature of 39.1°C, chills, and right flank pain. What does this change most likely indicate?",
            "a": "The infection has ascended to the kidney (pyelonephritis).",
            "rationale": "Systemic signs such as high fever, chills, and flank pain distinguish pyelonephritis, an upper UTI, from uncomplicated cystitis. Pyelonephritis often starts as a lower UTI that travels up the ureters."
          },
          {
            "q": "When the nurse percusses over the costovertebral angle, the client jumps and cries out in pain. How should the nurse interpret this, and what should the nurse do?",
            "a": "It is positive CVA tenderness, suggesting kidney (upper UTI) involvement, and the provider should be notified.",
            "rationale": "CVA tenderness is an unexpected finding. An inflamed kidney makes the whole area hypersensitive, so even gentle percussion is very painful."
          }
        ],
        "200": [
          {
            "q": "Two clients have urinalysis results. One shows pyuria alone, and the other shows pyuria with WBC casts. Which result points to renal involvement?",
            "a": "Pyuria with WBC casts.",
            "rationale": "WBC casts form in the kidney, so their presence points to upper-tract infection (pyelonephritis) rather than infection confined to the bladder."
          },
          {
            "q": "The CBC of a client with pyelonephritis shows an elevated WBC count with increased bands. What does this finding indicate?",
            "a": "A \"shift to the left,\" meaning more immature WBCs and a severe infection.",
            "rationale": "Increased neutrophils and bands (immature WBCs) mean the body is releasing young cells to fight a serious infection."
          }
        ],
        "300": [
          {
            "q": "A client with mild pyelonephritis is going home on oral antibiotics and plans to take them for 3 days, as with her last bladder infection. What should the nurse teach?",
            "a": "Pyelonephritis usually needs 14–21 days of antibiotics, and she must finish the full course even after she feels better.",
            "rationale": "Upper UTIs are treated much longer than cystitis (3–7 days). She also needs a follow-up urine culture and should report fever or worsening flank pain."
          },
          {
            "q": "A client hospitalized with severe pyelonephritis is on IV antibiotics. What change in the client's condition allows the switch to oral antibiotics?",
            "a": "Nausea and vomiting have improved, and the client tolerates oral intake.",
            "rationale": "IV antibiotics and IV hydration are used while the client is too ill or nauseated to take medication by mouth. The switch to oral therapy happens once the client can take it."
          }
        ],
        "400": [
          {
            "q": "A client with pyelonephritis was stable this morning. Now they are newly confused, with HR 124, RR 26, and BP 90/54. How should the nurse interpret this, and what is the priority?",
            "a": "The infection is progressing to sepsis; notify the provider immediately.",
            "rationale": "Tachycardia, hypotension, tachypnea, and altered mental status signal sepsis, the most serious complication of pyelonephritis. Close vital-sign monitoring is the nursing priority because it catches this change."
          },
          {
            "q": "A client with pyelonephritis asks why an ultrasound was ordered, since they \"just have an infection.\" What is the purpose of the imaging?",
            "a": "To rule out an obstruction, such as a kidney stone, or a renal abscess.",
            "rationale": "An obstruction causes urinary stasis that feeds the infection, and an abscess is a complication. Either one changes treatment, so ultrasound or CT is used to look for them."
          }
        ],
        "500": [
          {
            "q": "A client with a third episode of pyelonephritis this year says, \"Antibiotics always clear it up, so what's the harm?\" What long-term complication should the nurse teach?",
            "a": "Repeated episodes cause permanent renal scarring that can progress to chronic kidney disease.",
            "rationale": "Recurrent or severe pyelonephritis scars the kidneys and gradually damages kidney function. This infection-to-CKD pathway is why prevention and completing treatment matter."
          },
          {
            "q": "A client with severe pyelonephritis is vomiting, has dry mucous membranes, and has low urine output. Orders include IV fluids, IV antibiotics, an antipyretic, and urine and blood cultures. Which must be done before the antibiotics, and which order restores renal perfusion?",
            "a": "Obtain the cultures before the first antibiotic dose; IV hydration restores intravascular volume and renal perfusion.",
            "rationale": "Cultures confirm the organism and guide narrowing from broad-spectrum antibiotics. Blood cultures look for bacteremia when sepsis is suspected. IV hydration is critical in severe pyelonephritis to restore volume and kidney perfusion."
          }
        ]
      }
    },
    {
      "id": "w4-stones",
      "name": "Nephrolithiasis",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "A client arrives with sudden, severe flank pain radiating to the groin. The client is writhing, diaphoretic, and has HR 124 and BP 170/96. Which nursing intervention takes priority?",
            "a": "Pain management.",
            "rationale": "Renal colic is one of the strongest pain sensations known, and it can be severe enough to change vital signs. Unlike typical postoperative pain, stone pain can destabilize the client, so treating it is the priority."
          },
          {
            "q": "A client with a suspected kidney stone asks why a CT is ordered instead of a regular X-ray. Which test is ordered, and what explains the choice?",
            "a": "A non-contrast spiral CT, the gold standard, which detects all stone types.",
            "rationale": "A KUB X-ray shows only radiopaque stones and misses radiolucent uric acid stones. Non-contrast CT is fast and accurate, shows the level of obstruction, and needs no contrast."
          }
        ],
        "200": [
          {
            "q": "A client with a 4-mm stone is sent home to pass it. Which discharge instructions should the nurse include?",
            "a": "Drink plenty of fluids (3–4 L/day), strain all urine, use pain medication as prescribed, and report fever or decreased urine output.",
            "rationale": "Stones smaller than 5 mm pass on their own 70–80% of the time. Straining urine catches the stone for analysis. Fever suggests infection, and oliguria suggests obstruction."
          },
          {
            "q": "The day after extracorporeal shock wave lithotripsy, a client is alarmed by pink-tinged urine. How should the nurse respond?",
            "a": "Reassure the client that some hematuria is expected after lithotripsy, and encourage fluids.",
            "rationale": "Hematuria after lithotripsy or ureteroscopy is normal because of procedural trauma. The nurse still watches for signs of infection or obstruction."
          }
        ],
        "300": [
          {
            "q": "A client's analyzed stone is calcium oxalate. The client plans to stop all dairy. What dietary teaching should the nurse provide?",
            "a": "Follow a low-oxalate diet (limit spinach and dark leafy greens, cocoa, nuts, and tea) and a low-sodium diet; calcium intake does NOT need to be restricted.",
            "rationale": "Calcium oxalate is the most common stone type (about 75%). Current guidance does not restrict dietary calcium. Limiting oxalate and sodium, which lowers urinary calcium, helps prevent recurrence."
          },
          {
            "q": "A client with gout has a stone that does not show up on a KUB X-ray. Which stone type is most likely, and which prevention measures fit it?",
            "a": "A uric acid stone; prevention is a low-purine diet (avoid organ meats, anchovies, sardines), allopurinol, and urine alkalinization.",
            "rationale": "Uric acid stones are radiolucent and linked to gout and acidic urine. Allopurinol lowers uric acid production, and alkalinizing the urine helps dissolve these stones."
          }
        ],
        "400": [
          {
            "q": "A client being managed conservatively for a kidney stone develops a temperature of 38.9°C and chills. What does this new finding most likely mean?",
            "a": "An infection has developed behind the obstruction, which is a complication that needs provider notification.",
            "rationale": "Fever is not part of routine renal colic. When urine backs up behind a stone, infection can set in, and the obstruction may need decompression."
          },
          {
            "q": "A client with a known ureteral stone has urine output of 15 mL/hr for 3 hours, and the serum creatinine is rising. What is the nurse's concern, and what intervention is likely?",
            "a": "The obstructing stone is causing post-renal AKI, which needs decompression (for example, a ureteral stent).",
            "rationale": "Oliguria and rising creatinine signal obstruction. Decompressing quickly prevents lasting kidney damage, and a stent lets urine flow past the stone."
          }
        ],
        "500": [
          {
            "q": "A client with chronic, recurrent UTIs has a large staghorn stone. Which stone type is this, and what is the key to preventing it?",
            "a": "A struvite (magnesium ammonium phosphate) stone; prevention focuses on treating and preventing UTIs.",
            "rationale": "Struvite stones are caused by bacteria and form in alkaline urine from gram-negative infections. Controlling infection is the main prevention strategy."
          },
          {
            "q": "A client with recurrent calcium stones and hypercalciuria is prescribed a thiazide. The client asks, \"Why a water pill when I'm supposed to drink more?\" How should the nurse explain it?",
            "a": "The thiazide lowers the amount of calcium in the urine, which prevents calcium stones; high fluid intake is still needed.",
            "rationale": "Thiazide diuretics are used for stones caused by hypercalciuria. Hydration remains the most important prevention measure because it dilutes the urine."
          }
        ]
      }
    },
    {
      "id": "w4-aki",
      "name": "Acute Kidney Injury",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "A postoperative client's urine output has been 22 mL/hr for 2 hours, and the BUN and creatinine are rising. What should the nurse recognize, and what should the nurse do?",
            "a": "Early oliguria suggests AKI; notify the provider now instead of waiting for a 24-hour total.",
            "rationale": "The 30 mL/hr rule catches oliguria sooner than a 24-hour calculation. Rising BUN and creatinine confirm declining kidney function."
          },
          {
            "q": "After a hemorrhage, a hypotensive client has concentrated urine, a urine sodium of 12 mEq/L, and a FENa below 1%. Which category of AKI is this?",
            "a": "Pre-renal AKI.",
            "rationale": "Decreased perfusion is the cause. A urine Na below 20 and FENa below 1% show the kidneys are holding on to sodium. Pre-renal AKI improves once perfusion is restored with fluids or blood."
          }
        ],
        "200": [
          {
            "q": "After 10 days of an aminoglycoside, a client has rising creatinine, muddy brown urine with casts, and no response to a fluid bolus. Which category of AKI is this, and what is the likely cause?",
            "a": "Intrarenal AKI (acute tubular necrosis) from a nephrotoxic drug.",
            "rationale": "Aminoglycosides damage the kidney tubules. Muddy brown casts, urine Na above 40, FENa above 2%, and no response to fluids point to intrinsic damage. The nephrotoxic drug should be stopped."
          },
          {
            "q": "An older man with BPH has made no urine for 10 hours, has a distended bladder, and a rising creatinine. Which category of AKI is this, and what intervention should the nurse anticipate?",
            "a": "Post-renal AKI; relieving the obstruction, such as with a urinary catheter.",
            "rationale": "Obstruction backs urine up and pressures the kidneys. Post-renal AKI usually reverses once the obstruction is relieved quickly."
          }
        ],
        "300": [
          {
            "q": "A client in the oliguric phase of AKI has a potassium of 6.2 mEq/L and peaked T waves. Which medication should the nurse expect to give first, and why?",
            "a": "IV calcium gluconate, to protect the cardiac membrane.",
            "rationale": "Hyperkalemia is life-threatening. Calcium stabilizes the heart first. Insulin with dextrose then drives potassium into cells, and potassium-binding resins remove it."
          },
          {
            "q": "A client with oliguric AKI made 300 mL of urine yesterday. Using the AKI fluid restriction guideline, what is today's approximate fluid allowance?",
            "a": "About 700–800 mL (400–500 mL plus yesterday's 300 mL output).",
            "rationale": "Fluid restriction in oliguric AKI is 400–500 mL/day plus the previous day's urine output. Daily weights show whether the restriction is working."
          }
        ],
        "400": [
          {
            "q": "On day 10 of AKI, a client is producing about 4 L of dilute urine a day, with dry mucous membranes and falling blood pressure. Which phase is this, and what is the main nursing concern?",
            "a": "The diuretic phase; watch for dehydration and fluid loss, which may need replacement.",
            "rationale": "The diuretic phase usually comes in weeks 2–3, when the kidneys make large amounts of dilute urine. Function is improving, but the client can become volume-depleted."
          },
          {
            "q": "A client in oliguric AKI has gained 3 kg, has a sodium of 128 mEq/L, and is newly disoriented. What most likely explains the confusion?",
            "a": "Dilutional hyponatremia from fluid retention.",
            "rationale": "In the oliguric phase, retained fluid dilutes serum sodium, which causes confusion and, in severe cases, seizures. Uremia can also change mental status."
          }
        ],
        "500": [
          {
            "q": "A client with oliguric AKI has a potassium of 6.8 mEq/L, a pH of 7.18, crackles with increasing dyspnea, and new confusion with a rising BUN. Which treatment should the nurse anticipate?",
            "a": "Dialysis.",
            "rationale": "The client meets several indications for dialysis: potassium above 6.5, severe metabolic acidosis, fluid overload with pulmonary edema, and uremia with altered mental status. Conservative management is no longer enough."
          },
          {
            "q": "Client A has pre-renal AKI from dehydration. Client B has acute tubular necrosis after sepsis. Both families ask about recovery. How do the two prognoses compare?",
            "a": "Pre-renal AKI is the most reversible and has a good prognosis if perfusion is restored promptly; ATN recovers more slowly, has higher mortality, and can lead to CKD.",
            "rationale": "Intrinsic renal damage needs supportive care through a longer recovery. Some clients with severe AKI never fully recover and go on to develop chronic kidney disease."
          }
        ]
      }
    },
    {
      "id": "w4-ckd",
      "name": "Chronic Kidney Disease",
      "week": 4,
      "clues": {
        "100": [
          {
            "q": "A client with stage 3 CKD asks for ibuprofen for arthritis pain. How should the nurse respond?",
            "a": "Recommend avoiding NSAIDs because they are nephrotoxic, and suggest acetaminophen instead.",
            "rationale": "NSAIDs are very hard on the kidneys and are generally avoided in CKD. Acetaminophen is the preferred alternative, though it strains the liver if overused."
          },
          {
            "q": "A client's GFR is 22 mL/min. Which CKD stage is this, and what should the nurse expect at this stage?",
            "a": "Stage 4, when symptoms usually appear and planning for dialysis or transplant begins.",
            "rationale": "Stage 4 is a GFR of 15–29. Clients are often first diagnosed here. Nephrology referral is indicated at a GFR below 30."
          }
        ],
        "200": [
          {
            "q": "A client with CKD has a hemoglobin of 8.6 g/dL and severe fatigue. What causes the anemia, and which therapy should the nurse anticipate?",
            "a": "Loss of erythropoietin production; treatment is an erythropoiesis-stimulating agent (EPO).",
            "rationale": "Failing kidneys stop producing erythropoietin. Hemoglobin is monitored during ESA therapy because too high a level raises the risk of thrombosis. Iron and folate support red blood cell production."
          },
          {
            "q": "A client with CKD is scheduled for a CT with contrast. What should the nurse do before the procedure?",
            "a": "Check the baseline creatinine and anticipate acetylcysteine plus aggressive hydration (if not contraindicated); ask whether non-contrast imaging is an option.",
            "rationale": "Contrast dye is nephrotoxic and can worsen CKD. Acetylcysteine given before the procedure reduces contrast nephrotoxicity, and hydration dilutes the contrast and helps excrete it."
          }
        ],
        "300": [
          {
            "q": "A client with CKD has gained 5 lb in 2 days and has new ankle edema. How should the nurse interpret this?",
            "a": "Fluid retention that should be reported, because it exceeds a 4-lb gain in 2 days.",
            "rationale": "Daily weights are the most reliable measure of fluid status. Rapid gain signals fluid overload, which can progress to hypertension, shortness of breath, and pulmonary edema."
          },
          {
            "q": "A client with CKD on fluid restriction is very thirsty and keeps asking for water. Which nursing measures help without breaking the restriction?",
            "a": "Offer mouth swabs, ice chips, or lozenges, and explain why the restriction is needed.",
            "rationale": "Thirst is a major compliance challenge. When clients understand why a restriction exists, they are more likely to follow it."
          }
        ],
        "400": [
          {
            "q": "A client with CKD has a low calcium, a high phosphorus, and fell last week. How are these findings connected, and which interventions apply?",
            "a": "Renal osteodystrophy (brittle bones); give phosphate binders, calcium, and active vitamin D, and put fall precautions in place.",
            "rationale": "Hyperphosphatemia and hypocalcemia, along with reduced vitamin D activation, weaken the bones and raise fracture risk."
          },
          {
            "q": "A client who just started hemodialysis asks why the dietitian now says to eat MORE protein, after years of being told to limit it. How should the nurse explain?",
            "a": "Before dialysis, protein was restricted to limit waste buildup; dialysis now filters that waste, so protein can increase to prevent malnutrition.",
            "rationale": "BUN and creatinine are byproducts of protein metabolism. Pre-dialysis restriction worsened an already malnourished state, and dialysis allows a more liberal diet."
          }
        ],
        "500": [
          {
            "q": "A client with CKD has a potassium of 5.9 mEq/L, severe itching, a hemoglobin of 9 g/dL, and a BP of 172/98. Which finding is the immediate safety priority, and which intervention does the most to slow CKD progression?",
            "a": "The potassium nearing 6.0 is the immediate priority (anticipate potassium-lowering orders and cardiac monitoring); blood pressure control does the most to slow progression.",
            "rationale": "Hyperkalemia can cause fatal dysrhythmias. Over the long term, aggressive BP control (ACE inhibitor or ARB) is the most important measure to slow CKD."
          },
          {
            "q": "A client with hypertension and diabetes has a GFR of 52 and says, \"I feel fine, so why all this teaching?\" What should the nurse explain?",
            "a": "This is stage 3A, the critical time to slow the disease; the kidneys can lose more than 50% of their function before symptoms appear, so tight BP and glucose control matter now.",
            "rationale": "Hypertension and diabetes cause most CKD. The kidney's reserves hide damage, which is why catching CKD in stages 1–3A is so important."
          }
        ]
      }
    },
    {
      "id": "w5-hiv-dx",
      "name": "HIV Diagnosis & Labs",
      "week": 5,
      "clues": {
        "100": [
          {
            "q": "A client tests negative on a 4th-generation Ag/Ab test 60 days after their last possible exposure and asks whether they need a repeat test. How should the nurse respond?",
            "a": "No repeat is needed; the result reliably excludes HIV because the window period has passed.",
            "rationale": "The 4th-generation window is 18–45 days. After more than 45 days, a negative result excludes HIV. Within the window, the test is repeated in 1–2 weeks."
          },
          {
            "q": "A client newly diagnosed with HIV has a CD4 count of 150 cells/μL. What does this count indicate, and which prophylaxis is required?",
            "a": "The client has AIDS; TMP-SMX for PCP prophylaxis is mandatory.",
            "rationale": "A CD4 count below 200 is AIDS-defining and brings a high risk of PCP. TMP-SMX prophylaxis is required at this level."
          }
        ],
        "200": [
          {
            "q": "A rapid HIV test in the emergency department is positive. What does the nurse expect to happen next?",
            "a": "Confirmatory testing: an HIV-1/HIV-2 differentiation immunoassay, followed by an HIV-1 NAT.",
            "rationale": "Rapid tests need confirmation. The diagnostic algorithm moves from screening to differentiation to NAT to confirm infection."
          },
          {
            "q": "Two weeks after an exposure, a client has a severe flu-like illness. The antibody test is negative, but the viral load is very high and the p24 antigen is positive. What does this mean for transmission?",
            "a": "This is acute HIV infection, and the client is highly infectious despite the negative antibody test.",
            "rationale": "In acute infection, antibodies are not yet detectable, but viral replication is intense. NAT is the only way to detect it, and the client can transmit the virus."
          }
        ],
        "300": [
          {
            "q": "A client with AIDS has a CD4 count of 45 cells/μL. Which prophylactic medications should the nurse expect?",
            "a": "TMP-SMX plus azithromycin 1,200 mg weekly for MAC.",
            "rationale": "At a CD4 count below 50, MAC prophylaxis is added to TMP-SMX, which covers PCP and toxoplasmosis."
          },
          {
            "q": "A client with a CD4 count of 60 cells/μL reports new floaters and blurred vision. Which opportunistic infection should the nurse suspect?",
            "a": "CMV retinitis.",
            "rationale": "CMV retinitis is a risk at very low CD4 counts. Vision changes are a red flag that needs care right away to prevent vision loss."
          }
        ],
        "400": [
          {
            "q": "Four weeks after starting ART, a client's viral load has dropped by less than 1 log. How should the nurse interpret this result?",
            "a": "The response to ART is inadequate; adherence and possible resistance need to be assessed.",
            "rationale": "An effective regimen should lower the viral load by more than 1 log within 4 weeks and then make it undetectable. Adherence above 95% is needed to prevent resistance."
          },
          {
            "q": "A newly diagnosed client with a very high baseline viral load asks what that number means for them. What does a high set point predict?",
            "a": "Faster disease progression.",
            "rationale": "The viral set point, established about 6 months after infection, predicts progression: the higher it is, the faster CD4 cells decline. Viral load is also used to check how well ART is working."
          }
        ],
        "500": [
          {
            "q": "A client whose viral load has been undetectable for many months asks whether they can stop using condoms with their HIV-negative partner. How should the nurse respond?",
            "a": "Undetectable = Untransmittable (U=U) means HIV is not transmitted sexually, but condoms are still recommended to prevent other STIs.",
            "rationale": "U=U applies when the viral load is sustained at undetectable levels on ART. Teaching still includes condom use for STI prevention and ongoing adherence."
          },
          {
            "q": "A newly diagnosed client with a CD4 count of 350 wants to put off ART \"until my counts drop.\" How should the nurse respond?",
            "a": "All HIV-positive clients should start ART as soon as possible, regardless of CD4 count.",
            "rationale": "Current guidance is immediate treatment for everyone. Starting early protects the immune system and lowers transmission, and success depends on adherence above 95%."
          }
        ]
      }
    },
    {
      "id": "w5-hiv-tx",
      "name": "HIV: ART & Prevention",
      "week": 5,
      "clues": {
        "100": [
          {
            "q": "A client started on efavirenz reports dizziness and vivid dreams and has been taking it every morning before driving to work. What should the nurse teach?",
            "a": "Take efavirenz at bedtime and use caution with driving.",
            "rationale": "Efavirenz has common CNS effects, including dizziness, vivid dreams, and depression with suicide risk. Taking it at night reduces how much these affect daily activities."
          },
          {
            "q": "An HIV-negative client whose partner has HIV asks how to reduce their risk before any exposure. Which option should the nurse discuss, and what monitoring does it require?",
            "a": "Daily PrEP (TDF/FTC), with HIV testing every 3 months.",
            "rationale": "PrEP is 92–99% effective with good adherence. Monitoring includes quarterly HIV tests, kidney and bone checks every 6–12 months, HBsAg, and STI screening."
          }
        ],
        "200": [
          {
            "q": "A client reports an unprotected sexual exposure to a partner with HIV that happened 80 hours ago and asks for PEP. How should the nurse respond?",
            "a": "PEP is no longer beneficial because it must start within 72 hours; HIV testing and follow-up are still arranged.",
            "rationale": "PEP works best when started within 1–2 hours, and the benefit disappears after 72 hours."
          },
          {
            "q": "A client on a tenofovir disoproxil (TDF)–based regimen asks why labs are drawn so often. Which toxicities is the nurse monitoring for?",
            "a": "Kidney toxicity (creatinine) and bone loss.",
            "rationale": "TDF can harm the kidneys and bones. TAF, the newer tenofovir formulation, has less kidney and bone toxicity."
          }
        ],
        "300": [
          {
            "q": "Three weeks into ART, a client's CD4 count rose from 40 to 150, but fever and swollen lymph nodes from a known infection are getting worse. The client wants to stop the pills. What is happening, and how should the nurse respond?",
            "a": "Immune reconstitution inflammatory syndrome (IRIS); ART should continue, and the inflammation is managed with NSAIDs or corticosteroids.",
            "rationale": "In IRIS, the recovering immune system \"wakes up\" and reacts to an existing infection. This is a paradoxical worsening, not treatment failure, so ART is not stopped."
          },
          {
            "q": "A client taking darunavir boosted with ritonavir has new high triglycerides and a high blood glucose on routine labs. What explains these findings, and what other teaching applies to this drug class?",
            "a": "These are known protease inhibitor effects; teach the client to take it with food and report all other medications because of drug interactions.",
            "rationale": "Protease inhibitors cause GI upset, hyperglycemia, dyslipidemia, and lipodystrophy, and the ritonavir booster causes many drug interactions. Lipids are monitored yearly."
          }
        ],
        "400": [
          {
            "q": "A nurse starting PEP after a needlestick asks how long treatment lasts, when follow-up testing happens, and whether anything changes at home. What should the nurse be taught?",
            "a": "A 28-day, 3-drug course; HIV tests at baseline, 6 weeks, 3 months, and 6 months; condom use during PEP.",
            "rationale": "Adherence is critical for PEP to work, and side effects are common. The exposure should be reported immediately and followed by occupational health."
          },
          {
            "q": "A client taking efavirenz tells the nurse she is planning to become pregnant. What is the nurse's priority response?",
            "a": "Report this to the provider, because efavirenz is teratogenic and the regimen should be changed.",
            "rationale": "Efavirenz should be avoided in pregnancy. The provider can choose a different regimen while keeping viral suppression."
          }
        ],
        "500": [
          {
            "q": "A client on dolutegravir has gained about 3 kg and plans to skip doses \"to control my weight.\" What should the nurse address?",
            "a": "Weight gain is a known INSTI effect; skipping doses risks resistance, so the concern should go to the provider instead.",
            "rationale": "Missed doses let the virus replicate and mutate. More than 95% adherence is needed, and side effects are managed by working with the provider, not by skipping doses."
          },
          {
            "q": "A client at high risk who cannot tolerate daily pills asks about injectable PrEP. What regimen and follow-up should the nurse describe?",
            "a": "Cabotegravir IM: one injection monthly for 2 months, then every 2 months, with baseline and follow-up HIV testing.",
            "rationale": "Injectable PrEP was 99% effective in trials and helps people who have trouble with daily pills. Testing continues throughout treatment."
          }
        ]
      }
    },
    {
      "id": "w5-skin",
      "name": "Skin Conditions",
      "week": 5,
      "clues": {
        "100": [
          {
            "q": "A client's lower leg is red, warm, and swollen, with poorly defined borders that are spreading. The client has a fever and chills. Which condition is most likely, and what treatment should the nurse anticipate?",
            "a": "Cellulitis, treated with IV antibiotics and elevation.",
            "rationale": "Cellulitis is usually caused by group A strep or Staph aureus. It spreads poorly demarcated redness with systemic signs. The nurse also watches for sepsis."
          },
          {
            "q": "A mole on a client's back is 8 mm across, has a notched border, and contains three different colors. How should the nurse interpret this?",
            "a": "The mole is suspicious for melanoma, and the client should be referred for evaluation.",
            "rationale": "Under the ABCDE rule, border irregularity, color variation, and a diameter over 6 mm are warning signs of melanoma."
          }
        ],
        "200": [
          {
            "q": "A client had burning pain on the right side of the torso for 2 days and now has painful vesicles in a band that stops at the midline. What is the key timing for treatment?",
            "a": "Antivirals should start within 72 hours of onset.",
            "rationale": "Shingles follows one dermatome on one side. Starting antivirals early shortens the illness and lowers the risk of postherpetic neuralgia."
          },
          {
            "q": "A client has a round, scaly, itchy patch with a clear center and slightly raised edges. Which condition is most likely, and what is the treatment?",
            "a": "Tinea corporis (ringworm), treated with a topical antifungal.",
            "rationale": "Tinea corporis forms ring-shaped lesions with central clearing. Extensive disease may need oral griseofulvin or terbinafine."
          }
        ],
        "300": [
          {
            "q": "A child is being treated for impetigo caused by group A strep. Which later complication should the nurse teach the family to watch for?",
            "a": "Post-streptococcal glomerulonephritis.",
            "rationale": "Impetigo from Streptococcus pyogenes can be followed by glomerulonephritis. Nursing care also includes covering lesions, hand hygiene, and keeping the child separated from others."
          },
          {
            "q": "After starting a new medication, a client develops itchy, raised wheals that come and go within hours, along with lip swelling. What is this, and what is the initial management?",
            "a": "Acute urticaria with angioedema; stop and avoid the trigger and give H1 antihistamines, with corticosteroids if severe.",
            "rationale": "Urticaria can be triggered by drugs, foods, or other allergens. It is considered acute if it resolves within 6 weeks."
          }
        ],
        "400": [
          {
            "q": "Four months after shingles, an older client still has burning pain where the rash was. What is this, and which medications should the nurse anticipate?",
            "a": "Postherpetic neuralgia, treated with gabapentin or pregabalin.",
            "rationale": "Pain that lasts more than 3 months after zoster is postherpetic neuralgia. Starting antivirals early lowers the risk."
          },
          {
            "q": "A client with HIV and a CD4 count of 80 has many firm, skin-colored papules with a dimple in the center. What is this, and what should the nurse teach?",
            "a": "Molluscum contagiosum; do not squeeze the lesions because that spreads them, and they may improve with ART.",
            "rationale": "Molluscum is more common and more severe when CD4 is below 100 and spreads through contact. Treatment includes curettage, cryotherapy, or topical agents."
          }
        ],
        "500": [
          {
            "q": "A client's excised melanoma has a Breslow thickness of 0.5 mm, and the client asks whether lymph nodes must be removed. What does this thickness mean?",
            "a": "It is a thin melanoma with about 95% 5-year survival, and lymph node dissection may not be needed.",
            "rationale": "Breslow thickness predicts prognosis. Intermediate lesions (0.76–4 mm) usually need a sentinel node biopsy. Teaching includes sun protection, self-checks, and family screening."
          },
          {
            "q": "A client with diabetes has been on antibiotics and corticosteroids for weeks. The client now has a red, macerated rash in the groin folds with satellite pustules and intense itching. What is the condition, and what does the plan include?",
            "a": "Candidiasis; treat with an antifungal, reduce moisture, and address the underlying causes.",
            "rationale": "Diabetes, prolonged antibiotic use, corticosteroids, and moisture all promote Candida overgrowth. Satellite pustules are its typical sign."
          }
        ]
      }
    },
    {
      "id": "w5-wounds",
      "name": "Wounds & Complications",
      "week": 5,
      "clues": {
        "100": [
          {
            "q": "On postoperative day 6, a client's abdominal incision has pulled apart along the suture line, with more serosanguineous drainage but no visible organs. What is this complication, and what should the nurse do?",
            "a": "Wound dehiscence; notify the provider.",
            "rationale": "Dehiscence is separation of the wound layers and often happens on days 5–8. It becomes evisceration if organs protrude."
          },
          {
            "q": "On postoperative day 5, the drainage from a client's wound changes from serous to thick, yellow, and foul-smelling. The wound culture and antibiotic orders arrive together. Which should the nurse do first?",
            "a": "Obtain the wound culture before starting antibiotics.",
            "rationale": "Purulent drainage signals infection, which typically appears 2–11 days after surgery. Culturing first allows therapy to be narrowed from broad-spectrum to organism-specific."
          }
        ],
        "200": [
          {
            "q": "An abdominal wound eviscerates. The nurse has called for help and covered the organs with sterile saline-soaked dressings. How should the client be positioned, and what diet order applies?",
            "a": "Bend the hips and knees, and keep the client NPO.",
            "rationale": "Flexing the hips and knees reduces tension on the abdominal wound. The client will almost certainly need emergency surgery, so NPO is maintained and the nurse stays with the client."
          },
          {
            "q": "Six hours after a tibial fracture was casted, a client reports severe pain when the nurse gently stretches the toes. Which complication is this, and what should the nurse do?",
            "a": "Early compartment syndrome; notify the provider immediately and anticipate removing or loosening the cast.",
            "rationale": "Pain on passive stretch is the earliest and most sensitive sign. The nurse should not wait for pulselessness or paralysis, which are late findings."
          }
        ],
        "300": [
          {
            "q": "A client's compartment pressure measures 34 mmHg. What intervention should the nurse anticipate, and why is timing critical?",
            "a": "An urgent fasciotomy, because tissue damage becomes irreversible after 6–8 hours of ischemia.",
            "rationale": "A pressure above 30 mmHg is an emergency. Fasciotomy relieves the pressure and restores perfusion to save the limb."
          },
          {
            "q": "A client's surgical scar has grown beyond the original incision borders and is painful and itchy. What type of scar is this, and what treatments apply?",
            "a": "A keloid, treated with steroid injections, silicone gel sheeting, and pressure garments.",
            "rationale": "Keloids extend past the wound edges, while hypertrophic scars stay within them. Keloids are more common in darker skin tones."
          }
        ],
        "400": [
          {
            "q": "On postoperative day 1, a client's heart rate has risen from 84 to 112, the incision area is swollen and distended, and fresh sanguineous drainage is on the dressing. The BP is still 118/70. What is happening, and what should the nurse do?",
            "a": "Internal bleeding (hemorrhage); apply direct pressure, notify the provider, and prepare for a possible return to the OR.",
            "rationale": "Tachycardia is the earliest sign of hemorrhage and appears before hypotension. The highest risk is within the first 48 hours after surgery."
          },
          {
            "q": "A client with a septic wound needs antibiotics now, but cultures cannot be drawn right away. What approach should the nurse anticipate?",
            "a": "Start empiric broad-spectrum antibiotics, then switch to an organism-specific drug once culture and sensitivity results return.",
            "rationale": "Cultures are drawn before antibiotics whenever possible. When treatment cannot wait, broad-spectrum antibiotics are narrowed later to reduce resistance and side effects."
          }
        ],
        "500": [
          {
            "q": "An obese 72-year-old with abdominal cancer, poor nutrition, and ongoing postoperative vomiting had a laparotomy. Which factors put this client at risk for dehiscence, and when is the risk highest?",
            "a": "Age, obesity, abdominal cancer, malnutrition, and vomiting (increased abdominal pressure); risk is highest around postoperative days 5–8.",
            "rationale": "Dehiscence tends to occur after the early inflammation fades but before enough collagen forms. Anything that raises abdominal pressure increases the risk."
          },
          {
            "q": "A client has a small leg wound, but the redness has spread past the marked border within an hour. Pain is 10/10, far worse than the wound's appearance, crepitus is present, and BP is 86/50. Which condition is this, and what is the priority treatment?",
            "a": "Necrotizing fasciitis, which needs immediate surgical debridement plus IV broad-spectrum antibiotics and fluid resuscitation.",
            "rationale": "Pain out of proportion to the wound, rapid spread, crepitus from gas in the tissue, and signs of septic shock distinguish necrotizing fasciitis from cellulitis. Mortality is 10–40%, and repeated debridement is often needed."
          }
        ]
      }
    },
    {
      "id": "w5-burns",
      "name": "Burns",
      "week": 5,
      "clues": {
        "100": [
          {
            "q": "A client's burn is red and dry, blanches with pressure, is very painful, and has no blisters. Which depth is this, and what is the expected healing?",
            "a": "A superficial burn that heals in 5–7 days without scarring.",
            "rationale": "Superficial burns involve only the epidermis, so the nerves are intact and painful. They heal by re-epithelialization from the basal layer."
          },
          {
            "q": "A client rescued from a house fire has flushed pink skin, a headache, and confusion. The SpO2 is 99%. Which condition should the nurse suspect, and what is the priority treatment?",
            "a": "Carbon monoxide poisoning; give 100% high-flow oxygen immediately.",
            "rationale": "CO binds hemoglobin about 200 times more strongly than oxygen. The client looks pink rather than cyanotic, and SpO2 can be falsely reassuring. Hyperbaric oxygen is considered if carboxyhemoglobin is above 10%."
          }
        ],
        "200": [
          {
            "q": "An adult has burns covering the entire left arm and the entire posterior trunk. Using the Rule of Nines, what is the estimated TBSA?",
            "a": "27%.",
            "rationale": "Each arm is 9% and the posterior trunk is 18%, so 9% + 18% = 27%. TBSA drives the fluid resuscitation calculation and the burn severity classification."
          },
          {
            "q": "One worker is splashed with sulfuric acid and another with lye. Which injury is likely deeper, and what immediate care do both need?",
            "a": "The lye (alkali) injury; both need flushing with copious water for at least 15–20 minutes and no neutralizing agents.",
            "rationale": "Alkalis cause liquefactive necrosis and keep penetrating until they are rinsed away. Acids form an eschar that limits penetration. Neutralizers cause a heat-producing reaction."
          }
        ],
        "300": [
          {
            "q": "A 60-kg client has 30% TBSA burns. Using the Parkland formula, at what hourly rate should lactated Ringer's run for the first 8 hours?",
            "a": "450 mL/hr.",
            "rationale": "4 mL × 30% × 60 kg = 7,200 mL over 24 hours. Half (3,600 mL) is given in the first 8 hours, which is 450 mL/hr. The rate is then adjusted based on urine output."
          },
          {
            "q": "A client with a high-voltage electrical burn has small entry and exit wounds and dark, cola-colored urine. What is the urine output goal, and what else must be monitored continuously?",
            "a": "At least 1 mL/kg/hr of urine, with continuous cardiac monitoring for dysrhythmias.",
            "rationale": "Electrical current causes deep muscle necrosis and myoglobinuria, which threatens the kidneys. Ventricular fibrillation is the most dangerous immediate risk, and delayed dysrhythmias can occur for 24 hours or more."
          }
        ],
        "400": [
          {
            "q": "A client with a circumferential full-thickness burn of the chest has increasingly shallow respirations and poor chest expansion. Which procedure should the nurse anticipate?",
            "a": "An escharotomy.",
            "rationale": "Rigid, circumferential eschar constricts the chest wall. Incisions through the eschar allow the chest to expand and prevent compartment syndrome during the emergent phase."
          },
          {
            "q": "A 60-kg client in the emergent phase is receiving Parkland fluids. Urine output is 110 mL/hr, new crackles are heard, and the limbs are becoming tense. How should the nurse interpret this?",
            "a": "The client is being over-resuscitated; notify the provider to reduce the infusion rate.",
            "rationale": "Fluids are adjusted to a urine output goal of 0.5 mL/kg/hr, which is 30 mL/hr here. Too much fluid causes pulmonary edema and compartment syndrome, and too little causes shock."
          }
        ],
        "500": [
          {
            "q": "On day 8, a client with major burns develops a new fever, confusion, hemodynamic instability, a falling platelet count, and hyperglycemia. What is the likely complication, and what does the nurse anticipate?",
            "a": "Burn wound sepsis; anticipate blood cultures, empiric broad-spectrum antibiotics, and aggressive surgical debridement.",
            "rationale": "Bacteria colonize the necrotic eschar and then invade viable tissue and the bloodstream. Burn wound sepsis is the leading cause of death in burn patients."
          },
          {
            "q": "On day 5 after a severe burn, a client has coffee-ground emesis and tarry stools, and the hemoglobin has fallen from 11 to 8.9 g/dL. What is the complication, and why is it usually prevented from admission?",
            "a": "Curling's (stress) ulcer; H2 blockers or PPIs are started on admission as prophylaxis.",
            "rationale": "Severe burn stress causes acute gastric or duodenal ulceration. Hemoglobin and hematocrit are monitored, and endoscopy is done if there is active bleeding."
          }
        ]
      }
    }
  ]
};
