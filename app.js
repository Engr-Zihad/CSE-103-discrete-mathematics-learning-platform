// ═══════════════════════════════════════════════════════════
// CSE 103 — Discrete Mathematics · HSTU
// app.js  |  All Logic: Data, AI Streaming, UI Rendering
// NOTE: All 3 files (index.html, style.css, app.js) must be
//       in the SAME folder. Open index.html in any browser.
// ═══════════════════════════════════════════════════════════
'use strict';

// ──────────────────────────────────────────────────────────
// 1. COURSE DATA
// ──────────────────────────────────────────────────────────
const CH = [
  { n:'Ch 1',  t:'The Foundations: Logic &amp; Proofs',
    topics:['Propositions','Truth Tables','Logical Equivalences','Predicates','Quantifiers','Direct Proof','Proof by Contradiction','Contrapositive','Proof by Cases'] },
  { n:'Ch 2',  t:'Basic Structures: Sets, Functions, Sequences',
    topics:['Set Notation','Set Operations','Venn Diagrams','Functions','Injective','Surjective','Bijective','Sequences','Summations','Cardinality'] },
  { n:'Ch 3',  t:'Algorithms',
    topics:['Algorithm Design','Searching','Sorting','Greedy Algorithms','Growth of Functions','Big-O','Big-Omega','Big-Theta','Complexity Analysis'] },
  { n:'Ch 4',  t:'Number Theory &amp; Cryptography',
    topics:['Divisibility','Modular Arithmetic','Primes','GCD &amp; LCM','Euclidean Algorithm','Bezout Identity','Congruences','RSA Encryption','Chinese Remainder Theorem'] },
  { n:'Ch 5',  t:'Induction &amp; Recursion',
    topics:['Weak Induction','Strong Induction','Well-Ordering Principle','Recursive Definitions','Recursive Algorithms','Program Correctness'] },
  { n:'Ch 6',  t:'Counting',
    topics:['Product Rule','Sum Rule','Inclusion-Exclusion','Pigeonhole Principle','Permutations','Combinations','Binomial Theorem','Pascal Triangle','Vandermonde Identity'] },
  { n:'Ch 7',  t:'Discrete Probability',
    topics:['Probability Theory','Conditional Probability','Independence','Bayes Theorem','Random Variables','Expected Value','Variance','Bernoulli Trials','Geometric Distribution'] },
  { n:'Ch 8',  t:'Advanced Counting Techniques',
    topics:['Recurrence Relations','Characteristic Equations','Generating Functions','Inclusion-Exclusion Advanced','Derangements','Divide &amp; Conquer Recurrences'] },
  { n:'Ch 9',  t:'Relations',
    topics:['Binary Relations','Reflexive','Symmetric','Antisymmetric','Transitive','Equivalence Relations','Equivalence Classes','Partial Orders','Hasse Diagrams','POSET'] },
  { n:'Ch 10', t:'Graphs',
    topics:['Graph Terminology','Directed Graphs','Graph Isomorphism','Connectivity','Euler Paths','Euler Circuits','Hamilton Paths','Shortest Path','Planar Graphs','Graph Coloring'] },
  { n:'Ch 11', t:'Trees',
    topics:['Trees &amp; Properties','Rooted Trees','Binary Trees','Spanning Trees','DFS','BFS','Minimum Spanning Tree','Kruskal Algorithm','Prim Algorithm'] },
  { n:'Ch 12', t:'Boolean Algebra',
    topics:['Boolean Functions','Logic Gates','Minterms','Maxterms','Sum of Products','Karnaugh Maps','Circuit Minimization','NAND/NOR Gates'] },
  { n:'Ch 13', t:'Computation Models',
    topics:['Languages &amp; Grammars','Regular Grammars','Finite-State Machines','Nondeterministic FSM','Turing Machines','Computability','Church-Turing Thesis'] }
];

