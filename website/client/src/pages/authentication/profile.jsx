import NavigationBar from "../../components/navigation/navbar"
import Footer from "../../components/layout/footer"
import ProfileDetails from "../../components/dataDisplay/profile/profile"

export default function ProfilePage() {
    return (
        <div>
          <main>
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6">
              <div className="max-w-md w-full space-y-8">
                  <ProfileDetails />
              </div>
            </div>
          </main>
      </div>
    )
}