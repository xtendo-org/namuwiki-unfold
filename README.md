# 나무위키 펼침

![나무위키 펼침 스크린샷](https://e.xtendo.org/static/img/namuwiki-unfold/screenshot.png)

나무위키의 각주를 모두 제 위치에 펼쳐서 보여줍니다.

## 왜?

각주(footnote)나 미주(endnote)의 원래 용도는 정보를 뒤로 빼내는 것입니다. 글을 읽을 때 글에 포함해야 할 정보이기는 하지만 괄호 등으로 직접 끼워넣으면 자연스러운 글의 흐름을 방해할 경우, 문맥과 상관이 없는 경우, 일반적인 독서에는 불필요하다고 생각되는 경우에 각주로 씁니다. 출처 표기가 좋은 예시입니다. 출처 표기는 법적으로나 윤리적으로나 당연히 해야 하지만 출처 자체는 본문의 의식적 흐름과는 상관이 없으므로 각주나 미주를 쓰기에 알맞습니다.

하지만 많은 나무위키 편집자들은 분명히 본문의 문맥과 관계가 있고 본문에 포함되어야 할 내용, 본문의 문장을 잘 고쳐서 자연스럽게 끼워넣어야 할 정보까지도 각주를 오·남용합니다. 읽기 불편하죠. 매번 마우스를 움직여서 버블 팁을 확인하는 것도 번거롭고 저처럼 [VimFx](https://github.com/akhodakivskiy/VimFx) 같은 걸 써서 키보드로 웹 서핑하는 사람에게는 특히 재앙입니다.

나무위키 펼침은 각주를 제 위치에 펼쳐서 보여주므로 마우스 정조준, 클릭, 스크롤 등의 수고 없이 편리하게 나무위키 문서를 읽을 수 있습니다.

## 설치

### 불여우

1. 불여우 확장인 [그리스멍키](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/)를 설치합니다.
1. [나무위키 펼침 사용자 스크립트](https://github.com/kinoru/namuwiki-unfold/raw/master/namuwiki-unfold.user.js)를 누르면 설치하겠냐고 물어봅니다. 그러라고 합시다.

### 웹킷 기반 브라우저

크롬, 사파리, 오페라 등의 웹킷 기반 브라우저에서는

1. [탬퍼멍키](https://tampermonkey.net/)를 설치합니다.
1. [나무위키 펼침 사용자 스크립트](https://github.com/kinoru/namuwiki-unfold/raw/master/namuwiki-unfold.user.js)를 누르면 설치하겠냐고 물어봅니다. 그러라고 합시다.

## 사용법

그냥 됩니다.

\# 을 눌러서 (즉 <kbd>Shift</kbd> + <kbd>3</kbd>을 눌러서) 각주를 펼쳤다 접었다 할 수 있습니다.
