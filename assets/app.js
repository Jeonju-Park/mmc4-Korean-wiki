/* ====== Medieval MC 한글 위키 — SPA ====== */
const GROUPS = [
  { id:'install', label:'🛠️ 설치 가이드' },
  { id:'guide',   label:'📖 플레이 가이드' },
  { id:'wiki',    label:'📑 위키' },
  { id:'media',   label:'🖼️ 아이콘 도감' },
  { id:'detail',  label:'🔎 심화 가이드' },
];
const PAGES = [
  { id:'install', g:'install', title:'한글패치 설치 가이드', file:'content/install/install.md' },

  { id:'race',  g:'guide', title:'종족 가이드',     file:'content/guide/race.md' },
  { id:'class', g:'guide', title:'직업 가이드',     file:'content/guide/class.md' },
  { id:'mount', g:'guide', title:'탈것 가이드',     file:'content/guide/mount.md' },
  { id:'todo',  g:'guide', title:'할 일 가이드',    file:'content/guide/todo.md' },
  { id:'boss-hunting', g:'guide', title:'보스 헌팅 가이드', file:'content/guide/boss-hunting.md' },
  { id:'tank-build', g:'guide', title:'근딜 탱커 빌드 가이드', file:'content/guide/tank-build.md' },

  { id:'weapon',    g:'wiki', title:'무기 위키',        file:'content/wiki/weapon.md' },
  { id:'armor',     g:'wiki', title:'방어구 위키',      file:'content/wiki/armor.md' },
  { id:'prod-tools',g:'wiki', title:'생산성툴 위키',    file:'content/wiki/prod-tools.md' },
  { id:'item',      g:'wiki', title:'아이템 위키',      file:'content/wiki/item.md' },
  { id:'structure', g:'wiki', title:'구조물 위키',      file:'content/wiki/structure.md' },
  { id:'prod-item', g:'wiki', title:'생산성 아이템 위키', file:'content/wiki/prod-item.md' },
  { id:'biome',     g:'wiki', title:'바이옴 위키',      file:'content/wiki/biome.md' },
  { id:'resource',  g:'wiki', title:'자원 위키',        file:'content/wiki/resource.md' },
  { id:'boss',      g:'wiki', title:'보스 위키',        file:'content/wiki/boss.md' },
  { id:'monster',   g:'wiki', title:'몬스터 위키',      file:'content/wiki/monster.md' },
  { id:'magic',     g:'wiki', title:'마법 위키',        file:'content/wiki/magic.md' },
  { id:'survival',  g:'wiki', title:'생존 시스템 위키', file:'content/wiki/survival.md' },
  { id:'food',      g:'wiki', title:'음식·요리 위키',   file:'content/wiki/food.md' },
  { id:'enchant',   g:'wiki', title:'인챈트 위키',      file:'content/wiki/enchant.md' },
  { id:'familiar',  g:'wiki', title:'패밀리어·동료 위키', file:'content/wiki/familiar.md' },
  { id:'bounty',    g:'wiki', title:'의뢰·교역 위키',   file:'content/wiki/bounty.md' },

  { id:'icons',     g:'media', title:'아이콘 도감(아이템·블록)', special:'icons' },

  { id:'overview', g:'detail', title:'모드팩 종합 플레이',     file:'content/detail/overview.md' },
  { id:'fishing',  g:'detail', title:'낚시 가이드',           file:'content/detail/fishing.md' },
  { id:'mining',   g:'detail', title:'광질 가이드',           file:'content/detail/mining.md' },
  { id:'building', g:'detail', title:'건축 가이드',           file:'content/detail/building.md' },
  { id:'structurize', g:'detail', title:'건축도구 Structurize', file:'content/detail/structurize.md' },
  { id:'revenant', g:'detail', title:'레버넌트 종족 심화',     file:'content/detail/revenant.md' },
  { id:'yeti',     g:'detail', title:'예티 종족 심화',         file:'content/detail/yeti.md' },
  { id:'cook',     g:'detail', title:'요리사 직업 심화',       file:'content/detail/cook.md' },
  { id:'prod-tools-detail', g:'detail', title:'생산성툴 제작법(원본)', file:'content/detail/prod-tools-detail.md' },
  { id:'toms-storage', g:'detail', title:'톰스토리지 공용창고 구축', file:'content/detail/toms-storage.md' },
];
const LINKMAP = {
  '1_종족_가이드.md':'race','2_직업_가이드.md':'class','3_탈것_가이드.md':'mount','4_할일_가이드.md':'todo','5_보스헌팅_가이드.md':'boss-hunting',
  '6_근딜탱커_빌드_가이드.md':'tank-build',
  '5_무기_위키.md':'weapon','6_방어구_위키.md':'armor','7_생산성툴_위키.md':'prod-tools','8_아이템_위키.md':'item','9_구조물_위키.md':'structure','10_생산성아이템_위키.md':'prod-item','11_바이옴_위키.md':'biome','12_자원_위키.md':'resource','13_보스_위키.md':'boss','14_몬스터_위키.md':'monster',
  '15_마법_위키.md':'magic','16_생존시스템_위키.md':'survival','17_음식_위키.md':'food','18_인챈트_위키.md':'enchant','19_패밀리어_위키.md':'familiar','20_의뢰_위키.md':'bounty',
  '낚시_가이드.md':'fishing','광질_가이드.md':'mining','건축_가이드.md':'building','건축도구_Structurize_가이드.md':'structurize','레버넌트_종족_가이드.md':'revenant','예티_종족_가이드.md':'yeti','요리사_직업_가이드.md':'cook','생산성툴_가이드.md':'prod-tools-detail','모드팩_플레이_가이드.md':'overview','톰스토리지_창고_가이드.md':'toms-storage'
};
const PAGE_BY_ID = Object.fromEntries(PAGES.map(p=>[p.id,p]));