const FORMULAS = [
  { t:'🔢 Counting &amp; Combinatorics', rows:[
    ['Permutation P(n,r)',          'n! / (n-r)!'],
    ['Combination C(n,r)',           'n! / [r!(n-r)!]'],
    ['Circular Permutation',         '(n-1)!'],
    ['Permutation w/ Repetition',    'n^r'],
    ['Combination w/ Repetition',    'C(n+r-1, r)'],
    ['Multinomial Coefficient',      'n! / (n1! n2! … nk!)'],
    ["Binomial Theorem",             '(x+y)^n = Σ C(n,k) x^k y^(n-k)'],
    ["Pascal's Identity",            'C(n,k) = C(n-1,k-1) + C(n-1,k)'],
    ['Inclusion-Exclusion (2 sets)', '|A∪B| = |A|+|B|−|A∩B|'],
    ['Incl-Excl (3 sets)',           '|A∪B∪C| = |A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|'],
  ]},
  { t:'🔐 Number Theory', rows:[
    ['Division Algorithm',           'a = dq + r,  0 ≤ r < d'],
    ['GCD (Euclidean)',               'gcd(a,b) = gcd(b, a mod b)'],
    ["Bézout's Identity",            'gcd(a,b) = sa + tb'],
    ['LCM Relation',                 'lcm(a,b) = ab / gcd(a,b)'],
    ["Fermat's Little Theorem",      'a^p ≡ a (mod p),  p prime'],
    ["Euler's Theorem",              'a^φ(n) ≡ 1 (mod n),  gcd(a,n)=1'],
    ['Euler Totient φ(p^k)',          'p^k − p^(k−1)'],
    ['Chinese Remainder Thm',        'Unique solution mod m1·m2·…·mk'],
  ]},
  { t:'📊 Graph Theory', rows:[
    ['Handshaking Lemma',            'Σ deg(v) = 2|E|'],
    ['Odd Degree Vertices',          'Always even count'],
    ['Euler Circuit Condition',      'All vertices have even degree'],
    ['Euler Path Condition',         'Exactly 2 odd-degree vertices'],
    ['Tree Edge Count',              '|E| = |V| − 1'],
    ['Planar: Euler Formula',        'v − e + f = 2'],
    ['Planar Graph Bound',           'e ≤ 3v − 6'],
    ['Bipartite Condition',          'No odd-length cycles (2-colorable)'],
    ['Complete Graph K_n',           'n(n−1)/2 edges'],
  ]},
  { t:'🧮 Logic &amp; Set Theory', rows:[
    ['De Morgan (Logic)',             '¬(p∧q) ≡ ¬p∨¬q'],
    ['De Morgan (Sets)',              'complement(A∩B) = compA ∪ compB'],
    ['Contrapositive',               'p→q ≡ ¬q→¬p'],
    ['Absorption Law',               'p∨(p∧q) ≡ p'],
    ['Distributive Law',             'p∧(q∨r) ≡ (p∧q)∨(p∧r)'],
    ['Double Negation',              '¬(¬p) ≡ p'],
    ['Power Set Size',               '|P(A)| = 2^n,  n = |A|'],
    ["Cantor's Theorem",             '|A| < |P(A)| for all sets A'],
  ]},
  { t:'⚡ Algorithm Complexity', rows:[
    ['Big-O Definition',             'f(x)=O(g(x)): |f|≤C|g| for x>k'],
    ['Log Base Change',              'log_a(n) = log_b(n)/log_b(a)'],
    ['Linear Search',                'O(n)'],
    ['Binary Search',                'O(log n)'],
    ['Bubble / Insertion Sort',      'O(n²)'],
    ['Merge Sort',                   'O(n log n)'],
    ['Matrix Multiplication',        'O(n³) naive'],
    ['Master Theorem',               'T(n) = aT(n/b) + f(n)'],
  ]},
  { t:'🌀 Recurrence Relations', rows:[
    ['Fibonacci',                    'F_n = F_{n-1} + F_{n-2},  F0=0, F1=1'],
    ['Tower of Hanoi',               'T(n) = 2T(n-1) + 1'],
    ['Characteristic Eq (2nd)',      'r^n = c1·r^(n-1) + c2·r^(n-2)'],
    ['General (distinct roots)',     'α·r1^n + β·r2^n'],
    ['General (repeated root)',      '(α + βn)·r0^n'],
    ['Derangement Formula',          'D_n = (n-1)(D_{n-1}+D_{n-2})'],
    ['Derangement Closed Form',      'D_n = n! Σ(-1)^k/k!, k=0..n'],
  ]},
  { t:'🎲 Probability', rows:[
    ['Classical Probability',        'P(E) = |E| / |S|'],
    ['Complement Rule',              'P(Ē) = 1 − P(E)'],
    ['Conditional Probability',      'P(A|B) = P(A∩B) / P(B)'],
    ["Bayes' Theorem",               'P(A|B) = P(B|A)·P(A) / P(B)'],
    ['Expected Value',               'E(X) = Σ xi·P(X=xi)'],
    ['Bernoulli Trials',             'P(k) = C(n,k)·p^k·(1-p)^(n-k)'],
    ['Linearity of Expectation',     'E(aX+b) = aE(X)+b'],
  ]},
  { t:'🌳 Trees', rows:[
    ['Tree Definition',              'Connected acyclic undirected graph'],
    ['Full Binary Tree',             'i internal nodes → 2i+1 total nodes'],
    ['Height vs Leaves',             'l ≤ 2^h'],
    ['Spanning Tree',                'Subgraph: all vertices, no cycles'],
    ['MST (Kruskal)',                 'Sort edges, add if no cycle'],
    ['MST (Prim)',                    'Grow tree, always pick min edge'],
  ]},
];

