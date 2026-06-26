# 🔮 마법 위키

> **Medieval MC MMC4** (1.20.1 Forge) 마법 모드 통합 가이드입니다. 모드팩에는 8개의 마법 모드가 들어 있으며, 각자 완전히 다른 자원·시전 방식·테마를 가집니다.
>
> 📌 표기 규칙: **Iron's Spells / Ars Nouveau / Eidolon** 은 한국어 번역이 적용된 모드라 한글 이름으로 표기합니다. **Blood Magic / Forbidden Arcanus / Tome of Blood / Ice and Fire Spellbooks / Wizards Reborn** 는 모드팩에 한글 번역이 없어 **영문 + 의역**을 병기합니다.

---

## 1. 마법 모드 한눈에 비교

| 모드 | 테마 | 핵심 자원 | 시전 방식 | 한 줄 요약 |
|---|---|---|---|---|
| 🪄 **Iron's Spells 'n Spellbooks** | 전투 마법 10학파 | 마나(Mana) · 주문력(Spell Power) | 주문서/두루마리에 키 바인딩 시전 | 가장 직관적인 "마법사 RPG". 입문 1순위 |
| 🌿 **Ars Nouveau** | 자작 주문 (글리프 조합) | 소스(Source) | 형태+효과+증강 글리프 조합 시전 | 무한 커스텀 주문. 자동화·유틸리티 강점 |
| 💀 **Eidolon: Repraised** | 네크로맨시·강령술 | 영혼(Soul) · 시약(Reagent) | 기호(술식) 챈트 + 화롯불 의식 | 어둡고 의식 중심. 분위기 최고 |
| 🩸 **Blood Magic** | 피 제물·악마의 의지 | LP(생명 정수) · Demon Will | 인장(Sigil) 사용 + 의식(Ritual) | 피로 모든 것을 산다. 하이리스크 하이리턴 |
| 🔥 **Forbidden Arcanus** | 고대 연금·정수 제작 | Aureal · Souls · Blood · XP | 헤파이스토스 화로 제작 의식 | 강력 아이템 제작 중심의 "제작 마법" |
| 🧪 **Tome of Blood** | Ars Nouveau ⨯ Blood Magic 융합 | Source + Demon Will | Ars 글리프로 시전 | 두 모드를 잇는 애드온. 의지 기반 글리프 추가 |
| 🐉 **Ice and Fire Spellbooks** | 드래곤 사제 테마 (Iron's 애드온) | 마나(Iron's 공유) | Iron's 주문서 시전 | 드래곤 사제 장비·주문 추가 |
| 💎 **Wizards Reborn** | 수정·위센·연금 산업 마법 | Wissen(지식 에너지) · 수정 | 완드 + 렌즈 + 위센 회로 | 마법을 "기계처럼" 다루는 테크-마법 |

---

## 2. 🪄 Iron's Spells 'n Spellbooks (가장 중요)

이 모드팩 마법의 중심. **마나(Mana)** 를 소모해 주문을 시전하고, 주문의 위력은 **주문력(Spell Power)** 에 비례합니다. 모든 주문은 **10개 학파(School)** 중 하나에 속합니다.

### 🎓 10개 학파

| 학파 | 룬/강화 구슬 | 테마 | 대표 주문 |
|---|---|---|---|
| 🔥 **화염(Fire)** | 화염의 룬 / 화염 강화 구슬 | 폭발·화상·돌진 | 화염구, 화염의 숨결, 화염의 벽, 불폭풍 |
| ❄️ **얼음(Ice)** | 얼음의 룬 / 얼음 강화 구슬 | 동결·둔화 | 냉기의 원뿔, 고드름, 얼음 덩어리, 서리 걸음 |
| ⚡ **번개(Lightning)** | 번개의 룬 / 번개 강화 구슬 | 즉발 고화력·기동 | 감전, 번개의 창, 연쇄 번개, 번개 걸음, 승천 |
| ✨ **신성(Holy)** | 신성의 룬 / 신성 강화 구슬 | 치유·버프·대언데드 | 치유, 강력한 치유, 태양 광선, 신성한 일격, 유도 볼트 |
| 🌀 **엔더(Ender)** | 엔더의 룬 / 엔더 강화 구슬 | 순간이동·회피 | 순간이동, 회피, 차원문, 심연의 장막, 염력 |
| 🩸 **피(Blood)** | 피의 룬 / 피 강화 구슬 | 흡혈·자해 코스트 | 피의 베기, 피의 걸음, 심장 정지, 피의 바늘, 침술 |
| 👻 **소환(Evocation)** | 소환의 룬 / 소환 강화 구슬 | 소환수·소환사 송곳니 | 벡스 소환, 송곳니 타격, 죽은 자의 소생, 위더 해골 |
| 🕳️ **공허(Void)** | (엔더 계열 강화) | 끌어당김·혼란 | 블랙홀, 공허의 촉수, 스컬크 촉수, 음파 폭발 |
| 🌱 **자연(Nature)** | 자연의 룬 / 자연 강화 구슬 | 독·산·식물·방어 | 독의 숨결, 산 구슬, 뿌리, 오크 가죽, 지진 |
| 👁️ **엘드리치(Eldritch)** | 신비의 룬 | 금단의 고대 마법 | 엘드리치 폭발 등 (필사본으로 학습) |

