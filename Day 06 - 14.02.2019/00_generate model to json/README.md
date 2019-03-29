# Convert json to ts model

### Step 1
we used this link:
https://restcountries.eu/rest/v2/all?fields=name;capital;population;currencies;borders   

and we copied this data:
```json
[
    {
        "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        ],
        "name": "Afghanistan",
        "capital": "Kabul",
        "population": 27657145,
        "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ]
    },
    {
        "currencies": [
            {
                "code": "EUR",
                "name": "Euro",
                "symbol": "€"
            }
        ],
        "name": "Åland Islands",
        "capital": "Mariehamn",
        "population": 28875,
        "borders": []
    },
    {
        "currencies": [
            {
                "code": "ALL",
                "name": "Albanian lek",
                "symbol": "L"
            }
        ],
        "name": "Albania",
        "capital": "Tirana",
        "population": 2886026,
        "borders": [
            "MNE",
            "GRC",
            "MKD",
            "KOS"
        ]
    }
]

```

### Step 2
we used the data from step 1, and we pased it in this link: http://json2ts.com/   
As output we got:
```typescript
declare module namespace {

    export interface Currency {
        code: string;
        name: string;
        symbol: string;
    }

    export interface RootObject {
        currencies: Currency[];
        name: string;
        capital: string;
        population: number;
        borders: string[];
    }

}
```