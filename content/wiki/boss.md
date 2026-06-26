# 13. 보스 위키 (Boss Wiki)

> Medieval MC MMC4 (1.20.1 Forge) 가 추가하는 **모드 보스 총정리** 위키.
> 보스명·드랍·구조물은 각 모드의 `en_us.json` / `ko_kr.json` (lang) 과 어드밴스먼트(advancements) 근거입니다.
> ⚠️ 파일에 명시되지 않은 정보는 추측하지 않고 "확인 필요"로 표기합니다.
> ⚠️ 미번역 모드는 영문 원문 + 의역을 함께 적고, 그 사실을 표기했습니다.

---

## 1. 개요

이 모드팩의 보스는 크게 **차원/콘텐츠별**로 나뉩니다. 진행(progression) 중요도가 높은 축은 다음과 같습니다.

- **Cataclysm** — 오버월드·네더·엔드·전용 구조물에 흩어진 대형 보스군. 모드팩 후반 최고난도 다수 포함. (한국어 번역 있음)
- **Bosses of Mass Destruction (BMD)** — 차원별 단일 보스 4종(오버월드/네더/엔드). 대부분 전용 구조물 또는 소환 블록형. (미번역)
- **Ice and Fire** — 드래곤 3종을 비롯한 신화 생물 보스. 자연 스폰형이 많음. (한국어 일부 번역)
- **Twilight Forest** — **순차 진행형 차원 보스**. 앞 보스를 잡아야 다음 구역의 마법 장벽이 풀림. (한국어 번역 있음)
- **Mowzie's Mobs / 기타** — 구조물·바이옴 한정 보스. (한국어 일부 번역)
- **Alex's Caves** — 지하 바이옴 거대 보스급. (한국어 번역 있음)
- **Aether / Deeper Darker / Sons of Sins / EEEABs Mobs** — 차원·콘텐츠별 보스급 엔티티. (대부분 미번역)

> **분류 기준**: 본 문서는 어드밴스먼트에 `kill_*` / `*_defeat` 가 있거나, lang에 보스 전용 메시지(`defeat_message`, `boss_info` 등)·전용 음반·소환 구조물이 있는 엔티티를 "보스"로 봅니다. 일반 정예 몹(미니보스급)은 `14_몬스터_위키.md`를 참고하세요.

---

## 2. 보스 총괄 표

난이도(★1~5)는 모드팩 내 상대적 위협도 추정치이며, 핵심 드랍은 lang의 무기/재료 아이템 근거입니다.