> 💡 각 학파마다 **주문력 속성**이 따로 존재합니다(예: `화염 주문력`, `신성 주문력`). 해당 학파 주문력이 높을수록 그 학파 주문이 강해집니다. 마찬가지로 학파별 **마법 저항**(예: `화염 마법 저항`)도 존재합니다.

### 📖 주문서(Spellbook) 티어

주문서는 등급(희귀도)이 높을수록 **주문 슬롯 수**와 **부여 마법 슬롯**이 많아집니다. 주요 주문서:

| 주문서 | 비고 |
|---|---|
| 약한 일기 / 철제 책 / 수습생의 주문서 | 초반 저티어 |
| 마법이 부여된 주문서(다이아) | 중급 |
| **고대의 서(네더라이트)** | 최상위 일반 주문서 |
| 소환사의 마법서, 네크로노미콘, 환영의 책, 블레이즈 교본, 드래곤 가죽 주문서, 구인의 지팡이 | **유니크** 주문서 (특정 학파 특화·고정 주문) |

> 잉크 등급: **일반 → 고급 → 희귀 → 영웅 → 전설 잉크**. 잉크 등급이 주문서에 새길 수 있는 두루마리(주문)의 최대 희귀도를 결정합니다.

### ⚙️ 시전·각인 흐름

```
두루마리(Scroll) 획득  →  각인 테이블에서 주문서에 새김  →  주문 휠/빠른 시전 키로 시전
```

1. **두루마리 대장간(Scroll Forge)**: 잉크 + 룬 + 재료로 원하는 주문 **두루마리** 제작.
2. **각인 테이블(Inscription Table)**: 두루마리 + 잉크로 주문서 슬롯에 주문을 **새김(각인)**. (주문서 등급보다 두루마리가 너무 희귀하면 거부)
3. 시전: `주문 휠 열기` 키로 주문 선택 후 `선택된 주문 시전`, 또는 `빠른 시전 슬롯 1~15` 키 사용.
4. 시전 타입은 주문마다 다름: **즉시 시전 / 긴 시전 / 지속 시전 / 충전 시전**.

> 🛠️ 관련 블록: 각인 테이블, 두루마리 대장간, **신비한 모루(Arcane Anvil)** — 주문서에 주문을 **주입(Imbue)**·강화하거나 **정화의 돌(Shriving Stone)** 로 주입 제거.

### 🔼 강화(업그레이드) 시스템

- **강화 구슬(Upgrade Orb)**: 빈 강화 구슬 + 학파 룬으로 제작. 신비한 모루에서 장비·주문서에 적용해 해당 속성을 올림.
  - 학파 구슬(화염/얼음/번개/신성/엔더/피/소환/자연) → 해당 학파 **주문력 +**
  - **마나 강화 구슬** → 최대 마나 +
  - **쿨타임 강화 구슬** → 쿨타임 감소
  - **보호 강화 구슬** → 방어
- **룬(Rune)**: 빈 룬석에 정수를 부여해 학파 룬 제작 → 강화 구슬 재료로 사용.
- 주요 속성: `최대 마나`, `마나 재생`, `주문력`(+학파별), `시전 시간 감소`, `쿨타임 감소`, `소환 피해`, `주문 저항`.

