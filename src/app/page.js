import DetailsNavbarComponent from "../components/detailsnavbar/DetailsNavbarComponent";
import HomeComponent from "../components/home/HomeComponent";
import NavbarComponent from "../components/navbar/NavbarComponent";
import ProfileInfoComponent from "../components/profileinfo/ProfileInfoComponent";
import ProfileNavbarComponent from "../components/profilenavbar/ProfileNavbarComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid md:grid-cols-4 px-8">
        {/* Left Sidebar */}
        <div>
          <div>
            <ProfileNavbarComponent />
          </div>
          <div>
            <ProfileInfoComponent />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 border-r border-l"> 
          <div>
            <NavbarComponent />
          </div>
          <div>
            <HomeComponent />
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          <DetailsNavbarComponent />
        </div>
      </div>
    </div>
  );
}