| 보스명 | 출처 모드 | 위치(차원·구조물) | 난이도 | 핵심 드랍(무기·재료) | 소환/자연생성 |
|---|---|---|---|---|---|
| 이그니스 (Ignis) | Cataclysm | 네더 · 불타는 투기장(Burning Arena) | ★★★★★ | 이그니티움 주괴(이그니티움 방어구), 소각자(The Incinerator) | 소환 후 처치 |
| 네더라이트 괴물 (Netherite Monstrosity) | Cataclysm | 네더 · 고대 공장(Ancient Factory) | ★★★★ | 지옥불 용광로(Infernal Forge), 위더라이트 주괴 | 구조물 내 처치 |
| 하빈저 (The Harbinger) | Cataclysm | 고대 구조물 | ★★★★ | 견착식 위더 무기(Wither Assault Shoulder Weapon) | 각성 후 처치 |
| 레비아탄 (The Leviathan) | Cataclysm | 해양 · 가라앉은 도시(Sunken City) | ★★★★★ | 타이달 클로(Tidal Claws), 산호 재료 | 소환·수중 처치(물 밖 무적) |
| 엔더 수호자 (Ender Guardian) | Cataclysm | 엔드 | ★★★★ | 공허 용광로(Void Forge), 흑강 주괴(Black Steel) | 구조물 처치 |
| 고대의 잔재 (Ancient Remnant) | Cataclysm | 사막 · 저주받은 피라미드(Cursed Pyramid) | ★★★★ | 사막의 분노(Wrath of the Desert), 고대의 창 | 의심스러운 모래 발굴 후 각성 |
| 말레딕투스 (Maledictus) | Cataclysm | 저주받은 피라미드/구조물 | ★★★★ | 음반(Maledictus) 등 | 소환 후 처치 |
| 스킬라 (Scylla) | Cataclysm | 해양(폭풍의 여제) | ★★★★★ | 확인 필요 | 처치 어드밴스먼트 존재 |
| 클로디언 (Clawdian) | Cataclysm | 해양 | ★★★ | 키틴 클로(Chitin Claw) | 자연생성 |
| 코랄서스 (Coralssus) | Cataclysm | 해양 | ★★★ | 산호 재료 | 자연생성 |
| 네더 건틀릿 (Nether Gauntlet) | BMD | 네더 · 전용 구조물 | ★★★★ | Blazing Eye(작열하는 눈) | 구조물 처치 |
| 옵시딜리스 (Obsidilith) | BMD | 엔드 · 흑요석 제단 | ★★★★ | Obsidian Heart(흑요석 심장) | 제단 소환 |
| 밤의 리치 (Night Lich) | BMD | 오버월드(밤) | ★★★ | Ancient Anima(고대의 혼) | Soul Star로 소환 |
| 공허의 꽃 (Void Blossom) | BMD | 식물형 보스(전용 스포너) | ★★★★ | Void Thorn(공허의 가시) | 소환 블록 |
| 파이어 드래곤 (Fire Dragon) | Ice and Fire | 오버월드 · 화염 드래곤 둥지/동굴 | ★★★★ | 화염 드래곤 비늘·뼈·심장 | 자연생성 |
| 아이스 드래곤 (Ice Dragon) | Ice and Fire | 한대 바이옴 · 얼음 드래곤 동굴 | ★★★★ | 얼음 드래곤 비늘·뼈·심장 | 자연생성 |
| 라이트닝 드래곤 (Lightning Dragon) | Ice and Fire | 건조 바이옴 · 번개 드래곤 동굴 | ★★★★ | 번개 드래곤 비늘·뼈·심장 | 자연생성 |
| 히드라 (Hydra, IAF) | Ice and Fire | 동굴/늪 | ★★★★ | 히드라 재료 | 자연생성 |
| 사이클롭스 (Cyclops) | Ice and Fire | 해안 동굴 | ★★★ | 사이클롭스 눈 등 | 자연생성 |
| 고르곤 (Gorgon) | Ice and Fire | 구조물 | ★★★ | 고르곤 머리(석화) | 자연생성 |
| 씨 서펀트 (Sea Serpent) | Ice and Fire | 해양 | ★★★ | 바다뱀 비늘 | 자연생성 |
| 드레드 리치 / 드레드 랜드 보스 | Ice and Fire | 드레드 랜드(Dread Lands) | ★★★★ | 드레드 장비 | 차원/구조물 |
| 나가 (Naga) | Twilight Forest | 황혼의 숲 · 나가의 정원 | ★★ | 나가 비늘(갑옷) | 진행 1단계 |
| 리치 (Lich) | Twilight Forest | 황혼의 숲 · 리치 타워 | ★★★ | 힘의 셉터, 황혼 부적 | 진행 2단계 |
| 미노쉬룸 (Minoshroom) | Twilight Forest | 황혼의 숲 · 미노타우르스 미로 | ★★★ | 미노타우르스 도끼 | 진행 3단계 |
| 히드라 (Hydra, TF) | Twilight Forest | 황혼의 숲 · 히드라의 굴 | ★★★★ | 히드라 키친스, 다두 보스 | 중반 |
| 유령 기사 (Knight Phantom) | Twilight Forest | 황혼의 숲 · 기사 요새 | ★★★ | 기사석(Knightmetal) 장비 | 중반 |
| 우어가스트 (Ur-Ghast) | Twilight Forest | 황혼의 숲 · 어둠의 탑 | ★★★★ | 폭군의 화로 | 후반 |
| 우두머리 예티 (Alpha Yeti) | Twilight Forest | 황혼의 숲 · 예티 동굴 | ★★★ | 알파 모피(추위 저항 갑옷) | 후반 |
| 눈의 여왕 (Snow Queen) | Twilight Forest | 황혼의 숲 · 오로라 궁전 | ★★★★ | 삼중 활(Triple Bow) 등 | 후반 |
| 강철의 기사 (Ferrous Wroughtnaut) | Mowzie's Mobs | 지하 전용 방 | ★★★ | 강철 도끼(Axe of a Thousand Metals) | 구조물 |
| 프로스트모 (Frostmaw) | Mowzie's Mobs | 설원 산악 | ★★★ | 얼음 크리스털(Ice Crystal) | 자연생성 |
| 움부티, 태양조 (Umvuthi) | Mowzie's Mobs | 정글 · 부족 구조물 | ★★★ | 태양조 축복(거래) | 구조물 |
| 통비, 조각가 (Tongbi/Sculptor) | Mowzie's Mobs | 산악 시험장 | ★★★ | 시험 통과 보상 | 시험형 보스 |
| 트레머질라 (Tremorzilla) | Alex's Caves | 마그네틱 동굴(추정) | ★★★★★ | 확인 필요 | 자연생성 |
| 마그네트론 (Magnetron) | Alex's Caves | 마그네틱 동굴 | ★★★★ | 확인 필요 | 자연생성 |
| 감시자 (Watcher) | Alex's Caves | 어비스 동굴(추정) | ★★★ | 확인 필요 | 자연생성 |
| 버림받은 자 (Forsaken) | Alex's Caves | 어비스 동굴(추정) | ★★★★ | 확인 필요 | 자연생성 |
| 슬라이더 (Slider) | Aether | 에테르 · 청동 던전 | ★★★ | 청동 열쇠/보상 | 던전 보스(미번역) |
| 태양의 정령 (Sun Spirit) | Aether | 에테르 · 황금 던전 | ★★★★ | 태양 알톤 등 | 던전 보스(미번역) |
| 발키리 여왕 (Valkyrie Queen) | Aether | 에테르 · 은빛 던전 | ★★★★ | 승리의 검(Sword of Victory) | 던전 보스(미번역) |
| 부서진 자 (Shattered) | Deeper Darker | 오테르사이드(Otherside) | ★★★★ | 강화 메아리 조각 관련 | 자연생성(미번역) |
| 스토커 (Stalker) | Deeper Darker | 오테르사이드 | ★★★ | 확인 필요 | 자연생성(미번역) |
| 불멸자 (The Immortal) | EEEABs Mobs | 전용 구조물 | ★★★★ | 확인 필요 | 구조물 보스(미번역) |
| 이름없는 수호자 (Nameless Guardian) | EEEABs Mobs | 전용 구조물 | ★★★★ | 확인 필요 | 구조물 보스(미번역) |
| 굴베르 / 블뤼드 등 | Sons of Sins | 전용 콘텐츠 | ★★★ | 확인 필요 | 미번역 |

