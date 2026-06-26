# Medieval MC MMC4 한글 위키 (정적 사이트)

마인크래프트 1.20.1 **Medieval MC [FORGE] MMC4** 모드팩 한글패치 · 설치 / 플레이 / 위키 사이트입니다.

- **빌드 불필요**한 순수 정적 사이트(HTML/CSS/JS + Markdown). GitHub Pages에 그대로 올리면 동작합니다.
- 콘텐츠는 `content/` 폴더의 마크다운(`.md`)이고, `assets/app.js`가 클라이언트에서 렌더링합니다.

## 폴더 구조
```
website/                ← 이 폴더 내용을 그대로 깃허브 저장소에 올립니다
├─ index.html           ← 진입점
├─ .nojekyll            ← GitHub Pages Jekyll 비활성(그대로 두세요)
├─ assets/
│  ├─ style.css         ← 나무위키풍 디자인(라이트/다크)
│  ├─ app.js            ← 라우터·마크다운 렌더·목차·검색·아이콘 도감
│  ├─ img/              ← 모드팩 로고
│  └─ icons/            ← 아이템·블록 아이콘 7,840개를 합친 스프라이트 아틀라스 4장 + catalog.json
│                          (개별 PNG 대신 합본이라 파일 수가 적어 업로드가 쉬움)
├─ downloads/           ← 한글패치 zip (설치 페이지에서 다운로드)
└─ content/
   ├─ install/install.md
   ├─ guide/  (race, class, mount, todo, boss-hunting)
   ├─ wiki/   (weapon, armor, prod-tools, item, structure, prod-item, biome, resource, boss, monster)
   └─ detail/ (overview, fishing, mining, building, structurize, revenant, yeti, cook, prod-tools-detail)
```

## 로컬 미리보기
브라우저로 `index.html`을 **더블클릭하면 안 됩니다**(file:// 보안정책으로 마크다운 로드 실패).
간단한 로컬 서버로 여세요:
```bash
cd website
python3 -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 콘텐츠 수정
- 글 내용을 바꾸려면 `content/**/*.md` 를 수정하고 다시 푸시하면 끝입니다.
- 새 문서를 추가하려면: `content/`에 `.md`를 넣고, `assets/app.js`의 `PAGES` 배열에 항목 1줄을 추가하세요.

> 배포 방법은 작업 폴더의 **`배포_가이드.md`** 를 참고하세요.
