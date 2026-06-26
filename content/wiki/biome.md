# 🌍 바이옴 위키 — Medieval MC MMC4

> Medieval MC MMC4 (1.20.1 Forge) 의 바이옴(생물 군계) 총정리 위키.
> 모드팩 실제 파일(`work/extracted_mod/*/en_us.json` · `ko_kr.json`)의 `biome.*` 키에 근거합니다.
> 한국어 번역명을 우선 사용하고, 미번역 모드는 **영문 + 의역(\*)** 을 병기하며 그 사실을 표기했습니다.
> 파일에 자원·몹 정보가 명시되지 않은 항목은 추측하지 않고 비워 두었습니다.

---

## 목차
1. [바이옴 개요 — 왜 중요한가](#1-바이옴-개요)
2. [차원별 바이옴 목록](#2-차원별-바이옴-목록)
   - [2-1. 오버월드 — 바이옴 오 플렌티 (Biomes O' Plenty)](#2-1-오버월드--biomes-o-plenty)
   - [2-2. 황혼의 숲 (Twilight Forest)](#2-2-황혼의-숲-twilight-forest)
   - [2-3. 에테르 계열 (Aether / Redux / Deep / Ancient)](#2-3-에테르-계열)
   - [2-4. 언더가든 (Undergarden)](#2-4-언더가든-undergarden)
   - [2-5. 블루 스카이 — 에버브라이트 · 에버던 (Blue Skies)](#2-5-블루-스카이--everbright--everdawn)
   - [2-6. 디 아더사이드 (Deeper Darker)](#2-6-디-아더사이드-deeper-darker)
   - [2-7. 엔드 확장 (Better End)](#2-7-엔드-확장-better-end)
   - [2-8. 동굴 차원 (Alex's Caves)](#2-8-동굴-차원-alexs-caves)
3. [차원 입장 방법 간단 정리](#3-차원-입장-방법)
4. [바이옴별 추천 활동](#4-바이옴별-추천-활동)
5. [관련 위키 링크](#5-관련-위키-링크)

---

## 1. 바이옴 개요

바이옴(생물 군계)은 단순한 풍경이 아니라 **무엇을 어디서 얻느냐**를 결정하는 핵심 요소다. Medieval MC MMC4에서 바이옴이 중요한 이유:

- **자원**: 광석·식물·블록은 특정 바이옴/차원에서만 나온다. (예: 블루 스카이 광석, 언더가든 클로갠나이트, 에테르 자원)
- **몹**: 적대·중립 몹의 출현은 바이옴에 묶여 있다. 모드 차원에는 고유 몹과 보스가 산다.
- **구조물**: 던전·신전·탑은 특정 바이옴에 생성된다. (구조물은 `9_구조물_위키.md` 참고)
- **어종 / 낚시**: Hybrid Aquatic·Tide 등은 바이옴(바다·강·호수 등 위치)에 따라 잡히는 물고기가 달라진다. (Tide 저널의 *Location* 분류 참고)
- **계절(Serene Seasons)**: 오버월드 바이옴은 계절의 영향을 받아 작물 성장·외형이 변한다.

> 이 위키는 **바이옴을 추가하는 모드 파일**을 1차 근거로 삼는다. 바닐라 오버월드 바이옴(평원·숲·사막·정글 등)은 누구나 아는 기본이므로 표에서 생략하고, **모드가 추가한 바이옴**과 **모드 차원**을 중심으로 정리한다.

---

## 2. 차원별 바이옴 목록

> 표기 규칙: 한국어 번역이 파일에 있으면 그대로 사용. 번역이 없는 모드(에테르 계열·디 아더사이드 등)는 **영문 + 의역(\*)** 으로 표기하고 별표(\*)로 의역임을 명시한다.

### 2-1. 오버월드 — Biomes O' Plenty

오버월드에 자연 생성되어 바닐라 바이옴과 섞인다. 계절(Serene Seasons)·기존 자원 채집에 직접 영향을 준다. (파일에 등록된 대표 바이옴 발췌)

| 바이옴 (한국어) | 영문 | 특징 (이름 기반) |
|---|---|---|
| 침엽수림 / 한대림 | Coniferous / Boreal Forest | 추운 침엽수 지대, 목재·가문비 |
| 단풍나무 숲 | Maple Woods | 단풍 계열, 가을 분위기 |
| 신비한 작은 숲 | Mystic Grove | 화려한 마법풍 숲 |
| 라벤더 들판 / 라벤더 숲 | Lavender Field / Forest | 보라 꽃 평원 |
| 삼나무 숲 | Redwood Forest | 거대 삼나무 |
| 우림 / 우림 절벽 | Rainforest / Cliffs | 다습한 열대림 |
| 습지 / 수렁 / 강어귀 | Marsh / Bog / Bayou | 늪·물 지형, 진흙·식생 |
| 비취 절벽 | Jade Cliffs | 청록빛 고지대 |
| 화산 / 화산 평원 | Volcano / Volcanic Plains | 용암·현무암 지형 |
| 황무지 / 시든 심연 | Wasteland / Withered Abyss | 황량·위험 지대 |
| 불길한 수풀산림 | Ominous Woods | 어둡고 위험한 숲 |
| 추운 사막 / 툰드라 | Cold Desert / Tundra | 한랭 건조 지대 |
| 작은 벚꽃 숲 | Cherry Blossom Grove | 벚꽃, 바닐라 벚꽃과 유사 |
| 오래된 삼림지대 | Old Growth Woodland | 거목 원시림 |

> 전체 등록 바이옴은 약 60종 이상(`biome.biomesoplenty.*`). 위는 탐험·자원 가치가 높은 대표 위주. 일부 키는 EN/KO 목록이 서로 다르게 등록되어 있어 양쪽에 모두 존재하는 항목 위주로 기재했다.

---

### 2-2. 황혼의 숲 (Twilight Forest)

영원한 황혼이 깔린 마법 차원. **보스 진행(프로그레션)** 이 바이옴·구조물과 직결된다. 번역 완비.

| 바이옴 (한국어) | 영문 | 특징 (이름·진행 기반) |
|---|---|---|
| 황혼의 숲 | Twilight Forest | 입문 바이옴, 기본 지형 |
| 황혼의 평원 | Twilight Clearing | 탁 트인 빈터 |
| 울창한 숲 | Dense Forest | 빽빽한 나무 |
| 반딧불이 숲 | Firefly Forest | 반딧불이 발광 |
| 버섯 숲 / 울창한 버섯 숲 | (Dense) Mushroom Forest | 거대 버섯 |
| 어둠의 숲 / 어둠의 숲 중앙 | Dark Forest (Center) | 어둡고 위험, 진행 후반 |
| 마법에 걸린 숲 | Enchanted Forest | 마력 자원 |
| 불타는 늪지 | Fire Swamp | 용암·위험 늪 |
| 황혼의 늪지 | Twilight Swamp | 늪 지형 |
| 황혼의 고원 | Twilight Highlands | 고지대, 후반 진행 |
| 가시 고원 | Thornlands | 가시 장벽 지대 |
| 마지막 고원 | Final Plateau | 최종 진행 구역 |
| 황혼의 빙하 | Twilight Glacier | 빙하 지형 |
| 눈덮인 숲 | Snowy Forest | 한랭 숲 |
| 무서운 숲 | Spooky Forest | 호박·공포 분위기 |
| 참나무 사바나 | Oak Savanna | 건조 초원 |
| 황혼의 호수 / 개울 | Twilight Lake / Stream | 수역 |

> 황혼의 숲은 바이옴마다 **권장 난이도**가 다르며, 특정 보스를 잡아야 다음 바이옴이 안전해지는 구조다. 구조물·보스는 `9_구조물_위키.md` 참고.

---

### 2-3. 에테르 계열

하늘 위의 천상 차원과 그 확장 모드들. **번역 파일에 한국어가 없어 영문 + 의역(\*)** 으로 표기한다.

#### Aether (기본 에테르) — *The Aether*
| 영문 | 의역(\*) |
|---|---|
| Skyroot Forest | 스카이루트 숲\* |
| Skyroot Grove | 스카이루트 작은 숲\* |
| Skyroot Meadow | 스카이루트 초원\* |
| Skyroot Woodland | 스카이루트 삼림지대\* |

#### Aether Redux (에테르 확장)
| 영문 | 의역(\*) |
|---|---|
| Skyfields | 하늘 들판\* |
| Skyroot Shrublands | 스카이루트 관목지\* |
| Gilded Grasslands / Groves | 황금빛 초원 / 작은 숲\* |
| Cloudcaps | 구름갓\* |
| Frosted Forests | 서리 숲\* |
| Glacial Tundra | 빙하 툰드라\* |
| The Blight | 마름병 지대\* |

#### Deep Aether (깊은 에테르)
| 영문 | 의역(\*) |
|---|---|
| Aerglow Forest / Blue / Mystic | 에어글로우 숲(파랑/신비)\* |
| Aerlavender Fields | 에어라벤더 들판\* |
| Yagroot Swamp | 야그루트 늪\* |
| Golden Heights | 황금 고지\* |
| Luminescent Forest | 발광 숲\* |
| Cloud / Storm Cloud / Overgrown Cloud | 구름 / 폭풍 구름 / 무성한 구름\* |

#### Ancient Aether (고대 에테르)
| 영문 | 의역(\*) |
|---|---|
| Sun Forest | 태양 숲\* |
| Sakura Jungle | 사쿠라 정글\* |
| Skyroot Jungle | 스카이루트 정글\* |
| Wyndcaps Highland / Peaks / Taiga | 윈드캡 고원 / 봉우리 / 타이가\* |
| Elevated Forest / Clearing / Caverns | 고지 숲 / 빈터 / 동굴\* |
| Holystone / Frozen Caverns | 성석 / 얼어붙은 동굴\* |
| Sky Lake | 하늘 호수\* |

---

### 2-4. 언더가든 (Undergarden)

기암 채굴 기반의 지하 차원. 안개와 형광 버섯이 특징. 번역 완비.

| 바이옴 (한국어) | 영문 | 특징 (이름 기반) |
|---|---|---|
| 안개줄기 숲 | Smogstem Forest | 기본 지형, 안개줄기 나무 |
| 서리 안개줄기 숲 | Frosty Smogstem Forest | 한랭 변형 |
| 흔들나무 숲 | Wigglewood Forest | 흔들나무 |
| 울창한 숲 | Dense Forest | 빽빽한 식생 |
| 핏빛 버섯 습지 | Blood Mushroom Bog | 붉은 버섯 |
| 쪽빛 버섯 습지 | Indigo Mushroom Bog | 남색 버섯 |
| 새까만 버섯 습지 | Ink Mushroom Bog | 검은 버섯 |
| 장막 버섯 습지 | Veil Mushroom Bog | 형광 버섯 |
| 안개 첨탑 | Smog Spires | 솟은 첨탑 지형 |
| 그롱글생장지 | Gronglegrowth | 고유 식생 지대 |
| 잊혀진 평야 | Forgotten Field | 평원 |
| 얼어붙은 땅 | Frostfields | 한랭 평원 |
| 고대 바다 / 죽은 바다 / 빙해 | Ancient / Dead / Icy Sea | 수역(고요·위험·한랭) |
| 메마른 심연 | Barren Abyss | 황량한 저지대 |

---

### 2-5. 블루 스카이 — Everbright · Everdawn

**두 개의 하늘 차원**을 가진 모드. *Everbright*(낮·서늘) 와 *Everdawn*(황혼·독성) 으로 나뉘며, 차원별로 광석·던전이 다르다. 번역 완비.

| 바이옴 (한국어) | 영문 | 추정 차원 / 특징 |
|---|---|---|
| 명지 | Brightlands | Everbright 기본 |
| 시원한 초원 | Brisk Meadow | 서늘한 평원 |
| 응달수림 | Shaded Woodlands | 그늘진 숲 |
| 눈 덮인 침엽수림 | Snow Covered Pines | 한랭 침엽수 |
| 진창눈 평원 / 냉담한 숲 | Slushlands / Frostbitten Forest | 눈·얼음 지대 |
| 극고지 / 극지 | Polar Highland | 극지 고원 |
| 수정 모래 언덕 / 수정 악지 | Crystal Dunes / Roughs | 수정 사막 지형 |
| 해 지는 단풍나무 숲 | Sunset Maple Forest | Everdawn 단풍 |
| 초승달 과수원 (강) | Crescent Orchard (Lake) | 과수원·수역 |
| 무더운 풀밭 | Searing Grassland | 더운 평원 |
| 빨개초 숲 | Brumble Forest | 붉은 식생 |
| 달빛 저수지 / 오름시내 | Moonlit Reservoir / Rising Creek | 수역 |
| 곁눈질 바다 (깊은) | (Deep) Peeking Ocean | 차원 바다 |
| 한낮의 해변 | Midday Shore | 해변 |
| 이상한 골짜기 | Unorthodox Valley | 기이한 지형 |

> 정확한 바이옴별 소속 차원(Everbright/Everdawn)은 파일의 바이옴 키만으로는 단정하기 어려워, 이름·자원(눈/수정=Everbright, 독·단풍=Everdawn 경향)으로 **추정** 표기했다.

---

### 2-6. 디 아더사이드 (Deeper Darker)

바닐라 **딥 다크**를 확장하고, 기반암 아래 **Otherside(아더사이드)** 차원을 추가한다. 워든·스컬크 테마. **번역 파일에 한국어 없음 → 영문 + 의역(\*)**.

| 영문 | 의역(\*) | 특징 |
|---|---|---|
| Deeplands | 딥랜드\* | 아더사이드 기본 지형 |
| Echoing Forest | 메아리 숲\* | 스컬크 식생 |
| Blooming Caverns | 만개한 동굴\* | 발광 식생 |
| Overcast Columns | 흐린 기둥지대\* | 솟은 기둥 지형 |

---

### 2-7. 엔드 확장 (Better End)

바닐라 엔드를 풍성하게 재구성한다. 코러스·결정·발광 식생 중심. 번역 완비.

| 바이옴 (한국어) | 영문 | 특징 (이름 기반) |
|---|---|---|
| 안개 낀 버섯 지대 | Foggy Mushroomland | 입문 버섯 지대 |
| 후렴 숲 | Chorus Forest | 코러스 식물 |
| 수정 산맥 / 채색 산맥 | Crystal / Painted Mountains | 결정·채색 지형 |
| 빛나는 초원 | Glowing Grasslands | 발광 초원 |
| 그림자 숲 / 그림자 계곡 | Shadow Forest / Umbra Valley | 어두운 위험 지대 |
| 밤그림자 삼나무 숲 | Nightshade Redwoods | 어두운 거목림 |
| 거대한 호수 (숲) | Megalake (Grove) | 엔드 수역 |
| 호박 지대 | Amber Land | 호박 자원 |
| 만발한 첨탑 | Blossoming Spires | 솟은 식생 첨탑 |
| 유황천 | Sulfur Springs | 유황 온천 |
| 우산 정글 | Umbrella Jungle | 우산형 식생 |
| 랜턴 숲 / 네온 오아시스 | Lantern Woods / Neon Oasis | 발광 식생 |
| 드래곤 묘지 | Dragon Graveyards | 위험·희귀 자원 |
| 칙칙한 불모지 / 얼음 별 | Dust Wastelands / Ice Starfield | 황량 지대 |
| (빈/무성한) 오로라·스마라그댄트·엔드 동굴 | (Empty/Lush) Aurora / Smaragdant / End Cave | 지하 동굴 |
| 옥 동굴 | Jade Cave | 결정 동굴 |

---

### 2-8. 동굴 차원 (Alex's Caves)

기반암 아래로 통하는 **거대 동굴 바이옴**. 각각 테마·몹·자원이 극단적으로 다르다. 번역 완비(일부 키만 등록).

| 바이옴 (한국어) | 영문 | 특징 (이름 기반) |
|---|---|---|
| 자석 동굴 | Magnetic Caves | 자성·전자기 테마 |
| 원시 동굴 | Primordial Caves | 공룡·원시 생태 |
| 독성 동굴 | Toxic Caves | 방사능·돌연변이 |
| 심연의 틈새 | Abyssal Chasm | 심해·암흑 |
| 버림받은 구덩이 | Forlorn Hollows | 언데드·고딕 |
| (사탕 동굴) | Candy Cavity | 사탕 테마 *(KO 미등록, 영문만 존재)* |

---

## 3. 차원 입장 방법

> 아래는 모드 일반 사양에 기반한 간단 안내다. 모드팩 고유 변경(포탈 차단/퀘스트 게이팅 등)이 있을 수 있으니, 자세한 진행은 퀘스트(FTB Quests)와 `9_구조물_위키.md`를 함께 참고하라.

| 차원 | 입장 방법 (개요) |
|---|---|
| **황혼의 숲** | 2×2 물 웅덩이를 꽃으로 둘러싸고 다이아몬드를 던져 포탈 활성화 |
| **에테르** | 글로우스톤으로 포탈 틀을 만들고 물 양동이로 활성화 (Aether Portal) |
| **언더가든** | 카타클라스마이트 틀(전용 블록)을 만들고 점액볼로 활성화 |
| **블루 스카이 (Everbright/Everdawn)** | 각 차원의 전용 포탈 블록을 만들어 입장 (Everbright·Everdawn 두 포탈이 별개) |
| **디 아더사이드 (Deeper Darker)** | 딥 다크 / 고대 도시에서 **아더사이드 포탈** 활성화 |
| **엔드 (Better End)** | 바닐라와 동일하게 엔드 포탈로 진입, 본섬 밖으로 가면 확장 바이옴 |
| **알렉스 동굴 (Alex's Caves)** | 각 동굴 바이옴 전용 포탈 블록을 제작해 입장 (바이옴별 별도 포탈) |

---

## 4. 바이옴별 추천 활동

- **초반 자원 / 목재 다양화** → Biomes O' Plenty 숲 계열(침엽수림·삼나무 숲·단풍나무 숲)
- **마법 자원 · 보스 진행** → 황혼의 숲 (반딧불이 숲 → 어둠의 숲 → 고원 순으로 난이도 상승)
- **하늘 자원 · 비행 탐험** → 에테르 계열 (스카이루트 숲에서 시작, 확장 모드로 후반 자원)
- **형광 채굴 · 고유 광석** → 언더가든 (버섯 습지·안개줄기 숲)
- **차원 광석 · 던전 파밍** → 블루 스카이 (Everbright=서늘/수정, Everdawn=독성/단풍)
- **엔드 후반 자원 · 결정** → Better End (수정 산맥·드래곤 묘지)
- **테마형 고위험 파밍** → Alex's Caves (원시=화석, 독성=돌연변이, 자석=전자기 자원)
- **딥 다크 · 스컬크 탐사** → 디 아더사이드 (워든·스컬크 자원)
- **낚시 / 어종 수집** → 바다·강·호수·딥다크 등 *위치(Location)* 별 어종 차이 (Tide 저널 참고)

---

## 5. 관련 위키 링크

- 자원 상세는 [`12_자원_위키.md`](12_자원_위키.md) 참고
- 구조물 상세는 [`9_구조물_위키.md`](9_구조물_위키.md) 참고
- 어종 / 낚시는 [`../상세/낚시_가이드.md`](../상세/낚시_가이드.md) 참고

---

> 본 문서는 모드팩 실제 lang 파일(`biome.*` 키)에 등록된 바이옴만을 근거로 작성되었습니다.
> 한국어 미등록 모드(에테르 계열·디 아더사이드)는 영문 + 의역(\*)으로, 파일에 없는 자원·몹 연계는 추측하지 않았습니다.