### 🧙 마법사 장비 세트 (학파별 특화)

화염술사 / 전기술사 / 냉기술사 / 고대 소환사(Archevoker) / 이교도(Cultist) / 사제(Priest) / 그림자 행인 / 역병(Plagued) / 떠돌이 마법사 / **네더라이트 전투 마법사** 세트 등. 각 세트는 대응 학파 주문력·마나를 보강합니다.

### 🍵 소모품·장신구 예시
- **시전자의 차**: 활성 주문 쿨타임 -15%
- **집중의 목걸이**: 긴 시전이 중단되지 않게 함
- 마나 반지 / 회복의 반지(쿨타임) / 속도의 반지(시전 시간) / 화염·독·동결 방어 반지(면역)
- 오크 가죽 엘릭서(피해 감소), 회피 엘릭서, 투명화 엘릭서

---

## 3. 🌿 Ars Nouveau

**직접 주문을 조합**하는 모드. 글리프를 **[형태] → [효과] → [증강]** 순으로 배열해 무한한 커스텀 주문을 만듭니다. 자원은 **소스(Source / 마력)**.

### 🧩 글리프 구조

| 분류 | 역할 | 예시 글리프 |
|---|---|---|
| **형태(Form)** | 주문이 어떻게 발사/적용되는가 | 투사체, 접촉, 셀프(자신), 파열(범위 구체), 궤도, 발아래 |
| **효과(Effect)** | 실제로 일어나는 일 | 피해(Harm), 치유(Heal), 파괴(Break), 점화(Ignite), 폭발, 순간이동(Blink), 성장(Grow), 동결(Freeze) |
| **증강(Augment)** | 효과를 변형·강화 | 증폭, 광역화, 시간 연장, 섬세함, 관통, 분열, 약화, 행운, 가속/감속 |

> 예: `투사체 + 파괴 + 증폭` = 멀리 날아가 단단한 블록도 부수는 채광 주문. `자신 + 활공`, `접촉 + 성장(뼛가루 효과)` 등 조합이 자유롭습니다.

### 📓 마도서 티어 & 제작 흐름

```
견습생의 마도서  →  마법사의 마도서  →  대마법사의 마도서
(낮은 글리프 슬롯)        (중간)              (최대 슬롯·복잡한 주문)
```

- **낡은 공책(Worn Notebook)**: 인게임 가이드북. 모든 글리프·기계 설명 수록.
- **서기 테이블(Scribes Table)**: 글리프 두루마리를 마도서에 등록(학습).
- **마법 부여 장치(Enchanting Apparatus)** + 받침대: 마법 아이템·글리프 제작의 핵심 멀티블록.
- **주입 챔버(Imbuement Chamber)**: 기본 재료(소스 보석 등) 주입 제작.

### 🔋 소스(Source) 생산

- **마력단지(Source Jar)** 에 소스를 저장.
- **마력생산기(Sourcelink)** 로 소스 생산:
  - **농작물 마력생산기(Agronomic)** — 작물 성장으로 생산
  - **연금술 마력생산기(Alchemical)** — 물약 소모로 생산
  - **화산성 마력생산기(Volcanic)** — 가연성 아이템 연소로 생산(아크우드 통나무가 효율 ↑)
- 마력생산기 → 가장 가까운 마력단지에 자동 저장.

> 🌳 전용 나무 **아크우드(Archwood)** 와 자동화 정령(스타벙클·드리그미·휘를리스프리그·위시 등)으로 자원 자동화가 강력합니다.

---

## 4. 💀 Eidolon: Repraised

**강령술·네크로맨시** 테마. 두 갈래 — **기호(술식) 챈트**와 **화롯불 의식**.

### 🔣 기호(술식, Sign)와 챈트

5종 기호를 순서대로 **외쳐(Chant)** 마법을 시전합니다.

| 기호 | 이름 |
|---|---|
| 사악한(Wicked) | 어둠·강령 계열 |
| 신성한(Sacred) | 빛·치유 계열 |
| 피의(Blood) | 생명력 대가 |
| 영혼(Soul) | 영혼 조작 |
| 마음(Mind) | 정신 계열 |

> 술식은 **지식의 에클레시아(Codex / 가이드북)** 를 통해 해금됩니다("해금됨: %s 술식").

### 🔥 화롯불(Brazier) 의식(Ritual)

