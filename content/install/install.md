# 🛠️ 한글패치 설치 가이드

> Medieval MC [FORGE] MMC4 (마인크래프트 1.20.1) 한글패치 설치 방법입니다.
> **개별(클라이언트) 한글패치만** 설치하면 됩니다. 서버 한글패치는 넣지 않아도 됩니다.

<div class="dl-row">
<a class="dl-btn" href="downloads/Medieval_Korean_patch_byJJ_mode.zip" download>📥 모드 한글패치 다운로드 <small>(리소스팩 zip · 약 518KB)</small></a>
<a class="dl-btn ghost" href="downloads/Medieval_Korean_patch_byJJ_quest.zip" download>📜 퀘스트 한글패치 <small>(싱글플레이용 · 선택)</small></a>
</div>

> 💡 위 **모드 한글패치 zip** 을 받아 4번 단계처럼 `resourcepacks` 폴더에 넣으면 됩니다. (서버 접속용은 이것만 있으면 됩니다)

---

## 1️⃣ 자바(Java 17) 설치

자바가 필요한 모드팩이라 **Java 17** 설치가 필요합니다.

- 다운로드: <https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html>

링크에 들어가서 **자기 컴퓨터에 맞는 Java 17** 을 다운로드하고 설치해 주세요.

---

## 2️⃣ 커스포지(CurseForge) 다운로드 후 실행

대형 모드팩이라 **CurseForge 런처**를 먼저 설치해야 합니다.

- 다운로드: <https://www.curseforge.com/>

링크에 들어가서 **가입 → 마인크래프트 계정 연동**까지 한 다음 실행해 주세요.

---

## 3️⃣ 모드팩 다운로드

CurseForge에서 **"Medieval MC [FORGE]"** 를 검색한 후 설치해 주세요.

- **버전: 1.20.1 v39** (가장 최신 버전)

> 대형 모드팩이라 다운로드·첫 실행에 시간이 걸릴 수 있습니다.

---

## 4️⃣ 한글패치 설치

1. 모드팩 설치가 끝나면, **Play 버튼 옆 `…`(점 3개)** → **Open Folder** 를 누릅니다.
2. 열린 폴더 안에서 **`resourcepacks`** 폴더를 찾습니다.
3. 그 안에 **한글패치 zip 파일**(`Medieval_Korean_patch_byJJ_mode.zip`)을 **압축 풀지 말고 그대로** 넣어주세요.

> 📥 한글패치 zip은 이 사이트의 **다운로드** 링크(또는 배포처)에서 받을 수 있습니다.

---

## 5️⃣ 실행 및 한글패치 적용

멀티플레이어 서버 주소: **`168.110.126.177`**

게임을 실행하고 접속한 뒤, 아래 2가지를 설정하면 끝입니다.

1. **설정(Options) → 언어(Language) → 한국어로 변경**
2. **설정 → 리소스팩(Resource Packs)** → 왼쪽 목록에서 **"Medieval_Korean_patch_byJJ"** 를 찾아 **오른쪽(적용됨)으로 옮기기**

> ✅ **언어 한국어 + 리소스팩 활성화**, 두 가지가 모두 되어야 한글로 표시됩니다.

---

## ✅ 적용 확인 / 문제 해결

| 증상 | 해결 |
|---|---|
| 한글이 안 보임 | 리소스팩이 **오른쪽(적용됨)** 인지 + **언어가 한국어**인지 확인 |
| 리소스팩 목록에 안 보임 | zip을 **풀지 말고** 그대로 `resourcepacks` 폴더에 넣었는지 확인 |
| 한글이 □(네모)로 깨짐 | 일부 모드가 자체 폰트를 써서 그렇습니다. 해당 부분만 영어로 둔 곳도 있어 정상입니다. |

> 💡 퀘스트북 한글은 **서버에서 자동 동기화**되므로, 개별 플레이어는 위 리소스팩만 적용하면 됩니다.
