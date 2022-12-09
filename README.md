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

5. **Develop with Git**

   Git を利用した開発の手順 ( `{}` で囲まれたところは自分で入力)

   1. `git checkout main` で main ブランチに戻る (一応)
   2. `git pull origin main` で変更を同期する
   3. `git checkout -b {ブランチ名}` でブランチを作成・移動する
   4. コードを書く
   5. `git add -A` で変更を stage (申請) する
   6. `git commit -m "{メッセージ}"` で変更を commit (記録) する
   7. `git push origin {ブランチ名}` で変更を Push する
   8. ブラウザで GitHub を開き、Pull Request を作成する
   9. レビュアーに連絡する
