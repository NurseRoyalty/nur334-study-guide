/* ============================================================
   data/exam4-jeopardy.js — Exam 4 Jeopardy question bank
   (Week 6 Gastrointestinal + Week 7 Cancer / Hepatobiliary ONLY).

   This file is the ONLY place Exam 4 Jeopardy content lives. The game
   engine (assets/exam4-jeopardy.js) contains no questions, so to add,
   edit, or remove clues just change this file.

   Shape:
     categories[] -> { id, name, week (6 or 7),
                       clues: { "100":[...], ... "500":[...] } }
     each clue    -> { q, a, rationale }
   ============================================================ */
window.JEOPARDY_EXAM4 = {
  "categories": [
    {
      "id": "w6-dx",
      "name": "GI Diagnostics & Bariatric Surgery",
      "week": 6,
      "clues": {
        "100": [
          {
            "q": "A client returns from an upper GI series and is alarmed that the next bowel movement is white. What does the nurse tell the client?",
            "a": "White stool is expected after barium.",
            "rationale": "Barium turns the stool white. It is an expected finding, not a sign of a problem."
          },
          {
            "q": "A client is scheduled for an EGD tomorrow morning. How long must the client be NPO beforehand?",
            "a": "8 hours.",
            "rationale": "The client is NPO for 8 hours and signs consent before an EGD."
          }
        ],
        "200": [
          {
            "q": "After a barium swallow, what does the nurse encourage the client to do for the rest of the day, and why?",
            "a": "Drink plenty of fluids, because barium is constipating.",
            "rationale": "Barium can harden in the bowel, so fluids are pushed afterward to help it pass."
          },
          {
            "q": "A client who had a stroke coughs when drinking water. Which test evaluates swallowing with different food and liquid consistencies?",
            "a": "A modified barium swallow.",
            "rationale": "The modified barium swallow tests thin liquids, thickened liquids, and soft foods. If the client passes, eating can resume."
          }
        ],
        "300": [
          {
            "q": "One hour after an EGD, a drowsy client asks for ice chips. What does the nurse do first, and why?",
            "a": "Hold the ice chips and check for a gag reflex; the throat was numbed, so there is a risk of aspiration.",
            "rationale": "The client stays NPO until the gag reflex returns, usually 2–4 hours. Ice chips still count as oral intake."
          },
          {
            "q": "A client with a suspected perforated ulcer needs a contrast study of the upper GI tract. Which contrast is used instead of barium, and why?",
            "a": "Gastrografin, because barium must not leak into the peritoneum.",
            "rationale": "Gastrografin is used whenever a perforation is suspected."
          }
        ],
        "400": [
          {
            "q": "A client's colonoscopy is stopped early because stool is still in the colon. What does this mean for the client?",
            "a": "The test cannot be completed and must be repeated after a thorough bowel prep.",
            "rationale": "Incomplete bowel prep is why thorough prep is emphasized before a colonoscopy."
          },
          {
            "q": "A client with long-standing diabetes feels full and nauseated long after meals. Which test is expected, and what does the client eat during it?",
            "a": "A gastric emptying study; a cooked egg with a trace of radioactive material.",
            "rationale": "The study detects gastroparesis. It is not dangerous, and the client lies flat during scanning."
          }
        ],
        "500": [
          {
            "q": "Two clients ask about bariatric surgery: one has a BMI of 36 with sleep apnea, the other a BMI of 37 with no other conditions. Which client meets the criteria, and why?",
            "a": "The client with a BMI of 36 and sleep apnea.",
            "rationale": "Criteria are a BMI of 40 or higher, or 35 or higher with at least one serious obesity-related condition."
          },
          {
            "q": "Three hours after an EGD, a client's heart rate climbs from 78 to 114 with new abdominal pain. What complication does the nurse suspect, and what are the actions?",
            "a": "Perforation (or bleeding); monitor vital signs closely and notify the provider.",
            "rationale": "Perforation after an EGD is rare but life-threatening. Gas and sedation do not explain a rising heart rate with worsening pain."
          }
        ]
      }
    },
    {
      "id": "w6-gerd",
      "name": "GERD, Hiatal Hernia & PUD",
      "week": 6,
      "clues": {
        "100": [
          {
            "q": "What is the most common symptom of GERD?",
            "a": "Heartburn.",
            "rationale": "A loose lower esophageal sphincter lets acid reflux into the esophagus, causing heartburn."
          },
          {
            "q": "What are the two main causes of peptic ulcers?",
            "a": "H. pylori and NSAIDs.",
            "rationale": "Having both markedly raises ulcer risk."
          }
        ],
        "200": [
          {
            "q": "A client with GERD wakes up coughing at night. What two changes does the nurse teach for bedtime?",
            "a": "Raise the head of the bed on 4–6 inch blocks and avoid late-night snacks.",
            "rationale": "Gravity keeps acid down, and an empty stomach leaves less to reflux. Clients also stay upright 2–3 hours after meals."
          },
          {
            "q": "A client's medication names end in -prazole and -tidine. Which drug classes are these?",
            "a": "Proton pump inhibitors (-prazole) and H2 blockers (-tidine).",
            "rationale": "PPIs give strong acid suppression; H2 blockers decrease gastric acid."
          }
        ],
        "300": [
          {
            "q": "A provider orders a high-dose PPI for two weeks instead of an endoscopy for a client with heartburn. What is the purpose of this approach?",
            "a": "It is a trial to diagnose GERD; if symptoms improve, invasive testing may not be needed.",
            "rationale": "Because of cost and discomfort, GERD is often diagnosed with a 2-week PPI trial."
          },
          {
            "q": "Which medication for reflux works by speeding gastric emptying, and which works by coating the stomach?",
            "a": "Metoclopramide speeds emptying; sucralfate coats the stomach.",
            "rationale": "Metoclopramide is a prokinetic, and sucralfate is cytoprotective."
          }
        ],
        "400": [
          {
            "q": "A client with a duodenal ulcer says the pain suddenly feels better, but the heart rate is rising and NG drainage is redder. What does the nurse suspect?",
            "a": "Hemorrhage.",
            "rationale": "Early in a bleed, blood can neutralize acid and briefly ease ulcer pain. Hemorrhage is the most common complication of PUD."
          },
          {
            "q": "A client with years of untreated reflux is diagnosed with Barrett's esophagus. Why is this finding taken so seriously?",
            "a": "It raises the risk of esophageal cancer 30–40 times.",
            "rationale": "Barrett's esophagus is a change in the lining from chronic acid exposure and is followed with biopsy."
          }
        ],
        "500": [
          {
            "q": "A client with a peptic ulcer has sudden severe pain, a rigid board-like abdomen, and absent bowel sounds. What has happened, and what develops within 6–12 hours?",
            "a": "The ulcer has perforated; bacterial peritonitis develops.",
            "rationale": "Perforation is sudden and dramatic. Obstruction, by contrast, develops gradually."
          },
          {
            "q": "After a partial gastrectomy, a client has diarrhea, dizziness, and palpitations after meals, then feels shaky about two hours later. What explains each phase?",
            "a": "Dumping syndrome: a hyperosmolar food bolus pulls fluid into the intestine, then excess insulin causes hypoglycemia.",
            "rationale": "Teach six small meals, no fluids with meals, avoid simple sugars, more protein and fat, and rest after eating."
          }
        ]
      }
    },
    {
      "id": "w6-ugib",
      "name": "GI Bleed, IBD & Obstruction",
      "week": 6,
      "clues": {
        "100": [
          {
            "q": "A client vomits bright red blood. What does bright red hematemesis tell the nurse about the bleeding?",
            "a": "It is recent or still active.",
            "rationale": "Coffee-ground emesis is older, partly digested blood; bright red blood is fresh."
          },
          {
            "q": "Which inflammatory bowel disease affects only the colon and starts in the rectum?",
            "a": "Ulcerative colitis.",
            "rationale": "Ulcerative colitis spreads upward from the rectum in a continuous pattern."
          }
        ],
        "200": [
          {
            "q": "What size IV does the nurse start for a client with an upper GI bleed, and why?",
            "a": "An 18-gauge, because blood and fluid resuscitation are anticipated.",
            "rationale": "A large-bore IV is needed for PRBCs and rapid fluids."
          },
          {
            "q": "What is the most common cause of a mechanical bowel obstruction?",
            "a": "Adhesions.",
            "rationale": "Adhesions are the number one cause of mechanical obstruction; a paralytic ileus is the non-mechanical type."
          }
        ],
        "300": [
          {
            "q": "A client with black, tarry stools has a falling H&H, a normal creatinine, and a rising BUN. What explains the BUN?",
            "a": "Blood is being digested in the GI tract.",
            "rationale": "With a normal creatinine, a rising BUN supports a GI bleed rather than a kidney problem."
          },
          {
            "q": "A client with Crohn's disease is admitted in a flare. What are the first two measures used to rest the bowel?",
            "a": "NPO status and IV fluids.",
            "rationale": "Once the flare settles, the diet is high-calorie, high-protein, and low-residue."
          }
        ],
        "400": [
          {
            "q": "A client with a GI bleed becomes restless and thirsty with cool, clammy skin and a rising heart rate. What is happening?",
            "a": "Hypovolemic shock is developing.",
            "rationale": "These are compensatory signs of rapid blood loss and need immediate action."
          },
          {
            "q": "A client has not passed gas since bowel surgery and has a distended abdomen. Which intervention decompresses the bowel?",
            "a": "An NG tube to low wall suction.",
            "rationale": "A paralytic ileus often follows bowel manipulation. The bowel is decompressed while fluids and electrolytes are managed."
          }
        ],
        "500": [
          {
            "q": "A client is started on TPN through a central line. How often is blood glucose checked, and why is the infusion started and stopped gradually?",
            "a": "About every 6 hours; so the pancreas can adjust to the high glucose load.",
            "rationale": "TPN is highly concentrated in glucose and is used only when the gut cannot be used."
          },
          {
            "q": "Two clients need surgery for inflammatory bowel disease. For which disease is surgery curative, and why is it not curative for the other?",
            "a": "Ulcerative colitis, because it affects only the colon; Crohn's can occur anywhere from mouth to anus and returns after resection.",
            "rationale": "Crohn's is transmural with skip lesions, leading to fistulas and strictures."
          }
        ]
      }
    },
    {
      "id": "w6-crc",
      "name": "Colorectal Cancer & Ostomies",
      "week": 6,
      "clues": {
        "100": [
          {
            "q": "At what age does colonoscopy screening begin for an average-risk adult, and how often is it repeated?",
            "a": "Age 45, every 10 years.",
            "rationale": "Colonoscopy is the gold standard for screening."
          },
          {
            "q": "A new stoma is in the right lower quadrant and drains liquid stool. What type of ostomy is this?",
            "a": "An ileostomy.",
            "rationale": "Ileostomy output is liquid and caustic because the colon has not reabsorbed water."
          }
        ],
        "200": [
          {
            "q": "A client refuses a colonoscopy. What screening option is acceptable, and how often?",
            "a": "A stool test for occult blood (or stool DNA), every year.",
            "rationale": "It is less favorable than colonoscopy but acceptable if it is all the client will do."
          },
          {
            "q": "How large should the opening in an ostomy wafer be cut, and why?",
            "a": "The exact size of the stoma, so no skin is exposed to the output.",
            "rationale": "Output, especially from an ileostomy, is caustic to skin."
          }
        ],
        "300": [
          {
            "q": "Which surgery for rectal cancer leaves the client with a permanent colostomy?",
            "a": "An abdominoperineal (AP) resection.",
            "rationale": "The rectum is removed. A low anterior resection preserves the sphincter."
          },
          {
            "q": "A sigmoid colostomy is in the left lower quadrant. What does the nurse expect the output to look like?",
            "a": "Formed stool.",
            "rationale": "Location determines output: the farther along the colon, the more water has been reabsorbed."
          }
        ],
        "400": [
          {
            "q": "A 58-year-old has fatigue and a low hemoglobin but no visible bleeding. Why does the provider order a colonoscopy?",
            "a": "Colorectal cancer is insidious and may first show up as anemia.",
            "rationale": "Other signs include bleeding, pain, and a change in bowel habits."
          },
          {
            "q": "A client has a loop stoma supported by a rod. What drains from the proximal opening, and what from the distal opening?",
            "a": "Stool from the proximal opening; mucus from the distal opening.",
            "rationale": "The rod supports the loop of bowel on the abdomen."
          }
        ],
        "500": [
          {
            "q": "Three days after ostomy surgery, a client still will not look at the stoma. How should the nurse interpret this, and what is the plan?",
            "a": "It is a common reaction; teach slowly, involve the ostomy nurse, and arrange follow-up and support.",
            "rationale": "Emotional adjustment to an ostomy is expected to be slow."
          },
          {
            "q": "After a colon resection, a client reports rectal mucus, gas, and no stool or gas from the stoma for 30 hours. Which finding must be reported?",
            "a": "No stool or gas for more than 24 hours.",
            "rationale": "Rectal mucus and gas are expected. No output for over 24 hours is a red flag after bowel surgery."
          }
        ]
      }
    },
    {
      "id": "w6-div",
      "name": "Diverticular Disease",
      "week": 6,
      "clues": {
        "100": [
          {
            "q": "What is the difference between diverticulosis and diverticulitis?",
            "a": "Diverticulosis is having out-pouchings; diverticulitis is when they become inflamed.",
            "rationale": "Diverticulosis is often asymptomatic; -itis means inflammation."
          },
          {
            "q": "In which abdominal quadrant is the pain of diverticulitis usually felt?",
            "a": "The left lower quadrant.",
            "rationale": "A mass may also be felt there, along with signs of infection."
          }
        ],
        "200": [
          {
            "q": "What type of diet helps prevent flares in a client with diverticulosis?",
            "a": "A high-fiber diet.",
            "rationale": "Fiber and activity prevent constipation, which raises pressure in the bowel."
          },
          {
            "q": "A client with diverticulosis asks whether nuts and seeds must be avoided. What does the nurse say?",
            "a": "They are fine to eat unless they personally trigger flares.",
            "rationale": "There is no evidence that nuts and seeds get stuck in the pouches."
          }
        ],
        "300": [
          {
            "q": "An 84-year-old with known diverticulosis is suddenly confused but has no fever. What should the nurse suspect?",
            "a": "Diverticulitis.",
            "rationale": "Older adults often do not show typical signs of infection and may only be confused."
          },
          {
            "q": "Why is a client with diverticular disease taught to avoid constipation and straining?",
            "a": "They raise pressure inside the abdomen and bowel.",
            "rationale": "Anything that raises intra-abdominal pressure should be avoided."
          }
        ],
        "400": [
          {
            "q": "A client is admitted with severe diverticulitis. What three treatments does the nurse expect?",
            "a": "NPO, IV fluids, and IV antibiotics.",
            "rationale": "The gut is rested while the infection is treated."
          },
          {
            "q": "What three complications does the nurse monitor for during diverticulitis?",
            "a": "Abscess, bleeding, and peritonitis.",
            "rationale": "Peritonitis follows rupture of a diverticulum."
          }
        ],
        "500": [
          {
            "q": "A client with diverticulitis develops a rigid, board-like abdomen with rebound tenderness. What has happened, and what does the nurse do?",
            "a": "A diverticulum has ruptured, causing peritonitis; notify the provider immediately.",
            "rationale": "Stool has entered the peritoneum. This is an emergency."
          },
          {
            "q": "A client needs surgery for complicated diverticulitis and asks if the bag will be forever. What does the nurse explain?",
            "a": "The bowel is resected, and an ostomy, if needed, is often temporary.",
            "rationale": "After healing, the bowel may be reconnected."
          }
        ]
      }
    },
    {
      "id": "w7-cancer",
      "name": "Cancer",
      "week": 7,
      "clues": {
        "100": [
          {
            "q": "What are the three goals of cancer treatment, in order?",
            "a": "Cure, control, and palliation.",
            "rationale": "When cure is not possible, treatment aims to control the disease, then to relieve symptoms."
          },
          {
            "q": "What three principles limit a nurse's exposure to radiation?",
            "a": "Time, distance, and shielding.",
            "rationale": "A dosimeter only measures exposure; it does not protect."
          }
        ],
        "200": [
          {
            "q": "What is the nadir, and about when does it occur after chemotherapy?",
            "a": "The point when blood counts are lowest, often around days 7–9.",
            "rationale": "Infection risk is highest at the nadir."
          },
          {
            "q": "At what ANC is a client neutropenic, and at what ANC are protective precautions started?",
            "a": "Below 1,000; below 500.",
            "rationale": "Protective precautions include screening visitors, no fresh flowers, and a neutropenic diet."
          }
        ],
        "300": [
          {
            "q": "A client receiving external beam radiation asks if it is safe to hold a grandchild afterward. What does the nurse say?",
            "a": "Yes; with external radiation the client is not radioactive.",
            "rationale": "Only internal radiation makes the client or body fluids a source of radiation."
          },
          {
            "q": "A client's platelets are 18,000 before the next chemo cycle. What two things does the nurse anticipate?",
            "a": "Chemo will be held, and platelets will be transfused.",
            "rationale": "Bleeding risk is serious below 50,000; transfusion is typical below 20,000."
          }
        ],
        "400": [
          {
            "q": "During a vesicant infusion, the client reports pain at the site and there is no blood return. What is the nurse's first action?",
            "a": "Stop the infusion immediately.",
            "rationale": "Then aspirate, remove the cannula, elevate the arm, and give the antidote per protocol. Flushing would push more drug into the tissue."
          },
          {
            "q": "A client swallowed I-131 for thyroid cancer. How is this different from a sealed implant when handling body fluids?",
            "a": "With I-131 the body fluids are radioactive; with a sealed implant they are not.",
            "rationale": "I-131 is unsealed radiation and is excreted. A sealed implant makes the client emit radiation, but not the excretions."
          }
        ],
        "500": [
          {
            "q": "A nurse finds a sealed radiation implant on the bed sheets. What is the correct action?",
            "a": "Pick it up with forceps and place it in the lead container in the room.",
            "rationale": "A dislodged source is never touched by hand."
          },
          {
            "q": "The family of a client with a sealed implant includes a pregnant daughter, a 12-year-old, and an adult son. Who may visit, and under what limits?",
            "a": "Only the adult son: 30 minutes a day, 6 feet from the source.",
            "rationale": "Pregnant visitors and children under 16 are not allowed."
          }
        ]
      }
    },
    {
      "id": "w7-gb",
      "name": "Cholelithiasis & Cholecystitis",
      "week": 7,
      "clues": {
        "100": [
          {
            "q": "What is the difference between cholelithiasis and cholecystitis?",
            "a": "Cholelithiasis is gallstones; cholecystitis is inflammation of the gallbladder.",
            "rationale": "Stones can be present without inflammation."
          },
          {
            "q": "What kind of meal typically triggers gallbladder pain?",
            "a": "A fatty or large meal.",
            "rationale": "Fat makes the gallbladder contract harder."
          }
        ],
        "200": [
          {
            "q": "Where does the pain of cholecystitis often radiate?",
            "a": "To the right shoulder.",
            "rationale": "The pain is in the upper abdomen and can radiate to the right shoulder."
          },
          {
            "q": "Which surgery is most commonly used to treat gallbladder disease?",
            "a": "Laparoscopic cholecystectomy.",
            "rationale": "It is the most common treatment for symptomatic gallbladder disease."
          }
        ],
        "300": [
          {
            "q": "Name three risk factors for gallstones.",
            "a": "Middle-aged female, fair skin, overweight, high-fat diet, or oral contraceptives (any three).",
            "rationale": "These are the classic risk factors."
          },
          {
            "q": "A client is admitted with a major flare of cholecystitis. What diet order does the nurse expect, and which drug classes?",
            "a": "NPO; opioids, antiemetics, and antispasmodics.",
            "rationale": "The gut is rested and biliary pain often needs opioids."
          }
        ],
        "400": [
          {
            "q": "A client with gallstones develops yellow skin, dark urine, and clay-colored stools. Where is the stone?",
            "a": "In the common bile duct.",
            "rationale": "This is obstructive jaundice: bilirubin cannot reach the intestine, so it is excreted in the urine."
          },
          {
            "q": "After a laparoscopic cholecystectomy, when can the bandages come off, and what diet is followed for the first few weeks?",
            "a": "The next day; a low-fat diet.",
            "rationale": "After the body adapts, a regular diet can resume."
          }
        ],
        "500": [
          {
            "q": "A client returns from surgery with a T-tube draining into a bag. What is the tube's purpose?",
            "a": "To keep the common bile duct open until the swelling goes down.",
            "rationale": "It drains bile, and the client may need to learn to empty the bag."
          },
          {
            "q": "Two days after a laparoscopic cholecystectomy, a client reports green-brown drainage from a puncture site and a fever. How does the nurse respond?",
            "a": "These are not expected; the client must report them to the surgeon right away.",
            "rationale": "Bile-colored drainage, fever, and increasing pain are warning signs after gallbladder surgery."
          }
        ]
      }
    },
    {
      "id": "w7-panc",
      "name": "Pancreatitis",
      "week": 7,
      "clues": {
        "100": [
          {
            "q": "What are the two most common causes of acute pancreatitis?",
            "a": "Gallstones and alcohol.",
            "rationale": "In acute pancreatitis, enzymes auto-digest the pancreas."
          },
          {
            "q": "Which two lab values rise in acute pancreatitis?",
            "a": "Amylase and lipase.",
            "rationale": "Amylase rises fast and returns to normal in 48–72 hours; lipase stays up longer."
          }
        ],
        "200": [
          {
            "q": "What is the nurse's first priority for a client admitted with acute pancreatitis?",
            "a": "Relieving pain.",
            "rationale": "Pancreatic pain is severe and can affect vital signs. IV opioids are used."
          },
          {
            "q": "Which position eases the pain of pancreatitis?",
            "a": "A position with the knees bent (such as the fetal position).",
            "rationale": "Bending the knees puts less stretch on the peritoneum."
          }
        ],
        "300": [
          {
            "q": "Why does a client with acute pancreatitis need aggressive IV fluids?",
            "a": "Inflammation makes the vessels leaky, so the client becomes hypovolemic.",
            "rationale": "Fluid leaves the blood vessels, causing tachycardia and low blood pressure."
          },
          {
            "q": "A client with pancreatitis is NPO with an NG tube. What suction setting is used, and what is the purpose?",
            "a": "Low wall suction; to rest the gut and pancreas.",
            "rationale": "It also manages the paralytic ileus that pancreatitis can cause."
          }
        ],
        "400": [
          {
            "q": "A client with pancreatitis has bluish discoloration around the umbilicus. What is this sign called, and what does it mean?",
            "a": "Cullen's sign; severe disease with a poor prognosis.",
            "rationale": "Turner's sign is the same finding on the flank."
          },
          {
            "q": "Which electrolyte is typically low in acute pancreatitis?",
            "a": "Calcium.",
            "rationale": "Hypocalcemia is an expected finding, so electrolytes are monitored closely."
          }
        ],
        "500": [
          {
            "q": "A client with chronic pancreatitis is started on pancrelipase. When is it taken, and how does the nurse know it is working?",
            "a": "With the first bite of every meal or snack; stools become fewer and less fatty.",
            "rationale": "Capsules are not chewed or crushed."
          },
          {
            "q": "A client recovering from acute pancreatitis may eat again. Which nutrient is encouraged, which is restricted, and what must be avoided entirely?",
            "a": "Carbohydrates are encouraged, fat is restricted, and alcohol is avoided.",
            "rationale": "Carbohydrates stimulate the pancreas least."
          }
        ]
      }
    },
    {
      "id": "w7-liver",
      "name": "Cirrhosis & Hepatitis",
      "week": 7,
      "clues": {
        "100": [
          {
            "q": "Which type of hepatitis is spread by the fecal–oral route?",
            "a": "Hepatitis A.",
            "rationale": "Hepatitis B and C are spread by blood."
          },
          {
            "q": "Which type of hepatitis has no vaccine?",
            "a": "Hepatitis C.",
            "rationale": "Vaccines exist for hepatitis A and B (B is a 3-dose series)."
          }
        ],
        "200": [
          {
            "q": "Which common over-the-counter pain reliever must clients with hepatitis or cirrhosis avoid?",
            "a": "Acetaminophen.",
            "rationale": "It is hepatotoxic. Alcohol and isoniazid are also avoided."
          },
          {
            "q": "How soon after exposure must post-exposure treatment be given for hepatitis A and for hepatitis B?",
            "a": "Within 2 weeks for hepatitis A; within 24 hours for hepatitis B.",
            "rationale": "Timing matters for prophylaxis to work."
          }
        ],
        "300": [
          {
            "q": "What does the nurse have the client do right before a paracentesis, and why?",
            "a": "Void, so the bladder is not punctured.",
            "rationale": "An empty bladder is out of the path of the needle."
          },
          {
            "q": "A client with cirrhosis has a low albumin and a swollen abdomen. How are the two connected?",
            "a": "Low albumin lets fluid leave the vessels and collect in the abdomen as ascites.",
            "rationale": "Portal hypertension adds to the fluid shift. Albumin may be given."
          }
        ],
        "400": [
          {
            "q": "A client with cirrhosis is confused and has flapping hands when the wrists are extended. Which lab value is elevated?",
            "a": "Ammonia.",
            "rationale": "The failing liver cannot convert ammonia to urea. The flapping is called asterixis."
          },
          {
            "q": "A client asks why lactulose causes so many bowel movements. What is the goal, and why?",
            "a": "2–4 stools a day, because bowel movements remove ammonia.",
            "rationale": "Constipation raises ammonia and worsens encephalopathy."
          }
        ],
        "500": [
          {
            "q": "A client with cirrhosis vomits a large amount of bright red blood. What is the likely source, and name one treatment.",
            "a": "Bleeding esophageal varices; sclerotherapy, banding, or a Blakemore tube.",
            "rationale": "Portal hypertension causes varices, and low prothrombin makes them bleed harder. ICU care is needed."
          },
          {
            "q": "List four bleeding precautions for a client with cirrhosis.",
            "a": "No aspirin, no injections, no rectal temperatures or enemas, soft toothbrush, prevent falls and straining (any four).",
            "rationale": "The liver cannot make enough prothrombin, so clotting is impaired."
          }
        ]
      }
    },
    {
      "id": "w7-labs",
      "name": "Hepatobiliary Labs & Diagnostics",
      "week": 7,
      "clues": {
        "100": [
          {
            "q": "Which imaging test is done first for suspected gallstones?",
            "a": "An abdominal ultrasound.",
            "rationale": "It is non-invasive and about 95% accurate. The client is NPO for 8 hours."
          },
          {
            "q": "Which liver enzyme is the most specific for liver injury?",
            "a": "ALT.",
            "rationale": "AST and ALT both rise with liver damage; ALT is more specific."
          }
        ],
        "200": [
          {
            "q": "What is the most common complication after an ERCP?",
            "a": "Pancreatitis.",
            "rationale": "The procedure irritates the pancreas."
          },
          {
            "q": "A client's ultrasound is negative but gallstones are still suspected. Which test is ordered next?",
            "a": "A HIDA scan.",
            "rationale": "It uses an IV tracer excreted in bile to show whether the ducts are open."
          }
        ],
        "300": [
          {
            "q": "Before a CT with IV contrast, which two lab values does the nurse check, and why?",
            "a": "BUN and creatinine, because contrast can harm the kidneys.",
            "rationale": "The nurse also warns about a warm flush and pushes fluids afterward."
          },
          {
            "q": "How is a client positioned after a liver biopsy, and for how long?",
            "a": "On the right side, flat for 12–24 hours.",
            "rationale": "Lying on the right side puts pressure on the biopsy site."
          }
        ],
        "400": [
          {
            "q": "Which lab values are checked before a liver biopsy, and why?",
            "a": "PT/INR (plus type and crossmatch), because the liver is very vascular and clotting may be impaired.",
            "rationale": "Clients with liver disease often cannot make enough prothrombin."
          },
          {
            "q": "Which type of bilirubin shows up in the urine, and what problem does it point to?",
            "a": "Conjugated (direct) bilirubin; an obstruction.",
            "rationale": "Conjugated bilirubin is water-soluble. Unconjugated bilirubin is not found in urine."
          }
        ],
        "500": [
          {
            "q": "Two hours after a liver biopsy, a client's heart rate rises from 82 to 110 and breath sounds are diminished on the right. What two complications does the nurse suspect?",
            "a": "Internal bleeding and pneumothorax.",
            "rationale": "A rising heart rate is the earliest sign of bleeding, and the lung sits next to the liver."
          },
          {
            "q": "A client had abdominal pain three days ago. Today the amylase is normal but the lipase is still elevated. How does the nurse interpret this?",
            "a": "It still fits pancreatitis: amylase returns to normal in 48–72 hours, but lipase stays elevated longer.",
            "rationale": "Amylase rises within 12 hours and peaks at 24."
          }
        ]
      }
    }
  ]
};
