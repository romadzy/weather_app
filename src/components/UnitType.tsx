const UnitType = ({ unit } : { unit: "metric" | "imperial" }) => {
  return (
    <span>
      {unit === "metric" ? "°C" : "°F"}
    </span>
  );
}

export default UnitType;