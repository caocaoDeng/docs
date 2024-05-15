---
title: Git
---

# 代码版本管理工具

## 初始化配置

设置 git 用户信息；不指定参数**仅对当前**项目有效。

```git
git config --global user.name "name"
git config --global user.email "email"
```

| 参数    | 描述   |
| ------- | :----- |
| system  | 系统所有用户都适用这个配置 |
| global  | 只适用于该用户 |

查看配置信息。

```git
git config --list
```

初始化仓库信息，使用 git 进行管理。

```git
git init
```

## git目录

- hooks 执行提交等一系列操作时运行的一些钩子函数。
- info 全局性排除文件。
- objects 存储所有的数据内容（数据库）。
- refs 存储指向数据（分支）的提交对象的指针。
- config 项目特有的配置项。
- description 用来显示对仓库的描述信息。
- HEAD 指示当前被检出的分支。
- index 保存暂存区的信息。

## linux基础命令

- `clear` 清除屏幕。
- `echo` 往控制台输出信息；紧跟着`>`指定文件名，进行文件创建。
  ```cmd
  echo 'start study git' > log.txt
  ```
- `ll` 查看当前目录下的所有文件和目录。
- `find` 查看当前目录下所有的子孙文件和子孙目录。
  ```cmd
  #可指定目录
  find ./test/

  #可指定查看类型;查看当
  find -type f // 前目录下的所有文件
  ```
- `rm` 删除文件。
  ```cmd
  rm ./test/log.txt
  ```
- `mv` 重命名。
  ```cmd
  #源文件 --> 重命名文件
  mv log.txt logs.txt
  ```
- `cat` 查看文件内容。
  ```cmd
  cat logs.txt
  ```
- `vim` 文件编辑模式（不能修改文件）。
  - `i` 进入插入模式（能进行文件修改）。 
  - `esc&:` 进入命令操作模式。
    - `q!` 强制退出。
    - `wq` 保存退出。
    - `set nu` 设置行号。

## 底层命令

### git对象

git 的核心是一个简单的键值对数据库。可以插入任意类型的数据，并返回一个键值，
并且可以通过键值检索对应的数据。

向数据库中写入内容，并返回键值。

```cmd
echo "test content" | git hash-object -w --stdin
```

| 参数     | 描述   |
| -------- | :----- |
| -w       | 若不指定，仅返回对应的键值，不会存储在数据库中 |
| --stdin  | 从标准输入读取内容；若不指定则必须在尾部指定待存储的文件路径 |

> [!TIP] `|` 管道符。上一个命令执行完可执行另一个命令。

git 存储的数据是被压缩过的，通过一下命令可以查看原内容。

```cmd
git cat-file -p d670460b4b4aece5915caf5c68d12f560a9fe3e4
```

| 参数  | 描述   |
| ---- | :----- |
| -p   | 自动判断内容的类型，更友好的展示内容 |
| -t   | 查看对象类型 |

::: tip 总结
git 对象存储的是文件的内容并不是文件，只能代表文件的版本，不能代表项目的一次快照。
git 对象是对本地数据库进行操作，并未涉及暂存区（流程：工作区 > 暂存区 > 版本库）。
:::

### 树对象

树对象能解决文件保存的问题，允许我们将多个文件组织到一起。

使用`git update-index`命令将文件添加到暂存区。`git ls-files -s`命令可以查看暂存区。

```cmd
git update-index --add --cacheinfo 100644 3ca970cc9c613dce3b644fb61d7ddded788dc552 content.tx
```
::: tip 提示
直接输入文件名会先生成 git 对象，然后再添加到暂存区
:::

| 参数          | 描述   |
| ------------- | :----- |
| --add         | 文件首次添加到暂存区 |
| --cacheinfo   | 文件在git数据库中需指定cacheinfo |
| 100644        | 指定文件模式（普通文件） |

`git write-tree`命令为暂存区创建快照生成一个树对象。

`git read-tree`命令可以将一个树对象加入到另一个树对象；并添加到暂存区。
再通过`git write-tree`生成一个新的树对象（分支合并）。

```cmd
git read-tree --prefix=back d8329f
```

### 提交对象

为树对象记录描述信息。

使用`git commit-tree`创建提交信息。再次为树对象创建提交对象时需在后面指定父提交对象。

```cmd
echo "first commit" | git commit-tree d8329f
<!-- 指定父提交对象 -->
echo "first commit" | git commit-tree d8329f -p d8329f
```

## 基本命令

查看文件状态。红色未暂存，绿色已暂存。
```cmd
git status
```

将工作区的内容添加到暂存区，可以是文件也可以是目录。

