# 👹 몬스터(몹) 위키 — Medieval MC MMC4

> Medieval MC MMC4 (1.20.1 Forge) 에 추가되는 **일반 몹(적대·중립·수동)** 총정리 위키.
> 모드팩 실제 파일(`work/extracted_mod/<modid>/en_us.json` / `ko_kr.json`)의 `entity.*` 키에 근거합니다.
> 한국어 번역명이 있는 모드(Alex's Mobs · Alex's Caves · Ice and Fire · Mutant Monsters · Friends&Foes · Undergarden · Aether · Twilight Forest · Aquamirae 등)는 번역명을 우선 사용하고,
> 미번역 모드(Hybrid Aquatic · Whisperwoods · Faunify · Enderman Overhaul · Illager Invasion · Raided · Sons of Sins · Realm RPG · Blue Skies 등)는 **영문 + 의역**을 병기하며 그 사실을 표기했습니다.
> 몹이 워낙 많아 **모드별 대표·중요 몹 위주**로 정리했고 전부 나열하지는 않습니다.
> 성향·드랍·서식이 파일에 명확하지 않은 경우 추측하지 않고 비워두거나 "—"로 표기했습니다.

## 목차
1. [몹 개요 (분류·위협도·드랍의 의미)](#1-몹-개요)
2. [적대 몹 표](#2-적대-몹-표)
3. [중립 몹 표](#3-중립-몹-표)
4. [수동·우호 몹 표](#4-수동우호-몹-표)
5. [일러저·습격 몹 (Illager Invasion · Raided)](#5-일러저습격-몹)
6. [해양·물고기 요약 (Hybrid Aquatic · Seadwellers)](#6-해양물고기-요약)
7. [알아두면 좋은 위험 몹 Top · 유용한 드랍 몹](#7-알아두면-좋은-위험-몹-top--유용한-드랍-몹)

위협도 표기: ★(약함) ~ ★★★★★(매우 위험 / 준보스급)

---

## 1. 몹 개요

이 모드팩의 몹은 바닐라보다 훨씬 다양하며, 출처 모드에 따라 성격이 크게 다릅니다.

| 분류 | 설명 | 대표 모드 |
|---|---|---|
| **적대 (Hostile)** | 플레이어를 보면 먼저 공격. 차원·바이옴·구조물별로 출현 | Alex's Caves, Undergarden, Sons of Sins, Mutant Monsters, Realm RPG Demons, Twilight Forest |
| **중립 (Neutral)** | 평소엔 무관심하나 공격하면 반격. 일부는 길들이기 가능 | Alex's Mobs(곰·고릴라 등), Ice and Fire(드래곤·트롤 등) |
| **수동·우호 (Passive)** | 공격하지 않음. 길들이기·교배·자원 채취 대상 | Alex's Mobs(야생동물), Faunify(소동물·곤충), Friends&Foes |
| **물고기·해양** | 낚시·해양 탐험용. 대부분 수동이나 상어류는 적대 | Hybrid Aquatic, Seadwellers, Alex's Mobs(해양) |

**드랍의 의미**: 많은 몹의 드랍은 단순 식량이 아니라 **무기·장비·물약 재료**입니다.
예) Alex's Mobs 드랍은 토템·장신구 제작, Alex's Caves 드랍은 특수 무기/장비, Sons of Sins 장기(Organs)는 "Sickle of Struggle" 무기 제작에 쓰입니다(상세: `12_자원_위키.md`, `5_무기_위키.md`).

> ⚠️ **보스급은 이 문서에서 다루지 않습니다.** Ice and Fire 드래곤/히드라, Aether 태양 정령, Twilight Forest 리치/나가, Whisperwoods 히르쉬가이스트, Aquamirae 코르넬리아 선장 등 보스/미니보스는 → **`13_보스_위키.md`** 참고.

---

## 2. 적대 몹 표

플레이어를 먼저 공격하는 몹입니다. (대표·중요 위주)

| 몹명 | 출처 모드 | 서식 (차원·바이옴) | 위협도 | 주요 특징·드랍 |
|---|---|---|---|---|
| 핵크리퍼 (Nucleeper) | Alex's Caves | 방사능 황무지(Radioactive) 동굴 | ★★★★★ | 폭발 시 **핵폭발** 유발. 극도로 위험 |
| 감시자 (Watcher) | Alex's Caves | 처참한 어둠(Forlorn Hollows) | ★★★★ | 시선 공격, 정신 교란 계열 |
| 심해 어인 (Deep One) / 기사 / 마법사 | Alex's Caves | 침수 동굴(Primordial Caves) | ★★★ | 무리 출현. 기사/마법사 변종 별도 |
| Underzealot(언더질롯) / Forsaken(버려진 자) | Alex's Caves | Forlorn Hollows | ★★★ | 어둠 계열 광신도 |
| Corrodent(코로던트) / Vesper(베스퍼) | Alex's Caves | 산성·박쥐 동굴 | ★★ | 산성·비행 적 |
| Vallumraptor(발룸랩터) / Tremorsaurus(트레모사우루스) | Alex's Caves | 선사시대(Primordial) | ★★★~★★★★ | 공룡 포식자, 무리 사냥 |
| Brainiac(브레이니악) / Gammaroach | Alex's Caves | 방사능 황무지 | ★★ | 변이 생물 |
| 뒤틀린 모스코 (Warped Mosco) | Alex's Mobs | 네더 뒤틀린 숲 | ★★★ | 거대 모기, 영혼 흡수 |
| 공허 벌레 (Void Worm) | Alex's Mobs | 엔드 외곽(공허) | ★★★★★ | 준보스급 거대 지렁이, Void Crystal 발사 |
| 라비아탄 (Laviathan) | Alex's Mobs | 네더 용암 바다 | ★★★★ | 용암 속 거대 포식자 |
| 진홍빛 모기 (Crimson Mosquito) | Alex's Mobs | 네더 진홍 숲 | ★★ | 피 흡수, Hemolymph 드랍 |
| 영혼 독수리 (Soul Vulture) | Alex's Mobs | 영혼 모래 골짜기 | ★★ | 영혼 흡수 비행 |
| 본 서펜트 (Bone Serpent) | Alex's Mobs | 네더 | ★★★ | 거대 뼈 뱀 |
| 드롭베어 (Dropbear) | Alex's Mobs | 숲(나무 위 매복) | ★★ | 위에서 기습 |
| Mutant Zombie / Skeleton / Creeper / Enderman | Mutant Monsters | 오버월드(밤·동굴) | ★★★~★★★★ | 바닐라 변종 강화판, 강력한 드랍 |
| Spider-Pig(스파이더 피그) | Mutant Monsters | — | ★★ | 거미+돼지 혼종 |
| Rotwalker / Rotbeast / Rotling | Undergarden | 언더가든(차원) | ★★~★★★ | 부패 좀비류, 무리 |
| Forgotten(잊혀진 자) / Forgotten Guardian | Undergarden | 언더가든 구조물 | ★★★★ | 미니보스급 수호자 |
| Nargoyle / Brute / Stoneborn | Undergarden | 언더가든 | ★★~★★★ | 석화·돌격 계열 |
| Grub / Devourer / Nibbler / Prowler / Butcher | Sons of Sins | 어둠·지하(저주받은 구조물) | ★★~★★★★ | 장기(Organs) 드랍 → 무기 제작 |
| Gulbèr / Blüd / Guzzler / Wistiver | Sons of Sins | 동상 | ★★★ | 거대·기괴 적, 일부 거래(Blud Trade) |
| Stalker(스토커) | Deeper Darker | 어둠의 심연(Otherside) | ★★★★ | 추적형, 워든 계열 분위기 |
| Sculk Centipede / Snapper / Leech | Deeper Darker | Otherside·심층 동굴 | ★★~★★★ | 스컬크 생물 |
| Shattered(샤터드) | Deeper Darker | Otherside | ★★★ | 파편화 적 |
| Imp / Chort / Demon / Demon Minion | Realm RPG Demons | 네더·지옥 구조물 | ★★~★★★ | 악마류 (Demon Lord는 보스→13번) |
| Immortal Skeleton / Knight / Shaman / Executioner | Eeeab's Mobs | 특수 구조물 | ★★★~★★★★ | 불사 군단, 강력 (The Immortal은 보스) |
| Corpse / Guling Sentinel / Nameless Guardian | Eeeab's Mobs | 고대 구조물 | ★★★ | 경비병·시체 계열 |
| Drowned/Skeleton 변종 다수 | Realm RPG Skeletons | 바이옴별(사막·눈·동굴 등) | ★~★★ | 바닐라 스켈레톤의 바이옴 변종 다수 |
| Venom Spider / Diophyde Prowler / Starlit Crusher | Blue Skies | Blue Skies 차원(Everbright/Everdawn) | ★★~★★★★ | 차원 전용 적, Gatekeeper·Summoner 등 |
| Redcap / Kobold / Hedge Spider / Skeleton Druid | Twilight Forest | 황혼의 숲(차원) | ★★~★★★ | 던전·미로 적 (Naga/Lich 등은 보스) |
| Gorgon / Cyclops / Troll / Cockatrice / Stymphalian Bird | Ice and Fire | 동굴·산·구조물 | ★★★~★★★★ | 신화 괴수. 일부 석화·즉사 위험 |
| Dread Thrall / Ghoul / Beast / Knight | Ice and Fire | 공포의 무덤(Graveyard) 구조물 | ★★★ | 언데드 군단 (Dread Queen/Lich는 보스) |
| Sentry / Mimic / Slider / Cockatrice | Aether | 천계(Aether 차원) 던전 | ★★~★★★ | 던전 수호 적 |

> Alex's Caves 차원/바이옴 명칭과 채굴 정보는 `11_바이옴_위키.md` · `09_구조물_위키.md`도 참고.

---

## 3. 중립 몹 표

평소엔 공격하지 않지만 **건드리면 반격**하는 몹입니다.

| 몹명 | 출처 모드 | 서식 | 위협도 | 특징 |
|---|---|---|---|---|
| 회색곰 (Grizzly Bear) | Alex's Mobs | 침엽수림·강 | ★★ | 연어·꿀 먹임. 새끼는 길들이기 가능 |
| 고릴라 (Gorilla) | Alex's Mobs | 정글 | ★★ | 무리 우두머리, 강타 공격 |
| 코모도 드래곤 (Komodo Dragon) | Alex's Mobs | 사바나·건조지 | ★★ | 물면 중독 |
| 악어 (Crocodile) / 카이만 (Caiman) | Alex's Mobs | 늪·강 | ★★★ | 물속 매복, 강한 물기 |
| 무스 (Moose) / 코뿔소 (Rhinoceros) / 들소 (Bison) | Alex's Mobs | 한대림·사바나·평원 | ★★ | 돌진 박치기 |
| 태즈메이니아 데빌 / 너구리 (Raccoon) | Alex's Mobs | 숲 | ★ | 도발 시 공격 |
| 방울뱀 (Rattlesnake) / 아나콘다 (Anaconda) | Alex's Mobs | 사막 / 늪 | ★★ | 중독·압살 |
| 범고래 (Orca) / 해머헤드 상어 (Hammerhead Shark) | Alex's Mobs | 바다 | ★★★ | 해양 포식자 (상어는 사실상 적대) |
| 엘크·코끼리 (Elephant) | Alex's Mobs | 사바나 | ★★ | 길들여 탈것/운반 가능 → `3_탈것_가이드.md` |
| 트롤 (Troll) | Ice and Fire | 동굴·산 | ★★★ | 곤봉 강타, 햇빛에 석화 |
| 히포그리프 (Hippogryph) | Ice and Fire | 평원·산 | ★★ | 길들여 비행 탈것 가능 |
| Myrmex Worker/Soldier(미르멕스) | Ice and Fire | 미르멕스 군락(지하) | ★★~★★★ | 둥지 침입 시 적대화 |
| Iceologer(아이스올로저) / Mauler(몰러) | Friends&Foes | 산악·동굴 | ★★ | 일러저 계열 / 포식자 |
| Wildfire(와일드파이어) | Friends&Foes | 네더 요새 | ★★★ | 블레이즈 강화판 |
| Bighorn Sheep / Boar / Hostile Wolf | Twilight Forest | 황혼의 숲 | ★~★★ | 자극 시 공격 |

---

## 4. 수동·우호 몹 표

공격하지 않으며 길들이기·교배·자원 채취 대상입니다.

| 몹명 | 출처 모드 | 서식 | 용도·특징 |
|---|---|---|---|
| 카푸친 원숭이 (Capuchin Monkey) | Alex's Mobs | 정글 | 길들이면 어깨에 태움, 아이템 던지기 |
| 바다표범 (Seal) / 펭귄류 | Alex's Mobs | 한대 해안 | 물고기 먹임, 귀여운 수동 |
| 로드러너 / 에뮤 (Emu) / 큰부리새 (Toucan) | Alex's Mobs | 사막·초원·정글 | 알·깃털, 일부 탈것 |
| 캥거루 (Kangaroo) / 오리너구리 (Platypus) | Alex's Mobs | 사바나 / 강 | 교배·자원 |
| 눈표범 (Snow Leopard) / 호랑이 (Tiger) / 갈기늑대 | Alex's Mobs | 한대·정글·초원 | 일부 길들이기 |
| 라쿤 / 스컹크 / 슈가글라이더 | Alex's Mobs | 숲 | 소형 수동, 스컹크는 방귀 구름 |
| 무스코(Mungus) / 번펑거스(Bunfungus) | Alex's Mobs | 버섯 바이옴 | 버섯 성장 도움 |
| 다양한 소동물·곤충 (고슴도치·생쥐·무당벌레·사마귀·잠자리·실크모스 등) | Faunify | 다양한 바이옴 | 장식·생태, **Silkworm/Silkmoth는 실크 자원** |
| 리프시프 (Leaf Sheep) / 롤리폴리 (Roly Poly) | Faunify | 바다 / 숲 | 수집형 소동물 |
| 모스(Moth) 14종 | Whisperwoods | 어두운 숲 | 종류별 수집, **고스트 라이트** 관련 |
| Copper Golem / Tuff Golem / Glare / Rascal | Friends&Foes | 동굴·구조물 | 골렘·도우미 몹 |
| Moobloom(무블룸) / Crab(게) | Friends&Foes | 꽃 평원 / 해안 | 무블룸은 꽃버섯소 변종 |
| Aerbunny / Moa / Phyg / Sheepuff / Flying Cow | Aether | 천계(Aether) | 길들이기·탈것(Moa는 비행 탈것) |
| Gloomper / Scintling / Gwibling | Undergarden | 언더가든 | 수동 생물, 일부 식량 |
| Deer / Penguin / Raven / Tiny Bird류 | Twilight Forest | 황혼의 숲 | 수동·장식 |
| 메모프 워커/농부/대장장이 등 (Mermorph) | Seadwellers | 바다(수중 마을) | **수중 주민**, 거래 가능 |
| 고블린 상인 (Goblin Trader / Vein Goblin Trader) | Goblin Traders | 지하·동굴 | **떠돌이 상인** 변종, 희귀 거래 |

> 길들이기·탈것 상세(Moa·코끼리·히포그리프·곰 등)는 → **`../가이드/3_탈것_가이드.md`**

---

## 5. 일러저·습격 몹

습격(Raid)과 약탈자 전초기지를 강화하는 일러저류입니다.

### Illager Invasion

| 몹명 (영문) | 의역 | 역할·특징 |
|---|---|---|
| Provoker | 도발자 | 아군 강화·소환 지원 |
| Basher | 강타자 | 방패 든 근접, 가드 |
| Marauder | 약탈병 | 도끼 돌격 |
| Inquisitor | 심문관 | 정예 근접 |
| Alchemist | 연금술사 | 물약 투척 |
| Sorcerer | 주술사 | 순간이동·마법 |
| Necromancer | 강령술사 | 언데드 소환 |
| Firecaller | 화염술사 | 화염 마법 |
| Invoker / Provoker / Archivist | 소환사/기록관 | 에보커 계열 변종 |
| Surrendered | 항복한 자 | 익사 일러저 변종 |

### Raided

| 몹명 (영문) | 의역 | 역할·특징 |
|---|---|---|
| Electromancer | 전기술사 | 번개·전격 마법 |
| Incinerator | 소각병 | 화염 방사 근접 |
| Inquisitor | 심문관 | 정예 |
| Necromancer | 강령술사 | 언데드 소환 |
| Savager | 사벤저 | 라바저 탑승형 강화 |

> 미번역 모드라 영문 + 의역으로 표기. 습격 난이도가 크게 올라가므로 마을 방어 시 주의. (Aquamirae의 Pillagers Patrol 순찰대도 별도 존재)

---

## 6. 해양·물고기 요약

### Hybrid Aquatic (약 100+ 어종 — 미번역, 낚시·해양 핵심)

상어·해파리·심해어·갑각류 등 **100종 이상**의 해양 생물을 추가합니다. 대부분 수동이나 일부 상어는 위험합니다.

| 분류 | 대표 종 (영문) | 위협도 | 비고 |
|---|---|---|---|
| 상어류 | Basking Shark, Bull Shark, Barracuda, Anglerfish | ★★~★★★ | Bull Shark/Barracuda 공격적 |
| 해파리류 | Box Jellyfish, Barrel Jellyfish, Cosmic Jellyfish 등 다수 | ★~★★ | **Box Jellyfish 접촉 시 중독** |
| 두족류 | Cuttlefish, Arrow Squid | ★ | 수동 |
| 갑각류 | Coconut Crab, Crayfish | ★ | 식량·자원 |
| 관상어 | Clownfish, Betta, Danio, Boxfish 등 | ★ | 낚시·전시 |
| 심해어 | Barreleye, Coelacanth, Blowfish | ★ | 희귀 |

### Seadwellers (수중 주민)

Mermorph(인어형) 주민 — 직업별(Worker/Farmer/Blacksmith/Collector/Architect/Hunter)과 환경별(River/Polar/Depth/Coral) 변종이 있어 **수중 마을에서 거래**합니다.

### Aquamirae (얼음 바다)

Anglerfish, Eel, Spinefish 등 + 침몰선 관련. **코르넬리아 선장·미로의 어머니**는 보스(→13번).

> 어종별 상세·낚시법은 → **`../상세/낚시_가이드.md`**

---

## 7. 알아두면 좋은 위험 몹 Top · 유용한 드랍 몹

### ⚠️ 특히 위험한 일반 몹 Top

| 순위 | 몹 | 왜 위험한가 |
|---|---|---|
| 1 | **핵크리퍼 (Nucleeper)** | 죽으면 핵폭발 — 지형·인벤토리 통째로 날아감. 절대 근접 처치 금지 |
| 2 | **공허 벌레 (Void Worm)** | 엔드 공허의 준보스급, 즉사급 공격 |
| 3 | **Mutant 시리즈** | 좀비·스켈레톤·크리퍼·엔더맨 강화판, 초반엔 도망이 정답 |
| 4 | **Gorgon (Ice and Fire)** | 시선에 노출되면 **석화(즉사)** — 등 돌리고 접근 |
| 5 | **Forgotten / Stalker / Immortal류** | 차원·구조물 정예, 풀강 장비 필요 |
| 6 | **Box Jellyfish (해양)** | 접촉만으로 강한 중독, 다이빙 중 사망 주범 |

### 💰 잡을 가치가 큰 드랍 몹

| 몹 | 드랍·용도 |
|---|---|
| Sons of Sins 몹 (Grub·Devourer·Nibbler 등) | **Organs(장기)** → "Sickle of Struggle" 무기 제작 |
| Alex's Mobs 다수 | 토템·장신구·특수 아이템 재료 (예: Void Worm → 공허 관련, 곰/고릴라 등 식량+가죽) |
| Alex's Caves 적대 몹 | 차원 전용 무기·장비 재료 |
| Mutant Monsters | 강력한 드랍(예: Mutant Skeleton 무기) |
| Ice and Fire 신화 괴수 | 드래곤뼈 외에도 사이렌·고곤 등 고급 재료 |
| 고블린 상인 (Goblin Trader) | 처치보다 **거래**가 이득 — 희귀 아이템 교환 |

상세 드랍 → 무기/장비/자원 위키:
- 무기: `5_무기_위키.md`
- 방어구: `6_방어구_위키.md`
- 자원·재료: `12_자원_위키.md`

---

## 🔗 관련 문서

- **보스/미니보스** (드래곤·리치·태양 정령·코르넬리아 선장 등): → **`13_보스_위키.md`**
- **탈것 가능 생물** (Moa·코끼리·히포그리프·곰 등): → **`../가이드/3_탈것_가이드.md`**
- **어종·낚시**: → **`../상세/낚시_가이드.md`**
- **바이옴/차원별 출현 정보**: → `11_바이옴_위키.md`
- **구조물 내부 몹**: → `9_구조물_위키.md`

> 정보 출처: 각 모드의 `en_us.json` / `ko_kr.json` (`entity.*` 키) 및 LunaPixel 공식 위키. 파일에 없는 성향·드랍은 추측하지 않았습니다.
