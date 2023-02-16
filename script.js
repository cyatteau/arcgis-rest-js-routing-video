import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { solveRoute } from "@esri/arcgis-rest-routing";

const apiKey = "YOUR_API_KEY";

const authentication = ApiKeyManager.fromKey(apiKey);

solveRoute({
    stops:[
        [-77.0091, 38.8898],
        [-77.0365, 38.8977]
    ],
    authentication,
}).then((res) => {
    res.directions[0].features.forEach((response) => {
        console.log(
            `${response.attributes.text} (${response.attributes.length} miles)`
        )
    })
})