> 워든(Warden, 바닐라+Deeper Darker 콘텐츠)도 보스급입니다. Deeper Darker 어드밴스먼트에 `kill_warden`(워든을 처치하고 심장 획득)·워든 방어구가 있어 처치 시 강화 메아리 조각으로 워든 업그레이드 형판 조합에 쓰입니다.

---

## 3. 모드별 보스 상세

### 3-1. Cataclysm (한국어 번역 있음)

이 모드는 모드팩 최고난도 보스 다수를 담당합니다. 어드밴스먼트 트리의 최종 목표는 **`The Cataclysmfarer`(모든 보스 처치)** 입니다.

- **이그니스 (Ignis)** — 네더의 **불타는 투기장(Burning Arena)** 에서 소환 후 처치. lang 처치 메시지: "네더 요새에 점화된 광전사(Ignited Berserker)가 깨어난다". 핵심 보상은 **이그니티움 주괴**(이그니티움 투구/흉갑/겉날개 흉갑/레깅스/부츠 세트 — 열기 시선·화염 반사·용암 걸음 효과)와 무기 **소각자(The Incinerator)**. 네더 최종 보스급(★5).
- **네더라이트 괴물 (Netherite Monstrosity)** — **고대 공장(Ancient Factory)** 에서 처치. 전용 음반("Spawn Of Hell")과 **위더라이트 주괴**, 곡괭이형 광역 무기 **지옥불 용광로(Infernal Forge)** 와 연관. 소환용 **네더라이트 조각상(Netherite Effigy)** 도 존재.
- **하빈저 (The Harbinger)** — 각성(Wake) 후 처치하는 "고대 문명의 존재". 어깨 장착 무기 **견착식 위더 무기(Wither Assault Shoulder Weapon)** — 위더 미사일 발사, 웅크리면 위더 곡사포.
- **레비아탄 (The Leviathan)** — **가라앉은 도시(Sunken City)** 의 다차원 포식자. **물 밖에서는 무적**(lang: "레비아탄은 물 밖에선 무적입니다!"). 처치 시 바다에 산호 골렘 출현. 보상은 그래플링/촉수 무기 **타이달 클로(Tidal Claws)** 및 산호 재료. ★5.
- **엔더 수호자 (Ender Guardian)** / **엔더 골렘 (Ender Golem)** — 엔드 콘텐츠. 엔더 수호자는 곡괭이형 무기 **공허 용광로(Void Forge, 공허의 룬 소환)** 및 **흑강 주괴(Black Steel)** 와 연관.
- **고대의 잔재 (Ancient Remnant)** — **저주받은 피라미드(Cursed Pyramid)** 의 의심스러운 모래를 발굴해 각성. 전용 음반("The Dryest Beast"), **사막의 분노(Wrath of the Desert)**·**고대의 창(공격 시 모래폭풍 발사)**·**병속의 모래 폭풍** 과 연관.
- **말레딕투스 (Maledictus)** — 소환 후 처치하는 저주 보스("저주에 맞선 성전"). 전용 음반(Rotch Gwylt - Maledictus).
- **스킬라 (Scylla, 폭풍의 여제)** — "폭풍 뒤의 고요". 번개·폭풍 계열 보스. 정확한 드랍은 **확인 필요**. (관련 엔티티: 스톰 서펀트, 케라우누스)
- **기타**: **코랄서스(Coralssus)**·**클로디언(Clawdian, 키틴 클로 연관)**·**자수정 게(Amethyst Crab, 개화의 돌 견갑 관련)**·**배회자(The Prowler)**·**감시자(The Watcher)** 등 정예~보스급 다수.

