import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, trash } from "@fortawesome/fontawesome-svg-core/import.macro";

const CardsDetails = () => {
  return (
    <>
      <section class="py-10">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-col md:flex-row gap-4">
            <main class="md:w-3/4">
              <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <div class="flex flex-wrap lg:flex-row gap-5  mb-4">
                  <div class="w-full lg:w-2/5 xl:w-2/4">
                    <figure class="flex leading-5">
                      <div>
                        <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                          <img
                            src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                            alt="Title"
                          />
                        </div>
                      </div>
                      <figcaption class="ml-3">
                        <p>
                          <a href="#" class="hover:text-blue-600">
                            Massala Theoryy
                          </a>
                        </p>
                        <p class="mt-1 text-gray-400">
                          Dishes: Bengaliana Voj, Briyani, Fast Food
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                  <div class="">
                    <div class="w-24 relative">
                      <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
                        <svg
                          width="22"
                          height="22"
                          class="fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M7 10l5 5 5-5H7z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div>
                    <div class="leading-5">
                      <p class="font-semibold not-italic">
                        <span className="mr-1">&#2547;</span>650.00
                      </p>
                      <small class="text-gray-400">
                        Oder Review:
                        <span className="mr-1 ml-1">1175</span>
                      </small>
                    </div>
                  </div>
                  <div class="flex-auto">
                    <div class="float-right">
                      <FontAwesomeIcon icon={solid("trash")} />
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <h6 class="font-bold">Free Delivery within 1-2 weeks</h6>
                <p class="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </p>
              </article>
            </main>
            <aside class="md:w-1/4">
              <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul class="mb-5">
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>Total price:</span>
                    <span>$245.97</span>
                  </li>
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>Discount:</span>
                    <span class="text-green-500">- $60.00</span>
                  </li>
                  <li class="flex justify-between text-gray-600  mb-1">
                    <span>TAX:</span>
                    <span>$14.00</span>
                  </li>
                  <li class="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>$420.00</span>
                  </li>
                </ul>

                <a
                  class="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700"
                  href="#"
                >
                  Checkout
                </a>

                <a
                  class="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                  href="#"
                >
                  Back to shop
                </a>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardsDetails;
