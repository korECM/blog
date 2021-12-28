---
emoji: 👮‍♂️
title: Mac에서 항상 한글 키보드 원화(₩)대신 백틱(`) 입력되게 하기
date: '2021-12-29 02:00:00'
author: 쿠키
tags: mac tips
categories: Others
---
맥북 키보드에는 따로 \` 키가 없습니다. 그대신 `₩`과 `~`키가 그려진 자판을 눌러야 백틱(`)을 입력할 수 있습니다.
처음 맥북을 사용할 때 어쩔 때는 백틱이 입력되고 어쩔 때는 원화 표시가 입력되어 기준이 궁금할 수 있는데 바로 한영 상태에 따라서 입력되는 키가 달라집니다.
- 한글 상태일 때는 ₩가 입력된다.
- 영어 상태일 때는 \`가 입력된다.
- 한글 상태에서도 `option`키를 누르면 \`를 입력할 수 있다.

다만 문서를 작성할 때나 코드를 작성할 때 매번 한영 상태를 바꿔주거나 `option` 키를 누르기엔 너무 귀찮습니다. 이는 아래와 같은 방법들로 해결할 수 있습니다.

## Mac의 DefaultKeybindings 설정하기 
Mac OS의 **Cocoa’s text system**은 `~/Library/KeyBindings/`에 `DefaultKeyBinding.dict` 파일을 만들어 커스텀할 수 있습니다.
이에 대한 자세한 내용은 [공식 문서](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/EventOverview/TextDefaultsBindings/TextDefaultsBindings.html) 에 나와 있습니다.

우선 `~/Library/KeyBindings` 폴더에 설정 파일을 만들어줘야 합니다. `KeyBindings` 폴더는 처음에는 원래 없으므로 없다면 아래와 같이 생성해줍니다.

```shell
$ mkdir -p ~/Library/KeyBindings
```

키보드 설정을 오버라이드하기 위해서는 `DefaultKeyBinding.dict` 파일을 만들어야 합니다. 여기에 우리만의 커스텀한 설정들을 저장해놓을 수 있습니다.
`DefaultKeyBinding.dict` 파일을 만들고 아래 내용을 작성하고 저장하면 됩니다.

```shell
$ vi ~/Library/KeyBindings/DefaultKeyBinding.dict
```

우리가 ₩키 입력을 \` 입력으로 오버라이드 해야하므로 아래와 같이 설정 파일을 작성하면 됩니다.

```json
{
    "₩" = ("insertText:", "`");
}
```

위 내용을 입력해서 저장하고 재부팅하거나 원하는 애플리케이션을 다시 키면 한글 상태에서도 \`만 입력되는 것을 확인할 수 있습니다.

> 몇몇 글에서는 `DefaultKeyBinding` 대신 `DefaultkeyBinding`이라는 이름을 사용하는 것을 볼 수 있습니다.
> 두 파일 모두 동작하는 것으로 보이나 공식 문서에서 `DefaultKeyBinding.dict`라는 이름을 사용하니 이 글에서는 `DefaultKeyBinding.dict`를 사용했습니다.

이렇게 파일을 만들고 직접 설정하는 것 대신 **karabiner-elements**를 이용하면 한번에 편하게 설정할 수 있습니다. 저는 이 방법을 사용합니다.

## Karabiner-elements로 설정하기
우선 만약 `karabiner-elements`가 설치되어 있지 않다면 **Homebrew**를 이용해서 설치를 해줍니다.

> **Homebrew**는 Mac용 패키지 관리 애플리케이션입니다. 만약 **Homebrew**에 대해서 잘 모르거나 설치해야 한다면 [이 글](https://www.44bits.io/ko/keyword/homebrew) 을 참고하면 됩니다.

```shell
$ brew install --cask karabiner-elements
```

그리고 [여기](https://ke-complex-modifications.pqrs.org/#korean_won_to_backtick) 에서
₩ 키를 \`키로 바꿔주는 **complex_modifications rules**을 받을 수 있습니다.

![img.png](img.png)

오른쪽 Import 버튼을 누르면 **karabiner-elements**가 실행되면서 아래와 같은 창이 뜹니다.

![img_1.png](img_1.png)

Import를 눌러주면 성공적으로 Import되었다는 창이 뜨면서 방금 가져온 룰을 활성화 할 수 있게 됩니다.

![img_2.png](img_2.png)
그 후 이 창이 뜨면 Enable을 눌러서 룰을 활성하면 됩니다.

![img_3.png](img_3.png)

위와 같이 **Enabled rules**에 추가되었다면 정상적으로 룰이 활성된 것으로 이제 ₩ 대신 를 \`가 항상 입력됩니다.

만약 다시 원래 상태로 되돌리고 싶다면 **Remove** 버튼을 눌러 룰을 삭제해주면 됩니다.

이 방법의 경우 컴퓨터를 재부팅할 필요도 없고 애플리케이션 또한 다시 켤 필요가 없습니다.

```toc
```
