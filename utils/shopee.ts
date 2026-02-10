import { throws } from "assert"
import RandomNumber from "./randomNumber.ts"

class Shopee {
  gamerProducts = [
    // Headset Gamer
    this.createProduct(
      'Headset Gamer Mancer Twilight S, Rainbow, Drivers 40mm, Preto, MCR-TLTS-RGB01', 
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-md60qb2si69e74@resize_w450_nl.webp', 
      'https://s.shopee.com.br/4LCoGxirJp'
    ),

    // Teclado Gamer (branco)
    this.createProduct(
      'Teclado Gamer TGT M90B, Rainbow, ABNT2, Branco, TGT-M90B-RBW01', 
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-merl1vz9f3ep45@resize_w450_nl.webp', 
      'https://s.shopee.com.br/1Vscy3iaKa'
    ),

    // Teclado Mecanico (Branco)
    this.createProduct(
      'Teclado Mecanico Gamer TGT Sherman Compacto, Rainbow, ABNT2, Switch Azul, Preto, TGT-SHTKL-RBW01',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-mb84nf9v9xu73e@resize_w450_nl.webp',
      'https://s.shopee.com.br/6AeSXEcGsZ'
    ),

    // Mouse Gamer
    this.createProduct(
      'Mouse Gamer TGT GM75, Rainbow, 3600DPI, 6 Botoes, Preto, TGT-GM75-BL01',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mesje2nmdslf0e@resize_w450_nl.webp',
      'https://s.shopee.com.br/W05mKjZ37'
    ),

    // Mouse Pad
    this.createProduct(
      'Mousepad TGT OMP25, 200x180x3mm, Preto, TGT-OMP25-BL01',
      'https://down-br.img.susercontent.com/file/sg-11134201-824j6-meorm21dhn2bed@resize_w450_nl.webp',
      'https://s.shopee.com.br/5L5LXIyPWz'
    ),

    // Monitor Game
    this.createProduct(
      'Monitor Gamer Mancer Horizon Z3B, 21.5 Pol, VA, FHD, 1ms, 100Hz, HDMI/VGA, MCR-HZ3BN21-BL2',
      'https://down-br.img.susercontent.com/file/sg-11134201-822wn-mi0olfgxm7epa4@resize_w450_nl.webp',
      'https://s.shopee.com.br/3VdhMEFiaK'
    ),

    // Cadeira Gamer Profissional
    this.createProduct(
      'Cadeira Gamer Profissional - Reclinável, Ajustável e Confortável para Escritório e Estudos-F19',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgn400rlerk535@resize_w450_nl.webp',
      'https://s.shopee.com.br/AAAbIhp0xH'
    ),

    // Gabinete Gamer
    this.createProduct(
      'Gabinete Gamer Acegeek Stratus Mesh, Rainbow, Mid-Tower, Com 3 Fans, Preto, AG-STRATUS-MESH-BK-I3F',
      'https://down-br.img.susercontent.com/file/sg-11134201-7rdyn-mcwcjbn61jb403@resize_w450_nl.webp',
      'https://s.shopee.com.br/gJVzM0LzZ'
    ),

    // Gabinete Gamer (Branco),
    this.createProduct(
      'Gabinete Gamer Acegeek Shadow, Mini-Tower, Lateral de Vidro, Branco, AG-SHADOW-WH',
      'https://down-br.img.susercontent.com/file/sg-11134201-7rfgz-m9suw86k2ys1db@resize_w450_nl.webp',
      'https://s.shopee.com.br/5AlvLq8q1k'
    ),

    // Microfone Gamer
    this.createProduct(
      'Microfone Gamer TGT Anzer V2 , USB Condensador Cardioide RGB Plug & Play , Preto , TGT-ANZRV-BL01',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mesjp040mrcz51@resize_w450_nl.webp',
      'https://s.shopee.com.br/50SV9RKcuj'
    ),

    // Notebook Gamer
    this.createProduct(
      'Notebook Vaio FE15 15.6 FHD I5-1235U 16GB SSD 512GB Windows 11 Home Cinza Escuro - VJFE54F11X-B2621H',
      'https://down-br.img.susercontent.com/file/sg-11134201-7rce6-lrels174s0jf70@resize_w450_nl.webp',
      'https://s.shopee.com.br/7fTGKiRaAS'
    ),

    // Placa de Vídeo
    this.createProduct(
      'Placa de Vídeo MSI GeForce RTX 3050 Low Profile 6GB GDDR6 96 bits',
      'https://down-br.img.susercontent.com/file/sg-11134201-7rfh5-m3uqykd1y6cd69@resize_w450_nl.webp',
      'https://s.shopee.com.br/20otaU96uN'
    ),

    // Controle Sem Fio PS5 (Branco)
    this.createProduct(
      'Controle Sem Fio DualSense PlayStation 5 Branco',
      'https://down-br.img.susercontent.com/file/de7b28d4221e7b98e06564cd5c4be3eb@resize_w450_nl.webp',
      'https://s.shopee.com.br/3VdhNJjqkv'
    ),
    
    // Controle Sem Fio PS5 (Preto)
    this.createProduct(
      'Controle Sem Fio DualSense PlayStation 5 Preto',
      'https://down-br.img.susercontent.com/file/8ba1e07fc635345c680bf580f3a50952@resize_w450_nl.webp',
      'https://s.shopee.com.br/Lgfbap0tK'
    ),

    // Console Playstation 5
    this.createProduct(
      'Console PlayStation 5 Slim Digital 825 GB + Controle Sem Fio Dualsense Branco',
      'https://down-br.img.susercontent.com/file/sg-11134201-825au-mgffgedeb9qi6e@resize_w450_nl.webp',
      'https://s.shopee.com.br/5VOllAgWUw'
    ),

    // Console Playstaiton 5 Slim
    this.createProduct(
      'Console PlayStation 5 Slim Disk SSD 1TB + Controle Sem Fio Dualsense Branco',
      'https://down-br.img.susercontent.com/file/sg-11134201-824iw-mf3z1trkfkzt80@resize_w450_nl.webp',
      'https://s.shopee.com.br/5L5LYz0Ogf'
    ),

    // Goldenfir SSD
    this.createProduct(
      'Goldenfir SSD 128G/240G/256G/480G/Leitura E Escrita Rápida Do Disco Rígido Interno SATA De Polegadas',
      'https://down-br.img.susercontent.com/file/cn-11134207-820l4-mi3z8wn0h9tu71@resize_w450_nl.webp',
      'https://s.shopee.com.br/W05oNGKXi'
    ),

    // Kit Upgrade Gamer
    this.createProduct(
      'Kit Upgrade Gamer AMD Ryzen 5 5500 + B450M + 16GB DDR4',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7qtssqbvvpe0d@resize_w450_nl.webp',
      'https://s.shopee.com.br/9UuuX3Dxv9'
    ) 
  ]

