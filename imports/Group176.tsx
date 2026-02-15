import imgHomescreen from "figma:asset/5c9f2b95206c57ae0d12f7330320a7ebf1615b3f.png";
import imgFreestyleModus from "figma:asset/f929314537072d017c5b09143f19e21c14f173da.png";
import imgINstrumentWahlen from "figma:asset/707c5852d05ec8d108ee7a44d06c3a0e1e443fdb.png";
import imgMainFlow1314 from "figma:asset/e9bedb32a399f20d89b2b4362340248752ec1858.png";

export function BeatBallDesignImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Beat Ball Design">
      {/* Linkes Bild - Homescreen */}
      <div className="absolute h-[62.9%] left-[5.7%] top-[18.6%] w-[20.0%]" data-name="Homescreen">
        <img alt="Beat Ball Design - Homescreen mit Freestyle und Produce Modi" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomescreen} />
      </div>
      {/* Zweites Bild von links - Freestyle Modus */}
      <div className="absolute h-[62.9%] left-[27.8%] top-[18.6%] w-[20.0%]" data-name="Freestyle_Modus">
        <img alt="Beat Ball Design - Freestyle Modus mit Squeeze, Shake und Bounce Gesten" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreestyleModus} />
      </div>
      {/* Rechtes unteres Bild - Instrument wählen */}
      <div className="absolute h-[29.0%] left-[50.8%] top-[51.4%] w-[43.5%]" data-name="INstrument wählen">
        <img alt="Beat Ball Design - Instrument Auswahl: Drums, Piano, Guitar" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgINstrumentWahlen} />
      </div>
      {/* Rechtes oberes Bild - Main Flow */}
      <div className="absolute h-[29.0%] left-[50.8%] top-[18.6%] w-[43.5%]" data-name="Main Flow 13 14">
        <img alt="Beat Ball Design - Music Creation Interface mit Waveform Editor" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMainFlow1314} />
      </div>
    </div>
  );
}

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[874px] left-[115px] top-[258px] w-[402px]" data-name="Homescreen">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHomescreen} />
      </div>
      <div className="absolute h-[874px] left-[558px] top-[258px] w-[402px]" data-name="Freestyle_Modus">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreestyleModus} />
      </div>
      <div className="absolute h-[403px] left-[1021px] top-[715px] w-[875px]" data-name="INstrument wählen">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgINstrumentWahlen} />
      </div>
      <div className="absolute h-[403px] left-[1021px] top-[258px] w-[875px]" data-name="Main Flow 13 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMainFlow1314} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Recherche />
    </div>
  );
}