/* ---------- Sidebar ---------- */
function buildSidebar(){
  const nav = document.getElementById('nav');
  nav.innerHTML = '';
  GROUPS.forEach(grp=>{
    const pages = PAGES.filter(p=>p.g===grp.id);
    const box = document.createElement('div');
    box.className = 'nav-group';
    box.dataset.group = grp.id;
    box.innerHTML = `<div class="nav-title">${grp.label}<span class="chev">▼</span></div>`;
    const ul = document.createElement('ul');
    ul.className = 'nav-list';
    pages.forEach(p=>{
      const li = document.createElement('li');
      li.innerHTML = `<a href="#/${p.id}" data-id="${p.id}">${p.title}</a>`;
      ul.appendChild(li);
    });
    box.appendChild(ul);
    box.querySelector('.nav-title').addEventListener('click',()=>box.classList.toggle('collapsed'));
    nav.appendChild(box);
  });
}
function highlightNav(id){
  document.querySelectorAll('.nav-list a').forEach(a=>a.classList.toggle('active', a.dataset.id===id));
}

/* ---------- Slug + TOC ---------- */
function slugify(t,used){
  let s = t.trim().toLowerCase().replace(/[^\w가-힣\s-]/g,'').replace(/\s+/g,'-') || 'sec';
  let base=s,i=2; while(used.has(s)){ s=base+'-'+i; i++; } used.add(s); return s;
}
function buildTOC(article){
  const used=new Set();
  const heads=[...article.querySelectorAll('h2, h3')];
  heads.forEach(h=>{ if(!h.id) h.id=slugify(h.textContent,used);
    const a=document.createElement('a'); a.className='anchor'; a.textContent='#'; a.href='javascript:void(0)';
    a.addEventListener('click',()=>scrollToEl(h)); h.appendChild(a);
  });
  const h2s=heads.filter(h=>h.tagName==='H2');
  if(h2s.length>=2){
    const box=document.createElement('div'); box.className='toc-box';
    let html='<div class="toc-title">목차</div><ol>'; let n1=0,n2=0,lastH2=null;
    heads.forEach(h=>{
      if(h.tagName==='H2'){ if(lastH2) html+='</ol></li>'; n1++; n2=0;
        html+=`<li><a data-tg="${h.id}"><span class="toc-num">${n1}.</span>${escapeHtml(h.firstChild.textContent)}</a><ol>`; lastH2=h;
      } else { n2++; html+=`<li><a data-tg="${h.id}"><span class="toc-num">${n1}.${n2}</span>${escapeHtml(h.firstChild.textContent)}</a></li>`; }
    });
    if(lastH2) html+='</ol></li>'; html+='</ol>';
    box.innerHTML=html;
    const h1=article.querySelector('h1');
    if(h1&&h1.nextSibling) article.insertBefore(box,h1.nextSibling); else article.prepend(box);
    box.querySelectorAll('a[data-tg]').forEach(a=>a.addEventListener('click',()=>scrollToEl(document.getElementById(a.dataset.tg))));
  }
  const side=document.getElementById('toc');
  if(heads.length>=3){
    let s='<div class="toc-title">목차</div><ul>';
    heads.forEach(h=>{ s+=`<li><a data-tg="${h.id}" class="${h.tagName==='H3'?'lvl3':''}">${escapeHtml(h.firstChild.textContent)}</a></li>`; });
    s+='</ul>'; side.innerHTML=s;
    side.querySelectorAll('a[data-tg]').forEach(a=>a.addEventListener('click',()=>scrollToEl(document.getElementById(a.dataset.tg))));
    setupSpy(heads);
  } else side.innerHTML='';
}
function scrollToEl(el){ if(!el) return; const y=el.getBoundingClientRect().top+window.scrollY-62; window.scrollTo({top:y,behavior:'smooth'}); }
function setupSpy(heads){
  const links=[...document.querySelectorAll('#toc a[data-tg]')];
  if(window._spy) window._spy.disconnect();
  window._spy=new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){
      links.forEach(l=>l.classList.toggle('active', l.dataset.tg===e.target.id));
    }});
  },{rootMargin:'-60px 0px -75% 0px'});
  heads.forEach(h=>window._spy.observe(h));
}
function escapeHtml(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

/* ---------- Icons catalog (스프라이트 아틀라스) ---------- */
let ICON_CATALOG=[]; let ICON_BY_NAME={}; let ICON_META={cell:32, cols:64};
function normName(s){ return String(s).toLowerCase().replace(/\([^)]*\)/g,'').replace(/[^\w가-힣]/g,'').trim(); }
async function loadIcons(){
  try{
    const r=await fetch('assets/icons/catalog.json',{cache:'no-cache'}); if(!r.ok) return;
    const data=await r.json();
    ICON_META={cell:data.cell||32, cols:data.cols||64};
    ICON_CATALOG=data.items||[];
    for(const e of ICON_CATALOG){ const k=normName(e.ko); if(k && !ICON_BY_NAME[k]) ICON_BY_NAME[k]=e; const ke=normName(e.en); if(ke && !ICON_BY_NAME[ke]) ICON_BY_NAME[ke]=e; }
  }catch(e){}
}
function spriteStyle(e, D){ const cols=ICON_META.cols;
  return `background-image:url(assets/icons/atlas${e.a}.png);background-size:${cols*D}px auto;background-position:-${e.x*D}px -${e.y*D}px;width:${D}px;height:${D}px;`; }
