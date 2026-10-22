const app=document.getElementById('app');
const store=JSON.parse(localStorage.getItem('hciquiz2')||'{}');
const save=()=>localStorage.setItem('hciquiz2',JSON.stringify(store));
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const maxOf=q=>q.o?1:(q.r||[[1]]).reduce((a,p)=>a+p[0],0);
const hit=(q,t)=>(q.r||[]).map(p=>[p,new RegExp(p[2],'i').test(t||'')]);
const autoOf=(q,t)=>q.o?0:hit(q,t).reduce((a,[p,h])=>a+(h?p[0]:0),0);
const fmt=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
let timer=null;
function home(){
  clearInterval(timer);
  app.innerHTML='<h2>Choose an exam section</h2>'+SECTIONS.map((s,i)=>{
    const st=store[s.id]||{a:{}};const n=Object.keys(st.a).filter(k=>st.a[k]!=='').length;
    const total=s.qs.reduce((a,q)=>a+maxOf(q),0);
    return `<button class="card sec" data-i="${i}"><b>${s.title}</b><div class="tag">${s.qs.length} questions · ${total} marks · ${st.done?'marked: '+st.final+'/'+total+' ('+Math.round(st.final/total*100)+'%)':n+' answered'}</div><div class="bar"><i style="width:${n/s.qs.length*100}%"></i></div></button>`}).join('');
  app.querySelectorAll('.sec').forEach(b=>b.onclick=()=>open(+b.dataset.i));
}
function open(i){
  clearInterval(timer);
  const s=SECTIONS[i];const st=store[s.id]=store[s.id]||{a:{},done:false};st.adj=st.adj||{};
  const total=s.qs.reduce((a,q)=>a+maxOf(q),0);
  if(!st.done&&!st.t0){st.t0=Date.now();save()}
  const markOf=(q,k)=>q.o?(st.a[k]===q.c?1:0):(st.adj[k]!==undefined?st.adj[k]:autoOf(q,st.a[k]));
  const sum=()=>s.qs.reduce((a,q,k)=>a+markOf(q,k),0);
  const draw=()=>{
    const n=Object.keys(st.a).filter(k=>st.a[k]!=='').length;
    app.innerHTML=`<div class="sticky"><button class="alt" id="back">← Sections</button> <b>${s.title}</b> · <span id="clock" class="tag">${fmt(Math.floor(((st.done?st.t1:Date.now())-st.t0)/1000))}</span>
      <div class="bar"><i style="width:${n/s.qs.length*100}%"></i></div><span class="tag" id="cnt">${n}/${s.qs.length} answered · ${total} marks</span></div>`+
    s.qs.map((q,k)=>{
      const mx=maxOf(q);
      let h=`<div class="card"><div class="tag">Question ${k+1} · ${mx} mark${mx>1?'s':''}${st.done?' · <b>scored '+markOf(q,k)+'/'+mx+'</b>':''}</div><p>${esc(q.q).replace(/\n/g,'<br>')}</p>`;
      if(q.o){
        h+=q.o.map((o,j)=>{let c='opt';if(st.a[k]===j)c+=' sel';if(st.done){if(j===q.c)c+=' ok';else if(st.a[k]===j)c+=' bad'}
          return `<label class="${c}"><input type="radio" name="q${k}" data-k="${k}" data-j="${j}" ${st.a[k]===j?'checked':''} ${st.done?'disabled':''}> ${esc(o)}</label>`}).join('');
        if(st.done)h+=`<div class="model"><b>Answer: ${esc(q.o[q.c])}</b>\n${esc(q.m||'')}</div>`;
      }else{
        h+=`<textarea data-k="${k}" ${st.done?'disabled':''} placeholder="Write your answer…">${esc(st.a[k]||'')}</textarea>`;
        if(st.done){
          h+=`<div class="model"><b>Marking breakdown</b>\n`+hit(q,st.a[k]).map(([p,ok])=>`${ok?'✔':'✘'} ${p[1]} (${ok?p[0]:0}/${p[0]})`).join('\n')+
          `\n\n<b>Model answer</b>\n${esc(q.m)}</div>
          <p class="tag">Keyword marking is approximate. If you covered a point in other words, adjust your mark: <input type="number" class="adj" data-k="${k}" min="0" max="${mx}" step="1" value="${markOf(q,k)}" style="width:60px"> / ${mx}</p>`;
        }
      }
      return h+'</div>'}).join('')+
    (st.done?`<div class="card"><div class="score" id="tot"></div><p id="grade"></p><button id="redo" class="alt">Rewrite exam</button></div>`
      :`<button id="fin">Submit exam &amp; get marks</button>`);
    document.getElementById('back').onclick=home;
    app.querySelectorAll('input[type=radio]').forEach(r=>r.onchange=()=>{st.a[r.dataset.k]=+r.dataset.j;save();draw()});
    app.querySelectorAll('textarea').forEach(t=>t.oninput=()=>{st.a[t.dataset.k]=t.value.trim()?t.value:'';save();
      const m=Object.keys(st.a).filter(k=>st.a[k]!=='').length;app.querySelector('.bar i').style.width=m/s.qs.length*100+'%';document.getElementById('cnt').textContent=m+'/'+s.qs.length+' answered · '+total+' marks'});
    const upd=()=>{const m=sum(),p=Math.round(m/total*100);st.final=m;save();
      const t=document.getElementById('tot');if(!t)return;t.textContent=`Final mark: ${m}/${total} (${p}%)`;
      document.getElementById('grade').textContent=p>=75?'Distinction – excellent work.':p>=50?'Pass – review the ✘ points and model answers.':'Below 50% – study the model answers and try again.'};
    app.querySelectorAll('.adj').forEach(a=>a.oninput=()=>{const q=s.qs[a.dataset.k];let v=Math.max(0,Math.min(maxOf(q),Math.round(+a.value||0)));st.adj[a.dataset.k]=v;upd()});
    if(st.done)upd();
    const f=document.getElementById('fin');if(f)f.onclick=()=>{if(n<s.qs.length&&!confirm('Some questions are unanswered and will score 0. Submit anyway?'))return;st.done=true;st.t1=Date.now();clearInterval(timer);save();draw();scrollTo(0,0)};
    const r=document.getElementById('redo');if(r)r.onclick=()=>{store[s.id]={a:{},done:false};save();open(i)};
  };draw();
  if(!st.done)timer=setInterval(()=>{const c=document.getElementById('clock');if(c)c.textContent=fmt(Math.floor((Date.now()-st.t0)/1000))},1000);
}
home();
