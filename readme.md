## 基于koa2的文件上传下载

## 安装node包
npm install

## 启动项目
npm run start

### 接口
- `/upload`:`post`类型，上传文件
- `/download`:`get`类型，默认下载dnpath目录下的第一个文件
- `/download/:filename`:`get`类型，下载指定目录的文件