export default function zoneColor(zone) {

  const colors = {
    libertadores: "#3b5bdb",
    "pre-libertadores": "#74b816",
    sulamericana: "#f59f00",
    rebaixamento: "#fa5252",
  };

  return colors[zone] || "transparent";
}