> Cataclysm 구조물↔보스 매핑은 `9_구조물_위키.md`(영혼의 대장간·불타는 투기장·고대 공장·가라앉은 도시·저주받은 피라미드·서리 감옥·아크로폴리스 등)와 일치합니다.

### 3-2. Bosses of Mass Destruction (BMD, 미번역 — 영문+의역)

차원별 단일 보스 4종. 모두 어드밴스먼트에 `*_defeat` 가 있습니다.

- **Nether Gauntlet(네더 건틀릿)** — 네더 보스. 회전 펀치·레이저 차징. 드랍 **Blazing Eye(작열하는 눈)**. 어드밴스먼트 "Through the Gauntlet".
- **Obsidilith(옵시딜리스)** — 엔드 보스. **흑요석 제단(Obsidian Altar)** 에서 에너지 방패·에너지 폭발·순간이동. 드랍 **Obsidian Heart(흑요석 심장)**. 어드밴스먼트 "Obsidian Obliterator".
- **Night Lich(밤의 리치)** — 오버월드 밤 보스. **Soul Star(영혼의 별)** 아이템으로 소환. 드랍 **Ancient Anima(고대의 혼)**. 어드밴스먼트 "Night Vanquisher".
- **Void Blossom(공허의 꽃)** — 식물형 보스. **공허의 백합(Void Lily)** / 전용 스포너 블록으로 연결. 꽃잎 칼날(Petal Blade)·포자(Spore) 공격. 드랍 **Void Thorn(공허의 가시)**. 어드밴스먼트 "Extreme Weeding".

> 편의 아이템: **Brimstone Nectar(유황 과즙)** — 사용 시 근처 보스 구조물 리셋(재도전용).

### 3-3. Ice and Fire (한국어 일부 번역)

신화 생물 보스. 대부분 자연 스폰형이며 고정 아레나가 없습니다(파일 근거).

