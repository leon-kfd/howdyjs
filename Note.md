## 发包前操作

1. npm config set proxy <url> 设置代理
2. npm login

## 发包失败后执行

1. git push origin --delete tag <tag> 删除远端Tag
2. git tag -d <tag> 删除本地Tag
3. git log 查看上一个提交的hash
4. git reset --hard <hash>
5. git push -f