import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const statIcons = {
  hp: "mdi:heart-pulse",
  attack: "mdi:sword",
  defense: "mdi:shield-outline",
  "special-attack": "mdi:fire",
  "special-defense": "mdi:shield-star-outline",
  speed: "mdi:run-fast",
};

const statMaxValues = {
  hp: 255,
  attack: 190,
  defense: 230,
  "special-attack": 180,
  "special-defense": 230,
  speed: 180,
};

export default function Stats({ stats }) {
  return (
    <div className="w-full flex flex-col ">
      {stats.map((stat, index) => {
        const statName = stat.stat.name;
        const icon = statIcons[statName] || "mdi:help-circle-outline";
        const maxStat = statMaxValues[statName] || 255; 
        const progressWidth = `${(stat.base_stat / maxStat) * 100}%`;

        return (
          <div
            key={index}
            className="flex justify-start items-center gap-4 mb-2 w-[80%]"
          >
            <span className="text-xl">
              <Icon icon={icon} />
            </span>

            <div className="w-[80%] h-3 bg-gray-200 rounded">
              <div
                className="h-full bg-brown-normal rounded dark:bg-neutral-600"
                style={{ width: progressWidth }}
              ></div>
            </div>

            <p className="text-sm">{stat.base_stat}</p>
          </div>
        );
      })}
    </div>
  );
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      base_stat: PropTypes.number.isRequired,
      stat: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