화롯불 + 제물 아이템(및 전달체 `의식용 화로 전달체`)로 의식 수행:

| 의식 | 효과 |
|---|---|
| 결정화 의식 | 영혼 결정 생성 |
| 소환 의식 | 몹 소환 |
| 매혹 의식 / 반발 의식 | 몹 유인 / 퇴치 |
| 속임 의식 | 변장·기만 |
| 시간 의식 (햇빛/달빛) | 낮·밤 전환 |
| 정화 의식 | 정화 |

### ⚗️ 자원 & 핵심 블록

- **영혼(Soul)**: 영혼 조각 → 소량 영혼 보석 등으로 가공. **영혼 마법 부여대(Soul Enchanter)** 의 동력.
- **백랍(Pewter)**: 납 기반 합금. 마법에 비활성이라 도구·상감 제작에 사용.
- **시약(Reagent)**: 황 / 죽음의 정수 / 정제된 진홍빛 / 엔드 횟가루 — 도가니에서 제조.
- **블록**: 도가니(Crucible), 마법 작업대(Worktable), 화롯불(Brazier), 원로 조각상(Unholy Effigy), 밀짚 인형(Straw Effigy), 마법의 재(Enchanted Ash, 언데드 차단).
- **도구**: 새핑 소드(생명력 흡수), 소울파이어 지팡이(마법 불꽃), 혹한의 지팡이(냉기).

---

## 5. 🩸 Blood Magic *(영문 + 의역)*

피를 자원으로 쓰는 어둠의 마법. 두 축 — **LP 기반 인장/제단**과 **악마의 의지(Demon Will)** 기반 헬파이어 단조.

### 🩸 LP(Life Points / 생명 정수)와 피의 제단

- **Blood Altar(피의 제단)**: 플레이어 자해(Sacrificial Knife / 희생용 단검) 또는 몹 제물(Dagger of Sacrifice / 제물용 단검)로 **LP**를 채움.
- **Blood Orb(피의 오브)**: LP를 담는 그릇 = 티어 게이팅. 등급이 곧 진척도:
  - Weak(약한) → Apprentice(견습) → Magician(마법사) → Master(달인) → **Archmage(대마법사)** Blood Orb
- 제단은 주변에 **룬(Rune)** 을 깔아 강화: Rune of Capacity(용량), Speed Rune(속도), Sacrifice/Self Sacrifice Rune(제물 효율), Rune of the Orb(오브 용량), Displacement·Charging·Acceleration Rune 등. 각 룬은 *Reinforced(강화판)* 버전 존재.

### 🔯 인장(Sigil)

LP를 소모해 발동하는 휴대용 도구. 예시:
- **Divination Sigil(점술 인장)** — 제단/네트워크 LP 확인 (입문 필수 첫 제작품)
- Sigil of the Green Grove(초록 숲 인장, 작물 성장), Sigil of the Fast Miner(신속 채굴), Sigil of the Blood Lamp(피의 등불), Lava Sigil(용암), Sigil of the Frozen Lake(빙결), Air Sigil(공기) 등.
- 인장은 **각인 도구(Inscription Tool: Air/Fire/Earth/Dusk…)** 와 **시약(Reagent)** 으로 제작.

### 🕯️ 의식(Ritual)

**Master Ritual Stone(마스터 의식석)** 을 중심으로 속성별 **Ritual Stone**(Air/Earth/Fire/Water/Dusk/Dawn)을 배치 → 각인 도구로 활성화. 예시:
- **Well of Suffering(고통의 우물)** — 주변 몹을 제물로 제단에 LP 자동 공급 (사망 메시지: *"died in a Well of Suffering"*)
- Ritual of the Shepherd(목자의 의식, 번식 가속), Reverence of the Condor(비행), Ritual of Containment(포획), Ritual of Living Evolution(생체 갑옷 강화) 등.

### 👹 악마의 의지(Demon Will)

몹 처치로 얻는 **Demon Will**. 5가지 속성으로 분화:

| 속성 (의역) | 특징 |
|---|---|
| **Raw**(순수) | 기본형. 양 기반 효과 |
| **Corrosive**(부식) | 독·약화 계열 |
| **Vengeful**(복수) | 속도·기동 |
| **Destructive**(파괴) | 공격력 |
| **Steadfast**(견고) | 방어·흡수 |

