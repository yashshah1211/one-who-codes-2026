"""Zero-dependency offline integrity checks for static portfolio source.
Does not replace a real browser accessibility audit.
"""
from html.parser import HTMLParser
from pathlib import Path
import re,subprocess
ROOT=Path(__file__).resolve().parent.parent
class Inspector(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.links=[];self.scripts=[];self.buttons=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag=='a' and 'href' in a:self.links.append(a['href'])
  if tag=='script' and 'src' in a:self.scripts.append(a['src'])
  if tag=='button':self.buttons.append(a)
h=(ROOT/'index.html').read_text(encoding='utf8');p=Inspector();p.feed(h)
assert len(set(p.ids))==len(p.ids),'duplicate ids'
assert all((ROOT/x).is_file() for x in ['index.html','styles.css','app.js','assets/favicon.svg'])
assert all((ROOT/u).exists() for u in p.scripts),'missing scripts'
for a in p.links:
 if a.startswith('#'):assert a[1:] in p.ids, f'broken anchor {a}'
assert sum('data-open' in x for x in p.buttons)==6,'six case-file buttons required'
assert sum('data-filter' in x for x in p.buttons)==4,'four filters required'
js=(ROOT/'app.js').read_text(encoding='utf8')
assert js.count('index:')==6,'six verifiable case files required'
assert 'case-dialog' in h and 'dialog.showModal()' in js
assert 'https://youtu.be/6q3VOIfEyb8' in js
assert not re.search(r'(?:AIza[0-9A-Za-z_-]{35}|sk-[A-Za-z0-9_-]{20,})',h+js)
subprocess.run(['node','--check',str(ROOT/'app.js')],check=True)
print('PASS: unique IDs, all resources, anchors, six cases, four filters, no obvious embedded keys, JS syntax')
