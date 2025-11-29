import React from "react";
import styles from "./Menu.module.css";

// carrega todas as imagens da pasta (Vite)
const images = import.meta.glob("../assets/img/*", { eager: true, import: "default" });

// encontra imagem por nome base (testa várias extensões)
const findImageByName = (baseName) => {
  if (!baseName) return null;
  const exts = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"];
  const key = Object.keys(images).find((k) =>
    exts.some((ext) => k.toLowerCase().endsWith((baseName + ext).toLowerCase()))
  );
  return key ? images[key] : null;
};

const slug = (s = "") =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// fallback geral (usa combo se existir)
const comboImg = findImageByName("combo") || findImageByName("combocompleto") || Object.values(images)[0] || "";

/* menuItems organizado por categorias; cada item tem imageName que corresponde ao arquivo na pasta img */
const menuItems = {
  donburi: [
    {
      id: 1,
      name: "Katsudon Imperial",
      description:
        "Lombo de porco empanado e frito (Tonkatsu), cozido levemente com ovos macios e cebola em molho adocicado, servido sobre arroz japonês (Gohan). Acompanha picles japoneses (tsukemono).",
      serves: "1 pessoa",
      price: "R$ 48,00",
      imageName: "katsudon",
    },
    {
      id: 2,
      name: "Gyudon Clássico",
      description:
        "Fatias finas de carne bovina e cebola caramelizada cozidas lentamente em molho à base de shoyu e dashi, servidas sobre arroz branco. Finalizado com gengibre em conserva (beni shoga).",
      serves: "1 pessoa",
      price: "R$ 45,00",
      imageName: "gyudon",
    },
    {
      id: 3,
      name: "Oyakodon da Casa",
      description:
        "Cubos suculentos de frango e ovos cozidos juntos em caldo dashi, criando uma cobertura cremosa sobre o arroz. Finalizado com cebolinha fresca.",
      serves: "1 pessoa",
      price: "R$ 42,00",
      imageName: "oyakodon",
    },
  ],
  noodles: [
    {
      id: 4,
      name: "Yakisoba Tradicional",
      description:
        "Macarrão frito na chapa com mix de vegetais frescos (repolho, cenoura, brócolis) e tiras de carne e frango, envolvidos em molho especial da casa.",
      serves: "1 pessoa (generoso)",
      price: "R$ 42,00",
      imageName: "ramen", // usa imagem ramen como placeholder para noodles
    },
    {
      id: 5,
      name: "Udon Especial",
      description:
        "Macarrão grosso de trigo servido em caldo dashi quente e aromático. Acompanha kamaboko (massa de peixe), cebolinha e tempurá de camarão crocante à parte.",
      serves: "1 pessoa",
      price: "R$ 46,00",
      imageName: "udon",
    },
    {
      id: 6,
      name: "Soba Refrescante",
      description:
        "Macarrão fino de trigo sarraceno. Pode ser servido frio (Zaru Soba) com molho tsuyu para mergulhar, ou quente em caldo leve com cogumelos shiitake.",
      serves: "1 pessoa",
      price: "R$ 40,00",
      imageName: "combo",
    },
  ],
  frituras: [
    {
      id: 7,
      name: "Yakitori (Trio)",
      description:
        "Seleção de 3 espetinhos de frango grelhados no carvão, pincelados com molho tarê artesanal (doce e salgado). Acompanha fatia de limão.",
      serves: "1 (como entrada)",
      price: "R$ 35,00",
      imageName: "yakitori",
    },
    {
      id: 8,
      name: "Kushikatsu Misto",
      description:
        "Espetinhos variados (carne, lótus e queijo) empanados em farinha panko crocante e fritos. Acompanha molho tonkatsu denso e repolho picado.",
      serves: "2 pessoas(petisco)",
      price: "R$ 38,00",
      imageName: "combo",
    },
    {
      id: 9,
      name: "Frango Karaage",
      description:
        "Pedaços de sobrecoxa de frango marinados em gengibre e shoyu, fritos até ficarem super crocantes por fora e suculentos por dentro. Acompanha maionese japonesa e limão.",
      serves: "2 pessoas (petisco)",
      price: "R$ 36,00",
      imageName: "frangokarage",
    },
    {
      id: 10,
      name: "Frango Xadrez (Estilo Oriental)",
      description:
        "Cubos de frango salteados na wok com pimentões coloridos, cebola e amendoim torrado, finalizados com molho de soja brilhante.",
      serves: "2 pessoas",
      price: "R$ 44,00",
      imageName: "frangoxadresx",
    },
  ],
  sushi: [
    {
      id: 11,
      name: 'Barco "Sushi Wave" (40 Peças)',
      description:
        "Uma seleção premium do Chef. Inclui Sashimis variados (Salmão, Atum, Peixe Branco), Nigiris, Jyo, Uramakis e Hossomakis. Decoração especial.",
      serves: "2 a 3 pessoas",
      price: "R$ 120,00",
      imageName: "barcogrande",
    },
    {
      id: 12,
      name: "Combinado Individual (16 Peças)",
      description:
        "O equilíbrio perfeito para o almoço ou jantar. 4 Sashimis de Salmão, 4 Nigiris, 4 Uramakis Califórnia e 4 Hossomakis de Pepino.",
      serves: "1 pessoa",
      price: "R$ 58,00",
      imageName: "combinado",
    },
  ],
  entradas: [
    {
      id: 13,
      name: "Missoshiru",
      description:
        "Tradicional sopa de pasta de soja fermentada (missô) com cubos de tofu macio, algas wakame e cebolinha picada.",
      serves: "1 pessoa",
      price: "R$ 18,00",
      imageName: "missoshiru",
    },
    {
      id: 14,
      name: "Sunomono",
      description:
        "Salada refrescante de pepino japonês fatiado bem fino em conserva agridoce, finalizada com sementes de gergelim torrado e kani.",
      serves: "1 pessoa",
      price: "R$ 20,00",
      imageName: "edamame",
    },
    {
      id: 15,
      name: "Harumaki (2 Unidades)",
      description:
        "Rolinhos primavera de massa fina e crocante. Opções de recheio: Legumes ou Queijo. Acompanha molho agridoce vermelho.",
      serves: "1 pessoa",
      price: "R$ 22,00",
      imageName: "gyoza",
    },
  ],
  sobremesas: [
    {
      id: 16,
      name: "Mochi Ice (Dupla)",
      description:
        "Bolinhos de massa de arroz glutinoso (mochi) recheados com sorvete cremoso. Sabores: Chá Verde, Morango ou Baunilha.",
      serves: "1 pessoa",
      price: "R$ 24,00",
      imageName: "mochis",
    },
    {
      id: 17,
      name: "Dorayaki",
      description: 'Duas panquecas macias e fofinhas estilo "castella", recheadas com pasta doce de feijão azuki (anko).',
      serves: "1 pessoa",
      price: "R$ 20,00",
      imageName: "dorayaki",
    },
  ],

  /* bebidas já configuradas */
  bebidas: [
    {
      id: 201,
      name: "Saquê (Nihonshu)",
      description: "Saquê tradicional servido à temperatura ideal — excelente para acompanhar sushi.",
      serves: "250ml",
      price: "R$ 28,00",
      imageName: "saque",
    },
    {
      id: 202,
      name: "Saquê Premium (Warm/Hot)",
      description: "Versão premium, pode ser servido quente (atsukan) para noites frias.",
      serves: "300ml",
      price: "R$ 45,00",
      imageName: "saque2",
    },
    {
      id: 203,
      name: "Cerveja Japonesa (Asahi/Kirin)",
      description: "Lager leve e refrescante — combina muito bem com frituras e pratos temperados.",
      serves: "600ml",
      price: "R$ 12,00",
      imageName: "cerveja",
    },
    {
      id: 204,
      name: "Ramune",
      description: "Refrigerante tradicional japonês com abertura em bolinha — sabor limão/lima.",
      serves: "300ml",
      price: "R$ 8,00",
      imageName: "ramune",
    },
    {
      id: 205,
      name: "Umeshu (Licor de Ameixa)",
      description: "Licor doce de ameixa, servido com gelo ou soda — ótimo como aperitivo ou sobremesa.",
      serves: "120ml",
      price: "R$ 18,00",
      imageName: "umeshu",
    },
  ],
};

