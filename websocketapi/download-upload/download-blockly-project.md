# Download Blockly Project

### 1. Introduction

Download the Blockly project.

### 2. Request & Response

{% tabs %}
{% tab title="Request" %}
<table data-full-width="true"><thead><tr><th width="142">Name</th><th width="79">Type</th><th width="144">Required fields</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>String</td><td>Yes</td><td>Relative path</td></tr><tr><td>data</td><td>Json</td><td>Yes</td><td>Path information: {"type":"file","name":"Lite6_Logic_test_1","children":[],"uuid":"/Lite6_Logic_test_1"}</td></tr></tbody></table>
{% endtab %}
{% endtabs %}

### 3. Code Example

#### background:

```python
path = config_path
if not os.path.isfile(path):
    return
filename = path.split('/')[-1]
self.set_header("Accept-Ranges", "bytes")
self.set_etag_header()
self.set_header("Content-Type", 'text/plain')
self.set_header("Access-Control-Allow-Origin", "*")
self.set_header("Access-Control-Allow-Headers", "x-requested-with")
self.set_header('Access-Control-Allow-Methods', 'GET')
request_range = None
range_header = self.request.headers.get("Range")
if range_header:
    request_range = httputil._parse_request_range(range_header)
size = os.stat(path)[stat.ST_SIZE]
if request_range:
    start, end = request_range
    if (start is not None and start >= size) or end == 0:
        self.set_status(416)  # Range Not Satisfiable
        self.set_header("Content-Type", "text/plain")
        self.set_header("Content-Range", "bytes */%s" % (size,))
        return
    if start is not None and start < 0:
        start += size
    if end is not None and end > size:
        end = size
    if size != (end or size) - (start or 0):
        self.set_status(206)  # Partial Content
        self.set_header("Content-Range",
                        httputil._get_content_range(start, end, size))
else:
    start = end = None

if start is not None and end is not None:
    content_length = end - start
elif end is not None:
    content_length = end
elif start is not None:
    content_length = size - start
else:
    content_length = size
self.set_header("Content-Length", content_length)
self.set_header('Content-Disposition', 'attachment; filename=%s' % filename)
content = self.get_content(path, start, end)
if isinstance(content, bytes):
    content = [content]
for chunk in content:
    try:
        self.write(chunk)
        yield self.flush()
    except iostream.StreamClosedError:
        return
```

#### front\_end:

```javascript
 download(name) {
      const data = {};
      if (name === undefined) {
        data.uuid = '/paint';
        data.name = 'all-projects';
      }
      else {
        data.uuid = '/paint/' + name;
        data.name = name;
      }
      let url = `http://${window.GlobalUtil.socketInfo.host}/project/download?path=${window.GlobalConstant.COMMON_PARAMS.userId}/${window.GlobalConstant.COMMON_PARAMS.version}${data.uuid}`
      let full_name = data.name + '.tar.gz';
      fetch(url)
        .then((response) => {
          response.blob().then((blob) => {
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(blob);
            const filename = 'paint-' + full_name;
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            this.$message({
              message: `${this.$t('downloadSuccess')}: ${filename}`,
              type: 'success',
              duration: 0,
              showClose: true,
            });
          }).catch((e) => {
            this.$message.error(`${this.$t('downloadFailed')}: ${e}`);
          })
        })
        .catch((e) => {
          this.$message.error(`${this.$t('downloadFailed')}: ${e}`);
        })
    }
```

