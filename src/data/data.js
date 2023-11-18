class Producto {
  constructor(id, title, description, type, price, pictureUrl, quantity) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.type = type;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.quantity = quantity;
  }
}

const data = [
  new Producto(
    1,
    "CUADRO POLIPTICO CASA EN EL BOSQUE",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/31-61d3ae08f76c79850a15482996269456-480-0.webp",
    10
  ),
  new Producto(
    2,
    "CUADRO POLIPTICO NY CITY BRIDGE",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/paisaje-ny1-d768632926ca973c4315646988337687-240-0.webp",
    10
  ),
  new Producto(
    3,
    "CUADRO POLIPTICO MAPAMUNDI",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/cuadro-decorativo-mapamundi1-3cdd25d333f4d9e97a15391298981798-240-0.webp",
    10
  ),
  new Producto(
    4,
    "CUADRO GOLDEN GATE",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/81-9c8a129e0b4185b8a915474446253917-240-0.webp",
    10
  ),
  new Producto(
    5,
    "CUADRO POLIPTICO NISSAN GTR",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/cuadro-decorativo-poliptico-autos-11-2843e7a4820d07ac3915492998061095-240-0.webp",
    10
  ),
  new Producto(
    6,
    "CUADRO POLIPTICO PAISAJE MAR AL ATARDECER",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/insta141-b28f87329fdc5f397f15850932803305-240-0.webp",
    10
  ),
  new Producto(
    7,
    "CUADRO POLIPTICO LA CASA DE LA CASCADA",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/81-e29363359bbd3363ae15576003944210-240-0.webp",
    10
  ),
  new Producto(
    8,
    "CUADRO POLIPTICO TIGRE BLANCO",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/tigre-t071-b0254621d81ababe7e15974564791501-240-0.webp",
    10
  ),
  new Producto(
    9,
    "CUADRO POLIPTICO ABSTRACTO",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/131-f4b3c10b32f392ecd415657528391728-240-0.webp",
    10
  ),
  new Producto(
    10,
    "CUADRO POLIPTICO LLANTA PORSCHE",
    "here goes the product's description",
    "poliptico",
    17600,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/cuadros-decorativos-modernos-autos-361-96665c7a13145aa48015516768962384-240-0.webp",
    10
  ),
  new Producto(
    11,
    "CUADRO SIMPLE MAPAMUNDI",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/21-420a732f0e8d4df93416003937456003-240-0.webp",
    10
  ),
  new Producto(
    12,
    "CUADRO SIMPLE BLACK WOMAN GOLD",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/1-pieza-negrita-dorado-21-af7c1b181dd87404d316300283133507-240-0.webp",
    10
  ),
  new Producto(
    13,
    "CUADRO SIMPLE BREAKING BAD",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/20210106_1552021-9fa33e1c18cac2818316099613378212-240-0.webp",
    10
  ),
  new Producto(
    14,
    "CUADRO SIMPLE AUTOS",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/1-pieza-autos-121-2d7cab0697221743d016582781851292-240-0.webp",
    10
  ),
  new Producto(
    15,
    "CUADRO SIMPLE DOLAR",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/cuadro-dolar-140x60cm1-a42ecb201d2942982f16096184429190-240-0.webp",
    10
  ),
  new Producto(
    16,
    "CUADRO SIMPLE BREAKING BAD I AM THE ONE WHO KNOCKS",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/20210106_1552381-c29034f7dc4fd316ba16099613149021-240-0.webp",
    10
  ),
  new Producto(
    17,
    "CUADRO SIMPLE QUEEN",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/1-pieza-70x50-queen-11-846269abd66bc706c816503284687412-240-0.webp",
    10
  ),
  new Producto(
    18,
    "CUADRO SIMPLE BITCOIN",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/money-1-pieza-141-5280edbd1c7ab856c116359807988461-240-0.webp",
    10
  ),
  new Producto(
    19,
    "CUADRO SIMPLE FLOWER WOMAN",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/muestra-imagenes-pinterest-11-36a44a46e5a162be7e16300283781751-240-0.webp",
    10
  ),
  new Producto(
    20,
    "CUADRO SIMPLE BART SUPREME",
    "here goes the product's description",
    "simple",
    11400,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/bart-supreme-11-0b24b1491eca00f5e316346046110619-240-0.webp",
    10
  ),
  new Producto(
    21,
    "VINILO 3D BOTE EN LAGO",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-paisajes-191-c0947229a26378000215503725800706-240-0.webp",
    10
  ),
  new Producto(
    22,
    "VINILO 3D TORRE EIFFEL",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/121-75f20f458cf18709ec15376703498445-240-0.webp",
    10
  ),
  new Producto(
    23,
    "VINILO 3D SPIDER-MAN",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-infantiles-spider-man1-9e660ff52f8e3daba115503601575193-240-0.webp",
    10
  ),
  new Producto(
    24,
    "VINILO 3D CABALLOS",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-paisajes-81-29ed156f130ea953d315503717606267-240-0.webp",
    10
  ),
  new Producto(
    25,
    "VINILO 3D DELFÍN",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-paisajes-91-74b048d7cdabbe653115503719011428-240-0.webp",
    10
  ),
  new Producto(
    26,
    "VINILO 3D OBELISCO",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-paisajes-11-27f5733e3d150da38b15503711488745-240-0.webp",
    10
  ),
  new Producto(
    27,
    "VINILO 3D FLORES",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-paisajes-221-cb1bbda0da9d9a983115503728787408-240-0.webp",
    10
  ),
  new Producto(
    28,
    "VINILO 3D TOY STORY",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-infantiles-toy-story-11-dcf14aab723d3c288615503602791415-240-0.webp",
    10
  ),
  new Producto(
    29,
    "VINILO 3D PIRÁMIDES",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/vinilo-3d-paisajes-151-56c07718271e72a5a015503723007244-240-0.webp",
    10
  ),
  new Producto(
    30,
    "VINILO 3D PAISAJE FARO",
    "here goes the product's description",
    "3d",
    5900,
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/829/376/products/101-af4bfac0077996cda815376702810222-240-0.webp",
    10
  ),
];

export default data;
