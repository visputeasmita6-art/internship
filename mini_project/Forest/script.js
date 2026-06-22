/* ==========================================
   FORESTGUARD AI DASHBOARD
========================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 1500);

});

/* ==========================
   MAP INITIALIZATION
========================== */

const map = L.map("map").setView([20.5937, 78.9629], 5);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap Contributors"
    }
).addTo(map);

/* ==========================
   HOTSPOTS
========================== */

const fireIcon = L.icon({
    iconUrl:
        "https://cdn-icons-png.flaticon.com/512/785/785116.png",
    iconSize: [35, 35]
});

const dangerIcon = L.icon({
    iconUrl:
        "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [35, 35]
});

L.marker([19.0760, 72.8777], {
    icon: fireIcon
})
.addTo(map)
.bindPopup("🔥 Fire Hotspot");

L.marker([22.5726, 88.3639], {
    icon: dangerIcon
})
.addTo(map)
.bindPopup("⚠ Smuggling Risk Zone");

L.marker([26.9124, 75.7873], {
    icon: fireIcon
})
.addTo(map)
.bindPopup("🔥 Predicted Fire Risk");

/* ==========================
   FOREST DATA
========================== */

const forestData = {

    trees: 54000000,

    forestArea: 1250,

    fireRisk: "HIGH",

    aqi: 145,

    species: "Teak, Bamboo, Sal",

    carbon: "12.4 Mt CO₂",

    smuggling: "Medium",

    prediction: "82%"

};

/* ==========================
   ANIMATED COUNTERS
========================== */

function animateValue(id, start, end, duration) {

    let range = end - start;

    let current = start;

    let increment = end > start ? 1 : -1;

    let stepTime =
        Math.abs(Math.floor(duration / range));

    let timer = setInterval(() => {

        current += increment;

        document.getElementById(id)
            .innerHTML =
            current.toLocaleString();

        if (current === end) {

            clearInterval(timer);
        }

    }, stepTime);

}

animateValue(
    "treeCount",
    0,
    forestData.trees,
    2500
);

/* ==========================
   STATIC DATA
========================== */

document.getElementById("forestArea")
.innerHTML =
forestData.forestArea + " km²";

document.getElementById("fireRisk")
.innerHTML =
forestData.fireRisk;

document.getElementById("aqi")
.innerHTML =
forestData.aqi;

document.getElementById("species")
.innerHTML =
forestData.species;

document.getElementById("carbonStorage")
.innerHTML =
forestData.carbon;

document.getElementById("smugglingRisk")
.innerHTML =
forestData.smuggling;

document.getElementById("firePrediction")
.innerHTML =
forestData.prediction;

/* ==========================
   SEARCH LOCATION
========================== */

function searchLocation() {

    let location =
        document.getElementById("locationInput")
        .value;

    if (location === "") {

        showToast(
            "Please enter a location"
        );

        return;
    }

    showToast(
        "Searching " + location
    );

}

/* ==========================
   ALERT SYSTEM
========================== */

function createAlert(message) {

    let container =
        document.getElementById(
            "alertContainer"
        );

    let alert =
        document.createElement("div");

    alert.className =
        "alert-box";

    alert.innerHTML =
        message;

    container.prepend(alert);
}

/* Initial Alerts */

createAlert(
"🔥 Fire detected near Sector A"
);

createAlert(
"🌫 AQI crossed safe limit"
);

createAlert(
"⚠ Illegal Logging Risk Increased"
);

/* ==========================
   TOAST
========================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    toast.innerHTML = message;

    toast.style.display =
        "block";

    setTimeout(() => {

        toast.style.display =
            "none";

    }, 4000);

}

/* ==========================
   RISK GAUGE
========================== */

const percentage = 82;

document.getElementById(
    "riskPercentage"
).innerHTML =
percentage + "%";

const circumference =
    2 * Math.PI * 90;

const offset =
    circumference -
    (percentage / 100) *
    circumference;

document.getElementById(
    "gaugeFill"
).style.strokeDashoffset =
offset;

/* ==========================
   RANDOM ALERTS
========================== */

setInterval(() => {

    const messages = [

        "🔥 New Fire Risk Zone Identified",

        "⚠ Suspicious Logging Activity",

        "🌫 AQI Increased Above Threshold",

        "🌳 Tree Loss Detected",

        "🚨 Forest Ranger Alert"

    ];

    let random =
        Math.floor(
            Math.random() *
            messages.length
        );

    createAlert(
        messages[random]
    );

}, 20000);

/* ==========================
   CRITICAL FIRE DETECTION
========================== */

setInterval(() => {

    let risk =
        Math.floor(
            Math.random() * 100
        );

    if (risk > 80) {

        showToast(
            "🔥 CRITICAL FIRE RISK " +
            risk + "%"
        );

        createAlert(
            "🔥 Critical Fire Risk " +
            risk + "%"
        );
    }

}, 15000);

/* ==========================
   CHART 1
========================== */

const fireChart =
new Chart(

    document.getElementById(
        "fireChart"
    ),

    {

        type: "line",

        data: {

            labels: [

                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"

            ],

            datasets: [

                {

                    label:
                    "Fire Incidents",

                    data: [

                        12,
                        22,
                        45,
                        33,
                        60,
                        50

                    ],

                    borderWidth: 3,

                    tension: 0.4

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {

                        color: "white"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "white"

                    }

                },

                y: {

                    ticks: {

                        color: "white"

                    }

                }

            }

        }

    }

);

/* ==========================
   CHART 2
========================== */

const aqiChart =
new Chart(

    document.getElementById(
        "aqiChart"
    ),

    {

        type: "bar",

        data: {

            labels: [

                "Zone A",
                "Zone B",
                "Zone C",
                "Zone D",
                "Zone E"

            ],

            datasets: [

                {

                    label:
                    "AQI",

                    data: [

                        145,
                        180,
                        95,
                        210,
                        165

                    ],

                    borderWidth: 1

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    labels: {

                        color: "white"

                    }

                }

            },

            scales: {

                x: {

                    ticks: {

                        color: "white"

                    }

                },

                y: {

                    ticks: {

                        color: "white"

                    }

                }

            }

        }

    }

);

/* ==========================
   LIVE AQI UPDATE
========================== */

setInterval(() => {

    let value =
        Math.floor(
            Math.random() * 250
        );

    document.getElementById(
        "aqi"
    ).innerHTML = value;

}, 10000);

/* ==========================
   LIVE FIRE RISK UPDATE
========================== */

setInterval(() => {

    let risk =
        Math.floor(
            Math.random() * 100
        );

    document.getElementById(
        "riskPercentage"
    ).innerHTML =
        risk + "%";

    const offset =
        circumference -
        (risk / 100) *
        circumference;

    document.getElementById(
        "gaugeFill"
    ).style.strokeDashoffset =
        offset;

}, 5000);

/* ==========================
   FUTURE API INTEGRATIONS
========================== */

/*

NASA FIRMS FIRE API

fetch("YOUR_FIRE_API")
.then(response => response.json())
.then(data => {

});

*/

/*

AQI API

fetch("YOUR_AQI_API")
.then(response => response.json())
.then(data => {

});

*/

/*

FOREST COVER API

fetch("YOUR_FOREST_API")
.then(response => response.json())
.then(data => {

});

*/

/*

AI FIRE PREDICTION API

fetch("YOUR_AI_API")
.then(response => response.json())
.then(data => {

});

*/