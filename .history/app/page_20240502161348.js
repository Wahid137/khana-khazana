
export default function Home() {
  return (
    <main>
      <section class="container">
        <div
          class="py-4 bg-[url('./assets/images/cover.png')] rounded-lg p-4 md:p-12 min-h-[450px] bg-cover grid place-items-center grid-cols-12">
          <div class="col-span-12 md:col-span-6">
            <h1 class="font-bold text-3xl md:text-5xl text-white">
              Choose from thousands of recipes
            </h1>
            <p class="text-white my-4">Appropriately integrate technically sound value with scalable infomediaries
              negotiate
              sustainable strategic
              theme areas</p>
          </div>
        </div>
      </section>

      <section class="container py-8">
        <div class="grid grid-cols-12 py-4">
          <div class="col-span-12 md:col-span-3">
            <h3 class="font-bold text-xl">Recipes</h3>
            <ul class="pl-2 my-6 space-y-4 text-gray-500 text-sm">
              <li>
                <a href="#">Morning Bliss Café</a>
              </li>

              <li>
                <a href="#">Sunrise Bites Kitchen</a>
              </li>

              <li>
                <a href="#">Brunch Haven Delights</a>
              </li>

              <li>
                <a href="#">Rise & Dine Eatery</a>
              </li>

              <li>
                <a href="#">Breakfast Oasis Junction</a>
              </li>
            </ul>
          </div>

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

              <div class="card">
                <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                  <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                  <div class="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ 5.0</span>
                    <span>By: John Doe</span>
                  </div>
              </div>

              <div class="card">
                <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                  <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                  <div class="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ 5.0</span>
                    <span>By: John Doe</span>
                  </div>
              </div>

              <div class="card">
                <img src="https://source.unsplash.com/-YHSwy6uqvk/300x160" class="rounded-md" alt="">
                  <h4 class="my-2">Chef John's Turkey Sloppy Joes</h4>
                  <div class="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ 5.0</span>
                    <span>By: John Doe</span>
                  </div>
              </div>

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
