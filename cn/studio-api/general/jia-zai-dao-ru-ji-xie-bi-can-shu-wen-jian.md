# 加载导入机械臂参数文件

加载导入机械臂参数文件

**Respons:**

```subunit
result:
    'ok' -> 成功
    'Invalid Args'无效的参数 -> 失败
success:
    1 -> 保存文件数据失败
    0 -> 上传成功
```



#### 请求参数

Query 参数

path string 可选

上传到系统的路径(test/xarm6手臂类型/config)

示例值:test/xarm6/config

file   string 可选

上传文件的二进制数据



```python
import http.client

conn = http.client.HTTPSConnection("192.168.1.66:18333192.168.1.66", 18333)
payload = ''
headers = {
   'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
}
conn.request("POST", "/project/upload?path%20=test/xarm6/config&file=", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

