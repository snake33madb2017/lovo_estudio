// ==========================================
// BASE DE DATOS DE CÓCTELES (MOCK)
// ==========================================
const cocktailDB = [
    {
        "id": 1,
        "name": "Negroni",
        "category": "*Intenso, amargo-dulce*",
        "ingredients": [
            "30ml Campari",
            "30ml Ginebra seca",
            "30ml Vermouth rojo"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de naranja",
        "method": "Verter todos los ingredientes, remover hasta enfriar y diluir a punto optimo.",
        "image": "./assets/Cocktail_Negroni.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 2,
        "name": "Negroni Sbagliato",
        "category": "*amargo-dulce, refrescante*",
        "ingredients": [
            "30ml Campari",
            "30ml Vermouth rojo",
            "top Champagne"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "twist de naranja en forma de X",
        "method": "Verter todos los ingredientes  y remover",
        "image": "./assets/Cocktail_Negroni_Sbagliato.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 3,
        "name": "Americano",
        "category": "*Intenso, amargo-dulce, refrescante*",
        "ingredients": [
            "30ml Campari",
            "30ml Vermouth rojo",
            "60ml Soda"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de naranja en X",
        "method": "Verter todos los ingredientes , remover y enfriar a punto optimo",
        "image": "./assets/Cocktail_Americano.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 4,
        "name": "Boulevardier",
        "category": "*Intenso, amargo-dulce*",
        "ingredients": [
            "30ml Whisky bourbon",
            "30ml Campari",
            "30ml Vermouth rojo"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de naranja en forma de X",
        "method": "Verter todos los ingredientes, remover y enfriar a punto optimo",
        "image": "./assets/Cocktail_Boulevardier.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 5,
        "name": "Manhatan",
        "category": "*Intenso, amargo-dulce*",
        "ingredients": [
            "60ml Whisky rye",
            "30ml Vermouth rojo",
            "2dash Angostura"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Cereza marraschino",
        "method": "Verter todos los ingredientes , remover hasta diluir y enfriar a punto optimo",
        "image": "./assets/Cocktail_Manhatan.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 6,
        "name": "Martinez",
        "category": "*Intenso, amargo-dulce*",
        "ingredients": [
            "60ml Ginebra Olt Tom",
            "30ml Vermouth rojo",
            "1barspoon Sirope de marraschino"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Cereza de marraschino",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Martinez.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 7,
        "name": "Hanky Panky",
        "category": "*Intenso, amargo-dulce*",
        "ingredients": [
            "45ml Ginebra",
            "45ml Vermouth rojo",
            "20ml Fernet branca"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist naranja",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Hanky_Panky.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 8,
        "name": "Sazerac",
        "category": "*Intenso, amargo-dulce*",
        "ingredients": [
            "20ml Whisky bourbon",
            "20ml Whisky rye",
            "20ml Cogñac",
            "1 barspoon Sirope simple",
            "3 dash Absenta",
            "3dash Angostura"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist limón",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Sazerac.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 9,
        "name": "Old Fasioned",
        "category": "*Intenso, seco-dulce*",
        "ingredients": [
            "60ml Whisky Bourbon",
            "2dash Angostura",
            "10ml Azúcar demerara"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist naranja y cereza marraschino",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Old_Fasioned.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 10,
        "name": "Vieux Carre",
        "category": "*Intenso, amargo-dulce*",
        "ingredients": [
            "20ml Whisky bourbon",
            "20ml Whisky Rye",
            "20ml Cogñac",
            "25ml Vermouth rojo",
            "10ml DOM benedictine",
            "2dash Peycheaud",
            "2dash Angostura"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de naranja",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Vieux_Carre.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 11,
        "name": "Dry Martini",
        "category": "*Seco, intenso*",
        "ingredients": [
            "100ml Ginebra",
            "15ml Vermouth Dry blanco"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "2 aceitunas o twist de limón",
        "method": "Verter Dry Vermouth  , remover hasta mojar todos los hielo. Descartar el vermut . Agregar la gin .",
        "image": "./assets/Cocktail_Dry_Martini.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 12,
        "name": "Bronx",
        "category": "*intenso, refrescante, amargo-dulce*",
        "ingredients": [
            "50ml Ginebra",
            "25ml Vermouth rojo",
            "15ml Vermouth blanco dry",
            "30ml Zumo de naranja"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de naranja",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Bronx.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 13,
        "name": "Naked & Famous",
        "category": "*intenso, amargo, acido*",
        "ingredients": [
            "25ml Mezcal",
            "25ml Chartreuse",
            "25ml Aperol",
            "25ml Z. lima"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Aceites esenciales de un twist de limón",
        "method": "Verter todos los ingredientes , hacer un shake corto y fuerte",
        "image": "./assets/Cocktail_Naked_and_Famous.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 14,
        "name": "Vesper Martini",
        "category": "*Seco-intenso*",
        "ingredients": [
            "60ml Ginebra",
            "15ml Lillet blanc",
            "20ml vodka"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de limón",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Vesper_Martini.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 15,
        "name": "Champagne Cocktail",
        "category": "*Seco, intenso, toque dulce*",
        "ingredients": [
            "30ml Cogñac",
            "3Dash Angostura",
            "1terron Azucar",
            "Top Champagne"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Sin",
        "method": "Empapar el terron con angostura, verter  y agregar todos los ingredientes restantes.",
        "image": "./assets/Cocktail_Champagne_Cocktail.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 16,
        "name": "Last Word",
        "category": "*Intenso, acido, toque dulce*",
        "ingredients": [
            "25ml Ginebra",
            "25ml Licor de Marraschino",
            "25ml Z. Limón",
            "25ml Chartreuse"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Cereza marraqschino",
        "method": "Verter todos los ingredientes , hacer un shake corto y fuerte",
        "image": "./assets/Cocktail_Last_Word.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 17,
        "name": "Mint Julep",
        "category": "*intenso, dulce*",
        "ingredients": [
            "60ml Whisky Bourbon",
            "15ml Sirope Simple",
            "8 Hojas de menta",
            "4dash Angostura"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Menta y cereza marrachino",
        "method": "Verter todos los ingredientes, remover y enfriar a punto optimo",
        "image": "./assets/Cocktail_Mint_Julep.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 18,
        "name": "French 75",
        "category": "Clásicos",
        "ingredients": [
            "50ml Ginebra",
            "30ml Z. Limón",
            "25ml Sirope simple",
            "Top Champagne"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist Limon",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto. Top champagne",
        "image": "./assets/Cocktail_French_75.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 19,
        "name": "French Martini",
        "category": "*Fresco, acido, afrutad*",
        "ingredients": [
            "60ml Vodka",
            "15ml Licor de Frambuesa",
            "45ml Z. Piña"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Flor de pensamiento",
        "method": "",
        "image": "./assets/Cocktail_French_Martini.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 20,
        "name": "Daiquiri",
        "category": "*Intenso, fresco, acido*",
        "ingredients": [
            "50ml Ron Blanco",
            "25ml Z. Lima",
            "20ml Sirope Simple"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Sin",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Daiquiri.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 21,
        "name": "Porn Star Martini",
        "category": "*dulce, acido*",
        "ingredients": [
            "50ml vodka",
            "40ml Puré ´fruta de la pasion",
            "20ml Licor fruta de la pasion",
            "20ml Sirope de Vainilla",
            "1Shot Champagne"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Flor de pensamiento y shot espumoso al lado",
        "method": "Verter todos los ingredientes , gajos exprimir los 2 pero introducir  solo 1.",
        "image": "./assets/Cocktail_Porn_Star_Martini.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 22,
        "name": "Cosmopolitan",
        "category": "*seco y citrico*",
        "ingredients": [
            "50ml Vodka",
            "30ml Triple sec",
            "20ml Z. Arandanos",
            "2gajos Lima"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de naranja",
        "method": "Verter todos los ingredientes , gajos exprimir los 2 pero introducir  solo 1.",
        "image": "./assets/Cocktail_Cosmopolitan.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 23,
        "name": "Whisky Sour",
        "category": "*cremoso, fresco, sour*",
        "ingredients": [
            "50ml Whisky Bourbon",
            "25ml Z. Limón",
            "20ml Sirope Simple",
            "30ml Clara de Huevo",
            "5Ddrops Angostura"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Angostura",
        "method": "Verter todos los ingredientes , agitar sin hielo ara emulsionar la clara y terminar con un shake haciendo rodar los hielos, hasta enfrian y diluir a punto optimo",
        "image": "./assets/Cocktail_Whisky_Sour.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 24,
        "name": "Pisco Sour",
        "category": "*cremoso, fresco, sour*",
        "ingredients": [
            "60ml Pisco",
            "25ml Z. Líma",
            "20ml Sirope Simple",
            "30ml Clara de Huevo",
            "5Drops Angostura"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Angostura",
        "method": "Verter todos los ingredientes , agitar sin hielo ara emulsionar la clara y terminar con un shake haciendo rodar los hielos, hasta enfrian y diluir a punto optimo",
        "image": "./assets/Cocktail_Pisco_Sour.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 25,
        "name": "Penicillin",
        "category": "*intenso, sour, picante*",
        "ingredients": [
            "45ml Whisky Scotch",
            "15ml Whisky Scotch smoky",
            "25ml Z. Limón",
            "15ml Miel",
            "25ml Genjibre Licor"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist de limón",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Penicillin.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 26,
        "name": "Piña Colada",
        "category": "*dulce, sour, cremoso*",
        "ingredients": [
            "60ml Ron Blanco",
            "100ml Z. Piña",
            "25ml Crema de Coco",
            "20ml Z. Lima",
            "15ml Sirope de Coco",
            "15ml Nata"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Piña desidratada",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Piña_Colada.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 27,
        "name": "Margarita",
        "category": "*acido*",
        "ingredients": [
            "60ml Tequila",
            "30ml Triple Sec",
            "30ml Z. Lima"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "1/2 copa rim de sal",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Margarita.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 28,
        "name": "White Lady",
        "category": "*cremoso, fresco, sour*",
        "ingredients": [
            "50ml Ginebra",
            "20ml Triple sec",
            "20ml Z. Limón",
            "15ml Sirope simple",
            "30ml Clara de Huevo"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Angostura",
        "method": "Verter todos los ingredientes , agitar sin hielo ara emulsionar la clara y terminar con un shake haciendo rodar los hielos, hasta enfrian y diluir a punto optimo",
        "image": "./assets/Cocktail_White_Lady.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 29,
        "name": "Bellini",
        "category": "*afrutado, seco,refrescante*",
        "ingredients": [
            "50ml Puré Melocotón",
            "15ml Licor de Melocotón",
            "Top Champgane"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Sin",
        "method": "Verter todos los ingredientes, remover y homogenizar.",
        "image": "./assets/Cocktail_Bellini.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 30,
        "name": "Bloody Mary",
        "category": "*acido,sabroso*",
        "ingredients": [
            "50ml Vodka",
            "20ml Bloody mix",
            "20ml Z. Limón",
            "100ml Z. Tomate"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Por determinar",
        "method": "Verter todos los ingredientes , remover hasta enfriar y diluir a punto optimo",
        "image": "./assets/Cocktail_Bloody_Mary.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 31,
        "name": "Mojito",
        "category": "*acido, dulce y refrecante*",
        "ingredients": [
            "50ml Ron Blanco",
            "25ml Z. Lima",
            "20ml Sirope simple",
            "2021-06-08 00:00:00 hojas de Menta",
            "Top Soda"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Menta",
        "method": "Verter todos los ingredientes, remover hasta homogenizar y terminar con hielo pile.",
        "image": "./assets/Cocktail_Mojito.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 32,
        "name": "Pimm´s Cup",
        "category": "*amargo-dulce, refrescante*",
        "ingredients": [
            "50ml Pimm´s",
            "60ml Sprite",
            "60ml Ginger ale",
            "5 slice Fresa",
            "2 slice Pepino",
            "1 slice Limón",
            "1 slice Naranja",
            "5 Hojas menta"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Menta",
        "method": "Verter todos los ingredientes, remover hasta homogenizar.",
        "image": "./assets/Cocktail_Pimm´s_Cup.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 33,
        "name": "Chilcano",
        "category": "*acido, refrescsante*",
        "ingredients": [
            "50mkl Pisco",
            "20ml Z. Lima",
            "10ml Sirope simple",
            "2dash Angostura",
            "Top Ginger ale"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Gajo de lima",
        "method": "Verter todos los ingredientes, remover hasta homogenizar.",
        "image": "./assets/Cocktail_Chilcano.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 34,
        "name": "Spritz",
        "category": "*seco, refrescante*",
        "ingredients": [
            "50ml Vino blanco",
            "30ml Soda",
            "Top Champagne",
            "1 twist limón"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Menta",
        "method": "Verter todos los ingredientes  y remover hasta homogenizar.",
        "image": "./assets/Cocktail_Spritz.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 35,
        "name": "Aperol Spritz",
        "category": "*amargo-dulce,refrescante*",
        "ingredients": [
            "50ml Aperol",
            "30ml Soda",
            "Top Champagne"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist naranja",
        "method": "Verter todos los ingredientes  y remover hasta homogenizar.",
        "image": "./assets/Cocktail_Aperol_Spritz.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 36,
        "name": "White Russian",
        "category": "*intenso, dulce, cremoso*",
        "ingredients": [
            "60ml Vodka",
            "30ml Licor de café",
            "15ml Sirope simple",
            "50ml Nata"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Sin",
        "method": "Verter todos los ingredientes, remover hasta homogenizar, terminar con la crema deslizandola suavemente con una barspoon",
        "image": "./assets/Cocktail_White_Russian.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 37,
        "name": "Black Russian",
        "category": "*intenso, dulce*",
        "ingredients": [
            "60ml Voka",
            "40ml Licor de café"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Sin",
        "method": "Verter todos los ingredientes  y remover hasta homogenizar.",
        "image": "./assets/Cocktail_Black_Russian.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 38,
        "name": "Expresso Martini",
        "category": "*cremoso, intenso, dulce*",
        "ingredients": [
            "50ml Vodka",
            "50ml Expresso",
            "25ml Licor café",
            "15ml Sirope simple",
            "20ml Clara de huevo"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Sin",
        "method": "Verter todos los ingredientes  y agitar como para Sour.",
        "image": "./assets/Cocktail_Expresso_Martini.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 39,
        "name": "Amareto Sour",
        "category": "*dulce-acido*",
        "ingredients": [
            "50ml Amareto",
            "25ml Z. limón",
            "20ml Sirope simple",
            "1 Dash Z. Naranja"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Angostura",
        "method": "Verter todos los ingredientes , agitar sin hielo ara emulsionar la clara y terminar con un shake haciendo rodar los hielos, hasta enfrian y diluir a punto optimo",
        "image": "./assets/Cocktail_Amareto_Sour.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 40,
        "name": "Long Island",
        "category": "*intenso, dulce, acido, refrescante*",
        "ingredients": [
            "10ml Vodka",
            "10ml Tequila",
            "10ml Ron",
            "10ml Ginebra",
            "10ml Cointreau",
            "25ml Z. Lima",
            "20ml Sirope simple",
            "Top Colca cola"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Gajo lima",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.  Servir primero l coca cola y despues servir el liquido  suaventemte para crear 2 capas.",
        "image": "./assets/Cocktail_Long_Island.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 41,
        "name": "Basil Smash",
        "category": "*intenso, sour, notas verdes*",
        "ingredients": [
            "50ml Ginebra",
            "25ml Z. limón",
            "20ml Sirope simple",
            "6 Hojas albahaca"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Albahaca",
        "method": "",
        "image": "./assets/Cocktail_Basil_Smash.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 42,
        "name": "Bramble",
        "category": "*fresco, sour, frutos rojos*",
        "ingredients": [
            "50ml Ginebra",
            "25ml Z. limón",
            "15ml Sirope simple",
            "10ml Licor mora"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Mora, frambuesa y menta",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto. Servir y terminar float licor",
        "image": "./assets/Cocktail_Bramble.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 43,
        "name": "Mai Tai",
        "category": "*intenso, sour,fresco*",
        "ingredients": [
            "30ml Ron Blnaco",
            "30ml Ron especiado",
            "25ml Z. lima",
            "20ml Orgeqat",
            "15ml Cointreau"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Menta y piel de lima",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Mai_Tai.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 44,
        "name": "Blood & Sand",
        "category": "*intenso, amargo-dulce*",
        "ingredients": [
            "25ml Scotch Whisky",
            "25ml Cherry herring",
            "25ml Vermouth",
            "25ml Zumo de naranja"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Cereza marraschino",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Blood_and_Sand.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 45,
        "name": "Paloma",
        "category": "*sour, refrescante*",
        "ingredients": [
            "50ml Tequila",
            "10ml Sirope de agave",
            "25ml Z. lima",
            "Top Soda pomelo rosa"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist pomelo",
        "method": "Verter todos los ingredientes y remover hasta homegenizar todo.",
        "image": "./assets/Cocktail_Paloma.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 46,
        "name": "Zombi",
        "category": "*tropical, intenso, refrecante*",
        "ingredients": [
            "30ml Ron jamaicano",
            "45ml Ron blano",
            "20ml Ron overproof",
            "30ml Z. Lima",
            "20ml Z. piña",
            "15ml Licor Falernun",
            "10ml Z. pomelo",
            "5ml Granadina",
            "2dash Absenta"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Menta y cereza marraschino",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Zombi.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 47,
        "name": "Gin Fizz",
        "category": "*cremoso, sour, refrescante*",
        "ingredients": [
            "50ml Ginebra",
            "25ml Z. limón",
            "20ml Sirope simple",
            "30ml Clara de huevo",
            "Top Soda"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Flor de pensamiento",
        "method": "Verter todos los ingredientes , agitar sin hielo ara emulsionar la clara y terminar con un shake haciendo rodar los hielos, hasta enfrian y diluir a punto optimo. Top soda",
        "image": "./assets/Cocktail_Gin_Fizz.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 48,
        "name": "Caipiriña",
        "category": "*acido, intenso, refrescante*",
        "ingredients": [
            "60ml Cachaça",
            "4 gajos Lima",
            "10ml Z. Lima",
            "15ml Sirope simple"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Gajo de lima",
        "method": "Verter todos los ingredientes  y remover hasta homogenizar.",
        "image": "./assets/Cocktail_Caipiriña.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 49,
        "name": "SouthSide",
        "category": "*intenso, niotas verdes, acido*",
        "ingredients": [
            "50ml Ginebra",
            "25ml Z. Limón",
            "20ml Sirope simple",
            "5 Hojas de menta"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Hoja de menta",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_SouthSide.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 50,
        "name": "Trinidad Sour",
        "category": "*intenso, amargo-dulce*",
        "ingredients": [
            "45ml Angostura",
            "15ml Whisky Rye",
            "25ml Z. lima",
            "20ml Orgeat"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Aceistes esenciales de limon y descartar el twist",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Trinidad_Sour.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 51,
        "name": "Gimlet",
        "category": "*intenso, acido, freco*",
        "ingredients": [
            "50ml Ginebra",
            "10ml Citrus Soul",
            "15ml Z. Lima",
            "15ml Sirope Simple"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Twist lima",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Gimlet.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 52,
        "name": "Garibaldi",
        "category": "*amargo-dulce, refrescante*",
        "ingredients": [
            "50ml Campari",
            "Top Z. naranja"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Gajo naranja",
        "method": "Añadir el campari  con hielo, el xumo de naranja si no es recien exprimido, agitarlo en coctelera antes de servir sobre el campari.",
        "image": "./assets/Cocktail_Garibaldi.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 53,
        "name": "Aviation",
        "category": "*intenso, acido, notas verdes*",
        "ingredients": [
            "50ml Ginebra",
            "25ml Z. limón",
            "20ml Licor de marraschino",
            "10ml Licor de violeta"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Cereza de marraschino",
        "method": "Verter todos los ingredientes , hacer un agitado fuerte y corto.",
        "image": "./assets/Cocktail_Aviation.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        "id": 54,
        "name": "Moscow mule",
        "category": "*picante,acido, refrescante*",
        "ingredients": [
            "50ml Vodka",
            "25ml Z. lima",
            "Top Ginger beer",
            "2dash Angostura"
        ],
        "glassware": "Vaso Genérico",
        "garnish": "Menta y twist de lima",
        "method": "Verter todos los ingredientes  y remover hasta homogenizar.",
        "image": "./assets/Cocktail_Moscow_mule.webp",
        "video": "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];


// ==========================================
// APP LOGIC Y CONTROLADOR DE VISTAS
// ==========================================
const app = {
    // Referencias a elementos del DOM
    views: document.querySelectorAll('.view'),
    navItems: document.querySelectorAll('.nav-item'),
    
    // Función para cambiar de pestaña/vista
    navigate: function(viewId, navElement = null) {
        // Ocultar todas las vistas
        this.views.forEach(v => v.classList.remove('active'));
        // Mostrar vista objetivo
        const targetView = document.getElementById(`view-${viewId}`);
        if(targetView) targetView.classList.add('active');

        // Actualizar navegación inferior
        if (navElement) {
            this.navItems.forEach(nav => nav.classList.remove('active'));
            navElement.classList.add('active');
        } else {
            // Si navegamos desde un botón, actualizar el nav bottom automáticamente
            this.navItems.forEach(nav => {
                nav.classList.remove('active');
                if(nav.getAttribute('onclick').includes(viewId)){
                    nav.classList.add('active');
                }
            });
        }

        // Inicializar módulos según la vista
        if(viewId === 'flashcards') this.flashcards.init();
        if(viewId === 'quiz') this.quiz.init();
        if(viewId === 'mixer') this.mixer.init();
        if(viewId === 'exam') this.exam.init();
        if(viewId === 'english') this.english.init();
    },

    // Utilidad para obtener elemento aleatorio de array
    getRandomItem: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    // Utilidad para mezclar (shuffle) array
    shuffle: function(arr) {
        return arr.sort(() => Math.random() - 0.5);
    }
};

// ==========================================
// MÓDULO 1: FLASHCARDS
// ==========================================
app.flashcards = {
    currentIndex: 0,
    deck: [],
    
    init: function() {
        this.deck = app.shuffle([...cocktailDB]); // Copia y mezcla
        this.currentIndex = 0;
        this.renderCard();
    },

    renderCard: function() {
        if(this.deck.length === 0) return;
        
        const cocktail = this.deck[this.currentIndex];
        const card = document.querySelector('.flashcard');
        card.classList.remove('flipped'); // Reset flip
        
        document.getElementById('flashcard-name').textContent = cocktail.name;
        document.getElementById('flashcard-category').textContent = cocktail.category;
        
        // Imagen del coctel en la tarjeta
        document.getElementById('flashcard-image').style.backgroundImage = `url('${cocktail.image}')`;

        const ingredientsHtml = cocktail.ingredients.map(i => `<li>${i}</li>`).join('');
        document.getElementById('flashcard-ingredients').innerHTML = ingredientsHtml;
        document.getElementById('flashcard-method').textContent = cocktail.method;
                        
        
        
        // Guardar el video URL para el modal
        app.currentVideoUrl = cocktail.video;
        
        // Update Counter
        document.getElementById('flashcard-counter').textContent = `${this.currentIndex + 1} / ${this.deck.length}`;
    },

    next: function(knewIt) {
        // En una app real, 'knewIt' guardaría progreso en localStorage para repetición espaciada.
        if(this.currentIndex < this.deck.length - 1) {
            this.currentIndex++;
            this.renderCard();
        } else {
            alert("¡Has repasado todas las cartas!");
            this.init(); // Reiniciar mazo
        }
    }
};

// ==========================================
// MÓDULO 2: QUIZ
// ==========================================
app.quiz = {
    score: 0,
    currentQuestion: null,

    init: function() {
        this.score = 0;
        document.getElementById('quiz-score-text').textContent = this.score;
        this.generateQuestion();
    },

    generateQuestion: function() {
        // Ocultar feedback y botón next
        document.getElementById('quiz-feedback').classList.add('hidden');
        document.getElementById('quiz-next-btn').classList.add('hidden');
        
        const cocktail = app.getRandomItem(cocktailDB);
        const types = ['ingredients', 'glassware', 'method'];
        const questionType = app.getRandomItem(types);
        
        let questionText = "";
        let correctAnswer = "";
        let wrongAnswers = [];

        if (questionType === 'glassware') {
            questionText = `¿En qué vaso/copa se sirve el "${cocktail.name}"?`;
            correctAnswer = cocktail.glassware;
            wrongAnswers = cocktailDB.filter(c => c.glassware !== correctAnswer).map(c => c.glassware);
        } else if (questionType === 'method') {
            questionText = `¿Cuál es el método de elaboración del "${cocktail.name}"?`;
            correctAnswer = cocktail.method;
            wrongAnswers = cocktailDB.filter(c => c.method !== correctAnswer).map(c => c.method);
        } else {
            // Ingredients
            const ing = app.getRandomItem(cocktail.ingredients);
            questionText = `¿Cuál de estos ingredientes lleva el "${cocktail.name}"?`;
            correctAnswer = ing;
            // Get random ingredients from other cocktails
            cocktailDB.forEach(c => {
                if(c.id !== cocktail.id) wrongAnswers.push(...c.ingredients);
            });
        }

        // Limpiar duplicados y mezclar wrong answers
        wrongAnswers = [...new Set(wrongAnswers)];
        wrongAnswers = app.shuffle(wrongAnswers).slice(0, 3); // Tomar 3 incorrectas

        const options = app.shuffle([correctAnswer, ...wrongAnswers]);
        
        this.currentQuestion = { correctAnswer };

        document.getElementById('quiz-question').textContent = questionText;
        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.onclick = () => this.checkAnswer(btn, opt);
            optionsContainer.appendChild(btn);
        });
    },

    checkAnswer: function(btn, selectedOption) {
        // Deshabilitar todos los botones
        const buttons = document.querySelectorAll('.quiz-option');
        buttons.forEach(b => b.disabled = true);

        const feedback = document.getElementById('quiz-feedback');
        feedback.classList.remove('hidden', 'correct', 'incorrect');
        document.getElementById('quiz-next-btn').classList.remove('hidden');

        if(selectedOption === this.currentQuestion.correctAnswer) {
            btn.classList.add('correct');
            this.score += 10;
            document.getElementById('quiz-score-text').textContent = this.score;
            feedback.textContent = "¡Correcto! +10 pts";
            feedback.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
            // Resaltar la correcta
            buttons.forEach(b => {
                if(b.textContent === this.currentQuestion.correctAnswer) {
                    b.classList.add('correct');
                }
            });
            feedback.textContent = "Incorrecto. La respuesta era: " + this.currentQuestion.correctAnswer;
            feedback.classList.add('incorrect');
        }
    },

    nextQuestion: function() {
        this.generateQuestion();
    }
};

// ==========================================
// MÓDULO 3: MIXER (ASOCIACIÓN)
// ==========================================
app.mixer = {
    targetCocktail: null,
    selectedIngredients: [],
    
    init: function() {
        this.selectedIngredients = [];
        this.targetCocktail = app.getRandomItem(cocktailDB);
        document.getElementById('mixer-target-cocktail').textContent = this.targetCocktail.name;
        
        // Obtener todos los ingredientes únicos de la BD
        let allIngredients = [];
        cocktailDB.forEach(c => allIngredients.push(...c.ingredients));
        allIngredients = [...new Set(allIngredients)]; // Unique
        
        // Seleccionar ingredientes del cóctel + algunos aleatorios
        let displayIngredients = [...this.targetCocktail.ingredients];
        
        // Añadir distractores
        let distractors = allIngredients.filter(ing => !displayIngredients.includes(ing));
        distractors = app.shuffle(distractors).slice(0, 6); // 6 incorrectos
        
        displayIngredients = app.shuffle([...displayIngredients, ...distractors]);
        
        const container = document.getElementById('mixer-ingredients');
        container.innerHTML = '';
        
        displayIngredients.forEach(ing => {
            const btn = document.createElement('button');
            btn.className = 'mixer-ingredient';
            btn.textContent = ing;
            btn.onclick = () => this.toggleIngredient(btn, ing);
            container.appendChild(btn);
        });
    },
    
    toggleIngredient: function(btn, ing) {
        if(this.selectedIngredients.includes(ing)) {
            this.selectedIngredients = this.selectedIngredients.filter(i => i !== ing);
            btn.classList.remove('selected');
        } else {
            this.selectedIngredients.push(ing);
            btn.classList.add('selected');
        }
    },
    
    check: function() {
        const correctIngredients = this.targetCocktail.ingredients;
        const buttons = document.querySelectorAll('.mixer-ingredient');
        
        let correctCount = 0;
        let penaltyCount = 0;

        buttons.forEach(btn => {
            const ing = btn.textContent;
            btn.disabled = true; // Deshabilitar interacción
            
            if (this.selectedIngredients.includes(ing)) {
                if (correctIngredients.includes(ing)) {
                    btn.classList.add('correct-reveal');
                    correctCount++;
                } else {
                    btn.classList.add('wrong-reveal');
                    penaltyCount++;
                }
            } else {
                if (correctIngredients.includes(ing)) {
                    // No lo seleccionó pero era correcto
                    btn.style.border = "2px dashed #2ecc71";
                    btn.style.color = "#2ecc71";
                }
            }
        });
        
        setTimeout(() => {
            if(correctCount === correctIngredients.length && penaltyCount === 0) {
                alert("¡Mezcla Perfecta! Sabes exactamente qué lleva.");
            } else {
                alert(`Conseguiste ${correctCount} de ${correctIngredients.length} ingredientes correctos. Y te equivocaste en ${penaltyCount}.`);
            }
            this.init(); // Reset game
        }, 1500);
    }
};

// ==========================================
// MÓDULO 4: EXAMEN
// ==========================================
app.exam = {
    questions: [],
    currentQIndex: 0,
    correctAnswers: 0,
    timerInterval: null,
    timeRemaining: 15 * 60, // 15 minutos en segundos
    
    init: function() {
        document.getElementById('exam-intro').classList.remove('hidden');
        document.getElementById('exam-active').classList.add('hidden');
        document.getElementById('exam-results').classList.add('hidden');
        this.timeRemaining = 15 * 60;
        this.updateTimerDisplay();
    },
    
    start: function() {
        this.correctAnswers = 0;
        this.currentQIndex = 0;
        
        // Generar 15 preguntas aleatorias
        this.questions = [];
        for(let i=0; i<15; i++) {
            // Lógica simplificada de generación (similar al quiz)
            const cocktail = app.getRandomItem(cocktailDB);
            const questionType = app.getRandomItem(['ingredients', 'glassware', 'method']);
            
            let qText = "", cAns = "", wAns = [];
            if(questionType === 'glassware'){
                qText = `¿Cristalería para "${cocktail.name}"?`;
                cAns = cocktail.glassware;
                wAns = cocktailDB.filter(c=>c.glassware!==cAns).map(c=>c.glassware);
            } else if (questionType === 'method') {
                qText = `¿Método para "${cocktail.name}"?`;
                cAns = cocktail.method;
                wAns = cocktailDB.filter(c=>c.method!==cAns).map(c=>c.method);
            } else {
                qText = `¿Ingrediente del "${cocktail.name}"?`;
                cAns = app.getRandomItem(cocktail.ingredients);
                cocktailDB.forEach(c => { if(c.id !== cocktail.id) wAns.push(...c.ingredients); });
            }
            wAns = [...new Set(wAns)];
            wAns = app.shuffle(wAns).slice(0,3);
            const opts = app.shuffle([cAns, ...wAns]);
            
            this.questions.push({ qText, cAns, opts });
        }
        
        document.getElementById('exam-intro').classList.add('hidden');
        document.getElementById('exam-active').classList.remove('hidden');
        
        // Start Timer
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            if(this.timeRemaining <= 0) this.endExam(true);
        }, 1000);
        
        this.renderQuestion();
    },
    
    updateTimerDisplay: function() {
        const m = Math.floor(this.timeRemaining / 60).toString().padStart(2, '0');
        const s = (this.timeRemaining % 60).toString().padStart(2, '0');
        document.getElementById('exam-timer').textContent = `${m}:${s}`;
    },
    
    renderQuestion: function() {
        const q = this.questions[this.currentQIndex];
        document.getElementById('exam-progress').textContent = `Pregunta ${this.currentQIndex + 1} de 15`;
        document.getElementById('exam-question').textContent = q.qText;
        
        const optsContainer = document.getElementById('exam-options');
        optsContainer.innerHTML = '';
        
        q.opts.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.onclick = () => this.handleAnswer(opt === q.cAns);
            optsContainer.appendChild(btn);
        });
    },
    
    handleAnswer: function(isCorrect) {
        if(isCorrect) this.correctAnswers++;
        
        if(this.currentQIndex < 14) {
            this.currentQIndex++;
            this.renderQuestion();
        } else {
            this.endExam(false);
        }
    },
    
    endExam: function(timeout = false) {
        clearInterval(this.timerInterval);
        document.getElementById('exam-active').classList.add('hidden');
        
        const resultsEl = document.getElementById('exam-results');
        resultsEl.classList.remove('hidden');
        
        const percentage = Math.round((this.correctAnswers / 15) * 100);
        document.getElementById('exam-final-score').textContent = `${percentage}%`;
        
        const msgEl = document.getElementById('exam-status-message');
        if (timeout) {
            msgEl.textContent = "¡Tiempo agotado!";
            msgEl.style.color = "var(--clr-error)";
        } else if (percentage >= 80) {
            msgEl.textContent = "¡Aprobado! Excelente trabajo.";
            msgEl.style.color = "var(--clr-success)";
        } else {
            msgEl.textContent = "Necesitas estudiar un poco más.";
            msgEl.style.color = "var(--clr-error)";
        }
    }
};

// ==========================================
// MÓDULO 5: INGLÉS
// ==========================================
const englishPhrases = [
  ['Saludos', 'Hi, how are you?', 'Hola, ¿qué tal?', 'Saludo informal y cercano.'],
  ['Saludos', 'Welcome!', '¡Bienvenido/a!', 'Ideal al recibir a un cliente.'],
  ['Pedidos', 'What can I get you?', '¿Qué te pongo?', 'La forma más natural de tomar nota.'],
  ['Pedidos', 'Are you ready to order?', '¿Estáis listos para pedir?', 'Útil con mesas o grupos.'],
  ['Pedidos', 'Would you like anything else?', '¿Queréis algo más?', 'Para ofrecer una segunda ronda.'],
  ['Bebidas', 'Beer, wine or a cocktail?', '¿Cerveza, vino o cóctel?', 'Para ayudar a decidir.'],
  ['Bebidas', 'What would you like to drink?', '¿Qué te gustaría beber?', 'Pregunta general y educada.'],
  ['Bebidas', 'Still or sparkling water?', '¿Agua sin gas o con gas?', 'Pregunta habitual en hostelería.'],
  ['Bebidas', 'With ice?', '¿Con hielo?', 'Corta y muy práctica.'],
  ['Bebidas', 'Do you want a single or a double?', '¿Lo quieres solo o doble?', 'Para combinados.'],
  ['Servicio', 'I will be right with you.', 'Ahora mismo voy con vosotros.', 'Reconoce al cliente aunque estés ocupado.'],
  ['Servicio', 'Sorry for the wait.', 'Perdón por la espera.', 'Una disculpa rápida y cordial.'],
  ['Servicio', 'Here you are.', 'Aquí tienes / Aquí tenéis.', 'Al entregar una bebida o pedido.'],
  ['Servicio', 'Enjoy!', '¡Que lo disfrutéis!', 'Al servir.'],
  ['Pago', 'Would you like to pay by card or cash?', '¿Queréis pagar con tarjeta o en efectivo?', 'Pregunta directa y educada.'],
  ['Pago', 'The total is €___.', 'El total son ___ euros.', 'Completa con el importe.'],
  ['Pago', 'Would you like the bill?', '¿Queréis la cuenta?', 'En inglés británico; en EE. UU., “the check”.'],
  ['Discoteca', 'The DJ starts at midnight.', 'El DJ empieza a medianoche.', 'Información frecuente de la sala.'],
  ['Discoteca', 'The entrance is over there.', 'La entrada está por allí.', 'Para orientar a clientes.'],
  ['Discoteca', 'Last orders, please!', '¡Última ronda, por favor!', 'Anuncio para el cierre de barra.'],
  ['Problemas', 'I am sorry, we are out of that.', 'Lo siento, se nos ha acabado.', 'Para un producto agotado.'],
  ['Problemas', 'Could I see your ID, please?', '¿Podría ver tu identificación, por favor?', 'Para comprobar la edad.'],
  ['Problemas', 'Please drink responsibly.', 'Por favor, bebe con responsabilidad.', 'Mensaje de consumo responsable.']
].map(([category, en, es, tip], id) => ({ id, category, en, es, tip }));

app.english = {
    state: {
        category: 'Todas',
        query: '',
        index: 0,
        known: new Set(JSON.parse(localStorage.getItem('english-bar-known') || '[]'))
    },

    init: function() {
        this.renderCategories();
        this.render();
    },

    save: function() {
        localStorage.setItem('english-bar-known', JSON.stringify([...this.state.known]));
    },

    filtered: function() {
        return englishPhrases.filter(p => 
            (this.state.category === 'Todas' || p.category === this.state.category) && 
            `${p.en} ${p.es}`.toLowerCase().includes(this.state.query)
        );
    },

    renderCategories: function() {
        const categories = ['Todas', ...new Set(englishPhrases.map(p => p.category))];
        const container = document.getElementById('english-categories');
        container.innerHTML = categories.map(c => `
            <button class="category-btn ${c === this.state.category ? 'active' : ''}" onclick="app.english.setCategory('${c}')">${c}</button>
        `).join('');
    },

    setCategory: function(c) {
        this.state.category = c;
        this.state.index = 0;
        this.renderCategories();
        this.render();
    },

    search: function(val) {
        this.state.query = val.trim().toLowerCase();
        this.state.index = 0;
        this.render();
    },

    render: function() {
        const items = this.filtered();
        this.state.index = Math.max(0, Math.min(this.state.index, items.length - 1));
        
        const p = items[this.state.index];
        const card = document.getElementById('english-study-card');
        
        // Progress
        const total = englishPhrases.length;
        const done = this.state.known.size;
        document.getElementById('english-progress-label').textContent = `${done} de ${total} repasadas`;
        document.getElementById('english-progress-bar').style.width = `${(done / total) * 100}%`;

        if (!p) { 
            card.classList.add('hidden'); 
            return; 
        }
        card.classList.remove('hidden');
        
        document.getElementById('english-card-category').textContent = p.category;
        document.getElementById('english-card-counter').textContent = `${this.state.index + 1} / ${items.length}`;
        document.getElementById('english-phrase-en').textContent = p.en;
        document.getElementById('english-phrase-es').textContent = p.es;
        document.getElementById('english-tip').textContent = p.tip;
        
        document.getElementById('english-translation').classList.add('hidden');
        document.getElementById('english-reveal-btn').classList.remove('hidden');
        
        const knownBtn = document.getElementById('english-known-btn');
        if (this.state.known.has(p.id)) {
            knownBtn.textContent = '↺ Repasar';
            knownBtn.style.backgroundColor = 'transparent';
            knownBtn.style.border = '1px solid var(--clr-success)';
            knownBtn.style.color = 'var(--clr-success)';
        } else {
            knownBtn.textContent = '✓ La sé';
            knownBtn.style.backgroundColor = 'var(--clr-success)';
            knownBtn.style.border = 'none';
            knownBtn.style.color = '#fff';
        }
    },

    reveal: function() {
        document.getElementById('english-translation').classList.remove('hidden');
        document.getElementById('english-reveal-btn').classList.add('hidden');
    },

    prev: function() {
        const n = this.filtered().length;
        if(n === 0) return;
        this.state.index = (this.state.index - 1 + n) % n;
        this.render();
    },

    next: function() {
        const n = this.filtered().length;
        if(n === 0) return;
        this.state.index = (this.state.index + 1) % n;
        this.render();
    },

    toggleKnown: function() {
        const p = this.filtered()[this.state.index];
        if(!p) return;
        if(this.state.known.has(p.id)) {
            this.state.known.delete(p.id);
        } else {
            this.state.known.add(p.id);
            // Auto advance on know
            setTimeout(() => this.next(), 300);
        }
        this.save();
        this.render();
    },

    resetProgress: function() {
        if(confirm("¿Seguro que quieres reiniciar tu progreso de inglés?")) {
            this.state.known.clear();
            this.save();
            this.render();
        }
    },

    speak: function() {
        const p = this.filtered()[this.state.index];
        if(!p) return;
        const u = new SpeechSynthesisUtterance(p.en);
        const voices = speechSynthesis.getVoices();
        u.voice = voices.find(v => /^en-GB/i.test(v.lang)) || voices.find(v => /^en/i.test(v.lang)) || null;
        u.lang = u.voice?.lang || 'en-GB';
        u.rate = 0.8;
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
    }
};

// Start default view
document.addEventListener('DOMContentLoaded', () => {
    // Check if URL has hash to navigate directly
    const hash = window.location.hash.substring(1);
    if(hash && ['dashboard', 'flashcards', 'quiz', 'mixer', 'exam', 'english'].includes(hash)) {
        app.navigate(hash);
    }
});

// ==========================================
// LÓGICA DE INSTALACIÓN PWA (ANDROID & IOS)
// ==========================================
let deferredPrompt;
const installBtn = document.getElementById('btn-install-app');
const iosModal = document.getElementById('ios-install-modal');

// Detectar iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detectar si ya está instalada en iOS
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

if (isIos() && !isInStandaloneMode()) {
    // Mostrar botón para iOS
    if (installBtn) {
        installBtn.classList.remove('hidden');
        installBtn.addEventListener('click', () => {
            if(iosModal) iosModal.classList.remove('hidden');
        });
    }
}

// Lógica para Android / Escritorio (Chrome, Edge)
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevenir el mini-infobar por defecto
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostrar nuestro botón personalizado
    if (installBtn) {
        installBtn.classList.remove('hidden');
        
        installBtn.addEventListener('click', async () => {
            if(!deferredPrompt) return;
            // Mostrar el prompt nativo
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('El usuario aceptó la instalación');
            }
            deferredPrompt = null;
            installBtn.classList.add('hidden');
        });
    }
});

// Ocultar botón si ya se instaló (evento appinstalled)
window.addEventListener('appinstalled', () => {
    if (installBtn) installBtn.classList.add('hidden');
    deferredPrompt = null;
    console.log('PWA Instalada correctamente');
});
