const base = { lat: 48.8584, lng: 2.2945 };

export default function getMarkers() {
  const cnt = 10;
  const markers = [];
  for (let i = 0; i < cnt; i++) {
    markers.push({
      id: i,
      title: "marker: " + i,
      lat: base.lat + 0.04 * i,
      lng: base.lng + 0.04 * i
    });
  }
  return markers;
}
