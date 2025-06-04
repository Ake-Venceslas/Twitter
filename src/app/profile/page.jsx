import ProfileInfoComponent from '@/components/profileinfo/ProfileInfoComponent';
import ProfileComponent from '@/components/profilepage/ProfileComponent';
import DetailsNavbarComponent from '@/components/detailsnavbar/DetailsNavbarComponent';
import ProfileNavbarComponent from '@/components/profilenavbar/ProfileNavbarComponent';
import react from 'React'

const Page = () => {
    return(
     <>
     
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
            <ProfileComponent />
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          <DetailsNavbarComponent />
        </div>
      </div>
    </div>
     
     </>
    )
}

export default Page;