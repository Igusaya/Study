# chapter 2
## 環境構築
### 前提
 - mac
 - fish shell

#### バージョンマネージャーを入れる
プロジェクトごとに違ったバージョンを共存させるために入れる

参考: https://hi120ki.github.io/blog/posts/20190125/

```
$ git clone https://github.com/anyenv/anyenv ~/.anyenv
```
shell にパスを通す  
fish の設定ファイルの config.fish は少し書き方が違うので注意して下さい

“anyenv init - " の後に使用する shell の名称を追加します

 ~/config/fish/config.fish
```
set -x PATH ~/.anyenv/bin $PATH
anyenv init - fish | source
```
fish shell を再起動する
```
$ exec fish -l
```
これで anyenv が使えるようになります

```
$ anyenv
anyenv 1.1.1
Usage: anyenv <command> [<args>]

Some useful anyenv commands are:
   commands            List all available anyenv commands
   local               Show the local application-specific Any version
   global              Show the global Any version
   install             Install a **env
   uninstall           Uninstall a specific **env
   version             Show the current Any version and its origin
   versions            List all Any versions available to **env

See `anyenv help <command>' for information on a specific command.
For full documentation, see: https://github.com/anyenv/anyenv#readme
```

anyenv-update を追加する
```
$ mkdir -p ~/.anyenv/plugins
$ git clone https://github.com/znz/anyenv-update.git ~/.anyenv/plugins/anyenv-update
```
以下のコマンドで anyenv と 追加した env をアップデートできます

```
$ anyenv update
Updating 'anyenv'...
Updating 'anyenv/anyenv-update'...
Updating 'nodenv'...
Updating 'nodenv/node-build'...
...
```
env をインストールする  
Node.js のパッケージ管理の nodenv で最新バージョンの Node.js をインストールしていきます

anyenv install で nodenv をインストール

```
$ anyenv install nodenv
```
fish shell を再起動する

```
$ exec fish -l
```
config.fish が再読込されて nodenv が使えるようになります

nodenv install -l でインストール可能なバージョンを調べる

```
$ nodenv install -l
Available versions:
  0.1.14
  0.1.15
  0.1.16
  0.1.17
  0.1.18
...
```

上記が出力されず、なんかエラー
```
fish: Unknown command: nodenv
```
vscodeのterminal上ではなぜか pathが通ってない。。。

  
正常であれば以下を実行

```
$ nodenv install 12.8.1

Downloading node-v12.8.1-darwin-x64.tar.gz...
-> https://nodejs.org/dist/v12.8.1/node-v12.8.1-darwin-x64.tar.gz
Installing node-v12.8.1-darwin-x64...
Installed node-v12.8.1-darwin-x64 to /Users/mac/.anyenv/envs/nodenv/versions/12.8.1

No default-package file found
Installed default packages for 12.8.1

$ nodenv global 12.8.1

$ node -v
v12.8.1
```
