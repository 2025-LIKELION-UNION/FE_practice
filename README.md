## 📢 프론트엔드 세션

### 🕑 타임테이블
| 시간 | 내용 |
| --- | --- |
| **12:30 ~ 13:00** | 🕤 참가자 입장 |
| **13:00 ~ 14:00** | 📱 PWA 실습 |
| **14:00 ~ 14:20** | 💭 쉬는 시간 |
| **14:20 ~ 15:50** | 🚀 S3 + Cloudfront 배포 |
| **15:50 ~ 16:10** | 💭 쉬는 시간 |
| **16:10 ~ 17:10** | ⚡️ CI/CD 구축 |
| <strong>17:30 ~</strong> | 🍻 Beer Networking |

<br>

### ‼️ 사전 준비
`FE_practice` 레포 fork 해서 개인 로컬에 clone 해오기 <br>
> **반드시 fork 한 개인 레포를 clone해서 작업해주세요!*

<br>

### 💭 실습 목표
- Vite 환경에서 PWA 구현하기
- AWS S3 + Cloudfront를 사용하여 배포하기
- GitHub Actions 및 Secrets를 활용하여 CI/CD 구축하기

<br>

### 📁 실습 프로젝트
| 시작 페이지 (Start.jsx) | 로그인 페이지 (Login.jsx) |
| --- | --- |
| ![시작페이지](https://github.com/user-attachments/assets/03fc772c-7e57-4256-ac9c-c204c9e8ac6f) | ![로그인페이지](https://github.com/user-attachments/assets/5f481965-6642-43b6-bc66-ebe72c74459f) |

> 환경변수(.env)를 설정해야 로그인 기능을 사용할 수 있습니다.

```
📦FE_practice
 ┣ 📂public
 ┃ ┗ 📜favicon.svg
 ┣ 📂src
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜Start.jsx
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜GlobalStyles.js
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜auth.js
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜main.jsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜vite.config.js
```