  phoneProducts = [
    // JOVI Y29 256GB
    this.createProduct(
      'JOVI Y29 256GB, 8+8GB RAM Turbo, Câmera 50MP, Snapdragon 685, Bateria 6500mAh, Carregamento 44W',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mg70lob43sp326@resize_w450_nl.webp',
      'https://s.shopee.com.br/4LCoO0MK85'
    ),

    // Smartphone Motorola Moto
    this.createProduct(
      'Smartphone Motorola Moto G05 128GB, 4G, 12GB RAM Boost, Camera 50MP, Tela 6.7" - Cinza Vegan Leather',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m7cliljwmd2q6e@resize_w450_nl.webp',
      'https://s.shopee.com.br/40ZxzSi2nT'
    ),

    // Realme Note 60X 4G
    this.createProduct(
      'Realme Note 60X 4G, 128GB/4GB RAM - 64GB/3GB RAM, Processador Unisoc T612, Bateria 5000Mah, Novo, Versão Global',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5n1wijk5twy72@resize_w450_nl.webp',
      'https://s.shopee.com.br/4fpemlqgZr'
    ),

    // Smartphone Samsung Galaxy A16 4G LTE
    this.createProduct(
      'Smartphone Samsung Galaxy A16 4G LTE, 128GB, 4GB RAM, Câmera 50MP, Tela 6.7", NFC - Cinza',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-meedxk4sfxmpf4@resize_w450_nl.webp',
      'https://s.shopee.com.br/6KxslzT28y'
    ),

    // Smartphone Samsung Galaxy A05s 128GB
    this.createProduct(
      'Smartphone Samsung Galaxy A05s 128GB, 4G LTE, 6GB RAM, Câm. 50MP, Octa-Core, Tela 6.7" - Prata',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-md3jezveezup82@resize_w450_nl.webp',
      'https://s.shopee.com.br/5fiByp81gS'
    ),

    // Infinix Smart 9 – Tela 6.7" 120Hz
    this.createProduct(
      'Infinix Smart 9 – Tela 6.7" 120Hz, 128GB, 8GB RAM',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5k6zk5zt7yd71@resize_w450_nl.webp',
      'https://s.shopee.com.br/50SVBgqXcj'
    ),

    this.createProduct(
      'Infinix Smart 9 e Smart 10 128GB 4GB RAM, Processador Mediatek Hélio G81, Bateria 5000MAH, Versão global, Lacrado',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3fd554onlmg65@resize_w450_nl.webp',
      'https://s.shopee.com.br/7fTGMfn6Ka'
    ),

    // Realme C71 NFC 4G, Tela 6,67" 120Hz
    this.createProduct(
      'Realme C71 NFC 4G, Tela 6,67" 120Hz, Câmera 50MP, Bateria 6300mAh com Carga Rápida, Versão Global',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mdxmxehfc16o06@resize_w450_nl.webp',
      'https://s.shopee.com.br/8fLnYYvHVV'
    ),

    // Smartphone Motorola Moto g56 5G - 256GB
    this.createProduct(
      'Smartphone Motorola Moto g56 5G - 256GB, 8GB RAM+16GB Ram Boost e 50MP Sony Lytia 600 AI Camera',
      'https://down-br.img.susercontent.com/file/sg-11134201-821d2-mgmj2n6rbm6ja6@resize_w450_nl.webp',
      'https://s.shopee.com.br/2B8JonORz6'
    ),

    // Realme C75 4G,256GB/8GB RAM
    this.createProduct(
      'Realme C75 4G,256GB/8GB RAM, Processador MediaTek Helio G92 Max, Câmera 50MP, Bateria de 6000Mah, Versão Global',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5oec6xys9dx5a@resize_w450_nl.webp',
      'https://s.shopee.com.br/50SVCC018H'
    ),

    // Infinix Hot 50i 4G – Tela 6.7" 120Hz
    this.createProduct(
      'Infinix Hot 50i 4G – Tela 6.7" 120Hz, 256GB ATÉ 8GB DE RAM CÂMERA 48MP',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m6egv1h1ugjre7@resize_w450_nl.webp',
      'https://s.shopee.com.br/10wMQyKoUo'
    )

  ]

