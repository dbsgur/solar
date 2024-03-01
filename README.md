# ???

언젠가 무엇을 만들고 싶다.
무엇이 떠오르지 않아, 일단 초기 프로젝트 환경 구축 자동화를 하기 위해 만든다.

후에, 어떤 것이 추가될지 미지수,,,!

- MONO REPO
  - Only use yarn
  - yarn 4.1.0 (berry)
  - turbo

## Create Template

- cd solar && yarn install && npm run solar

## TODO

- CREATE Nested Monorepo
  - 프론트엔드, 백엔드를 통합한 모토레포를 구축하긴 했는데, 이것이 응집도를 떨어트리는 구조인것 같다.
  - 아래처럼 구조를 가져가고 목적에 맞는 폴더에서 관리를 하는게 맞지 않나 생각이 든다.
  - 그러나, 아직 프로젝트가 많지도 않기도해서 지금의 구조를 유지한다.
  - 후에 프로젝트가 많아져 관리가 복잡해지거나 응집도가 너무 낮아 코드 관리에 신경이 쓰인다면 아래 구조로 개선하자.
  - Root(common Package, Method Managing)
  - ---Client Monorepo
  - ---Server Monorepo
