import CategoryList from "./components/landing/CategoryList";
import HeroSection from "./components/landing/HeroSection";
import RecipeList from "./components/landing/RecipeList";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <CategoryList />
          <RecipeList />
        </div>
      </section>
    </main>
  );
}
