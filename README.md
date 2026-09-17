# 나만의 웹사이트

UNIST Peer Leadership · AI로 만들되 AI 티는 안 나게

이 저장소를 본인 계정으로 복제해서 자기 사이트를 만든다.

## 파일

```
index.html   이 파일이 사이트다
style.css    모든 스타일. 색·간격·글자 크기를 맨 위 변수로 먼저 정의한다
images/      이미지
fonts/       웹폰트 (woff2)
sources/     출처 사진·스캔
NOTES.md     회차별 기록
AGENTS.md    AI 에이전트가 읽는 규칙
```

## 배포

GitHub에 push하면 Cloudflare Pages가 자동으로 다시 배포한다.

Cloudflare Pages 빌드 설정

| 항목 | 값 |
|---|---|
| Framework preset | None |
| Build command | `exit 0` |
| Build output directory | `/` |
| Production branch | `main` |

## 매번 확인할 다섯 가지

브라우저만으로 확인할 수 있다. 커밋하기 전에 한 번씩 본다.

1. 창을 360px까지 좁혔을 때 가로 스크롤이 생기는가
2. 마우스 없이 Tab만으로 모든 링크에 갈 수 있고, 지금 어디 있는지 보이는가
3. 내 이름을 다른 사람 이름으로 바꿔도 말이 되는 문장이 있는가
   (있으면 그 문장은 내 것이 아니라 기본값이다)
4. `style.css`에서 `출처:`를 검색하면 몇 개가 나오는가
   그 소재를 `sources/`에 실제로 갖고 있는가
5. 마지막 커밋의 변경 내용에 내가 요청하지 않은 줄이 있는가

## 규칙

작업 규칙은 [AGENTS.md](./AGENTS.md)에 있다.
AI 에이전트가 이 파일을 읽고 그 규칙을 따른다.
규칙을 바꾸고 싶으면 그 파일을 고친다.
