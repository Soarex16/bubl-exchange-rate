# bubl-exchange-rate
Simple WebSocket service for educational task

Sends messages in the following format:
```language json
{
  "t": 1620426831258
  "c": 1.2345
}
```

where
- t - unix timestamp in milliseconds
- c - currency of bubl