- **Hellfire Forge(헬파이어 단조)** 에서 의지로 결정(Will Crystal)·촉매(Catalyst)·센티언트 장비 제작.
- **Demon Will Aura Gauge(의지 오라 게이지)** 로 주변 의지 농도 측정.
- **Soul Snare(영혼 올가미)**, **Tartaric Gem(타르타로스 보석)** 으로 의지 수집·저장.

---

## 6. 🧪 Tome of Blood *(Ars Nouveau ⨯ Blood Magic 융합, 영문 + 의역)*

Ars Nouveau에 **Blood Magic의 악마의 의지**를 결합하는 애드온. Ars 글리프로 시전하되 **Demon Will**을 소모합니다.

- **Tome of Blood(피의 서)** 티어: Novice(초급) → Apprentice(견습) → **Archmage(대마법사)**.
- 추가 글리프 (Ars 학파 `Blood Magic` 분류):
  - **Sentient Harm(센티언트 가해)** — 인벤토리 내 의지에 비례해 피해. 처치 시 Raw Will 드랍. 의지 속성별 디버프 부여: Raw=독, Corrosive=시듦, Vengeful=약화, Steadfast=둔화, Destructive=취약(Vulnerable).
  - **Sentient Wrath(센티언트 분노)** — 첫 타격 시 대상 표식, 표식된 대상 공격 시 광역 강타. 처치 시 속성별 버프: Corrosive=저항, Vengeful=신속, Steadfast=흡수, Destructive=주문력.
- **Heretic's(이단자) 로브 세트**, **Mint Tea(민트 차)** 등 보조 아이템. *Living Armor* 업그레이드 "Mana Attunement(마나 공명)" 제공.
- LP가 부족하면 *"Your soul feels weak.."(영혼이 약해진 느낌)* 경고.

---

## 7. 🐉 Ice and Fire Spellbooks *(Iron's 애드온, 영문 + 의역)*

**Ice and Fire(드래곤)** 테마를 Iron's Spellbooks에 얹은 작은 애드온. Iron's의 마나·시전 시스템을 그대로 사용합니다.

- **Dragonmancer's Oathbook(드래곤술사의 서약서)** — 전용 주문서.
- **Dragon Priest Staff(드래곤 사제 지팡이)**: 기본 / Infernal(화염) / Glacial(빙결) / Thunderous(번개) 변종.
- **Dragon Priest 방어구 세트**: Fire / Ice / Lightning 3계열 (사제 로브·바지·부츠·투구).
- 드래곤어 이름의 가면 아이템들(예: *Yolnahjun, Strunlokkren …*)과 **Wooden Mask(나무 가면, "이상한 주파수로 진동" — WIP)**.

> ⚠️ 이 애드온은 항목 수가 적고 일부는 미완성(WIP) 표기입니다.

---

## 8. 💎 Wizards Reborn *(영문 + 의역)*

마법을 **기계·회로처럼** 다루는 테크-마법. 핵심 자원은 **Wissen(비센, 지식 에너지)** 과 **5속성 수정(Crystal)**.

### 🔷 수정(Crystal) — 5속성, 성장·세공 단계

속성: **Earth(땅) / Water(물) / Air(공기) / Fire(불) / Void(공허)**.

```
Crystal Seed(씨앗)  →  Crystal Growth(성장)  →  수확
Fractured(균열)  →  Earth Crystal(기본)  →  Faceted(세공)
→ Advanced(상급) → Masterful(장인) → Pure(순수)
```

세공 등급이 높을수록 마법 효율·품질이 향상됩니다.

### 🧠 Wissen(비센) 인프라

| 블록 | 역할 (의역) |
|---|---|
| Wissen Altar(비센 제단) | 비센 생성·핵심 작업대 |
| Wissen Translator / Crystallizer | 비센 변환 / 결정화 |
| Wissen Cell / Storage | 비센 저장 |
| Wissen Sensor / Activator | 비센 감지 / 신호 활성화 (회로 구성) |
| Arcane Workbench(비전 작업대) | 마법 아이템 제작 |
| Jeweler Table(보석 세공대) | 수정 가공·렌즈/장신구 |
| Alchemy Furnace / Machine / Boiler | 연금술 가공 라인 |

### 🪄 완드·시전

