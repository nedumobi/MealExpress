/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { StarIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 1,
    name: "Curry Rice",
    price: "£14:99",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGN1cnJ5JTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Fish & Chips",
    price: "£9:99",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://images.unsplash.com/photo-1565733618599-cb82f14f34ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Burger",
    price: "£7:99",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Assorted Sea Food",
    price: "£19.99",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://images.unsplash.com/photo-1618055301293-494ab4c71f9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 5,
    name: "Curry Rice",
    price: "£14:99",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 6,
    name: "Fish & Chips",
    price: "£9:99",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 7,
    name: "Burger",
    price: "£7:99",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://images.unsplash.com/photo-1665469222949-3de88d37ee5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 8,
    name: "Pizza",
    price: "£12.99",
    rating: 4,
    reviewCount: 51,
    imageSrc:
      "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Productlist() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.reviewCount} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
