# React Native Weather App
Weather App을 만들면서 React Native 배우기 & 정리

강의 링크: https://youtu.be/VQ1dFDIT2wQ

## ScreenShot

![weather-app](https://user-images.githubusercontent.com/45552388/63622033-8397bc00-c630-11e9-818a-750f53d13799.png)


***
## Introduction
### Expo란?
React Native를 위한 create react app 같은 것으로 간단하게 초기환경을 세팅해준다.

### React Native CLI vs Expo
React Native CLI 방식은 native files들을 더 많이 컨트롤 하고 싶을때!

Expo는 모든 native files들을 숨기고(natvie files에 접근권이 없다) 모든 걸 관리. 

큰 장점은 나의 휴대폰에서 앱을 테스트할 수 있다. 또한 React Native CLI 보다 더 다양한 API를 가지고 있고 building process도 처리해줌.

### Expo CLI Quickstart
```
npm install –g expo-cli
```

create a new React Native Project(rn-weather에 프로젝트 이름 넣기)
```
expo init rn-weather
cd rn-weather
npm start # expo start
```
### 우선 알아야할 점!
리액트 네이티브는 모바일 웹 앱, HTML5 앱, 하이브리드 앱이 아닌 네이티브 앱을 만드는 것

* 하이브리드 앱 : 앱의 기반이 되는 콘텐츠 영역은 HTML 기반의 웹 앱으로 제작, 최종 앱 배포에 필요한 패키징 처리만 아이폰, 안드로이드 플랫폼 안에서 처리한 어플리케이션
* 네이티브 앱 : 모바일 기기에 최적화된 언어로 개발된 앱으로 안드로이드 SDK를 이용해 java 언어로 만드는 안드로이드 앱과 ios SDK를 이용해 Objective-C 언어로 개발된 아이폰 앱 등
* 모바일 웹 : 데스크 탑 브라우저에 실행되는 웹 어플리케이션을 모바일 스크린 크기로 줄여 놓은 것
* 웹 앱: 모바일 웹과 네이티브 앱을 결합한 것으로 모바일 웹의 특징을 가지면서 네이티브 앱의 장점도 갖음

### How does React Native Work?
Android, iOS 둘 다 javascript 엔진을 가지고 있기 때문에 javascript를 실행할 수 있다.

리액트 네이티브가 하는 일은 iOS 또는 Android의 네이티브 엔진에 메시지(자바스크립트를 이용한)를 보내기 위해서 자바스크립트를 이용하는 것.  연결을 이어주는 Bridge 같은 것이다.

```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}
```
Text, View 같은 컴포넌트들이 javascript와 android나 ios의 Bridge

javascript인 컴포넌트를 사용하지만 이 컴포넌트 안에는 bridge가 있는 것  

-> 누군가 작성해 놓은 Swift code나 Java code로 iphone이랑 android가 이 컴포넌트를 이해하게 하는 것이 React Native의 역할

### Expo 특징
- app.json : expo가 읽게 될 configuration 파일
- live reload: 저장하면 자동으로 refresh되고 변경되는 것
- 항상 브릿지가 필요하기 때문에 성능이 느려지는 것이 단점
- 최종적으로 view안에 모든걸 집어 넣어야함
- React Native는 span을 사용하지 않는다 모든 text는 <Text></Text> 컴포넌트 안으로 들어가야 함.
- 리액트 네이티브는 css 엔진을 구현했기 때문에 css 기능들을 사용할 수 있다
***
## 참조
- 네이티브앱 vs 모바일웹앱 vs 하이브리드앱 : https://m.blog.naver.com/acornedu/221012420292
- 리액트 네이티브 소개 : https://m.blog.naver.com/gi_balja/221284382919


