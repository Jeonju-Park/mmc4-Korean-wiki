# 🏰 구조물 위키 — Medieval MC MMC4

> Medieval MC MMC4 (1.20.1 Forge) 가 추가하는 **구조물·던전·보스 아레나·차원 구조물** 총정리 위키.
> 모드팩 실제 파일(`en_us.json` / `ko_kr.json`, 어드밴스먼트·탐험가 지도·구조물 ID)에 근거합니다.
> 한국어 번역이 있는 모드는 번역명을 우선 사용하고, 미번역 모드는 **영문 + 의역**을 병기하며 그 사실을 표기했습니다.
> ⚠️ 파일에 명시되지 않은 전리품/보스 정보는 추측하지 않고 "확인 필요"로 표기합니다.

## 목차
1. [개요](#1-개요)
2. [오버월드 던전·탑](#2-오버월드-던전탑)
3. [바닐라 강화 구조물 (Better~ 시리즈)](#3-바닐라-강화-구조물-better-시리즈)
4. [보스 구조물·아레나](#4-보스-구조물아레나)
5. [차원 구조물](#5-차원-구조물)
6. [습격·기타](#6-습격기타)
7. [추천 탐험 순서 (난이도순)](#7-추천-탐험-순서-난이도순)

---

## 1. 개요

이 모드팩은 바닐라 구조물 외에 **수십 종의 모드 구조물**을 월드 전역에 추가합니다. 출처별로 성격이 다릅니다.

| 출처 모드 | 추가하는 것 | 비고 |
|---|---|---|
| **When Dungeons Arise** (`dungeons_arise`) | 대형 던전·탑·요새·해상 구조물 30종 이상 | 미번역(영문) |
| **YUNG's Better Dungeons** (`betterdungeons`) | 몬스터 룸·카타콤·스파이더 케이브·언데드 요새·네더 던전 | 미번역 |
| **Stalwart Dungeons** (`stalwart_dungeons`) | 네더/엔드 던전, 보스급 몹과 텅스텐·코룬덤 장비 | 미번역 |
| **Dungeons Enhanced** (`dungeons_enhanced`) | 성·미로·사막신전·정글기념비·해적선·검은 성채 등 | 미번역 |
| **YUNG's Better ~ 시리즈** | 바닐라 구조물(사막신전·요새·정글신전·해양기념비·요새/Stronghold·마녀집·폐광)을 대폭 확장 | 미번역(설정 기반) |
| **Cataclysm** (`cataclysm`) | 보스 아레나·신전·고대 구조물(보스 소환·전리품) | **한국어 번역 있음** |
| **Bosses of Mass Destruction** (`bosses_of_mass_destruction`) | 차원별 보스(구조물 없이 자연 스폰형 다수) | 미번역 |
| **Ice and Fire** (`iceandfire`) | 드래곤 둥지·사이클롭스 동굴·고르곤 신전·픽시 마을·미르멕스 둥지·묘지 | **한국어 번역 있음** |
| **차원 모드** | 황혼의 숲·에테르·언더가든·딥다크(Otherside)·블루 스카이의 던전/구조물 | 일부 번역 |
| **습격 모드** (`raided` / `illagerinvasion`) | 바닐라 습격에 새로운 일리저 유닛 추가 | 미번역 |
| **End Remastered** (`endrem`) | 엔드 포탈을 16종 고유 "눈(Eye)" 수집 방식으로 변경 | 미번역 |

### 구조물 찾는 법 (공통)
- **탐험가 지도**: Dungeons Arise / Dungeons Enhanced / Blue Skies 던전은 카토그래퍼·상인 등에서 **탐험가 지도**(Explorer Map)를 구매·획득할 수 있습니다(파일에 `filled_map.*` 다수 확인).
- **`/locate structure <id>`**: Better~ 시리즈는 파일에 직접 `/locate structure` 명령이 안내됩니다. (예: `betterstrongholds:stronghold`, `betterdeserttemples:desert_temple` 등)
- **JourneyMap / Map Frontiers**: 모드팩에 미니맵·지도 모드가 포함되어 탐험에 활용 가능합니다.

---

## 2. 오버월드 던전·탑

### 2-1. When Dungeons Arise (미번역 — 영문 + 의역)
이 모드 단독으로 가장 많은 대형 구조물을 추가합니다. 아래는 파일의 **탐험가 지도/어드밴스먼트**로 확인된 구조물 목록입니다(전리품 상세는 파일 미기재 — 확인 필요).

| 영문명 | 의역 | 분류 | 비고 |
|---|---|---|---|
| Monastery | 수도원 | 지상 던전 | 탐험가 지도 존재 |
| Abandoned Temple | 버려진 신전 | 지상 던전 | 어드밴스먼트 "Lost for Words" |
| Coliseum | 콜로세움 | 대형 투기장 | 탐험가 지도 존재 |
| Lighthouse | 등대 | 해안 구조물 | "The Lighthouse" |
| Infested Temple | 감염된 신전 | 던전 | "Super Creeps" |
| Foundry | 주조소 | 산업 구조물 | "Iron Maiden" |
| Mining System | 광산 시스템 | 지하 던전 | 탐험가 지도 존재 |
| Scorched Mines | 그을린 광산 | 지하 던전 | 탐험가 지도 존재 |
| Bandit Village / Bandit Towers | 산적 마을 / 산적 탑 | 적대 거주지 | "Rusted Root" / "What Happens in Las Vegas..." |
| Merchant Campsite | 상인 야영지 | 평화 구조물 | 탐험가 지도 존재 |
| Fishing Hut | 낚시 오두막 | 소형 구조물 | "Fishing In The Dark" |
| Small Prairie House | 작은 초원집 | 소형 구조물 | 탐험가 지도 존재 |
| Wishing Well | 소원의 우물 | 소형 구조물 | 탐험가 지도 존재 |
| Greenwood Pub | 그린우드 선술집 | 소형 구조물 | "Find a Greenwood Pub" |
| Bathhouse | 목욕탕 | 소형 구조물 | "Find a Bathhouse" |
| **Illager Campsite / Hall / Fort / Castle / Windmill** | 일리저 야영지 / 홀 / 요새 / 성 / 풍차 | 일리저 거점(난이도 상승순) | 탐험가 지도 다수 |
| **Illager Corsair / Galley** | 일리저 사략선 / 갤리선 | 해상 일리저 함선 | "You Are A Pirate" |
| **Undead Pirate Ship** | 언데드 해적선 | 해상 던전 | 탐험가 지도 존재 |
| **Mushroom Village / House / Mines** | 버섯 마을 / 집 / 광산 | 버섯 바이옴 구조물 | 다수 |
| Giant Mushroom | 거대 버섯 | 자연/구조 | "A Saucerful of Secrets" |
| **Small Blimp** | 소형 비행선 | 공중 구조물 | 탐험가 지도 존재 |
| **Aviary** | 조류원 | 공중/탑 | "Three Little Birds" |
| **Heavenly Rider / Conqueror / Challenger** | 천상의 기수 / 정복자 / 도전자 | 공중 고난도 구조물(시리즈) | 탐험가 지도 다수, 후반 콘텐츠 |
| **Typhon** | 티폰 | 대형 보스급 구조물 | 탐험가 지도 존재 |
| **Ceryneian Hind** | 케리네이아의 암사슴 | 특수 구조물 | "Who Killed This Thing?" |
| **Shiraz Palace** | 시라즈 궁전 | 대형 궁전 | "Find the Shiraz Palace" |
| **Keep Kayra** | 카이라 성채 | 대형 요새 | "Find Keep Kayra" |
| **Plague Asylum** | 역병 수용소 | 던전 | "Find a Plague Asylum" |
| **Thornborn Towers** | 가시나무 탑 | 탑 구조물 | "Visit the Thornborn Towers" |
| **Mechanical Nest** | 기계 둥지 | 후반 구조물 | "Find a Mechanical Nest" |

> 일반적으로 **소형 → 일리저 거점 → 대형 궁전/공중(Heavenly) 구조물** 순으로 난이도가 올라갑니다. 정확한 전리품은 파일에 없으므로 직접 탐험하여 확인하세요.

### 2-2. Dungeons Enhanced (미번역 — 영문 + 의역)
| 영문명 | 의역 | 비고 |
|---|---|---|
| Monster Maze | 몬스터 미로 | "Hidden under Roots" (뿌리 아래 숨겨짐) |
| Large Dungeon | 대형 던전 | "What a Dungeon!" |
| Desert Temple | 사막 신전 | 함정·저주 ("Traps and Curses") |
| Jungle Monument | 정글 기념비 | 고대 문명 |
| Castle | 성 | 잊혀진 전쟁과 왕국 |
| Mushroom House | 버섯집 | "Rarest Structure?" (가장 희귀?) |
| Ice Pit | 얼음 구덩이 | "Chilled Halls" |
| Pirate Ship | 해적선 | "Ahoy, Captain!" |
| Flying Dutchman | 플라잉 더치맨(유령선) | 공중 구조물 |
| Elder's Temple | 장로의 신전 | 수중 던전 ("Sunken in the Depths") |
| Black Citadel | 검은 성채 | "Spooky Scary Citadel" |

> 어드밴스먼트 "Seven Wonders of the World"(세계 7대 불가사의) — 가장 거대한 7개 구조물 탐험. 일부는 탐험가 지도(Castle/Desert/Monster/Elder)로 찾을 수 있습니다.

### 2-3. YUNG's Better Dungeons (미번역 — 영문 + 의역)
바닐라 던전 룸을 확장·대체합니다.

| 영문명 | 의역 | 비고 |
|---|---|---|
| (Upgraded) Monster Room | 강화된 몬스터 룸 | "Quite the Renovation" |
| Fortress of the Undead | 언데드 요새 | 스켈레톤 던전 ("A Bone to Pick") |
| Spider Cave | 거미 동굴 | "Cobweb Entanglement" |
| Catacomb | 카타콤 | 좀비 던전 ("When in Rome") |
| Small Nether Dungeon | 소형 네더 던전 | 네더 전용 |

### 2-4. Stalwart Dungeons (미번역 — 영문 + 의역)
네더·엔드 던전과 고유 몹·장비를 추가합니다. 파일에서 확인되는 핵심 요소:
- **네더 던전**: `Nether Keeper`(네더 키퍼)·`Awful Ghast`(끔찍한 가스트)·`Incomplete Wither`(불완전한 위더)·`Nether Wart Cocoon`(네더 사마귀 고치) 등장. `Nether Keeper Altar`(네더 키퍼 제단)로 보스 소환 추정.
- **엔드 던전**: `Shelterer`(은신자)·`Shulker Cannon`(셜커 대포)·`Void Crystal`(공허 수정) 등. `End Dungeon Spawner`(엔드 던전 스포너) 존재.
- **고유 장비**: `Tungsten`(텅스텐) 풀세트·도구, `Chorundum`(코룬덤) 방어구·방패·검. (장비 상세는 `6_방어구_위키.md` 참고)

---

## 3. 바닐라 강화 구조물 (Better~ 시리즈)

YUNG's Better~ 시리즈는 **바닐라 구조물을 통째로 대체·확장**합니다. 대부분 바닐라 버전을 비활성화(설정)하고 자신의 버전을 생성합니다. `/locate structure` ID는 파일에 직접 안내됩니다.

| 모드 | 대체 대상 | `/locate` ID | 특징(파일 근거) |
|---|---|---|---|
| **Better Desert Temples** | 사막 피라미드 | `betterdeserttemples:desert_temple` | 미클리어 시 채굴 피로 적용 옵션, 바닐라 피라미드 비활성화 |
| **Better Jungle Temples** | 정글 신전 | `betterjungletemples:jungle_temple` | 독침 다트(Pick Your Poison 호환) |
| **Better Strongholds** | 요새(Stronghold) | `betterstrongholds:stronghold` | 거미줄·횃불·랜턴 스폰율 조정, 거미 스포너 도서관 |
| **Better Mineshafts** | 폐광 | `#bettermineshafts:better_mineshafts` | y좌표·광맥·작업대·랜턴 스폰 설정, 광석 매장 |
| **Better Witch Huts** | 마녀 오두막 | `betterwitchhuts:witch_hut` | 확장된 마녀집 |
| **Better Ocean Monuments** | 해양 기념비 | `betteroceanmonuments:ocean_monument` | 바닐라 기념비 비활성화 |
| **Better Fortresses** | 네더 요새 | `betterfortresses:fortress` | 바닐라 네더 요새 비활성화 |

> 이 구조물들은 바닐라 위치 규칙을 따르므로 **해당 바이옴/차원에서 자연 생성**됩니다. 전리품 구성은 바닐라 기반에 모드팩 전리품 테이블이 더해질 수 있으나 파일 미기재 — 확인 필요.

---

## 4. 보스 구조물·아레나

### 4-1. Cataclysm (한국어 번역 있음 ✅)
각 보스는 고유 구조물에서 발견·소환됩니다. 구조물 ↔ 보스 연결은 어드밴스먼트로 확인됩니다.

| 구조물 (영문 → 의역) | 보스(한글) | 소환/조건 | 비고 |
|---|---|---|---|
| Ruined Citadel (폐허가 된 성채) | 엔더 수호자 / 엔더 골렘 | 구조물 내 처치 | 엔드 관련 |
| Soul Forge / Soul Black Smith (영혼의 대장간) | — | 제작 거점 | 보스 장비 제련 |
| **Burning Arena** (불타는 투기장) | **이그니스(Ignis)** | 소환 후 처치 | 네더 요새에 "점화된 광전사" 등장 |
| Ancient Factory (고대 공장) | 네더라이트 괴물 (Netherite Monstrosity) | 구조물 내 처치 | "어울리지 않는" 구조물 |
| **Sunken City** (가라앉은 도시) | **레비아탄(The Leviathan)** | 소환·수중 처치(물 밖 무적) | 처치 시 산호 골렘 출현 |
| **Cursed Pyramid** (저주받은 피라미드) | **고대의 잔재(Ancient Remnant)** | 수상한 모래 발굴로 각성 | 처치 시 음반 드롭 |
| Frosted Prison (얼어붙은 감옥) | 말레딕투스(Maledictus) 추정 | 소환 후 처치 | "Jail of Cold" |
| Acropolis (아크로폴리스) | 스킬라(Scylla, 폭풍의 여제) 추정 | 공중 구조물 | "Why in the Sky?" |
| — | 하빈저(The Harbinger) | 각성 후 처치 | "고대 문명의 존재" |

> **제단(Altar) 블록**: 불의 제단·공허의 제단·자수정 제단·심연의 제단 — 일부 보스 소환·콘텐츠에 사용. 그 외 보스: 코랄서스(Coralssus)·클로디언(Clawdian) 등도 존재.
> 처치 보상 무기/방어구는 **`5_무기_위키.md` / `6_방어구_위키.md`** 참고.

### 4-2. Bosses of Mass Destruction (미번역 — 영문 + 의역)
이 모드의 보스는 대부분 **고정 아레나 구조물보다 자연 스폰·차원 조건형**입니다(파일 근거).

| 보스(영문 → 의역) | 출현 차원 | 비고 |
|---|---|---|
| **Nether Gauntlet** (네더 건틀릿) | 네더 | "Through the Gauntlet" |
| **Obsidilith** (옵시딜리스) | 엔드 | "Obsidian Obliterator" |
| **Night Lich** (밤의 리치) | 오버월드(밤) | "Night Vanquisher", Soul Star 소환 |
| **Void Blossom** (공허의 꽃) | (식물형 보스) | "Extreme Weeding", 꽃잎 칼날·포자 공격 |

### 4-3. Ice and Fire (한국어 번역 있음 ✅)
드래곤·신화 생물의 둥지/소굴이 자연 생성됩니다.

| 구조물 | 거주 보스(한글) | 비고 |
|---|---|---|
| 드래곤 둥지(Roost / Cave) | 파이어 / 아이스 / 라이트닝 드래곤 | 나이/등급별로 강함, 둥지에 보물 |
| 사이클롭스 동굴(Cyclops Cave) | 사이클롭스 | 양·보물 보관, 외눈 약점 |
| 고르곤 신전(Gorgon Temple) | 고르곤 | 시선 석화 |
| 픽시 마을(Pixie Village/Hovel) | 픽시 | 픽시 항아리·오두막(나무종별) |
| 미르멕스 둥지(Myrmex Hive) | 미르멕스(사막/정글) | 개미형 군체, 수지·고치 |
| 묘지(Graveyard) | 드레드 리치(Dread Lich) | "묘지 흙"이 밤에 유령 스폰 |
| 드레드스톤 구조물(Dreadstone) | 드레드 군세 | 드레드스톤 벽돌·횃불 |
| (해양) | 씨 서펀트(Sea Serpent) | 해상 보스 |
| (사막 지하) | 데스웜(Deathworm) | 모래 속 |
| **드래곤포지(Dragonforge)** | — | 드래곤 화염/냉기/번개로 드래곤스틸 제련(제작 구조물) |

> 드래곤 무기·뼈·비늘 장비는 **`5_무기_위키.md` / `6_방어구_위키.md`** 참고.

---

## 5. 차원 구조물

### 5-1. 황혼의 숲 (Twilight Forest) — 한국어 번역 있음 ✅
**진행형 차원**입니다. 정해진 순서대로 보스를 처치해야 다음 구역 마법 장벽이 풀립니다(어드밴스먼트 근거).

| 구조물(한글) | 보스(한글) | 진행 단계 | 비고 |
|---|---|---|---|
| 비어있는 언덕(소/중/대형 Hollow Hill) | — | 초반 | 광물·전리품 |
| 울타리 미로(Hedge Maze) | 울타리 거미 | 초반 | "벌레컷" |
| 퀘스트 양 숲(Quest Grove) | — | 초반 | 퀘스트 |
| 나가의 정원(Naga Courtyard) | 나가 | 1단계 | 처치 후 비늘 획득 → 리치 성 장벽 해제 |
| 리치 타워(Lich Tower) | 리치 | 2단계 | 늪 모기·어둠 저주 해제, 힘의 셉터 |
| 미노타우르스 미로(Labyrinth) | 미노쉬룸(Minoshroom) | 3단계 | 불 늪지 열기 적응 |
| 히드라의 굴(Hydra Lair) | 히드라 | 중반 | 화염·다두 보스 |
| 기사 요새(Knight Stronghold) | 유령 기사(Knight Phantom) | 중반 | 카미나이트 탑, 기사석 장비 |
| 어둠의 탑(Dark Tower) | 유어 가스트(Ur-Ghast) | 후반 | 어둠의 숲 |
| 예티 동굴(Yeti Cave) | 우두머리 예티(Alpha Yeti) | 후반 | 알파 모피로 빙하 추위 저항 |
| 오로라 궁전(Aurora Palace) | 눈의 여왕(Snow Queen) | 후반 | 빙하 |
| 트롤 동굴(Troll Cave) | 거인 광부(Giant Miner) 등 | 후반 | 클라우드 코티지 연결 |
| 마지막 고원 성(Final Castle) | 신관(Adherent) 등 | 최종 | **미완성(WIP)** — 파일에 "진행이 끝" 안내 |
| 버섯 성(Mushroom Tower) | — | — | 자연 구조물 |

### 5-2. 에테르 (Aether) — 한국어 번역 일부 ✅
하늘 차원. 3티어 던전 진행.

| 던전(한글/영문) | 보스 | 난이도 | 주요 보상(파일 근거) |
|---|---|---|---|
| 청동 던전(Bronze Dungeon) | 청동 보스 | ★ | **킹브도그즈의 망치(Hammer of Kingbdogz)**, **발키리 랜스(Valkyrie Lance)** |
| 은 던전(Silver Dungeon) | 은 보스 | ★★ | **발키리 장비(Valkyrie 세트)**, **회복의 돌(Regeneration Stone)**, 발키리 괭이 |
| 황금 던전(Gold Dungeon) | 황금 보스(Sun Spirit) | ★★★ | **피닉스 방어구(Phoenix Armor)** |

> 일부 상자는 **미믹(Chest Mimic)**입니다(파일 경고). 발키리 처치 시 "승리 메달(Victory Medal)" 드롭. **Sun Altar**(태양 제단)로 차원 통제권 이전.

### 5-3. 언더가든 (The Undergarden) — 한국어 번역 있음 ✅
지하 차원.

| 구조물(한글) | 보스/요소 | 비고 |
|---|---|---|
| 지하묘지(Catacombs) | 잊혀진 수호자(Forgotten Guardian) | "잊혀진 복도", 수호자 조각 → 잊혀진 주괴 |
| (오염 지역) | 부패물(Rotspawn/Rotling) | "오물은 소독이다!" |

> **클로그룸(Cloggrum)** 장비를 잊혀진 주괴(Forgotten Ingot)로 강화. 장비는 `6_방어구_위키.md` 참고.

### 5-4. 딥다크 / Otherside (Deeper Darker) — 미번역(영문 + 의역)
오버월드 깊은 곳에서 진입하는 **Otherside** 차원.

| 구조물(영문 → 의역) | 비고 |
|---|---|
| Ancient City (고대 도시) | "A Metropolis of Restless Souls", 워든 출현 |
| Ancient Temple (고대 신전) | "Abyssal Descent" — 심연 신전 |

> 워든 처치 시 심장 획득("Phantom Thief"). 강화된 메아리 조각·소리 지팡이(Sonorous Staff) 등 고유 아이템.

### 5-5. 블루 스카이 (Blue Skies) — 한국어 번역 있음 ✅
두 하늘 차원(에버브라이트 Everbright / 에버던 Everdawn).

| 던전(한글) | 보스 | 차원 | 비고 |
|---|---|---|---|
| 자연 던전(Nature Dungeon) | 별빛 으스러트리(Starlit Crusher) 추정 | 에버브라이트 | 탐험가 지도 존재 |
| 맹독 던전(Poison Dungeon) | 아라크나크(Arachnarch) / 연금술사(Alchemist) 추정 | 에버던 | 탐험가 지도 존재 |
| 맹인 던전(Blinding Dungeon) | 소환사(Summoner) 추정 | — | 탐험가 지도 존재 |

> 보스 ↔ 던전 정확한 배치는 파일에 명시되지 않음 — 확인 필요. 등장 보스: 소환사·연금술사·별빛 으스러트리·아라크나크.

---

## 6. 습격·기타

### 6-1. Raided (미번역 — 영문 + 의역)
바닐라 습격(Raid)에 새 일리저 유닛을 추가합니다.

| 유닛(영문 → 의역) | 역할 |
|---|---|
| Electromancer (전기술사) | 변환·번개 시전 |
| Incinerator (소각자) | 화염 공격 |
| Inquisitor (심문관) | 근접 강화 |
| Necromancer (강령술사) | 언데드 소환 |
| Savager (약탈수) | 탑승형 야수 추정 |

### 6-2. Illager Invasion (미번역 — 영문 + 의역)
습격 강화 및 신규 일리저.

| 유닛(영문 → 의역) | 비고 |
|---|---|
| Alchemist (연금술사) / Archivist (기록관) / Basher (강타자) | |
| Firecaller (화염소환사) / Inquisitor (심문관) / Invoker (초혼사) | |
| Marauder (약탈자) / Necromancer (강령술사) / Provoker (도발자) | |
| Sorcerer (마법사) / Surrendered (투항자) | |

> 고유 아이템: 신성한 보석(Hallowed Gem)·시야의 뿔피리(Horn of Sight)·백금(Platinum) 계열·임뷰잉 테이블(Imbuing Table) 등.

### 6-3. End Remastered — 엔드 포탈 개편 (미번역 — 영문 + 의역)
바닐라 엔더의 눈 1종 대신 **16종 고유 "눈(Eye)"**을 각기 다른 구조물·몹에서 수집해야 엔드 포탈을 활성화할 수 있습니다.

| 눈(영문) | 입수 단서(파일 description) |
|---|---|
| Old Eye / Rogue Eye | 샌드웜 / 레드스톤(고대) |
| Nether Eye / Cursed Eye | 네더 악마 / 피글린 |
| Cold Eye / Wither Eye | 아이솔로저 / 위더 |
| Magical Eye / Witch Eye | 에보커 / 마녀(양조) |
| Black Eye / Guardian Eye | 해적(검은 진주) / 가디언(바다) |
| Lost Eye / Undead Eye | 최초의 대장장이 / 언데드 |
| Exotic Eye / Evil Eye | 아틀란티스(?) / 액막이 부적 |
| Corrupted Eye | 탐욕스러운 왕 |

> 각 눈은 **고대 포탈 프레임(Ancient Portal Frame)**에 끼워 사용. 잘못 배치 시 작동하지 않습니다(파일 경고 다수). 정확한 입수 구조물은 모드 설정에 따름 — 확인 필요.

---

## 7. 추천 탐험 순서 (난이도순)

> ★1(초반) ~ ★5(엔드게임). 모드 진행 의존 구조물은 순서를 따릅니다.

| 순서 | 구조물/차원 | 난이도 | 목적 |
|---|---|---|---|
| 1 | Better~ 시리즈 (사막신전·정글신전·폐광·해양기념비) | ★1 | 초반 자원·전리품, 바닐라 흐름 |
| 2 | When Dungeons Arise 소형(낚시 오두막·우물·상인 야영지·선술집) | ★1 | 가벼운 탐험·생활 자원 |
| 3 | Better Dungeons (카타콤·거미동굴·언데드 요새) | ★2 | 중반 전투·전리품 |
| 4 | Dungeons Enhanced (성·사막신전·해적선) | ★2~3 | 중형 던전 |
| 5 | 황혼의 숲 진행(나가→리치→미노쉬룸→히드라) | ★3 | 차원 보스 진행·고유 장비 |
| 6 | 에테르(청동→은→황금 던전) | ★3~4 | 발키리·피닉스 장비 |
| 7 | Dungeons Arise 일리저 거점·해상 함선 | ★3~4 | 대형 전투·전리품 |
| 8 | 언더가든 / 블루 스카이 던전 | ★4 | 차원 장비·보스 |
| 9 | Cataclysm 보스 아레나 (이그니스·레비아탄·고대의 잔재) | ★4~5 | 최상위 보스 무기·방어구 |
| 10 | Ice and Fire 드래곤 둥지 (성체 드래곤) | ★5 | 드래곤 장비·드래곤포지 |
| 11 | 딥다크 Otherside (고대 도시·신전, 워든) | ★5 | 엔드게임 |
| 12 | Dungeons Arise 공중 구조물(Heavenly 시리즈·Typhon·Shiraz Palace) | ★5 | 엔드게임 콘텐츠 |
| 13 | End Remastered 눈 16종 수집 → 엔드 진입 | ★5 | 엔더 드래곤·바닐라 엔드게임 |

---

> 🔗 **연관 위키**
> - 보스 처치 보상 무기: **`5_무기_위키.md`**
> - 던전/구조물 방어구·드래곤 장비: **`6_방어구_위키.md`**
> - 구조물이 생성되는 바이옴: **`11_바이옴_위키.md`**
