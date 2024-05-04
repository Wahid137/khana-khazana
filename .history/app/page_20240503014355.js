import CategoryList from "./components/landing/CategoryList";
import HeroSection from "./components/landing/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section class="container py-8">
        <div class="grid grid-cols-12 py-4">
          <CategoryList />

          <div class="col-span-12 md:col-span-9">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">

              <div class="card">
                <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                  <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                  <div class="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ 5.0</span>
                    <span>By: John Doe</span>
                  </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
