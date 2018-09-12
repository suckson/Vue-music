# Vue-Player
[![Build Status](https://travis-ci.org/HuberTRoy/MusicBox.svg?branch=master)](https://travis-ci.org/HuberTRoy/MusicBox)
[![Python](https://img.shields.io/badge/Python-3.5%203.6-green.svg)](https://pypi.python.org/pypi/Music-Player)
[![Enjoy](https://img.shields.io/badge/EnjoyYourself-yes-orange.svg)](https://github.com/Suckson/Vue-music)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://pypi.python.org/pypi/Music-Player)

## 一个音乐播放器基于Vue
一直想做一个播放器，看了别人的很多代码，然后结合自己的一些项目经验，用vue 重构了一遍。中间踩了很多坑，
，现在对js的理解又深入了，喜欢的朋友可以研究研究。欢迎在Issues中提出问题。

##### 项目预览地址
[舒克生音乐](https://music.suckson.cn/#/recommend)

##  ( • ̀ω•́ )✧~。

### 概览:
* 数据全部采用jsop请求QQ音乐的数据
* 收藏歌曲，搜索历史保存~。
* 歌词滚动~。
* 跨平台。
* 数据请求采用node服务器做转发，监听1221端口，直接请求会报跨域的错误。

## 截图:
<img src="https://github.com/Suckson/Vue-music/blob/master/static/show/1.png"/>

<img src="https://github.com/Suckson/Vue-music/blob/master/static/show/4.png"/>

### 运行:
```
$ npm insatll
$ npm run dev
✨🍰✨
```
### 生产部署:
```
npm build
node prod.server
```

### QQ音乐播放依赖:
> Windows下如果缺少m4a的解码器需要下载 <a href="https://github.com/Nevcairiel/LAVFilters/releases">LAV Filters</a> <br>
> Linux 需要下载 <a href="https://gstreamer.freedesktop.org/">GStreamer</a>