const PROBLEMS = [
  { d:'Easy', dc:'de', ch:'Ch 1', t:'Truth Table Construction',
    txt:'Construct a complete truth table for (p → q) ↔ (¬p ∨ q). Show all intermediate columns.',
    ask:'Construct a complete truth table for (p implies q) biconditional (NOT-p OR q) with ALL intermediate columns. Explain each connective and what the final tautology result means.' },
  { d:'Easy', dc:'de', ch:'Ch 2', t:'Set Operations',
    txt:'Let A={1,2,3,4,5}, B={3,4,5,6,7}. Find A∪B, A∩B, A−B, B−A, A⊕B, and |P(A)|.',
    ask:'Let A={1,2,3,4,5} and B={3,4,5,6,7}. Compute A union B, A intersect B, A minus B, B minus A, symmetric difference A XOR B, and power set size |P(A)|. Show all work.' },
  { d:'Easy', dc:'de', ch:'Ch 6', t:'Permutations vs Combinations',
    txt:'A class of 15 students: (a) committee of 4? (b) President, VP, Secretary, Treasurer? (c) Why different?',
    ask:'A class of 15 students: (a) form a committee of 4 using C(15,4), (b) elect President+VP+Secretary+Treasurer using P(15,4). Compute both and explain conceptually why they differ.' },
  { d:'Medium', dc:'dm', ch:'Ch 5', t:'Mathematical Induction',
    txt:'Prove by mathematical induction: 1² + 2² + 3² + … + n² = n(n+1)(2n+1)/6 for all positive integers n.',
    ask:'Prove by mathematical induction that 1-squared + 2-squared + ... + n-squared = n(n+1)(2n+1)/6. Show: Base Case, Inductive Hypothesis, Inductive Step with every algebraic step.' },
  { d:'Medium', dc:'dm', ch:'Ch 4', t:'Modular Arithmetic',
    txt:'Find all solutions to 7x ≡ 3 (mod 11) using the Extended Euclidean Algorithm.',
    ask:'Find all solutions to 7x ≡ 3 (mod 11). Use the Extended Euclidean Algorithm to find gcd(7,11) and the modular inverse of 7 mod 11, then solve completely. Verify the answer.' },
  { d:'Medium', dc:'dm', ch:'Ch 9', t:'Equivalence Relations',
    txt:'Let R be a relation on ℤ: a R b iff a ≡ b (mod 5). Prove R is an equivalence relation and find all equivalence classes.',
    ask:'Prove that a R b iff a ≡ b (mod 5) is an equivalence relation on integers — prove reflexivity, symmetry, transitivity. Then identify and describe all 5 equivalence classes [0],[1],[2],[3],[4].' },
  { d:'Hard', dc:'dh', ch:'Ch 10', t:'Euler Circuit Analysis',
    txt:'Graph G: V={a,b,c,d,e,f}, E={ab,ac,ad,bc,be,cd,cf,de,df,ef}. Euler circuit, path, or neither?',
    ask:'Analyze graph G with vertices {a,b,c,d,e,f} and edges {ab,ac,ad,bc,be,cd,cf,de,df,ef}. Compute degree of each vertex, apply Euler conditions, state which exists, and find the actual circuit or path.' },
  { d:'Hard', dc:'dh', ch:'Ch 8', t:'Recurrence Relation',
    txt:'Solve: a_n = 5a_{n-1} − 6a_{n-2}, a₀=1, a₁=4. Find a closed-form formula.',
    ask:'Solve a_n = 5a_{n-1} - 6a_{n-2} with a_0=1, a_1=4 using the characteristic equation method. Find roots, write general solution, apply initial conditions, state closed-form formula.' },
  { d:'Hard', dc:'dh', ch:'Ch 11', t:'Minimum Spanning Tree',
    txt:'Find MST of {A,B,C,D,E}: AB=4,AC=2,AD=7,BC=3,BD=6,BE=5,CD=1,CE=8,DE=4 using Kruskal\'s and Prim\'s.',
    ask:"Find the MST of weighted graph V={A,B,C,D,E}, E={AB=4,AC=2,AD=7,BC=3,BD=6,BE=5,CD=1,CE=8,DE=4}. Apply BOTH Kruskal's algorithm and Prim's algorithm (start at A), showing every step and the final MST total weight." },
];

