import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">MobileRepair</h3>
            <p className="text-gray-400">
              Your trusted partner for mobile device repairs and accessories.
            </p>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link to="/book-repair" className="text-gray-400 hover:text-white">Book Repair</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Repair Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@mobilerepair.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9am - 7pm</li>
              <li>Saturday: 10am - 5pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MobileRepair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;