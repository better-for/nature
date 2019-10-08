# API

## `GET /stores`

- query
  - lat
  - lng
  - distanceBetween: [1000, 1500]
  - typeCodes: []
  - dayOfWeeks: []
  - startMin
  - endMin
- sortBy: distanceIn
- orderBy: desc | asc
- limit: 10
- offset: 10

### Request

```text
GET /stores?lat=123.0&lng=50.0&distanceIn=1500&typeCodes[]=1&dayOfWeeks[]=mon&startMin=800&endMin=1000
```

### Response

#### 200 OK

```json
{
  "stores": [
    {
      "id": "1",
      "name": "가게 이름",
      "distanceMeter": 1500,
      "lat": -34.397, // +90.0 ~ -90.0
      "lng": 150.644, // +180.0 ~ -180.0
      "address": "울산광역시 이상하군 신나리 잘되길 8",
      "vegiTypes": [
        {
          "code": 1,
          "name": "비건"
        }
      ],
      "bussinessHours": [
        {
          "dayOfWeek": "mon",
          "openMin": 600,
          "closeMin": 1080
        }
      ]
    }
  ]
}
```