// ──────────────────────────────────────────────────────────
// 2. APP STATE
// ──────────────────────────────────────────────────────────
const STORAGE_KEY = 'cse103_api_key';
let API_KEY = '';
let history  = [];
let streaming = false;

// ──────────────────────────────────────────────────────────
// 3. INIT
// ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  buildSidebar();
  buildSyllabus();
  buildFormulas();
  buildProblems();
  buildAbout();
  injectWelcome();
  bindAll();

  // Load saved API key from localStorage
  var saved = '';
  try { saved = localStorage.getItem(STORAGE_KEY) || ''; } catch(e) {}
  if (saved && saved.startsWith('sk-ant-')) {
    API_KEY = saved;
    markConnected();
  } else {
    // Show modal on first visit
    document.getElementById('modal').classList.remove('hide');
    setTimeout(function(){ document.getElementById('keyIn').focus(); }, 300);
  }
});

// ──────────────────────────────────────────────────────────
// 4. MODAL
// ──────────────────────────────────────────────────────────
function openModal() {
  document.getElementById('modal').classList.remove('hide');
  document.getElementById('keyIn').value = '';
  document.getElementById('merr').textContent = '';
  setTimeout(function(){ document.getElementById('keyIn').focus(); }, 150);
}
window.openModal = openModal;

function toggleEye() {
  var i = document.getElementById('keyIn');
  i.type = i.type === 'password' ? 'text' : 'password';
}
window.toggleEye = toggleEye;

function saveKey() {
  var v = (document.getElementById('keyIn').value || '').trim();
  var e = document.getElementById('merr');
  if (!v) { e.textContent = 'Please enter your API key.'; return; }
  if (!v.startsWith('sk-ant-')) { e.textContent = 'Invalid format. Key must start with sk-ant-…'; return; }
  API_KEY = v;
  try { localStorage.setItem(STORAGE_KEY, v); } catch(ex) {}
  document.getElementById('modal').classList.add('hide');
  markConnected();
}
window.saveKey = saveKey;

function markConnected() {
  document.getElementById('sDot').className = 'dot don';
  document.getElementById('sLbl').textContent = 'AI Active';
}

document.addEventListener('keydown', function(e) {
  var m = document.getElementById('modal');
  if (!m.classList.contains('hide') && e.key === 'Enter') saveKey();
});

// ──────────────────────────────────────────────────────────
// 5. BUILD UI SECTIONS
// ──────────────────────────────────────────────────────────
function buildSidebar() {
  var list = document.getElementById('chList');
  CH.forEach(function(ch, i) {
    var btn = document.createElement('button');
    btn.className = 'chb' + (i === 0 ? ' on' : '');
    btn.innerHTML = '<span class="chn">' + ch.n + '</span><span class="chd"></span>' + ch.t;
    btn.addEventListener('click', function () {
      document.querySelectorAll('.chb').forEach(function(b){ b.classList.remove('on'); });
      btn.classList.add('on');
      quickAsk('Give a comprehensive overview of ' + ch.n.replace(/&amp;/g,'&') + ': "' + ch.t.replace(/&amp;/g,'&') + '" from Rosen Discrete Mathematics 8th Edition. Cover all key topics: ' + ch.topics.join(', ').replace(/&amp;/g,'&') + '. Include definitions, theorems, and worked examples for each topic.');
    });
    list.appendChild(btn);
  });
  document.querySelectorAll('.qb').forEach(function(btn) {
    btn.addEventListener('click', function(){ quickAsk(btn.dataset.q); });
  });
}

function buildSyllabus() {
  var g = document.getElementById('cgrid');
  CH.forEach(function(ch, i) {
    var d = document.createElement('div');
    d.className = 'ccard';
    d.innerHTML =
      '<div class="cnum">' + ch.n + ' · Chapter ' + (i+1) + ' of 13</div>' +
      '<div class="ctit">' + ch.t + '</div>' +
      '<div class="cpills">' + ch.topics.map(function(tp){ return '<span class="pill">' + tp + '</span>'; }).join('') + '</div>' +
      '<button class="cask">Ask AI about this chapter →</button>';
    d.querySelector('.cask').addEventListener('click', function(e) {
      e.stopPropagation();
      quickAsk('Explain Chapter ' + (i+1) + ': "' + ch.t.replace(/&amp;/g,'&') + '" from Rosen 8th edition. Provide definitions, key theorems with proofs, and worked examples for: ' + ch.topics.join(', ').replace(/&amp;/g,'&'));
    });
    g.appendChild(d);
  });
}

