<template>
  <div>
    <main class="px-[10px] lg:px-[50px] xl:px-[120px] 2xl:px-[280px]">
      <section class="flex flex-col lg:flex-row gap-4 mt-[50px] sm:mt-[100px] mb-16">
        <div class="lg:w-2/5 flex flex-col items-center">
          <div class="w-full md:w-3/5 lg:w-full">
            <div class="relative">
              <img src="/images/mysterybox/large/mysterybox-large-1.png" alt="Mystery box" class="w-full h-full" />
              <div
                class="absolute top-0 right-0 flex sm:gap-2 flex-col items-center justify-center rounded-full bg-primary aspect-square w-fit text-white p-2 sm:p-4"
              >
                <span class="font-bold text-2xl sm:text-4xl">$1.99</span>
                <span class="text-xs sm:text-sm">Original value $500</span>
              </div>
            </div>
            <div class="hidden sm:flex w-full justify-around mt-4">
              <img src="/images/mysterybox/thumbnail/mysterybox-thumbnail-1.png" alt="" />
              <img src="/images/mysterybox/thumbnail/mysterybox-thumbnail-2.png" alt="" />
              <img src="/images/mysterybox/thumbnail/mysterybox-thumbnail-3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="lg:w-3/5">
          <h1 class="base-heading-1">Chance to win a StockX Mystery Box today!</h1>
          <p class="text-xl mb-4">Unleash the Excitement of Mystery Electronics</p>
          <div class="border rounded-2xl p-8">
            <h3 class="font-semibold text-3xl text-center mb-4">Enter details</h3>
            <form @submit.prevent="" class="grid grid-cols-2 gap-4 mb-8">
              <input type="text" class="col-span-2 sm:col-span-1 base-input" placeholder="First name" />
              <input type="text" class="col-span-2 sm:col-span-1 base-input" placeholder="Last name" />
              <input type="text" class="col-span-2 base-input" placeholder="Street" />
              <input type="text" class="col-span-2 sm:col-span-1 base-input" placeholder="Postal code" />
              <input type="text" class="col-span-2 sm:col-span-1 base-input" placeholder="City" />
              <input type="text" class="col-span-2 base-input" placeholder="Phone number" />
              <input type="text" class="col-span-2 base-input" placeholder="E-mail" />
              <button class="col-span-2 base-btn">PROCEED TO PAYMENT</button>
            </form>
            <div class="flex justify-center gap-4">
              <img src="/images/safety-proof/McAfee-secure.png" alt="" />
              <img src="/images/safety-proof/SSL-encryption.png" alt="" />
              <img src="/images/safety-proof/TRUSTe-verified.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 class="base-heading-2 text-center mb-2">
          Top Tech Mystery Box <br />
          at Unbeatable Prices
        </h2>
        <div class="text-primary font-bold flex justify-center mb-8">
          <p class="px-2 border-r-2 border-primary">Fast shipping</p>
          <p class="px-2 border-r-2 border-primary">Easy returns</p>
          <p class="px-2">Special discounts for students</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div class="flex items-center justify-center">
            <img src="/images/mysterybox/large/mysterybox-large-2.png" alt="Mystery box" class="rounded-2xl" />
          </div>
          <div class="flex flex-col justify-center">
            <h3 class="base-heading-3 mb-8">
              Curious about the <span class="text-primary">StockX</span> <br />
              Mystery Box?
            </h3>
            <p class="mb-4">
              Experience the thrill of unboxing cutting-edge gadgets with Stockx Mystery Boxes. Each box is a treasure trove of high-quality
              electronics, handpicked to elevate your tech game.
            </p>
            <p>
              Expect the unexpected! Our boxes are packed with the latest gadgets, from smartphones to gaming consoles, ensuring you get the best tech
              surprises every time.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div class="flex flex-col justify-center order-1 md:order-[0]">
            <h3 class="base-heading-3 mb-8">Why is everyone buzzing about these boxes?</h3>
            <p class="mb-4">
              StockX Mystery Boxes are not just about products; they’re about the experience. Imagine the excitement of unveiling top-tier electronics
              at a fraction of the cost.
            </p>
            <p>
              Our boxes include a variety of premium tech items, making it a must-have for every tech enthusiast. Join the buzz and see why everyone
              is raving about the unbeatable value and surprise factor of Stockx Mystery Boxes!
            </p>
          </div>
          <div class="flex justify-center items-center">
            <img src="/images/mysterybox/large/mysterybox-large-3.png" alt="Mystery box" class="rounded-2xl" />
          </div>
        </div>
      </section>
    </main>

    <section>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 bg-lightGrey mb-8 px-2 md:px-4 lg:px-8 py-4">
        <div>
          <p class="font-semibold mb-1">How can I win?</p>
          <p class="text-xs leading-6">
            Thanks to your membership, you also participate in our contest to win the iPhone15. We sellect a winner among every 600 participants. The
            next winner will be selected on 06.10.2023, and will be notified directly by e-mail. If the reward is out of stock, the winner will
            receive a similar product of equal or greater value instead.
          </p>
        </div>
        <div>
          <p class="font-semibold mb-1">No hidden fees?</p>
          <p class="text-xs leading-6">
            We ensure that our members are provided with a detailed history of transactions so that they know exactly what they are paying for. Credit
            card information is only required to facilitate future purchases. There will be no charges on your credit card statement if you do not
            upgrade to PREMIUM membership and do not make a purchase.
          </p>
        </div>
        <div>
          <p class="font-semibold mb-1">Why do we need your billing information?</p>
          <p class="text-xs leading-6">
            By joining this service, you will receive a 5-day trial of our partner's program. If you continue with a subscription beyond the 5-day
            trial period, you will be charged an amount on your credit card which varies depending on the choice of the tariff. When your contribution
            is deducted from your credit card or other payment method, you will have access to these services which are reserved exclusively for
            members of our partner's website.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center mb-4">
        <p class="mb-2">We accept the following credit cards</p>
        <img src="/images/cards.png" alt="" />
      </div>
    </section>
  </div>
</template>
