# 🐾 패밀리어·동료 위키

> Medieval MC MMC4 (1.20.1 Forge)의 전투·탐험 보조 동료(펫) 가이드입니다. 길들이는 마법 패밀리어, 경비 주민, 소환 동료를 다룹니다.
> 탈것은 다루지 않습니다 → [`3_탈것_가이드.md`](3_탈것_가이드.md) 참고.

---

## 1. 개요 — 동료 시스템의 종류

이 모드팩에는 크게 세 갈래의 "동료" 시스템이 있습니다.

| 종류 | 모드 | 성격 | 특징 |
|------|------|------|------|
| 🪄 **마법 패밀리어** | Alshanex's Familiars | 길들여서 영구 동행하는 직업형 펫 | 직업별 마법 사용, 강화·소환·보관 시스템 |
| 🛡️ **경비 주민** | Guard Villagers | 마을 주민을 경비병으로 전직 | 마을 방어, 무기·갑옷 장착 |
| 💀 **소환 동료** | Eidolon (강령술) | 언데드 권속을 지팡이에 봉인해 소환 | 소환 지팡이로 호출/회수 |

> ※ Origins 계열 **레버넌트(Revenant)** 언데드 소환은 종족 능력입니다 → [`레버넌트_종족_가이드.md`](레버넌트_종족_가이드.md) 참고.
> ※ 패밀리어의 마법/주문 전반은 → [`15_마법_위키.md`](15_마법_위키.md) 참고.

---

## 2. 🪄 마법 패밀리어 (Alshanex's Familiars)

작은 마법사 모습의 동료를 길들여 데리고 다니는 시스템입니다. 각 패밀리어는 **직업(클래스)**을 가지며, 그 직업에 맞는 마법을 자동으로 사용해 전투를 돕습니다. *(미번역 모드 — 영문 직업명 병기)*

### 2-1. 패밀리어 종류 (직업형)

엔티티 파일 기준 13종이 존재합니다.

| 한글명 | 영문 (entity) | 역할/특징 (파일 근거) |
|--------|---------------|------------------------|
| ⚡ 뇌전술사 패밀리어 | Lightning Mage Familiar (`mage_pet`) | 번개·전기 계열. 도전과제 "Shocking!" |
| 👑 대마법사 패밀리어 | Archmage Familiar (`archmage_pet`) | 최상급 마법사. "Pinnacle of magic" |
| 🔮 소환술사 패밀리어 | Summoner Familiar (`summoner_pet`) | 그림자 기사(Summoned Shadow) 소환 |
| 💀 사령술사 패밀리어 | Necromancer Familiar (`necromancer_pet`) | 죽음/언데드 계열. "Studying death itself" |
| 🏹 사냥꾼 패밀리어 | Hunter Familiar (`hunter_pet`) | 무리 사냥. "Hunting as a pack" |
| 🌿 드루이드 패밀리어 | Druid Familiar (`druid_pet`) | 숲의 수호자. 역병의사로 변환 가능 |
| 🎭 환술사 패밀리어 | Illusionist Familiar (`illusionist_pet`) | 변장·미끼(Decoy) 생성. 정체 폭로 가능 |
| 🔥 화염술사 패밀리어 | Scorcher Familiar (`scorcher_pet`) | 화염 계열. "Hot Bot" |
| ✨ 성직자 패밀리어 | Cleric Familiar (`cleric_pet`) | 치유·구원 계열. "Looking for salvation" |
| ☠️ 역병의사 패밀리어 | Plague Doctor Familiar (`plague_pet`) | 독/역병 계열. 드루이드에서 변환 |
| 🎵 음유시인 패밀리어 | Bard Familiar (`bard_pet`) | 소리(Sound) 마법. 멜로디로 공격/지원 |
| ❄️ 프로스트링 패밀리어 | Frostling Familiar (`frostling_pet`) | 얼음/냉기 계열. "Winter is Coming!" |
| 🐲 드라군 패밀리어 | Dragoon Familiar (`dragon_warrior_pet`) | 용 전사형. 전용 장신구 "Dragon Tear" |

> 💡 변환: **독이 든 약병(Poison Vial)**을 드루이드 패밀리어에게 사용하면 역병의사 패밀리어로 변환됩니다.

### 2-2. 획득 / 길들이기

| 방법 | 설명 (파일 근거) |
|------|------------------|
| 🌍 야생 길들이기 | 세계 곳곳에 패밀리어가 등장 — "tame them all" (도전과제 root) |
| 🍓 크리스탈 베리 | **Crystal Berry**(스니퍼로 발굴)를 패밀리어에게 먹이면 **Memory Fragment** 획득 |
| 🗺️ 오리진 아일랜드 | Memory Fragment를 따라가면 **Origin Island** 발견 → 그곳에서 **의식(Ritual)** 수행 가능 |
| 💎 패밀리어 파편 | 직업별 **Shard**(예: Archmage Shard)를 사용해 패밀리어 생성 — "Reincarnation" |
| 🍾 영혼 포획 | **Bottled Familiar Soul**로 패밀리어 영혼을 병에 포획 |
| ☠️ 부활(네크로맨시) | **Dead King**을 처치하면 죽은 패밀리어를 부활시키는 능력 획득 |

