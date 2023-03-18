# 広島フロントエンド勉強会 Vol.31 「フロントエンジニア向け Node.js ハンズオン」

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nasa114/hirofuro_vol31_node_handson_template/tree/main)

このレポジトリは広島フロントエンド勉強会 Vol.31 で利用するフロントエンジニア向け Node.js ハンズオンで利用するベースレポジトリです。

プロジェクトの初期化などを行いますが、基本的には本レポジトリを中心に使います。

## このハンズオンの目的・達成したいこと

- Node.js のプログラムを JavaScript の知識があれば実装できる
- ファイルの読み込みができる
- ライブラリのインストールができる

また、今回は以下のことを行いません。

- パッケージ（ライブラリ）の作り方
- エラー処理
- 正規表現の詳細な説明
- 単体テストの書き方  
  ※ 本レポジトリには単体テストが含まれていますが、動作チェックなどの目的で追加しています。

## 初期構築

```shell
npm init .
npm install --save-dev @types/jest@29.4.0 eslint@8.35.0 eslint-config-standard@17.0.0 eslint-plugin-import@2.27.5 eslint-plugin-jest@27.2.1 eslint-plugin-n@15.6.1 eslint-plugin-promise@6.1.1 jest@29.4.3
```

## テストコマンド

```
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --config ./jest.config.mjs"
```

## ハンズオンでやること

- Hello World を出力してみよう
- 足し算をして、出力してみよう
- 文字列の結合をやってみよう
- Fizz Buzz を出力してみよう  
  ※ [Fizz Buzz - Wikipedia](https://ja.wikipedia.org/wiki/Fizz_Buzz)
