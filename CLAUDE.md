# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## リポジトリの目的

このリポジトリはClaude APIの実験とClaude Codeのセットアップ用のテスト/デモリポジトリです。以下が含まれています：

- curlコマンドを使用したAPIテストの例
- Claude Code環境のためのNode.js/npmセットアップ手順
- テスト用のAPIキー保存

## 主要ファイル

- `Test api.json`: 認証ヘッダーを含むClaude APIテスト用のcurlコマンドテンプレート
- `claude api key`: Claude API アクセス用のAPIキー
- `claude_codeインストール方法.yml`: nvmを使用したNode.js環境セットアップ手順

## API テスト

リポジトリにはClaude APIテスト用のすぐに使えるcurlコマンドが含まれています。このコマンドは以下を使用します：
- Claude 3.5 Sonnetモデル（20241022版）
- 最大トークン数: 1024
- シンプルな「Hello, world」テストメッセージ

## 環境セットアップ

インストールファイルには、Claude Code操作に必要なNode.js v22.16.0をnvm経由でセットアップするためのコマンドが記載されています。