  femClotheProducts = [
    // Kit 3 Pijamas Baby Doll
    this.createProduct(
      'Kit 3 Pijamas Baby Doll Conjunto Para Dormir Feminino Qualidade',
      'https://down-br.img.susercontent.com/file/br-11134258-7r98o-mbpr92sw6g6132',
      'https://s.shopee.com.br/4fpeno8pYE'
    ),

    // Z&D Lingerie Cinta Elastique Feminina Modeladora
    this.createProduct(
      'Z&D Lingerie Cinta Elastique Feminina Modeladora Redutor Afina Cintura Mulher Fitness Abdominal 889',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3gq69eb03lk96@resize_w450_nl.webp',
      'https://s.shopee.com.br/9zrB9iypTl'
    ),

    // Baby Tee Feminina 
    this.createProduct(
      'Baby Tee Feminina - Blusa Slim Fit Manga Curta Blusa de Compressão Várias Cores',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwnb7w11l2v3ad@resize_w450_nl.webp',
      'https://s.shopee.com.br/8zydxyR5FM'
    ),

    this.createProduct(
      'Kit 10 Calcinhas Conforto 100% Algodão P M G GG',
      'https://down-br.img.susercontent.com/file/8500a50027a3aa97805731eb24a9d00e@resize_w450_nl.webp',
      'https://s.shopee.com.br/7pmgZtGi5a'
    ),

    this.createProduct(
      'Calça Cargo Feminina Jogger Com Bolso Lateral Bege Com Lycra Stillger Jeans',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m9t3gq8jocah6d@resize_w450_nl.webp',
      'https://s.shopee.com.br/9AI4AQ5DN7'
    ),

    // Cropped Preto Manga Longa Nula Manga Outono/Inverno
    this.createProduct(
      'Cropped Preto Manga Longa Nula Manga Outono/Inverno',
      'https://down-br.img.susercontent.com/file/2105eb2b6d98c335dd718aee15f97aa0@resize_w450_nl.webp',
      'https://s.shopee.com.br/AAAbPyeQIp'
    ),

    // Short Saia Feminino Moda Evangelica Suplex Cores Lindas
    this.createProduct(
      'Short Saia Feminino Moda Evangelica Suplex Cores Lindas',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lyc82713eu8l53@resize_w450_nl.webp',
      'https://s.shopee.com.br/60L2SMxTOR'
    ),

    this.createProduct(
      'Jcolour Kit 3 Meias De Compressão Mulheres Homens Esportiva Correndo Maratona Ciclismo Edema Varizes',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2tb8m8x3wet9c@resize_w450_nl.webp',
      'https://s.shopee.com.br/gJW6eKE1Z'
    ),

    // Short Benévola Poliamida Sem Costura Feminino Fitness Bermuda Academia Sem Transparencia Cintura Média Selene
    this.createProduct(
      'Short Benévola Poliamida Sem Costura Feminino Fitness Bermuda Academia Sem Transparencia Cintura Média Selene',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mg8cbw414bglc8@resize_w450_nl.webp',
      'https://s.shopee.com.br/8pfDphwisR'
    ),

    // Calça Jeans Wide Leg Cargo Feminina Cintura Alta Premium
    this.createProduct(
      'Calça Jeans Wide Leg Cargo Feminina Cintura Alta Premium',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfjwm1nva58k25@resize_w450_nl.webp',
      'https://s.shopee.com.br/30hQt24WEI'
    ),

    // Short Jeans Feminino Cintura alta Com Lycra Levanta Bumbum Verão 2026 Stillger
    this.createProduct(
      'Short Jeans Feminino Cintura alta Com Lycra Levanta Bumbum Verão 2026 Stillger',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-malbjx2rz1fd2b@resize_w450_nl.webp',
      'https://s.shopee.com.br/50SVGlvDkp'
    ),

    // Calça Legging Preto Academia Fitness Suplex Power Lipo - 400 gramatura
    this.createProduct(
      'Calça Legging Preto Academia Fitness Suplex Power Lipo - 400 gramatura',
      'https://down-br.img.susercontent.com/file/0c91a85dfe39bda966187370a9db529f@resize_w450_nl.webp',
      'https://s.shopee.com.br/50SVGrWro8'
    )
  ]

