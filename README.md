## Getting Started (環境構築)

1. **Install packages**

   ```bash
   # in your Terminal
   npm install
   ```

   (もし「npm コマンドが見つかりませんでした」旨のメッセージが出たら、node をインストールする必要があります)

2. **Test boot**

   ```bash
   # in your Terminal
   npm run dev
   ```

   Open [`http://localhost:3000`](http://localhost:3000)
   何かしらページが表示されたら成功です `Ctrl+C` で止めてもらって構いません

3. **Add VSCode extensions**

   以下の拡張機能名を拡張機能タブで検索して、ヒットしたものをインストールしてください

   - `ms-vscode.vscode-typescript-next`
   - `dbaeumer.vscode-eslint`
   - `esbenp.prettier-vscode`

4. **Set Formatter**

   VSCode で `Ctrl+,` で設定を開き、 `format on save` と検索、保存時のフォーマットを有効化する
   `Ctrl+S` でファイルを保存したときなどに「フォーマッタを選択してください」旨のメッセージが表示されると思うので、 `prettier` を選択する


