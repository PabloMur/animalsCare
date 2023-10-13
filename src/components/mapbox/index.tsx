import React, { useRef, useEffect } from "react";
import {
  createMap,
  getAndSetPetsinToMap,
  initGeocoder,
  initGeolocate,
} from "lib/mapbox";
import mapboxgl from "mapbox-gl";
import css from "./styles.css";
import {
  editPetLatitudeAtom,
  editPetLongitudeAtom,
  editPetZoneAtom,
  petsAround,
  reportPetCordsLat,
  reportPetCordsLng,
  reportPetZone,
  userLocation,
} from "atoms/userAtoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { PetResults } from "components/petResults";

const MapboxPetsAround = ({ variant }) => {
  let myRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useRecoilState(userLocation);
  const petResultsSetter = useSetRecoilState(petsAround);

  const creteMapAndControls = async () => {
    let map = await createMap(myRef.current, value.lat, value.lng);
    let geolocate = await initGeolocate();
    let geocoder = await initGeocoder();

    geocoder.on("result", async () => {
      try {
        const provider = await geocoder.mapMarker._lngLat;
        const petsResults = await getAndSetPetsinToMap(map, provider);
        petResultsSetter(petsResults.response);
      } catch (error) {
        console.error(error);
      }
    });

    geolocate.on("geolocate", async () => {
      try {
        const { latitude, longitude } = await geolocate._lastKnownPosition
          .coords;
        const provider = { lat: latitude, lng: longitude };
        const petsResults = await getAndSetPetsinToMap(map, provider);
        petResultsSetter(petsResults.response);
      } catch (error) {
        console.error(error);
      }
    });

    map.addControl(geocoder);
    map.addControl(geolocate);
    map.addControl(new mapboxgl.NavigationControl());
  };
  useEffect(() => {
    creteMapAndControls();
  }, []);

  return variant == "finder" ? (
    <div className={css.container}>
      <div className={css.root} ref={myRef}></div>
      <PetResults></PetResults>
    </div>
  ) : (
    <div className={css.reportMap} ref={myRef}></div>
  );
};

const MapboxReport = () => {
  let myRef = useRef<HTMLDivElement>(null);
  const petZoneSetter = useSetRecoilState(reportPetZone);
  const petCordsLatSetter = useSetRecoilState(reportPetCordsLat);
  const petCordsLngSetter = useSetRecoilState(reportPetCordsLng);
  const value = useRecoilValue(userLocation);

  const creteMapAndControls = async () => {
    let map = await createMap(myRef.current, value.lat, value.lng);
    let geocoder = await initGeocoder();

    geocoder.on("result", async () => {
      try {
        const petCords = await geocoder.mapMarker._lngLat;
        const petZone = await JSON.parse(geocoder.lastSelected).place_name;
        petZoneSetter(petZone);
        petCordsLatSetter(petCords.lat);
        petCordsLngSetter(petCords.lng);
      } catch (error) {
        console.error(error);
      }
    });

    map.addControl(geocoder);
    map.addControl(new mapboxgl.NavigationControl());
  };
  useEffect(() => {
    creteMapAndControls();
  }, []);
  return <div ref={myRef} className={css.reportMap}></div>;
};

const MapboxEdit = () => {
  let myRef = useRef<HTMLDivElement>(null);
  const petZoneSetter = useSetRecoilState(editPetZoneAtom);
  const petCordsLatSetter = useSetRecoilState(editPetLatitudeAtom);
  const petCordsLngSetter = useSetRecoilState(editPetLongitudeAtom);
  const value = useRecoilValue(userLocation);

  const creteMapAndControls = async () => {
    let map = await createMap(myRef.current, value.lat, value.lng);
    let geocoder = await initGeocoder();

    geocoder.on("result", async () => {
      try {
        const petCords = await geocoder.mapMarker._lngLat;
        const petZone = await JSON.parse(geocoder.lastSelected).place_name;
        petZoneSetter(petZone);
        petCordsLatSetter(petCords.lat);
        petCordsLngSetter(petCords.lng);
      } catch (error) {
        console.error(error);
      }
    });

    map.addControl(geocoder);
    map.addControl(new mapboxgl.NavigationControl());
  };
  useEffect(() => {
    creteMapAndControls();
  }, []);
  return <div ref={myRef} className={css.reportMap}></div>;
};

export { MapboxPetsAround, MapboxReport, MapboxEdit };
