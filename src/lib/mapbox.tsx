import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { APIgetPetsAround } from "./api";

mapboxgl.accessToken =
  "pk.eyJ1IjoicG9sbXVyIiwiYSI6ImNsYWc0ejh0eTFhYTEzcXBlNGh4N3p6eGgifQ.J7CA9nlTGPzjWhdDW1QFvA";

export const createMap = async (mapContainer: any, lat, lng) => {
  try {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/polmur/cl8w32dh4001514oxqd9l8aop",
      center: [lng, lat],
      zoom: 12,
      projection: "globe" as any,
    });
    return map;
  } catch (error) {
    console.error(error);
  }
};

export const initGeocoder = async () => {
  try {
    return new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
  } catch (error) {
    console.error(error);
  }
};

export const initGeolocate = async () => {
  try {
    return new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    }) as any;
  } catch (error) {
    console.error(error);
  }
};

export const putMarkers = async (map: any, pets: any) => {
  try {
    // const Popup = (petName) => <div className="popup">{petName}</div>;

    // const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

    for (const petItem in pets.response) {
      const { image, fullname, zone, id, ownerEmail } = pets.response[petItem];
      const { lat, lng } = pets.response[petItem]._geoloc;

      new mapboxgl.Marker({
        color: "#FF0000",
      })
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 10 }).setHTML(
            `<custom-pet-card owner-email="${ownerEmail}" pet-id="${id}" profile-image="${image}" pet-name="${fullname}" pet-zone="${zone}"></custom-pet-card>`
          )
        )
        .addTo(map);

      // const popupNode = document.createElement("div");
      // ReactDOM.render(<Popup petName={fullname} />, popupNode);
      // popUpRef.current
      //   .setLngLat([lng, lat])
      //   .setDOMContent(popupNode)
      //   .addTo(map);
      // return <></>;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAndSetPetsinToMap = async (map: any, prov: any) => {
  try {
    const { lat, lng } = prov;
    const pets = await APIgetPetsAround(lat, lng);
    await putMarkers(map, pets);
    return pets;
  } catch (error) {
    console.error(error);
  }
};

// export const petLocationCoordSetter = async (map: any, pets: any) => {
//   try {
//     for (const petItem in pets.response) {
//       const { image, fullname, zone, id, ownerEmail } = pets.response[petItem];
//       const { lat, lng } = pets.response[petItem]._geoloc;

//       new mapboxgl.Marker({
//         color: "#FF0000",
//       })
//         .setLngLat([lng, lat])
//         .addTo(map);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
