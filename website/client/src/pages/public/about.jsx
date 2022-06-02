import React from "react";
import AboutSection from "../../components/layout/about";
import NavigationBar from "../../components/navigation/navbar";
import Footer from "../../components/layout/footer";

export default function AboutPage() {
    return (
        <div>
        <div>
          <header>
            <NavigationBar />
          </header>
          <div>
            <main>
              <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6">
                    <AboutSection />
                </div>
            </main>
          </div>
          <div>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    );
};