> 🏠 보관: **Familiar House**(패밀리어 집)를 제작해 여러 패밀리어를 저장하고, **Familiar Bed**(친숙한 침대)에서 회복시킬 수 있습니다.

### 2-3. 운용 / 소환 시스템 (FamiliarLib)

| 기능 | 설명 (파일 근거) |
|------|------------------|
| ⌨️ 소환/해제 | 단축키로 패밀리어 소환/해제 (`Summon/Unsummon Familiar` 키) |
| 📋 선택 화면 | `Open Familiar Selection Screen` 키로 보유 패밀리어 선택 |
| 👥 다중 소환 | **Multi Selection** 장신구로 최대 **10마리** 동시 소환/해제 |
| 📦 저장/방랑 모드 | Familiar House에서 **Store Mode**(보관) ↔ **Wander Mode**(자유 배회) 전환 |
| 🎚️ 능력·거리 설정 | 방랑 모드에서 능력 On/Off, 최대 이동 거리(블록) 조정 |
| 🎫 휴대 한도 | 동시에 데리고 다닐 수 있는 패밀리어 수에 상한 존재 |

### 2-4. 강화 (업그레이드)

패밀리어에게 **강화 아이템(Upgrade Item)을 우클릭**해 사용합니다. ("Right click a Familiar to use")

**① 속성 강화 에센스 (티어 1~3)**

| 강화 종류 (Type) | 티어별 아이템 | 효과 |
|------------------|---------------|------|
| 🛡️ Armor | Iron / Diamond / Netherite Plating | 방어력 |
| ❤️ Health | Life Fruit / Golden / Draconic Life Fruit | 체력 |
| 🔮 Spell Power | Lesser / 일반 / Greater Magic Power Essence | 주문력 |
| 🪄 Spell Level | Lesser / 일반 / Greater Magic Level Essence | 주문 레벨 |
| 🧱 Spell Resist | Lesser / 일반 / Greater Magic Resist Essence | 마법 저항 |

> ⚠️ 에센스에는 **티어 상한**이 있어, 패밀리어가 허용하는 최대 티어를 초과하면 사용할 수 없습니다.

**② 소모형 특수 아이템**

| 아이템 | 효과 (파일 근거) |
|--------|------------------|
| 🛡️ Tiny Shield(작은 방패) | 공격을 10% 확률로 막는 능력 부여 |
| 🍄 Strange Mushroom(기묘한 버섯) | "Heartstop" 주문 1회 사용권 부여 |

**③ 직업별 장신구 (Trinket)** — 착용 시 해당 직업 패밀리어가 **더 높은 레벨로 마법 시전**

