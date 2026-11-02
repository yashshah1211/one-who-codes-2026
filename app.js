'use strict';

const CASES = Object.freeze({
  hackermate: {
    index:'01', type:'FOUNDER PROJECT / LIVE PRODUCT',title:'HackerMate',
    summary:'A team operating system for hackathons, designed to turn scattered profiles and chats into actual collaboration.',
    problem:'Hackathon teammates often find each other through fragmented groups, with little visibility into skills, availability and what a team is still missing.',
    solution:'Built and iterated a Next.js product for builder discovery and matching, team workspaces, partner hackathon portals, and verification workflows.',
    scope:'Live platform with public product documentation. Individual contributions and production metrics are not asserted here beyond the documented product scope.',
    tags:['Next.js','TypeScript','React','Supabase','Product design'],
    links:[['Visit live product','https://hackermate.in'],['Public source','https://github.com/yashshah1211/HackerMate_Backup']]
  },
  parallax: {
    index:'02',type:'INTERACTIVE SYSTEM / LIVE DEMO',title:'PARALLAX',
    summary:'A cooperative sci-fi game whose two worlds are controlled by separate Twitch communities.',
    problem:'Most livestream interactions are confined to one channel. What happens when neither community can finish the same mission alone?',
    solution:'Built a shared authoritative Node.js game with Twitch EventSub chat input, reconnect handling, deduplication, Server-Sent Events and dual OBS overlays.',
    scope:'The project documentation reports a verified two-channel live chat rehearsal and automated tests. The repository is private; the public demo video is available.',
    tags:['Node.js','EventSub','SSE','OBS overlays','Reliability'],
    links:[['Watch 2:43 demo','https://youtu.be/6q3VOIfEyb8']]
  },
  insightflow: {
    index:'03',type:'EVIDENCE-FIRST DATA PRODUCT',title:'InsightFlow',
    summary:'A feedback analysis interface that traces its priorities back to records instead of presenting unexplained AI certainty.',
    problem:'Duplicate reviews can distort demand, absent dates can create imaginary trends, and heuristic labels can be mistaken for measured truth.',
    solution:'Built six connected modules for exploration, evidence grouping, transparent priorities, decisions and reporting. The public demo uses an explicitly synthetic dataset.',
    scope:'The live public example contains authored synthetic records. No customer outcomes, model accuracy or production user counts are claimed.',
    tags:['Next.js','TypeScript','Data provenance','Explainability','UX'],
    links:[['Try public demo','https://insightflow-preview-demo.vercel.app/'],['Public source','https://github.com/yashshah1211/InsightFlow']]
  },
  causalcut: {
    index:'04',type:'TRACE ANALYSIS / DEVELOPER TOOL',title:'CausalCut',
    summary:'A tool that shrinks an event-driven incident into a reproducible, reviewable regression case.',
    problem:'Long payment/webhook incident traces hide the few events essential for reproducing an invariant violation.',
    solution:'Implemented NDJSON ingestion, explicit event dependencies, declarative state transitions, targeted invariant checks and deterministic single-event deletion reduction.',
    scope:'The tool replays a declared model, not the original production system; it targets a 1-minimal case rather than claiming globally shortest traces or algorithmic novelty.',
    tags:['TypeScript','NDJSON','Determinism','Testing','Back-end'],
    links:[['Public source','https://github.com/yashshah1211/causalcut']]
  },
  linksentry: {
    index:'05',type:'LOCAL DEVELOPER TOOL',title:'LinkSentry',
    summary:'A local app for finding broken and redirected links hidden inside Markdown documents.',
    problem:'A document can look complete while leading readers to dead pages, inconsistent URLs or unwanted redirect chains.',
    solution:'Built a concurrent HTTP/HTTPS link checker with URL extraction, canonical normalization, deduplication, response classification and accessible status labels.',
    scope:'A local Flask tool with published source and demo materials; link status always depends on the network at the time of checking.',
    tags:['Python','Flask','HTTP','Concurrency','Testing'],
    links:[['Public source','https://github.com/yashshah1211/linksentry']]
  },
  learnflow: {
    index:'06',type:'AI LEARNING PRODUCT',title:'LearnFlow AI',
    summary:'A practice-centered learning experience for turning study resources into active revision.',
    problem:'Passive reading does not always show a learner what they misunderstood or what they should practice next.',
    solution:'Developed features for PDF ingestion, AI-generated quizzes, tutoring, flashcards, achievement tracking and learning insights.',
    scope:'Features are documented in the project README. This portfolio does not claim a public production deployment or measured learning improvements.',
    tags:['Python','FastAPI','SQLite','AI','Learning tools'],
    links:[['Public source','https://github.com/yashshah1211/LearnFlow-AI']]
  }
});

const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
const cards = Array.from(document.querySelectorAll('.project-card'));
const announcement = document.getElementById('filter-announcement');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filterButtons.forEach(b => { const active=b===button; b.classList.toggle('is-selected', active); b.setAttribute('aria-pressed',String(active)); });
  let visible=0;
  cards.forEach(card => {const show=selected==='all'||card.dataset.category.split(' ').includes(selected); card.hidden=!show; if(show)visible++;});
  announcement.textContent=`Showing ${visible} ${visible===1?'project':'projects'}: ${selected}.`;
}));

const dialog = document.getElementById('case-dialog');
const closeButton = document.getElementById('dialog-close');
let returnFocusTo = null;
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const c=CASES[button.dataset.open]; if(!c) return;
  returnFocusTo=button;
  document.getElementById('dialog-index').textContent=`CASE FILE / ${c.index}`;
  document.getElementById('dialog-type').textContent=c.type;
  document.getElementById('dialog-title').textContent=c.title;
  document.getElementById('dialog-summary').textContent=c.summary;
  document.getElementById('dialog-problem').textContent=c.problem;
  document.getElementById('dialog-solution').textContent=c.solution;
  document.getElementById('dialog-scope').textContent=c.scope;
  document.getElementById('dialog-tags').replaceChildren(...c.tags.map(t=>{const e=document.createElement('span');e.textContent=t;return e;}));
  document.getElementById('dialog-links').replaceChildren(...c.links.map(([name,url])=>{const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=`${name} ↗`;return a;}));
  dialog.showModal();document.body.classList.add('dialog-open');closeButton.focus();
}));
closeButton.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');returnFocusTo?.focus();});

const steps=[
  {tag:'REQUESTED',title:'A new request arrives.',desc:'An operation is requested. Nothing durable has been recorded yet.',ops:'0',effects:'0'},
  {tag:'COMMITTED',title:'The durable operation commits.',desc:'A successful commit records one effect. A subsequent network timeout does not undo it.',ops:'1',effects:'1'},
  {tag:'REPLAY DETECTED',title:'A retry needs context.',desc:'A retry is not proof that the first attempt failed. Good systems reconcile existing durable state before creating another effect.',ops:'2',effects:'1'}
];
const stepButtons=Array.from(document.querySelectorAll('[data-step]'));
stepButtons.forEach(b=>b.addEventListener('click',()=>{
 const n=Number(b.dataset.step),s=steps[n];
 stepButtons.forEach(x=>{let active=x===b;x.classList.toggle('active-step',active);x.setAttribute('aria-pressed',String(active));});
 document.getElementById('state-tag').textContent=s.tag;
 document.getElementById('state-title').textContent=s.title;
 document.getElementById('state-description').textContent=s.desc;
 document.getElementById('state-ops').textContent=s.ops;
 document.getElementById('state-effects').textContent=s.effects;
}));