- **Arcane Wand / Wissen Wand / Blazing Wand(비전·비센·작열 완드)** — 수정(렌즈)을 장착해 주문 시전.
- **Knowledge Scroll(지식 두루마리)** · **Spell Scroll(주문 두루마리)** 로 지식/주문 획득.
- **Wissen Ring / Keychain(비센 반지·키체인)** 으로 비센 휴대.
- **Inventor Wizard(발명가 마법사) 세트** — 전용 마법사 복장.
- 전용 금속 **Arcane Gold(비전 황금)** 와 나무 **Arcane Wood(비전 목재)** 로 도구·구조물 제작.

---

## 9. 🔥 Forbidden Arcanus *(영문 + 의역)*

전투보다 **강력 아이템 제작(제작 마법)** 에 집중하는 모드. 핵심은 **헤파이스토스 화로** 의식 제작과 4종 정수.

### ⚒️ Hephaestus Forge(헤파이스토스 화로)

멀티블록 제작 의식 장치. 레시피마다 **4종 정수(Essence)** 를 요구:

| 정수 (의역) | 획득 |
|---|---|
| **Aureal**(오레알, 마력 정수) | Aureal Bottle / 환경에서 포집 |
| **Souls**(영혼) | 몹 영혼 |
| **Blood**(피) | 자해·몹 |
| **Experience**(경험치) | XP 소모 |

- **강화재(Enhancer)** 로 의식 비용 조정: *Crescent Moon*(시간대에 따라 Aureal 절감), *Soul Crimson Stone*(한 의식의 정수 요구 완전 제거) 등.

### 🌳 자원·재료

- **Edelwood(에델우드)**: 살아있는 나무 → 통나무·막대·기름. **Edelwood Bucket(에델우드 양동이)** 은 다양한 액체/몹을 담는 특수 양동이.
- **Deorum(데오룸)**: 신성 금속 (주괴·블록·유리·문).
- **Arcane Crystal(비전 수정)** / Corrupted(타락) 변종, **Mundabitur Dust(문다비투르 가루)**, **Dark Matter(암흑 물질)**, **Stellarite(스텔라라이트)**.
- **Clibano(클리바노)**: 고효율 제련 멀티블록 화로.
- **Obsidian Skull / Eternal Obsidian Skull(흑요석 해골)** — 사망 시 아이템 보호 부적류.
- **Spectral Eye Amulet(영시의 부적)** — 영시(Spectral Vision) 효과.

---

## 10. 🚀 입문 추천 — 어떤 마법부터?

| 추천 순위 | 모드 | 이유 |
|---|---|---|
| 🥇 1순위 | **Iron's Spells** | 키 한 번에 시전되는 직관적 전투 마법. 초반 두루마리만 모으면 바로 강해짐 |
| 🥈 2순위 | **Ars Nouveau** | 글리프 조합으로 유틸·자동화·전투 모두 커버. 낡은 공책 가이드가 친절 |
| 🥉 3순위 | **Eidolon** | 분위기·로어 중심. 챈트/의식이 손에 익으면 강력한 강령술사 |
| 심화 | **Blood Magic** | 진척이 가파르고 위험(자해·제물). 보상은 최상위 |
| 제작형 | **Forbidden Arcanus / Wizards Reborn** | 강력 아이템·테크 마법을 원할 때 |

> 💬 **추천 루트**: Iron's Spells로 전투 기반을 잡고 → Ars Nouveau로 자동화/유틸 보강 → 취향에 따라 Eidolon(어둠) 또는 Blood Magic(하드코어)로 심화.

### 🧝 종족 시너지 (요약)

- **고위 엘프(High Elf)**: 마법 특화 — 마나·주문력 보정으로 Iron's Spells / Ars Nouveau 시전자에 유리.
- **레버넌트(Revenant)**: 피·영혼 친화 — Blood Magic의 LP/제물, Eidolon의 영혼·강령술과 테마 시너지.

> 종족별 정확한 수치·패시브는 `1_종족_가이드.md` 참고.

---

📚 **함께 보기**
- 종족별 마법 시너지: **`1_종족_가이드.md`**
- 마법 도구·장비·재료 아이템: **`8_아이템_위키.md`**
- 마법 자원(소스·LP·영혼·수정 등) 수급: **`12_자원_위키.md`**
