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
