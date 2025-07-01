## 📢 프론트엔드 세션

### 🕑 타임테이블
| 시간 | 내용 |
| --- | --- |
| **11:30 ~ 12:00** | 🕤 참가자 입장 |
| **12:00 ~ 13:00** | 📱 PWA 실습 |
| **13:00 ~ 14:30** | 🍙 점심 시간 |
| **14:30 ~ 15:50** | 💫 S3 + Cloudfront 배포 |
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
- GitHub Actions 및 Screats를 활용하여 CI/CD 구축하기

<br>

### 📁 실습 프로젝트
| 시작 페이지 (Start.jsx) | 로그인 페이지 (Login.jsx) |
| --- | --- |
| ![시작페이지](https://github.com/user-attachments/assets/03fc772c-7e57-4256-ac9c-c204c9e8ac6f) | ![로그인페이지](https://github.com/user-attachments/assets/5f481965-6642-43b6-bc66-ebe72c74459f) |

> 환경변수(.env)를 설정해야 로그인 기능을 사용할 수 있습니다.

```
📦FE_practice
 ┣ 📂.github
 ┃ ┗ 📂workflows
 ┃   ┗ 📜cicd.yml
 ┣ 📂public
 ┃ ┗ 📂favicons
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

<br>

<details>
  <summary><h2>🔧 [실습] PWA 설정</h2></summary>
  <div markdown="1">

**1️⃣ `favicon.svg` 파일을 이용해서 manifest 파일 생성하기**
> Tips!
> [Favicon generator 사용하기](https://realfavicongenerator.net/)

<br>

**2️⃣ `vite-plugin-pwa` 설치하기**
```
npm install vite-plugin-pwa --save-dev
```

<br>

**3️⃣ `vite.config.js` 설정하기**
```
import { VitePWA } from 'vite-plugin-pwa';
```
```
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicons/favicon.ico',
        'favicons/apple-touch-icon.png',
        'favicons/favicon-96x96.png',
        'favicons/favicon.svg'
      ],
      manifest: {
        name: '2025 연합 세션',
        short_name: '연합 세션',
        description: '2025 연합 세션 PWA 앱',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'favicons/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicons/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
});
```

<br>

**4️⃣ `index.html`에 `<head>` 태그 추가하기**
```
<meta charset="UTF-8" />
<link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
<link rel="shortcut icon" href="/favicons/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="연합 세션" />
<meta name="theme-color" content="#ffffff" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
```

<br>

**5️⃣ 로컬에서 테스트 하기**
```
npm run build
npm run preview
```
| 브라우저에서 설치 아이콘 클릭 | PWA 앱 설치 | 바탕화면에서 pwa 앱 확인|
| --- | --- | --- |
| ![pwa1](https://github.com/user-attachments/assets/ece0224d-0429-4ad5-a3c1-c385c6e0b393) | ![pwa2](https://github.com/user-attachments/assets/529d188a-1a65-48b1-93e1-a15d4d60187e) | ![pwa3](https://github.com/user-attachments/assets/9b613570-b852-46e4-a5ed-38cc9101b2e3) |

  </div>
</details>

<details>
  <summary><h2>🚀 [실습] CI/CD 구축</h2></summary>
  <div markdown="1">

**1️⃣ `.env`파일 내용 GitHub Screats 등록하기**
```
VITE_ID = likelion
VITE_PW = likelion1234
```

<br>

**2️⃣ 워크플로우 작성하기**
> `.github/workflows/cicd.yml` 파일을 생성해서 작성해주세요!
```
name: CI/CD

on:
  push:
    branches:
      - main

jobs:
  Deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout source code
        uses: actions/checkout@v3

      - name: Cache node modules
        uses: actions/cache@v3
        with:
          path: node_modules
          key: ${{ runner.OS }}-build-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.OS }}-build-
            ${{ runner.OS }}-

      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: npm install

      - name: Set Environment Variables
        run: |
          echo "VITE_ID=${{ secrets.VITE_ID }}" >> .env
          echo "VITE_PW=${{ secrets.VITE_PW }}" >> .env

      - name: Build
        run: npm run build --mode production

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Deploy to S3
        run: aws s3 sync ./build s3://${{ secrets.AWS_BUCKET_NAME }} --delete

      - name: Invalidate CloudFront
        uses: chetan/invalidate-cloudfront-action@master
        env:
          PATHS: '/*'
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
          DISTRIBUTION: ${{ secrets.DEV_AWS_DISTRIBUTION_ID }}
```

<br>

**3️⃣ `main`브랜치에 push하고 GitHub Action 확인하기**
> S3와 Cloudfront에서도 확인해보기!

  </div>
</details>
