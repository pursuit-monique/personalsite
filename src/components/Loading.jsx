import {ReactComponent as Flower} from "../assets/flower.svg";
import "./Loading.css";

export default function Loading() {
    return (
        <>
            <div className="h-screen bg-blue-950">
                <div class="grid grid-rows-3 auto-rows-max auto-cols-max grid-col-3 align-middle place-items-center justify-center items-center">
                    <div></div>
                    <div style={{background: "radial-gradient(circle at center, #3b82f6 0, transparent, transparent 100%)"}}><Flower /></div>
                    <div className="text-5xl font-mono font-thin text-cyan-400">Loading</div>
                </div>
             </div>
        </>
    )
}