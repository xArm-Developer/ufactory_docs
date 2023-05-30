# Special IO commands(142-147)

## Operation of general digital IO delay output of control box

**Register142（8E）**

{% hint style="warning" %}
Starting from the moment when the command is issued, the digital output switch of the control box is triggered after a period of time.
{% endhint %}

<pre><code><strong>// Request:
</strong>00 01 00 02 00 07 8E 00 01 00 00 40 40
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 07    U16, Length 
//8E       U8, Register
//00       U8, Digital IO port number of control box (0-7)
//01       U8, Switch value (0 is off, 1 is on)
//00 00 40 40     fp32, 
The time when the delay takes effect from the current time=3s
```

</details>

```
// Response:
00 01 00 02 00 02 8E 00 
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//8E       U8, Register
//00       U8, State
```

</details>





## Operation of the end general digital IO delay output

**Register143（8F）**

{% hint style="warning" %}
Starting from the moment when the command is issued, the end digital output switch is triggered after a period of time.
{% endhint %}

<pre><code><strong>// Request:
</strong>00 01 00 02 00 07 8F 00 01 00 00 40 40
</code></pre>

<details>

<summary>Request Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 07    U16, Length 
//8F       U8, Register
//00       U8, The end digital IO port number of control box (0/1)
//01       U8, Switch value (0 is off, 1 is on
//00 00 40 40    fp32, 
The time when the delay takes effect from the current time=3s
```

</details>

```
// Response:
00 01 00 02 00 02 8F 00
```

<details>

<summary>Response Description</summary>

```
//00 01    U16, Transaction ID
//00 02    U16, Protocol Identifier
//00 02    U16, Length 
//8F       U8, Register
//00       U8, State
```

</details>



