底层：先创建 git 对象`git hash-object -w`，然后再添加到暂存区`git update-index`。
```cmd
git add .
```

提交暂存区。

底层：先创建树对象`git write-tree`，再创建提交对象`git commit-tree`。
```cmd
git commit -m 'desc'
```

查看工作区更新的内容；`--staged`可查看暂存区中更新的内容。
```cmd
git diff
git diff --staged
```

查看当前分支的提交对象；`--oneline`查看提交历史记录。
```cmd
git log
git log --oneline
git log --oneline --decorate --graph --all  #查看所以分支的提交历史记录
```

## 分支

查看分支列表。`-r`查看远程跟踪分支。
```cmd
git branch
```

创建分支。
```cmd
git branch [name]
```

切换分支；`-b`创建分支并切换过去。
如果指定的是提交对象 hash 或者是标签则会检出分支，形成头部分离的状态，切换分支即可恢复。
```cmd
git checkout [name]
git checkout -b [name]
```
::: tip ⚠️注意
每次切换分支前，应确保当前分支的工作区和暂存区是干净的。
在切换分支时，分支上有未暂存的修改或未提交的暂存，分支是可以提交成功，但是会污染其他分支。
:::

删除分支，不能删除当前分支。`-d`删除空分支或已合并的分支；`-D`强制删除分支。
```cmd
git branch -d [name]
```

查看分支最后一次提交。`-vv`查看本地分支跟踪的远程分支。
```cmd
git branch -v
git branch -vv
```

从指定提交对象上创建分支。
```cmd
git branch [name] [hash]
```

查看分支合并状态。`--merged`列出已合并到当前分支的分支，已合并的分支应考虑删除；
`--no-merged`列出未合并到当前分支的分支，未合并的分支应考虑是否合并。
```cmd
git branch --merged
git branch --no-merged
```

分支合并。过程中可能会产生冲突需要解决，处理后需再次暂存和提交。
可以合并远程分支，本地分支必须与远程分支同名。
```cmd
git marge [name]
```

## 存储

当前需求还没开发完时，又需要切换到其他分支去处理时，可以先将内存暂存起来，并且没有提交记录。
```cmd
git stash               #创建存储
git stash list          #列出存储列表
git stash apply         #应用存储库中第一个，不会删除存储。先进后出原则
git stash drop [name]   #删除指定存储
git stash pop           #应用存储，然后立即删除
```

## 重置

```cmd
git checkout -- [filepath]      #撤销工作区的修改
git restore [filepath]          #同上；推荐

git reset HEAD [filepath]       #撤销暂存区的修改
git restore --staged [filepath] #同上；推荐

git commit --amend              #修改提交描述，本质上是重新提交

git reset --soft HEAD~          #撤销到上一次提交；移动 HEAD 指向上一次提交对象
git reset --mixed HEAD~         #同上；移动 HEAD 指向上一次提交对象，撤销暂存区
git reset --hard HEAD~          #同上；移动 HEAD 指向上一次提交对象，撤销暂存区，撤销工作区(⚠️危险操作，这将导致工作区的内容丢失)

git reset --hard [hash]         #将分支重置到指定的提交对象
```

## 标签

```cmd
git tag                 #列出标签
git tag -l 'v1.8.5*'    #列出1.8.5之前的所有的版本

git tag [name] [hash]   #创建标签，不指定 hash 默认最新

git show [name]         #查看当前标签提交对象内容

git tag -d [name]       #删除标签
```

## 仓库操作

```cmd
git remote                              #查看别名，-v可查看仓库地址
git remote add [origin] [url]           #配置别名

git push [origin] [name]                #推送到远程仓库，已跟踪远程分支可忽略后面参数
git push --set-upstream origin [name]   #同上；远程不存在此分支
git pull                                #拉取提交记录

git clone [url]                         #克隆远程仓库到本地，并设置默认别名 origin

git fetch [origin]                      #拉取远程仓库信息

git branch -u [origin name]             #本地分支跟踪远程分支；本地已存在同名分支
git checkout -b [name] [origin name]    #检出远程分支
git checkout --track [origin name]      #同上；直接在本地创建同名的本地分支

git push [origin] --delete [origin name]#删除远程分支
git remote prune [origin] --dry-run     #列出仍在远程跟踪但是远程已被删除的无用分支
git remote prune [origin]               #清除上面命令列出来的远程跟踪
```

::: info 总结
HEAD的本质是指向一个分支，分支的本质是一个提交对象，提交对象指向一个树对象，数对象指向一个或多个git对象，
一个git对象代表一个文件！！！
:::