  mascClotheProducts = [
    // Colete Social Slim de Luxo Ajustável
    this.createProduct(
      'Colete Social Slim de Luxo Ajustável - Envio Imediato Pronta Entrega',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m4uakfjejt6t7e@resize_w450_nl.webp',
      'https://s.shopee.com.br/1qVTRGP3MG'
    ),

    // Calça Social Slim de Luxo Masculina Executiva Alfaiataria Oxford
    this.createProduct(
      'Calça Social Slim de Luxo Masculina Executiva Alfaiataria Oxford - Envio Imediato',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m459cokilmf5d4@resize_w450_nl.webp',
      'https://s.shopee.com.br/10wMRnUwQl'
    ),

    // Camisa Social Masculina Slim
    this.createProduct(
      'Camisa Social Masculina Slim fit Luxo Moda Estilosa Manga Longa',
      'https://down-br.img.susercontent.com/file/cd2f3cb01643a6ac374b4a2cbaf42345@resize_w450_nl.webp',
      'https://s.shopee.com.br/5VOlo8pn7u'
    ),

    // Blusa Suéter Meio Zíper Masculino
    this.createProduct(
      'Blusa Suéter Meio Zíper Masculino Manga Longa Inverno',
      'https://down-br.img.susercontent.com/file/br-11134207-7qukw-li8zej1gq52tb6@resize_w450_nl.webp',
      'https://s.shopee.com.br/3VdhQXdr6A'
    ),

    // Kit 10 Cuecas Lupo Original Boxer Algodão
    this.createProduct(
      'Kit 10 Cuecas Lupo Original Boxer Algodão Respirável Masculino Box Cotton Cueca Adulto Confortável',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfi88sqj3qis42@resize_w450_nl.webp',
      'https://s.shopee.com.br/9AI4B2Ozfz'
    ),

    // Camisa Origens 1895 Licenciada Flamengo
    this.createProduct(
      'Camisa Origens 1895 Licenciada Flamengo',
      'https://down-br.img.susercontent.com/file/sg-11134201-7reoc-m8afctwnwo0ha0@resize_w450_nl.webp',
      'https://s.shopee.com.br/2LRk2YvmsL'
    ),

    // Kit 2 Tênis Masculino Polo Fran Mocassim
    this.createProduct(
      'Kit 2 Tênis Masculino Polo Fran Mocassim Slip On Sapatênis Iate Casual Bali',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98p-ll9n55mts8qzcf@resize_w450_nl.webp',
      'https://s.shopee.com.br/9fEKm8VqVo'
    ),

    // Bota Botina Adventure Polo
    this.createProduct(
      'Bota Botina Adventure Polo Fran Coturno Preto Masculino Couro Com Palmilha Gel',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-ln61uwa2i2ircf@resize_w450_nl.webp',
      'https://s.shopee.com.br/AAAbN7bCAk'
    ),

    // Sapatenis Masculino Ziper e Cadarço Calce Casual A1
    this.createProduct(
      'Sapatenis Masculino Ziper e Cadarço Calce Casual A1',
      'https://down-br.img.susercontent.com/file/2574b87e5ae3dc19f14dd5587be082a3@resize_w450_nl.webp',
      'https://s.shopee.com.br/7pmgauvBkD'
    ),

    // Tênis Masculino Polo Vili Madri Branco Casual
    this.createProduct(
      'Tênis Masculino Polo Vili Madri Branco Casual',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-luiqatqr74ica0@resize_w450_nl.webp',
      'https://s.shopee.com.br/5q1cDQ2l7h'
    ),

    // Sapatênis Tênis Masculino Confortável Calce Fácil 750 A1
    this.createProduct(
      'Sapatênis Tênis Masculino Confortável Calce Fácil 750 A1',
      'https://down-br.img.susercontent.com/file/ef700312ca97e5d0cc98f977d4965d89@resize_w450_nl.webp',
      'https://s.shopee.com.br/9zrBB8gww4'
    ),

    // Kit 3 Pares De Sapatenis Masculino De Elastico Confortavel 750 A2
    this.createProduct(
      'Kit 3 Pares De Sapatenis Masculino De Elastico Confortavel 750 A2',
      'https://down-br.img.susercontent.com/file/6bb5a1c3cf7d80fc0a112bf7d496e111@resize_w450_nl.webp',
      'https://s.shopee.com.br/9AI4BfVErH'
    ),

    // Tênis Street Ollie Masculino Rocky Conforto'
    this.createProduct(
      'Tênis Street Ollie Masculino Rocky Conforto',
      'https://down-br.img.susercontent.com/file/sg-11134201-824j8-mdvo9922x7ur71@resize_w450_nl.webp',
      'https://s.shopee.com.br/8V2NOW5MHG'
    ),

    // Tênis Olympikus Vibração Original Esportivo
    this.createProduct(
      'Tênis Olympikus Vibração Original Esportivo',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98r-lmeqdrkn5bmz9b@resize_w450_nl.webp',
      'https://s.shopee.com.br/9KbUO6rlrb'
    ),

    // Sapatênis Tênis Masculino Confortável Calce Fácil 750 A2
    this.createProduct(
      'Sapatênis Tênis Masculino Confortável Calce Fácil 750 A2',
      'https://down-br.img.susercontent.com/file/5ebf837ea04a668ae536695b92299745@resize_w450_nl.webp',
      'https://s.shopee.com.br/2g4aRv2P7r'
    ),

    // Kit 3 Tênis Polo Fran Sapato Masculino Casual + Relógio + Carteira + Cinto London
    this.createProduct(
      'Kit 3 Tênis Polo Fran Sapato Masculino Casual + Relógio + Carteira + Cinto London',
      'https://down-br.img.susercontent.com/file/br-11134201-23010-co3k56cwkpmv1b@resize_w450_nl.webp',
      'https://s.shopee.com.br/6VHJ13uBck'
    ),

    // Tênis Masculino Polo Vili Turim Sapatenis Casual
    this.createProduct(
      'Tênis Masculino Polo Vili Turim Sapatenis Casual',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcc190eppeqz00@resize_w450_nl.webp',
      'https://s.shopee.com.br/6pu9PkQQlU'
    ),

  ]

