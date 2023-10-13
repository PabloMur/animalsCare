import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userLogged = atom({
  key: "userLogged",
  default: {
    logged: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userEmail = atom({
  key: "userEmail",
  default: "example@gmail.com",
  effects_UNSTABLE: [persistAtom],
});

export const userName = atom({
  key: "userName",
  default: "User Name",
  effects_UNSTABLE: [persistAtom],
});

export const updateName = atom({
  key: "updateName",
  default: "",
});

export const userToken = atom({
  key: "userToken",
  default: "token",
  effects_UNSTABLE: [persistAtom],
});

export const userId = atom({
  key: "userId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const userLocation = atom({
  key: "userLocation",
  default: {
    lat: 0,
    lng: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const userPets = atom({
  key: "userPets",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const userReport = atom({
  key: "userReport",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userEdit = atom({
  key: "userEdit",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const petsAroundLength = atom({
  key:"petAroundLength",
  default:0
})

export const petsAround = atom({
  key:"petAround",
  default:[]
})

export const reportPetName = atom({
  key: "userReportPetName",
  default: "",
});

export const reportPetImageDataUrl = atom({
  key: "imageDataURL",
  default: "",
});

export const reportPetZone = atom({
  key:"petZone",
  default:""
})

export const reportPetCordsLat = atom({
  key:"petCordsLat",
  default:0
})

export const reportPetCordsLng = atom({
  key:"petCordsLng",
  default: 0
})

export const editPetIdAtom = atom({
  key: "editPetIdAtom",
  default: 0,
});

export const editPetNameAtom = atom({
  key:"editPetNameAtom",
  default:""
})

export const editPetZoneAtom = atom({
  key:"editPetZoneAtom",
  default:""
})

export const editPetImageAtom = atom({
  key:"editPetImageAtom",
  default:""
})

export const editPetLatitudeAtom = atom({
  key:"editPetLatitudeAtom",
  default:0
})

export const editPetLongitudeAtom = atom({
  key:"editPetLongitudeAtom",
  default:0
})

export const sigthingPetNameAtom = atom({
  key:"sigthingPetNameAtom",
  default: ""
})

export const petOwnerEmail = atom({
  key:"petOwnerEmail",
  default: ""
})