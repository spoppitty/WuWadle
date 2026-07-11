import { first } from "firebase/firestore/pipelines";

const resonators = [
  
  {
    icon: "/src/assets/iconAalto.png",
    name: "Aalto",
    element: "Aero", 
    weaponType: "Pistols", 
    gender: "Male", 
    firstAppearance: "Black Shores",
    rarity: 4, 
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconAemeath.png",
    name: "Aemeath",
    element: "Fusion", 
    weaponType: "Sword", 
    gender: "Female", 
    firstAppearance: "Lahai Roi",
    rarity: 5, 
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconAugusta.png",
    name: "Augusta",
    element: "Electro",
    weaponType: "Broadblade",
    gender: "Female",
    firstAppearance: "Septimont",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconBaizhi.png",
    name: "Baizhi",
    element: "Glacio",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  }, 
  {
    icon: "/src/assets/iconBrant.png",
    name: "Brant",
    element: "Fusion",
    weaponType: "Sword",
    gender: "Male",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconBuling.png",
    name: "Buling",
    element: "Electro",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Septimont",
    rarity: 4,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconCalcharo.png",
    name: "Calcharo",
    element: "Electro",
    weaponType: "Broadblade",
    gender: "Male",
    firstAppearance: "Septimont",
    rarity: 5,
    releaseYear: 2024
  }, 
  {
    icon: "/src/assets/iconCamellya.png",
    name: "Camellya",
    element: "Havoc",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Huanglong", 
    rarity: 5, 
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconCantarella.png",
    name: "Cantarella",
    element: "Havoc",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconCarlotta.png",
    name: "Carlotta",
    element: "Glacio",
    weaponType: "Pistols",
    gender: "Female",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconCartethyia.png",
    name: "Cartethyia",
    element: "Aero",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconChangli.png",
    name: "Changli",
    element: "Fusion",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconChisa.png",
    name: "Chisa",
    element: "Havoc",
    weaponType: "Broadblade",
    gender: "Female",
    firstAppearance: "Honami City",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconChixia.png",
    name: "Chixia",
    element: "Fusion",
    weaponType: "Pistols",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconCiaccona.png",
    name: "Ciaccona",
    element: "Aero",
    weaponType: "Pistols",
    gender: "Female",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  }, 
  {
    icon: "/src/assets/iconDanjin.png",
    name: "Danjin",
    element: "Havoc",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconDenia.png",
    name: "Denia",
    element: "Fusion",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Lahai Roi",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconEncore.png",
    name: "Encore",
    element: "Fusion",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconGalbrena.png",
    name: "Galbrena",
    element: "Fusion",
    weaponType: "Pistols",
    gender: "Female",
    firstAppearance: "Septimont",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconHiyuki.png",
    name: "Hiyuki",
    element: "Glacio",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Lahai Roi",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconIuno.png",
    name: "Iuno",
    element: "Aero",
    weaponType: "Gauntlets",
    gender: "Female",
    firstAppearance: "Septimont",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconJianxin.png",
    name: "Jianxin",
    element: "Aero",
    weaponType: "Gauntlets",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconJinshi.png",
    name: "Jinshi",
    element: "Spectro",
    weaponType: "Broadblade",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconJiyan.png",
    name: "Jiyan",
    element: "Aero",
    weaponType: "Broadblade",
    gender: "Male",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconLingyang.png",
    name: "Lingyang",
    element: "Glacio",
    weaponType: "Gauntlets",
    gender: "Male",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconLucilla.png",
    name: "Lucilla",
    element: "Glacio",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Lahai Roi",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconLucy.png",
    name: "Lucy",
    element: "Spectro",
    weaponType: "Pistols",
    gender: "Female",
    firstAppearance: "Cyberpunk Collab",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconLumi.png",
    name: "Lumi",
    element: "Electro",
    weaponType: "Broaddblade",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconLupa.png",
    name: "Lupa",
    element: "Fusion",
    weaponType: "Broadblade",
    gender: "Female",
    firstAppearance: "Septimont",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconLuuk_Herssen.png",
    name: "Luuk Herssen",
    element: "Spectro", 
    weaponType: "Gauntlets",
    gender: "Male",
    firstAppearance: "Lahai Roi",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconLynae.png",
    name: "Lynae",
    element: "Spectro",
    weaponType: "Pistols",
    gender: "Female",
    firstAppearance: "Lahai Roi",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconMornye.png",
    name: "Mornye",
    element: "Fusion",
    weaponType: "Broadblade",
    gender: "Female",
    firstAppearance: "Lahai Roi",
    rarity: 5, 
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconMortefi.png",
    name: "Mortefi",
    element: "Fusion",
    weaponType: "Pistols",
    gender: "Male",
    firstAppearance: "Huanglong",
    rarity: 4, 
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconPhoebe.png",
    name: "Phoebe",
    element: "Spectro",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconPhrolova.png",
    name: "Phrolova",
    element: "Havoc",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconQiuyuan.png",
    name: "Qiuyuan",
    element: "Aero",
    weaponType: "Sword",
    gender: "Male",
    firstAppearance: "Septimont",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconRebecca.png",
    name: "Rebecca",
    element: "Electro",
    weaponType: "Pistols",
    gender: "Female",
    firstAppearance: "Cyberpunk Collab",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconRoccia.png",
    name: "Roccia",
    element: "Havoc",
    weaponType: "Gauntlets",
    gender: "Female",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconRover.png", 
    name: "Rover",
    element: "Multiple",
    weaponType: "Sword",
    gender: "Can be Male/Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconSanhua.png",
    name: "Sanhua",
    element: "Glacio",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4, 
    releaseYear: 2024
  },
  { 
    icon: "/src/assets/iconShorekeeper.png",
    name: "Shorekeeper",
    element: "Spectro",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Black Shores",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconSigrika.png",
    name: "Sigrika",
    element: "Aero",
    weaponType: "Gauntlents",
    gender: "Female",
    firstAppearance: "Lahai Roi",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconSuisui.png",
    name: "Suisui",
    element: "Glacio",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5, 
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconTaoqi.png",
    name: "Taoqi",
    element: "Havoc",
    weaponType: "Broadblade",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconVerina.png",
    name: "Verina",
    element: "Spectro",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconXiangli_Yao.png",
    name: "Xiangli Yao",
    element: "Electro",
    weaponType: "Gauntlets",
    gender: "Male",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconYangyang.png",
    name: "Yangyang",
    element: "Aero",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4, 
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconYangyangXuanling.png",
    name: "Yangyang: Xuanling",
    element: "Havoc",
    weaponType: "Sword",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2026
  },
  {
    icon: "/src/assets/iconYinlin.png",
    name: "Yinlin",
    element: "Electro",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  }, 
  {
    icon: "/src/assets/iconYouhu.png",
    name: "Youhua",
    element: "Glacio",
    weaponType: "Gauntlets",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconYuanwu.png",
    name: "Yuanwu",
    element: "Electro",
    weaponType: "Gauntlets",
    gender: "Male",
    firstAppearance: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  },
  {
    icon: "/src/assets/iconZani.png",
    name: "Zani",
    element: "Spectro",
    weaponType: "Gauntlets",
    gender: "Female",
    firstAppearance: "Ragunna",
    rarity: 5,
    releaseYear: 2025
  },
  {
    icon: "/src/assets/iconZhezhi.png",
    name: "Zhezhi",
    element: "Glacio",
    weaponType: "Rectifier",
    gender: "Female",
    firstAppearance: "Huanglong",
    rarity: 5, 
    releaseYear: 2024
  }

];

export default resonators;