function buildFormulas() {
  var g = document.getElementById('fgrid');
  FORMULAS.forEach(function(sec) {
    var d = document.createElement('div');
    d.className = 'fcard';
    d.innerHTML = '<div class="ftit">' + sec.t + '</div>' +
      sec.rows.map(function(r){ return '<div class="frow"><span class="flbl">' + r[0] + '</span><span class="fval">' + r[1] + '</span></div>'; }).join('');
    g.appendChild(d);
  });
}

function buildProblems() {
  var l = document.getElementById('plist');
  PROBLEMS.forEach(function(p) {
    var d = document.createElement('div');
    d.className = 'pcard';
    d.innerHTML =
      '<div class="phdr"><div class="pmeta"><span class="ptit">' + p.t + '</span><span class="pch">' + p.ch + '</span></div><span class="db ' + p.dc + '">' + p.d + '</span></div>' +
      '<p class="ptxt">' + p.txt + '</p>' +
      '<button class="psb">Solve with AI →</button>';
    d.querySelector('.psb').addEventListener('click', function(){ quickAsk(p.ask); });
    l.appendChild(d);
  });
}

function buildAbout() {
  document.getElementById('agrid').innerHTML =
    '<div class="acard wide">' +
      '<div class="devrow"><div class="devav">S</div><div>' +
        '<div class="devname">CSE Student — HSTU</div>' +
        '<div class="devrole">Department of Computer Science &amp; Engineering</div>' +
        '<div class="devdept">Hajee Mohammad Danesh Science &amp; Technology University · Dinajpur</div>' +
      '</div></div>' +
      '<div class="arow"><span class="ak">University</span><span class="av2"><strong>Hajee Mohammad Danesh Science and Technology University (HSTU)</strong></span></div>' +
      '<div class="arow"><span class="ak">Location</span><span class="av2">Dinajpur, Rangpur Division, Bangladesh — 5200</span></div>' +
      '<div class="arow"><span class="ak">Department</span><span class="av2">Computer Science &amp; Engineering (CSE)</span></div>' +
      '<div class="arow"><span class="ak">Course</span><span class="av2"><strong>CSE 103</strong> — Discrete Mathematics (3 Credit Hours)</span></div>' +
      '<div class="arow"><span class="ak">Semester</span><span class="av2">1st Year, 1st Semester — B.Sc. in CSE</span></div>' +
      '<div class="arow"><span class="ak">University Site</span><span class="av2"><a href="https://hstu.ac.bd" target="_blank">hstu.ac.bd</a></span></div>' +
    '</div>' +
    '<div class="acard"><div class="aicon ibl">📚</div><h3>Reference Textbook</h3>' +
      '<div class="arow"><span class="ak">Title</span><span class="av2"><strong>Discrete Mathematics and Its Applications</strong></span></div>' +
      '<div class="arow"><span class="ak">Author</span><span class="av2">Kenneth H. Rosen</span></div>' +
      '<div class="arow"><span class="ak">Edition</span><span class="av2"><strong>8th Edition</strong> (2019)</span></div>' +
      '<div class="arow"><span class="ak">Publisher</span><span class="av2">McGraw-Hill Education</span></div>' +
      '<div class="arow"><span class="ak">Chapters</span><span class="av2">13 chapters fully covered</span></div>' +
    '</div>' +
    '<div class="acard"><div class="aicon ipu">🤖</div><h3>AI Assistant</h3>' +
      '<div class="arow"><span class="ak">Powered By</span><span class="av2"><strong>Claude AI</strong> by Anthropic</span></div>' +
      '<div class="arow"><span class="ak">Model</span><span class="av2">claude-sonnet-4-20250514</span></div>' +
      '<div class="arow"><span class="ak">Response</span><span class="av2">Real-time SSE Streaming — fastest possible</span></div>' +
      '<div class="arow"><span class="ak">Speciality</span><span class="av2">Tuned for Rosen Discrete Math at HSTU CSE 103</span></div>' +
      '<div class="arow"><span class="ak">API Key</span><span class="av2">Saved in your browser localStorage. Never sent anywhere except Anthropic.</span></div>' +
      '<span class="aitag">⚡ Streaming Active — Instant Responses</span>' +
    '</div>' +
    '<div class="acard"><div class="aicon igr">🛠️</div><h3>About This Tool</h3>' +
      '<div class="arow"><span class="ak">Purpose</span><span class="av2">Complete homework helper, proof tutor, and exam prep for CSE 103</span></div>' +
      '<div class="arow"><span class="ak">Features</span><span class="av2">AI Solver, Syllabus, 56+ Formulas, 9 Practice Problems, Streaming Chat</span></div>' +
      '<div class="arow"><span class="ak">Tech</span><span class="av2">HTML5 + CSS3 + Vanilla JS — 3 clean files, zero dependencies</span></div>' +
      '<div class="arow"><span class="ak">Usage</span><span class="av2">Put all 3 files in one folder → open index.html in Chrome or Firefox</span></div>' +
    '</div>';
}

