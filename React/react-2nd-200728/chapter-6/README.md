## プロジェクト作成
```
$  npx create-react-app hello-world --typescript    
```

## プラグイン導入
```
$  cd hello-world
$  yarn add -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## 設定ファイル作成
```
touch .eslintrc.js    
```

奥山さんのパクってくる  
https://github.com/oukayuka/ReactBeginnersBook-2.0/blob/master/06-lint/01-eslint/.eslintrc.js
```
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    'eol-last': ['error', 'always'],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'newline-before-return': 'error',
    'no-dupe-class-members': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'require-yield': 'error'
  }
};
```

## vscode上で動作させるために`setting.json`を修正する
```
+   "editor.codeActionsOnSave": {
+       "source.fixAll.eslint": true
+   },
+   "eslint.codeAction.showDocumentation": {
+       "enable": true
+   },
```

## 確認
適当に`App.tsx`とか開いて確認してみる。  
多分エラーが出まくってると思うので手直ししていく。


## トラブルシュート
- Q: バージョンが違うって怒られたら  
- A: プラグインのみの導入に留める

```
$  yarn add -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

- Q: 以下のようにjsonファイルがないって怒られる  
```
Cannot read config file: /Users/igusaya/Develop/Study/React/react-2nd-200728/chapter-6/hello-world/node_modules/@typescript-eslint/eslint-plugin/dist/configs/base.json Error: ENOENT: no such file or directory, open '/Users/igusaya/Develop/Study/React/react-2nd-200728/chapter-6/hello-world/node_modules/@typescript-eslint/eslint-plugin/dist/configs/base.json' Referenced from: /Users/igusaya/Develop/Study/React/react-2nd-200728/chapter-6/hello-world/n
```
- A: 上記みたいなエラーが出力されたらvscodeを再起動してみる  
とりあえずそれで直った  
https://github.com/typescript-eslint/typescript-eslint/issues/2193


---
## 03-mysetting

githubからまんまパクリ  
https://github.com/oukayuka/ReactBeginnersBook-2.0/tree/master/06-lint/03-mysetting

cloneして対象のディレクトリコピーして`yarn`しただけ