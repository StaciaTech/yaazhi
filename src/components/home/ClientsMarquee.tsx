import React from "react";
import { Users } from "lucide-react";
import IbisLogo from "../../assets/marqueelogos/ibis.png"; // color
import IbisLogo2 from "../../assets/marqueelogos/ibisGrey.png"; // grayscale
import "../../App.css";
import AdgreyLogo from "../../assets/marqueelogos/ad.png";
import AdgreyLogo2 from "../../assets/marqueelogos/adgrey.png";
import Catam from "../../assets/marqueelogos/cat.png"
import Catam2 from "../../assets/marqueelogos/catgrey.png"
import Exodu from "../../assets/marqueelogos/Exodus white logo 3.png"
import Exodu2 from "../../assets/marqueelogos/Exodusgrey.png"
import Af from "../../assets/marqueelogos/af.png"
import Af2 from "../../assets/marqueelogos/afGrey.png"
import Novotel from "../../assets/marqueelogos/nov.png"
import Novotel2 from "../../assets/marqueelogos/novgrey.png"
import Phoenix from "../../assets/marqueelogos/phoneix.png"
import Phoenix2 from "../../assets/marqueelogos/phoenixgrey.png"
import Raddison from "../../assets/marqueelogos/radisson.png"
import Raddison2 from "../../assets/marqueelogos/radissongrey.png"
import VR2 from "../../assets/marqueelogos/vr.png"
import VR from "../../assets/marqueelogos/vr.png"
import nexus from "../../assets/marqueelogos/vijaya-logo 1 1.png"
import nexus2 from "../../assets/marqueelogos/vijaya-logo 1 2.png"
import Itc from "../../assets/marqueelogos/itc.png"
import Itc2 from "../../assets/marqueelogos/itcgrey.png"

function ClientsMarquee() {

    const logos = [{
        colorIcon: IbisLogo,
        grayscaleIcon: IbisLogo2
    }, {
        colorIcon: AdgreyLogo,
        grayscaleIcon: AdgreyLogo2
    }, {
        colorIcon: Catam,
        grayscaleIcon: Catam2
    }, {
        colorIcon: Exodu,
        grayscaleIcon: Exodu2
    }, {
        colorIcon: Af,
        grayscaleIcon: Af2
    }, {
        colorIcon: Novotel,
        grayscaleIcon: Novotel2
    }, {
        colorIcon: Phoenix,
        grayscaleIcon: Phoenix2
    }, {
        colorIcon: Raddison,
        grayscaleIcon: Raddison2
    }, {
        colorIcon: VR,
        grayscaleIcon: VR2
    }, {
        colorIcon: nexus,
        grayscaleIcon: nexus2
    }, {
        colorIcon: Itc,
        grayscaleIcon: Itc2
    }]

    return (
        <section className="relative overflow-hidden py-[6rem]">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center relative z-10 mb-[5rem]">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <Users className="w-6 h-6 text-accent animate-pulse" />
                </div>
                <span className="font-cursive text-2xl text-accent mb-2 block">Our Clients</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal heading-gradient">
                    Trusted By
                </h2>
            </div>

            {/* Marquee */}
            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {logos.concat(logos).map((logo, index) => (
                        <div key={index} className="logo-container">
                            <img src={logo.grayscaleIcon} className="mlogo gray" alt="client-logo" />
                            <img src={logo.colorIcon} className="mlogo color" alt="client-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ClientsMarquee;