// ──────────────────────────────────────────────────────────
// 6. WELCOME MESSAGE
// ──────────────────────────────────────────────────────────
function injectWelcome() {
  appendAIHtml(
    '<h3>👋 Welcome to CSE 103 AI Study Assistant</h3>' +
    '<p>I am your dedicated tutor for <strong>Discrete Mathematics</strong> (CSE 103, HSTU), powered by <em>Kenneth H. Rosen\'s 8th Edition</em>. I can help you:</p>' +
    '<ul>' +
      '<li>📖 Explain concepts from all <strong>13 chapters</strong> with clear examples</li>' +
      '<li>✏️ Solve your <strong>homework problems</strong> step-by-step</li>' +
      '<li>🧮 Write and verify <strong>mathematical proofs</strong></li>' +
      '<li>📊 Analyze <strong>algorithms</strong> and compute time complexity</li>' +
      '<li>🎯 Help you <strong>prepare for exams</strong> with practice problems</li>' +
    '</ul>' +
    '<p style="margin-top:10px;color:var(--t2);font-size:12.5px;">Try one of these to get started:</p>' +
    '<div class="wchips">' +
      '<button class="wchip" data-q="Prove by induction that 1+2+3+...+n = n(n+1)/2 with complete base case and inductive step.">Prove sum formula by induction</button>' +
      '<button class="wchip" data-q="What is the difference between an Euler circuit and a Hamiltonian cycle? Give examples and state conditions for each.">Euler circuit vs Hamiltonian cycle</button>' +
      '<button class="wchip" data-q="Solve: How many 5-card hands from a 52-card deck contain exactly 2 aces? Show full solution.">5-card hand counting problem</button>' +
      '<button class="wchip" data-q="Explain all key logical equivalence laws (De Morgan, Distributive, Absorption, Contrapositive etc.) with truth table verification.">All logic equivalence laws</button>' +
    '</div>',
    true   // isWelcome — attach chip listeners after insert
  );
}

// ──────────────────────────────────────────────────────────
// 7. EVENT BINDING
// ──────────────────────────────────────────────────────────
function bindAll() {
  // Tabs
  document.querySelectorAll('.tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var t = tab.dataset.t;
      document.querySelectorAll('.tab').forEach(function(x){ x.classList.remove('on'); });
      tab.classList.add('on');
      document.querySelectorAll('.panel').forEach(function(x){ x.classList.remove('on'); });
      var p = document.getElementById('p-' + t);
      if (p) p.classList.add('on');
    });
  });

  // Quick-chips in input toolbar
  document.querySelectorAll('.chip').forEach(function(c) {
    c.addEventListener('click', function(){ quickAsk(c.dataset.q); });
  });

  // Send button
  document.getElementById('sbtn').addEventListener('click', sendMsg);

  // Textarea — Enter sends, Shift+Enter = newline, auto-resize
  var inp = document.getElementById('inp');
  inp.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); }
  });
  inp.addEventListener('input', function() {
    inp.style.height = 'auto';
    inp.style.height = Math.min(inp.scrollHeight, 100) + 'px';
  });
}

function quickAsk(text) {
  // Switch to chat tab
  document.querySelectorAll('.tab').forEach(function(x){ x.classList.remove('on'); });
  document.querySelector('[data-t="chat"]').classList.add('on');
  document.querySelectorAll('.panel').forEach(function(x){ x.classList.remove('on'); });
  document.getElementById('p-chat').classList.add('on');
  // Put text and fire
  var inp = document.getElementById('inp');
  inp.value = text;
  inp.style.height = 'auto';
  sendMsg();
}

