import Countdown from "react-countdown";

export default function Timer({ date }) {
  const timer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <p className="text-xl md:text-3xl font-bold">Das Spiel hat begonnen</p>
      );
    } else {
      // Render a countdown
      return (
        <>
          <div className="flex flex-col text-center">
            <p className="text-xl md:text-3xl font-bold">{days}</p>
            <p className="text-md md:text-xl font-medium">
              {days === 1 ? "Tag" : "Tage"}
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-xl md:text-3xl font-bold">{hours}</p>
            <p className="text-md md:text-xl font-medium">
              {hours === 1 ? "Stunde" : "Stunden"}
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-xl md:text-3xl font-bold">{minutes}</p>
            <p className="text-md md:text-xl font-medium">
              {minutes === 1 ? "Minute" : "Minuten"}
            </p>
          </div>
          <div className="flex flex-col text-center">
            <p className="text-xl md:text-3xl font-bold">{seconds}</p>
            <p className="text-md md:text-xl font-medium">
              {seconds === 1 ? "Sekunde" : "Sekunden"}
            </p>
          </div>
        </>
      );
    }
  };
  return (
    <div className="px-4 py-4 sm:px-6 flex flex-row justify-around">
      <Countdown date={date} renderer={timer} />
    </div>
  );
}