  headPhoneProducts = [
    // Fone Bluetooth Sem Fio Anti Ruído Áudio HD 
    this.createProduct(
      'Fone Bluetooth Sem Fio Anti Ruído Áudio HD Conexão Estável Ideal para Trabalho Academia',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-milkjqjwk5c26e@resize_w450_nl.webp',
      'https://s.shopee.com.br/AAAbOZE2TP'
    ),

    this.createProduct(
      'Lenovo Fones De Ouvido GM2 Pro Jogos Bluetooth BT 5.3 TWS HD RGB Luzes Som Estéreo Baixa Latência Com Microfone',
      'https://down-br.img.susercontent.com/file/cn-11134207-7ras8-mbkkl8r43h9732@resize_w450_nl.webp',
      'https://s.shopee.com.br/2VlAGYao1N'
    ),
    
    // Basike fone sem fio bluetooth
    this.createProduct(
      'Basike fone sem fio bluetooth, fone de ouvido original melhor bluetooth Para Samsung/iPhone FON142',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8btvrd1rkz5d2@resize_w450_nl.webp',
      'https://s.shopee.com.br/3LKHG919PF'
    ),

    this.createProduct(
      'Basike Smart Touch Screen Bluetooth 5.4 Suporte APP Fone De Ouvido ANC Cancelando Ruído De Fones Sem Fio Com Viso',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8btlv6v3i8h8d@resize_w450_nl.webp',
      'https://s.shopee.com.br/3fx7eoyGYh'
    ),

    // Fone de Ouvido Bluetooth Original
    this.createProduct(
      'Fone de Ouvido Bluetooth Original Inova Sem Fio Headphone Wireless',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m12wvxrvzozo33@resize_w450_nl.webp',
      'https://s.shopee.com.br/7fTGQE8IHP'
    ),

    // Baseus Bowie E19 TWS True Wireless
    this.createProduct(
      'Baseus Bowie E19 TWS True Wireless Bluetooth Fones De Ouvido IPX5 À Prova D\'água ENC',
      'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-ls6ivpd2l86l02@resize_w450_nl.webp',
      'https://s.shopee.com.br/2LRk4YKthY'
    ),

    // Lenovo LP25 Fone De Ouvido Bluetooth Transparente Alto E Baixo Uso Extralongo
    this.createProduct(
      'Lenovo LP25 Fone De Ouvido Bluetooth Transparente Alto E Baixo Uso Extralongo',
      'https://down-br.img.susercontent.com/file/cn-11134207-7ras8-mc0itr7g7r6323@resize_w450_nl.webp',
      'https://s.shopee.com.br/4q953DEEUQ'
    ),

    // Hmaston EJ-39 Fones de Ouvido com Fio 3.5mm intra-auricular 1,2 metros
    this.createProduct(
      'Hmaston EJ-39 Fones de Ouvido com Fio 3.5mm intra-auricular 1,2 metros',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-luhg8sn74ej817@resize_w450_nl.webp',
      'https://s.shopee.com.br/9Uuubs3FLa'
    ),

    // Lenovo TH30 Fone de ouvido sem fio para jogos com baixa latência e redução de ruído musical Toque inteligente
    this.createProduct(
      'Lenovo TH30 Fone de ouvido sem fio para jogos com baixa latência e redução de ruído musical Toque inteligente',
      'https://down-br.img.susercontent.com/file/id-11134207-7qukw-lh33shf4p0vfa7@resize_w450_nl.webp',
      'https://s.shopee.com.br/7KqQ1xeg2F'
    ),

    // Lenovo XT80 Fone De Ouvido Bluetooth Desporto Bateria de duração ultra-longa Som HD à prova de água
    this.createProduct(
      'Lenovo XT80 Fone De Ouvido Bluetooth Desporto Bateria de duração ultra-longa Som HD à prova de água',
      'https://down-br.img.susercontent.com/file/cn-11134207-7ras8-m5vayg7zz5010b@resize_w450_nl.webp',
      'https://s.shopee.com.br/30hQs3T5h9'
    ),

    // Astgn X Basike Original sem fio anti-ruído fone de ouvido bluetooth efeito de som de alta fidelidade
    this.createProduct(
      'Astgn X Basike Original sem fio anti-ruído fone de ouvido bluetooth efeito de som de alta fidelidade',
      'https://down-br.img.susercontent.com/file/br-11134211-7r98o-lzfvitckspid55@resize_w450_nl.webp',
      'https://s.shopee.com.br/9zrBCyEUyU'
    ),

    // Fone Sem Fio Bluetooth TWS Basike Intra Auricular Confortável Cancelamento De Ruído Bateria Longa
    this.createProduct(
      'Fone Sem Fio Bluetooth TWS Basike Intra Auricular Confortável Cancelamento De Ruído Bateria Longa',
      'https://down-br.img.susercontent.com/file/br-11134207-81z1k-mfclqdyz435x6c@resize_w450_nl.webp',
      'https://s.shopee.com.br/2B8JsdTR6O'
    )
  ]

