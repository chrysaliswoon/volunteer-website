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
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">                
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

