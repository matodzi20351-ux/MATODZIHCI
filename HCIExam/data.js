const mc=(q,o,c,m)=>({q,o,c,m});
const w=(q,m)=>({q,m});
const TF=['True','False'];
const SECTIONS=[
{id:'exam',title:'1. Main Exam – November 2024',qs:[
w('Review-based evaluation (expert/heuristic review) improves usability using expert knowledge and guidelines, but it has limitations. List and briefly explain any THREE. (3)',
`1. Experts are not real users – they may miss problems real users face or flag issues users don't care about.
2. Subjective and biased – results depend on the reviewers' experience; different experts give different findings.
3. False alarms / no solutions – may report problems that aren't real and doesn't show how severe they are in actual use.
(Also: needs trained experts, can be costly, depends on guidelines being suitable.)`),
w('What is long-term memory? Give two examples to explain.',
`Long-term memory (LTM) is the cognitive store that holds information for long periods (hours to a lifetime) with huge capacity. Information moves there from short-term memory through rehearsal and meaningful association.
Examples: (1) Remembering how to ride a bicycle or type on a keyboard (procedural). (2) Remembering your student number or the layout of a familiar app (semantic/episodic).
Design link: recognition over recall; use familiar patterns.`),
w(`ONLINE CAREER PORTAL: WSU Dept of Business & Applications Development needs a simple, user-friendly portal for all IT students: student profiles, graduate programmes and employment opportunities, job listings from the institution, online/real-time interaction of registered users, and social platforms to share workplace experiences.
Discuss how you apply the principle of LEARNABILITY (Predictability, Synthesizability, Familiarity, Generalizability, Consistency). (10)`,
`Predictability – users can tell what an action will do: clear labels like "Apply for job" / "Message employer"; buttons look clickable; preview before posting.
Synthesizability – users see the effect of past actions: show "Application submitted", status updates (Viewed / Shortlisted), activity history on the profile.
Familiarity – use known conventions: LinkedIn-style profile, search bar and filters, envelope icon for messages, WSU colours and logo, plain IT-student language.
Generalizability – learning in one place transfers: once the student knows how to edit the profile, editing preferences or posts works the same way; same filters for jobs and programmes.
Consistency – same layout, icons, terms and button positions on every page; same chat behaviour for real-time interaction and social posts.
Result: new students learn the portal quickly with little training.`),
w('Explain the importance of consistency in HCI design and provide TWO examples of achieving this principle.',
`Importance: consistent interfaces are easier to learn and remember, reduce errors and cognitive load, build trust and speed up use because users transfer what they know between screens.
Examples: (1) Use the same layout, colours, fonts and button styles/positions on every page (e.g. Submit always bottom-right in the same colour). (2) Use the same terminology and icons for the same action everywhere (e.g. "Save" with a disk icon, never "Store" elsewhere); follow platform conventions.`),
w(`E-COMMERCE REDESIGN: Users frequently abandon carts due to confusion during checkout. How would you redesign checkout to reduce abandonment by applying consistency, feedback, reducing cognitive load and error prevention?`,
`Consistency: same look, buttons and wording on all checkout steps; familiar order Cart → Details → Delivery → Payment → Review.
Feedback: progress bar (Step 2 of 4), inline messages ("Address saved"), loading indicator on Pay, confirmation page and email with order number.
Reduce cognitive load: one task per screen, few fields, guest checkout, autofill/saved addresses, clear price summary, hide extras.
Error prevention: validate fields as the user types, input masks for card/phone, disable Pay until valid, confirm before removing items, clear helpful error messages, review screen before final payment.
Result: less confusion, more completed purchases.`),
w(`CAMPUS CLINIC MANAGEMENT SYSTEM (WSU): no system exists; needed for all students with student profiles, appointment booking, patient records management, and online/real-time interaction with health personnel. (10)
A) Provide three pain points likely to be faced by students.
B) Create a persona for the system.
C) Provide a detailed scenario, then show how the system addresses the pain points.`,
`A) Pain points: (1) Long queues and waiting times at the clinic. (2) Can't book or know availability – must walk in, may miss lectures. (3) Records on paper / repeating medical history; no easy way to ask a nurse a quick question. (Also: privacy worries.)
B) Persona: Thandi Mokoena, 20, second-year BCom student, lives off-campus in Mthatha. Uses her Android phone daily, limited data, tight timetable. Goals: quick appointments, privacy, not miss classes. Frustrations: queues, lost paper files.
C) Scenario: Thandi has a bad flu before a test. She logs into the clinic app with her student number, sees her saved profile, picks Tuesday 11:00 with a nurse from available slots, gets instant confirmation and a reminder SMS. She chats with the nurse beforehand about symptoms; the nurse opens her digital record, updates it and issues a medical note online.
How it addresses pain points: online booking removes queues; real-time slots show availability; digital records keep history secure and reusable; chat gives quick access to health personnel.`),
w('List any FIVE benefits of having a design rationale.',
`1. Records why design decisions were made (and alternatives rejected).
2. Helps new team members understand the design quickly.
3. Supports maintenance and future changes without repeating mistakes.
4. Improves communication and agreement among stakeholders and designers.
5. Forces designers to think critically, so decisions are justified and can be evaluated later.
(Also: saves time/avoids re-debating, supports accountability and reuse.)`)]},

{id:'portal',title:'2. Group Discussion – University Student Portal',qs:[
w('Scenario: new portal to register for courses, view results, pay fees, download study materials and communicate with lecturers. Current problems: confusing navigation, freezing with no confirmation, accidental wrong submissions that can\'t be corrected, inconsistent buttons/menus/links, small buttons on mobile.\n\nQ1: What should the main interaction design goals be?',
`Usability goals: effective, efficient, easy to learn, easy to remember, safe (few errors), good utility. UX goals: satisfying, supportive, trustworthy, accessible on mobile. Goals tied to the problems: clear navigation, consistent design, visible feedback, error prevention/recovery, mobile-friendly touch targets.`),
w('Q2: What type of user interactions need to be in place for the portal?',
`Interaction types: instructing (buttons, menus: register, pay), conversing (chat/messages with lecturers), manipulating/navigating (search, filters, scrolling), exploring/browsing (results, materials). Also forms with inputs, downloading files, and touch interaction on mobile.`),
w('Q3: What feedback should the system provide to indicate users have completed an action?',
`Progress/loading indicator while submitting; clear success message ("Registration successful") and confirmation page with reference number; confirmation email/SMS; updated status on screen (e.g. course appears in "My courses"); clear error messages if something fails.`),
w('Q4: How should the system be designed to prevent errors?',
`Review/confirm screen before final submit; validation of inputs (formats, required fields); dropdowns/date pickers instead of free text; disable invalid actions; warnings before irreversible actions; allow undo/edit after submitting; clear instructions and defaults.`),
w('Q5: How should interactions look and feel in the portal interface?',
`Consistent layout, colours, icons and terminology on every page; simple clear navigation menu; large touch-friendly buttons and responsive layout for mobile; readable fonts and good contrast; minimal clutter; quick responses; familiar conventions and accessibility.`)]},

{id:'cog',title:'3. Group Discussion – Cognitive Scenarios',qs:[
w('1. Multitasking Interface Overload (5)\nA student uses an LMS while receiving notifications, chatting, and watching a lecture video; they miss important instructions. Which cognitive process is affected and how should the system be improved?',
`Attention (divided attention) is affected; overload also hits working memory.
Improve: reduce/mute non-essential notifications, highlight important instructions, put key instructions where they are noticed (and repeat them), allow focus mode, chunk information.`),
w('2. Poorly Designed Icons (5)\nUsers struggle to understand icons in a mobile banking app and click the wrong options. Which cognitive process is involved and what design principle is violated?',
`Perception and recognition (interpreting and recognising symbols; also memory).
Violated: familiarity / visibility / recognition rather than recall, consistency and good mapping – icons are unclear. Fix: use standard icons with text labels, test icons with users.`),
w('3. Password Recall Difficulty (5)\nUsers forget complex passwords and reset them often. What cognitive limitation is shown and how can design address it?',
`Limited human memory – recall from long-term/working memory is hard (recall is harder than recognition).
Design: allow passphrases, password managers, biometrics/PIN, show password option, simple reset, single sign-on, hints, avoid forcing many complex rules.`),
w('4. New Software Training (5)\nEmployees are given a manual to learn new software but still struggle. What type of learning is being used and what should be improved?',
`Learning by reading instructions (passive/instructional learning, theory first).
Improve: add hands-on practice (learning by doing/active learning), guided tutorials, onboarding walkthroughs, tooltips, examples, short practical training and help in context.`),
w('5. Voice Assistant Instructions (5)\nA voice assistant gives long, complex instructions that users forget midway. Which cognitive factor is being ignored?',
`Working (short-term) memory limits – humans can hold only a few items (about 7±2) at once.
Fix: short chunked steps, one step at a time, confirm before continuing, allow repeat/pause, give a summary.`)]},

{id:'req',title:'4. Class Activity – Requirements (26 May)',qs:[
w('Scenario: Hospital Check-In Kiosk. Reception is noisy, crowded, stressful; users include elderly, low digital literacy, some in pain or hurry.\nAs a requirements analyst identify: two functional requirements, two environmental/context-of-use requirements, two user characteristics and one usability goal.',
`Functional: (1) Patient can identify themselves (ID/card/phone number) and check in for an existing appointment. (2) System notifies reception/queue and prints or displays a queue number.
Environmental: (1) Works in noise – visual instructions, no reliance on audio; (2) readable in crowded/bright space, durable and privacy-aware screen positioning, usable standing up.
User characteristics: (1) Elderly with possibly poor vision/dexterity. (2) Low digital literacy / stressed or in pain, needs to finish fast.
Usability goal: easy to use/learn (efficient, with minimal steps and large buttons).`),
w('Scenario: Travel Organiser App for a Family. A family of four planning a Mediterranean sailing holiday wants to compare destinations, save favourite airlines, check visa rules and coordinate travel dates.\nWrite: one user story, one short scenario, one likely functional requirement.',
`User story: As a parent planning a family trip, I want to compare destinations side by side so that we can choose the best one for our budget and dates.
Scenario: Naledi opens the app, adds three Mediterranean ports, compares cost, weather and visa rules, saves her favourite airline, and shares proposed dates with her family who vote on them.
Functional requirement: The system shall allow users to save favourite airlines and view visa requirements for a selected destination (or share/vote on dates).`),
w('Scenario: Smart Meter in a Residential Area. Municipality wants smart meters to help residents monitor electricity use; some residents support, others worry about privacy and data misuse.\nWhat requirements issues should the team investigate before building?',
`Stakeholders and conflicting needs (residents, municipality, utility, installers); privacy and data protection (POPIA), consent and who can access data; security against misuse; trust and acceptance; accuracy/billing disputes; accessibility for low-literacy users; reliability and cost; legal/regulatory requirements; how data will be displayed and controlled by users. Gather requirements via interviews, surveys and observation.`)]},

{id:'ch14',title:'5. Class Activity – Chapter 14 (15 Sept)',qs:[
mc('Q1. A university develops a new LMS. Students can upload assignments, but several cannot tell whether their submissions were successful. What does this BEST demonstrate?',['A. A technically functional system is always usable.','B. Functionality alone does not guarantee usability.','C. Evaluation is unnecessary once a system works.','D. Usability is concerned only with system performance.'],1,'Lack of feedback makes it hard to use even though it works.'),
mc('Q2. A design team evaluates an early prototype, identifies navigation problems, modifies the interface, and evaluates the revised version. Which process?',['A. Summative testing','B. Iterative evaluation','C. System implementation','D. Requirements documentation'],1,'Evaluate → redesign → evaluate again.'),
mc('Q3. Researchers want to know whether users can complete five tasks efficiently on a new student portal. Which approach is MOST appropriate?',['A. Usability testing','B. Literature review','C. System documentation','D. Requirements elicitation'],0,'Usability testing measures task performance.'),
mc('Q4. Ten students are brought into a computer lab to perform identical tasks on an LMS while researchers record completion times and errors. This is:',['A. Natural-setting evaluation','B. Controlled evaluation','C. Long-term evaluation','D. Heuristic evaluation'],1,'Lab setting with set tasks = controlled.'),
mc('Q5. Researchers observe nurses using an electronic patient-record system during their normal hospital shifts. What type of evaluation?',['A. Controlled evaluation','B. Natural-setting evaluation','C. Remote evaluation','D. Heuristic evaluation'],1,'Real context of use = natural setting.'),
w('Q1: Evaluation of an LMS – 10 marks. All required functions exist, but students find it hard to navigate and sometimes cannot tell whether assignments were submitted.\na) Define evaluation in the context of interaction design. (2)\nb) Explain why the university should evaluate the LMS even though all functions work. (4)\nc) Identify two aspects of the LMS that could be evaluated. (2)\nd) Suggest one design improvement for the submission problem. (2)',
`a) Evaluation is systematically assessing the quality of a design – usability and user experience – for intended users in their context, to find problems and improve it.
b) Working functions don't guarantee usability. Users struggle with navigation and lack confirmation, causing errors, frustration and missed deadlines. Evaluation finds real problems, checks requirements are met, and guides improvements before wide deployment.
c) Navigation/findability; feedback on submission; learnability; efficiency of tasks; error rates; user satisfaction (any two).
d) Show a clear confirmation message/page with a receipt (time, file name, reference) and a "Submitted" status plus confirmation email.`),
w('Q2: Controlled vs Natural Evaluation – 10 marks. Researchers evaluate a patient-record system used by nurses: usability lab or observe real shifts?\na) Distinguish between controlled and natural-setting evaluation. (4)\nb) One advantage of each. (2)\nc) One limitation of each. (2)\nd) Which approach to understand interruptions and time pressure? Justify. (2)',
`a) Controlled: done in a lab with set tasks and conditions, researchers manage variables and measure behaviour. Natural-setting: users are observed in their real environment doing real work with little researcher control.
b) Controlled: easy to control and measure/replicate. Natural: realistic, shows real context of use.
c) Controlled: artificial, may not reflect real behaviour. Natural: little control, hard to measure/disruptive, results vary.
d) Natural setting – interruptions and time pressure only occur in actual shifts; a lab can't reproduce them realistically.`)]},

{id:'sept',title:'6. Class Activity – 29 September (Evaluation)',qs:[
mc('Q1. A university evaluates an early prototype of its student portal to identify navigation problems before further development. Which type of evaluation?',['A. Summative','B. Formative','C. Predictive','D. A/B testing'],1,'Formative evaluation happens during design to improve it.'),
mc('Q2. Which statement best defines evaluation in interaction design?',['A. Testing whether software contains programming errors','B. Systematically examining an interactive design to determine its quality for intended users and contexts','C. Measuring only how quickly users complete tasks','D. Asking developers whether they like an interface'],1,''),
mc('Q3. A university wants to know whether students can easily locate and download lecture material, as specified in the system requirements. Primary purpose?',['A. Comparing alternative designs','B. Determining whether requirements have been satisfied','C. Measuring long-term adoption','D. Predicting pointing time'],1,''),
mc('Q4. Researchers evaluate two dashboard designs by measuring completion time, errors and user satisfaction. What is the purpose?',['A. Comparing alternative designs','B. Conducting a pilot study','C. Measuring only accessibility','D. Conducting a cognitive walkthrough'],0,''),
mc('Q5. Which sequence best represents iterative evaluation?',['A. Evaluate → Design → Deploy','B. Design → Evaluate → Identify problems → Redesign → Evaluate again','C. Design → Deploy → Ignore feedback','D. Requirements → Implementation → Termination'],1,''),
mc('Q6. Which environment gives the greatest opportunity to observe technology in its actual context of use?',['A. Usability laboratory','B. Controlled computer laboratory','C. Natural setting','D. Experimental simulation'],2,''),
mc('Q7. Researchers observe nurses using a patient-record system during actual hospital shifts. This is an example of:',['A. Laboratory evaluation','B. Natural-setting evaluation','C. Heuristic evaluation','D. Predictive modelling'],1,''),
mc('Q8. Which is a major advantage of a controlled evaluation?',['A. It always provides greater ecological validity.','B. It eliminates the need for participants.','C. It allows easier control and measurement.','D. It guarantees realistic user behaviour.'],2,'Researchers control conditions, so results are easier to measure and compare.'),
mc('Q9. Which of the following is quantitative evaluation data?',['A. "The navigation was confusing."','B. Observation notes','C. 85% task-completion rate','D. Interview comments'],2,'Numbers = quantitative.'),
mc('Q10. Which method is most appropriate for investigating WHY users find an interface confusing?',['A. Interviews','B. Page-view counts only','C. Completion percentages only','D. Session counts only'],0,'Qualitative methods explain reasons.'),
mc('Q11. Eight students test an application. Seven complete a task successfully, while interviews reveal that the terminology is confusing. This represents:',['A. Quantitative evaluation only','B. Qualitative evaluation only','C. Mixed evaluation','D. Predictive modelling'],2,'Completion counts (quantitative) + interviews (qualitative).'),
mc('Q12. A researcher compares a menu-based interface with a card-based interface. What is the INDEPENDENT variable?',['A. Task-completion time','B. Error rate','C. Navigation/interface design','D. Number of clicks'],2,'The independent variable is what the researcher changes.'),
mc('Q13. In the same experiment, the researcher measures how long students take to locate a module. What is the DEPENDENT variable?',['A. Interface design','B. Type of student','C. Task-completion time','D. Experimental condition'],2,'The dependent variable is what is measured.'),
mc('Q14. Which statement is a testable hypothesis?',['A. Card-based dashboards look nice.','B. Students probably prefer modern systems.','C. Students using the card-based dashboard will locate modules faster than students using the menu-based dashboard.','D. Interfaces should be easy to use.'],2,'It is specific and measurable.'),
...[['Evaluation can only be conducted after a system has been fully implemented.',1,'It can be done on sketches, storyboards and prototypes.'],
['A technically functioning system is necessarily a usable system.',1,'Working ≠ usable.'],
['Evaluation may be conducted on sketches, storyboards and wireframes.',0,''],
['Evaluation should be regarded as an iterative activity throughout design and development.',0,''],
['Natural settings generally provide greater realism than controlled settings.',0,''],
['Controlled settings generally provide evaluators with less control over external factors than natural environments.',1,'Controlled settings give MORE control.'],
['Remote usability testing may be moderated or unmoderated.',0,''],
['Formative evaluation is primarily intended to improve a design.',0,''],
['Summative evaluation is primarily concerned with improving very early sketches.',1,'Summative judges a finished/near-final design; formative improves early ones.'],
['Task-completion rate is an example of quantitative data.',0,''],
['Analytics can show where users abandon a process but may not explain why they abandon it.',0,''],
['A/B testing can be used to compare alternative button wording or layouts.',0,''],
['Heuristic evaluation completely replaces the need for usability testing.',1,'It complements, not replaces, testing with real users.'],
["Fitts' Law suggests that small, distant targets are generally more difficult to select than large, nearby targets.",0,''],
['The evaluation method should be selected according to the evaluation question rather than simply because a method is convenient.',0,'']
].map((t,i)=>mc(`True/False ${i+1}. ${t[0]}`,TF,t[1],t[2])),
w('Scenario 1 – Completed LMS: a university has completed its LMS and wants to know whether it satisfies specified usability requirements before institution-wide deployment.\na) Identify the type of evaluation. (1)\nb) Justify your answer. (2)\nc) Suggest two measures that could be collected. (2)',
`a) Summative evaluation.
b) The system is complete and the aim is to judge whether it meets the specified requirements/usability criteria before deployment, not to shape early design.
c) Task-completion rate/time, error rate, satisfaction scores (e.g. SUS questionnaire), number of help requests (any two).`),
w('Scenario 2 – Unfair Experimental Conditions: students testing Interface A use high-speed computers and fibre in a quiet lab; students testing Interface B use old mobile phones with slow data in a noisy room. Interface A produces better results.\na) Identify the methodological problem. (2)\nb) Explain why researchers cannot confidently attribute the result to interface design. (3)\nc) Recommend an improvement. (2)',
`a) Confounding variables / unfair, uncontrolled conditions – device, network and environment differ between groups.
b) The better results may be due to faster hardware, better connection and a quiet room rather than the interface itself, so the effect of the independent variable (design) can't be isolated.
c) Test both interfaces under identical conditions (same devices, network, environment), or use the same participants on both (counterbalanced order) so only the interface differs.`),
w('Scenario 3 – Think-Aloud Evaluation: while testing a portal, a student says: "I expected examination results to be under Academic Records. I don\'t know what this icon means."\na) Identify the evaluation technique. (1)\nb) Explain its purpose. (2)\nc) What information does it provide that task-completion time alone may not provide? (2)',
`a) Think-aloud (protocol) evaluation.
b) Users speak their thoughts while performing tasks so evaluators learn what they expect, notice and find confusing in real time.
c) The reasons behind problems – user expectations, confusion about icons/labels and mental models – which time alone can't show.`)]}
];