  products = [
    ...this.gamerProducts,
    ...this.phoneProducts,
    ...this.mascClotheProducts,
    ...this.femClotheProducts,
    ...this.headPhoneProducts
  ]
 

  getRandomProduct(){
    const rNum = new RandomNumber().getRandomIntValue(0, this.products.length - 1);

    return this.products[rNum]
  }

  getRandomHeadphoneProduct(){
    const rNum = new RandomNumber().getRandomIntValue(0, this.headPhoneProducts.length - 1);

    return this.headPhoneProducts[rNum] 
  }

  getRandomGamerProduct(){
    const rNum = new RandomNumber().getRandomIntValue(0, this.gamerProducts.length - 1);

    return this.gamerProducts[rNum] 
  }

  getRandomMascProduct(){
    const rNum = new RandomNumber().getRandomIntValue(0, this.mascClotheProducts.length - 1);

    return this.mascClotheProducts[rNum] 
  }

  getRandomFemProduct(){
    const rNum = new RandomNumber().getRandomIntValue(0, this.femClotheProducts.length - 1);

    return this.femClotheProducts[rNum] 
  }

  getRandomPhoneProduct(){
    const rNum = new RandomNumber().getRandomIntValue(0, this.phoneProducts.length - 1);

    return this.phoneProducts[rNum] 
  }

  createProduct(name: string, img: string, url: string){
    return {name, img, url}
  }

}

export default Shopee;

// WEB SCRAPING
/*
  const puppeteer = require('puppeteer');

async function scrapeShopee(url) {
    // Inicia o navegador
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Simula um usuário real para evitar bloqueios
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');

    try {
        console.log("Acessando produto...");
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Extrai dados das Meta Tags
        const produto = await page.evaluate(() => {
            return {
                titulo: document.querySelector('meta[property="og:title"]')?.content,
                imagem: document.querySelector('meta[property="og:image"]')?.content,
                preco: document.querySelector('meta[property="product:price:amount"]')?.content || 
                       document.querySelector('meta[name="twitter:data1"]')?.content,
            };
        });

        console.log("Dados capturados:", produto);
        return produto;

    } catch (error) {
        console.error("Erro ao fazer scraping:", error.message);
    } finally {
        await browser.close();
    }
  }
*/