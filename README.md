<div align="center">

<img src="doc/public/logo.png" width="88" alt="FLUX" />

# FLUX

高性能流量转发与多协议中转管理面板

在一个面板里统一管理服务器、节点与流量中转，提供高性能网络中继与审计流控。

</div>

## 安装与部署

面板（需要 Docker）：

```bash
curl -L https://raw.githubusercontent.com/JesseHug/flux/main/panel_install.sh -o panel_install.sh && chmod +x panel_install.sh && ./panel_install.sh
```

选 `1. 安装面板`，完成后访问 `http://服务器IP:6366`，默认账号 `admin_user` / `admin_user`，登录后请立即修改密码。

agent：在面板 **服务器** 页新建服务器，复制生成的安装命令到服务器上执行。

详细使用与配置说明可参阅工程内 [doc/](doc/) 文档。

## 许可

以 GPLv3 发布，见 [LICENSE](LICENSE)；所含第三方代码的来源与许可见 [NOTICE](NOTICE)。

## 致谢

感谢以下项目以及所有上游项目：

- FLYX (`kure29/flyx`)
- [Sagit-chu/flvx](https://github.com/Sagit-chu/flvx)
- [bqlpfy/flux-panel](https://github.com/bqlpfy/flux-panel)

## 免责声明

本项目仅供个人学习与研究使用，仅限合法、合规用途。使用者须确保其使用行为符合所在国家或地区的法律法规，并自行承担使用本项目带来的一切风险。作者不对因使用本项目导致的任何后果承担责任，亦不提供任何形式的担保。禁止将本项目用于网络攻击、数据窃取、非法访问等任何违法或未经授权的行为。