| 직업 | 장신구 |
|------|--------|
| 대마법사 | 빛나는 왕관 (Shiny Crown) |
| 성직자 | 축복받은 성배 (Blessed Calyx) |
| 드루이드 | 마법의 잎사귀 (Magic Leaf) |
| 사냥꾼 | 사냥꾼의 사슬 (Chain of the Hunter) |
| 환술사 | 골든벨 (Golden Bell) |
| 뇌전술사 | 전기의 문장 (Emblem of Electricity) |
| 사령술사 | 리치의 휘장 (Insignia of the Lich) |
| 역병의사 | 오염된 치즈 (Contaminated Cheese) |
| 화염술사 | 주술사의 촛대 (Conjurer's Candlestick) |
| 소환술사 | 잊혀진 왕관 (Forgotten Crown) |
| 음유시인 | 잃어버린 멜로디 (Lost Melody) |
| 프로스트링 | 프로스트블룸 (Frostbloom) |
| 드라군 | 용의 눈물 (Dragon Tear) |

**④ 착용형 큐리오 (소유자가 착용 → 보유 패밀리어 전체에 적용)**

| 아이템 | 효과 (파일 근거) |
|--------|------------------|
| 🩸 성수의 성배 (Holy Water Grail) | 마나를 소모해 시간이 지나며 체력 회복 |
| 🌳 의지의 조각상 (Statue of Willpower) | 체력 50% 미만 시 **Oakskin**(오크 가죽) 효과 |
| 👻 투명 망토 (Invisibility Robes) | 체력 25% 미만 시 **진정한 투명** 효과 |
| 🌀 엔더의 심장 (Heart of Ender) | 체력 25% 미만 시 5초마다 공격 2회 회피 |
| 💍 친숙한 부활의 반지 | 마나를 대가로 죽은 패밀리어 부활 (핵 반지+영혼화 큐리오) |

> 🔭 **마법의 눈(Magic Eye / Monocle)**: 패밀리어에게 적용된 마법 강화 상태를 확인하는 데 사용.
> 🔧 기타 제작: **Shrinkinator**(패밀리어 크기로 축소), **Mysterious Orb**(하프 획득), **정렬의 친숙한 서적**(착용 시 본인 마법 속성을 패밀리어와 공유).

---

## 3. 🛡️ 경비 주민 (Guard Villagers)

마을 주민을 **경비병(Guard)**으로 만들어 마을을 지키게 하는 모드입니다. *(미번역 일부 — 영문 병기)*

| 항목 | 설명 (파일 근거) |
|------|------------------|
| 👮 모집 방법 | **실직 상태(무직) 주민에게 검을 주면** 경비병으로 전직 ("Give a sword to an unemployed villager") |
| 🏅 도전과제 | "We Want You, as a New Recruit!" — 첫 경비병 모집 시 |
| 🎒 장비 | 경비병 인벤토리에 무기·갑옷 장착 가능 (**체력 / 방어력** 표시) |
| 🥚 생성 알 | 보초병 / 환술사 / 철 골렘 / 눈 골렘 생성 알 제공 |
| 🗣️ 반응 | 동의/거부 등 음성 반응 보유 |

> 💡 운용 팁: 경비병은 마을 거점 방어에 적합합니다. 좋은 무기와 갑옷을 직접 입혀주면 약탈자·몬스터 습격 시 전력이 크게 올라갑니다.

---

## 4. 💀 기타 소환 동료 (Eidolon 강령술)

**Eidolon** 모드의 강령술로 언데드 권속을 부려 동료로 삼을 수 있습니다.

| 요소 | 설명 (파일 근거) |
|------|------------------|
| 🪄 **소환 지팡이 (Summoning Staff)** | 안에 봉인된 언데드를 소환. Shift+클릭으로 소환 대상 전환. **권속(Thrall)은 당신을 지키며 따라다니지만 순간이동은 하지 않음** |
| 🔒 권속 포획 | **속박 의식(Ritual of Capturing)** 또는 **Enthrall 주문**으로 언데드를 지팡이에 봉인 (대상 체력을 1/3 이하로 약화 필요). 소환된 권속을 때리면 다시 지팡이로 회수 |
| 💀 봉인 가능 언데드 | 좀비, 스켈레톤, 팬텀, 위더 스켈레톤, 허스크, 드라운드, 스트레이, **레이스(Wraith)** 등 약한 언데드 — "Lesser Summoning" 의식 |
| 🐦‍⬛ 까마귀 (Raven) | 숲에서 등장, **비트 씨앗으로 길들이기** 가능 (소환수보다는 길들임 동물) |

> ⚠️ 강령술 동료는 언데드라 햇빛에 약하고(Undeath 효과) 좀비 음식만 먹는 등의 제약이 있을 수 있습니다.
> ☠️ Origins **레버넌트** 종족의 언데드 소환은 별도 → [`레버넌트_종족_가이드.md`](레버넌트_종족_가이드.md).

---

## 5. ⭐ 추천 동료 운용

| 목적 | 추천 동료 | 이유 |
|------|-----------|------|
| 🩸 생존·힐 | 성직자 패밀리어 + 성수의 성배 큐리오 | 지속 치유로 라인 유지 |
| 💥 화력 | 대마법사 / 뇌전술사 + 직업 장신구 | 고레벨 마법 시전 |
| 👥 물량전 | 다중 선택 장신구로 패밀리어 최대 10마리 | 동시 다발 전투 |
| 🛡️ 거점 방어 | 경비 주민 + 좋은 무기·갑옷 | 마을 상주 방어 전력 |
| 💀 소모 전위 | Eidolon 권속(언데드) | 부담 없이 앞세우는 전위 |
| 🌿→☠️ 변환 활용 | 드루이드 → (독약병) → 역병의사 | 상황에 맞춰 역할 전환 |

> 💡 패밀리어는 **에센스(티어 1~3)와 장신구·큐리오**를 조합해 키울수록 강해집니다. 초반엔 야생 길들이기로 한 마리를 확보하고, 점차 Origin Island 의식·파편으로 컬렉션을 늘리세요.

---

### 🔗 관련 가이드
- 탈것(말·드래곤 등): [`3_탈것_가이드.md`](3_탈것_가이드.md)
- 레버넌트 언데드 소환(종족): [`레버넌트_종족_가이드.md`](레버넌트_종족_가이드.md)
- 마법·주문 전반: [`15_마법_위키.md`](15_마법_위키.md)
