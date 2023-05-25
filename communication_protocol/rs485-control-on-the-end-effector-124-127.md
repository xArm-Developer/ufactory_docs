# RS485 Control on the End-effector(124-127)

## Set the end RS485 band rate

**Register: 127 (7F)**

<pre><code><strong>// Request:
</strong>00 01 00 02 00 08 7F  
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//7F       U8, Register
//09	   U8, Host ID
//1A 0B	   U16,Address
//00 00 30 41	fp32,
0:4800 bps； 1:9600bps；2:19200bps；3:38400bps；
4:57600bps；5:115200bps
6:230400bps；7: 460800bps；8:921600bps；9: 1000000bps；
10:1500000bps；11:2000000bps；12:2500000bps；
```

</details>

```
// Response:
00 01 00 02 00 01 7F
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 01    U16, Length 
//7F       U8, Register
```

</details>