- **드래곤 3종**: **파이어 드래곤 / 아이스 드래곤 / 라이트닝 드래곤**. 나이(연령 단계)에 따라 크기·체력이 커지며, 각 속성의 비늘·뼈·심장을 드랍해 드래곤 장비 제작에 사용. 드래곤 본 화살(Dragon Bone Arrow)·드래곤 알도 연관.
- **히드라 (Hydra)** — 다두 화염 보스(IAF판).
- **사이클롭스 (Cyclops)** — 해안 동굴의 거대 외눈 거인.
- **고르곤 (Gorgon)** — 시선 석화 보스. 고르곤 머리는 석화 도구로 활용.
- **씨 서펀트 (Sea Serpent)** — 해상 보스. 바다뱀 비늘 드랍.
- **트롤 (Troll)**·**데스웜 (Death Worm)**·**코카트리스 (Cockatrice)**·**미르멕스 여왕 (Myrmex Queen)**·**스팀팔리안 버드 (Stymphalian Bird, 미번역)**·**엠피데어 (Amphithere)** 등 정예~보스급 생물 다수.
- **드레드 랜드(Dread Lands)** — 전용 차원/구조물. **드레드 포탈**·**드레드스톤 스포너**·드레드 기사 검(Dread Knight's Sword) 등 드레드 계열 장비.

> IAF 미번역 항목(예: Stymphalian Bird)은 영문 그대로 표기했습니다.

### 3-4. Twilight Forest (한국어 번역 있음) — 순차 진행형

**정해진 순서대로 보스를 처치해야 다음 구역의 마법 장벽(progression lock)이 풀립니다.** 상세 구조물은 `9_구조물_위키.md` 4·5장 참고.

- **나가 (Naga)** — 나가의 정원. 1단계. 나가 비늘 → 나가 비늘 갑옷, 리치 성 장벽 해제.
- **리치 (Lich)** — 리치 타워. 2단계. 늪 모기·어둠 저주 해제. **힘의 셉터(Scepter)** 류 보상. 미니언 소환·리치 볼트 공격.
- **미노쉬룸 (Minoshroom)** — 미노타우르스 미로. 3단계. 불 늪지(Fire Swamp) 열기 적응.
- **히드라 (Hydra, TF)** — 히드라의 굴. 중반. 다두 화염 보스, 히드라 박격포(Hydra Mortar) 공격.
- **유령 기사 (Knight Phantom)** — 기사 요새. 중반. 기사석(Knightmetal) 장비.
- **우어가스트 (Ur-Ghast)** — 어둠의 탑. 후반. 어둠의 숲 콘텐츠.
- **우두머리 예티 (Alpha Yeti)** — 예티 동굴. 후반. 알파 모피 → 빙하 추위 저항 갑옷.
- **눈의 여왕 (Snow Queen)** — 오로라 궁전. 후반. 빙하 최종 보스급.
- **거인 광부 (Giant Miner)** 등 — 트롤 동굴/클라우드 코티지 후반 콘텐츠. 최종 고원 성(Final Castle)은 **미완성(WIP)**.

### 3-5. Mowzie's Mobs (한국어 일부 번역)

- **강철의 기사 (Ferrous Wroughtnaut)** — 지하 전용 방의 갑옷 거인. 강철 도끼 보상.
- **프로스트모 (Frostmaw)** — 설원 산악의 빙하 표범 보스. 얼음 크리스털(Ice Crystal) 드랍.
- **움부티, 태양조 (Umvuthi, the Sunbird)** — 정글 부족 보스. 처치/교류 후 **태양조 축복(거래·재충전)** 제공.
- **통비, 조각가 (Tongbi, the Sculptor)** — 시험형 보스. 정해진 시간 안에 코스 정상에 도달해 우클릭하면 통과(블록 설치·파괴·순간이동·비행 금지). lang에 `boss_info.timer`·시험 규칙 존재.
- (Naga — Mowzie's판 정글 나가도 별도 존재. Twilight Forest 나가와 구분.)

### 3-6. Alex's Caves (한국어 번역 있음)

지하 바이옴별 거대 보스급.

- **트레머질라 (Tremorzilla)** — 최대형 보스급(★5 추정). 정확한 위치·드랍 **확인 필요**.
- **마그네트론 (Magnetron)** / **테레토르 (Teletor)** — 자성 계열.
- **감시자 (Watcher)** / **버림받은 자 (Forsaken)** / **고사머 벌레 (Gossamer Worm)** — 어비스/곰팡이 동굴 계열.

> 드랍 상세는 lang에 보스 전용 명시가 부족해 **확인 필요**로 둡니다.

### 3-7. Aether (미번역 — 영문+의역)

에테르 차원 던전 보스 3종.

- **Slider(슬라이더)** — 청동 던전 보스.
- **Valkyrie Queen(발키리 여왕)** — 은빛 던전 보스. **Sword of Victory(승리의 검)** 보상 계열.
- **Sun Spirit(태양의 정령)** — 황금 던전 보스.

### 3-8. 기타 (Deeper Darker / EEEABs Mobs / Sons of Sins, 대부분 미번역)

- **Deeper Darker** — **Shattered(부서진 자)** / **Stalker(스토커)**: 오테르사이드(Otherside) 차원의 스컬크 보스급. 워든(Warden) 처치 시 심장·강화 메아리 조각 획득(워든 업그레이드 형판).
- **EEEABs Mobs** — **The Immortal(불멸자)** / **Nameless Guardian(이름없는 수호자)** / **Guling Sentinel(굴링 파수병)**: 전용 구조물 보스. 구조물의 눈(Eye Of Structure)·가디언 레이저·블레이드 등 패턴.
- **Sons of Sins** — **Gulbèr(굴베르)** / **Blüd(블뤼드)** / **Devourer(데보러)** / **Guzzler(거즐러)** 등 살점/장기 콘텐츠 정예~보스급. 드랍 상세 **확인 필요**.

---

## 4. 보스 진행 트리

### 4-1. Twilight Forest 차원 진행 (필수 순서)

```
나가 (Naga)              ← 1단계: 나가의 정원 / 나가 비늘
   ↓ 장벽 해제
리치 (Lich)              ← 2단계: 리치 타워 / 어둠 저주 해제
   ↓
미노쉬룸 (Minoshroom)     ← 3단계: 미로 / 불 늪지 적응
   ↓
히드라 (Hydra)           ← 중반: 히드라의 굴
   ↓
유령 기사 (Knight Phantom) ← 중반: 기사 요새
   ↓
우어가스트 (Ur-Ghast)      ← 후반: 어둠의 탑
   ↓
우두머리 예티 (Alpha Yeti) → 눈의 여왕 (Snow Queen)  ← 후반: 빙하
   ↓
거인 광부/고원 성 (Final Castle) ← 최종: 미완성(WIP)
```

### 4-2. Cataclysm 어드밴스먼트 진행

Cataclysm은 강제 순서는 약하지만, 어드밴스먼트 트리가 **루트 → 구조물 발견 → 보스 처치 → `The Cataclysmfarer`(모든 보스 처치)** 로 이어집니다. 권장 난이도 순:

```
엔더 골렘 / 이그나이티드 레버넌트 (정예)
   ↓
네더라이트 괴물 → 이그니스 (네더, 이그니티움 장비)
   ↓
고대의 잔재 / 말레딕투스 (사막)
   ↓
레비아탄 / 스킬라 (해양, 물속 전투)
   ↓
하빈저 / 엔더 수호자 (최종)
   ↓
The Cataclysmfarer (모든 보스 처치)
```

### 4-3. BMD 차원 진행

순서 강제는 없으나 차원 접근 순으로: **밤의 리치(오버월드)** → **네더 건틀릿(네더)** → **옵시딜리스(엔드)**, **공허의 꽃**은 전용 스포너 발견 시. `Brimstone Nectar`로 보스 구조물을 리셋해 재도전·반복 파밍이 가능합니다.

### 4-4. Aether 던전 진행

청동 던전(**슬라이더**) → 은빛 던전(**발키리 여왕**) → 황금 던전(**태양의 정령**) 순으로 난이도가 상승합니다.

---

> 본 문서가 다룬 보스: **약 45종** (Cataclysm·BMD·Ice and Fire·Twilight Forest·Mowzie's·Alex's Caves·Aether·Deeper Darker·EEEABs·Sons of Sins).

---

### 관련 문서

- 보스 공략법은 [`../가이드/5_보스헌팅_가이드.md`](../가이드/5_보스헌팅_가이드.md) 참고
- 일반 몬스터는 [`14_몬스터_위키.md`](14_몬스터_위키.md) 참고
- 보스 무기는 [`5_무기_위키.md`](5_무기_위키.md) 참고
- 보스 구조물·아레나는 [`9_구조물_위키.md`](9_구조물_위키.md) 참고
