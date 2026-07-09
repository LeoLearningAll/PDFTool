# PDFTool Electron 绿色版在线打包工程

这个工程用于通过 GitHub Actions 在线打包 Windows 绿色版 EXE。

## 使用步骤

1. 解压本 ZIP。
2. 用你的完整 `pdf-lib.min.js` 覆盖工程根目录中的占位文件。
3. 将整个工程上传到 GitHub 仓库。
4. 打开 GitHub 仓库的 `Actions` 页面。
5. 选择 `Build Portable Windows EXE`。
6. 点击 `Run workflow`。
7. 构建完成后，在本次运行页面下载 `PDFTool-portable-windows-exe` artifact。

## 生成结果

默认生成：

```text
PDFTool-1.0.0-portable.exe
```

这是绿色版 EXE，不需要安装。

## 本地调试

```bash
npm install
npm start
```

## 本地打包

```bash
npm run build
```

## VBA 调用示例

```vb
Sub OpenPDFTool()
    Shell "C:\PDFTool\PDFTool.exe", vbNormalFocus
End Sub
```

建议把生成的 `PDFTool-1.0.0-portable.exe` 重命名为 `PDFTool.exe`，方便 VBA 和 RPA 调用。

## 注意

压缩包内的 `pdf-lib.min.js` 是占位文件，必须替换成完整文件，否则 GitHub Actions 会主动失败，避免生成不可用的 EXE。
