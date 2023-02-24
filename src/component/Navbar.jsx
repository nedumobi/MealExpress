export default function Navbar() {
  return (
    <header className="bg-gray-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-orange-600 py-2 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Meal Express</span>
              <img
                className="h-14"
                src="./images/melogo.png"
                alt="Meal Express"
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-orange-600 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-orange-600 hover:bg-orange-50"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
