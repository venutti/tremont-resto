const data = [
  {
    name: "BAR DE TAPAS",
    items: [
      {
        name: "TAPEO",
        items: [
          {
            name: "PAPAS FRITAS",
            price: 1100,
          },
          {
            name: "PAPAS CON SALSAS",
            description: "Con cheddar, panceta y verdeo\nBravas",
            price: 1400,
          },
          {
            name: "TORTILLA ESPAÑOLA",
            description: "Clásica, rellena con chorizo y mozzarella",
            price: 1300,
          },
          {
            name: "BRUSQUETAS",
            description:
              "Serrana: lomo ahumado, morrones, rúcula y mozzarella\nCaprese: tomate, albahaca, ajo, oliva y cubos de mozzarella",
            price: 1200,
          },
          {
            name: "RABAS",
            description: "Porción: 20 anillos",
            price: 2700,
          },
          {
            name: "TACOS",
            description:
              "2 tacos de carne\n1 con guacamole, porotos negros y criolla\n1 con cheddar, arroz y vegetales",
            price: 1700,
          },
          {
            name: "QUESADILLA",
            description:
              "2 quesadillas\n1 con guacamole, porotos negros y vegetales\n1 con cheddar, arroz y vegetales",
            price: 1400,
          },
          {
            name: "FRITURA DE MAR",
            description: "Rabas, langostinos crispy, fishs y papas",
            price: 3800,
          },
          {
            name: "TABLA DE FIAMBRES SERRANOS",
            description:
              "Jamón cocido y crudo, lomo ahumado con especias, longaniza calabresa, bondiola y variedad de quesos",
            price: 2800,
          },
          {
            name: "TABLA DE QUESOS Y FRUTOS",
            description:
              "Queso azul, gouda, pategrás, sardo y tybo. Frutos secos, olivas y conservas",
            price: 2600,
          },
        ],
      },
    ],
  },
  {
    name: "CAFÉ",
    description:
      "Podés elegir el grano de Café Cabrales:\nSuper - Prestige - Colombiano - Brasilero - Ristreto - Italiano",
    items: [
      {
        name: "CAFÉ",
        items: [
          {
            name: "ESPRESSO",
            description: "Espresso negro en pocillo",
            price: 450,
          },
          {
            name: "ESPRESSO DOBLE",
            description: "Espresso negro en taza",
            price: 550,
          },
          {
            name: "LUNGO",
            description: "Espresso negro en jarrito",
            price: 500,
          },
          {
            name: "MACCHIATO",
            description:
              "Espresso (2/3), leche caliente (1/3) y espuma de leche",
            price: 500,
          },
          {
            name: "LÁGRIMA",
            description: "Espresso (1/3) y leche caliente espumada",
            price: 500,
          },
          {
            name: "CAFÉ CON LECHE",
            description: "Espresso (50%) y leche caliente (50%)",
            price: 550,
          },
        ],
      },
      {
        name: "CAFÉ ESPECIAL",
        items: [
          {
            name: "FLAT WHITE",
            description: "Espresso fuerte (1/4) y leche caliente espumada",
            price: 500,
          },
          {
            name: "LATTE",
            description: "Espresso (1/3), leche caliente (2/3)  leche espumada",
            price: 500,
          },
          {
            name: "LATTE CARAMEL",
            description: "Espresso (1/3), leche caliente (2/3) y caramelo",
            price: 500,
          },
          {
            name: "CAPUCCINO",
            description:
              "Espresso (1/3), leche caliente (1/3), espuma (1/3) y canela",
            price: 550,
          },
          {
            name: "MOKA",
            description: "Espresso, leche caliente espumada y chocolate",
            price: 550,
          },
          {
            name: "IRISH COFFE",
            description: "Espresso, azúcar, whisky y crema",
            price: 650,
          },
        ],
      },
      {
        name: "CAFÉ FRÍO",
        items: [
          {
            name: "CAFÉ VIENÉS",
            description: "Café frío con copa de crema",
            price: 750,
          },
          {
            name: "FRAPUCCINO",
            description:
              "Café frío, helado de vainilla, crema de leche y chantilly",
            price: 750,
          },
          {
            name: "ICED COFFE CLASSIC",
            description: "Café frío, leche y crema helada",
            price: 750,
          },
        ],
      },
    ],
  },
  {
    name: "BOLLERÍA",
    items: [
      {
        name: "SHOTS DULCES",
        items: [
          {
            name: "TIRAMISÚ",
            price: 850,
          },
          {
            name: "CHOCOTORTA",
            price: 850,
          },
        ],
      },
      {
        name: "PASTELERÍA",
        items: [
          {
            name: "BROWNIE",
            description: "Choco y nuez / Vainilla y limón",
            price: 450,
          },
          {
            name: "CUADRADOS",
            description: "Frola / Coco y dulce de leche",
            price: 400,
          },
          {
            name: "MUFFINS",
            description:
              "Vainilla y arándanos / Banana, choco y nuez / Manzana y canela",
            price: 300,
          },
          {
            name: "BUDINES",
            description: "Choco y chips / Limón y amapolas",
            price: 250,
          },
          {
            name: "ALFAJORES",
            description: "Chocolate / Café / Almendras",
            price: 250,
          },
          {
            name: "MEDIALUNA",
            description: "Manteca",
            price: 200,
          },
          {
            name: "MEDIALUNA C/ JYQ",
            description: "Manteca",
            price: 250,
          },
        ],
      },
      {
        name: "ENTRE PANES",
        items: [
          {
            name: "SELLADO",
            description: "Sandwich de jamón y queso caliente",
            price: 600,
          },
          {
            name: "PANINI",
            description: "Sandwich frío de crudo, queso, rúcula y cherris",
            price: 800,
          },
          {
            name: "CRUDO Y QUESO",
            description: "Sandwich pan tostado de crudo y queso",
            price: 750,
          },
          {
            name: "VEGGIE",
            description: "Sandwich pan tostado de verduras asadas",
            price: 650,
          },
          {
            name: "TOSTÓN",
            description: "Pan tostado con guacamole y cherris",
            price: 550,
          },
        ],
      },
    ],
  },
  {
    name: "BEBIDAS",
    items: [
      {
        name: "DETOX",
        items: [
          {
            name: "ORANGE",
            description: "Zanahoria, naranja, maracuyá y limón",
            price: 700,
          },
          {
            name: "VERDE",
            description: "Brocoli, rúcula, pepino y apio",
            price: 700,
          },
          {
            name: "CUCUMBER",
            description: "Piña, pepino, jengibre y limón",
            price: 700,
          },
          {
            name: "FORTE",
            description: "Remolacha, jengibre,limón y ajo",
            price: 700,
          },
        ],
      },
      {
        name: "MOCKTAIL",
        items: [
          {
            name: "MOJITO",
            description: "De té verde",
            price: 700,
          },
          {
            name: "BRASILIA",
            description: "Pomelo, frutilla y limón",
            price: 700,
          },
          {
            name: "SAN FRANCISCO",
            description: "Limón, ananá y granadina",
            price: 700,
          },
          {
            name: "PARADISE",
            description: "Naranja, maracuyá, syrup y menta",
            price: 700,
          },
        ],
      },
      {
        name: "SMOTHIES",
        items: [
          {
            name: "TROPICAL",
            description: "Mango, leche, crema de coco y helado de mango",
            price: 750,
          },
          {
            name: "BERRIES",
            description:
              "Frutilla, banana, leche de almendra, crema de maní y miel",
            price: 750,
          },
          {
            name: "ÍNDICA",
            description: "Mango, zanahoria, leche y azúcar",
            price: 750,
          },
          {
            name: "BLUEBERRY MUFFI",
            description: "Arándanos, banana, avena, yogurt, vainilla y leche",
            price: 750,
          },
        ],
      },
      {
        name: "LIMONADAS",
        items: [
          {
            name: "CLÁSICA",
            description: "Limón, menta y jengibre",
            price: 500,
          },
          {
            name: "FRUTOS ROJOS",
            description: "Frutilla, arándanos, limón y menta",
            price: 500,
          },
          {
            name: "CUCUMBER",
            description: "Pepino y limón",
            price: 500,
          },
          {
            name: "SANDÍA",
            description: "Sandía, limón y menta",
            price: 500,
          },
          {
            name: "POMELADA",
            price: 500,
          },
          {
            name: "FRUTILLA Y NARANJA",
            price: 500,
          },
        ],
      },
    ],
  },
];

export default data;