// categories para renderizar (mantém ordem desejada)
const categories = [
  { id: "donburi", title: "🥣 Donburi (Tigelas de Arroz)", items: menuItems.donburi },
  { id: "noodles", title: "🍜 Macarrão (Noodles)", items: menuItems.noodles },
  { id: "frituras", title: "🍢 Espetinhos e Frituras", items: menuItems.frituras },
  { id: "sushi", title: "🍣 Sushi e Barcos", items: menuItems.sushi },
  { id: "entradas", title: "🥗 Entradas", items: menuItems.entradas },
  { id: "sobremesas", title: "🍡 Sobremesas", items: menuItems.sobremesas },
  { id: "bebidas", title: "🥤 Bebidas", items: menuItems.bebidas },
];

const handleOrderClick = (itemName) => {
  alert(`Você escolheu: ${itemName}\n\nEm breve será possível fazer pedidos!`);
};

export default function Menu() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuHeader}>
        <h1 className={styles.menuTitle}>🍱 Nosso Cardápio</h1>
        <p className={styles.menuSubtitle}>Autêntica culinária japonesa preparada com amor</p>
      </div>

      {categories.map((category) => (
        <section key={category.id} className={styles.categorySection} id={category.id}>
          <h2 className={styles.categoryTitle}>{category.title}</h2>
          <div className={styles.itemsGrid}>
            {category.items && category.items.length > 0 ? (
              category.items.map((item) => {
                const base = item.imageName || slug(item.name);
                const imgSrc = findImageByName(base) || comboImg;
                return (
                  <div key={item.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                      {imgSrc ? (
                        <img src={imgSrc} alt={item.name} className={styles.itemImage} loading="lazy" />
                      ) : (
                        <div className={styles.imagePlaceholder} aria-hidden="true" />
                      )}
                      <div className={styles.overlay}>
                        <button className={styles.orderBtn} onClick={() => handleOrderClick(item.name)}>
                          Peça Agora
                        </button>
                      </div>
                    </div>

                    <div className={styles.cardContent}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <p className={styles.itemDescription}>{item.description}</p>

                      <div className={styles.cardFooter}>
                        <div className={styles.infoGroup}>
                          <span className={styles.servesLabel}>👥 {item.serves || "-"}</span>
                        </div>
                        <div className={styles.priceTag}>{item.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className={styles.emptyMsg}>Nenhum item disponível nesta categoria.</p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}