// ──────────────────────────────────────────────────────────
// 8. MARKDOWN → HTML RENDERER
// ──────────────────────────────────────────────────────────
function renderMD(raw) {
  var text = raw;
  // Extract code blocks
  var blocks = [];
  text = text.replace(/```[\w]*\n?([\s\S]*?)```/g, function(_, code) {
    blocks.push(code.trimEnd());
    return '\x00BLK' + (blocks.length-1) + '\x00';
  });
  // Inline code
  text = text.replace(/`([^`\n]+)`/g, '<code>$1</code>');
  // Bold/italic
  text = text.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  text = text.replace(/\*\*(.+?)\*\*/g,    '<strong>$1</strong>');
  text = text.replace(/\*([^*\n]+?)\*/g,   '<em>$1</em>');
  // Headers
  text = text.replace(/^### (.+)$/gm, '<h4>$1</h4>');
  text = text.replace(/^## (.+)$/gm,  '<h3>$1</h3>');
  text = text.replace(/^# (.+)$/gm,   '<h3>$1</h3>');
  // HR
  text = text.replace(/^---+$/gm, '<hr/>');
  // Detect math-style standalone lines (equations)
  text = text.replace(/^([^\n<]{0,6}[=≡≤≥∈∉⊆⊇∪∩→↔¬∧∨∀∃∑∏][^\n]{2,})$/gm, function(line) {
    var t = line.trim();
    if (t.length < 5 || t.startsWith('<')) return line;
    return '<span class="mblk">' + t + '</span>';
  });
  // Unordered lists
  text = text.replace(/((?:^[ \t]*[-*] .+\n?)+)/gm, function(blk) {
    var items = blk.trim().split('\n').map(function(l){ return '<li>' + l.replace(/^[ \t]*[-*] /,'') + '</li>'; }).join('');
    return '<ul>' + items + '</ul>';
  });
  // Ordered lists
  text = text.replace(/((?:^\d+\. .+\n?)+)/gm, function(blk) {
    var items = blk.trim().split('\n').map(function(l){ return '<li>' + l.replace(/^\d+\. /,'') + '</li>'; }).join('');
    return '<ol>' + items + '</ol>';
  });
  // Paragraphs
  var parts = text.split(/\n{2,}/);
  text = parts.map(function(p) {
    p = p.trim();
    if (!p) return '';
    if (/^<(h[1-6]|ul|ol|hr|span class="mblk)/.test(p)) return p;
    return '<p>' + p.replace(/\n/g, '<br/>') + '</p>';
  }).join('\n');
  // Restore code blocks
  text = text.replace(/\x00BLK(\d+)\x00/g, function(_, i) {
    return '<pre>' + blocks[parseInt(i)].replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>';
  });
  return text;
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ──────────────────────────────────────────────────────────
// 9. MESSAGE HELPERS
// ──────────────────────────────────────────────────────────
function appendUserMsg(text) {
  var msgs = document.getElementById('msgs');
  var d = document.createElement('div');
  d.className = 'msg u';
  d.innerHTML = '<div class="av">You</div><div class="mb"><p>' + esc(text).replace(/\n/g,'<br/>') + '</p></div>';
  msgs.appendChild(d);
  scrollBottom();
}

function appendAIHtml(html, attachChips) {
  var msgs = document.getElementById('msgs');
  var d = document.createElement('div');
  d.className = 'msg ai';
  d.innerHTML = '<div class="av">AI</div><div class="mb">' + html + '</div>';
  msgs.appendChild(d);
  if (attachChips) {
    d.querySelectorAll('.wchip').forEach(function(c) {
      c.addEventListener('click', function(){ quickAsk(c.dataset.q); });
    });
  }
  scrollBottom();
  return d.querySelector('.mb');
}

function appendAITyping() {
  var msgs = document.getElementById('msgs');
  var d = document.createElement('div');
  d.className = 'msg ai';
  d.innerHTML = '<div class="av">AI</div><div class="mb"><div class="dots"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(d);
  scrollBottom();
  return d.querySelector('.mb');
}

function scrollBottom() {
  var m = document.getElementById('msgs');
  requestAnimationFrame(function(){ m.scrollTop = m.scrollHeight; });
}

// ──────────────────────────────────────────────────────────
// 10. SEND MESSAGE — STREAMING API CALL
// ──────────────────────────────────────────────────────────
async function sendMsg() {
  if (streaming) return;
  var inp = document.getElementById('inp');
  var text = (inp.value || '').trim();
  if (!text) return;

  if (!API_KEY) { openModal(); return; }

  inp.value = '';
  inp.style.height = 'auto';
  inp.blur();
  streaming = true;
  document.getElementById('sbtn').disabled = true;

  appendUserMsg(text);
  var targetEl = appendAITyping();

  history.push({ role: 'user', content: text });

  var fullText = '';
  var isFirst  = true;

  try {
    var response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2048,
        stream: true,
        system:
          'You are an expert Discrete Mathematics tutor for CSE 103 at HSTU (Hajee Mohammad Danesh Science and Technology University), Dinajpur, Bangladesh. ' +
          'The course reference book is "Discrete Mathematics and Its Applications" by Kenneth H. Rosen, 8th Edition.\n\n' +
          'Your duties:\n' +
          '1. Explain concepts clearly from all 13 chapters with concrete examples.\n' +
          '2. Solve homework problems with FULL step-by-step working — label every step (Step 1, Step 2, …).\n' +
          '3. Write rigorous proofs — always state: Base Case, Inductive Hypothesis, Inductive Step.\n' +
          '4. Reference the relevant Rosen chapter/section (e.g. Section 1.3, Chapter 6).\n' +
          '5. Use proper mathematical notation and be patient with undergraduate students.\n' +
          '6. End complex answers with a brief "Summary" of key results.',
        messages: history
      })
    });

    if (!response.ok) {
      var errData = {};
      try { errData = await response.json(); } catch(e) {}
      throw new Error((errData.error && errData.error.message) ? errData.error.message : 'HTTP ' + response.status + ' ' + response.statusText);
    }

    var reader  = response.body.getReader();
    var decoder = new TextDecoder('utf-8');
    var buf     = '';

    while (true) {
      var chunk = await reader.read();
      if (chunk.done) break;
      buf += decoder.decode(chunk.value, { stream: true });
      var lines = buf.split('\n');
      buf = lines.pop(); // keep incomplete line

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line || !line.startsWith('data: ')) continue;
        var data = line.slice(6);
        if (data === '[DONE]') continue;
        try {
          var parsed = JSON.parse(data);
          if (parsed.type === 'content_block_delta' &&
              parsed.delta && parsed.delta.type === 'text_delta' &&
              parsed.delta.text) {
            if (isFirst) { targetEl.innerHTML = ''; isFirst = false; }
            fullText += parsed.delta.text;
            targetEl.innerHTML = renderMD(fullText);
            scrollBottom();
          }
        } catch(e) { /* skip malformed SSE line */ }
      }
    }

    // Final clean render
    if (fullText) {
      targetEl.innerHTML = renderMD(fullText);
      history.push({ role: 'assistant', content: fullText });
      // Keep context window manageable (last 20 exchanges = 40 messages)
      if (history.length > 40) history = history.slice(-40);
    }

  } catch (err) {
    var msg  = err.message || 'Unknown error';
    var hint = '';
    if (/401|authentication|invalid api key/i.test(msg)) {
      hint = 'Your API key is invalid or expired. <button onclick="openModal()" style="color:var(--a1);background:none;border:none;cursor:pointer;text-decoration:underline;">Update key →</button>';
      try { localStorage.removeItem('cse103_api_key'); } catch(e) {}
    } else if (/429|rate.?limit/i.test(msg)) {
      hint = 'Rate limit reached. Please wait 30 seconds and try again.';
    } else if (/fetch|network|failed/i.test(msg)) {
      hint = 'Network error. Check your internet connection, then <button onclick="openModal()" style="color:var(--a1);background:none;border:none;cursor:pointer;text-decoration:underline;">re-enter your key →</button>';
    } else {
      hint = 'Please check your API key. <button onclick="openModal()" style="color:var(--a1);background:none;border:none;cursor:pointer;text-decoration:underline;">Update key →</button>';
    }
    targetEl.innerHTML =
      '<p style="color:var(--danger)">⚠️ <strong>Error</strong></p>' +
      '<p style="font-size:12.5px;color:var(--t2);margin-top:5px;">' + esc(msg) + '</p>' +
      '<p style="font-size:12px;color:var(--t3);margin-top:5px;">' + hint + '</p>';
    history.pop(); // remove failed user message
  }

  streaming = false;
  document.getElementById('sbtn').disabled = false;
  scrollBottom();
  document.getElementById('inp').focus();
}
