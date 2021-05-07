# bubl-exchange-rate
Simple WebSocket service for educational task.
The application was developed as part of an assignment to the person I am examining for front-end development skills

# Data format

Sends messages in the following format:
```json
{
  "t": 1620426831258,
  "c": 1.2345
}
```

where
- t - unix timestamp in milliseconds
- c - currency of bubl

# Simple start

Just open your browser and type

```javascript
const ws = new WebSocket('wss://bubl-exchange-rate.herokuapp.com/');
ws.onerror = e => console.error(e);
ws.onmessage = msg => console.log(msg.data);
```
