# IINA-EMBY

[![CI](https://github.com/qinyuhang/iina-emby/actions/workflows/ci.yml/badge.svg)](https://github.com/qinyuhang/iina-emby/actions/workflows/ci.yml)

## 这是什么项目？
本项目是使用了 IINA 的插件功能构建的。
能够在 IINA 播放器上打开一个独立窗口，
在此窗口登录 EMBY 之后，可以浏览EMBY
的文件内容，并且点击播放可以把 EMBY 的
视频内容在 IINA 中播放。

TODO
- [x] search
- [x] item detail page
- [] item folder/boxset view
- [] http support (iina is using Apple Secure Transport,
which reject http request, so it is not allow to connect
to a LAN emby or Intenet emby without ssl/https)
- [] enter serverHome not call auth with name and pw but 
find other method check local token first, if token fail
then go auth with user and pw
- [x] item detail make image height a percentage of 100vw
to fix the image ratio
- [] item detail page image on load error use default image
- [] save play progress to emby server
