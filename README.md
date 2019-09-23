# Better for Nature 🏔

채식 식당 찾기 🍽

- [Better for Nature 🏔](#better-for-nature-%f0%9f%8f%94)
  - [Dev Stack](#dev-stack)
    - [Common](#common)
    - [Client](#client)
    - [Server](#server)
  - [Colors](#colors)
  - [Fonts](#fonts)
    - [Hero](#hero)
    - [title](#title)
    - [subtitle](#subtitle)
    - [본문](#%eb%b3%b8%eb%ac%b8)
    - [Label](#label)
    - [font size](#font-size)
  - [Unit](#unit)
  - [Viewport](#viewport)
  - [필터링](#%ed%95%84%ed%84%b0%eb%a7%81)
  - [카드](#%ec%b9%b4%eb%93%9c)

## Dev Stack

### Common

- TypeScript
- monorepo
  - Lerna

### Client

- ReactJS
  - Hooks
- MobX
- NextJS
- StyledComponent

### Server

- NodeJS
- AWS
  - MySQL

## Colors

- gray: #999999
- black: #343A40
- white: #FFFFFF
- primary: #FCC419
- primary-variant: #f08c00
- secondary: #067DF7
- secondary-variant: #045EB8

## Fonts

font-family: Noto Sans KR

### Hero

size:
weight: regular, bold
line-height: 1.1

### title

size:
weight: regular, bold
line-height: 1.1

### subtitle

size:
weight: regular, bold
line-height: 1.1

### 본문

size:
weight: regular, bold
line-height: 1.3

### Label

weight: regular, bold
line-height: 1.1

### font size

- 16px -> Label / 14px
- 18px -> 본문 / 16px
- 20px -> subtitle / 18px
- 24px -> title / 22px
- 36px -> ?여분 // 32px
- 48px -> hero /// 40px

## Unit

- Leaf: 4px (padding, margin)
- Grass: 8px (dimension)

## Viewport

- 768px 기준
  - 미만이면 Mobile
  - 이상이면 Desktop

## 필터링

- 채식 유형
- 거리
- 시간
- 글루텐, 카제인, 슈가 프리

## 카드

- 채식 종류
  - ☘️
  - 🥛
  - 🥚
  - 🐟
  - 🐥
- 거리
  - 🚶‍
  - 🚴‍
  - 🚌
  - 🚙
