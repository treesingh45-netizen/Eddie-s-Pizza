/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { Craftsmanship } from './components/Craftsmanship';
import { CommunityStories } from './components/CommunityStories';
import { RestaurantHeritage } from './components/RestaurantHeritage';
import { ContactBooking } from './components/ContactBooking';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased bg-brand-ivory text-brand-forest">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Craftsmanship />
        <CommunityStories />
        <RestaurantHeritage />
        <ContactBooking />
      </main>
      <Footer />
    </div>
  );
}
