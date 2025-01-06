// you can write js here

       // var kelvins = 294;
        const prompt=require("prompt-sync")({sigint:true});
        var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
        console.log(kelvins);

        var celsius = kelvins - 273; // Je convertis la température kelvins en celsius et crée un variable celsius pour stocker le résultat. La température en Celsius est inférieure de 273 degrés à celle en Kelvins.
        console.log(celsius);

        var fahrenheits = celsius * (9/5) + 32; // Je calcule la température en Fahrenheits et crée un variable fahrenheits pour stocker le résultat de calcule.
        console.log(fahrenheits);

        Math.floor(fahrenheits); // J'utilise la methode math.floor() pour arrondir le résultat obtenu.
        console.log(Math.floor(fahrenheits));