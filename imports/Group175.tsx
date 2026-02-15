import imgLibary1 from "figma:asset/c80799f3bdb053c938014c3a63e07ba954478981.png";
import imgFreesytleInstrumente1 from "figma:asset/3554c137159bb0de9f9d55f54d93ad5462fe4637.png";
import imgBbTrans1 from "figma:asset/51129248b7ae92b0e3bd3ab93f0c568901a8eca1.png";
import imgGroup411 from "figma:asset/4a5708f4a1f5ac0df6f60c610b237f7fbed15198.png";

export function BeatBallErgebnisImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Beat Ball Ergebnis">
      {/* Mittleres Bild - Library Screen */}
      <div className="absolute h-[80.6%] left-[18.2%] top-[7.3%] w-[46.7%]" data-name="Libary 1">
        <img alt="Beat Ball Ergebnis - Library Screen mit Playlists und Work in Progress" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLibary1} />
      </div>
      {/* Linkes Bild - Freestyle Instrumente */}
      <div className="absolute h-[76.2%] left-0 top-[16.5%] w-[41.4%]" data-name="Freesytle-Instrumente 1">
        <img alt="Beat Ball Ergebnis - Freestyle Modi mit Squeeze, Shake und Bounce Gesten" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreesytleInstrumente1} />
      </div>
      {/* Rechtes Bild - Beat Ball 3D Render */}
      <div className="absolute h-[71.5%] left-[64.5%] top-[11.9%] w-[35.5%]" data-name="BB_trans 1">
        <img alt="Beat Ball Ergebnis - Finaler 3D Render des Beat Ball Prototyps" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBbTrans1} />
      </div>
      {/* Sound Wave Icon */}
      <div className="absolute h-[20.0%] left-[57.6%] top-[40.0%] w-[8.5%]" data-name="Group 41 1">
        <img alt="Beat Ball Ergebnis - Audio Waveform Icon" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup411} />
      </div>
    </div>
  );
}

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[1121px] left-[365px] top-[102px] w-[939px]" data-name="Libary 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLibary1} />
      </div>
      <div className="absolute h-[1059px] left-0 top-[229px] w-[833px]" data-name="Freesytle-Instrumente 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreesytleInstrumente1} />
      </div>
      <div className="absolute h-[994px] left-[1297px] top-[166px] w-[713px]" data-name="BB_trans 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBbTrans1} />
      </div>
      <div className="absolute h-[278px] left-[1157px] top-[556px] w-[171px]" data-name="Group 41 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup411} />
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
