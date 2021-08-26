---
emoji: ❓
title: ERESOLVE unable to resolve dependency tree 해결하기
date: '2021-08-26 23:00:00'
author: 쿠키
tags: node javascript typescript error npm yarn
categories: Javascript/Typescript
---

## 상황
블로그를 만들기 위해 Gatsby Starter 메뉴얼에 따라서 아래 명령어를 실행했다.
```shell
npx gatsby new blog https://github.com/TryGhost/gatsby-starter-ghost
```
공식 문서에서 제공하는 설치 방법임에도 불구하고 아래와 같은 오류가 발생했다.
```shell
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: gatsby-starter-ghost@2.0.0
npm ERR! Found: react@17.0.2
npm ERR! node_modules/react
npm ERR!   react@"17.0.2" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^16.9.0" from @tryghost/helpers-gatsby@1.0.56
npm ERR! node_modules/@tryghost/helpers-gatsby
npm ERR!   @tryghost/helpers-gatsby@"1.0.56" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See /Users/korECM/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:

 ERROR

Command failed with exit code 1: npm install



  Error: Command failed with exit code 1: npm install

  - error.js:60 makeError
    [6a76b9237e625090]/[execa]/lib/error.js:60:11

  - index.js:118 handlePromise
    [6a76b9237e625090]/[execa]/index.js:118:26

  - task_queues.js:93 processTicksAndRejections
    internal/process/task_queues.js:93:5

  - init-starter.js:135 install
    [6a76b9237e625090]/[gatsby-cli]/lib/init-starter.js:135:7

  - init-starter.js:202 clone
    [6a76b9237e625090]/[gatsby-cli]/lib/init-starter.js:202:3

  - init-starter.js:343 initStarter
    [6a76b9237e625090]/[gatsby-cli]/lib/init-starter.js:343:5

  - create-cli.js:494
    [6a76b9237e625090]/[gatsby-cli]/lib/create-cli.js:494:9
```

자세히 오류를 살펴보면 아래와 같이 해석할 수 있다.
`@tryghost/helpers-gatsby@1.0.56` 모듈을 설치하던 중 `react@"^16.9.0"` 에 의존하는 것을 발견했다.
그러나 `root project`에서 발견된 `react`는 `17.0.2` 버전이라 `react@"^16.9.0"` 의존성을 해결하지 못했다.
그 아래에 해결책 또한 제공하고 있다. `npm install` 할 때 `--force` 또는 `--legacy-peer-deps`와 함께 실행하라는 것이다.
즉, `npm install --legacy-peer-deps` 를 실행하면 위 의존성 문제를 해결할 수 있다.

## npm의 의존성 관리
조금 더 자세한 설명은 아래와 같다. npm은 아래 5가지 종류의 의존성을 제공하고 있다.

* dependencies
	* 프로젝트에서 실제로 의존하고 호출하는 의존성들
* devDependencies
	* 개발할 때만 의존하는 의존성들(예를 들면 코드 포맷팅을 예쁘게 해주는 라이브러리)
* peerDependencies
	* 내 패키지가 다른 패키지로부터 직접 불려지는(require) 것은 아니지만 특정 버전의 패키지와 호환된다는 것을 명시
	* 즉, 내가 다른 패키지의 특정 버전과 호환된다는 것을 뜻한다
	* 자세한 내용은 [여기](https://medium.com/angular-in-depth/npm-peer-dependencies-f843f3ac4e7f) 참고
* optionalDependencies
	* 선택적인 의존성으로 없거나 설치에 실패해도 npm 패키지 설치 과정이 중단되지 않아 다른 라이브러리 설치에 영향을 주지 않는 의존성들
* bundledDependencies
	* 내 패키지와 함께 제공되는 일련의 패키지들. 타사 라이브러리가 NPM에 없거나 일부 프로젝트를 모듈에 포함하려는 경우 사용할 수 있다.

위 오류도 `@tryghost/helpers-gatsby@1.0.56`가 명시한 peerDependency는 `^16.9.0` 이지만 `package.json`에 명시된 `react`의 버전은 `17.0.2` 이므로 오류가 난 것이다.
npm 3버전부터 npm 6버전까지는 `npm install` 과정에서 `peerDependencies`를 무시하고 버전이 일치하지 않으면 경고 메시지만 보여줬지만 7버전부터는 실제로 `peerDependencies`를 설치한다. 그리고 *버전이 일치하지 않으면 에러를 낸다.* 그래서 우리가 위 에러를 만나게 된 것이다.
결과적으로 위 에러는 `peerDependencies` 버전이 일치하지 않는데 npm 7 버전부터는 에러를 내면서 설치를 종료한다. 해결책은 아래와 같은 방법이 있다.

## 해결 방법
1. `npm install --force`
로컬에 다운로드 복제본이 존재하더라도 다시 온라인에서 다운로드 받는다.

2. `npm install --legacy-peer-deps`
마치 6버전 이하에서 동작하던 것처럼 `peerDependencies`를 무시한다.

3. `npm config set legacy-peer-deps true`
모든 `npm install`에서 `legacy-peer-deps`로 동작하도록 설정한다. `npm`에서 권장하지 않는 방법이다.

4. `yarn install`
내가 블로그로 만드려고 한 [Gatsby Starter](https://github.com/TryGhost/gatsby-starter-ghost)는 `yarn`으로 만들어진 Repo다. readme에서도 `yarn`으로 설치하는 것을 안내하고 있다. `gatsby-cli`가 일괄적으로 `npm install`을 사용하면서 발생한 문제로 보인다. `yarn`으로 설치하면 정상적으로 모듈들이 설치된다.

```toc
```