function iconFor(label){
  const cut=String(label).split(/[(→·,\/|]/)[0].trim();      // 괄호/화살표/구분자 앞부분
  const cands=[label, cut, cut.split(/\s+/).slice(0,2).join(' '), cut.split(/\s+/)[0]];
  for(const c of cands){ const e=ICON_BY_NAME[normName(c)]; if(e) return e; }
  return null;
}
// 위키 본문용: 단일 단어 폴백 없이 선두 이름만 매칭(오매칭 최소화)
function iconStrict(text){
  const chunk=String(text).split(/[(→·,\/|:\[\]]/)[0].replace(/[#*`]/g,'').trim();
  if(!chunk || chunk.length>28 || !/[가-힣A-Za-z]/.test(chunk)) return null;
  const w=chunk.split(/\s+/);
  const cands=[chunk]; if(w.length>3) cands.push(w.slice(0,3).join(' ')); if(w.length>2) cands.push(w.slice(0,2).join(' '));
  for(const c of cands){ const e=ICON_BY_NAME[normName(c)]; if(e) return e; }
  return null;
}
// 위키 표 셀·굵은 항목 앞에 아이콘 삽입
function decorateIcons(root){
  if(!root || !ICON_CATALOG.length) return;
  const decorate=(el)=>{
    if(el.dataset.icDone) return; el.dataset.icDone='1';
    if(el.querySelector && el.querySelector('.wiki-ic')) return;
    const e=iconStrict(el.textContent);
    if(!e) return;
    const sp=document.createElement('span'); sp.className='wiki-ic'; sp.setAttribute('style', spriteStyle(e,18));
    el.insertBefore(sp, el.firstChild);
  };
  root.querySelectorAll('td').forEach(decorate);
  root.querySelectorAll('strong').forEach(s=>{ if(!s.closest('td')) decorate(s); });
}

/* ---------- Link rewrite ---------- */
function rewriteLinks(article){
  article.querySelectorAll('a[href]').forEach(a=>{
    let href=a.getAttribute('href');
    if(/\.zip(\?|$)/i.test(href)){ a.setAttribute('download',''); return; }   // 다운로드 파일
    if(/^https?:\/\//i.test(href)){ a.target='_blank'; a.rel='noopener noreferrer'; return; }
    if(href.includes('.md')){
      const base=decodeURIComponent(href.split('#')[0].split('/').pop());
      const id=LINKMAP[base];
      if(id){ a.setAttribute('href', '#/'+id); }
      else { a.removeAttribute('href'); a.style.color='var(--text-soft)'; a.title='해당 문서는 이 사이트에 없습니다'; }
    }
  });
}

/* ---------- Jump-to-term highlight ---------- */
function clearMarks(article){ article.querySelectorAll('mark.search-hit').forEach(m=>{ const t=document.createTextNode(m.textContent); m.replaceWith(t); }); }
function highlightTerm(article, term){
  if(!term) return; term=decodeURIComponent(term); const tl=term.toLowerCase();
  const walker=document.createTreeWalker(article, NodeFilter.SHOW_TEXT, {
    acceptNode:n=> n.parentElement && !n.parentElement.closest('.toc-box, a.anchor') && n.nodeValue.toLowerCase().includes(tl) ? 1 : 3
  });
  const node=walker.nextNode();
  if(!node){ return; }
  const idx=node.nodeValue.toLowerCase().indexOf(tl);
  try{
    const range=document.createRange();
    range.setStart(node, idx); range.setEnd(node, idx+term.length);
    const mark=document.createElement('mark'); mark.className='search-hit';
    range.surroundContents(mark);
    // 해시 이동의 기본 스크롤(맨 위로)을 이기도록 여러 번 재정렬
    const goY=(el)=>Math.max(0, el.getBoundingClientRect().top + window.scrollY - 90); // 헤더 아래로
    const doScroll=(n)=>{ if(!mark.isConnected) return; window.scrollTo({top:goY(mark), behavior:'auto'}); if(n>0) setTimeout(()=>doScroll(n-1),90); };
    setTimeout(()=>doScroll(6),60);
    mark.classList.add('flash');
    setTimeout(()=>mark.classList.remove('flash'),1700);
  }catch(e){ const el=node.parentElement; const f=(n)=>{ if(!el)return; window.scrollTo({top:Math.max(0,el.getBoundingClientRect().top+window.scrollY-90),behavior:'auto'}); if(n>0)setTimeout(()=>f(n-1),90); }; setTimeout(()=>f(6),60); }
}

/* ---------- Router ---------- */
async function route(){
  const raw=location.hash.replace(/^#\/?/,'');
  const [path,query]=raw.split('?');
  const params=new URLSearchParams(query||'');
  const q=params.get('q');
  const article=document.getElementById('article');
  closeSidebar();
  if(!path || path==='/'){ renderHome(article); document.getElementById('toc').innerHTML=''; highlightNav(''); window.scrollTo(0,0); return; }
  const id=path.split('/')[0];
  const page=PAGE_BY_ID[id];
  if(!page){ article.innerHTML='<div class="errbox">문서를 찾을 수 없습니다. <a href="#/">홈으로</a></div>'; return; }
  highlightNav(id);
  document.getElementById('toc').innerHTML='';
  if(page.special==='icons'){ document.title='아이콘 도감 · Medieval MC 한글 위키'; renderIconGallery(article, params.get('q')||''); window.scrollTo(0,0); return; }
  article.innerHTML='<div class="loading">⏳ 문서를 불러오는 중…</div>';
  try{
    const res=await fetch(page.file,{cache:'no-cache'});
    if(!res.ok) throw new Error(res.status);
    const md=await res.text();
    article.innerHTML=marked.parse(md,{gfm:true,breaks:false});
    rewriteLinks(article);
    buildTOC(article);
    decorateIcons(article);
    document.title=page.title+' · Medieval MC 한글 위키';
    if(q){ highlightTerm(article, q); } else { window.scrollTo(0,0); }
  }catch(err){
    article.innerHTML=`<div class="errbox">⚠️ 문서를 불러오지 못했습니다 (<code>${page.file}</code>).<br><br>
    로컬에서 <code>file://</code> 로 열면 브라우저 보안정책상 로드되지 않습니다.<br>
    배포(GitHub Pages) 환경이거나, 로컬에서는 간단한 서버로 여세요:<br>
    <code>python3 -m http.server</code> 후 <code>http://localhost:8000</code> 접속.</div>`;
  }
}
function renderHome(article){
  document.title='Medieval MC MMC4 한글 위키';
  const card=(id,ic,t,d)=>`<a class="home-card" href="#/${id}"><div class="hc-ic">${ic}</div><h3>${t}</h3><p>${d}</p></a>`;
  const links=g=>PAGES.filter(p=>p.g===g).map(p=>`<a href="#/${p.id}">${p.title}</a>`).join(' · ');
  article.innerHTML=`
  <div class="home-hero">
    <img class="home-logo" src="assets/img/logo_medieval.png" alt="Medieval MC" onerror="this.style.display='none'">
    <h1>⚔️ Medieval MC MMC4 한글 위키</h1>
    <p>마인크래프트 1.20.1 · Medieval MC [FORGE] 모드팩 한글패치 · 설치 / 플레이 / 위키</p>
  </div>
  <div class="home-cards">
    ${card('install','🛠️','설치 가이드','자바·커스포지·모드팩·한글패치 설치부터 서버 접속까지 5단계.')}
    ${card('todo','📖','플레이 가이드','종족·직업·탈것·보스 헌팅 + "무엇부터 할까" 체크리스트.')}
    ${card('weapon','📑','위키','무기·방어구·보스·몬스터·바이옴·자원·마법·생존 등.')}
  </div>
  <blockquote>🔍 상단 <b>검색창</b>에 <b>보스·광석·무기·몹 이름</b>을 입력하면 해당 문서의 그 항목으로 바로 이동합니다. (예: "이그니스", "사파이어", "드래곤스틸")</blockquote>
  <h2>📖 플레이 가이드</h2><p>${links('guide')}</p>
  <h2>📑 위키</h2><p>${links('wiki')}</p>
  <h2>🖼️ 아이콘 도감</h2><p><a href="#/icons">아이템·블록 아이콘 7,800여 개 둘러보기 →</a></p>
  <h2>🔎 심화 가이드</h2><p>${links('detail')}</p>
  <blockquote>⚠️ 일부 모드(Ice and Fire·Tetra·Apotheosis 본체·MineColonies 등)는 공식/원본에 한글이 없어 게임 내 영문으로 표시될 수 있습니다. 각 문서에 영문명을 병기했습니다.</blockquote>`;
}

/* ---------- Icon gallery ---------- */
function renderIconGallery(article, initQ){
  if(!ICON_CATALOG.length){ article.innerHTML='<div class="loading">🖼️ 아이콘 도감을 불러오는 중… (잠시 후 다시 시도해 주세요)</div>'; loadIcons().then(()=>{ if(ICON_CATALOG.length) renderIconGallery(article, initQ); }); return; }
  const mods=[...new Set(ICON_CATALOG.map(e=>e.m))].sort();
  article.innerHTML=`<div class="gal-head"><h1>🖼️ 아이콘 도감 (아이템·블록)</h1>
    <p>모드팩에서 추출한 <b>${ICON_CATALOG.length.toLocaleString()}개</b> 아이콘. 이름(한글)으로 검색하거나 모드로 필터하세요. 마우스를 올리면 ID가 보입니다.</p></div>
    <div class="gal-tools">
      <input id="galSearch" type="search" placeholder="🔍 아이콘 이름 검색 (예: 사파이어, 카타나, 토마토)" />
      <select id="galMod"><option value="">전체 모드 (${mods.length})</option>${mods.map(m=>`<option value="${m}">${m}</option>`).join('')}</select>
      <span class="gal-count" id="galCount"></span>
    </div>
    <div class="gal-grid" id="galGrid"></div>
    <div class="gal-more" id="galMore"></div>`;
  const grid=article.querySelector('#galGrid'), more=article.querySelector('#galMore'),
        cnt=article.querySelector('#galCount'), si=article.querySelector('#galSearch'), ms=article.querySelector('#galMod');
  let filtered=ICON_CATALOG, shown=0; const PAGE=200;
  function apply(){
    const q=normName(si.value), mod=ms.value;
    filtered=ICON_CATALOG.filter(e=>(!mod||e.m===mod) && (!q||normName(e.ko).includes(q)||normName(e.en).includes(q)||e.id.toLowerCase().includes(si.value.toLowerCase())));
    grid.innerHTML=''; shown=0; cnt.textContent=`${filtered.length.toLocaleString()}개`; renderMore();
  }
  function renderMore(){
    const slice=filtered.slice(shown, shown+PAGE);
    grid.insertAdjacentHTML('beforeend', slice.map(e=>
      `<div class="gal-cell" title="${escapeHtml(e.m)}:${escapeHtml(e.id)} (${e.k})"><span class="gal-ic" style="${spriteStyle(e,48)}"></span><div class="gc-name">${escapeHtml(e.ko||e.id)}</div><div class="gc-mod">${escapeHtml(e.m)}</div></div>`
    ).join(''));
    shown+=slice.length;
    more.innerHTML = shown<filtered.length ? `<button id="galMoreBtn">더 보기 (${(filtered.length-shown).toLocaleString()}개 남음)</button>` : '';
    const b=document.getElementById('galMoreBtn'); if(b) b.addEventListener('click',renderMore);
  }
  si.addEventListener('input',apply); ms.addEventListener('change',apply);
  if(initQ){ si.value=initQ; }
  apply();
}

/* ---------- Search (제목 + 소제목 + 표 항목명 + 강조어) ---------- */
let SEARCH_INDEX=[]; // {id, page, label, q, kind}
let INDEX_READY=false;
PAGES.forEach(p=>SEARCH_INDEX.push({id:p.id, page:p.title, label:p.title, q:'', kind:'page'}));
function cleanTxt(s){ return String(s).replace(/\[([^\]]+)\]\([^)]*\)/g,'$1').replace(/[*`>#|]/g,'').replace(/\s+/g,' ').trim(); }
function addEntry(seen, id, page, label, q, kind){
  label=cleanTxt(label); if(!label || label.length>48 || !/[가-힣A-Za-z]/.test(label)) return;
  const key=id+'|'+kind+'|'+label.toLowerCase(); if(seen.has(key)) return; seen.add(key);
  SEARCH_INDEX.push({id, page, label, q:(q!==undefined?q:label), kind});
}
async function buildFullIndex(){
  for(const p of PAGES){
    try{
      const r=await fetch(p.file,{cache:'force-cache'}); if(!r.ok) continue;
      const lines=(await r.text()).split('\n'); const seen=new Set();
      for(let i=0;i<lines.length;i++){
        const line=lines[i];
        let m=line.match(/^#{2,4}\s+(.+)$/);
        if(m){ addEntry(seen,p.id,p.title,m[1],undefined,'heading'); continue; }
        if(/^\s*\|/.test(line)){
          if(/^\s*\|[\s:|+-]+\|?\s*$/.test(line)) continue;            // separator row
          if(/^\s*\|[\s:|+-]+\|?\s*$/.test(lines[i+1]||'')) continue;  // header row (next line is separator)
          const cells=line.split('|').map(c=>c.trim()).filter(Boolean);
          if(cells.length){ addEntry(seen,p.id,p.title,cells[0],undefined,'row'); }
          continue;
        }
        m=line.match(/^\s*(?:(?:[-*]|\d+[.)])\s+)?\*\*(.+?)\*\*/);  // 글머리/번호 목록 + 줄머리 굵은 항목
        if(m){ addEntry(seen,p.id,p.title,m[1],undefined,'item'); }
      }
    }catch(e){}
  }
  INDEX_READY=true;
}
function doSearch(raw){
  const box=document.getElementById('searchResults');
  const q=raw.trim().toLowerCase();
  if(!q){ box.hidden=true; box.innerHTML=''; return; }
  const starts=[], incl=[]; const seen=new Set();
  for(const it of SEARCH_INDEX){
    const L=it.label.toLowerCase(); const key=it.id+'|'+it.label.toLowerCase();
    if(L===q){ if(!seen.has(key)){seen.add(key); starts.unshift(it);} }
    else if(L.startsWith(q)){ if(!seen.has(key)){seen.add(key); starts.push(it);} }
    else if(L.includes(q)){ if(!seen.has(key)){seen.add(key); incl.push(it);} }
    if(starts.length+incl.length>=60) break;
  }
  const out=[...starts, ...incl].slice(0,16);
  if(!out.length){
    box.hidden=false;
    box.innerHTML=`<li class="sr-empty">검색 결과가 없습니다.${INDEX_READY?'':' (색인 준비 중…)'}</li>`;
    return;
  }
  box.hidden=false;
  box.innerHTML=out.map(it=>{
    const href = it.kind==='page' ? `#/${it.id}` : `#/${it.id}?q=${encodeURIComponent(it.q)}`;
    const ic = it.kind!=='page' ? iconFor(it.label) : null;
    const icHtml = ic ? `<span class="sr-ic" style="${spriteStyle(ic,20)}"></span>` : '';
    const main = it.kind==='page' ? `<b>${escapeHtml(it.label)}</b>` : `${icHtml}${escapeHtml(it.label)} <span class="sr-group">· ${escapeHtml(it.page)}</span>`;
    return `<li><a href="${href}">${main}</a></li>`;
  }).join('');
}

/* ---------- Theme / Menu ---------- */
function initTheme(){
  const saved=localStorage.getItem('mmc-theme')||'light';
  document.documentElement.setAttribute('data-theme',saved);
  document.getElementById('themeBtn').textContent=saved==='dark'?'☀️':'🌙';
}
function toggleTheme(){
  const cur=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',cur);
  localStorage.setItem('mmc-theme',cur);
  document.getElementById('themeBtn').textContent=cur==='dark'?'☀️':'🌙';
}
function openSidebar(){document.getElementById('sidebar').classList.add('open');document.getElementById('backdrop').hidden=false;}
function closeSidebar(){document.getElementById('sidebar').classList.remove('open');document.getElementById('backdrop').hidden=true;}

/* ---------- Init ---------- */
function init(){
  buildSidebar(); initTheme();
  window.addEventListener('hashchange',route);
  document.getElementById('themeBtn').addEventListener('click',toggleTheme);
  document.getElementById('menuBtn').addEventListener('click',()=>{
    const sb=document.getElementById('sidebar'); sb.classList.contains('open')?closeSidebar():openSidebar();
  });
  document.getElementById('backdrop').addEventListener('click',closeSidebar);
  const si=document.getElementById('search');
  si.addEventListener('input',e=>doSearch(e.target.value));
  si.addEventListener('focus',e=>{ if(e.target.value) doSearch(e.target.value); });
  document.addEventListener('click',e=>{ if(!e.target.closest('.search-wrap')) document.getElementById('searchResults').hidden=true; });
  document.getElementById('searchResults').addEventListener('click',()=>{document.getElementById('searchResults').hidden=true; document.getElementById('search').value='';});
  route();
  buildFullIndex();
  loadIcons().then(()=>{ const a=document.getElementById('article'); if(a) decorateIcons(a); });
}
document.addEventListener('DOMContentLoaded',init);
