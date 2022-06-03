import NavigationBar from "../../components/navigation/navbar";
import Footer from "../../components/layout/footer";
import ProfileDetails from "../../components/dataDisplay/profile/profile";

export default function ProfilePage() {
  return (
    <div>
      <main>
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <ProfileDetails />
        </div>
      </main>
    </div>
  );
}
